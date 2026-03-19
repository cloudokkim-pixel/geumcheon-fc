import { getGalleryBucketName, getSupabasePublicEnv, getSupabaseServiceEnv } from "@/lib/supabase/env";

type RequestOptions = {
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  query?: Record<string, string | number | boolean | null | undefined>;
  body?: unknown;
  headers?: Record<string, string>;
  prefer?: string;
  useServiceRole?: boolean;
};

export class SupabaseRequestError extends Error {
  status: number;
  errorText: string;

  constructor(status: number, errorText: string) {
    super(`Supabase request failed: ${status} ${errorText}`);
    this.name = "SupabaseRequestError";
    this.status = status;
    this.errorText = errorText;
  }
}

function buildUrl(pathname: string, query?: RequestOptions["query"]) {
  const { url } = getSupabasePublicEnv();
  const fullUrl = new URL(pathname, url);

  Object.entries(query || {}).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") {
      return;
    }

    fullUrl.searchParams.set(key, String(value));
  });

  return fullUrl.toString();
}

function getAuthHeaders(useServiceRole = true) {
  if (useServiceRole) {
    const { serviceRoleKey } = getSupabaseServiceEnv();
    return {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
    } as Record<string, string>;
  }

  const { anonKey } = getSupabasePublicEnv();
  return {
    apikey: anonKey,
    Authorization: `Bearer ${anonKey}`,
  } as Record<string, string>;
}

export async function supabaseRestRequest<T>(pathname: string, options: RequestOptions = {}) {
  const response = await fetch(buildUrl(pathname, options.query), {
    method: options.method || "GET",
    headers: {
      ...getAuthHeaders(options.useServiceRole ?? true),
      ...(options.body !== undefined ? { "Content-Type": "application/json" } : {}),
      ...(options.prefer ? { Prefer: options.prefer } : {}),
      ...options.headers,
    } as HeadersInit,
    body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new SupabaseRequestError(response.status, errorText);
  }

  if (response.status === 204) {
    return null as T;
  }

  return (await response.json()) as T;
}

export function isMissingGallerySchemaError(error: unknown) {
  if (!(error instanceof SupabaseRequestError)) {
    return false;
  }

  return (
    error.status === 404 &&
    error.errorText.includes("PGRST205") &&
    (error.errorText.includes("public.galleries") || error.errorText.includes("public.gallery_images"))
  );
}

export function isGalleryPermissionError(error: unknown) {
  if (!(error instanceof SupabaseRequestError)) {
    return false;
  }

  return error.errorText.includes("\"42501\"") || error.errorText.includes("permission denied for table galleries");
}

export function isGallerySchemaMismatchError(error: unknown) {
  if (!(error instanceof SupabaseRequestError)) {
    return false;
  }

  return error.errorText.includes("\"42703\"") || error.errorText.includes("column galleries.");
}

export function toGallerySetupError(error: unknown) {
  if (isMissingGallerySchemaError(error)) {
    return new Error(
      "Supabase gallery tables are not set up yet. Run supabase/sql/001_gallery_setup.sql in the Supabase SQL Editor first.",
    );
  }

  if (isGalleryPermissionError(error)) {
    return new Error(
      "Supabase gallery permissions are not configured yet. Re-run supabase/sql/001_gallery_setup.sql so grants and RLS policies are applied.",
    );
  }

  if (isGallerySchemaMismatchError(error)) {
    return new Error(
      "Supabase gallery schema does not match the app yet. Re-run supabase/sql/001_gallery_setup.sql so missing columns are added.",
    );
  }

  return error instanceof Error ? error : new Error("Unknown Supabase error");
}

export async function uploadToSupabaseStorage(filePath: string, file: File) {
  const { url } = getSupabasePublicEnv();
  const { serviceRoleKey } = getSupabaseServiceEnv();
  const bucket = getGalleryBucketName();
  const bytes = Buffer.from(await file.arrayBuffer());

  const uploadUrl = new URL(`/storage/v1/object/${bucket}/${filePath}`, url).toString();
  const response = await fetch(uploadUrl, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": file.type || "application/octet-stream",
      "x-upsert": "true",
    },
    body: bytes,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Supabase storage upload failed: ${response.status} ${errorText}`);
  }

  return {
    path: filePath,
    imageUrl: new URL(`/storage/v1/object/public/${bucket}/${filePath}`, url).toString(),
  };
}

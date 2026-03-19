const requiredPublicEnv = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
};

export function getSupabasePublicEnv() {
  if (!requiredPublicEnv.url || !requiredPublicEnv.anonKey) {
    throw new Error(
      "Supabase environment variables are missing. Check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    );
  }

  return requiredPublicEnv;
}

export function isMissingSupabaseEnvError(error: unknown) {
  if (!(error instanceof Error)) {
    return false;
  }

  return (
    error.message.includes("Supabase environment variables are missing") ||
    error.message.includes("Supabase server environment variables are missing")
  );
}

export function getSupabaseServiceEnv() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!requiredPublicEnv.url || !serviceRoleKey) {
    throw new Error(
      "Supabase server environment variables are missing. Check NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
    );
  }

  return {
    url: requiredPublicEnv.url,
    serviceRoleKey,
  };
}

export function getGalleryBucketName() {
  return process.env.SUPABASE_GALLERY_BUCKET || "gallery";
}

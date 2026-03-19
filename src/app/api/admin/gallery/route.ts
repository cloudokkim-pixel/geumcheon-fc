import { createGallery, listAdminGalleries } from "@/lib/gallery/store";
import { requireAdminSession } from "@/lib/auth/guard";
import { jsonError, parseStatus } from "@/lib/gallery/api";
import type { GalleryCategory } from "@/types/gallery";

function isGalleryCategory(value: unknown): value is GalleryCategory {
  return ["training", "match", "event", "etc"].includes(String(value));
}

export async function GET() {
  try {
    requireAdminSession();

    return Response.json({
      items: await listAdminGalleries(),
    });
  } catch (error) {
    return jsonError(
      error instanceof Error && error.message === "UNAUTHORIZED" ? "Unauthorized." : "Failed to load admin gallery list.",
      error instanceof Error && error.message === "UNAUTHORIZED" ? 401 : 500,
    );
  }
}

export async function POST(request: Request) {
  try {
    requireAdminSession();

    const body = await request.json();
    const title = typeof body.title === "string" ? body.title.trim() : "";
    const description = typeof body.description === "string" ? body.description : null;
    const category = body.category;
    const status = parseStatus(body.status);
    const images = Array.isArray(body.images) ? body.images : [];

    if (!title) {
      return jsonError("Title is required.");
    }

    if (!isGalleryCategory(category)) {
      return jsonError("Valid category is required.");
    }

    if (!status) {
      return jsonError("Valid status is required.");
    }

    const created = await createGallery({
      title,
      description,
      category,
      status,
      images,
    });

    return Response.json(created, { status: 201 });
  } catch (error) {
    return jsonError(
      error instanceof Error && error.message === "UNAUTHORIZED" ? "Unauthorized." : "Failed to create gallery.",
      error instanceof Error && error.message === "UNAUTHORIZED" ? 401 : 500,
    );
  }
}

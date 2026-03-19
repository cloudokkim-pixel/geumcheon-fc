import { deleteGallery, getAdminGalleryById, updateGallery } from "@/lib/gallery/store";
import { requireAdminSession } from "@/lib/auth/guard";
import { jsonError, parseStatus } from "@/lib/gallery/api";
import type { GalleryCategory } from "@/types/gallery";

type RouteProps = {
  params: {
    id: string;
  };
};

type GalleryImagePayload = {
  id?: string;
  imageUrl: string;
  sortOrder?: number;
  isThumbnail?: boolean;
};

function isGalleryCategory(value: unknown): value is GalleryCategory {
  return ["training", "match", "event", "etc"].includes(String(value));
}

export async function GET(_: Request, { params }: RouteProps) {
  try {
    requireAdminSession();

    const item = await getAdminGalleryById(params.id);

    if (!item) {
      return jsonError("Gallery not found.", 404);
    }

    return Response.json(item);
  } catch (error) {
    return jsonError(
      error instanceof Error && error.message === "UNAUTHORIZED" ? "Unauthorized." : "Failed to load gallery.",
      error instanceof Error && error.message === "UNAUTHORIZED" ? 401 : 500,
    );
  }
}

export async function PUT(request: Request, { params }: RouteProps) {
  try {
    requireAdminSession();

    const body = await request.json();
    const payload: {
      title?: string;
      description?: string | null;
      category?: GalleryCategory;
      status?: "draft" | "private" | "published";
      images?: GalleryImagePayload[];
    } = {};

    if (body.title !== undefined) {
      const title = typeof body.title === "string" ? body.title.trim() : "";

      if (!title) {
        return jsonError("Title must not be empty.");
      }

      payload.title = title;
    }

    if (body.description !== undefined) {
      payload.description = typeof body.description === "string" ? body.description : null;
    }

    if (body.category !== undefined) {
      if (!isGalleryCategory(body.category)) {
        return jsonError("Valid category is required.");
      }

      payload.category = body.category;
    }

    if (body.status !== undefined) {
      const status = parseStatus(body.status);

      if (!status) {
        return jsonError("Valid status is required.");
      }

      payload.status = status;
    }

    if (body.images !== undefined) {
      payload.images = Array.isArray(body.images) ? (body.images as GalleryImagePayload[]) : [];
    }

    const updated = await updateGallery(params.id, payload);

    if (!updated) {
      return jsonError("Gallery not found.", 404);
    }

    return Response.json(updated);
  } catch (error) {
    return jsonError(
      error instanceof Error && error.message === "UNAUTHORIZED" ? "Unauthorized." : "Failed to update gallery.",
      error instanceof Error && error.message === "UNAUTHORIZED" ? 401 : 500,
    );
  }
}

export async function DELETE(request: Request, { params }: RouteProps) {
  try {
    requireAdminSession();

    const { searchParams } = new URL(request.url);
    const permanent = searchParams.get("permanent") === "true";
    const deleted = await deleteGallery(params.id, permanent);

    if (!deleted) {
      return jsonError("Gallery not found.", 404);
    }

    return Response.json({
      success: true,
      deletedType: permanent ? "hard" : "soft",
    });
  } catch (error) {
    return jsonError(
      error instanceof Error && error.message === "UNAUTHORIZED" ? "Unauthorized." : "Failed to delete gallery.",
      error instanceof Error && error.message === "UNAUTHORIZED" ? 401 : 500,
    );
  }
}

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
      return jsonError("갤러리를 찾을 수 없습니다.", 404);
    }

    return Response.json(item);
  } catch (error) {
    return jsonError(
      error instanceof Error && error.message === "UNAUTHORIZED" ? "로그인이 필요합니다." : "갤러리 정보를 불러오지 못했습니다.",
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
        return jsonError("제목은 비워둘 수 없습니다.");
      }

      payload.title = title;
    }

    if (body.description !== undefined) {
      payload.description = typeof body.description === "string" ? body.description : null;
    }

    if (body.category !== undefined) {
      if (!isGalleryCategory(body.category)) {
        return jsonError("올바른 카테고리를 선택해 주세요.");
      }

      payload.category = body.category;
    }

    if (body.status !== undefined) {
      const status = parseStatus(body.status);

      if (!status) {
        return jsonError("올바른 공개 상태를 선택해 주세요.");
      }

      payload.status = status;
    }

    if (body.images !== undefined) {
      payload.images = Array.isArray(body.images) ? (body.images as GalleryImagePayload[]) : [];
    }

    const updated = await updateGallery(params.id, payload);

    if (!updated) {
      return jsonError("갤러리를 찾을 수 없습니다.", 404);
    }

    return Response.json(updated);
  } catch (error) {
    return jsonError(
      error instanceof Error && error.message === "UNAUTHORIZED" ? "로그인이 필요합니다." : "갤러리 수정에 실패했습니다.",
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
      return jsonError("갤러리를 찾을 수 없습니다.", 404);
    }

    return Response.json({
      success: true,
      deletedType: permanent ? "hard" : "soft",
    });
  } catch (error) {
    return jsonError(
      error instanceof Error && error.message === "UNAUTHORIZED" ? "로그인이 필요합니다." : "갤러리 삭제에 실패했습니다.",
      error instanceof Error && error.message === "UNAUTHORIZED" ? 401 : 500,
    );
  }
}

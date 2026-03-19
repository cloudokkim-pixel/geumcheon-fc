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
      error instanceof Error && error.message === "UNAUTHORIZED" ? "로그인이 필요합니다." : "관리자 갤러리 목록을 불러오지 못했습니다.",
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
      return jsonError("제목은 필수입니다.");
    }

    if (!isGalleryCategory(category)) {
      return jsonError("올바른 카테고리를 선택해 주세요.");
    }

    if (!status) {
      return jsonError("올바른 공개 상태를 선택해 주세요.");
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
      error instanceof Error && error.message === "UNAUTHORIZED" ? "로그인이 필요합니다." : "갤러리 생성에 실패했습니다.",
      error instanceof Error && error.message === "UNAUTHORIZED" ? 401 : 500,
    );
  }
}

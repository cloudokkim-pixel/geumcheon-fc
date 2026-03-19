import { jsonError } from "@/lib/gallery/api";
import { getPublicGalleryBySlug } from "@/lib/gallery/store";

type RouteProps = {
  params: {
    slug: string;
  };
};

export async function GET(_: Request, { params }: RouteProps) {
  try {
    const gallery = await getPublicGalleryBySlug(params.slug);

    if (!gallery) {
      return jsonError("갤러리를 찾을 수 없습니다.", 404);
    }

    return Response.json(gallery);
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : "갤러리 상세 정보를 불러오지 못했습니다.", 500);
  }
}

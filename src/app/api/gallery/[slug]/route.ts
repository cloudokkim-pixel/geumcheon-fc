import { getPublicGalleryBySlug } from "@/lib/gallery/store";
import { jsonError } from "@/lib/gallery/api";

type RouteProps = {
  params: {
    slug: string;
  };
};

export async function GET(_: Request, { params }: RouteProps) {
  try {
    const gallery = await getPublicGalleryBySlug(params.slug);

    if (!gallery) {
      return jsonError("Gallery not found.", 404);
    }

    return Response.json(gallery);
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : "Failed to load gallery detail.", 500);
  }
}

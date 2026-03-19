import { listPublicGalleries } from "@/lib/gallery/store";
import { parseCategory, parsePositiveNumber } from "@/lib/gallery/api";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parsePositiveNumber(searchParams.get("page"), 1);
    const pageSize = parsePositiveNumber(searchParams.get("pageSize"), 9);
    const category = parseCategory(searchParams.get("category"));
    const search = searchParams.get("search");

    return Response.json(
      await listPublicGalleries({
        page,
        pageSize,
        category,
        search,
      }),
    );
  } catch (error) {
    return Response.json(
      {
        error: error instanceof Error ? error.message : "Failed to load gallery list.",
      },
      { status: 500 },
    );
  }
}

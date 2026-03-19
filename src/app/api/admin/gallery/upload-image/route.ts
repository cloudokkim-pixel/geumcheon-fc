import { randomUUID } from "crypto";
import { requireAdminSession } from "@/lib/auth/guard";
import { jsonError } from "@/lib/gallery/api";
import { uploadToSupabaseStorage } from "@/lib/supabase/rest";

export async function POST(request: Request) {
  try {
    requireAdminSession(request.headers.get("cookie"));
  } catch {
    return jsonError("로그인이 필요합니다.", 401);
  }

  try {
    const formData = await request.formData();
    const image = formData.get("image");

    if (!(image instanceof File)) {
      return jsonError("이미지 파일을 선택해 주세요.");
    }

    const extension = image.name.split(".").pop()?.toLowerCase() || "jpg";
    const fileName = `${Date.now()}-${randomUUID()}.${extension}`;
    const uploaded = await uploadToSupabaseStorage(`gallery/${fileName}`, image);

    return Response.json({
      imageUrl: uploaded.imageUrl,
      fileName,
      size: image.size,
      type: image.type,
    });
  } catch (error) {
    return jsonError(error instanceof Error ? error.message : "이미지 업로드에 실패했습니다.", 500);
  }
}

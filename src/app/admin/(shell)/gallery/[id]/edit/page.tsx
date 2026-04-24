import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdminGalleryForm from "@/components/admin-gallery-form";
import { getAdminGalleryById } from "@/lib/gallery/store";

export const metadata: Metadata = { title: "갤러리 수정 | G.S.S.C Admin" };

type Props = { params: { id: string } };

export default async function AdminGalleryEditPage({ params }: Props) {
  const item = await getAdminGalleryById(params.id);

  if (!item) notFound();

  return (
    <div>
      <div className="flex items-end justify-between border-b border-[#e8e8e8] bg-white px-4 py-5 sm:px-6">
        <div>
          <p className="font-['Barlow_Condensed',sans-serif] text-[10px] font-bold uppercase tracking-[0.18em] text-[#cc2222]">
            Gallery
          </p>
          <h1 className="mt-1 font-['Barlow_Condensed',sans-serif] text-[34px] font-black uppercase leading-none tracking-[0.01em] text-black sm:text-[40px]">
            게시물 수정
          </h1>
        </div>
        <Link
          href="/admin/gallery"
          className="text-[13px] text-[#888] transition hover:text-[#cc2222]"
        >
          ← 목록으로
        </Link>
      </div>

      <div className="p-3.5 sm:p-6">
        <AdminGalleryForm mode="edit" initialValue={item} />
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import AdminGalleryForm from "@/components/admin-gallery-form";

export const metadata: Metadata = { title: "새 갤러리 등록 | G.C.S.C Admin" };

export default function AdminGalleryNewPage() {
  return (
    <div>
      <div className="flex items-end justify-between border-b border-[#e8e8e8] bg-white px-4 py-5 sm:px-6">
        <div>
          <p className="font-['Barlow_Condensed',sans-serif] text-[10px] font-bold uppercase tracking-[0.18em] text-[#cc2222]">
            Gallery
          </p>
          <h1 className="mt-1 font-['Barlow_Condensed',sans-serif] text-[34px] font-black uppercase leading-none tracking-[0.01em] text-black sm:text-[40px]">
            새 게시물 작성
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
        <AdminGalleryForm mode="create" />
      </div>
    </div>
  );
}

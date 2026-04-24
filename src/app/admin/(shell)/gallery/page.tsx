import type { Metadata } from "next";
import Link from "next/link";
import { listAdminGalleries } from "@/lib/gallery/store";
import { getGalleryCategoryLabel } from "@/lib/gallery/mock-data";

export const metadata: Metadata = { title: "갤러리 관리 | G.S.S.C Admin" };

const STATUS_LABELS: Record<string, string> = {
  published: "공개",
  draft: "임시저장",
  private: "비공개",
};

const STATUS_CHIP: Record<string, string> = {
  published: "bg-[rgba(77,204,60,0.08)] text-[#1a7a3e]",
  draft: "bg-[#f2f2f2] text-[#888]",
  private: "bg-[rgba(196,149,80,0.08)] text-[#8a6020]",
};

export default async function AdminGalleryPage() {
  const items = await listAdminGalleries();

  return (
    <div>
      {/* PAGE HEADER */}
      <div className="flex items-end justify-between border-b border-[#e8e8e8] bg-white px-4 py-5 sm:px-6">
        <div>
          <p className="font-['Barlow_Condensed',sans-serif] text-[10px] font-bold uppercase tracking-[0.18em] text-[#cc2222]">
            Content Management
          </p>
          <h1 className="mt-1 font-['Barlow_Condensed',sans-serif] text-[34px] font-black uppercase leading-none tracking-[0.01em] text-black sm:text-[40px]">
            갤러리 관리
          </h1>
        </div>
        <Link
          href="/admin/gallery/new"
          className="rounded-[8px] bg-[#cc2222] px-5 py-2.5 font-['Barlow_Condensed',sans-serif] text-[13px] font-bold uppercase tracking-[0.04em] text-white transition hover:bg-[#b01c1c]"
        >
          + 새 게시물
        </Link>
      </div>

      <div className="p-3.5 sm:p-6">
        <div className="overflow-hidden rounded-[14px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
          {/* Header row */}
          <div className="flex items-center gap-3 border-b border-[#e8e8e8] px-4 py-3">
            <span className="font-['Barlow_Condensed',sans-serif] text-[15px] font-black uppercase tracking-[0.04em] text-black">
              Gallery
            </span>
            <span className="text-[11px] font-medium text-[#888]">
              {items.length}건
            </span>
          </div>

          {items.length === 0 ? (
            <div className="px-4 py-10 text-center text-[13px] text-[#888]">
              등록된 게시물이 없습니다.
            </div>
          ) : (
            items.map((item) => (
              <Link
                key={item.id}
                href={`/admin/gallery/${item.id}/edit`}
                className="flex items-center gap-3 border-b border-[#e8e8e8] px-4 py-3 transition last:border-b-0 hover:bg-[#f2f2f2] active:bg-[#f2f2f2]"
              >
                {/* Title + meta */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[14px] font-semibold leading-snug text-black">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-[11px] text-[#888]">
                    {getGalleryCategoryLabel("ko", item.category)} · {item.createdAt.slice(0, 10)}
                  </p>
                </div>

                {/* Status chip */}
                <span
                  className={`shrink-0 rounded-[20px] px-2.5 py-[3px] font-['Barlow_Condensed',sans-serif] text-[10px] font-bold uppercase tracking-[0.04em] ${
                    STATUS_CHIP[item.status] ?? "bg-[#f2f2f2] text-[#888]"
                  }`}
                >
                  {STATUS_LABELS[item.status] ?? item.status}
                </span>

                {/* Arrow */}
                <span className="shrink-0 text-[#bbb]">›</span>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

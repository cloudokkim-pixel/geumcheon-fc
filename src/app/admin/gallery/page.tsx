import Link from "next/link";
import GSSCHeader from "@/components/GSSCHeader";
import { getGalleryCategoryLabel } from "@/lib/gallery/mock-data";
import { listAdminGalleries } from "@/lib/gallery/store";

export default async function AdminGalleryPage() {
  const items = await listAdminGalleries();

  return (
    <div className="min-h-screen bg-transparent text-[#f5f5f7]">
      <GSSCHeader />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#cc2222]">Admin Gallery</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-[#f5f5f7]">갤러리 관리자</h1>
          </div>
          <Link
            href="/admin/gallery/new"
            className="inline-flex h-12 items-center justify-center rounded-[2px] bg-[#cc2222] px-6 text-sm font-bold text-white"
          >
            새 게시글 작성
          </Link>
        </div>

        <div className="overflow-hidden rounded-[14px] border border-[#222] bg-[#1c1c1e]">
          <div className="grid grid-cols-[1.8fr_0.8fr_0.8fr_0.9fr_0.9fr] gap-4 border-b border-[#222] px-6 py-4 text-sm text-[#888890]">
            <span>제목</span>
            <span>상태</span>
            <span>카테고리</span>
            <span>생성일</span>
            <span>수정일</span>
          </div>

          {items.length === 0 ? (
            <div className="px-6 py-10 text-sm text-[#888890]">등록된 게시글이 없습니다.</div>
          ) : (
            items.map((item) => (
              <Link
                key={item.id}
                href={`/admin/gallery/${item.id}/edit`}
                className="grid grid-cols-[1.8fr_0.8fr_0.8fr_0.9fr_0.9fr] gap-4 border-b border-[#222] px-6 py-5 text-sm text-[#c0c0c5] transition hover:bg-white/5"
              >
                <span className="font-medium text-[#f5f5f7]">{item.title}</span>
                <span>{item.status}</span>
                <span>{getGalleryCategoryLabel("ko", item.category)}</span>
                <span>{item.createdAt.slice(0, 10)}</span>
                <span>{item.updatedAt.slice(0, 10)}</span>
              </Link>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

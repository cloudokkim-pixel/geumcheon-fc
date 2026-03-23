import type { Metadata } from "next";
import GSSCHeader from "@/components/GSSCHeader";
import Footer from "@/components/Footer";
import GalleryPageContent from "@/components/gallery-page-content";
import { parseCategory, parsePositiveNumber } from "@/lib/gallery/api";
import { listPublicGalleries } from "@/lib/gallery/store";

type GalleryPageProps = {
  searchParams?: {
    page?: string;
    category?: string;
    search?: string;
  };
};

export const metadata: Metadata = {
  title: "갤러리 | 서울금천축구클럽 G.C.S.C",
  description: "금천축구클럽의 훈련, 경기, 행사, 기타 기록을 한 곳에서 모아볼 수 있는 갤러리입니다.",
};

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const page = parsePositiveNumber(searchParams?.page || null, 1);
  const category = parseCategory(searchParams?.category || null);
  const search = searchParams?.search?.trim() || "";
  const data = await listPublicGalleries({
    page,
    pageSize: 9,
    category,
    search,
  });

  return (
    <div className="min-h-screen bg-transparent text-[#f5f5f7]">
      <GSSCHeader />

      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#cc2222]">Gallery</p>
          <h1 className="mt-3 text-[clamp(2rem,7vw,3.375rem)] font-black uppercase leading-tight tracking-tight text-[#f5f5f7]">
            갤러리
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-[1.7] text-[#c0c0c5]">
            훈련, 경기, 행사, 기타 기록을 통해 금천축구클럽의 현장 분위기와 팀의 흐름을 한눈에 볼 수 있습니다.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <GalleryPageContent items={data.items} pagination={data.pagination} category={category} search={search} />
      </main>

      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import GSSCHeader from "@/components/GSSCHeader";
import Footer from "@/components/Footer";
import GalleryPageContent from "@/components/gallery-page-content";
import { parseAgeGroup, parseCategory, parsePositiveNumber } from "@/lib/gallery/api";
import { listPublicGalleries } from "@/lib/gallery/store";

type GalleryPageProps = {
  searchParams?: {
    page?: string;
    category?: string;
    search?: string;
    ageGroup?: string;
  };
};

export const metadata: Metadata = {
  title: "갤러리 | 서울금천축구클럽 G.C.S.C",
  description: "금천축구클럽의 훈련, 경기, 행사, 기타 기록을 한 곳에서 모아볼 수 있는 갤러리입니다.",
};

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const page = parsePositiveNumber(searchParams?.page || null, 1);
  const category = parseCategory(searchParams?.category || null);
  const ageGroup = parseAgeGroup(searchParams?.ageGroup || null);
  const search = searchParams?.search?.trim() || "";
  const data = await listPublicGalleries({
    page,
    pageSize: 9,
    category,
    search,
    ageGroup,
  });

  return (
    <div className="min-h-screen bg-transparent text-[#f5f5f7]">
      <GSSCHeader />

      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed',sans-serif] text-sm font-bold uppercase tracking-[0.15em] text-[#cc2222]">
            Gallery · G.S.S.C
          </p>
          <h1 className="mt-3 font-['Barlow_Condensed',sans-serif] text-[clamp(2.5rem,8vw,4rem)] font-black uppercase leading-[1.0] tracking-tight text-[#f5f5f7]">
            GALLERY
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-[1.7] text-[#c0c0c5]">
            훈련과 경기, 그 모든 순간을 기록합니다.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <GalleryPageContent items={data.items} pagination={data.pagination} category={category} ageGroup={ageGroup} search={search} />
      </main>

      <Footer />
    </div>
  );
}

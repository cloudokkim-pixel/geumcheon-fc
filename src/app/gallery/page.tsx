import type { Metadata } from "next";
import GSSCHeader from "@/components/GSSCHeader";
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
  title: "Gallery | Geumcheon Soccer Club",
  description: "Gallery pages for Geumcheon Soccer Club.",
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
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <GalleryPageContent items={data.items} pagination={data.pagination} category={category} search={search} />
      </main>
    </div>
  );
}

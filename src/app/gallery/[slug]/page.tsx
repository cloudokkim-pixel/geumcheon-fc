import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GSSCHeader from "@/components/GSSCHeader";
import GalleryDetailContent from "@/components/gallery-detail-content";
import { getPublicGalleryBySlug } from "@/lib/gallery/store";

type GalleryDetailPageProps = {
  params: {
    slug: string;
  };
};

export default async function GalleryDetailPage({ params }: GalleryDetailPageProps) {
  const data = await getPublicGalleryBySlug(params.slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050b15] text-white">
      <GSSCHeader />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <GalleryDetailContent item={data.item} previous={data.previous} next={data.next} />
      </main>
    </div>
  );
}

export async function generateMetadata({ params }: GalleryDetailPageProps): Promise<Metadata> {
  const data = await getPublicGalleryBySlug(params.slug);

  if (!data) {
    return {
      title: "Gallery | Geumcheon Soccer Club",
    };
  }

  const thumbnail = data.item.images[0]?.imageUrl;

  return {
    title: `${data.item.title} | Geumcheon Soccer Club`,
    description: data.item.description || "Geumcheon Soccer Club gallery detail page",
    openGraph: {
      title: data.item.title,
      description: data.item.description || "Geumcheon Soccer Club gallery detail page",
      images: thumbnail ? [{ url: thumbnail }] : [],
    },
  };
}

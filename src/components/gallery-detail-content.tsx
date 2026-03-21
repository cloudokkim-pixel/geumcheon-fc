"use client";

import Link from "next/link";
import GallerySlider from "@/components/gallery-slider";
import { useSiteLanguage } from "@/components/site-language";
import { getGalleryCategoryLabel } from "@/lib/gallery/mock-data";
import { galleryDetailPageCopy } from "@/lib/page-copy";
import type { GalleryDetail, GalleryListItem } from "@/types/gallery";

type Props = {
  item: GalleryDetail;
  previous: GalleryListItem | null;
  next: GalleryListItem | null;
};

export default function GalleryDetailContent({ item, previous, next }: Props) {
  const { locale } = useSiteLanguage();
  const t = galleryDetailPageCopy[locale];

  return (
    <>
      <div className="mb-8 rounded-[14px] bg-[#1c1c1e] p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3 text-sm text-[#6e6e73]">
          <span className="text-[#cc2222]">{getGalleryCategoryLabel(locale, item.category)}</span>
          <span>{t.posted} {item.publishedAt?.slice(0, 10)}</span>
          <span>{t.updated} {item.updatedAt.slice(0, 10)}</span>
        </div>
        <h1 className="mt-4 text-3xl font-black tracking-tight text-[#f5f5f7] sm:text-5xl">{item.title}</h1>
        <p className="mt-5 max-w-3xl text-sm leading-8 text-[#a1a1a6] sm:text-base">{item.description}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <GallerySlider images={item.images.sort((a, b) => a.sortOrder - b.sortOrder)} title={item.title} />
        <aside className="rounded-[14px] bg-[#1c1c1e] p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-[#f5f5f7]">{t.info}</h2>
          <div className="mt-6 space-y-4 text-sm text-[#a1a1a6]">
            <div>
              <p className="text-[#6e6e73]">{t.category}</p>
              <p className="mt-1">{getGalleryCategoryLabel(locale, item.category)}</p>
            </div>
            <div>
              <p className="text-[#6e6e73]">{t.createdAt}</p>
              <p className="mt-1">{item.createdAt.slice(0, 10)}</p>
            </div>
            <div>
              <p className="text-[#6e6e73]">{t.updatedAt}</p>
              <p className="mt-1">{item.updatedAt.slice(0, 10)}</p>
            </div>
            <div>
              <p className="text-[#6e6e73]">{t.imageCount}</p>
              <p className="mt-1">{item.images.length}</p>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-[14px] bg-[#1c1c1e] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6e6e73]">{t.previous}</p>
          {previous ? (
            <Link href={`/gallery/${previous.slug}`} className="mt-3 block text-lg font-semibold text-[#f5f5f7]">{previous.title}</Link>
          ) : (
            <p className="mt-3 text-[#6e6e73]">{t.previousEmpty}</p>
          )}
        </div>
        <div className="rounded-[14px] bg-[#1c1c1e] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6e6e73]">{t.next}</p>
          {next ? (
            <Link href={`/gallery/${next.slug}`} className="mt-3 block text-lg font-semibold text-[#f5f5f7]">{next.title}</Link>
          ) : (
            <p className="mt-3 text-[#6e6e73]">{t.nextEmpty}</p>
          )}
        </div>
      </div>
    </>
  );
}

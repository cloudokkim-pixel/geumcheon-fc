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
      <div className="mb-8 rounded-[2rem] border border-white/10 bg-[#0b1324] p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
          <span className="rounded-full bg-red-500/15 px-3 py-1 text-red-200">{getGalleryCategoryLabel(locale, item.category)}</span>
          <span>{t.posted} {item.publishedAt?.slice(0, 10)}</span>
          <span>{t.updated} {item.updatedAt.slice(0, 10)}</span>
        </div>
        <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">{item.title}</h1>
        <p className="mt-5 max-w-3xl text-sm leading-8 text-white/72 sm:text-base">{item.description}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <GallerySlider images={item.images.sort((a, b) => a.sortOrder - b.sortOrder)} title={item.title} />
        <aside className="rounded-[2rem] border border-white/10 bg-[#0b1324] p-6 sm:p-8">
          <h2 className="text-2xl font-bold">{t.info}</h2>
          <div className="mt-6 space-y-4 text-sm text-white/70">
            <div>
              <p className="text-white/45">{t.category}</p>
              <p className="mt-1">{getGalleryCategoryLabel(locale, item.category)}</p>
            </div>
            <div>
              <p className="text-white/45">{t.createdAt}</p>
              <p className="mt-1">{item.createdAt.slice(0, 10)}</p>
            </div>
            <div>
              <p className="text-white/45">{t.updatedAt}</p>
              <p className="mt-1">{item.updatedAt.slice(0, 10)}</p>
            </div>
            <div>
              <p className="text-white/45">{t.imageCount}</p>
              <p className="mt-1">{item.images.length}</p>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-[1.8rem] border border-white/10 bg-[#0b1324] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">{t.previous}</p>
          {previous ? (
            <Link href={`/gallery/${previous.slug}`} className="mt-3 block text-lg font-semibold text-white">{previous.title}</Link>
          ) : (
            <p className="mt-3 text-white/45">{t.previousEmpty}</p>
          )}
        </div>
        <div className="rounded-[1.8rem] border border-white/10 bg-[#0b1324] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">{t.next}</p>
          {next ? (
            <Link href={`/gallery/${next.slug}`} className="mt-3 block text-lg font-semibold text-white">{next.title}</Link>
          ) : (
            <p className="mt-3 text-white/45">{t.nextEmpty}</p>
          )}
        </div>
      </div>
    </>
  );
}

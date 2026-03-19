"use client";

import Image from "next/image";
import Link from "next/link";
import { ImageOff } from "lucide-react";
import { useSiteLanguage } from "@/components/site-language";
import { getGalleryCategoryLabel } from "@/lib/gallery/mock-data";
import { galleryPageCopy } from "@/lib/page-copy";
import type { GalleryCategory, GalleryListItem } from "@/types/gallery";

const categoryFilters = ["all", "training", "match", "event", "etc"] as const;

type Props = {
  items: GalleryListItem[];
  pagination: { page: number; totalPages: number };
  category: GalleryCategory | null;
  search: string;
};

function EmptyThumbnailCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.18),transparent_38%),linear-gradient(180deg,#10192b_0%,#09101d_100%)] text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/75">
        <ImageOff className="h-6 w-6" />
      </div>
      <p className="mt-4 text-sm font-semibold text-white">{title}</p>
      <p className="mt-1 text-xs text-white/45">{description}</p>
    </div>
  );
}

export default function GalleryPageContent({ items, pagination, category, search }: Props) {
  const { locale } = useSiteLanguage();
  const t = galleryPageCopy[locale];

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-red-300">Gallery</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{t.title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">{t.desc}</p>
        </div>
        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 text-sm text-white/70">{t.helper}</div>
      </div>

      <div className="mb-6 flex flex-col gap-4 rounded-[1.8rem] border border-white/10 bg-[#0b1324] p-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {categoryFilters.map((filter) => (
            <Link
              key={filter}
              href={{ pathname: "/gallery", query: { ...(filter === "all" ? {} : { category: filter }), ...(search ? { search } : {}) } }}
              className={`rounded-full px-4 py-2 text-sm transition ${
                (filter === "all" && !category) || filter === category
                  ? "bg-red-500 text-white"
                  : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {filter === "all" ? t.all : getGalleryCategoryLabel(locale, filter)}
            </Link>
          ))}
        </div>

        <form action="/gallery" className="flex gap-2">
          {category ? <input type="hidden" name="category" value={category} /> : null}
          <input type="search" name="search" defaultValue={search} placeholder={t.searchPlaceholder} className="h-11 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/35" />
          <button type="submit" className="rounded-2xl bg-red-500 px-4 text-sm font-semibold text-white">{t.search}</button>
        </form>
      </div>

      {items.length ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <Link key={item.id} href={`/gallery/${item.slug}`} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1324] transition hover:-translate-y-1 hover:border-white/20">
              <div className="relative h-56 overflow-hidden">
                {item.thumbnailUrl ? (
                  <Image src={item.thumbnailUrl} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" />
                ) : (
                  <EmptyThumbnailCard title={t.noImageTitle} description={t.noImageDesc} />
                )}
              </div>
              <div className="space-y-3 p-6">
                <div className="flex items-center justify-between gap-4 text-xs text-white/50">
                  <span className="rounded-full bg-red-500/15 px-3 py-1 text-red-200">{getGalleryCategoryLabel(locale, item.category)}</span>
                  <span>{item.publishedAt?.slice(0, 10)}</span>
                </div>
                <h2 className="text-xl font-bold text-white">{item.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1324] p-10 text-center text-white/55">{t.empty}</div>
      )}

      <div className="mt-10 flex items-center justify-center gap-2">
        {Array.from({ length: pagination.totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <Link
            key={pageNumber}
            href={{ pathname: "/gallery", query: { page: pageNumber, ...(category ? { category } : {}), ...(search ? { search } : {}) } }}
            className={`h-11 min-w-11 rounded-2xl px-4 py-3 text-center text-sm ${
              pageNumber === pagination.page ? "bg-red-500 text-white" : "border border-white/10 bg-white/5 text-white/70"
            }`}
          >
            {pageNumber}
          </Link>
        ))}
      </div>
    </>
  );
}

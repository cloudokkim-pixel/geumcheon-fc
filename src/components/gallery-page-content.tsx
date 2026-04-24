"use client";

import Image from "next/image";
import Link from "next/link";
import { ImageOff } from "lucide-react";
import { useSiteLanguage } from "@/components/site-language";
import { getGalleryCategoryLabel } from "@/lib/gallery/mock-data";
import { galleryPageCopy } from "@/lib/page-copy";
import type { GalleryAgeGroup, GalleryCategory, GalleryListItem } from "@/types/gallery";

const categoryFilters = ["all", "training", "match", "event", "etc"] as const;

const ageGroupFilters: { value: GalleryAgeGroup | "all"; labelKo: string }[] = [
  { value: "all", labelKo: "전체" },
  { value: "elementary", labelKo: "초등부" },
  { value: "middle", labelKo: "중등부" },
  { value: "high", labelKo: "고등부" },
  { value: "adult", labelKo: "성인부" },
];

type Props = {
  items: GalleryListItem[];
  pagination: { page: number; totalPages: number };
  category: GalleryCategory | null;
  ageGroup: GalleryAgeGroup | null;
  search: string;
};

function EmptyThumbnailCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[#000]/30 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#c0c0c5]">
        <ImageOff className="h-6 w-6" />
      </div>
      <p className="mt-4 text-sm font-semibold text-[#f5f5f7]">{title}</p>
      <p className="mt-1 text-xs text-[#888890]">{description}</p>
    </div>
  );
}

export default function GalleryPageContent({ items, pagination, category, ageGroup, search }: Props) {
  const { locale } = useSiteLanguage();
  const t = galleryPageCopy[locale];

  function categoryQuery(filter: (typeof categoryFilters)[number]) {
    return {
      ...(filter === "all" ? {} : { category: filter }),
      ...(ageGroup ? { ageGroup } : {}),
      ...(search ? { search } : {}),
    };
  }

  function ageGroupQuery(filter: GalleryAgeGroup | "all") {
    return {
      ...(category ? { category } : {}),
      ...(filter === "all" ? {} : { ageGroup: filter }),
      ...(search ? { search } : {}),
    };
  }

  return (
    <>
      <div className="mb-6 flex flex-col gap-3 rounded-[14px] border border-[#222] bg-[#1c1c1e] p-5">
        <div className="flex flex-wrap gap-2">
          {categoryFilters.map((filter) => (
            <Link
              key={filter}
              href={{ pathname: "/gallery", query: categoryQuery(filter) }}
              className={`rounded-[2px] px-4 py-2 text-sm transition ${
                (filter === "all" && !category) || filter === category
                  ? "bg-[#cc2222] font-bold text-white"
                  : "border border-[#424245] bg-transparent text-[#c0c0c5] hover:bg-white/5"
              }`}
            >
              {filter === "all" ? t.all : getGalleryCategoryLabel(locale, filter)}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {ageGroupFilters.map(({ value, labelKo }) => (
            <Link
              key={value}
              href={{ pathname: "/gallery", query: ageGroupQuery(value) }}
              className={`rounded-[2px] px-4 py-2 text-sm transition ${
                (value === "all" && !ageGroup) || value === ageGroup
                  ? "bg-[#cc2222] font-bold text-white"
                  : "border border-[#424245] bg-transparent text-[#c0c0c5] hover:bg-white/5"
              }`}
            >
              {value === "all" ? t.ageAll : labelKo}
            </Link>
          ))}
        </div>

        <form action="/gallery" className="flex gap-2">
          {category ? <input type="hidden" name="category" value={category} /> : null}
          {ageGroup ? <input type="hidden" name="ageGroup" value={ageGroup} /> : null}
          <input
            type="search"
            name="search"
            defaultValue={search}
            placeholder={t.searchPlaceholder}
            className="h-11 flex-1 rounded-[6px] border border-[#424245] bg-[#000]/30 px-4 text-sm text-[#f5f5f7] outline-none placeholder:text-[#888890]"
          />
          <button type="submit" className="rounded-[2px] bg-[#cc2222] px-4 text-sm font-bold text-white">
            {t.search}
          </button>
        </form>
      </div>

      {items.length ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/gallery/${item.slug}`}
              className="group overflow-hidden rounded-[14px] border border-white/10 bg-[#1c1c1e] transition hover:-translate-y-1 hover:border-white/20"
            >
              <div className="relative h-56 overflow-hidden">
                {item.thumbnailUrl ? (
                  <Image
                    src={item.thumbnailUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                ) : (
                  <EmptyThumbnailCard title={t.noImageTitle} description={t.noImageDesc} />
                )}
              </div>
              <div className="space-y-2 p-5">
                <div className="flex items-center justify-between gap-4 text-xs">
                  <span className="font-bold text-[#cc2222]">{getGalleryCategoryLabel(locale, item.category)}</span>
                  <span className="text-[#6e6e73]">{item.publishedAt?.slice(0, 10)}</span>
                </div>
                <h2 className="text-sm font-bold leading-snug text-[#f5f5f7]">{item.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-[14px] border border-[#222] bg-[#1c1c1e] p-10 text-center text-sm leading-loose text-[#6e6e73]">
          {t.empty}
        </div>
      )}

      <div className="mt-10 flex items-center justify-center gap-2">
        {Array.from({ length: pagination.totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <Link
            key={pageNumber}
            href={{
              pathname: "/gallery",
              query: {
                page: pageNumber,
                ...(category ? { category } : {}),
                ...(ageGroup ? { ageGroup } : {}),
                ...(search ? { search } : {}),
              },
            }}
            className={`h-11 min-w-11 rounded-[2px] px-4 py-3 text-center text-sm ${
              pageNumber === pagination.page ? "bg-[#cc2222] text-white" : "border border-[#424245] bg-transparent text-[#c0c0c5]"
            }`}
          >
            {pageNumber}
          </Link>
        ))}
      </div>
    </>
  );
}

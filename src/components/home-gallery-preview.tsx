"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImageOff } from "lucide-react";
import { useSiteLanguage } from "@/components/site-language";
import { getGalleryCategoryLabel } from "@/lib/gallery/mock-data";
import type { GalleryListItem } from "@/types/gallery";

type GalleryResponse = {
  items: GalleryListItem[];
};

function EmptyGalleryCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[#1c1c1e] px-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#a1a1a6]">
        <ImageOff className="h-6 w-6" />
      </div>
      <p className="mt-4 text-sm font-semibold text-[#f5f5f7]">{title}</p>
      <p className="mt-1 text-xs leading-5 text-[#6e6e73]">{description}</p>
    </div>
  );
}

export default function HomeGalleryPreview() {
  const { locale } = useSiteLanguage();
  const [items, setItems] = useState<GalleryListItem[]>([]);

  useEffect(() => {
    let active = true;

    fetch("/api/gallery?page=1&pageSize=4", { cache: "no-store" })
      .then((response) => response.json())
      .then((data: GalleryResponse) => {
        if (active) {
          setItems(data.items || []);
        }
      })
      .catch(() => {
        if (active) {
          setItems([]);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  if (!items.length) {
    return (
      <div className="rounded-[14px] bg-[#1c1c1e] p-8">
        <div className="flex flex-col items-center justify-center rounded-[10px] border border-dashed border-white/10 bg-white/[0.03] px-6 py-12 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/5 text-[#a1a1a6]">
            <ImageOff className="h-7 w-7" />
          </div>
          <p className="mt-5 text-lg font-semibold text-[#f5f5f7]">아직 공개된 갤러리가 없습니다</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-[#a1a1a6]">
            훈련, 경기, 행사, 기타 기록이 등록되면 이곳에서 최신 갤러리를 바로 볼 수 있습니다.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <Link
          key={item.id}
          href={`/gallery/${item.slug}`}
          className="group overflow-hidden rounded-[14px] border border-white/10 bg-[#1c1c1e] shadow-[0_20px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-white/20"
        >
          <div className="relative h-56 overflow-hidden">
            {item.thumbnailUrl ? (
              <Image
                src={item.thumbnailUrl}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              />
            ) : (
              <EmptyGalleryCard title="이미지가 없습니다" description="텍스트만 등록된 갤러리입니다" />
            )}
          </div>
          <div className="border-t border-[#222] bg-[#1c1c1e] p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-[#cc2222]">
              {getGalleryCategoryLabel(locale, item.category)}
            </p>
            <h3 className="mt-3 text-2xl font-black tracking-tight text-[#f5f5f7]">{item.title}</h3>
            <p className="mt-3 text-sm text-[#6e6e73]">{item.publishedAt?.slice(0, 10)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

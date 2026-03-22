"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { GalleryImage } from "@/types/gallery";

type GallerySliderProps = {
  images: GalleryImage[];
  title: string;
};

export default function GallerySlider({ images, title }: GallerySliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  useEffect(() => {
    if (activeIndex >= images.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, images.length]);

  useEffect(() => {
    if (images.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3000);

    return () => {
      window.clearInterval(timer);
    };
  }, [images.length]);

  if (!activeImage) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-sm text-[#c0c0c5]">
        등록된 이미지가 없습니다.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#1c1c1e]">
        <div className="relative h-[22rem] w-full sm:h-[32rem]">
          <Image src={activeImage.imageUrl} alt={title} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 70vw" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`overflow-hidden rounded-2xl border transition ${
              index === activeIndex ? "border-[#cc2222]" : "border-white/10"
            }`}
          >
            <div className="relative h-24 w-full">
              <Image src={image.imageUrl} alt={`${title} ${index + 1}`} fill className="object-cover" loading="lazy" sizes="(max-width: 640px) 30vw, 15vw" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

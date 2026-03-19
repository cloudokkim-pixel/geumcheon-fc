import type { Locale } from "@/components/site-language";
import type { GalleryCategory } from "@/types/gallery";

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  training: "훈련",
  match: "경기",
  event: "행사",
  etc: "기타",
};

export const localizedGalleryCategoryLabels: Record<Locale, Record<GalleryCategory, string>> = {
  ko: {
    training: "훈련",
    match: "경기",
    event: "행사",
    etc: "기타",
  },
  en: {
    training: "Training",
    match: "Match",
    event: "Event",
    etc: "Etc",
  },
  ja: {
    training: "トレーニング",
    match: "試合",
    event: "行事",
    etc: "その他",
  },
  zh: {
    training: "训练",
    match: "比赛",
    event: "活动",
    etc: "其他",
  },
};

export function getGalleryCategoryLabel(locale: Locale, category: GalleryCategory) {
  return localizedGalleryCategoryLabels[locale][category];
}

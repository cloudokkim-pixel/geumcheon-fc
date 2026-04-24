import type { GalleryAgeGroup, GalleryCategory, GalleryPostStatus } from "@/types/gallery";

const validCategories = new Set<GalleryCategory>(["training", "match", "event", "etc"]);
const validStatuses = new Set<GalleryPostStatus>(["draft", "private", "published"]);
const validAgeGroups = new Set<GalleryAgeGroup>(["elementary", "middle", "high", "adult"]);

export function parseCategory(value: string | null): GalleryCategory | null {
  if (!value) {
    return null;
  }

  return validCategories.has(value as GalleryCategory) ? (value as GalleryCategory) : null;
}

export function parseStatus(value: unknown): GalleryPostStatus | null {
  if (typeof value !== "string") {
    return null;
  }

  return validStatuses.has(value as GalleryPostStatus) ? (value as GalleryPostStatus) : null;
}

export function parseAgeGroup(value: string | null): GalleryAgeGroup | null {
  if (!value) return null;
  return validAgeGroups.has(value as GalleryAgeGroup) ? (value as GalleryAgeGroup) : null;
}

export function parsePositiveNumber(value: string | null, fallback: number) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export function jsonError(message: string, status = 400) {
  return Response.json(
    {
      error: message,
    },
    { status },
  );
}

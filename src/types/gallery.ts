export type UserRole = "admin" | "user";

export type GalleryUser = {
  id: string;
  email: string;
  name: string | null;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
};

export type GalleryCategory =
  | "training"
  | "match"
  | "event"
  | "etc";

export type GalleryAgeGroup = "elementary" | "middle" | "high" | "adult";

export type GalleryPostStatus = "draft" | "private" | "published";

export type GalleryListItem = {
  id: string;
  title: string;
  slug: string;
  thumbnailUrl: string | null;
  category: GalleryCategory;
  publishedAt: string | null;
};

export type GalleryImage = {
  id: string;
  galleryId: string;
  imageUrl: string;
  sortOrder: number;
  isThumbnail: boolean;
  createdAt: string;
};

export type GalleryDetail = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  category: GalleryCategory;
  thumbnailImageId: string | null;
  status: GalleryPostStatus;
  isPublic: boolean;
  isDeleted: boolean;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  images: GalleryImage[];
};

export type GalleryAdminListItem = {
  id: string;
  title: string;
  status: GalleryPostStatus;
  category: GalleryCategory;
  createdAt: string;
  updatedAt: string;
};

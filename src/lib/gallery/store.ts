import { isMissingGallerySchemaError, supabaseRestRequest, toGallerySetupError } from "@/lib/supabase/rest";
import type {
  GalleryAdminListItem,
  GalleryCategory,
  GalleryDetail,
  GalleryImage,
  GalleryListItem,
  GalleryPostStatus,
} from "@/types/gallery";

type GalleryListParams = {
  page?: number;
  pageSize?: number;
  category?: GalleryCategory | null;
  search?: string | null;
};

type GalleryImageInput = {
  id?: string;
  imageUrl: string;
  sortOrder?: number;
  isThumbnail?: boolean;
};

type GalleryWriteInput = {
  title: string;
  description?: string | null;
  category: GalleryCategory;
  status: GalleryPostStatus;
  images?: GalleryImageInput[];
};

type GalleryRow = {
  id: string;
  [key: string]: unknown;
} & Partial<{
  title: string;
  slug: string;
  description: string | null;
  content: string | null;
  body: string | null;
  category: GalleryCategory | string | null;
  thumbnail_image_id: string | null;
  thumbnail_url: string | null;
  status: GalleryPostStatus | string | null;
  post_status: GalleryPostStatus | string | null;
  visibility: string | null;
  is_public: boolean | null;
  is_deleted: boolean | null;
  deleted: boolean | null;
  published_at: string | null;
  created_at: string | null;
  updated_at: string | null;
}>;

type GalleryImageRow = {
  id: string;
  gallery_id: string;
  image_url: string;
  sort_order: number;
  is_thumbnail: boolean;
  created_at: string;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function ensureUniqueSlug(title: string, currentId?: string) {
  const baseSlug = slugify(title) || `gallery-${Date.now()}`;
  let slug = baseSlug;
  let counter = 1;

  while (true) {
    let rows: Pick<GalleryRow, "id" | "slug">[];

    try {
      rows = await supabaseRestRequest<Pick<GalleryRow, "id" | "slug">[]>("/rest/v1/galleries", {
        query: {
          select: "id,slug",
          slug: `eq.${slug}`,
        },
      });
    } catch (error) {
      throw toGallerySetupError(error);
    }

    if (rows.length === 0 || (rows.length === 1 && rows[0].id === currentId)) {
      return slug;
    }

    slug = `${baseSlug}-${counter}`;
    counter += 1;
  }
}

function mapImage(row: GalleryImageRow): GalleryImage {
  return {
    id: row.id,
    galleryId: row.gallery_id,
    imageUrl: row.image_url,
    sortOrder: row.sort_order,
    isThumbnail: row.is_thumbnail,
    createdAt: row.created_at,
  };
}

function asGalleryCategory(value: unknown): GalleryCategory {
  if (value === "training" || value === "match" || value === "event") {
    return value;
  }

  return "etc";
}

function asGalleryStatus(row: GalleryRow): GalleryPostStatus {
  const candidate = row.status ?? row.post_status ?? row.visibility;

  if (candidate === "draft" || candidate === "private" || candidate === "published") {
    return candidate;
  }

  if (row.is_public === true) {
    return "published";
  }

  return "private";
}

function asGalleryDescription(row: GalleryRow) {
  return (row.description ?? row.content ?? row.body ?? null) as string | null;
}

function asGalleryIsPublic(row: GalleryRow) {
  if (typeof row.is_public === "boolean") {
    return row.is_public;
  }

  return asGalleryStatus(row) === "published";
}

function asGalleryIsDeleted(row: GalleryRow) {
  if (typeof row.is_deleted === "boolean") {
    return row.is_deleted;
  }

  if (typeof row.deleted === "boolean") {
    return row.deleted;
  }

  return false;
}

function asGalleryPublishedAt(row: GalleryRow) {
  return (row.published_at ?? row.created_at ?? null) as string | null;
}

function asGalleryCreatedAt(row: GalleryRow) {
  return (row.created_at ?? row.published_at ?? new Date().toISOString()) as string;
}

function asGalleryUpdatedAt(row: GalleryRow) {
  return (row.updated_at ?? row.created_at ?? row.published_at ?? new Date().toISOString()) as string;
}

function isPubliclyVisible(row: GalleryRow) {
  return asGalleryStatus(row) === "published" && asGalleryIsPublic(row) && !asGalleryIsDeleted(row);
}

function matchesCategory(row: GalleryRow, category?: GalleryCategory | null) {
  if (!category) {
    return true;
  }

  return asGalleryCategory(row.category) === category;
}

function matchesSearch(row: GalleryRow, search?: string | null) {
  if (!search?.trim()) {
    return true;
  }

  const keyword = search.trim().toLowerCase();
  return String(row.title ?? "").toLowerCase().includes(keyword);
}

function mapDetail(row: GalleryRow, images: GalleryImageRow[]): GalleryDetail {
  return {
    id: row.id,
    title: String(row.title ?? ""),
    slug: String(row.slug ?? row.id),
    description: asGalleryDescription(row),
    category: asGalleryCategory(row.category),
    thumbnailImageId: (row.thumbnail_image_id ?? null) as string | null,
    status: asGalleryStatus(row),
    isPublic: asGalleryIsPublic(row),
    isDeleted: asGalleryIsDeleted(row),
    publishedAt: asGalleryPublishedAt(row),
    createdAt: asGalleryCreatedAt(row),
    updatedAt: asGalleryUpdatedAt(row),
    images: images.sort((a, b) => a.sort_order - b.sort_order).map(mapImage),
  };
}

function mapListItem(row: GalleryRow, images: GalleryImageRow[]): GalleryListItem {
  const thumbnail =
    images.find((image) => image.id === row.thumbnail_image_id) ||
    images.find((image) => image.is_thumbnail) ||
    images[0];

  return {
    id: row.id,
    title: String(row.title ?? ""),
    slug: String(row.slug ?? row.id),
    thumbnailUrl: thumbnail?.image_url || (row.thumbnail_url as string | null) || null,
    category: asGalleryCategory(row.category),
    publishedAt: asGalleryPublishedAt(row),
  };
}

function mapAdminListItem(row: GalleryRow): GalleryAdminListItem {
  return {
    id: row.id,
    title: String(row.title ?? ""),
    status: asGalleryStatus(row),
    category: asGalleryCategory(row.category),
    createdAt: asGalleryCreatedAt(row),
    updatedAt: asGalleryUpdatedAt(row),
  };
}

async function fetchGalleryImages(galleryIds: string[]) {
  if (galleryIds.length === 0) {
    return [] as GalleryImageRow[];
  }

  return supabaseRestRequest<GalleryImageRow[]>("/rest/v1/gallery_images", {
    query: {
      select: "id,gallery_id,image_url,sort_order,is_thumbnail,created_at",
      gallery_id: `in.(${galleryIds.join(",")})`,
      order: "sort_order.asc",
    },
  });
}

function groupImagesByGallery(images: GalleryImageRow[]) {
  return images.reduce<Record<string, GalleryImageRow[]>>((acc, image) => {
    acc[image.gallery_id] = acc[image.gallery_id] || [];
    acc[image.gallery_id].push(image);
    return acc;
  }, {});
}

async function replaceGalleryImages(galleryId: string, images: GalleryImageInput[]) {
  await supabaseRestRequest("/rest/v1/gallery_images", {
    method: "DELETE",
    query: {
      gallery_id: `eq.${galleryId}`,
    },
    headers: {
      Prefer: "return=minimal",
    },
  });

  const normalized = images
    .filter((image) => Boolean(image.imageUrl))
    .map((image, index) => ({
      gallery_id: galleryId,
      image_url: image.imageUrl,
      sort_order: image.sortOrder ?? index + 1,
      is_thumbnail: Boolean(image.isThumbnail),
    }));

  if (normalized.length > 0 && !normalized.some((image) => image.is_thumbnail)) {
    normalized[0].is_thumbnail = true;
  }

  if (normalized.length === 0) {
    return [] as GalleryImageRow[];
  }

  return supabaseRestRequest<GalleryImageRow[]>("/rest/v1/gallery_images", {
    method: "POST",
    body: normalized,
    prefer: "return=representation",
  });
}

async function updateThumbnailImageId(galleryId: string, thumbnailImageId: string | null) {
  await supabaseRestRequest<GalleryRow[]>("/rest/v1/galleries", {
    method: "PATCH",
    query: {
      id: `eq.${galleryId}`,
      select:
        "id,title,slug,description,category,thumbnail_image_id,status,is_public,is_deleted,published_at,created_at,updated_at",
    },
    body: {
      thumbnail_image_id: thumbnailImageId,
    },
    prefer: "return=representation",
  });
}

export async function listPublicGalleries(params: GalleryListParams = {}) {
  const page = Math.max(1, params.page || 1);
  const pageSize = Math.min(50, Math.max(1, params.pageSize || 9));
  const from = (page - 1) * pageSize;

  let items: GalleryRow[];
  let images: GalleryImageRow[];

  try {
    items = await supabaseRestRequest<GalleryRow[]>("/rest/v1/galleries", {
      query: {
        select: "*",
        order: "published_at.desc.nullslast",
      },
    });
    images = await fetchGalleryImages(items.map((item) => item.id));
  } catch (error) {
    if (isMissingGallerySchemaError(error)) {
      return {
        items: [] as GalleryListItem[],
        pagination: {
          page,
          pageSize,
          total: 0,
          totalPages: 1,
        },
      };
    }

    throw error;
  }

  const groupedImages = groupImagesByGallery(images);
  const filteredItems = items
    .filter(isPubliclyVisible)
    .filter((item) => matchesCategory(item, params.category))
    .filter((item) => matchesSearch(item, params.search));
  const paginatedItems = filteredItems.slice(from, from + pageSize);

  return {
    items: paginatedItems.map((item) => mapListItem(item, groupedImages[item.id] || [])),
    pagination: {
      page,
      pageSize,
      total: filteredItems.length,
      totalPages: Math.max(1, Math.ceil(filteredItems.length / pageSize)),
    },
  };
}

export async function getPublicGalleryBySlug(slug: string) {
  let rows: GalleryRow[];

  try {
    rows = await supabaseRestRequest<GalleryRow[]>("/rest/v1/galleries", {
      query: {
        select: "*",
      },
    });
  } catch (error) {
    if (isMissingGallerySchemaError(error)) {
      return null;
    }

    throw error;
  }

  const row = rows.find((item) => String(item.slug ?? item.id) === slug && isPubliclyVisible(item));

  if (!row) {
    return null;
  }

  let images: GalleryImageRow[];
  let visibleRows: GalleryRow[];

  try {
    [images, visibleRows] = await Promise.all([
      fetchGalleryImages([row.id]),
      supabaseRestRequest<GalleryRow[]>("/rest/v1/galleries", {
        query: {
          select: "*",
          order: "published_at.desc.nullslast",
        },
      }),
    ]);
  } catch (error) {
    if (isMissingGallerySchemaError(error)) {
      return {
        item: mapDetail(row, []),
        previous: null,
        next: null,
      };
    }

    throw error;
  }

  let visibleImages: GalleryImageRow[];

  try {
    visibleImages = await fetchGalleryImages(visibleRows.map((item) => item.id));
  } catch (error) {
    if (isMissingGallerySchemaError(error)) {
      return {
        item: mapDetail(row, images),
        previous: null,
        next: null,
      };
    }

    throw error;
  }

  const visibleImageMap = groupImagesByGallery(visibleImages);
  const publicVisibleRows = visibleRows.filter(isPubliclyVisible);
  const currentIndex = publicVisibleRows.findIndex((item) => item.id === row.id);

  return {
    item: mapDetail(row, images),
    previous:
      currentIndex < publicVisibleRows.length - 1
        ? mapListItem(publicVisibleRows[currentIndex + 1], visibleImageMap[publicVisibleRows[currentIndex + 1].id] || [])
        : null,
    next:
      currentIndex > 0
        ? mapListItem(publicVisibleRows[currentIndex - 1], visibleImageMap[publicVisibleRows[currentIndex - 1].id] || [])
        : null,
  };
}

export async function listAdminGalleries() {
  let rows: GalleryRow[];

  try {
    rows = await supabaseRestRequest<GalleryRow[]>("/rest/v1/galleries", {
      query: {
        select: "*",
        order: "updated_at.desc.nullslast",
      },
    });
  } catch (error) {
    if (isMissingGallerySchemaError(error)) {
      return [] as GalleryAdminListItem[];
    }

    throw error;
  }

  return rows.filter((row) => !asGalleryIsDeleted(row)).map(mapAdminListItem);
}

export async function getAdminGalleryById(id: string) {
  let rows: GalleryRow[];

  try {
    rows = await supabaseRestRequest<GalleryRow[]>("/rest/v1/galleries", {
      query: {
        select: "*",
      },
    });
  } catch (error) {
    if (isMissingGallerySchemaError(error)) {
      return null;
    }

    throw error;
  }

  const row = rows.find((item) => item.id === id);

  if (!row || asGalleryIsDeleted(row)) {
    return null;
  }

  let images: GalleryImageRow[];

  try {
    images = await fetchGalleryImages([id]);
  } catch (error) {
    if (isMissingGallerySchemaError(error)) {
      return mapDetail(row, []);
    }

    throw error;
  }

  return mapDetail(row, images);
}

export async function createGallery(input: GalleryWriteInput) {
  const slug = await ensureUniqueSlug(input.title);
  let rows: GalleryRow[];

  try {
    rows = await supabaseRestRequest<GalleryRow[]>("/rest/v1/galleries", {
      method: "POST",
      body: {
        title: input.title,
        slug,
        description: input.description || null,
        category: input.category,
        status: input.status,
      },
      prefer: "return=representation",
    });
  } catch (error) {
    throw toGallerySetupError(error);
  }

  const created = rows[0];
  let images: GalleryImageRow[];

  try {
    images = await replaceGalleryImages(created.id, input.images || []);
  } catch (error) {
    throw toGallerySetupError(error);
  }

  const thumbnail = images.find((image) => image.is_thumbnail) || images[0] || null;

  try {
    await updateThumbnailImageId(created.id, thumbnail?.id || null);
  } catch (error) {
    throw toGallerySetupError(error);
  }

  const latest = await getAdminGalleryById(created.id);
  if (!latest) {
    throw new Error("Created gallery could not be reloaded.");
  }

  return latest;
}

export async function updateGallery(id: string, input: Partial<GalleryWriteInput>) {
  const current = await getAdminGalleryById(id);

  if (!current) {
    return null;
  }

  const body: Record<string, unknown> = {};

  if (input.title !== undefined) {
    body.title = input.title;
    body.slug = await ensureUniqueSlug(input.title, id);
  }

  if (input.description !== undefined) {
    body.description = input.description || null;
  }

  if (input.category !== undefined) {
    body.category = input.category;
  }

  if (input.status !== undefined) {
    body.status = input.status;
  }

  if (Object.keys(body).length > 0) {
    try {
      await supabaseRestRequest<GalleryRow[]>("/rest/v1/galleries", {
        method: "PATCH",
        query: {
          id: `eq.${id}`,
          select:
            "id,title,slug,description,category,thumbnail_image_id,status,is_public,is_deleted,published_at,created_at,updated_at",
        },
        body,
        prefer: "return=representation",
      });
    } catch (error) {
      throw toGallerySetupError(error);
    }
  }

  if (input.images !== undefined) {
    let images: GalleryImageRow[];

    try {
      images = await replaceGalleryImages(id, input.images);
    } catch (error) {
      throw toGallerySetupError(error);
    }

    const thumbnail = images.find((image) => image.is_thumbnail) || images[0] || null;

    try {
      await updateThumbnailImageId(id, thumbnail?.id || null);
    } catch (error) {
      throw toGallerySetupError(error);
    }
  }

  return getAdminGalleryById(id);
}

export async function deleteGallery(id: string, permanent = false) {
  if (permanent) {
    try {
      await supabaseRestRequest("/rest/v1/gallery_images", {
        method: "DELETE",
        query: {
          gallery_id: `eq.${id}`,
        },
        headers: {
          Prefer: "return=minimal",
        },
      });

      await supabaseRestRequest("/rest/v1/galleries", {
        method: "DELETE",
        query: {
          id: `eq.${id}`,
        },
        headers: {
          Prefer: "return=minimal",
        },
      });
    } catch (error) {
      throw toGallerySetupError(error);
    }

    return true;
  }

  try {
    await supabaseRestRequest<GalleryRow[]>("/rest/v1/galleries", {
      method: "PATCH",
      query: {
        id: `eq.${id}`,
        select:
          "id,title,slug,description,category,thumbnail_image_id,status,is_public,is_deleted,published_at,created_at,updated_at",
      },
      body: {
        is_deleted: true,
        status: "private",
      },
      prefer: "return=representation",
    });
  } catch (error) {
    throw toGallerySetupError(error);
  }

  return true;
}

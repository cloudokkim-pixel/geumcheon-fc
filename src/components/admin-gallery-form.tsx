"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useSiteLanguage } from "@/components/site-language";
import type { GalleryCategory, GalleryDetail, GalleryPostStatus } from "@/types/gallery";
import { galleryCategoryLabels, getGalleryCategoryLabel } from "@/lib/gallery/mock-data";

type FormImage = {
  id: string;
  imageUrl: string;
  isThumbnail: boolean;
  sortOrder: number;
};

type AdminGalleryFormProps = {
  mode: "create" | "edit";
  initialValue?: GalleryDetail | null;
};

const statusLabels: Record<GalleryPostStatus, string> = {
  draft: "임시저장",
  private: "비공개",
  published: "공개",
};

const categories = Object.keys(galleryCategoryLabels) as GalleryCategory[];

function buildInitialImages(initialValue?: GalleryDetail | null) {
  return (
    initialValue?.images.map((image, index) => ({
      id: image.id,
      imageUrl: image.imageUrl,
      isThumbnail: image.id === initialValue.thumbnailImageId || image.isThumbnail,
      sortOrder: image.sortOrder || index + 1,
    })) || []
  );
}

export default function AdminGalleryForm({ mode, initialValue }: AdminGalleryFormProps) {
  const router = useRouter();
  const { locale } = useSiteLanguage();
  const [isPending, startTransition] = useTransition();
  const [title, setTitle] = useState(initialValue?.title || "");
  const [description, setDescription] = useState(initialValue?.description || "");
  const [category, setCategory] = useState<GalleryCategory>(initialValue?.category || "training");
  const [status, setStatus] = useState<GalleryPostStatus>(initialValue?.status || "draft");
  const [images, setImages] = useState<FormImage[]>(buildInitialImages(initialValue));
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const sortedImages = useMemo(
    () => [...images].sort((a, b) => a.sortOrder - b.sortOrder).map((image, index) => ({ ...image, sortOrder: index + 1 })),
    [images],
  );

  async function uploadFiles(files: FileList | null) {
    if (!files?.length) {
      return;
    }

    setError("");
    setMessage("이미지 업로드 중...");

    try {
      const uploadedImages: FormImage[] = [];

      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append("image", file);

        const response = await fetch("/api/admin/gallery/upload-image", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "이미지 업로드에 실패했습니다.");
        }

        uploadedImages.push({
          id: `${Date.now()}-${Math.random()}`,
          imageUrl: data.imageUrl,
          isThumbnail: false,
          sortOrder: sortedImages.length + uploadedImages.length + 1,
        });
      }

      setImages((current) => {
        const next = [...current, ...uploadedImages];
        if (!next.some((image) => image.isThumbnail) && next[0]) {
          next[0].isThumbnail = true;
        }
        return next;
      });

      setMessage("이미지 업로드가 완료되었습니다.");
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "이미지 업로드에 실패했습니다.");
      setMessage("");
    }
  }

  function moveImage(id: string, direction: -1 | 1) {
    setImages((current) => {
      const next = [...current].sort((a, b) => a.sortOrder - b.sortOrder);
      const index = next.findIndex((image) => image.id === id);
      const targetIndex = index + direction;

      if (index < 0 || targetIndex < 0 || targetIndex >= next.length) {
        return current;
      }

      [next[index], next[targetIndex]] = [next[targetIndex], next[index]];
      return next.map((image, order) => ({ ...image, sortOrder: order + 1 }));
    });
  }

  function removeImage(id: string) {
    setImages((current) => {
      const next = current.filter((image) => image.id !== id).map((image, index) => ({ ...image, sortOrder: index + 1 }));
      if (!next.some((image) => image.isThumbnail) && next[0]) {
        next[0].isThumbnail = true;
      }
      return next;
    });
  }

  function setThumbnail(id: string) {
    setImages((current) => current.map((image) => ({ ...image, isThumbnail: image.id === id })));
  }

  async function submitForm(nextStatus?: GalleryPostStatus) {
    setError("");
    setMessage("");

    if (!title.trim()) {
      setError("제목은 필수입니다.");
      return;
    }

    const targetStatus = nextStatus || status;
    const payload = {
      title: title.trim(),
      description: description.trim() || null,
      category,
      status: targetStatus,
      images: sortedImages.map((image, index) => ({
        imageUrl: image.imageUrl,
        sortOrder: index + 1,
        isThumbnail: image.isThumbnail,
      })),
    };

    startTransition(async () => {
      try {
        const response = await fetch(mode === "create" ? "/api/admin/gallery" : `/api/admin/gallery/${initialValue?.id}`, {
          method: mode === "create" ? "POST" : "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "저장에 실패했습니다.");
        }

        setStatus(targetStatus);
        setMessage(mode === "create" ? "게시글이 등록되었습니다." : "게시글이 수정되었습니다.");
        router.push(mode === "create" ? `/admin/gallery/${data.id}/edit` : "/admin/gallery");
        router.refresh();
      } catch (submitError) {
        setError(submitError instanceof Error ? submitError.message : "저장에 실패했습니다.");
      }
    });
  }

  async function handleDelete() {
    if (!initialValue) {
      return;
    }

    setError("");

    startTransition(async () => {
      try {
        const response = await fetch(`/api/admin/gallery/${initialValue.id}?permanent=false`, {
          method: "DELETE",
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "삭제에 실패했습니다.");
        }

        router.push("/admin/gallery");
        router.refresh();
      } catch (deleteError) {
        setError(deleteError instanceof Error ? deleteError.message : "삭제에 실패했습니다.");
      }
    });
  }

  return (
    <section className="rounded-[2rem] border border-white/10 bg-[#1c1c1e] p-6 sm:p-8">
      {initialValue ? (
        <div className="mb-6 grid gap-4 rounded-[1.6rem] border border-white/10 bg-white/5 p-5 text-sm text-[#c0c0c5] sm:grid-cols-2">
          <p>현재 상태: {statusLabels[initialValue.status]}</p>
          <p>현재 카테고리: {getGalleryCategoryLabel(locale, initialValue.category)}</p>
        </div>
      ) : null}

      <form
        className="space-y-6"
        onSubmit={(event) => {
          event.preventDefault();
          void submitForm();
        }}
      >
        <div>
          <label className="mb-2 block text-sm text-[#888890]">제목</label>
          <input value={title} onChange={(event) => setTitle(event.target.value)} className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4" />
        </div>

        <div>
          <label className="mb-2 block text-sm text-[#888890]">설명</label>
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} className="min-h-32 w-full rounded-2xl border border-white/10 bg-white/5 p-4" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-[#888890]">카테고리</label>
            <select value={category} onChange={(event) => setCategory(event.target.value as GalleryCategory)} className="h-12 w-full rounded-2xl border border-white/10 bg-[#000]/30 px-4">
              {categories.map((item) => (
                <option key={item} value={item}>
                  {getGalleryCategoryLabel(locale, item)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-[#888890]">상태</label>
            <select value={status} onChange={(event) => setStatus(event.target.value as GalleryPostStatus)} className="h-12 w-full rounded-2xl border border-white/10 bg-[#000]/30 px-4">
              {Object.entries(statusLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="rounded-[1.6rem] border border-dashed border-white/15 bg-white/5 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-[#f5f5f7]">이미지 업로드</p>
              <p className="mt-2 text-sm leading-6 text-[#c0c0c5]">여러 장 업로드를 지원합니다. 대표 이미지 지정과 순서 변경도 가능합니다.</p>
            </div>
            <label className="inline-flex cursor-pointer items-center justify-center rounded-[2px] bg-[#cc2222] px-5 py-3 text-sm font-bold text-white">
              이미지 선택
              <input type="file" accept="image/*" multiple className="hidden" onChange={(event) => void uploadFiles(event.target.files)} />
            </label>
          </div>

          {sortedImages.length ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {sortedImages.map((image) => (
                <div key={image.id} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#1c1c1e]">
                  <img src={image.imageUrl} alt="gallery" className="h-44 w-full object-cover" loading="lazy" decoding="async" />
                  <div className="space-y-3 p-4 text-sm text-[#c0c0c5]">
                    <label className="flex items-center gap-2">
                      <input type="radio" checked={image.isThumbnail} onChange={() => setThumbnail(image.id)} />
                      대표 이미지
                    </label>
                    <div className="flex flex-wrap gap-2">
                      <button type="button" onClick={() => moveImage(image.id, -1)} className="rounded-xl border border-white/10 px-3 py-2">
                        위로
                      </button>
                      <button type="button" onClick={() => moveImage(image.id, 1)} className="rounded-xl border border-white/10 px-3 py-2">
                        아래로
                      </button>
                      <button type="button" onClick={() => removeImage(image.id)} className="rounded-[4px] border border-[#424245] px-3 py-2 text-[#c0c0c5]">
                        삭제
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-5 text-sm text-[#888890]">이미지는 최소 1장 이상 등록하는 것을 권장합니다.</p>
          )}
        </div>

        {error ? <p className="text-sm text-[#cc2222]">{error}</p> : null}
        {message ? <p className="text-sm text-emerald-300">{message}</p> : null}

        <div className="flex flex-wrap gap-3">
          <button type="button" disabled={isPending} onClick={() => void submitForm("draft")} className="rounded-[2px] border border-[#424245] bg-transparent px-5 py-3 text-sm text-[#f5f5f7]">
            임시저장
          </button>
          <button type="button" disabled={isPending} onClick={() => void submitForm("published")} className="rounded-[2px] bg-[#cc2222] px-5 py-3 text-sm font-bold text-white">
            공개
          </button>
          <button type="button" disabled={isPending} onClick={() => void submitForm("private")} className="rounded-[2px] border border-[#424245] bg-transparent px-5 py-3 text-sm text-[#f5f5f7]">
            비공개
          </button>
          {mode === "edit" ? (
            <button type="button" disabled={isPending} onClick={() => void handleDelete()} className="rounded-[2px] border border-[#424245] bg-transparent px-5 py-3 text-sm text-[#c0c0c5]">
              삭제
            </button>
          ) : null}
        </div>
      </form>
    </section>
  );
}

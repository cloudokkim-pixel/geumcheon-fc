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
    <section className="overflow-hidden rounded-[14px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
      {initialValue ? (
        <div className="grid gap-4 border-b border-[#e8e8e8] bg-[#f9f9f9] px-5 py-4 text-sm text-[#888] sm:grid-cols-2">
          <p>현재 상태: <span className="font-semibold text-[#444]">{statusLabels[initialValue.status]}</span></p>
          <p>현재 카테고리: <span className="font-semibold text-[#444]">{getGalleryCategoryLabel(locale, initialValue.category)}</span></p>
        </div>
      ) : null}

      <form
        className="space-y-5 p-5 sm:p-6"
        onSubmit={(event) => {
          event.preventDefault();
          void submitForm();
        }}
      >
        <div>
          <label className="mb-1.5 block text-[13px] font-semibold text-[#444]">제목</label>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="h-11 w-full rounded-[8px] border border-[#e8e8e8] bg-[#f9f9f9] px-3.5 text-[14px] text-[#111] focus:border-[#cc2222] focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-[13px] font-semibold text-[#444]">설명</label>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="min-h-28 w-full rounded-[8px] border border-[#e8e8e8] bg-[#f9f9f9] p-3.5 text-[14px] text-[#111] focus:border-[#cc2222] focus:outline-none"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-[13px] font-semibold text-[#444]">카테고리</label>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value as GalleryCategory)}
              className="h-11 w-full rounded-[8px] border border-[#e8e8e8] bg-[#f9f9f9] px-3.5 text-[14px] text-[#111] focus:border-[#cc2222] focus:outline-none"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {getGalleryCategoryLabel(locale, item)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-[13px] font-semibold text-[#444]">상태</label>
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value as GalleryPostStatus)}
              className="h-11 w-full rounded-[8px] border border-[#e8e8e8] bg-[#f9f9f9] px-3.5 text-[14px] text-[#111] focus:border-[#cc2222] focus:outline-none"
            >
              {Object.entries(statusLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="rounded-[8px] border border-dashed border-[#e8e8e8] bg-[#f9f9f9] p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[13px] font-semibold text-[#444]">이미지 업로드</p>
              <p className="mt-1 text-[12px] leading-relaxed text-[#888]">여러 장 업로드를 지원합니다. 대표 이미지 지정과 순서 변경도 가능합니다.</p>
            </div>
            <label className="inline-flex cursor-pointer items-center justify-center rounded-[8px] bg-[#cc2222] px-5 py-2.5 text-[13px] font-bold text-white transition hover:bg-[#b01c1c]">
              이미지 선택
              <input type="file" accept="image/*" multiple className="hidden" onChange={(event) => void uploadFiles(event.target.files)} />
            </label>
          </div>

          {sortedImages.length ? (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {sortedImages.map((image) => (
                <div key={image.id} className="overflow-hidden rounded-[10px] border border-[#e8e8e8] bg-white">
                  <img src={image.imageUrl} alt="gallery" className="h-44 w-full object-cover" loading="lazy" decoding="async" />
                  <div className="space-y-2.5 p-3 text-[13px] text-[#444]">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" checked={image.isThumbnail} onChange={() => setThumbnail(image.id)} className="accent-[#cc2222]" />
                      대표 이미지
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      <button type="button" onClick={() => moveImage(image.id, -1)} className="rounded-[6px] border border-[#e8e8e8] bg-[#f2f2f2] px-3 py-1.5 text-[12px] transition hover:bg-[#e8e8e8]">
                        위로
                      </button>
                      <button type="button" onClick={() => moveImage(image.id, 1)} className="rounded-[6px] border border-[#e8e8e8] bg-[#f2f2f2] px-3 py-1.5 text-[12px] transition hover:bg-[#e8e8e8]">
                        아래로
                      </button>
                      <button type="button" onClick={() => removeImage(image.id)} className="rounded-[6px] border border-[#e8e8e8] bg-[#f2f2f2] px-3 py-1.5 text-[12px] text-[#cc2222] transition hover:bg-[#cc2222]/8">
                        삭제
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-[12px] text-[#888]">이미지는 최소 1장 이상 등록하는 것을 권장합니다.</p>
          )}
        </div>

        {error ? <p className="text-[13px] text-[#cc2222]">{error}</p> : null}
        {message ? <p className="text-[13px] text-[#1a7a3e]">{message}</p> : null}

        <div className="flex flex-wrap gap-2.5 border-t border-[#e8e8e8] pt-5">
          <button
            type="button"
            disabled={isPending}
            onClick={() => void submitForm("draft")}
            className="rounded-[8px] border border-[#e8e8e8] bg-[#f2f2f2] px-5 py-2.5 text-[13px] font-semibold text-[#444] transition hover:bg-[#e8e8e8] disabled:opacity-50"
          >
            임시저장
          </button>
          <button
            type="button"
            disabled={isPending}
            onClick={() => void submitForm("published")}
            className="rounded-[8px] bg-[#cc2222] px-5 py-2.5 text-[13px] font-bold text-white transition hover:bg-[#b01c1c] disabled:opacity-50"
          >
            공개
          </button>
          <button
            type="button"
            disabled={isPending}
            onClick={() => void submitForm("private")}
            className="rounded-[8px] border border-[#e8e8e8] bg-[#f2f2f2] px-5 py-2.5 text-[13px] font-semibold text-[#444] transition hover:bg-[#e8e8e8] disabled:opacity-50"
          >
            비공개
          </button>
          {mode === "edit" ? (
            <button
              type="button"
              disabled={isPending}
              onClick={() => void handleDelete()}
              className="ml-auto rounded-[8px] border border-[#cc2222]/20 px-5 py-2.5 text-[13px] font-semibold text-[#cc2222] transition hover:bg-[#cc2222]/8 disabled:opacity-50"
            >
              삭제
            </button>
          ) : null}
        </div>
      </form>
    </section>
  );
}

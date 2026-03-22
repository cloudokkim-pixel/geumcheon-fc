import Link from "next/link";
import { notFound } from "next/navigation";
import AdminGalleryForm from "@/components/admin-gallery-form";
import GSSCHeader from "@/components/GSSCHeader";
import { getAdminGalleryById } from "@/lib/gallery/store";

type AdminGalleryEditPageProps = {
  params: {
    id: string;
  };
};

export default async function AdminGalleryEditPage({ params }: AdminGalleryEditPageProps) {
  const item = await getAdminGalleryById(params.id);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-transparent text-[#f5f5f7]">
      <GSSCHeader />

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#cc2222]">Admin Gallery</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-[#f5f5f7]">갤러리 수정</h1>
          </div>
          <Link href="/admin/gallery" className="text-sm text-[#c0c0c5] underline-offset-4 hover:underline">
            목록으로
          </Link>
        </div>

        <AdminGalleryForm mode="edit" initialValue={item} />
      </main>
    </div>
  );
}

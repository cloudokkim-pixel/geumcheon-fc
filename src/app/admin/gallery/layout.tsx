import { redirect } from "next/navigation";
import { getCurrentAdminSession } from "@/lib/auth/session";

export default function AdminGalleryLayout({ children }: { children: React.ReactNode }) {
  const session = getCurrentAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  return children;
}

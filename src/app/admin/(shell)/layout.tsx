import { redirect } from "next/navigation";
import { getCurrentAdminSession } from "@/lib/auth/session";
import AdminShell from "@/components/admin-shell";

export default function AdminShellLayout({ children }: { children: React.ReactNode }) {
  const session = getCurrentAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  return <AdminShell username={session.username}>{children}</AdminShell>;
}

import type { Metadata } from "next";
import AdminDashboard from "@/components/admin-dashboard";

export const metadata: Metadata = { title: "대시보드 | G.S.S.C Admin" };

export default function AdminPage() {
  return <AdminDashboard />;
}

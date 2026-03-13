import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서울금천축구클럽",
  description: "서울금천축구클럽 공식 홈페이지 시안",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { SiteLanguageProvider } from "@/components/site-language";

export const metadata: Metadata = {
  title: "서울금천축구클럽",
  description: "서울금천축구클럽 공식 홈페이지 시안",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <SiteLanguageProvider>{children}</SiteLanguageProvider>
      </body>
    </html>
  );
}

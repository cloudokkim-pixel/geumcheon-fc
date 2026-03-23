import "./globals.css";
import type { Metadata } from "next";
import { SiteLanguageProvider } from "@/components/site-language";

export const metadata: Metadata = {
  title: {
    default: "서울금천축구클럽 G.C.S.C | 금천구 엘리트 유소년 축구",
    template: "%s | G.C.S.C",
  },
  description: "금천구 유소년 축구클럽. 초등~K4 수직 통합 선수개발. 체계적 엘리트 훈련.",
  keywords: ["금천구 축구클럽", "서울 유소년 축구", "축구 선수 육성", "K4 진출", "관악구 축구", "서울금천축구클럽", "GSSC"],
  openGraph: {
    title: "서울금천축구클럽 G.C.S.C",
    description: "금천구 유소년 축구클럽. 초등~K4 수직 통합 선수개발. 체계적 엘리트 훈련.",
    url: "https://geumcheon-fc.vercel.app",
    siteName: "서울금천축구클럽 G.C.S.C",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "서울금천축구클럽 G.C.S.C",
    description: "금천구 유소년 축구클럽. 초등~K4 수직 통합 선수개발.",
  },
  verification: {
    google: "【Google Search Console 인증 코드】",
    other: { "naver-site-verification": "【네이버 서치어드바이저 코드】" },
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <SiteLanguageProvider>
          <div className="relative z-[1]">{children}</div>
        </SiteLanguageProvider>
      </body>
    </html>
  );
}

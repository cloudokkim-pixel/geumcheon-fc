"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { useSiteLanguage } from "./site-language";

const logoSrc =
  "http://fs.arumnet.com/image/N1010BONSA/event/2023121540/%EA%B8%88%EC%B2%9C%20%EC%B6%95%EA%B5%AC%20%ED%81%B4%EB%9F%BD%20%EC%9D%B4%EB%AF%B8%EC%A7%80.png";

const KAKAO_MAP_URL =
  "https://map.kakao.com/link/search/서울특별시 관악구 조원로 56";

const footerNav = [
  { href: "/club-introduction", label: "클럽소개" },
  { href: "/program", label: "육성시스템" },
  { href: "/application", label: "선수모집" },
  { href: "/gallery", label: "갤러리" },
  { href: "/contact", label: "문의" },
];

export default function Footer() {
  const { dictionary } = useSiteLanguage();

  return (
    <footer className="border-t border-[#222] bg-[#000000]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* 상단: 로고 + 연락처 */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <a href="/" className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-black">
              <Image src={logoSrc} alt={dictionary.header.clubName} fill className="object-cover" sizes="48px" />
            </div>
            <div>
              <p className="text-lg font-black text-[#f5f5f7]">{dictionary.header.clubName}</p>
              <p className="text-xs uppercase tracking-[0.28em] text-[#888890]">G.C.S.C</p>
            </div>
          </a>

          <div className="grid gap-4 text-sm sm:grid-cols-2 lg:text-right">
            <div>
              <p className="text-xs text-[#6e6e73]">대표</p>
              <p className="mt-1 text-[#c0c0c5]">천경필</p>
            </div>
            <div>
              <p className="text-xs text-[#6e6e73]">전화</p>
              <a
                href="tel:01041780207"
                className="mt-1 block font-semibold text-[#f5f5f7] transition hover:text-[#cc2222]"
              >
                010-4178-0207
              </a>
            </div>
            <div>
              <p className="text-xs text-[#6e6e73]">훈련장</p>
              <a
                href={KAKAO_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-[#c0c0c5] transition hover:text-[#f5f5f7]"
              >
                서울특별시 관악구 조원로 56
              </a>
            </div>
            <div>
              <p className="text-xs text-[#6e6e73]">사업자등록번호</p>
              <p className="mt-1 text-[#6e6e73]">【확인 필요 — 실제 번호로 교체】</p>
            </div>
          </div>
        </div>

        {/* 하단: 내비 + 저작권 */}
        <div className="mt-8 border-t border-[#222] pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#6e6e73]">
              {footerNav.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-[#f5f5f7]">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 text-xs text-[#6e6e73]">
              <span>© {new Date().getFullYear()} 서울금천축구클럽 G.C.S.C. All rights reserved.</span>
              <a
                href="/admin/login"
                aria-label="관리자 페이지"
                title="관리자 페이지"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full text-white/20 transition hover:bg-white/5 hover:text-white/50"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

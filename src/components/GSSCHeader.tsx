"use client";

import React from "react";
import { Menu, X } from "lucide-react";

const logoSrc =
  "http://fs.arumnet.com/image/N1010BONSA/event/2023121540/%EA%B8%88%EC%B2%9C%20%EC%B6%95%EA%B5%AC%20%ED%81%B4%EB%9F%BD%20%EC%9D%B4%EB%AF%B8%EC%A7%80.png";

const navItems = [
  { href: "/club-introduction", label: "클럽소개" },
  { href: "/program", label: "훈련프로그램" },
  { href: "/application", label: "선수모집" },
  { href: "/gallery", label: "갤러리" },
  { href: "/contact", label: "후원" },
  { href: "/contact", label: "문의" },
];

export default function GSSCHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050b15]/82 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3 sm:gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-red-500/30 bg-black shadow-[0_10px_25px_rgba(0,0,0,0.22)] sm:h-14 sm:w-14">
            <img src={logoSrc} alt="서울금천축구클럽 로고" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-base font-black text-white sm:text-lg">서울금천축구클럽</p>
            <p className="text-[10px] uppercase tracking-[0.32em] text-white/50 sm:text-xs">
              Geumcheon Soccer Club
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={`${item.href}-${item.label}`}
              href={item.href}
              className="text-sm font-medium text-white/72 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/application"
            className="hidden h-11 items-center justify-center rounded-2xl bg-white px-5 text-sm font-bold text-[#08111f] transition hover:bg-red-50 lg:inline-flex"
          >
            참가 신청
          </a>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <button
            className="absolute inset-0 bg-black/55"
            onClick={() => setMenuOpen(false)}
            aria-label="모바일 메뉴 닫기"
          />

          <div className="fixed right-0 top-0 h-screen w-[330px] max-w-[82vw] overflow-y-auto bg-[#293145] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between px-7 pb-6 pt-10">
              <h2 className="text-2xl font-black tracking-[-0.03em] text-white">메뉴</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center text-white transition hover:text-white/80"
                aria-label="메뉴 닫기"
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            <nav className="flex flex-col px-7 pb-10">
              {navItems.map((item) => (
                <a
                  key={`${item.href}-${item.label}-mobile`}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-4 text-base font-medium tracking-[-0.01em] text-white transition hover:text-red-100"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

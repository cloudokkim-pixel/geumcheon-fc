"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const logoSrc = "http://fs.arumnet.com/image/N1010BONSA/event/2023121540/%EA%B8%88%EC%B2%9C%20%EC%B6%95%EA%B5%AC%20%ED%81%B4%EB%9F%BD%20%EC%9D%B4%EB%AF%B8%EC%A7%80.png";

export default function GSSCHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-red-500/20 bg-[#050b15]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <a href="/" className="block">
            <div className="relative h-12 w-12 cursor-pointer overflow-hidden rounded-2xl border border-red-500/30 bg-black hover:border-red-500 sm:h-14 sm:w-14">
              <img src={logoSrc} alt="서울금천축구클럽 로고" className="h-full w-full object-cover" />
            </div>
          </a>
          <div>
            <a href="/" className="block">
              <p className="cursor-pointer text-base font-black hover:text-red-300 sm:text-lg">서울금천축구클럽</p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/55 sm:text-xs">
                Geumcheon Soccer Club
              </p>
            </a>
          </div>
        </div>
        <nav className="hidden items-center gap-7 text-sm text-white/72 lg:flex">
          <a href="/club-introduction" className="transition hover:text-red-300">클럽소개</a>
          <a href="/program" className="transition hover:text-red-300">훈련프로그램</a>
          <a href="/application" className="transition hover:text-red-300">선수모집</a>
          <a href="/gallery" className="transition hover:text-red-300">갤러리</a>
          <a href="/contact" className="transition hover:text-red-300">문의</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="메뉴 열기"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-end lg:hidden">
          <div className="absolute inset-0 bg-black/80" onClick={() => setMenuOpen(false)} />
          <div className="animate-slide-in relative flex h-screen w-full max-w-xs flex-col justify-start bg-[#22293a] p-8 shadow-xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-lg font-bold text-white">메뉴</span>
              <button onClick={() => setMenuOpen(false)} aria-label="메뉴 닫기">
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-lg text-white">
              <Link href="/club-introduction" passHref legacyBehavior>
                <a className="font-medium hover:text-red-300" onClick={() => setMenuOpen(false)}>클럽소개</a>
              </Link>
              <Link href="/program" passHref legacyBehavior>
                <a className="font-medium hover:text-red-300" onClick={() => setMenuOpen(false)}>훈련프로그램</a>
              </Link>
              <Link href="/application" passHref legacyBehavior>
                <a className="font-medium hover:text-red-300" onClick={() => setMenuOpen(false)}>선수모집</a>
              </Link>
              <Link href="/gallery" passHref legacyBehavior>
                <a className="font-medium hover:text-red-300" onClick={() => setMenuOpen(false)}>갤러리</a>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <a className="font-medium hover:text-red-300" onClick={() => setMenuOpen(false)}>문의</a>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

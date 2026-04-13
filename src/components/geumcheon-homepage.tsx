"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useSiteLanguage } from "./site-language";
import HomeGalleryPreview from "./home-gallery-preview";
import GSSCHeader from "./GSSCHeader";
import Footer from "./Footer";

export default function GeumcheonHomepage() {
  const { dictionary } = useSiteLanguage();
  const t = dictionary.home;

  return (
    <>
      <GSSCHeader />
      <div className="min-h-screen overflow-x-hidden bg-transparent text-[#f5f5f7]">

      {/* ── S2 히어로 ── */}
      <section className="relative flex h-screen h-[100svh] items-center justify-center overflow-hidden">
        {/* 배경 — 야간 훈련 사진 (선수들이 중심에 오도록 하단 기준) */}
        <Image
          src="/hero-bg.jpg"
          alt="야간 훈련"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 65%" }}
          sizes="100vw"
        />
        {/* 텍스트 가독성 오버레이 — 하단 강하게, 상단 살짝만 */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#000] via-[#000]/60 to-[#000]/10" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#000]/50 to-transparent" />

        {/* 연도 워터마크 */}
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-8 right-4 font-['Barlow_Condensed',sans-serif] font-black uppercase leading-none text-[#c49550] opacity-[0.10] sm:right-10"
          style={{ fontSize: "clamp(72px, 12vw, 150px)" }}
        >
          2015
        </span>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 섹션 라벨 */}
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#cc2222]">
            {t.heroLabel}
          </p>

          {/* 헤드라인 3줄 */}
          <h1
            className="font-['Barlow_Condensed',sans-serif] font-black uppercase leading-[1.0] tracking-tight"
            style={{ fontSize: "clamp(40px, 10vw, 86px)" }}
          >
            <span className="block text-[#f5f5f7]">{t.heroLine1}</span>
            <span className="block text-[#cc2222]">{t.heroLine2}</span>
            <span className="block text-[#f5f5f7]">{t.heroLine3}</span>
          </h1>

          {/* 서브 카피 */}
          <p className="mt-6 max-w-lg text-base leading-[1.8] text-[#c0c0c5] sm:text-lg">
            {t.heroDesc}
          </p>

          {/* CTA 버튼 */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/application"
              className="inline-flex h-[52px] w-full items-center justify-center rounded-[2px] bg-[#cc2222] px-8 text-base font-bold text-white transition hover:bg-[#cc2222]/90 sm:w-auto"
            >
              {t.heroPrimary}
            </a>
            <a
              href="/club-introduction"
              className="inline-flex h-[52px] w-full items-center justify-center rounded-[2px] border border-[#424245] bg-transparent px-8 text-base font-medium text-[#f5f5f7] transition hover:bg-white/5 sm:w-auto"
            >
              {t.heroSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* ── S3 통계 바 ── */}
      <section className="border-y border-[#222] bg-[#0d0d0d]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-[#222] lg:grid-cols-4 lg:divide-y-0">
          {t.stats.map((item) => (
            <div key={item.num} className="px-6 py-7 sm:px-8 sm:py-8">
              <p
                className="font-['Barlow_Condensed',sans-serif] font-black uppercase leading-none text-[#f5f5f7]"
                style={{ fontSize: "clamp(24px, 4vw, 36px)" }}
              >
                {item.num}
              </p>
              <p className="mt-2 text-sm font-semibold text-[#c0c0c5]">{item.label}</p>
              <p className="mt-1 text-xs text-[#6e6e73]">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── S4 파이프라인 ── */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 섹션 라벨 */}
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#cc2222]">
            {t.pipelineLabel}
          </p>

          {/* 타이틀 */}
          <h2
            className="font-['Barlow_Condensed',sans-serif] font-black uppercase leading-[1.05]"
            style={{ fontSize: "clamp(28px, 5vw, 54px)" }}
          >
            <span className="block text-[#f5f5f7]">{t.pipelineLine1}</span>
            <span className="block text-[#cc2222]">{t.pipelineLine2}</span>
          </h2>
          <p className="mt-4 text-base text-[#c0c0c5]">{t.pipelineDesc}</p>

          {/* 5단계 카드 — 모바일: 세로 스크롤 / 데스크탑: 가로 */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            {t.pipelineSteps.map((step, i) => (
              <div
                key={step.name}
                className={`relative flex-1 rounded-[10px] p-5 ${
                  step.sepia
                    ? "bg-[#1a1208] border border-[#3a2800]/60"
                    : "bg-[#1c1c1e] border border-[#222]"
                }`}
              >
                {/* 화살표 — 모바일 하단, 데스크탑 우측 */}
                {i < t.pipelineSteps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[#cc2222] sm:hidden"
                  >
                    ↓
                  </span>
                )}
                <p
                  className={`text-xs font-bold uppercase tracking-[0.08em] ${
                    step.sepia ? "text-[#c49550]" : "text-[#cc2222]"
                  }`}
                >
                  {step.age}
                </p>
                <p className="mt-2 text-base font-black text-[#f5f5f7]">{step.name}</p>
                <p className="mt-1 text-sm leading-[1.6] text-[#888890]">{step.point}</p>
              </div>
            ))}
          </div>

          {/* 화살표 연결 — 데스크탑 */}
          <div className="mt-3 hidden items-center sm:flex">
            {t.pipelineSteps.map((_, i) => (
              <div key={i} className="flex flex-1 items-center">
                <div className="h-px flex-1 bg-[#2a2a2a]" />
                {i < t.pipelineSteps.length - 1 && (
                  <ChevronRight className="h-4 w-4 shrink-0 text-[#cc2222]" />
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="/roadmap"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#cc2222] transition hover:opacity-80"
            >
              → {t.pipelineCta}
            </a>
          </div>
        </div>
      </section>

      {/* ── S5 클럽 아이덴티티 ── */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#cc2222]">
            {t.identityLabel}
          </p>
          <h2
            className="font-['Barlow_Condensed',sans-serif] font-black uppercase leading-[1.05]"
            style={{ fontSize: "clamp(28px, 5vw, 54px)" }}
          >
            <span className="block text-[#f5f5f7]">{t.identityTitle1}</span>
            <span className="block text-[#cc2222]">{t.identityTitle2}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-[1.8] text-[#c0c0c5]">
            {t.identityDesc}
          </p>

          {/* 핵심 가치 3개 */}
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {t.identityValues.map((v) => (
              <div
                key={v.num}
                className="rounded-[14px] border border-[#222] bg-[#1c1c1e] p-7"
              >
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#cc2222]">{v.num}</p>
                <p className="mt-4 text-lg font-black text-[#f5f5f7]">{v.title}</p>
                <p className="mt-3 text-sm leading-[1.8] text-[#888890]">{v.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="/club-introduction"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#cc2222] transition hover:opacity-80"
            >
              → {t.identityCta}
            </a>
          </div>
        </div>
      </section>

      {/* ── S6 훈련 시스템 프리뷰 ── */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#cc2222]">
            {t.trainingLabel}
          </p>
          <h2
            className="font-['Barlow_Condensed',sans-serif] font-black uppercase leading-[1.05]"
            style={{ fontSize: "clamp(28px, 5vw, 54px)" }}
          >
            <span className="block text-[#f5f5f7]">{t.trainingTitle1}</span>
            <span className="block text-[#cc2222]">{t.trainingTitle2}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-[1.8] text-[#c0c0c5]">
            {t.trainingDesc}
          </p>

          {/* 4개 카드 */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.trainingPrograms.map((prog) => (
              <div
                key={prog.num}
                className="rounded-[14px] border-t-[3px] border-t-[#cc2222] bg-[#1c1c1e] p-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#cc2222]">{prog.num}</p>
                <p className="mt-4 text-base font-black text-[#f5f5f7]">{prog.title}</p>
                <p className="mt-3 text-sm leading-[1.8] text-[#888890]">{prog.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="/program"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#cc2222] transition hover:opacity-80"
            >
              → {t.trainingCta}
            </a>
          </div>
        </div>
      </section>

      {/* ── S7 선수 모집 CTA (레드 배경) ── */}
      <section className="bg-[#cc2222] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2
                className="font-['Barlow_Condensed',sans-serif] font-black uppercase leading-[1.05] text-white"
                style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
              >
                {t.recruitTitle}
              </h2>
              <p className="mt-3 text-base font-medium text-white/80">{t.recruitDesc}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/application"
                className="inline-flex h-[52px] w-full items-center justify-center rounded-[2px] bg-white px-8 text-base font-bold text-[#cc2222] transition hover:bg-white/90 sm:w-auto"
              >
                {t.recruitButton}
              </a>
              <a
                href="tel:01041780207"
                className="inline-flex h-[52px] w-full items-center justify-center rounded-[2px] border border-white/40 bg-transparent px-8 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                {t.recruitPhone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── S8 갤러리 미리보기 ── */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#cc2222]">
                {t.galleryLabel}
              </p>
              <h2
                className="font-['Barlow_Condensed',sans-serif] font-black uppercase leading-[1.0]"
                style={{ fontSize: "clamp(28px, 5vw, 54px)" }}
              >
                <span className="text-[#f5f5f7]">{t.galleryTitle1} </span>
                <span className="text-[#cc2222]">{t.galleryTitle2}</span>
              </h2>
            </div>
            <a
              href="/gallery"
              className="inline-flex h-12 items-center justify-center self-start rounded-[2px] border border-[#424245] bg-transparent px-8 text-sm font-semibold text-[#f5f5f7] transition hover:bg-white/5 lg:self-auto"
            >
              {t.galleryCta}
            </a>
          </div>
          <HomeGalleryPreview />
        </div>
      </section>

      {/* ── S9 클럽 약속 (세피아) ── */}
      <section className="border-b border-[#222] bg-[#0d0d0d] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[14px] border-l-4 border-[#c49550] bg-[#1a1208] px-8 py-10 sm:px-12 sm:py-14">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c49550]">
              {t.promiseLabel}
            </p>
            <blockquote
              className="mt-6 font-['Barlow_Condensed',sans-serif] font-black uppercase leading-[1.1] text-[#f5f5f7]"
              style={{ fontSize: "clamp(24px, 4vw, 44px)" }}
            >
              <span className="block">"{t.promiseLine1}</span>
              <span className="block">{t.promiseLine2}</span>
              <span className="block text-[#c49550]">{t.promiseLine3}"</span>
            </blockquote>
            <p className="mt-6 max-w-xl text-base leading-[1.8] text-[#a1a1a6]">{t.promiseDesc}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}

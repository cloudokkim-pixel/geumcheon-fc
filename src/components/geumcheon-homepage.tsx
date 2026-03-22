"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  ChevronRight,
  Dumbbell,
  GraduationCap,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { homepageGalleryCopy } from "@/lib/page-copy";
import { useSiteLanguage } from "./site-language";
import HomeGalleryPreview from "./home-gallery-preview";

const logoSrc = "http://fs.arumnet.com/image/N1010BONSA/event/2023121540/%EA%B8%88%EC%B2%9C%20%EC%B6%95%EA%B5%AC%20%ED%81%B4%EB%9F%BD%20%EC%9D%B4%EB%AF%B8%EC%A7%80.png";
const posterSrc = "http://fs.arumnet.com/image/N1010BONSA/event/2023121541/%EB%AA%A8%EC%A7%91%EA%B3%B5%EA%B3%A0%20%ED%8F%AC%EC%8A%A4%ED%84%B0_2.png";
import GSSCHeader from "./GSSCHeader";

type Program = {
  icon: React.ComponentType<{ className?: string }>;
};

const programs: Program[] = [
  {
    icon: Trophy,
  },
  {
    icon: ShieldCheck,
  },
  {
    icon: Dumbbell,
  },
  {
    icon: GraduationCap,
  },
];

const sponsorSections = [
  {
    icon: Star,
  },
  {
    icon: Users,
  },
  {
    icon: Dumbbell,
  },
];

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex h-12 w-full items-center justify-center rounded-[2px] bg-[#cc2222] px-6 text-base font-bold text-white transition hover:bg-[#cc2222]/90 sm:w-[220px]">
      {children}
    </button>
  );
}

function OutlineButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex h-12 w-full items-center justify-center rounded-[2px] border border-[#424245] bg-transparent px-6 text-base font-medium text-[#f5f5f7] transition hover:bg-white/5 sm:w-[220px]">
      {children}
    </button>
  );
}

export default function GeumcheonHomepage() {
  const { dictionary, locale } = useSiteLanguage();
  const t = dictionary.home;
  const pageGalleryCopy = homepageGalleryCopy[locale];

  return (
    <div className="min-h-screen overflow-x-hidden bg-transparent text-[#f5f5f7]">

      <GSSCHeader />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-8 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full border border-white/5 sm:h-[54rem] sm:w-[54rem]" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full border border-white/5 sm:h-[40rem] sm:w-[40rem]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
            <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-[#c0c0c5]">
              {t.heroBadge}
            </div>

            <h1 className="text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[5.3rem]">
              {t.heroTitleTop}
              <br />
              <span className="text-[#f5f5f7]">{t.heroTitleBottom}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-[1.8] text-[#c0c0c5] lg:text-lg">
              {t.heroDesc}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/application" className="w-full sm:w-[220px]">
                <PrimaryButton>{t.heroPrimary}</PrimaryButton>
              </a>
              <a href="/club-introduction" className="w-full sm:w-[220px]">
                <OutlineButton>{t.heroSecondary}</OutlineButton>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {t.heroStats.map((item) => (
                <div key={item.title} className="rounded-[14px] bg-[#1c1c1e] p-4">
                  <p className="text-xl font-black tracking-[-0.02em] text-[#f5f5f7] sm:text-2xl">{item.title}</p>
                  <p className="mt-1 text-xs text-[#888890]">{item.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative z-10">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full border border-white/5 sm:-left-8 sm:-top-8 sm:h-32 sm:w-32" />
            <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full border border-white/5 sm:-bottom-8 sm:-right-8 sm:h-28 sm:w-28" />

            <div className="overflow-hidden rounded-[14px] border border-white/10 bg-[#1c1c1e] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-3">
              <div className="grid gap-3 lg:grid-cols-[0.42fr_0.58fr]">
                <div className="rounded-[10px] border border-white/10 bg-[#000]/30 p-5">
                  <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-2xl border border-white/10 bg-black">
                    <Image src={logoSrc} alt={dictionary.header.clubName} fill className="object-cover" sizes="80px" />
                  </div>
                  <p className="mt-5 text-center text-xs uppercase tracking-[0.32em] text-[#cc2222]">{t.clubIdentityLabel}</p>
                  <p className="mt-3 text-center text-sm leading-6 text-[#c0c0c5]">
                    {t.clubIdentityDesc}
                  </p>
                  <div className="mt-5 rounded-[8px] border border-white/10 bg-black/30 p-4 text-center">
                    <p className="text-2xl font-black text-[#f5f5f7]">2015</p>
                    <p className="mt-1 text-xs text-[#888890]">{t.clubStarted}</p>
                  </div>
                </div>

                <div className="relative min-h-[24rem] overflow-hidden rounded-[10px] border border-white/10">
                  <Image src={posterSrc} alt={t.recruitTitle} fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative -mt-2 px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {t.summaryCards.map((item, index) => {
            const icons = [CalendarDays, Users, MapPin, Phone];
            const Icon = icons[index];
            return (
              <div key={item.label} className="rounded-[14px] bg-[#1c1c1e] p-5 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#f5f5f7]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#888890]">{item.label}</p>
                    <p className="mt-1 text-base font-bold leading-6 text-[#f5f5f7]">{item.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#cc2222]">{t.aboutLabel}</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#f5f5f7] sm:text-4xl lg:text-5xl">{t.aboutTitle}</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[#c0c0c5] sm:text-base">
            {t.aboutDesc}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-[14px] bg-[#1c1c1e]">
            <div className="p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#cc2222]">{t.clubIdentityLabel}</p>
              <h3 className="mt-3 text-2xl font-black text-[#f5f5f7] sm:text-3xl">{t.aboutIdentityTitle}</h3>
              <p className="mt-4 text-sm leading-7 text-[#c0c0c5] sm:text-base">
                {t.aboutIdentityDesc}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {t.aboutFacts.map((fact) => (
                  <div key={fact.key} className="rounded-[8px] border border-white/10 bg-[#111] p-4">
                    <p className="text-xs text-[#888890]">{fact.key}</p>
                    <p className="mt-1 text-lg font-black text-[#f5f5f7]">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {t.aboutFeatures.map((item, index) => {
              const icons = [Trophy, Users, MapPin, GraduationCap];
              const Icon = icons[index];
              return (
                <div key={item.title} className="rounded-[14px] bg-[#1c1c1e]">
                  <div className="p-6 sm:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-[#f5f5f7]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-[#f5f5f7]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#c0c0c5]">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="program" className="relative border-t border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#cc2222]">{t.programLabel}</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#f5f5f7] sm:text-4xl lg:text-5xl">{t.programTitle}</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[#c0c0c5] sm:text-base">
              {t.programDesc}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="overflow-hidden rounded-[14px] bg-[#1c1c1e] p-4 sm:p-5">
              <div className="flex h-full flex-col justify-between rounded-[10px] border border-white/10 bg-transparent p-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-[#cc2222]">{t.programOverviewLabel}</p>
                  <h3 className="mt-3 text-2xl font-black text-[#f5f5f7] sm:text-3xl">{t.programOverviewTitle}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#c0c0c5] sm:text-base">
                    {t.programOverviewDesc}
                  </p>
                </div>
                <div className="mt-8 rounded-[8px] border border-white/10 bg-black/25 p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-[#f5f5f7]">
                    <Star className="h-4 w-4 text-[#888890]" /> {t.programPointsTitle}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-[#c0c0c5]">
                    {t.programPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {programs.map((item, index) => {
                const Icon = item.icon;
                const program = t.programs[index];
                return (
                  <div key={program.title} className="rounded-[14px] bg-[#1c1c1e]">
                    <div className="p-6 sm:p-7">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#f5f5f7]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-xl font-bold text-[#f5f5f7]">{program.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[#c0c0c5]">{program.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="recruit" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#cc2222]">{t.recruitLabel}</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[#f5f5f7] sm:text-4xl lg:text-5xl">{t.recruitTitle}</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#c0c0c5] sm:text-base">
              {t.recruitDesc}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {t.recruitInfo.map((item) => (
                <div key={item.label} className="rounded-[14px] bg-[#1c1c1e] p-5">
                  <p className="text-sm text-[#888890]">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#f5f5f7]">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/application">
                <PrimaryButton>{t.recruitPrimary}</PrimaryButton>
              </a>
              <OutlineButton>{t.recruitSecondary}</OutlineButton>
            </div>
          </div>

          <div className="overflow-hidden rounded-[14px] border border-white/10 bg-[#1c1c1e] p-2 shadow-[0_28px_70px_rgba(0,0,0,0.4)] sm:p-3">
            <div className="relative aspect-[4/5] min-h-[24rem] overflow-hidden rounded-[10px] border border-white/10 bg-[#000]">
              <Image src={posterSrc} alt={t.recruitTitle} fill className="object-contain object-center" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="relative border-t border-[#222] py-16 sm:py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.32em] text-[#cc2222]">{pageGalleryCopy.label}</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#f5f5f7] sm:text-5xl lg:text-6xl">{pageGalleryCopy.title}</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#c0c0c5] sm:text-base">
                {pageGalleryCopy.desc}
              </p>
            </div>

            <a
              href="/gallery"
              className="inline-flex h-12 items-center justify-center rounded-[2px] border border-[#424245] bg-transparent px-8 text-sm font-semibold text-[#f5f5f7] transition hover:bg-white/5 sm:h-14 sm:px-10"
            >
              {pageGalleryCopy.cta}
            </a>
          </div>

          <HomeGalleryPreview />
        </div>
      </section>

      <section id="sponsor" className="relative overflow-hidden border-t border-[#222] py-16 sm:py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.32em] text-[#cc2222]">{t.sponsorLabel}</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#f5f5f7] sm:text-5xl lg:text-6xl">{t.sponsorTitle}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#c0c0c5] sm:text-base">
              {t.sponsorDesc}
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {sponsorSections.map((section, index) => {
              const Icon = section.icon;
              const sponsor = t.sponsors[index];

              return (
                <article
                  key={sponsor.title}
                  className="rounded-[14px] bg-[#1c1c1e] p-6 sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#f5f5f7]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-2xl font-black text-[#f5f5f7]">{sponsor.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#c0c0c5]">{sponsor.desc}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center lg:justify-center">
            <motion.a
              href="/support/apply"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.015, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              className="group inline-flex h-14 items-center justify-center gap-3 rounded-[2px] bg-[#cc2222] px-10 text-base font-black tracking-[-0.02em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#cc2222]/90 sm:min-w-[300px] sm:px-16"
            >
              <span>{t.sponsorCta}</span>
              <ChevronRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden border-t border-[#222] py-16 sm:py-20">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.92fr]">
            <div className="min-w-0 rounded-[14px] bg-[#1c1c1e] p-8 sm:p-10">
              <p className="text-sm uppercase tracking-[0.32em] text-[#cc2222]">{t.contactLabel}</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#f5f5f7] sm:text-5xl">{t.contactTitle}</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#c0c0c5] sm:text-base">
                {t.contactDesc}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[8px] border border-white/10 bg-black/20 p-6">
                  <div className="flex items-center gap-4 sm:block">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#f5f5f7]">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-[#888890] sm:mt-5">{t.contactCards[0].label}</p>
                      <p className="mt-2 max-w-full text-[1.05rem] font-bold leading-none tracking-[-0.04em] text-[#f5f5f7] sm:text-[1.15rem] lg:text-[1.22rem]">
                        {t.contactCards[0].value}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[8px] border border-white/10 bg-black/20 p-6">
                  <div className="flex items-center gap-4 sm:block">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#f5f5f7]">
                      <ChevronRight className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-[#888890] sm:mt-5">{t.contactCards[1].label}</p>
                      <p className="mt-2 max-w-full break-keep text-[1.25rem] font-bold leading-none tracking-[-0.03em] text-[#f5f5f7] sm:text-[1.4rem]">
                        {t.contactCards[1].value}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="/application" className="sm:flex-1">
                  <button className="inline-flex h-12 w-full items-center justify-center rounded-[2px] bg-[#cc2222] px-6 text-base font-bold text-white transition hover:bg-[#cc2222]/90">
                    {t.contactPrimary}
                  </button>
                </a>
                <a href="/contact" className="sm:flex-1">
                  <button className="inline-flex h-12 w-full items-center justify-center rounded-[2px] border border-[#424245] bg-transparent px-6 text-base font-medium text-[#f5f5f7] transition hover:bg-white/5">
                    {t.contactSecondary}
                  </button>
                </a>
              </div>
            </div>

            <div className="min-w-0 flex h-full flex-col rounded-[14px] bg-[#1c1c1e] p-8 sm:p-10">
              <p className="text-sm uppercase tracking-[0.32em] text-[#cc2222]">{t.promiseLabel}</p>
              <h3 className="mt-4 max-w-[560px] text-[1.95rem] font-black tracking-[-0.05em] leading-[1.14] text-[#f5f5f7] sm:text-[2.2rem] sm:leading-[1.12] md:text-[2.35rem] lg:text-[2.15rem] lg:leading-[1.08] xl:max-w-[600px] xl:text-[2.55rem]">
                <span className="block break-keep">{t.promiseTitleLines[0]}</span>
                <span className="mt-1 block break-keep sm:mt-2">{t.promiseTitleLines[1]}</span>
              </h3>
              <p className="mt-8 max-w-[520px] text-sm leading-8 text-[#c0c0c5] sm:text-base">
                {t.promiseDesc}
              </p>

              <div className="mt-auto pt-14">
                <div className="rounded-[8px] border border-white/10 bg-black/20 p-5">
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-white/10 bg-black">
                      <Image src={logoSrc} alt={dictionary.header.clubName} fill className="object-cover" sizes="56px" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-[#f5f5f7]">{dictionary.header.clubName}</p>
                      <p className="text-sm text-[#888890]">{dictionary.header.clubNameEn}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#222] bg-[#000000]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <a href="/" className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-black">
                <Image src={logoSrc} alt={dictionary.header.clubName} fill className="object-cover" sizes="48px" />
              </div>
              <div>
                <p className="text-lg font-black text-[#f5f5f7]">{dictionary.header.clubName}</p>
                <p className="text-xs uppercase tracking-[0.28em] text-[#888890]">{dictionary.header.clubNameEn}</p>
              </div>
            </a>

            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#c0c0c5] sm:gap-x-8">
              {t.footerNav.map((item) => (
                <a key={`${item.href}-${item.label}-footer`} href={item.href} className="transition hover:text-[#f5f5f7]">{item.label}</a>
              ))}
            </nav>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#222] pt-4 text-xs text-[#888890]">
            <span>{t.footerCopyright}</span>
            <a
              href="/admin/login"
              aria-label="관리자 페이지"
              title="관리자 페이지"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/18 transition hover:bg-white/5 hover:text-white/42"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

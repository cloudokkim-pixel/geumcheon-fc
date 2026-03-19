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
    <button className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-red-600 px-6 text-base font-semibold text-white transition hover:bg-red-700 sm:w-[220px]">
      {children}
    </button>
  );
}

function OutlineButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex h-12 w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 text-base font-medium text-white transition hover:bg-white/10 sm:w-[220px]">
      {children}
    </button>
  );
}

export default function GeumcheonHomepage() {
  const { dictionary, locale } = useSiteLanguage();
  const t = dictionary.home;
  const pageGalleryCopy = homepageGalleryCopy[locale];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050b15] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-[0.05] bg-[repeating-linear-gradient(135deg,rgba(239,68,68,0.35)_0px,rgba(239,68,68,0.35)_2px,transparent_2px,transparent_40px)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_center,transparent_0_52%,rgba(239,68,68,0.35)_53%,transparent_54%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:34px_34px]" />

      <GSSCHeader />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-8 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full border border-red-500/10 sm:h-[54rem] sm:w-[54rem]" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full border border-white/10 sm:h-[40rem] sm:w-[40rem]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(239,68,68,0.16),transparent)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
            <div className="mb-5 inline-flex rounded-full border border-red-300/25 bg-red-500/10 px-4 py-1 text-sm text-red-200">
              {t.heroBadge}
            </div>

            <h1 className="text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.3rem]">
              {t.heroTitleTop}
              <br />
              <span className="text-red-500">{t.heroTitleBottom}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/72 sm:text-base lg:text-lg">
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
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-lg font-black text-red-300 sm:text-xl">{item.title}</p>
                  <p className="mt-1 text-xs text-white/60 sm:text-sm">{item.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative z-10">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full border border-red-400/20 sm:-left-8 sm:-top-8 sm:h-32 sm:w-32" />
            <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full border border-white/10 sm:-bottom-8 sm:-right-8 sm:h-28 sm:w-28" />

            <div className="overflow-hidden rounded-[2rem] border border-red-500/20 bg-white/5 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-3">
              <div className="grid gap-3 lg:grid-cols-[0.42fr_0.58fr]">
                <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5">
                  <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-2xl border border-red-500/25 bg-black">
                    <Image src={logoSrc} alt={dictionary.header.clubName} fill className="object-cover" sizes="80px" />
                  </div>
                  <p className="mt-5 text-center text-xs uppercase tracking-[0.32em] text-red-300">{t.clubIdentityLabel}</p>
                  <p className="mt-3 text-center text-sm leading-6 text-white/68">
                    {t.clubIdentityDesc}
                  </p>
                  <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
                    <p className="text-2xl font-black">2015</p>
                    <p className="mt-1 text-xs text-white/55">{t.clubStarted}</p>
                  </div>
                </div>

                <div className="relative min-h-[24rem] overflow-hidden rounded-[1.5rem] border border-red-500/15">
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
              <div key={item.label} className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 shadow-xl backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-500/15 text-red-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-white/90">{item.value}</p>
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
            <p className="text-sm uppercase tracking-[0.28em] text-red-300">{t.aboutLabel}</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.aboutTitle}</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            {t.aboutDesc}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-white">
            <div className="p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-red-300">{t.clubIdentityLabel}</p>
              <h3 className="mt-3 text-2xl font-black sm:text-3xl">{t.aboutIdentityTitle}</h3>
              <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
                {t.aboutIdentityDesc}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {t.aboutFacts.map((fact) => (
                  <div key={fact.key} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <p className="text-xs text-white/50">{fact.key}</p>
                    <p className="mt-1 text-lg font-black text-red-300">{fact.value}</p>
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
                <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,#111a2b_0%,#0a1220_100%)] text-white shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                  <div className="p-6 sm:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-400/20 bg-red-500/15 text-red-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/72">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="program" className="relative bg-[#07101d] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(239,68,68,0.08)_40%,transparent_41%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-red-300">{t.programLabel}</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.programTitle}</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              {t.programDesc}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="overflow-hidden rounded-[2rem] border border-red-500/20 bg-black/40 p-4 sm:p-5">
              <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-red-300">{t.programOverviewLabel}</p>
                  <h3 className="mt-3 text-2xl font-black sm:text-3xl">{t.programOverviewTitle}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
                    {t.programOverviewDesc}
                  </p>
                </div>
                <div className="mt-8 rounded-2xl border border-white/10 bg-black/25 p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-white/85">
                    <Star className="h-4 w-4 text-red-300" /> {t.programPointsTitle}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-white/65">
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
                  <div key={program.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 text-white shadow-lg">
                    <div className="p-6 sm:p-7">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/15 text-red-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-xl font-bold">{program.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/65">{program.desc}</p>
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
            <p className="text-sm uppercase tracking-[0.3em] text-red-300">{t.recruitLabel}</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{t.recruitTitle}</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
              {t.recruitDesc}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {t.recruitInfo.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-white/50">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/90">{item.value}</p>
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

          <div className="overflow-hidden rounded-[2rem] border border-red-500/20 bg-white/5 p-2 shadow-[0_28px_70px_rgba(0,0,0,0.4)] sm:p-3">
            <div className="relative aspect-[4/5] min-h-[24rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a0f19]">
              <Image src={posterSrc} alt={t.recruitTitle} fill className="object-contain object-center" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="relative bg-[#07101d] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_26%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.32em] text-red-300">{pageGalleryCopy.label}</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">{pageGalleryCopy.title}</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                {pageGalleryCopy.desc}
              </p>
            </div>

            <a
              href="/gallery"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] px-8 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.1] sm:h-14 sm:px-10"
            >
              {pageGalleryCopy.cta}
            </a>
          </div>

          <HomeGalleryPreview />
        </div>
      </section>

      <section id="sponsor" className="relative overflow-hidden bg-[linear-gradient(135deg,#9d171c_0%,#d42024_42%,#3a202f_100%)] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(255,80,80,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.32em] text-white/70">{t.sponsorLabel}</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">{t.sponsorTitle}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82 sm:text-base">
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
                  className="rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-[0_20px_60px_rgba(80,0,0,0.18)] backdrop-blur-md sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/14 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-2xl font-black text-white">{sponsor.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/82">{sponsor.desc}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center lg:justify-center">
            <motion.a
              href="/contact"
              initial={{ scale: 1, boxShadow: "0 18px 40px rgba(66,10,18,0.22)" }}
              animate={{
                scale: [1, 1.015, 1],
                boxShadow: [
                  "0 18px 40px rgba(66,10,18,0.22)",
                  "0 24px 54px rgba(66,10,18,0.34)",
                  "0 18px 40px rgba(66,10,18,0.22)",
                ],
              }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              className="group inline-flex h-14 items-center justify-center gap-3 rounded-[1.35rem] bg-[linear-gradient(180deg,rgba(255,245,244,0.96)_0%,rgba(255,225,220,0.92)_100%)] px-10 text-base font-black tracking-[-0.02em] text-[#7d1f2d] shadow-[0_18px_40px_rgba(66,10,18,0.22)] ring-1 ring-white/30 transition duration-200 hover:-translate-y-0.5 hover:bg-[linear-gradient(180deg,rgba(255,250,248,1)_0%,rgba(255,232,227,0.96)_100%)] hover:shadow-[0_24px_50px_rgba(66,10,18,0.28)] active:translate-y-[1px] active:scale-[0.985] sm:min-w-[300px] sm:px-16"
            >
              <span className="relative">
                {t.sponsorCta}
                <span className="pointer-events-none absolute -right-3 -top-1 h-2.5 w-2.5 rounded-full bg-[#ff7a6e] shadow-[0_0_14px_rgba(255,122,110,0.9)] animate-pulse" />
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7d1f2d]/10 transition duration-200 group-hover:translate-x-1 group-hover:bg-[#7d1f2d]/15">
                <ChevronRight className="h-4 w-4" />
              </span>
            </motion.a>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[#050b15] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.08),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.03),transparent_22%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.92fr]">
            <div className="min-w-0 rounded-[2.25rem] border border-white/10 bg-[#0d1528] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.32)] sm:p-10">
              <p className="text-sm uppercase tracking-[0.32em] text-red-200">{t.contactLabel}</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">{t.contactTitle}</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
                {t.contactDesc}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.6rem] border border-white/10 bg-[#09101f] p-6">
                  <div className="flex items-center gap-4 sm:block">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#3a1922] text-red-200">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-white/60 sm:mt-5">{t.contactCards[0].label}</p>
                      <p className="mt-2 max-w-full text-[1.05rem] font-bold leading-none tracking-[-0.04em] text-white sm:text-[1.15rem] lg:text-[1.22rem]">
                        {t.contactCards[0].value}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-[#09101f] p-6">
                  <div className="flex items-center gap-4 sm:block">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2b1827] text-red-200">
                      <ChevronRight className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-white/60 sm:mt-5">{t.contactCards[1].label}</p>
                      <p className="mt-2 max-w-full break-keep text-[1.25rem] font-bold leading-none tracking-[-0.03em] text-white sm:text-[1.4rem]">
                        {t.contactCards[1].value}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="/application" className="sm:flex-1">
                  <button className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-[#ef2924] px-6 text-base font-semibold text-white shadow-[0_18px_35px_rgba(239,41,36,0.28)] transition hover:bg-[#ff3a35]">
                    {t.contactPrimary}
                  </button>
                </a>
                <a href="/contact" className="sm:flex-1">
                  <button className="inline-flex h-12 w-full items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-6 text-base font-medium text-white transition hover:bg-white/[0.08]">
                    {t.contactSecondary}
                  </button>
                </a>
              </div>
            </div>

            <div className="min-w-0 flex h-full flex-col rounded-[2.25rem] border border-white/10 bg-[#0d1528] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.32)] sm:p-10">
              <p className="text-sm uppercase tracking-[0.32em] text-red-200">{t.promiseLabel}</p>
              <h3 className="mt-4 max-w-[560px] text-[1.95rem] font-black tracking-[-0.05em] leading-[1.14] text-white sm:text-[2.2rem] sm:leading-[1.12] md:text-[2.35rem] lg:text-[2.15rem] lg:leading-[1.08] xl:max-w-[600px] xl:text-[2.55rem]">
                <span className="block break-keep">{t.promiseTitleLines[0]}</span>
                <span className="mt-1 block break-keep sm:mt-2">{t.promiseTitleLines[1]}</span>
              </h3>
              <p className="mt-8 max-w-[520px] text-sm leading-8 text-white/72 sm:text-base">
                {t.promiseDesc}
              </p>

              <div className="mt-auto pt-14">
                <div className="rounded-[1.8rem] border border-white/10 bg-[#080d19] p-5">
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-red-500/30 bg-black">
                      <Image src={logoSrc} alt={dictionary.header.clubName} fill className="object-cover" sizes="56px" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white">{dictionary.header.clubName}</p>
                      <p className="text-sm text-white/55">{dictionary.header.clubNameEn}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[linear-gradient(180deg,#040912_0%,#02060d_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <a href="/" className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-red-500/25 bg-black">
                <Image src={logoSrc} alt={dictionary.header.clubName} fill className="object-cover" sizes="48px" />
              </div>
              <div>
                <p className="text-lg font-black text-white">{dictionary.header.clubName}</p>
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">{dictionary.header.clubNameEn}</p>
              </div>
            </a>

            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70 sm:gap-x-8">
              {t.footerNav.map((item) => (
                <a key={`${item.href}-${item.label}-footer`} href={item.href} className="transition hover:text-white">{item.label}</a>
              ))}
            </nav>
          </div>

          <div className="mt-6 border-t border-white/10 pt-4 text-xs text-white/38">
            {t.footerCopyright}
          </div>
        </div>
      </footer>
    </div>
  );
}

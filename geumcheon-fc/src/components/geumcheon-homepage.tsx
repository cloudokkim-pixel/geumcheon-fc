"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Camera,
  ChevronRight,
  Dumbbell,
  GraduationCap,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  Trophy,
  Users,
} from "lucide-react";

const logoSrc = "http://fs.arumnet.com/image/N1010BONSA/event/2023121540/%EA%B8%88%EC%B2%9C%20%EC%B6%95%EA%B5%AC%20%ED%81%B4%EB%9F%BD%20%EC%9D%B4%EB%AF%B8%EC%A7%80.png";
const posterSrc = "http://fs.arumnet.com/image/N1010BONSA/event/2023121541/%EB%AA%A8%EC%A7%91%EA%B3%B5%EA%B3%A0%20%ED%8F%AC%EC%8A%A4%ED%84%B0_2.png";

type Program = {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
};

const programs: Program[] = [
  {
    title: "기본기 집중 세션",
    desc: "볼 컨트롤, 패스, 첫 터치, 밸런스와 방향 전환 중심의 반복 훈련",
    icon: Trophy,
  },
  {
    title: "포지션별 디테일 훈련",
    desc: "공격, 미드필드, 수비 역할별 상황 판단과 전술 이해 훈련",
    icon: ShieldCheck,
  },
  {
    title: "피지컬 · 스피드 강화",
    desc: "성장기 선수에게 필요한 민첩성, 코어, 스피드 보강 프로그램 운영",
    icon: Dumbbell,
  },
  {
    title: "진학 · 진로 컨설팅",
    desc: "선수 목표에 맞춘 진학 설계와 장기 커리어 로드맵 지원",
    icon: GraduationCap,
  },
];

const gallery = [
  "훈련 집중도",
  "전술 이해 훈련",
  "피지컬 세션",
  "팀워크 강화",
  "실전 감각 향상",
  "진학 준비 지원",
];

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex h-12 items-center justify-center rounded-2xl bg-red-600 px-6 text-base font-semibold text-white transition hover:bg-red-700">
      {children}
    </button>
  );
}

function OutlineButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 text-base font-medium text-white transition hover:bg-white/10">
      {children}
    </button>
  );
}

export default function GeumcheonHomepage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050b15] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-[0.05] bg-[repeating-linear-gradient(135deg,rgba(239,68,68,0.35)_0px,rgba(239,68,68,0.35)_2px,transparent_2px,transparent_40px)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_center,transparent_0_52%,rgba(239,68,68,0.35)_53%,transparent_54%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:34px_34px]" />

      <header className="sticky top-0 z-50 border-b border-red-500/20 bg-[#050b15]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-red-500/30 bg-black sm:h-14 sm:w-14">
              <img src={logoSrc} alt="서울금천축구클럽 로고" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-base font-black sm:text-lg">서울금천축구클럽</p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/55 sm:text-xs">
                Geumcheon Football Club
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm text-white/72 lg:flex">
            <a href="#about" className="transition hover:text-red-300">클럽소개</a>
            <a href="#program" className="transition hover:text-red-300">훈련프로그램</a>
            <a href="#recruit" className="transition hover:text-red-300">선수모집</a>
            <a href="#gallery" className="transition hover:text-red-300">갤러리</a>
            <a href="#contact" className="transition hover:text-red-300">문의</a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <PrimaryButton>상담문의</PrimaryButton>
            </div>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-8 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full border border-red-500/10 sm:h-[54rem] sm:w-[54rem]" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full border border-white/10 sm:h-[40rem] sm:w-[40rem]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(239,68,68,0.16),transparent)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
            <div className="mb-5 inline-flex rounded-full border border-red-300/25 bg-red-500/10 px-4 py-1 text-sm text-red-200">
              Elite Youth Football Academy
            </div>

            <h1 className="text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.3rem]">
              GEUMCHEON
              <br />
              <span className="text-red-500">FOOTBALL CLUB</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/72 sm:text-base lg:text-lg">
              서울금천축구클럽은 중등부·고등부 선수를 대상으로 기본기, 포지션별 전술, 피지컬, 진학 연계를 함께 운영하는 성장형 축구클럽입니다. 선수 한 명 한 명의 현재 수준과 목표에 맞춰 체계적인 훈련 환경을 제공합니다.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton>선수 모집 바로가기</PrimaryButton>
              <OutlineButton>클럽 소개 보기</OutlineButton>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["중등부", "전학년 모집"],
                ["고등부", "1·2학년 모집"],
                ["주 5회", "정규 훈련 운영"],
                ["실내·실외", "전용 구장 활용"],
              ].map(([title, sub]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-lg font-black text-red-300 sm:text-xl">{title}</p>
                  <p className="mt-1 text-xs text-white/60 sm:text-sm">{sub}</p>
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
                  <div className="mx-auto h-20 w-20 overflow-hidden rounded-2xl border border-red-500/25 bg-black">
                    <img src={logoSrc} alt="클럽 엠블럼" className="h-full w-full object-cover" />
                  </div>
                  <p className="mt-5 text-center text-xs uppercase tracking-[0.32em] text-red-300">Club Identity</p>
                  <p className="mt-3 text-center text-sm leading-6 text-white/68">
                    엠블럼 중심형 비주얼과 강한 스포츠 무드를 결합한 메인 브랜딩 블록
                  </p>
                  <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
                    <p className="text-2xl font-black">2015</p>
                    <p className="mt-1 text-xs text-white/55">클럽 운영 시작</p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[1.5rem] border border-red-500/15">
                  <img src={posterSrc} alt="선수 모집 공고 포스터" className="h-full min-h-[24rem] w-full object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative -mt-2 px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "훈련 운영", value: "월 ~ 금 17:30 - 19:30", icon: CalendarDays },
            { label: "주요 대상", value: "중등부 전학년 / 고등부 1·2학년", icon: Users },
            { label: "훈련 환경", value: "전용 실내구장 및 실외구장", icon: MapPin },
            { label: "상담 문의", value: "010-4178-0207", icon: Phone },
          ].map((item) => {
            const Icon = item.icon;
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
            <p className="text-sm uppercase tracking-[0.28em] text-red-300">About Club</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">클럽 소개</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            서울금천축구클럽은 기술 완성과 경기 이해도 향상을 바탕으로, 선수의 현재 성장과 다음 단계를 함께 준비하는 것을 목표로 합니다. 기초 훈련, 실전 적용, 진학 연계를 유기적으로 연결해 안정적인 성장을 지원합니다.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 text-white">
            <div className="p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-red-300">Club Identity</p>
              <h3 className="mt-3 text-2xl font-black sm:text-3xl">함께 뛰고 함께 성장하는 서울금천축구클럽</h3>
              <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
                기본기의 완성에서 출발해 포지션별 디테일, 실전 감각, 피지컬 보강, 진학 준비까지 이어지는 훈련 구조를 운영합니다. 선수 스스로의 성장과 팀 플레이의 균형을 함께 만들어가는 클럽입니다.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  ["창단", "Since 2015"],
                  ["모집", "중등부 · 고등부"],
                  ["훈련", "주 5회 운영"],
                  ["방향", "훈련 · 진학 연계"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <p className="text-xs text-white/50">{k}</p>
                    <p className="mt-1 text-lg font-black text-red-300">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "기본기 중심 훈련",
                desc: "패스, 퍼스트터치, 드리블, 방향 전환 등 경기력의 기초를 세밀하게 훈련합니다.",
                icon: Trophy,
              },
              {
                title: "전문 코칭 시스템",
                desc: "학년과 성장 단계에 맞춘 체계적 지도와 반복 피드백으로 선수 완성도를 높입니다.",
                icon: Users,
              },
              {
                title: "전용 훈련 환경",
                desc: "실내·실외 구장을 병행 활용하여 시즌과 날씨에 맞는 안정적인 훈련을 운영합니다.",
                icon: MapPin,
              },
              {
                title: "진학 연계 지원",
                desc: "선수의 목표에 따라 진학 상담과 장기 성장 방향을 함께 설계합니다.",
                icon: GraduationCap,
              },
            ].map((item) => {
              const Icon = item.icon;
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
              <p className="text-sm uppercase tracking-[0.28em] text-red-300">Training Program</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">훈련 프로그램</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              연령과 성장 단계에 맞춰 기본기 훈련, 포지션별 전술, 피지컬 강화, 진학 상담을 유기적으로 연결한 프로그램을 운영합니다.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="overflow-hidden rounded-[2rem] border border-red-500/20 bg-black/40 p-4 sm:p-5">
              <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-red-300">Program Overview</p>
                  <h3 className="mt-3 text-2xl font-black sm:text-3xl">선수 성장에 맞춘 단계별 훈련</h3>
                  <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
                    기술 훈련과 전술 이해를 기본으로 하며, 실전 대응 능력과 피지컬 보강을 병행합니다. 선수의 목표에 따라 진학 준비와 장기 로드맵까지 함께 설계합니다.
                  </p>
                </div>
                <div className="mt-8 rounded-2xl border border-white/10 bg-black/25 p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-white/85">
                    <Star className="h-4 w-4 text-red-300" /> 주요 포인트
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-white/65">
                    <li>기본기와 볼 감각 중심의 반복 훈련 운영</li>
                    <li>포지션별 상황 판단과 전술 이해 강화</li>
                    <li>피지컬 보강 및 진학 연계 상담 지원</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {programs.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 text-white shadow-lg">
                    <div className="p-6 sm:p-7">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/15 text-red-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/65">{item.desc}</p>
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
            <p className="text-sm uppercase tracking-[0.3em] text-red-300">Recruit</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">선수 모집 안내</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
              서울금천축구클럽은 중등부 전학년, 고등부 1·2학년 선수를 모집하고 있습니다. 훈련 참여와 상담은 아래 모집 안내를 통해 확인하실 수 있습니다.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["모집대상", "중등부 전학년 / 고등부 1·2학년"],
                ["훈련시간", "월 ~ 금 17:30 ~ 19:30"],
                ["훈련장소", "전용 실내 및 실외 구장"],
                ["상담문의", "010-4178-0207"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-white/50">{label}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/90">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton>참가 신청</PrimaryButton>
              <OutlineButton>모집 요강 보기</OutlineButton>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-red-500/20 bg-white/5 p-2 shadow-[0_28px_70px_rgba(0,0,0,0.4)] sm:p-3">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
              <img src={posterSrc} alt="모집 공고 포스터" className="h-full w-full object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="relative bg-[#07101d] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-red-300">Gallery Preview</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">훈련 갤러리</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              훈련 현장, 전술 세션, 팀워크 프로그램, 피지컬 강화 등 클럽의 실제 운영 장면이 들어가는 갤러리 영역입니다.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {gallery.map((item, idx) => (
              <div
                key={item}
                className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(239,68,68,0.18),rgba(255,255,255,0.03))] ${idx % 3 === 0 ? "lg:col-span-2" : ""}`}
              >
                <div className="flex min-h-[10rem] flex-col justify-between p-5 sm:min-h-[12rem]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/25 text-red-300">
                    <Camera className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/45">Photo Block</p>
                    <p className="mt-2 text-lg font-bold">{item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(143,16,24,0.92)_0%,rgba(214,31,44,0.9)_38%,rgba(11,21,40,0.96)_100%)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-white/80">Contact</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">선수 모집 상담</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
            훈련 참여, 테스트, 진학 상담 등 클럽 운영 관련 문의를 안내하는 영역입니다. 전화 상담 또는 문의 접수를 통해 상세 일정을 확인하실 수 있습니다.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/20 bg-white/10 p-6 backdrop-blur-md sm:p-7">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                <Phone className="h-6 w-6" />
              </div>
              <p className="mt-4 text-sm text-white/75">참가문의</p>
              <p className="mt-2 text-2xl font-black sm:text-3xl">010-4178-0207</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/20 bg-white/10 p-6 backdrop-blur-md sm:p-7">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                <ChevronRight className="h-6 w-6" />
              </div>
              <p className="mt-4 text-sm text-white/75">담당자</p>
              <p className="mt-2 text-2xl font-black sm:text-3xl">천경필 대표</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#081325] px-6 text-base font-semibold text-white transition hover:bg-black">
              상담 신청하기
            </button>
            <button className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 text-base text-white transition hover:bg-white/15">
              클럽 문의 남기기
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-red-500/20 bg-[#040912] py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-white/45 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-xl border border-red-500/25 bg-black">
              <img src={logoSrc} alt="로고" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="font-semibold text-white/80">서울금천축구클럽</p>
              <p className="text-xs uppercase tracking-[0.2em]">Geumcheon Football Club</p>
            </div>
          </div>
          <p>© 2025 Geumcheon Football Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

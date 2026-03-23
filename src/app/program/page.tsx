"use client";

import GSSCHeader from "@/components/GSSCHeader";
import Footer from "@/components/Footer";
import { useSiteLanguage, type Locale } from "@/components/site-language";
import { Trophy, ShieldCheck, Dumbbell, GraduationCap, ChevronRight } from "lucide-react";

type ProgramCopy = {
  pageLabel: string;
  pageTitle: string;
  pageDesc: string;
  overviewLabel: string;
  overviewTitle: string;
  overviewDesc: string;
  overviewPoints: string[];
  ageLabel: string;
  ageTitle: string;
  ages: Array<{ grade: string; desc: string }>;
  programLabel: string;
  programTitle: string;
  programs: Array<{ title: string; desc: string; bullets: string[] }>;
  valuesLabel: string;
  valuesTitle: string;
  values: Array<{ title: string; desc: string }>;
  ctaTitle: string;
  ctaDesc: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

const copy: Record<Locale, ProgramCopy> = {
  ko: {
    pageLabel: "Training System",
    pageTitle: "육성시스템",
    pageDesc: "기본기부터 K4 진출까지 — 선수 개인의 수준과 목표에 맞는 수직 통합 육성 프로그램을 운영합니다.",
    overviewLabel: "Overview",
    overviewTitle: "체계적인 선수 개발",
    overviewDesc:
      "금천축구클럽은 초등~고등 선수 모두를 대상으로, 기술·전술·피지컬·인성을 동시에 발전시키는 통합 훈련 시스템을 갖추고 있습니다.",
    overviewPoints: [
      "모바일 퍼스트 훈련 — 개인 기술 기반 구축",
      "포지션별 전술 이해와 팀 플레이 훈련",
      "성장기 맞춤 피지컬 & 스피드 프로그램",
      "진학 연계 및 장기 성장 로드맵 설계",
    ],
    ageLabel: "Age Groups",
    ageTitle: "연령별 운영",
    ages: [
      { grade: "U12 (초등 저학년)", desc: "기본기 집중 · 즐거운 참여 중심" },
      { grade: "U15 (초등 고학년~중학교)", desc: "포지션 이해 · 팀 전술 도입" },
      { grade: "U18 (고등)", desc: "실전 전술 · 대회 참가 · 진학 연계" },
    ],
    programLabel: "Programs",
    programTitle: "훈련 프로그램",
    programs: [
      {
        title: "기본기 집중 세션",
        desc: "패스, 드리블, 퍼스트 터치, 방향 전환을 반복적으로 훈련합니다.",
        bullets: ["패스 & 드리블 정확도", "퍼스트 터치 & 볼 컨트롤", "방향 전환 & 빠른 발놀림"],
      },
      {
        title: "포지션별 전술 훈련",
        desc: "공격, 미드필드, 수비 역할에 맞춘 판단과 전술 이해를 강화합니다.",
        bullets: ["포지션 역할 이해", "1:1 대응 & 오프더볼 움직임", "빌드업 & 전환 플레이"],
      },
      {
        title: "피지컬 & 스피드 강화",
        desc: "성장기 선수에게 필요한 코어, 민첩성, 스피드 프로그램을 운영합니다.",
        bullets: ["코어 & 균형 훈련", "민첩성 & 반응 속도", "스프린트 & 지구력"],
      },
      {
        title: "진학 및 진로 컨설팅",
        desc: "선수 목표에 맞춘 진학 계획과 장기 성장 로드맵을 설계합니다.",
        bullets: ["고교 & 대학 진학 플랜", "K4 팀 진출 연계", "장기 선수 개발 로드맵"],
      },
    ],
    valuesLabel: "Core Values",
    valuesTitle: "핵심 가치",
    values: [
      { title: "Discipline", desc: "규칙과 루틴 속에서 성장하는 훈련 문화" },
      { title: "Respect", desc: "동료·지도자·상대방에 대한 존중" },
      { title: "Teamwork", desc: "개인 기량을 팀 성과로 연결하는 협동" },
      { title: "Challenge", desc: "한계를 넘는 도전 정신과 끊임없는 성장" },
    ],
    ctaTitle: "육성 프로그램 참여",
    ctaDesc: "지금 바로 등록 신청을 하거나 클럽에 문의하세요.",
    ctaPrimary: "선수 등록 신청",
    ctaSecondary: "클럽 소개 보기",
  },
  en: {
    pageLabel: "Training System",
    pageTitle: "Development System",
    pageDesc: "From fundamentals to K4 — a vertically integrated player development program tailored to each athlete's level and goals.",
    overviewLabel: "Overview",
    overviewTitle: "Systematic Player Development",
    overviewDesc:
      "Geumcheon FC provides an integrated training system for players from elementary to high school, simultaneously developing technical, tactical, physical, and character skills.",
    overviewPoints: [
      "Individual skill foundation building",
      "Positional tactical understanding and team play",
      "Physical & speed programs suited for growing athletes",
      "Academic pathway planning and long-term development roadmap",
    ],
    ageLabel: "Age Groups",
    ageTitle: "Age-Based Programs",
    ages: [
      { grade: "U12 (Elementary)", desc: "Fundamentals focus · Fun & engagement centered" },
      { grade: "U15 (Middle School)", desc: "Positional understanding · Team tactics introduction" },
      { grade: "U18 (High School)", desc: "Match tactics · Competition · Academic pathway" },
    ],
    programLabel: "Programs",
    programTitle: "Training Programs",
    programs: [
      {
        title: "Fundamentals Session",
        desc: "Ball control, passing, first touch, and directional change are trained through repetition.",
        bullets: ["Pass & dribble accuracy", "First touch & ball control", "Directional change & footwork"],
      },
      {
        title: "Position-Based Tactics",
        desc: "We strengthen decisions and tactical understanding for attacking, midfield, and defensive roles.",
        bullets: ["Positional role understanding", "1v1 defending & off-ball movement", "Build-up & transition play"],
      },
      {
        title: "Physical & Speed Work",
        desc: "Core strength, agility, and speed sessions are designed for developing players.",
        bullets: ["Core & balance training", "Agility & reaction speed", "Sprint & endurance"],
      },
      {
        title: "Pathway Consulting",
        desc: "We help players build school and long-term development plans aligned with their goals.",
        bullets: ["High school & university planning", "K4 team pathway support", "Long-term player development roadmap"],
      },
    ],
    valuesLabel: "Core Values",
    valuesTitle: "Core Values",
    values: [
      { title: "Discipline", desc: "A training culture that grows through rules and routine" },
      { title: "Respect", desc: "Respect for teammates, coaches, and opponents" },
      { title: "Teamwork", desc: "Connecting individual skills to team performance" },
      { title: "Challenge", desc: "The spirit to push limits and continuously grow" },
    ],
    ctaTitle: "Join the Development Program",
    ctaDesc: "Apply for registration or contact the club today.",
    ctaPrimary: "Apply Now",
    ctaSecondary: "Club Introduction",
  },
  ja: {
    pageLabel: "Training System",
    pageTitle: "育成システム",
    pageDesc: "基礎からK4進出まで — 選手個人のレベルと目標に合った縦統合型育成プログラムを提供します。",
    overviewLabel: "Overview",
    overviewTitle: "体系的な選手育成",
    overviewDesc:
      "クムチョンFCは小学生から高校生まで、技術・戦術・フィジカル・人間性を同時に伸ばす統合トレーニングシステムを提供します。",
    overviewPoints: [
      "個人技術の基礎構築",
      "ポジション別戦術理解とチームプレー",
      "成長期に合ったフィジカル・スピードプログラム",
      "進学連携と長期成長ロードマップ設計",
    ],
    ageLabel: "Age Groups",
    ageTitle: "年代別プログラム",
    ages: [
      { grade: "U12（小学生）", desc: "基礎集中・楽しさ重視" },
      { grade: "U15（中学生）", desc: "ポジション理解・チーム戦術導入" },
      { grade: "U18（高校生）", desc: "実戦戦術・大会参加・進学連携" },
    ],
    programLabel: "Programs",
    programTitle: "トレーニングプログラム",
    programs: [
      {
        title: "基礎技術セッション",
        desc: "パス、ドリブル、ファーストタッチ、方向転換を反復して鍛えます。",
        bullets: ["パス・ドリブル精度", "ファーストタッチ・ボールコントロール", "方向転換・フットワーク"],
      },
      {
        title: "ポジション別戦術トレーニング",
        desc: "攻撃・中盤・守備の役割に応じた判断力と戦術理解を強化します。",
        bullets: ["ポジション役割理解", "1対1・オフザボール動き", "ビルドアップ・切り替えプレー"],
      },
      {
        title: "フィジカル・スピード強化",
        desc: "成長期の選手に必要なコア・敏捷性・スピードを鍛えます。",
        bullets: ["コア・バランストレーニング", "敏捷性・反応速度", "スプリント・持久力"],
      },
      {
        title: "進学・進路コンサルティング",
        desc: "選手の目標に合わせて進学計画と長期成長ロードマップを設計します。",
        bullets: ["高校・大学進学プラン", "K4チーム進出サポート", "長期選手育成ロードマップ"],
      },
    ],
    valuesLabel: "Core Values",
    valuesTitle: "中核価値",
    values: [
      { title: "Discipline", desc: "規律とルーティンの中で成長するトレーニング文化" },
      { title: "Respect", desc: "仲間・指導者・相手への敬意" },
      { title: "Teamwork", desc: "個人の技量をチームの成果へつなぐ協調" },
      { title: "Challenge", desc: "限界を超える挑戦精神と絶え間ない成長" },
    ],
    ctaTitle: "育成プログラムへ参加",
    ctaDesc: "今すぐ登録申請するか、クラブにお問い合わせください。",
    ctaPrimary: "選手登録申請",
    ctaSecondary: "クラブ紹介を見る",
  },
  zh: {
    pageLabel: "Training System",
    pageTitle: "培养体系",
    pageDesc: "从基础到K4晋升 — 根据球员个人水平与目标定制的纵向一体化青训项目。",
    overviewLabel: "Overview",
    overviewTitle: "系统化球员培养",
    overviewDesc:
      "金泉FC为小学至高中阶段的球员提供集技术、战术、体能与品格为一体的综合训练体系。",
    overviewPoints: [
      "个人技术基础构建",
      "位置战术理解与团队配合训练",
      "适合成长期的体能与速度项目",
      "升学规划与长期成长路线图设计",
    ],
    ageLabel: "Age Groups",
    ageTitle: "年龄段项目",
    ages: [
      { grade: "U12（小学生）", desc: "基础集中训练 · 以快乐参与为主" },
      { grade: "U15（初中生）", desc: "位置理解 · 团队战术导入" },
      { grade: "U18（高中生）", desc: "实战战术 · 参赛 · 升学衔接" },
    ],
    programLabel: "Programs",
    programTitle: "训练项目",
    programs: [
      {
        title: "基础技术训练",
        desc: "通过反复训练提升传球、盘带、第一脚触球与变向能力。",
        bullets: ["传球与盘带精准度", "第一脚触球与控球", "变向与脚法训练"],
      },
      {
        title: "位置战术训练",
        desc: "加强进攻、中场、防守位置所需的判断力与战术理解。",
        bullets: ["位置职责理解", "一对一防守与无球跑动", "后场组织与攻防转换"],
      },
      {
        title: "体能与速度提升",
        desc: "为成长阶段球员设计核心、敏捷与速度训练内容。",
        bullets: ["核心与平衡训练", "敏捷性与反应速度", "冲刺与耐力训练"],
      },
      {
        title: "升学与发展咨询",
        desc: "根据球员目标制定升学规划与长期成长路线。",
        bullets: ["高中、大学升学规划", "K4球队晋升支持", "长期球员发展路线图"],
      },
    ],
    valuesLabel: "Core Values",
    valuesTitle: "核心价值",
    values: [
      { title: "Discipline", desc: "在规律与习惯中成长的训练文化" },
      { title: "Respect", desc: "对队友、教练和对手的尊重" },
      { title: "Teamwork", desc: "将个人技术转化为团队成果的协作精神" },
      { title: "Challenge", desc: "突破极限、持续成长的挑战精神" },
    ],
    ctaTitle: "加入培养项目",
    ctaDesc: "立即申请注册或联系俱乐部。",
    ctaPrimary: "申请球员注册",
    ctaSecondary: "查看俱乐部介绍",
  },
};

const programIcons = [Trophy, ShieldCheck, Dumbbell, GraduationCap];

export default function ProgramPage() {
  const { locale } = useSiteLanguage();
  const t = copy[locale];

  return (
    <div className="min-h-screen bg-transparent text-[#f5f5f7]">
      <GSSCHeader />

      {/* 히어로 */}
      <section className="relative border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#cc2222]">{t.pageLabel}</p>
          <h1 className="mt-3 text-[clamp(2rem,7vw,3.375rem)] font-black uppercase leading-tight tracking-tight text-[#f5f5f7]">
            {t.pageTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-[1.7] text-[#c0c0c5]">{t.pageDesc}</p>
        </div>
      </section>

      {/* 개요 */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[14px] bg-[#1c1c1e] p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#cc2222]">{t.overviewLabel}</p>
            <h2 className="mt-3 text-[clamp(1.375rem,4vw,2.25rem)] font-black text-[#f5f5f7]">{t.overviewTitle}</h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-[#c0c0c5] sm:text-base">{t.overviewDesc}</p>
          </div>
          <div className="rounded-[14px] bg-[#1c1c1e] p-8 sm:p-10">
            <ul className="space-y-4">
              {t.overviewPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#cc2222]/15 text-xs font-black text-[#cc2222]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-7 text-[#c0c0c5] sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 연령별 운영 */}
      <section className="border-t border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#cc2222]">{t.ageLabel}</p>
          <h2 className="mt-3 text-[clamp(1.375rem,4vw,2.25rem)] font-black text-[#f5f5f7]">{t.ageTitle}</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {t.ages.map((item, i) => (
              <div key={i} className="rounded-[14px] bg-[#1c1c1e] p-7">
                <p className="text-lg font-black text-[#f5f5f7]">{item.grade}</p>
                <p className="mt-3 text-sm leading-7 text-[#c0c0c5]">{item.desc}</p>
                <div className="mt-4 text-xs uppercase tracking-[0.2em] text-[#6e6e73]">
                  【확인 필요 — 훈련 시간·요일·월 회비】
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 훈련 프로그램 */}
      <section className="border-t border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#cc2222]">{t.programLabel}</p>
          <h2 className="mt-3 text-[clamp(1.375rem,4vw,2.25rem)] font-black text-[#f5f5f7]">{t.programTitle}</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {t.programs.map((program, index) => {
              const Icon = programIcons[index];
              return (
                <div key={program.title} className="rounded-[14px] bg-[#1c1c1e] p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#f5f5f7]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#f5f5f7]">{program.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#c0c0c5]">{program.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {program.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-sm text-[#888890]">
                        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#cc2222]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="border-t border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#c49550]">{t.valuesLabel}</p>
          <h2 className="mt-3 text-[clamp(1.375rem,4vw,2.25rem)] font-black text-[#f5f5f7]">{t.valuesTitle}</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.values.map((value) => (
              <div key={value.title} className="rounded-[14px] bg-[#1c1c1e] p-7">
                <p className="text-xl font-black tracking-tight text-[#c49550]">{value.title}</p>
                <p className="mt-3 text-sm leading-7 text-[#c0c0c5]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-[clamp(1.375rem,4vw,2.25rem)] font-black text-[#f5f5f7]">{t.ctaTitle}</h2>
          <p className="mt-4 text-base text-[#c0c0c5]">{t.ctaDesc}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="/application"
              className="inline-flex h-[52px] w-full items-center justify-center rounded-[2px] bg-[#cc2222] px-10 text-base font-bold text-white transition hover:bg-[#cc2222]/90 sm:w-auto"
            >
              {t.ctaPrimary}
            </a>
            <a
              href="/club-introduction"
              className="inline-flex h-[52px] w-full items-center justify-center rounded-[2px] border border-[#424245] bg-transparent px-10 text-base font-medium text-[#f5f5f7] transition hover:bg-white/5 sm:w-auto"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

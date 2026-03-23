"use client";

import GSSCHeader from "@/components/GSSCHeader";
import Footer from "@/components/Footer";
import { useSiteLanguage, type Locale } from "@/components/site-language";
import { Trophy, GraduationCap, Users, TrendingUp } from "lucide-react";

/* ─────────────────────────────────────────────
   타입
───────────────────────────────────────────── */
type AchievementRow = {
  year: string;
  name: string;
  destination: string;
  category: "k4" | "university" | "highschool";
};

type AchievementsCopy = {
  pageLabel: string;
  pageTitle: string;
  pageDesc: string;
  statsLabel: string;
  stats: Array<{ value: string; label: string }>;
  k4Label: string;
  k4Title: string;
  k4Desc: string;
  universityLabel: string;
  universityTitle: string;
  universityDesc: string;
  tableHeaders: [string, string, string, string];
  categoryLabels: Record<AchievementRow["category"], string>;
  rows: AchievementRow[];
  placeholderNote: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaPrimary: string;
};

/* ─────────────────────────────────────────────
   목 데이터 (플레이스홀더)
───────────────────────────────────────────── */
const placeholderRows: AchievementRow[] = [
  { year: "2024", name: "홍길동", destination: "【확인 필요】", category: "k4" },
  { year: "2024", name: "김철수", destination: "【확인 필요】", category: "university" },
  { year: "2023", name: "이영희", destination: "【확인 필요】", category: "university" },
  { year: "2023", name: "박민준", destination: "【확인 필요】", category: "k4" },
  { year: "2022", name: "최지훈", destination: "【확인 필요】", category: "highschool" },
];

/* ─────────────────────────────────────────────
   카피
───────────────────────────────────────────── */
const copy: Record<Locale, AchievementsCopy> = {
  ko: {
    pageLabel: "Achievements",
    pageTitle: "진학현황",
    pageDesc:
      "금천축구클럽 출신 선수들의 K4 팀 진출, 대학 진학, 체육 특기자 진학 현황을 정리한 페이지입니다.",
    statsLabel: "Stats",
    stats: [
      { value: "【확인 필요】", label: "K4 진출 선수" },
      { value: "【확인 필요】", label: "대학 진학 선수" },
      { value: "2015", label: "창단 연도" },
      { value: "【확인 필요】", label: "총 배출 선수" },
    ],
    k4Label: "Professional",
    k4Title: "K4 실업팀 진출",
    k4Desc:
      "금천축구클럽 출신으로 K4 이상 실업팀에 진출한 선수들의 현황입니다. 실제 데이터는 확인 후 업데이트됩니다.",
    universityLabel: "University",
    universityTitle: "대학 진학",
    universityDesc:
      "체육 특기자 전형을 통해 대학에 진학한 선수들의 현황입니다. 실제 데이터는 확인 후 업데이트됩니다.",
    tableHeaders: ["연도", "선수명", "진출·진학처", "구분"],
    categoryLabels: {
      k4: "K4 진출",
      university: "대학 진학",
      highschool: "고교 진학",
    },
    rows: placeholderRows,
    placeholderNote:
      "현재 표시된 데이터는 플레이스홀더입니다. 실제 진출·진학 현황은 리더옥님 확인 후 업데이트됩니다.",
    ctaTitle: "다음 진학자가 되어보세요",
    ctaDesc: "체계적인 육성 시스템으로 선수의 꿈을 현실로 만들겠습니다.",
    ctaPrimary: "선수 등록 신청",
  },
  en: {
    pageLabel: "Achievements",
    pageTitle: "Achievements",
    pageDesc:
      "This page lists the advancement and admission achievements of players who trained at Geumcheon FC.",
    statsLabel: "Stats",
    stats: [
      { value: "【TBC】", label: "K4 Advances" },
      { value: "【TBC】", label: "University Admissions" },
      { value: "2015", label: "Founded" },
      { value: "【TBC】", label: "Total Players Developed" },
    ],
    k4Label: "Professional",
    k4Title: "K4 Team Advancement",
    k4Desc:
      "Players from Geumcheon FC who have advanced to K4-level or higher teams. Data will be updated after confirmation.",
    universityLabel: "University",
    universityTitle: "University Admissions",
    universityDesc:
      "Players who have entered universities through athletic scholarship tracks. Data will be updated after confirmation.",
    tableHeaders: ["Year", "Player", "Destination", "Category"],
    categoryLabels: {
      k4: "K4 Advance",
      university: "University",
      highschool: "High School",
    },
    rows: placeholderRows,
    placeholderNote:
      "Data shown is a placeholder. Actual advancement records will be updated after confirmation.",
    ctaTitle: "Be the next success story",
    ctaDesc: "We turn player dreams into reality through a structured development system.",
    ctaPrimary: "Apply Now",
  },
  ja: {
    pageLabel: "Achievements",
    pageTitle: "進学・進出実績",
    pageDesc:
      "クムチョンFCを経たK4チーム進出、大学進学、体育特待生進学の実績一覧ページです。",
    statsLabel: "Stats",
    stats: [
      { value: "【確認待ち】", label: "K4進出選手" },
      { value: "【確認待ち】", label: "大学進学選手" },
      { value: "2015", label: "創立年" },
      { value: "【確認待ち】", label: "輩出選手数" },
    ],
    k4Label: "Professional",
    k4Title: "K4チーム進出",
    k4Desc:
      "クムチョンFC出身でK4以上のチームへ進出した選手の一覧です。実際のデータは確認後に更新します。",
    universityLabel: "University",
    universityTitle: "大学進学",
    universityDesc:
      "体育特待生として大学に進学した選手の一覧です。実際のデータは確認後に更新します。",
    tableHeaders: ["年度", "選手名", "進出・進学先", "区分"],
    categoryLabels: {
      k4: "K4進出",
      university: "大学進学",
      highschool: "高校進学",
    },
    rows: placeholderRows,
    placeholderNote:
      "現在のデータはプレースホルダーです。実際の実績はリーダーオクさん確認後に更新されます。",
    ctaTitle: "あなたも次の実績者になろう",
    ctaDesc: "体系的な育成システムで選手の夢を実現します。",
    ctaPrimary: "選手登録申請",
  },
  zh: {
    pageLabel: "Achievements",
    pageTitle: "升学与晋升实绩",
    pageDesc:
      "本页汇总了金泉FC球员晋升K4球队、升入大学及体育特长生升学的实绩记录。",
    statsLabel: "Stats",
    stats: [
      { value: "【待确认】", label: "K4晋升球员" },
      { value: "【待确认】", label: "大学升学球员" },
      { value: "2015", label: "创立年份" },
      { value: "【待确认】", label: "培养球员总数" },
    ],
    k4Label: "Professional",
    k4Title: "晋升K4球队",
    k4Desc:
      "来自金泉FC并晋升K4及以上级别球队的球员记录，实际数据确认后更新。",
    universityLabel: "University",
    universityTitle: "大学升学",
    universityDesc:
      "通过体育特长生考核升入大学的球员记录，实际数据确认后更新。",
    tableHeaders: ["年份", "球员姓名", "去向", "类别"],
    categoryLabels: {
      k4: "K4晋升",
      university: "大学升学",
      highschool: "高中升学",
    },
    rows: placeholderRows,
    placeholderNote:
      "当前数据为占位内容，实际升学与晋升记录将在确认后更新。",
    ctaTitle: "成为下一个成功案例",
    ctaDesc: "我们通过系统化培养，将球员的梦想变为现实。",
    ctaPrimary: "申请球员注册",
  },
};

const categoryColors: Record<AchievementRow["category"], string> = {
  k4: "bg-[#cc2222]/15 text-[#cc2222]",
  university: "bg-[#c49550]/15 text-[#c49550]",
  highschool: "bg-white/10 text-[#c0c0c5]",
};

const statIcons = [Trophy, GraduationCap, Users, TrendingUp];

export default function AchievementsPage() {
  const { locale } = useSiteLanguage();
  const t = copy[locale];

  return (
    <div className="min-h-screen bg-transparent text-[#f5f5f7]">
      <GSSCHeader />

      {/* 히어로 */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c49550]">{t.pageLabel}</p>
          <h1 className="mt-3 text-[clamp(2rem,7vw,3.375rem)] font-black uppercase leading-tight tracking-tight text-[#f5f5f7]">
            {t.pageTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-[1.7] text-[#c0c0c5]">{t.pageDesc}</p>
        </div>
      </section>

      {/* 통계 카드 */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#c49550]">{t.statsLabel}</p>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {t.stats.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <div key={stat.label} className="rounded-[14px] bg-[#1c1c1e] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="h-4 w-4 text-[#c49550]" />
                </div>
                <p className="mt-4 text-2xl font-black tracking-tight text-[#f5f5f7] sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-[#6e6e73]">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* K4 + 대학 진학 설명 */}
      <section className="border-t border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[14px] bg-[#1c1c1e] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#cc2222]">{t.k4Label}</p>
              <h2 className="mt-3 text-2xl font-black text-[#f5f5f7]">{t.k4Title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#c0c0c5]">{t.k4Desc}</p>
              <div className="mt-6 rounded-[8px] border border-[#cc2222]/20 bg-[#cc2222]/5 p-4 text-sm leading-6 text-[#c0c0c5]">
                K4 진출 선수 수: <span className="font-black text-[#cc2222]">【확인 필요】</span>
              </div>
            </div>
            <div className="rounded-[14px] bg-[#1c1c1e] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#c49550]">{t.universityLabel}</p>
              <h2 className="mt-3 text-2xl font-black text-[#f5f5f7]">{t.universityTitle}</h2>
              <p className="mt-4 text-sm leading-7 text-[#c0c0c5]">{t.universityDesc}</p>
              <div className="mt-6 rounded-[8px] border border-[#c49550]/20 bg-[#c49550]/5 p-4 text-sm leading-6 text-[#c0c0c5]">
                대학 진학 선수 수: <span className="font-black text-[#c49550]">【확인 필요】</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 진학현황 테이블 / 카드 */}
      <section className="border-t border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-black text-[#f5f5f7]">
            {t.tableHeaders[0]} · {t.tableHeaders[2]}
          </h2>

          {/* 데스크탑 테이블 */}
          <div className="hidden overflow-hidden rounded-[14px] border border-[#222] sm:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#222] bg-[#1c1c1e]">
                  {t.tableHeaders.map((h) => (
                    <th key={h} className="px-6 py-4 text-left font-semibold text-[#6e6e73]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.rows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-[#222] bg-[#1c1c1e] transition hover:bg-[#222]"
                  >
                    <td className="px-6 py-4 text-[#888890]">{row.year}</td>
                    <td className="px-6 py-4 font-semibold text-[#f5f5f7]">{row.name}</td>
                    <td className="px-6 py-4 text-[#c0c0c5]">{row.destination}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${categoryColors[row.category]}`}>
                        {t.categoryLabels[row.category]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 모바일 카드 리스트 */}
          <div className="space-y-3 sm:hidden">
            {t.rows.map((row, i) => (
              <div key={i} className="rounded-[12px] bg-[#1c1c1e] p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-base font-bold text-[#f5f5f7]">{row.name}</p>
                    <p className="mt-1 text-sm text-[#c0c0c5]">{row.destination}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${categoryColors[row.category]}`}>
                    {t.categoryLabels[row.category]}
                  </span>
                </div>
                <p className="mt-3 text-xs text-[#6e6e73]">{row.year}</p>
              </div>
            ))}
          </div>

          {/* 플레이스홀더 안내 */}
          <div className="mt-8 rounded-[10px] border border-[#2a2a2e] bg-[#1c1c1e] px-5 py-4 text-sm leading-6 text-[#6e6e73]">
            ⚠ {t.placeholderNote}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-[clamp(1.375rem,4vw,2.25rem)] font-black text-[#f5f5f7]">{t.ctaTitle}</h2>
          <p className="mt-4 text-base text-[#c0c0c5]">{t.ctaDesc}</p>
          <div className="mt-8 flex justify-center">
            <a
              href="/application"
              className="inline-flex h-[52px] w-full items-center justify-center rounded-[2px] bg-[#cc2222] px-10 text-base font-bold text-white transition hover:bg-[#cc2222]/90 sm:w-auto"
            >
              {t.ctaPrimary}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

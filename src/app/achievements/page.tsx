import type { Metadata } from "next";
import GCSCHeader from "@/components/GCSCHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "진학현황 | 서울금천축구클럽 G.C.S.C",
  description: "G.C.S.C 출신 선수들의 대학 진학, K4 진출, 대회 수상 실적을 확인하세요.",
};

type AchievementRow = {
  year: string;
  name: string;
  destination: string;
  category: "university" | "k4" | "tournament";
};

type TournamentCard = {
  year: string;
  name: string;
  ageGroup: string;
  result: string;
};

const kpiStats = [
  { value: "N명", label: "대학 진학\n누적", color: "#cc2222" },
  { value: "N명", label: "K4 진출\n누적", color: "#c49550" },
  { value: "N회", label: "대회 수상\n누적", color: "#cc2222" },
  { value: "10년+", label: "클럽 이상\n연수", color: "#c49550" },
];

const achievementRows: AchievementRow[] = [
  { year: "2025", name: "김○○", destination: "【대학명 입력】", category: "university" },
  { year: "2024", name: "이○○", destination: "【구단명 입력】", category: "k4" },
  { year: "2024", name: "박○○", destination: "【대학명 입력】", category: "university" },
];

const tournamentCards: TournamentCard[] = [
  { year: "2025", name: "【대회명 입력】", ageGroup: "【연령부 입력】", result: "【성적 입력】" },
  { year: "2024", name: "【대회명 입력】", ageGroup: "【연령부 입력】", result: "【성적 입력】" },
  { year: "2024", name: "【대회명 입력】", ageGroup: "【연령부 입력】", result: "참가" },
];

const badgeStyle: Record<AchievementRow["category"], string> = {
  university: "border border-[#3a1414] bg-[#1a0808] text-[#cc2222]",
  k4: "border border-[#3a2800] bg-[#1a1208] text-[#c49550]",
  tournament: "border border-[#222] bg-[#111] text-[#555]",
};

const badgeLabel: Record<AchievementRow["category"], string> = {
  university: "대학진학",
  k4: "K4진출",
  tournament: "대회수상",
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#f5f5f7]">
      <GCSCHeader />

      {/* S1: 히어로 */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed',sans-serif] text-sm font-bold uppercase tracking-[0.15em] text-[#cc2222]">
            Achievements · G.C.S.C · Since 2015
          </p>
          <h1 className="mt-3 font-['Barlow_Condensed',sans-serif] text-[clamp(2.5rem,8vw,4rem)] font-black uppercase leading-[1.0] tracking-tight text-[#f5f5f7]">
            ACHIEVEMENTS
          </h1>
          <p className="mt-5 text-[clamp(1.125rem,3vw,1.5rem)] font-bold leading-[1.3] text-[#f5f5f7]">
            말이 아닌{" "}
            <span className="text-[#cc2222]">데이터로 증명합니다</span>
          </p>
          <p className="mt-4 max-w-2xl text-base leading-[1.7] text-[#c0c0c5]">
            G.C.S.C 출신 선수들의 대학 진학, K4 진출, 대회 성적 현황.<br className="hidden sm:block" />
            매년 업데이트됩니다.
          </p>
        </div>
      </section>

      {/* S2: KPI */}
      <section className="border-b border-[#222] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {kpiStats.map((stat) => (
              <div key={stat.label} className="rounded-[12px] bg-[#1c1c1e] px-6 py-6 text-center">
                <p
                  className="font-['Barlow_Condensed',sans-serif] text-[clamp(1.75rem,5vw,2.25rem)] font-black leading-none"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 whitespace-pre-line text-xs leading-[1.5] text-[#a1a1a6]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-[#444]">
            ※ 실제 수치는 데이터 확인 후 업데이트 예정. 0인 항목은 표시하지 않습니다.
          </p>
        </div>
      </section>

      {/* S3: 진학·진출 테이블 */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed',sans-serif] text-xs font-bold uppercase tracking-[0.15em] text-[#cc2222]">
            진학 · 진출 현황
          </p>
          <h2 className="mt-2 font-['Barlow_Condensed',sans-serif] text-[clamp(1.75rem,5vw,2.5rem)] font-black leading-[1.1] text-[#f5f5f7]">
            연도별{" "}
            <span className="text-[#cc2222]">진학 · 진출 기록</span>
          </h2>

          {/* 데스크탑 테이블 */}
          <div className="mt-8 hidden overflow-hidden rounded-[12px] sm:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#2a2a2a]">
                  <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.04em] text-[#6e6e73]">연도</th>
                  <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.04em] text-[#6e6e73]">선수명</th>
                  <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.04em] text-[#6e6e73]">진학 · 진출처</th>
                  <th className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.04em] text-[#6e6e73]">구분</th>
                </tr>
              </thead>
              <tbody>
                {achievementRows.map((row, i) => (
                  <tr key={i} className="border-t border-[#2a2a2a] bg-[#1c1c1e] transition hover:bg-[#222]">
                    <td className="px-5 py-4 font-['Barlow_Condensed',sans-serif] text-base font-bold text-[#f5f5f7]">
                      {row.year}
                    </td>
                    <td className="px-5 py-4 text-[#c0c0c5]">{row.name}</td>
                    <td className="px-5 py-4 text-[#c0c0c5]">{row.destination}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-block rounded-[2px] px-2 py-0.5 text-[10px] font-bold ${badgeStyle[row.category]}`}>
                        {badgeLabel[row.category]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 모바일 카드 */}
          <div className="mt-6 space-y-3 sm:hidden">
            {achievementRows.map((row, i) => (
              <div key={i} className="flex items-start justify-between gap-3 rounded-[12px] bg-[#1c1c1e] px-5 py-4">
                <div>
                  <p className="text-sm font-bold text-[#f5f5f7]">{row.name}</p>
                  <p className="mt-0.5 text-xs text-[#c0c0c5]">{row.destination}</p>
                  <p className="mt-1.5 font-['Barlow_Condensed',sans-serif] text-xs font-bold text-[#555]">{row.year}</p>
                </div>
                <span className={`shrink-0 rounded-[2px] px-2 py-0.5 text-[10px] font-bold ${badgeStyle[row.category]}`}>
                  {badgeLabel[row.category]}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-[11px] text-[#444]">
            ※ 선수 실명 공개 여부는 클럽 대표 판단. 기본값은 이니셜(김○○) 처리.
          </p>
        </div>
      </section>

      {/* S4: 대회 성적 */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed',sans-serif] text-xs font-bold uppercase tracking-[0.15em] text-[#cc2222]">
            대회 성적
          </p>
          <h2 className="mt-2 font-['Barlow_Condensed',sans-serif] text-[clamp(1.75rem,5vw,2.5rem)] font-black leading-[1.1] text-[#f5f5f7]">
            경기에서{" "}
            <span className="text-[#cc2222]">증명한 기록</span>
          </h2>
          <p className="mt-3 text-sm text-[#c0c0c5]">
            수상 기록이 없어도 참가 이력 자체가 신뢰입니다.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tournamentCards.map((card, i) => (
              <div
                key={i}
                className="rounded-[12px] bg-[#1c1c1e] p-5"
                style={{ borderTop: "3px solid #cc2222" }}
              >
                <p className="text-[10px] text-[#555]">{card.year}</p>
                <p className="mt-1.5 text-sm font-bold text-[#f5f5f7]">{card.name}</p>
                <p className="mt-1 text-[12px] text-[#a1a1a6]">
                  {card.ageGroup} · {card.result}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-[11px] text-[#444]">
            ※ 역대 대회 참가 및 수상 기록 — 클럽 대표 확인 후 업데이트 예정.
          </p>
        </div>
      </section>

      {/* S5: CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[14px] bg-[#cc2222] px-8 py-10 sm:px-12">
            <h2 className="font-['Barlow_Condensed',sans-serif] text-[clamp(1.75rem,5vw,2.5rem)] font-black leading-[1.1] text-white">
              다음 주인공은<br />
              당신입니다
            </h2>
            <p className="mt-4 text-sm leading-[1.7] text-white/80">
              지금 G.C.S.C와 함께 이 기록을 만들어가세요.
            </p>
            <div className="mt-8">
              <a
                href="/application"
                className="inline-flex h-[52px] items-center justify-center rounded-[2px] bg-white px-10 text-base font-bold text-[#cc2222] transition hover:bg-white/90"
              >
                선수 모집 신청
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

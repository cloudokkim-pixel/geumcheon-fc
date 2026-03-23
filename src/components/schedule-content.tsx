"use client";

import { useSiteLanguage, type Locale } from "@/components/site-language";
import type { ScheduleItem } from "@/lib/cms";

/* ─────────────────────────────────────────────
   카피
───────────────────────────────────────────── */
const copy: Record<
  Locale,
  {
    upcoming: string;
    done: string;
    cancelled: string;
    tableHeaders: [string, string, string, string, string, string];
    noticeText: string;
    noItems: string;
    vsLabel: string;
    resultLabel: string;
    homeLabel: string;
    awayLabel: string;
  }
> = {
  ko: {
    upcoming: "예정",
    done: "종료",
    cancelled: "취소",
    tableHeaders: ["날짜", "시간", "홈팀", "원정팀", "장소", "결과"],
    noticeText:
      "경기 일정은 변경될 수 있으며, 실제 데이터는 리더옥님 확인 후 업데이트됩니다. Notion CMS 연동 후 자동 반영됩니다.",
    noItems: "등록된 경기 일정이 없습니다.",
    vsLabel: "VS",
    resultLabel: "결과",
    homeLabel: "홈",
    awayLabel: "원정",
  },
  en: {
    upcoming: "Upcoming",
    done: "Done",
    cancelled: "Cancelled",
    tableHeaders: ["Date", "Time", "Home", "Away", "Venue", "Result"],
    noticeText:
      "Schedule is subject to change. Data will be updated after confirmation and will sync automatically via Notion CMS.",
    noItems: "No matches scheduled.",
    vsLabel: "VS",
    resultLabel: "Result",
    homeLabel: "Home",
    awayLabel: "Away",
  },
  ja: {
    upcoming: "予定",
    done: "終了",
    cancelled: "中止",
    tableHeaders: ["日付", "時間", "ホーム", "アウェイ", "会場", "結果"],
    noticeText:
      "試合日程は変更される場合があります。データはリーダーオクさん確認後に更新され、Notion CMS経由で自動反映されます。",
    noItems: "試合日程が登録されていません。",
    vsLabel: "VS",
    resultLabel: "結果",
    homeLabel: "ホーム",
    awayLabel: "アウェイ",
  },
  zh: {
    upcoming: "预定",
    done: "已结束",
    cancelled: "已取消",
    tableHeaders: ["日期", "时间", "主队", "客队", "场地", "比分"],
    noticeText:
      "赛程可能会有变动，实际数据确认后将更新，并通过Notion CMS自动同步。",
    noItems: "暂无赛程安排。",
    vsLabel: "VS",
    resultLabel: "结果",
    homeLabel: "主场",
    awayLabel: "客场",
  },
};

const statusStyle: Record<ScheduleItem["status"], string> = {
  upcoming: "bg-[#cc2222]/15 text-[#cc2222]",
  done: "bg-white/10 text-[#6e6e73]",
  cancelled: "bg-white/5 text-[#6e6e73] line-through",
};

function formatDate(dateStr: string) {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

export default function ScheduleContent({ items }: { items: ScheduleItem[] }) {
  const { locale } = useSiteLanguage();
  const t = copy[locale];

  if (!items.length) {
    return (
      <div className="rounded-[14px] border border-[#222] bg-[#1c1c1e] p-10 text-center text-[#6e6e73]">
        {t.noItems}
      </div>
    );
  }

  return (
    <>
      {/* ── 데스크탑 테이블 (768px+) ── */}
      <div className="hidden overflow-hidden rounded-[14px] border border-[#222] sm:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#222] bg-[#1c1c1e]">
              {t.tableHeaders.map((h) => (
                <th key={h} className="px-5 py-4 text-left font-semibold text-[#6e6e73]">
                  {h}
                </th>
              ))}
              <th className="px-5 py-4 text-left font-semibold text-[#6e6e73]">상태</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={item.id}
                className="border-b border-[#222] bg-[#1c1c1e] transition last:border-0 hover:bg-[#222]"
              >
                <td className="px-5 py-4 text-[#888890]">{formatDate(item.date)}</td>
                <td className="px-5 py-4 text-[#888890]">{item.time || "—"}</td>
                <td className="px-5 py-4 font-semibold text-[#f5f5f7]">{item.homeTeam}</td>
                <td className="px-5 py-4 text-[#c0c0c5]">{item.awayTeam}</td>
                <td className="px-5 py-4 text-[#888890]">{item.location}</td>
                <td className="px-5 py-4 font-bold text-[#f5f5f7]">
                  {item.result ?? "—"}
                </td>
                <td className="px-5 py-4">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${statusStyle[item.status]}`}>
                    {t[item.status]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── 모바일 카드 리스트 (~768px) ── */}
      <div className="space-y-3 sm:hidden">
        {items.map((item) => (
          <div key={item.id} className="rounded-[12px] bg-[#1c1c1e] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs text-[#6e6e73]">
                  {formatDate(item.date)} {item.time && `· ${item.time}`}
                </p>
                <p className="mt-2 text-base font-bold text-[#f5f5f7]">
                  {item.homeTeam}
                  <span className="mx-2 font-normal text-[#6e6e73]">{t.vsLabel}</span>
                  {item.awayTeam}
                </p>
                <p className="mt-1 text-sm text-[#888890]">{item.location}</p>
              </div>
              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${statusStyle[item.status]}`}
              >
                {t[item.status]}
              </span>
            </div>
            {item.result && (
              <div className="mt-3 rounded-[6px] border border-white/10 bg-black/20 px-3 py-2 text-sm">
                <span className="text-[#6e6e73]">{t.resultLabel}: </span>
                <span className="font-bold text-[#f5f5f7]">{item.result}</span>
              </div>
            )}
            {item.competition && (
              <p className="mt-2 text-xs text-[#6e6e73]">{item.competition}</p>
            )}
          </div>
        ))}
      </div>

      {/* 플레이스홀더 안내 */}
      <div className="mt-8 rounded-[10px] border border-[#2a2a2e] bg-[#1c1c1e] px-5 py-4 text-sm leading-6 text-[#6e6e73]">
        ⚠ {t.noticeText}
      </div>
    </>
  );
}

"use client";

import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ScheduleItem, AgeGroup, ScheduleType } from "@/lib/cms";

type AgeFilter = "all" | AgeGroup;
type TypeFilter = "all" | ScheduleType;

const ageGroupLabels: Record<AgeFilter, string> = {
  all: "전체",
  elementary: "초등부",
  middle: "중등부",
  high: "고등부",
  adult: "성인부",
};

const ageFilters: AgeFilter[] = ["all", "elementary", "middle", "high", "adult"];
const typeFilters: TypeFilter[] = ["all", "match", "training", "tournament"];

const typeConfig: Record<ScheduleType, { label: string; style: string }> = {
  match: { label: "경기", style: "border border-[#1a3a1a] bg-[#0a1a0a] text-[#4dcc3c]" },
  training: { label: "훈련", style: "border border-[#3a2800] bg-[#1a1208] text-[#c49550]" },
  tournament: { label: "대회", style: "border border-[#222] bg-[#111] text-[#555]" },
};

const typeFilterLabel: Record<TypeFilter, string> = {
  all: "전체",
  match: "경기",
  training: "훈련",
  tournament: "대회",
};

const ageBadgeStyle = "border border-[#3a1414] bg-[#1a0808] text-[#cc2222]";
const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

function formatDay(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return `${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")} ${weekdays[d.getDay()]}`;
}

function todayStr() {
  const t = new Date();
  return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
}

export default function ScheduleContent({ items }: { items: ScheduleItem[] }) {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [activeAge, setActiveAge] = useState<AgeFilter>("all");
  const [activeType, setActiveType] = useState<TypeFilter>("all");

  function prevMonth() {
    if (month === 1) { setYear((y) => y - 1); setMonth(12); }
    else setMonth((m) => m - 1);
  }
  function nextMonth() {
    if (month === 12) { setYear((y) => y + 1); setMonth(1); }
    else setMonth((m) => m + 1);
  }

  // 가장 가까운 다가오는 일정 (필터 무관, 날짜 기준)
  const upcoming = useMemo(() => {
    const today = todayStr();
    return (
      items
        .filter((item) => item.date >= today)
        .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time))[0] ?? null
    );
  }, [items]);

  // 현재 월 + 필터 적용 목록
  const filtered = useMemo(() => {
    return items
      .filter((item) => {
        const d = new Date(item.date + "T00:00:00");
        if (d.getFullYear() !== year || d.getMonth() + 1 !== month) return false;
        if (activeAge !== "all" && item.ageGroup !== activeAge) return false;
        if (activeType !== "all" && item.type !== activeType) return false;
        return true;
      })
      .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
  }, [items, year, month, activeAge, activeType]);

  return (
    <div className="space-y-4">
      {/* S2: 다가오는 일정 하이라이트 */}
      {upcoming && (
        <div className="rounded-[12px] border-l-4 border-[#cc2222] bg-[#1a0808] px-6 py-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#cc2222]">
            다가오는 경기
          </p>
          <p className="mt-1 font-['Barlow_Condensed',sans-serif] text-xl font-black text-[#cc2222]">
            {formatDay(upcoming.date)} · {upcoming.time}
          </p>
          <p className="mt-0.5 text-base font-bold text-[#f5f5f7]">{upcoming.title}</p>
          <p className="mt-0.5 text-sm text-[#a1a1a6]">
            {upcoming.location} · {ageGroupLabels[upcoming.ageGroup]}
          </p>
        </div>
      )}

      {/* S3: 필터 바 */}
      <div className="rounded-[12px] border border-[#222] bg-[#1c1c1e] p-4">
        {/* 연령별 탭 */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {ageFilters.map((ag) => (
            <button
              key={ag}
              onClick={() => setActiveAge(ag)}
              className={`shrink-0 rounded-[2px] px-4 py-2 text-sm font-bold transition ${
                activeAge === ag
                  ? "bg-[#cc2222] text-white"
                  : "border border-[#424245] text-[#c0c0c5] hover:bg-white/5"
              }`}
            >
              {ageGroupLabels[ag]}
            </button>
          ))}
        </div>

        {/* 유형 필터 + 월 네비게이션 */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex gap-2 overflow-x-auto">
            {typeFilters.map((tf) => (
              <button
                key={tf}
                onClick={() => setActiveType(tf)}
                className={`shrink-0 rounded-[2px] px-4 py-2 text-sm font-bold transition ${
                  activeType === tf
                    ? "bg-[#cc2222] text-white"
                    : "border border-[#424245] text-[#c0c0c5] hover:bg-white/5"
                }`}
              >
                {typeFilterLabel[tf]}
              </button>
            ))}
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <button
              onClick={prevMonth}
              aria-label="이전 달"
              className="flex h-9 w-9 items-center justify-center rounded-[2px] border border-[#424245] text-[#c0c0c5] hover:bg-white/5"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="whitespace-nowrap text-sm font-bold text-[#f5f5f7]">
              {year}년 {month}월
            </span>
            <button
              onClick={nextMonth}
              aria-label="다음 달"
              className="flex h-9 w-9 items-center justify-center rounded-[2px] border border-[#424245] text-[#cc2222] hover:bg-white/5"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* S4: 일정 리스트 */}
      {filtered.length === 0 ? (
        <div className="rounded-[12px] border border-[#222] bg-[#1c1c1e] p-10 text-center text-sm leading-[1.8] text-[#444]">
          이 기간에 등록된 일정이 없습니다.<br />
          <span className="text-[12px]">다음 달 일정을 확인하거나 클럽에 문의해주세요.</span>
        </div>
      ) : (
        <>
          {/* 데스크탑: 4열 그리드 */}
          <div className="hidden flex-col gap-2 sm:flex">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="grid items-center gap-4 rounded-[10px] bg-[#1c1c1e] px-5 py-4"
                style={{ gridTemplateColumns: "90px 1fr 72px 72px" }}
              >
                <div>
                  <p className="font-['Barlow_Condensed',sans-serif] text-base font-black text-[#cc2222]">
                    {formatDay(item.date)}
                  </p>
                  <p className="text-[10px] text-[#555]">{item.time}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#f5f5f7]">{item.title}</p>
                  <p className="text-[11px] text-[#6e6e73]">{item.location}</p>
                </div>
                <span className={`inline-block rounded-[2px] px-2 py-0.5 text-center text-[10px] font-bold ${ageBadgeStyle}`}>
                  {ageGroupLabels[item.ageGroup]}
                </span>
                <span className={`inline-block rounded-[2px] px-2 py-0.5 text-center text-[10px] font-bold ${typeConfig[item.type].style}`}>
                  {typeConfig[item.type].label}
                </span>
              </div>
            ))}
          </div>

          {/* 모바일: 카드 */}
          <div className="flex flex-col gap-2 sm:hidden">
            {filtered.map((item) => (
              <div key={item.id} className="rounded-[10px] bg-[#1c1c1e] px-4 py-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-['Barlow_Condensed',sans-serif] text-sm font-black text-[#cc2222]">
                      {formatDay(item.date)} · {item.time}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-[#f5f5f7]">{item.title}</p>
                    <p className="mt-0.5 text-[11px] text-[#6e6e73]">{item.location}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1.5">
                    <span className={`rounded-[2px] px-2 py-0.5 text-[10px] font-bold ${ageBadgeStyle}`}>
                      {ageGroupLabels[item.ageGroup]}
                    </span>
                    <span className={`rounded-[2px] px-2 py-0.5 text-[10px] font-bold ${typeConfig[item.type].style}`}>
                      {typeConfig[item.type].label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <p className="text-[11px] text-[#444]">
        ※ 경기 일정은 변경될 수 있습니다. 실제 데이터는 클럽 관리자가 직접 업데이트합니다.
      </p>
    </div>
  );
}

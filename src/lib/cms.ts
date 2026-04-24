/**
 * 경기 일정 데이터 레이어
 * 추후 Supabase 또는 Notion CMS 연동 시 getSchedule() 교체
 */

export type AgeGroup = "elementary" | "middle" | "high" | "adult";
export type ScheduleType = "match" | "training" | "tournament";

export type ScheduleItem = {
  id: string;
  date: string;     // "YYYY-MM-DD"
  time: string;     // "HH:MM"
  title: string;
  location: string;
  ageGroup: AgeGroup;
  type: ScheduleType;
};

/* ──────────────────────────────────────────
   목 데이터 (관리자가 실제 데이터로 교체)
────────────────────────────────────────── */
const mockSchedule: ScheduleItem[] = [
  {
    id: "1",
    date: "2026-04-26",
    time: "10:00",
    title: "주말리그 3라운드",
    location: "관악구 조원로 56",
    ageGroup: "middle",
    type: "match",
  },
  {
    id: "2",
    date: "2026-04-26",
    time: "13:00",
    title: "주말리그 3라운드",
    location: "관악구 조원로 56",
    ageGroup: "elementary",
    type: "match",
  },
  {
    id: "3",
    date: "2026-04-28",
    time: "17:00",
    title: "정기 훈련",
    location: "관악구 조원로 56",
    ageGroup: "high",
    type: "training",
  },
  {
    id: "4",
    date: "2026-04-29",
    time: "17:00",
    title: "정기 훈련",
    location: "관악구 조원로 56",
    ageGroup: "elementary",
    type: "training",
  },
  {
    id: "5",
    date: "2026-05-03",
    time: "10:00",
    title: "주말리그 4라운드",
    location: "관악구 조원로 56",
    ageGroup: "high",
    type: "match",
  },
  {
    id: "6",
    date: "2026-05-10",
    time: "09:00",
    title: "서울시장배 축구대회",
    location: "【대회 장소 입력】",
    ageGroup: "middle",
    type: "tournament",
  },
];

export async function getSchedule(): Promise<ScheduleItem[]> {
  // TODO: Supabase 연동 시 이 함수를 교체
  return mockSchedule;
}

/**
 * Notion CMS 연동 유틸
 *
 * 환경변수 설정 후 아래 함수들이 실제 Notion DB에서 데이터를 가져옵니다.
 *
 * 필요한 환경변수 (Vercel 대시보드 등록):
 *   NOTION_API_KEY=
 *   NOTION_DB_SCHEDULE=
 *   NOTION_DB_GALLERY=
 */

export type ScheduleItem = {
  id: string;
  date: string;        // "YYYY-MM-DD"
  time: string;        // "HH:MM"
  homeTeam: string;
  awayTeam: string;
  location: string;
  competition: string;
  result?: string;     // "2:1" 등 종료 후 입력
  status: "upcoming" | "done" | "cancelled";
};

/* ──────────────────────────────────────────
   Notion 연동 (환경변수 세팅 후 주석 해제)
────────────────────────────────────────── */
// import { Client } from '@notionhq/client'
// const notion = new Client({ auth: process.env.NOTION_API_KEY })
//
// export async function getSchedule(): Promise<ScheduleItem[]> {
//   const res = await notion.databases.query({
//     database_id: process.env.NOTION_DB_SCHEDULE!,
//     sorts: [{ property: '날짜', direction: 'descending' }],
//   })
//   return res.results.map((page: any) => ({
//     id: page.id,
//     date: page.properties['날짜']?.date?.start ?? '',
//     time: page.properties['시간']?.rich_text?.[0]?.plain_text ?? '',
//     homeTeam: page.properties['홈팀']?.title?.[0]?.plain_text ?? '',
//     awayTeam: page.properties['원정팀']?.rich_text?.[0]?.plain_text ?? '',
//     location: page.properties['장소']?.rich_text?.[0]?.plain_text ?? '',
//     competition: page.properties['대회']?.select?.name ?? '',
//     result: page.properties['결과']?.rich_text?.[0]?.plain_text ?? undefined,
//     status: page.properties['상태']?.select?.name ?? 'upcoming',
//   }))
// }

/* ──────────────────────────────────────────
   목 데이터 (Notion 연동 전 사용)
────────────────────────────────────────── */
const mockSchedule: ScheduleItem[] = [
  {
    id: "1",
    date: "2025-04-05",
    time: "14:00",
    homeTeam: "서울금천축구클럽",
    awayTeam: "【확인 필요】",
    location: "서울특별시 관악구 조원로 56",
    competition: "【확인 필요】",
    status: "upcoming",
  },
  {
    id: "2",
    date: "2025-03-22",
    time: "10:00",
    homeTeam: "【확인 필요】",
    awayTeam: "서울금천축구클럽",
    location: "【확인 필요】",
    competition: "【확인 필요】",
    result: "【확인 필요】",
    status: "done",
  },
  {
    id: "3",
    date: "2025-03-15",
    time: "15:00",
    homeTeam: "서울금천축구클럽",
    awayTeam: "【확인 필요】",
    location: "서울특별시 관악구 조원로 56",
    competition: "【확인 필요】",
    result: "【확인 필요】",
    status: "done",
  },
];

export async function getSchedule(): Promise<ScheduleItem[]> {
  // TODO: Notion 연동 시 위 주석 코드로 교체
  return mockSchedule;
}

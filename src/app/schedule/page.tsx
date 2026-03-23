import type { Metadata } from "next";
import GSSCHeader from "@/components/GSSCHeader";
import Footer from "@/components/Footer";
import ScheduleContent from "@/components/schedule-content";
import { getSchedule } from "@/lib/cms";

export const revalidate = 3600; // ISR 1시간 캐시

export const metadata: Metadata = {
  title: "경기일정 | 서울금천축구클럽 G.C.S.C",
  description: "서울금천축구클럽 G.C.S.C의 경기 일정과 결과를 확인하세요.",
};

export default async function SchedulePage() {
  const scheduleItems = await getSchedule();

  return (
    <div className="min-h-screen bg-transparent text-[#f5f5f7]">
      <GSSCHeader />

      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#cc2222]">Schedule</p>
          <h1 className="mt-3 text-[clamp(2rem,7vw,3.375rem)] font-black uppercase leading-tight tracking-tight text-[#f5f5f7]">
            경기일정
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-[1.7] text-[#c0c0c5]">
            서울금천축구클럽의 예정 경기와 최근 결과를 확인하세요. 일정은 변경될 수 있습니다.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ScheduleContent items={scheduleItems} />
      </main>

      <Footer />
    </div>
  );
}

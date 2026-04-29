import type { Metadata } from "next";
import GCSCHeader from "@/components/GCSCHeader";
import Footer from "@/components/Footer";
import ScheduleContent from "@/components/schedule-content";
import { getSchedule } from "@/lib/cms";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "경기일정 | 서울금천축구클럽 G.C.S.C",
  description: "연령별 경기·훈련 일정을 확인하세요. G.C.S.C 서울금천축구클럽.",
};

export default async function SchedulePage() {
  const items = await getSchedule();

  return (
    <div className="min-h-screen bg-transparent text-[#f5f5f7]">
      <GCSCHeader />

      {/* S1: 히어로 (최소화 — 바로 일정으로) */}
      <section className="border-b border-[#222] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed',sans-serif] text-sm font-bold uppercase tracking-[0.15em] text-[#cc2222]">
            Schedule · G.C.S.C
          </p>
          <h1 className="mt-3 font-['Barlow_Condensed',sans-serif] text-[clamp(2.5rem,8vw,4rem)] font-black uppercase leading-[1.0] tracking-tight text-[#f5f5f7]">
            SCHEDULE
          </h1>
          <p className="mt-4 text-base text-[#c0c0c5]">
            연령별 경기·훈련 일정을 확인하세요.
          </p>
        </div>
      </section>

      {/* S2–S4: 하이라이트 + 필터 + 일정 리스트 */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <ScheduleContent items={items} />
      </main>

      <Footer />
    </div>
  );
}

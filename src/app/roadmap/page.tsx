import type { Metadata } from "next";
import GCSCHeader from "@/components/GCSCHeader";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "커리어 로드맵 | 서울금천축구클럽 G.C.S.C",
  description: "초등부부터 K4 데뷔, 프로·대학까지 G.C.S.C가 설계한 단계별 성장 경로를 확인하세요.",
};

const pipelineStages = [
  {
    step: 1,
    age: "U6 ~ U12",
    name: "초등부",
    goals: ["볼 감각 형성", "기본기 습득", "즐거움 우선"],
    next: "중등부 연계",
    color: "#cc2222",
    cardBg: "bg-[#1c1c1e]",
  },
  {
    step: 2,
    age: "U13 ~ U15",
    name: "중등부",
    goals: ["기술 성숙", "전술 이해", "주말리그 소화"],
    next: "고등부 연계",
    color: "#cc2222",
    cardBg: "bg-[#1c1c1e]",
  },
  {
    step: 3,
    age: "U16 ~ U18",
    name: "고등부",
    goals: ["실전 훈련", "진로 설계", "대학/K4 준비"],
    next: "K4 또는 대학",
    color: "#cc2222",
    cardBg: "bg-[#1c1c1e]",
  },
  {
    step: 4,
    age: "성인",
    name: "K4 리그",
    goals: ["성인 무대 데뷔", "리그 경험", "이적 루트 개방"],
    next: "K3 / 프로",
    color: "#c49550",
    cardBg: "bg-[#1a1208]",
  },
  {
    step: 5,
    age: "그 다음",
    name: "프로 / 대학",
    goals: ["K리그 / 해외", "체육특기자 진학", "전문 커리어 성장"],
    next: "최종 목적지",
    color: "#c49550",
    cardBg: "bg-[#1a1208]",
  },
];

const careerRoutes = [
  {
    tag: "프로 진출 루트",
    title: "K4 → K3 → K리그",
    desc: "G.C.S.C K4팀에서 성인 무대를 시작해 상위 리그로 단계적 진출. 스카우트 네트워크와 에이전트 파트너십을 통해 이적을 지원합니다.",
    borderColor: "#cc2222",
    tagColor: "#cc2222",
  },
  {
    tag: "대학 진학 루트",
    title: "체육특기자 → 협력 대학",
    desc: "G.C.S.C 협력 대학 체육특기자 전형 연계. 진학 목표 설계부터 포트폴리오 준비까지 클럽이 함께합니다.",
    borderColor: "#c49550",
    tagColor: "#c49550",
  },
  {
    tag: "해외 진출 루트",
    title: "일본 · 동남아 · 유럽 하부",
    desc: "에이전트 파트너를 통한 해외 하부리그 진출 지원. 국내보다 빠른 성장을 원하는 선수에게 현실적인 대안을 제시합니다.",
    borderColor: "#555",
    tagColor: "#888",
  },
];

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#f5f5f7]">
      <GCSCHeader />

      {/* S1: 히어로 */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed',sans-serif] text-sm font-bold uppercase tracking-[0.15em] text-[#cc2222]">
            Career Roadmap · G.C.S.C
          </p>
          <h1 className="mt-3 font-['Barlow_Condensed',sans-serif] text-[clamp(2.5rem,8vw,4rem)] font-black uppercase leading-[1.0] tracking-tight text-[#f5f5f7]">
            CAREER ROADMAP
          </h1>
          <p className="mt-5 text-[clamp(1.25rem,3.5vw,1.75rem)] font-bold leading-[1.3] text-[#f5f5f7]">
            재능이 시스템 없이<br />
            <span className="text-[#cc2222]">자라지 않도록</span>
          </p>
          <p className="mt-5 max-w-2xl text-base leading-[1.7] text-[#c0c0c5]">
            초등 입단부터 K4 데뷔, 프로·대학까지.<br className="hidden sm:block" />
            G.C.S.C가 설계한 선수의 길을 한눈에 확인하세요.
          </p>
        </div>
      </section>

      {/* S2: 파이프라인 개요 */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed',sans-serif] text-xs font-bold uppercase tracking-[0.15em] text-[#cc2222]">
            Pipeline · G.C.S.C
          </p>
          <h2 className="mt-2 font-['Barlow_Condensed',sans-serif] text-[clamp(1.75rem,5vw,2.5rem)] font-black leading-[1.1] text-[#f5f5f7]">
            하나로 연결된{" "}
            <span className="text-[#cc2222]">5단계 성장 경로</span>
          </h2>

          <div className="mt-8 overflow-x-auto pb-2">
            <div className="flex min-w-[680px] items-stretch">
              {pipelineStages.map((stage, i) => (
                <>
                  <div
                    key={stage.name}
                    className={`flex flex-1 flex-col px-4 py-5 ${stage.cardBg}`}
                    style={{ borderTop: `3px solid ${stage.color}` }}
                  >
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.06em]"
                      style={{ color: stage.color }}
                    >
                      {stage.age}
                    </span>
                    <p className="mt-1.5 text-sm font-bold text-[#f5f5f7]">{stage.name}</p>
                    <ul className="mt-2 space-y-0.5">
                      {stage.goals.map((g) => (
                        <li key={g} className="text-[11px] text-[#6e6e73]">
                          {g}
                        </li>
                      ))}
                    </ul>
                    <p
                      className="mt-3 text-[10px] font-semibold"
                      style={{ color: stage.color }}
                    >
                      → {stage.next}
                    </p>
                  </div>
                  {i < pipelineStages.length - 1 && (
                    <div key={`arrow-${i}`} className="flex items-center bg-[#111] px-1">
                      <ChevronRight className="h-4 w-4 text-[#333]" />
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
          <p className="mt-3 text-[11px] text-[#444] sm:hidden">← 옆으로 스크롤하세요</p>
        </div>
      </section>

      {/* S3: 단계별 상세 */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed',sans-serif] text-xs font-bold uppercase tracking-[0.15em] text-[#cc2222]">
            Stage Detail
          </p>
          <h2 className="mt-2 font-['Barlow_Condensed',sans-serif] text-[clamp(1.75rem,5vw,2.5rem)] font-black leading-[1.1] text-[#f5f5f7]">
            각 단계에서{" "}
            <span className="text-[#cc2222]">무엇을 하는가</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-[1.7] text-[#c0c0c5]">
            단계마다 목표가 다릅니다. G.C.S.C는 연령별로 다른 기준으로 선수를 성장시킵니다.
          </p>

          <div className="mt-8 overflow-x-auto pb-2">
          <div className="grid min-w-[680px] grid-cols-5 gap-4 lg:min-w-0">
            {pipelineStages.map((stage) => (
              <div
                key={`detail-${stage.name}`}
                className={`rounded-[12px] p-5 ${stage.cardBg}`}
              >
                <div
                  className="mb-3 flex h-7 w-7 items-center justify-center rounded-full text-[13px] font-black text-white"
                  style={{ backgroundColor: stage.color }}
                >
                  {stage.step}
                </div>
                <span className="text-[10px] font-semibold text-[#555]">{stage.age}</span>
                <p className="mt-1 text-sm font-bold text-[#f5f5f7]">{stage.name}</p>
                <ul className="mt-3 space-y-1.5">
                  {stage.goals.map((g) => (
                    <li key={g} className="flex items-start gap-1.5 text-[12px] text-[#6e6e73]">
                      <span
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: stage.color }}
                      />
                      {g}
                    </li>
                  ))}
                </ul>
                <p
                  className="mt-4 text-[11px] font-semibold"
                  style={{ color: stage.color }}
                >
                  → {stage.next}
                </p>
              </div>
            ))}
          </div>
          </div>
          <p className="mt-3 text-[11px] text-[#444] sm:hidden">← 옆으로 스크롤하세요</p>
        </div>
      </section>

      {/* S4: 진로 경로 */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed',sans-serif] text-xs font-bold uppercase tracking-[0.15em] text-[#cc2222]">
            진로 경로
          </p>
          <h2 className="mt-2 font-['Barlow_Condensed',sans-serif] text-[clamp(1.75rem,5vw,2.5rem)] font-black leading-[1.1] text-[#f5f5f7]">
            고등 졸업 후{" "}
            <span className="text-[#cc2222]">세 가지 길</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-[1.7] text-[#c0c0c5]">
            프로만이 답이 아닙니다. G.C.S.C는 세 가지 출구를 함께 설계합니다.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {careerRoutes.map((route) => (
              <div
                key={route.tag}
                className="rounded-[12px] bg-[#1c1c1e] p-6"
                style={{ borderTop: `3px solid ${route.borderColor}` }}
              >
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.06em]"
                  style={{ color: route.tagColor }}
                >
                  {route.tag}
                </p>
                <h3 className="mt-2 text-base font-bold text-[#f5f5f7]">{route.title}</h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-[#a1a1a6]">{route.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S5: 병역 안내 */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed',sans-serif] text-xs font-bold uppercase tracking-[0.15em] text-[#c49550]">
            병역 연계
          </p>
          <h2 className="mt-2 font-['Barlow_Condensed',sans-serif] text-[clamp(1.75rem,5vw,2.5rem)] font-black leading-[1.1] text-[#f5f5f7]">
            K4 병역 연계 안내
          </h2>

          <div className="mt-6 rounded-[12px] border border-[#2a2a2e] bg-[#111] p-6 sm:p-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#c49550]">
                  병역 연계
                </p>
                <h3 className="mt-2 text-sm font-bold text-[#f5f5f7]">K4 리그와 병역의무</h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-[#6e6e73]">
                  K4 리그 참가 시 현행 병역법 기준에 따라 사회복무 변환이 가능한 경우가 있습니다.
                  개인 상황에 따라 다르므로 구체적인 내용은 클럽 대표에게 상담하세요.
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#c49550]">
                  주의사항
                </p>
                <h3 className="mt-2 text-sm font-bold text-[#f5f5f7]">현행 기준 안내</h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-[#6e6e73]">
                  병역법은 변경될 수 있습니다. 이 페이지의 내용은 현재 작성 기준이며, 정확한 확인은
                  병무청 또는 클럽 대표를 통해 직접 확인하시기 바랍니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S6: CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[14px] border-l-4 border-[#cc2222] bg-[#1a0808] px-8 py-10 sm:px-12">
            <h2 className="font-['Barlow_Condensed',sans-serif] text-[clamp(1.75rem,5vw,2.5rem)] font-black leading-[1.1] text-[#f5f5f7]">
              이 길,{" "}
              <span className="text-[#cc2222]">지금 시작할 수 있습니다</span>
            </h2>
            <p className="mt-4 text-sm leading-[1.7] text-[#c0c0c5]">
              초등부부터 시작해 이 로드맵을 함께 걸어가세요.
            </p>
            <div className="mt-8">
              <a
                href="/application"
                className="inline-flex h-[52px] items-center justify-center rounded-[2px] bg-[#cc2222] px-10 text-base font-bold text-white transition hover:bg-[#cc2222]/90"
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

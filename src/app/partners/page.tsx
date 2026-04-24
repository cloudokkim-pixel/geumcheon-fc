import type { Metadata } from "next";
import GSSCHeader from "@/components/GSSCHeader";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "패밀리사이트 | 서울금천축구클럽 G.S.S.C",
  description: "G.S.S.C와 함께하는 협력 대학, 연계 구단, 파트너 기관을 소개합니다.",
};

type PartnerCategory = "university" | "club" | "agent";

type Partner = {
  name: string;
  description: string;
  category: PartnerCategory;
  url?: string;
};

const categoryConfig: Record<PartnerCategory, { label: string; badgeStyle: string }> = {
  university: {
    label: "협력 대학",
    badgeStyle: "border border-[#3a1414] bg-[#1a0808] text-[#cc2222]",
  },
  club: {
    label: "K4·K3 연계 구단",
    badgeStyle: "border border-[#3a1414] bg-[#1a0808] text-[#cc2222]",
  },
  agent: {
    label: "에이전트",
    badgeStyle: "border border-[#3a2800] bg-[#1a1208] text-[#c49550]",
  },
};

const partners: Partner[] = [
  {
    name: "【대학명 입력】",
    description: "파트너 기관 정보는 클럽 대표 확인 후 업데이트됩니다.",
    category: "university",
  },
  {
    name: "【대학명 입력】",
    description: "파트너 기관 정보는 클럽 대표 확인 후 업데이트됩니다.",
    category: "university",
  },
  {
    name: "【구단명 입력】",
    description: "파트너 기관 정보는 클럽 대표 확인 후 업데이트됩니다.",
    category: "club",
  },
  {
    name: "【구단명 입력】",
    description: "파트너 기관 정보는 클럽 대표 확인 후 업데이트됩니다.",
    category: "club",
  },
  {
    name: "【에이전트명 입력】",
    description: "파트너 기관 정보는 클럽 대표 확인 후 업데이트됩니다.",
    category: "agent",
  },
];

const categoryOrder: PartnerCategory[] = ["university", "club", "agent"];

export default function PartnersPage() {
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    items: partners.filter((p) => p.category === cat),
  }));

  return (
    <div className="min-h-screen bg-transparent text-[#f5f5f7]">
      <GSSCHeader />

      {/* S1: 히어로 */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed',sans-serif] text-sm font-bold uppercase tracking-[0.15em] text-[#cc2222]">
            Partners · G.S.S.C
          </p>
          <h1 className="mt-3 font-['Barlow_Condensed',sans-serif] text-[clamp(2.5rem,8vw,4rem)] font-black uppercase leading-[1.0] tracking-tight text-[#f5f5f7]">
            PARTNERS
          </h1>
          <p className="mt-5 text-[clamp(1.125rem,3vw,1.5rem)] font-bold leading-[1.3] text-[#f5f5f7]">
            G.S.S.C와{" "}
            <span className="text-[#cc2222]">함께하는 파트너들</span>
          </p>
          <p className="mt-4 max-w-2xl text-base leading-[1.7] text-[#c0c0c5]">
            협력 대학, 연계 구단, 에이전트 파트너십을 통해<br className="hidden sm:block" />
            선수의 진로를 더 넓게 열어드립니다.
          </p>
        </div>
      </section>

      {/* S2: 파트너 목록 */}
      <main className="mx-auto max-w-7xl space-y-12 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {grouped.map(({ category, items }) => (
          <div key={category}>
            <div className="mb-6 flex items-center gap-3">
              <span
                className={`inline-block rounded-[2px] px-3 py-1 text-xs font-bold ${categoryConfig[category].badgeStyle}`}
              >
                {categoryConfig[category].label}
              </span>
              <div className="flex-1 border-t border-[#222]" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((partner, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-[12px] border border-[#222] bg-[#1c1c1e] p-6 transition hover:border-[#424245]"
                >
                  {/* 로고 플레이스홀더 */}
                  <div className="flex h-16 w-full items-center justify-center rounded-[8px] bg-[#111] text-[11px] text-[#444]">
                    LOGO
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[#f5f5f7]">{partner.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-[1.7] text-[#6e6e73]">
                    {partner.description}
                  </p>

                  {partner.url && (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#cc2222] transition hover:underline"
                    >
                      바로가기
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-[11px] text-[#444]">
          ※ 파트너 기관 목록은 클럽 대표 확인 후 업데이트됩니다. 현재 표시된 내용은 플레이스홀더입니다.
        </p>
      </main>

      {/* S3: 스폰서 — 확인 후 공개 예정
      <section className="border-t border-[#222] py-16 sm:py-20">
        ...
      </section>
      */}

      {/* S4: 파트너십 문의 CTA */}
      <section className="border-t border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[12px] border-l-4 border-[#cc2222] bg-[#1a0808] px-8 py-8 sm:px-10">
            <p className="font-['Barlow_Condensed',sans-serif] text-xs font-bold uppercase tracking-[0.15em] text-[#cc2222]">
              Partnership
            </p>
            <h2 className="mt-3 font-['Barlow_Condensed',sans-serif] text-[clamp(1.5rem,4vw,2rem)] font-black leading-[1.1] text-[#f5f5f7]">
              G.S.S.C의 파트너가<br />
              되고 싶으신가요?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-[1.7] text-[#c0c0c5]">
              협력 대학, 구단, 에이전트 또는 후원사로 함께하실 기관·기업은 아래 버튼을 통해 문의해 주세요.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex h-[48px] items-center justify-center rounded-[2px] bg-[#cc2222] px-8 text-sm font-bold text-white transition hover:bg-[#cc2222]/90"
              >
                파트너십 문의
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

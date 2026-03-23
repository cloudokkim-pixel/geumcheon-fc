"use client";

import GSSCHeader from "@/components/GSSCHeader";
import Footer from "@/components/Footer";
import { useSiteLanguage, type Locale } from "@/components/site-language";
import { ExternalLink, Building2, GraduationCap, Trophy, HeartHandshake } from "lucide-react";

/* ─────────────────────────────────────────────
   타입
───────────────────────────────────────────── */
type PartnerCategory = "sports" | "education" | "equipment" | "sponsor";

type Partner = {
  name: string;
  description: string;
  category: PartnerCategory;
  url?: string;
};

/* ─────────────────────────────────────────────
   파트너 목록 (플레이스홀더)
───────────────────────────────────────────── */
const placeholderPartners: Partner[] = [
  {
    name: "【확인 필요】",
    description: "파트너 기관 정보는 리더옥님 확인 후 업데이트됩니다.",
    category: "sports",
  },
  {
    name: "【확인 필요】",
    description: "파트너 기관 정보는 리더옥님 확인 후 업데이트됩니다.",
    category: "education",
  },
  {
    name: "【확인 필요】",
    description: "파트너 기관 정보는 리더옥님 확인 후 업데이트됩니다.",
    category: "equipment",
  },
  {
    name: "【확인 필요】",
    description: "파트너 기관 정보는 리더옥님 확인 후 업데이트됩니다.",
    category: "sponsor",
  },
];

/* ─────────────────────────────────────────────
   카피
───────────────────────────────────────────── */
type PartnersCopy = {
  pageLabel: string;
  pageTitle: string;
  pageDesc: string;
  categoriesLabel: string;
  categoryLabels: Record<PartnerCategory, string>;
  partnersLabel: string;
  partnersTitle: string;
  visitLabel: string;
  placeholderNote: string;
  becomePartnerTitle: string;
  becomePartnerDesc: string;
  becomePartnerPrimary: string;
  becomePartnerSecondary: string;
};

const copy: Record<Locale, PartnersCopy> = {
  ko: {
    pageLabel: "Partners",
    pageTitle: "패밀리사이트",
    pageDesc:
      "서울금천축구클럽 G.C.S.C와 함께하는 파트너 기관 및 후원사를 소개합니다. 파트너십을 통해 더 나은 선수 육성 환경을 만들어 나갑니다.",
    categoriesLabel: "Categories",
    categoryLabels: {
      sports: "스포츠 기관",
      education: "교육·진학",
      equipment: "장비·물품",
      sponsor: "후원사",
    },
    partnersLabel: "Our Partners",
    partnersTitle: "파트너 기관",
    visitLabel: "바로가기",
    placeholderNote:
      "파트너 기관 목록은 리더옥님 확인 후 업데이트됩니다. 현재 표시된 내용은 플레이스홀더입니다.",
    becomePartnerTitle: "파트너십 문의",
    becomePartnerDesc:
      "금천축구클럽과의 파트너십에 관심 있으신 기관·기업은 아래 연락처로 문의해 주세요.",
    becomePartnerPrimary: "후원 신청하기",
    becomePartnerSecondary: "문의하기",
  },
  en: {
    pageLabel: "Partners",
    pageTitle: "Partner Sites",
    pageDesc:
      "Introducing the partner organizations and sponsors supporting Geumcheon FC G.C.S.C. Together, we build a better environment for player development.",
    categoriesLabel: "Categories",
    categoryLabels: {
      sports: "Sports Organizations",
      education: "Education & Pathway",
      equipment: "Equipment & Gear",
      sponsor: "Sponsors",
    },
    partnersLabel: "Our Partners",
    partnersTitle: "Partner Organizations",
    visitLabel: "Visit",
    placeholderNote:
      "Partner list will be updated after confirmation. Content shown is a placeholder.",
    becomePartnerTitle: "Partnership Inquiry",
    becomePartnerDesc:
      "Interested in partnering with Geumcheon FC? Contact us through the channels below.",
    becomePartnerPrimary: "Apply for Sponsorship",
    becomePartnerSecondary: "Contact Us",
  },
  ja: {
    pageLabel: "Partners",
    pageTitle: "パートナーサイト",
    pageDesc:
      "クムチョンFC G.C.S.Cを支えるパートナー機関とスポンサーをご紹介します。",
    categoriesLabel: "Categories",
    categoryLabels: {
      sports: "スポーツ機関",
      education: "教育・進学",
      equipment: "用具・物品",
      sponsor: "スポンサー",
    },
    partnersLabel: "Our Partners",
    partnersTitle: "パートナー機関",
    visitLabel: "サイトへ",
    placeholderNote:
      "パートナー機関リストはリーダーオクさん確認後に更新されます。現在の内容はプレースホルダーです。",
    becomePartnerTitle: "パートナーシップのお問い合わせ",
    becomePartnerDesc:
      "クムチョンFCとのパートナーシップにご興味のある機関・企業は下記よりお問い合わせください。",
    becomePartnerPrimary: "後援申請",
    becomePartnerSecondary: "お問い合わせ",
  },
  zh: {
    pageLabel: "Partners",
    pageTitle: "合作机构",
    pageDesc:
      "介绍支持金泉FC G.C.S.C的合作机构与赞助商。我们共同为球员培养创造更好的环境。",
    categoriesLabel: "Categories",
    categoryLabels: {
      sports: "体育机构",
      education: "教育·升学",
      equipment: "装备·物资",
      sponsor: "赞助商",
    },
    partnersLabel: "Our Partners",
    partnersTitle: "合作伙伴",
    visitLabel: "访问",
    placeholderNote:
      "合作机构名单确认后将更新，当前内容为占位内容。",
    becomePartnerTitle: "合作咨询",
    becomePartnerDesc:
      "如有意与金泉FC建立合作关系，欢迎通过以下方式联系我们。",
    becomePartnerPrimary: "申请赞助",
    becomePartnerSecondary: "联系我们",
  },
};

const categoryIcons: Record<PartnerCategory, React.ComponentType<{ className?: string }>> = {
  sports: Trophy,
  education: GraduationCap,
  equipment: Building2,
  sponsor: HeartHandshake,
};

const categoryColors: Record<PartnerCategory, string> = {
  sports: "text-[#cc2222] bg-[#cc2222]/10",
  education: "text-[#c49550] bg-[#c49550]/10",
  equipment: "text-[#c0c0c5] bg-white/10",
  sponsor: "text-[#c0c0c5] bg-white/10",
};

/* ─────────────────────────────────────────────
   페이지
───────────────────────────────────────────── */
export default function PartnersPage() {
  const { locale } = useSiteLanguage();
  const t = copy[locale];

  const categories: PartnerCategory[] = ["sports", "education", "equipment", "sponsor"];

  return (
    <div className="min-h-screen bg-transparent text-[#f5f5f7]">
      <GSSCHeader />

      {/* 히어로 */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#cc2222]">{t.pageLabel}</p>
          <h1 className="mt-3 text-[clamp(2rem,7vw,3.375rem)] font-black uppercase leading-tight tracking-tight text-[#f5f5f7]">
            {t.pageTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-[1.7] text-[#c0c0c5]">{t.pageDesc}</p>
        </div>
      </section>

      {/* 카테고리 개요 */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#cc2222]">{t.categoriesLabel}</p>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat];
            return (
              <div key={cat} className="rounded-[14px] bg-[#1c1c1e] p-6">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${categoryColors[cat]}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <p className="mt-4 text-base font-bold text-[#f5f5f7]">{t.categoryLabels[cat]}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 파트너 목록 */}
      <section className="border-t border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-[#cc2222]">{t.partnersLabel}</p>
          <h2 className="mb-10 text-[clamp(1.375rem,4vw,2.25rem)] font-black text-[#f5f5f7]">{t.partnersTitle}</h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {placeholderPartners.map((partner, i) => {
              const Icon = categoryIcons[partner.category];
              return (
                <div
                  key={i}
                  className="group flex flex-col rounded-[14px] border border-[#222] bg-[#1c1c1e] p-7 transition hover:border-[#424245]"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${categoryColors[partner.category]}`}>
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-black text-[#f5f5f7]">{partner.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[#888890]">{partner.description}</p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${categoryColors[partner.category]}`}>
                      {t.categoryLabels[partner.category]}
                    </span>
                    {partner.url && (
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#6e6e73] transition hover:text-[#f5f5f7]"
                      >
                        {t.visitLabel}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 플레이스홀더 안내 */}
          <div className="mt-10 rounded-[10px] border border-[#2a2a2e] bg-[#1c1c1e] px-5 py-4 text-sm leading-6 text-[#6e6e73]">
            ⚠ {t.placeholderNote}
          </div>
        </div>
      </section>

      {/* 파트너십 문의 CTA */}
      <section className="border-t border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[14px] border border-white/10 bg-[#1c1c1e] p-8 sm:p-10">
            <h2 className="text-[clamp(1.375rem,4vw,2.25rem)] font-black text-[#f5f5f7]">{t.becomePartnerTitle}</h2>
            <p className="mt-4 max-w-2xl text-base text-[#c0c0c5]">{t.becomePartnerDesc}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/support/apply"
                className="inline-flex h-[52px] w-full items-center justify-center rounded-[2px] bg-[#cc2222] px-10 text-base font-bold text-white transition hover:bg-[#cc2222]/90 sm:w-auto"
              >
                {t.becomePartnerPrimary}
              </a>
              <a
                href="/contact"
                className="inline-flex h-[52px] w-full items-center justify-center rounded-[2px] border border-[#424245] bg-transparent px-10 text-base font-medium text-[#f5f5f7] transition hover:bg-white/5 sm:w-auto"
              >
                {t.becomePartnerSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

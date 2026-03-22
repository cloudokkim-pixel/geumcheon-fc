"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  HeartHandshake,
  ShieldCheck,
  Shirt,
  Trophy,
  Users,
} from "lucide-react";
import GSSCHeader from "@/components/GSSCHeader";
import { useSiteLanguage, type Locale } from "@/components/site-language";

const supportIcons = [HeartHandshake, Building2, Shirt];
const useIcons = [Users, Shirt, Trophy, BadgeDollarSign];

const supportPageCopy: Record<
  Locale,
  {
    badge: string;
    title: string;
    desc: string;
    primary: string;
    secondary: string;
    needTitle: string;
    needDesc: string;
    needItems: string[];
    supportTypesLabel: string;
    supportTypesTitle: string;
    supportTypes: Array<{ title: string; desc: string }>;
    usageLabel: string;
    usageTitle: string;
    usageDesc: string;
    usageItems: Array<{ title: string; desc: string }>;
    trustLabel: string;
    trustTitle: string;
    trustItems: string[];
    faqLabel: string;
    faqTitle: string;
    faqs: Array<{ q: string; a: string }>;
    finalTitle: string;
    finalDesc: string;
    finalPrimary: string;
  }
> = {
  ko: {
    badge: "Support Geumcheon Soccer Club",
    title: "한 명의 선수를 돕는 후원이 팀의 미래를 만듭니다",
    desc:
      "서울금천축구클럽의 후원은 단순한 금전 지원이 아니라 선수들의 훈련 환경, 대회 경험, 성장 기회를 넓히는 직접적인 투자입니다.",
    primary: "후원 신청하기",
    secondary: "문의하기",
    needTitle: "왜 후원이 필요한가",
    needDesc:
      "유소년 선수들은 훈련만으로 성장하지 않습니다. 안정적인 환경, 적절한 장비, 실전 경험, 꾸준한 지원이 함께 있어야 더 오래 성장할 수 있습니다.",
    needItems: ["훈련 장비 및 소모품 보강", "대회 참가비와 이동 비용 지원", "경제적 부담이 있는 선수 지원", "전용 훈련 환경 유지와 개선"],
    supportTypesLabel: "Support Types",
    supportTypesTitle: "후원 방식",
    supportTypes: [
      { title: "개인 후원", desc: "선수 육성과 팀 운영을 위한 일시 또는 정기 후원에 참여할 수 있습니다." },
      { title: "기업 후원", desc: "지역 기업, 파트너 기관과 함께 팀의 성장 환경을 만드는 협력형 후원입니다." },
      { title: "물품 후원", desc: "훈련복, 장비, 회복용품, 운영 물품 등 현장에 바로 필요한 물품을 지원할 수 있습니다." },
    ],
    usageLabel: "Usage Plan",
    usageTitle: "후원금 사용처",
    usageDesc: "후원은 선수들이 직접 체감할 수 있는 항목에 우선적으로 사용됩니다.",
    usageItems: [
      { title: "선수 지원", desc: "훈련비, 참가비, 특별 지원이 필요한 선수 보조" },
      { title: "장비 및 유니폼", desc: "훈련 장비, 팀 물품, 유니폼 및 소모품 구입" },
      { title: "대회 운영", desc: "대회 참가, 이동, 운영 관련 비용 지원" },
      { title: "시설 환경", desc: "훈련장 환경 개선과 안정적인 운영 유지" },
    ],
    trustLabel: "Why Support",
    trustTitle: "신뢰할 수 있는 후원 구조",
    trustItems: [
      "클럽 소개와 운영 방향을 공개합니다",
      "후원 방식과 사용처를 명확히 안내합니다",
      "개인/기업/물품 후원을 구분해 접수합니다",
      "담당자 확인 후 순차적으로 직접 안내합니다",
    ],
    faqLabel: "FAQ",
    faqTitle: "자주 묻는 질문",
    faqs: [
      { q: "정기 후원도 가능한가요?", a: "가능합니다. 신청폼에서 정기 후원을 선택하신 뒤 상담을 통해 진행할 수 있습니다." },
      { q: "기업 후원은 어떻게 진행되나요?", a: "담당자 정보와 협력 희망 내용을 남겨주시면 개별적으로 연락드려 협의합니다." },
      { q: "물품 후원도 받을 수 있나요?", a: "가능합니다. 훈련 장비, 유니폼, 회복용품, 운영 물품 등 현장에 필요한 물품 후원을 받고 있습니다." },
      { q: "후원 신청 후 바로 결제되나요?", a: "아닙니다. 신청 후 담당자가 내용을 확인하고 안내드린 뒤 최종 진행됩니다." },
    ],
    finalTitle: "선수의 오늘 훈련이 내일의 기회가 됩니다",
    finalDesc: "후원 신청을 남겨주시면 담당자가 확인 후 순차적으로 연락드립니다.",
    finalPrimary: "후원 신청폼 이동",
  },
  en: {
    badge: "Support Geumcheon Soccer Club",
    title: "Supporting one player helps shape the future of the whole team",
    desc:
      "Support for Geumcheon Soccer Club is not just financial help. It directly expands training conditions, tournament opportunities, and growth pathways for young players.",
    primary: "Apply for Support",
    secondary: "Contact Us",
    needTitle: "Why Support Matters",
    needDesc:
      "Youth players do not grow through training alone. Stable facilities, proper equipment, match experience, and continuous support make long-term development possible.",
    needItems: [
      "Training gear and consumables",
      "Tournament fees and transportation",
      "Support for players with financial burden",
      "Maintenance and improvement of training facilities",
    ],
    supportTypesLabel: "Support Types",
    supportTypesTitle: "Ways to Support",
    supportTypes: [
      { title: "Individual Support", desc: "Join as a one-time or recurring supporter for player development and team operations." },
      { title: "Corporate Support", desc: "Work with the club as a local partner helping build a stronger environment for youth players." },
      { title: "In-kind Support", desc: "Support with uniforms, training gear, recovery items, and other practical needs." },
    ],
    usageLabel: "Usage Plan",
    usageTitle: "How Support Is Used",
    usageDesc: "Support is prioritized for areas that players can directly feel in the field.",
    usageItems: [
      { title: "Player Support", desc: "Training support, participation fees, and targeted player assistance" },
      { title: "Equipment and Uniforms", desc: "Training tools, team goods, uniforms, and consumables" },
      { title: "Tournament Operations", desc: "Competition entries, travel, and event-related costs" },
      { title: "Facility Environment", desc: "Maintaining and improving the training environment" },
    ],
    trustLabel: "Why Support",
    trustTitle: "A Trustworthy Support Structure",
    trustItems: [
      "Club identity and operating direction are openly presented",
      "Support methods and usage areas are clearly explained",
      "Individual, corporate, and in-kind support are received separately",
      "A staff member reviews every request and follows up directly",
    ],
    faqLabel: "FAQ",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Is recurring support available?", a: "Yes. You can choose recurring support in the form and continue after consultation." },
      { q: "How does corporate support work?", a: "Leave your company and partnership goals in the form, and our team will contact you directly." },
      { q: "Can I support with goods instead of money?", a: "Yes. We welcome support for training gear, uniforms, recovery products, and other useful items." },
      { q: "Will payment be processed immediately?", a: "No. A staff member reviews the request first and then guides the next step." },
    ],
    finalTitle: "Today's training can become tomorrow's opportunity",
    finalDesc: "Submit your support request and our team will contact you after review.",
    finalPrimary: "Open Support Form",
  },
  ja: {
    badge: "Support Geumcheon Soccer Club",
    title: "一人の選手への後援がチームの未来をつくります",
    desc:
      "クムチョンサッカークラブへの後援は、単なる金銭支援ではなく、選手たちの練習環境、大会経験、成長機会を広げる直接的な支えです。",
    primary: "後援申請へ",
    secondary: "お問い合わせ",
    needTitle: "なぜ後援が必要か",
    needDesc:
      "ユース選手は練習だけでは成長しません。安定した環境、適切な用具、実戦経験、継続的な支援があってこそ長く成長できます。",
    needItems: ["トレーニング用品の補強", "大会参加費と移動費の支援", "経済的負担のある選手支援", "練習環境の維持と改善"],
    supportTypesLabel: "Support Types",
    supportTypesTitle: "後援方法",
    supportTypes: [
      { title: "個人後援", desc: "選手育成とチーム運営のための単発または定期後援に参加できます。" },
      { title: "企業後援", desc: "地域企業やパートナー機関と共に成長環境をつくる協力型後援です。" },
      { title: "物品後援", desc: "ユニフォーム、用具、回復用品、運営物品など現場に必要なものを支援できます。" },
    ],
    usageLabel: "Usage Plan",
    usageTitle: "後援金の使い道",
    usageDesc: "後援は選手が現場で直接感じられる項目を優先して使われます。",
    usageItems: [
      { title: "選手支援", desc: "練習費、大会費、特別支援が必要な選手への補助" },
      { title: "用具・ユニフォーム", desc: "練習用品、チーム物品、ユニフォームや消耗品の購入" },
      { title: "大会運営", desc: "大会参加、移動、運営関連費用" },
      { title: "施設環境", desc: "練習環境の改善と安定した運営維持" },
    ],
    trustLabel: "Why Support",
    trustTitle: "信頼できる後援の仕組み",
    trustItems: [
      "クラブ紹介と運営方向を公開します",
      "後援方法と使途を明確に案内します",
      "個人・企業・物品後援を分けて受付します",
      "担当者が内容を確認し、順次ご案内します",
    ],
    faqLabel: "FAQ",
    faqTitle: "よくある質問",
    faqs: [
      { q: "定期後援は可能ですか。", a: "可能です。申請フォームで定期後援を選択し、相談後に進められます。" },
      { q: "企業後援はどのように進みますか。", a: "担当者情報と希望内容を残していただければ、個別にご連絡いたします。" },
      { q: "物品後援も可能ですか。", a: "可能です。練習用品、ユニフォーム、回復用品、運営物品などを受け付けています。" },
      { q: "申請後すぐに決済されますか。", a: "いいえ。担当者確認後に別途ご案内してから進みます。" },
    ],
    finalTitle: "今日の練習が明日のチャンスになります",
    finalDesc: "後援申請を残していただければ、担当者が確認後に順次ご連絡いたします。",
    finalPrimary: "後援フォームへ",
  },
  zh: {
    badge: "Support Geumcheon Soccer Club",
    title: "对一名球员的赞助，也是在支持整支球队的未来",
    desc:
      "对金泉足球俱乐部的赞助不仅是资金帮助，更是对球员训练环境、比赛机会和成长路径的直接投入。",
    primary: "进入赞助申请",
    secondary: "联系我们",
    needTitle: "为什么需要赞助",
    needDesc:
      "青少年球员并不是只靠训练就能成长。稳定的环境、合适的装备、实战经验和持续支持都非常重要。",
    needItems: ["训练装备与消耗品补充", "比赛参赛费与交通费支持", "减轻部分球员的经济负担", "训练场地与环境维护改善"],
    supportTypesLabel: "Support Types",
    supportTypesTitle: "赞助方式",
    supportTypes: [
      { title: "个人赞助", desc: "可选择一次性或定期赞助，支持球员培养和俱乐部运营。" },
      { title: "企业赞助", desc: "与当地企业或合作机构共同建设更好的成长环境。" },
      { title: "物资赞助", desc: "可提供球衣、训练器材、恢复用品和现场运营所需物资。" },
    ],
    usageLabel: "Usage Plan",
    usageTitle: "赞助金使用方向",
    usageDesc: "赞助资金优先用于球员能够直接感受到的训练与成长项目。",
    usageItems: [
      { title: "球员支持", desc: "训练、参赛以及特别需要帮助球员的补助" },
      { title: "装备与队服", desc: "训练器材、队伍用品、队服与消耗品采购" },
      { title: "比赛运营", desc: "比赛报名、交通和活动运营相关费用" },
      { title: "设施环境", desc: "训练环境改善与稳定运营维护" },
    ],
    trustLabel: "Why Support",
    trustTitle: "值得信赖的赞助结构",
    trustItems: [
      "公开介绍俱乐部理念与运营方向",
      "清楚说明赞助方式与使用范围",
      "区分个人、企业与物资赞助进行受理",
      "由负责人确认后逐一联系说明",
    ],
    faqLabel: "FAQ",
    faqTitle: "常见问题",
    faqs: [
      { q: "可以进行定期赞助吗？", a: "可以。您可在表单中选择定期赞助，并在沟通后继续进行。" },
      { q: "企业赞助如何进行？", a: "请填写负责人信息和合作意向，我们会单独联系您进一步沟通。" },
      { q: "可以提供物资赞助吗？", a: "可以。我们接受训练器材、队服、恢复用品及其他现场需要的物资支持。" },
      { q: "提交后会马上付款吗？", a: "不会。提交后由负责人确认，再与您联系进行后续流程。" },
    ],
    finalTitle: "今天的训练，会成为明天的机会",
    finalDesc: "提交赞助申请后，负责人会确认内容并与您联系。",
    finalPrimary: "前往赞助表单",
  },
};

export default function SupportPage() {
  const { locale } = useSiteLanguage();
  const t = supportPageCopy[locale];

  return (
    <div className="min-h-screen bg-transparent text-[#f5f5f7]">
      <GSSCHeader />

      <main>
        <section className="relative overflow-hidden border-b border-[#222]">
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-4xl">
              <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-[#c0c0c5]">{t.badge}</p>
              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#f5f5f7] sm:text-5xl lg:text-6xl">{t.title}</h1>
              <p className="mt-6 max-w-3xl text-sm leading-8 text-[#c0c0c5] sm:text-base">{t.desc}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/support/apply" className="inline-flex h-12 items-center justify-center rounded-[2px] bg-[#cc2222] px-6 text-base font-bold text-white transition hover:bg-[#cc2222]/90">
                  {t.primary}
                </Link>
                <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-[2px] border border-[#424245] bg-transparent px-6 text-base font-medium text-[#f5f5f7] transition hover:bg-white/5">
                  {t.secondary}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[14px] bg-[#1c1c1e] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#cc2222]">{t.needTitle}</p>
              <p className="mt-5 text-sm leading-8 text-[#c0c0c5] sm:text-base">{t.needDesc}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {t.needItems.map((item) => (
                <div key={item} className="rounded-[14px] bg-[#1c1c1e] p-6 text-sm leading-7 text-[#c0c0c5]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#222] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-sm uppercase tracking-[0.28em] text-[#cc2222]">{t.supportTypesLabel}</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#f5f5f7] sm:text-4xl">{t.supportTypesTitle}</h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {t.supportTypes.map((item, index) => {
                const Icon = supportIcons[index];
                return (
                  <article key={item.title} className="rounded-[14px] bg-[#1c1c1e] p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#f5f5f7]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-2xl font-black text-[#f5f5f7]">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#c0c0c5]">{item.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.28em] text-[#cc2222]">{t.usageLabel}</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#f5f5f7] sm:text-4xl">{t.usageTitle}</h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#c0c0c5] sm:text-base">{t.usageDesc}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {t.usageItems.map((item, index) => {
              const Icon = useIcons[index];
              return (
                <div key={item.title} className="rounded-[14px] bg-[#1c1c1e] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-[#f5f5f7]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#f5f5f7]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#c0c0c5]">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-t border-[#222] py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="rounded-[14px] bg-[#1c1c1e] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#cc2222]">{t.trustLabel}</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#f5f5f7] sm:text-4xl">{t.trustTitle}</h2>
              <div className="mt-8 space-y-3">
                {t.trustItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[8px] border border-white/10 bg-black/20 px-4 py-4 text-sm leading-7 text-[#c0c0c5]">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#c0c0c5]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[14px] bg-[#1c1c1e] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#cc2222]">{t.faqLabel}</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#f5f5f7] sm:text-4xl">{t.faqTitle}</h2>
              <div className="mt-8 space-y-4">
                {t.faqs.map((item) => (
                  <div key={item.q} className="rounded-[8px] border border-white/10 bg-black/20 p-5">
                    <p className="text-base font-bold text-[#f5f5f7]">{item.q}</p>
                    <p className="mt-3 text-sm leading-7 text-[#c0c0c5]">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="rounded-[14px] border border-white/10 bg-[#1c1c1e] p-8 sm:p-10">
            <h2 className="text-3xl font-black tracking-tight text-[#f5f5f7] sm:text-4xl">{t.finalTitle}</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#c0c0c5] sm:text-base">{t.finalDesc}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/support/apply" className="inline-flex h-12 items-center justify-center gap-2 rounded-[2px] bg-[#cc2222] px-6 text-base font-bold text-white transition hover:bg-[#cc2222]/90">
                {t.finalPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

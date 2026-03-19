"use client";

import GSSCHeader from "@/components/GSSCHeader";
import { useSiteLanguage, type Locale } from "@/components/site-language";

const supportApplyCopy: Record<
  Locale,
  {
    title: string;
    desc: string;
    typeLabel: string;
    typeOptions: [string, string, string, string];
    nameLabel: string;
    organizationLabel: string;
    contactLabel: string;
    emailLabel: string;
    supportModeLabel: string;
    supportModeOptions: [string, string];
    amountLabel: string;
    amountPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    agreement: string;
    helper: string;
    submit: string;
  }
> = {
  ko: {
    title: "후원 신청폼",
    desc: "후원 유형과 희망 내용을 남겨주시면 담당자가 확인 후 순차적으로 연락드립니다. 제출 즉시 결제되지는 않습니다.",
    typeLabel: "후원 유형",
    typeOptions: ["개인 후원", "기업 후원", "물품 후원", "기타"],
    nameLabel: "이름 / 담당자명",
    organizationLabel: "회사명 또는 소속",
    contactLabel: "연락처",
    emailLabel: "이메일",
    supportModeLabel: "후원 방식",
    supportModeOptions: ["정기 후원", "일시 후원"],
    amountLabel: "희망 후원 금액 또는 물품 내용",
    amountPlaceholder: "예: 월 10만원 / 훈련조끼 20벌 / 유니폼 지원",
    messageLabel: "문의 및 전달사항",
    messagePlaceholder: "희망 후원 배경, 협의하고 싶은 내용, 전달 가능한 시기 등을 적어주세요.",
    agreement: "개인정보 수집 및 후원 상담을 위한 연락에 동의합니다.",
    helper: "제출 후 담당자가 확인 후 순차적으로 연락드립니다.",
    submit: "후원 신청 보내기",
  },
  en: {
    title: "Support Application",
    desc: "Leave your preferred support type and details, and our staff will contact you after review. This form does not process payment immediately.",
    typeLabel: "Support Type",
    typeOptions: ["Individual", "Corporate", "In-kind", "Other"],
    nameLabel: "Name / Contact Person",
    organizationLabel: "Organization or Company",
    contactLabel: "Phone Number",
    emailLabel: "Email",
    supportModeLabel: "Support Method",
    supportModeOptions: ["Recurring", "One-time"],
    amountLabel: "Amount or Item Details",
    amountPlaceholder: "Example: KRW 100,000 monthly / 20 training vests / uniform support",
    messageLabel: "Message",
    messagePlaceholder: "Tell us your support goal, collaboration details, or preferred timeline.",
    agreement: "I agree to the collection of personal information for support consultation.",
    helper: "A staff member will review your request and contact you in order.",
    submit: "Send Support Request",
  },
  ja: {
    title: "後援申請フォーム",
    desc: "後援方法と希望内容を残していただければ、担当者が確認後に順次ご連絡いたします。送信直後に決済は行われません。",
    typeLabel: "後援タイプ",
    typeOptions: ["個人後援", "企業後援", "物品後援", "その他"],
    nameLabel: "氏名 / 担当者名",
    organizationLabel: "会社名または所属",
    contactLabel: "連絡先",
    emailLabel: "メール",
    supportModeLabel: "後援方法",
    supportModeOptions: ["定期後援", "単発後援"],
    amountLabel: "希望金額または物品内容",
    amountPlaceholder: "例: 月10万ウォン / ビブス20枚 / ユニフォーム支援",
    messageLabel: "お問い合わせ内容",
    messagePlaceholder: "後援の背景、相談したい内容、提供可能時期などをご記入ください。",
    agreement: "個人情報の収集および後援相談のための連絡に同意します。",
    helper: "送信後、担当者が内容を確認し順次ご連絡いたします。",
    submit: "後援申請を送信",
  },
  zh: {
    title: "赞助申请表",
    desc: "填写赞助类型和希望内容后，负责人会确认并与您联系。提交后不会立即付款。",
    typeLabel: "赞助类型",
    typeOptions: ["个人赞助", "企业赞助", "物资赞助", "其他"],
    nameLabel: "姓名 / 负责人",
    organizationLabel: "公司名称或所属单位",
    contactLabel: "联系方式",
    emailLabel: "电子邮箱",
    supportModeLabel: "赞助方式",
    supportModeOptions: ["定期赞助", "一次性赞助"],
    amountLabel: "希望赞助金额或物资内容",
    amountPlaceholder: "例如：每月10万韩元 / 20件训练背心 / 提供队服支持",
    messageLabel: "补充说明",
    messagePlaceholder: "请填写赞助背景、希望讨论内容或可提供的时间安排。",
    agreement: "我同意为赞助咨询而进行的个人信息收集与联系。",
    helper: "提交后负责人会确认内容并依次联系您。",
    submit: "提交赞助申请",
  },
};

export default function SupportApplyPage() {
  const { locale } = useSiteLanguage();
  const t = supportApplyCopy[locale];

  return (
    <div className="min-h-screen bg-black text-white">
      <GSSCHeader />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{t.title}</h1>
          <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">{t.desc}</p>

          <form className="mt-10 space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-white" htmlFor="supportType">
                {t.typeLabel}
              </label>
              <select id="supportType" name="supportType" className="h-12 w-full rounded-2xl border border-white/15 bg-black/40 px-4 text-white focus:border-red-500 focus:outline-none">
                {t.typeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-white" htmlFor="name">
                  {t.nameLabel}
                </label>
                <input id="name" name="name" type="text" className="h-12 w-full rounded-2xl border border-white/15 bg-black/40 px-4 text-white focus:border-red-500 focus:outline-none" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-white" htmlFor="organization">
                  {t.organizationLabel}
                </label>
                <input id="organization" name="organization" type="text" className="h-12 w-full rounded-2xl border border-white/15 bg-black/40 px-4 text-white focus:border-red-500 focus:outline-none" />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-white" htmlFor="contact">
                  {t.contactLabel}
                </label>
                <input id="contact" name="contact" type="text" className="h-12 w-full rounded-2xl border border-white/15 bg-black/40 px-4 text-white focus:border-red-500 focus:outline-none" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-white" htmlFor="email">
                  {t.emailLabel}
                </label>
                <input id="email" name="email" type="email" className="h-12 w-full rounded-2xl border border-white/15 bg-black/40 px-4 text-white focus:border-red-500 focus:outline-none" />
              </div>
            </div>

            <div>
              <label className="mb-3 block text-sm font-semibold text-white">{t.supportModeLabel}</label>
              <div className="grid gap-3 sm:grid-cols-2">
                {t.supportModeOptions.map((option) => (
                  <label key={option} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white/80">
                    <input type="radio" name="supportMode" value={option} />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white" htmlFor="amount">
                {t.amountLabel}
              </label>
              <input
                id="amount"
                name="amount"
                type="text"
                placeholder={t.amountPlaceholder}
                className="h-12 w-full rounded-2xl border border-white/15 bg-black/40 px-4 text-white placeholder:text-white/35 focus:border-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-white" htmlFor="message">
                {t.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder={t.messagePlaceholder}
                className="w-full rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder:text-white/35 focus:border-red-500 focus:outline-none"
              />
            </div>

            <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-white/75">
              <input type="checkbox" className="mt-1" />
              <span>{t.agreement}</span>
            </label>

            <p className="text-sm text-white/50">{t.helper}</p>

            <button type="submit" className="w-full rounded-2xl bg-red-600 py-3 text-base font-semibold text-white transition hover:bg-red-700">
              {t.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

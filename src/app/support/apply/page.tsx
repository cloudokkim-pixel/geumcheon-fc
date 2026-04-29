"use client";

import React from "react";
import GCSCHeader from "@/components/GCSCHeader";
import Footer from "@/components/Footer";
import { useSiteLanguage, type Locale } from "@/components/site-language";
import { CheckCircle } from "lucide-react";

const supportApplyCopy: Record<
  Locale,
  {
    pageLabel: string;
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
    submitting: string;
    successTitle: string;
    successDesc: string;
  }
> = {
  ko: {
    pageLabel: "Support",
    title: "후원 신청폼",
    desc: "후원 유형과 희망 내용을 남겨주시면 담당자가 확인 후 순차적으로 연락드립니다. 제출 즉시 결제되지는 않습니다.",
    typeLabel: "후원 유형",
    typeOptions: ["개인 후원", "기업 후원", "물품 후원", "기타"],
    nameLabel: "이름 / 담당자명",
    organizationLabel: "회사명 또는 소속 (선택)",
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
    submitting: "제출 중...",
    successTitle: "후원 신청이 접수되었습니다",
    successDesc: "빠른 시일 내에 담당자가 연락드리겠습니다. 문의사항은 010-4178-0207로 연락 주세요.",
  },
  en: {
    pageLabel: "Support",
    title: "Support Application",
    desc: "Leave your preferred support type and details, and our staff will contact you after review. This form does not process payment immediately.",
    typeLabel: "Support Type",
    typeOptions: ["Individual", "Corporate", "In-kind", "Other"],
    nameLabel: "Name / Contact Person",
    organizationLabel: "Organization (optional)",
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
    submitting: "Submitting...",
    successTitle: "Application Received",
    successDesc: "Our team will contact you soon. For inquiries call 010-4178-0207.",
  },
  ja: {
    pageLabel: "Support",
    title: "後援申請フォーム",
    desc: "後援方法と希望内容を残していただければ、担当者が確認後に順次ご連絡いたします。送信直後に決済は行われません。",
    typeLabel: "後援タイプ",
    typeOptions: ["個人後援", "企業後援", "物品後援", "その他"],
    nameLabel: "氏名 / 担当者名",
    organizationLabel: "会社名または所属（任意）",
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
    submitting: "送信中...",
    successTitle: "申請が受付されました",
    successDesc: "担当者よりご連絡いたします。お問い合わせは 010-4178-0207 まで。",
  },
  zh: {
    pageLabel: "Support",
    title: "赞助申请表",
    desc: "填写赞助类型和希望内容后，负责人会确认并与您联系。提交后不会立即付款。",
    typeLabel: "赞助类型",
    typeOptions: ["个人赞助", "企业赞助", "物资赞助", "其他"],
    nameLabel: "姓名 / 负责人",
    organizationLabel: "公司名称或所属单位（可选）",
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
    submitting: "提交中...",
    successTitle: "申请已受理",
    successDesc: "负责人将尽快与您联系。如有疑问请拨打 010-4178-0207。",
  },
};

const inputClass =
  "h-12 w-full rounded-[6px] border border-[#2a2a2e] bg-[#000]/40 px-4 text-[#f5f5f7] placeholder-[#6e6e73] focus:border-[#cc2222] focus:outline-none";

export default function SupportApplyPage() {
  const { locale } = useSiteLanguage();
  const t = supportApplyCopy[locale];

  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = React.useState("");
  const [agreed, setAgreed] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agreed) return;
    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/support-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "오류가 발생했습니다. 다시 시도해 주세요.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("네트워크 오류가 발생했습니다. 다시 시도해 주세요.");
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-transparent text-[#f5f5f7]">
      <GCSCHeader />

      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#cc2222]">{t.pageLabel}</p>
          <h1 className="mt-3 text-[clamp(2rem,7vw,3.375rem)] font-black uppercase leading-tight tracking-tight text-[#f5f5f7]">
            {t.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-[1.7] text-[#c0c0c5]">{t.desc}</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[14px] bg-[#1c1c1e] p-8 sm:p-10">

          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <CheckCircle className="h-16 w-16 text-[#cc2222]" />
              <h2 className="text-2xl font-black text-[#f5f5f7]">{t.successTitle}</h2>
              <p className="max-w-sm text-[#c0c0c5]">{t.successDesc}</p>
              <button
                onClick={() => { setStatus("idle"); setAgreed(false); }}
                className="mt-4 inline-flex h-12 items-center justify-center rounded-[2px] border border-[#424245] px-8 text-sm font-semibold text-[#f5f5f7] transition hover:bg-white/5"
              >
                다시 신청하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* 후원 유형 */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#c0c0c5]" htmlFor="supportType">
                  {t.typeLabel}
                </label>
                <select id="supportType" name="supportType" className={inputClass} defaultValue={t.typeOptions[0]}>
                  {t.typeOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* 이름 + 소속 */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#c0c0c5]" htmlFor="name">
                    {t.nameLabel} *
                  </label>
                  <input id="name" name="name" type="text" required className={inputClass} />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#c0c0c5]" htmlFor="organization">
                    {t.organizationLabel}
                  </label>
                  <input id="organization" name="organization" type="text" className={inputClass} />
                </div>
              </div>

              {/* 연락처 + 이메일 */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#c0c0c5]" htmlFor="contact">
                    {t.contactLabel} *
                  </label>
                  <input id="contact" name="contact" type="tel" required autoComplete="tel" placeholder="010-0000-0000" className={inputClass} />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#c0c0c5]" htmlFor="email">
                    {t.emailLabel}
                  </label>
                  <input id="email" name="email" type="email" autoComplete="email" placeholder="example@email.com" className={inputClass} />
                </div>
              </div>

              {/* 후원 방식 */}
              <div>
                <label className="mb-3 block text-sm font-semibold text-[#c0c0c5]">{t.supportModeLabel}</label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {t.supportModeOptions.map((option, i) => (
                    <label key={option} className="flex cursor-pointer items-center gap-3 rounded-[6px] border border-[#2a2a2e] bg-[#000]/20 px-4 py-4 text-sm text-[#c0c0c5] transition hover:border-[#424245]">
                      <input type="radio" name="supportMode" value={option} defaultChecked={i === 0} className="accent-[#cc2222]" />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 금액/물품 */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#c0c0c5]" htmlFor="amount">
                  {t.amountLabel}
                </label>
                <input id="amount" name="amount" type="text" placeholder={t.amountPlaceholder} className={inputClass} />
              </div>

              {/* 메시지 */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#c0c0c5]" htmlFor="message">
                  {t.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={t.messagePlaceholder}
                  className="w-full rounded-[6px] border border-[#2a2a2e] bg-[#000]/40 px-4 py-3 text-[#f5f5f7] placeholder-[#6e6e73] focus:border-[#cc2222] focus:outline-none"
                />
              </div>

              {/* 동의 */}
              <label className="flex cursor-pointer items-start gap-3 rounded-[6px] border border-[#2a2a2e] bg-[#000]/20 px-4 py-4 text-sm text-[#c0c0c5] transition hover:border-[#424245]">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 accent-[#cc2222]"
                />
                <span>{t.agreement}</span>
              </label>

              <p className="text-sm text-[#6e6e73]">{t.helper}</p>

              {status === "error" && (
                <p className="text-sm text-[#cc2222]">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting" || !agreed}
                className="inline-flex h-[52px] w-full items-center justify-center rounded-[2px] bg-[#cc2222] text-base font-bold text-white transition hover:bg-[#cc2222]/90 disabled:opacity-50"
              >
                {status === "submitting" ? t.submitting : t.submit}
              </button>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

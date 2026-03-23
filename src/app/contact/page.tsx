"use client";

import React from "react";
import GSSCHeader from "@/components/GSSCHeader";
import Footer from "@/components/Footer";
import { useSiteLanguage, type Locale } from "@/components/site-language";
import { Phone, MapPin, Clock, CheckCircle } from "lucide-react";

type ContactCopy = {
  pageLabel: string;
  pageTitle: string;
  pageDesc: string;
  infoTitle: string;
  infoItems: Array<{ label: string; value: string; href?: string }>;
  instagramLabel: string;
  instagramValue: string;
  formTitle: string;
  fields: {
    inquiryTitle: string;
    name: string;
    contact: string;
    detail: string;
  };
  placeholders: {
    inquiryTitle: string;
    name: string;
    contact: string;
    detail: string;
  };
  submit: string;
  submitting: string;
  successTitle: string;
  successDesc: string;
};

const copy: Record<Locale, ContactCopy> = {
  ko: {
    pageLabel: "Contact",
    pageTitle: "문의하기",
    pageDesc: "클럽 관련 문의, 입단 상담, 훈련 정보 등 궁금한 점을 남겨주세요. 빠르게 답변드리겠습니다.",
    infoTitle: "연락처 정보",
    infoItems: [
      { label: "대표 전화", value: "010-4178-0207", href: "tel:01041780207" },
      { label: "훈련장 주소", value: "서울특별시 관악구 조원로 56", href: "https://map.kakao.com/link/search/서울특별시 관악구 조원로 56" },
      { label: "운영 시간", value: "【확인 필요 — 훈련 시간·요일】" },
    ],
    instagramLabel: "Instagram",
    instagramValue: "【확인 필요 — 인스타그램 계정】",
    formTitle: "문의 양식",
    fields: {
      inquiryTitle: "문의 제목",
      name: "이름",
      contact: "연락처",
      detail: "상세 내용",
    },
    placeholders: {
      inquiryTitle: "문의 제목을 입력하세요",
      name: "이름을 입력하세요",
      contact: "010-0000-0000",
      detail: "문의 내용을 자세히 적어주세요",
    },
    submit: "문의 보내기",
    submitting: "제출 중...",
    successTitle: "문의가 접수되었습니다",
    successDesc: "빠른 시일 내에 연락드리겠습니다. 급한 문의는 010-4178-0207로 직접 연락 주세요.",
  },
  en: {
    pageLabel: "Contact",
    pageTitle: "Contact Us",
    pageDesc: "Leave any questions about the club, joining, or training. We will respond as soon as possible.",
    infoTitle: "Contact Information",
    infoItems: [
      { label: "Phone", value: "010-4178-0207", href: "tel:01041780207" },
      { label: "Training Ground", value: "56 Jowon-ro, Gwanak-gu, Seoul", href: "https://map.kakao.com/link/search/서울특별시 관악구 조원로 56" },
      { label: "Hours", value: "【To be confirmed】" },
    ],
    instagramLabel: "Instagram",
    instagramValue: "【To be confirmed】",
    formTitle: "Inquiry Form",
    fields: {
      inquiryTitle: "Subject",
      name: "Name",
      contact: "Phone",
      detail: "Details",
    },
    placeholders: {
      inquiryTitle: "Enter a subject",
      name: "Enter your name",
      contact: "010-0000-0000",
      detail: "Please describe your inquiry in detail",
    },
    submit: "Send Inquiry",
    submitting: "Submitting...",
    successTitle: "Inquiry Received",
    successDesc: "We will get back to you soon. For urgent matters, call 010-4178-0207 directly.",
  },
  ja: {
    pageLabel: "Contact",
    pageTitle: "お問い合わせ",
    pageDesc: "クラブ関連のご質問、入団相談、練習情報などをお気軽にお問い合わせください。",
    infoTitle: "連絡先情報",
    infoItems: [
      { label: "代表電話", value: "010-4178-0207", href: "tel:01041780207" },
      { label: "練習場所", value: "ソウル特別市冠岳区組員路56号", href: "https://map.kakao.com/link/search/서울특별시 관악구 조원로 56" },
      { label: "営業時間", value: "【確認待ち】" },
    ],
    instagramLabel: "Instagram",
    instagramValue: "【確認待ち】",
    formTitle: "お問い合わせフォーム",
    fields: {
      inquiryTitle: "件名",
      name: "氏名",
      contact: "連絡先",
      detail: "詳細内容",
    },
    placeholders: {
      inquiryTitle: "件名を入力してください",
      name: "氏名を入力してください",
      contact: "010-0000-0000",
      detail: "お問い合わせ内容を詳しくご記入ください",
    },
    submit: "送信する",
    submitting: "送信中...",
    successTitle: "お問い合わせが受付されました",
    successDesc: "担当者よりご連絡いたします。急ぎの場合は 010-4178-0207 にご連絡ください。",
  },
  zh: {
    pageLabel: "Contact",
    pageTitle: "联系我们",
    pageDesc: "如有关于俱乐部、入队咨询或训练信息的问题，请填写以下内容，我们将尽快回复。",
    infoTitle: "联系信息",
    infoItems: [
      { label: "联系电话", value: "010-4178-0207", href: "tel:01041780207" },
      { label: "训练场地", value: "首尔特别市冠岳区组元路56号", href: "https://map.kakao.com/link/search/서울특별시 관악구 조원로 56" },
      { label: "运营时间", value: "【待确认】" },
    ],
    instagramLabel: "Instagram",
    instagramValue: "【待确认】",
    formTitle: "联系表单",
    fields: {
      inquiryTitle: "主题",
      name: "姓名",
      contact: "联系方式",
      detail: "详细内容",
    },
    placeholders: {
      inquiryTitle: "请输入咨询主题",
      name: "请输入姓名",
      contact: "010-0000-0000",
      detail: "请详细描述您的问题",
    },
    submit: "发送咨询",
    submitting: "提交中...",
    successTitle: "咨询已受理",
    successDesc: "我们将尽快与您联系。如有紧急事项，请直接拨打 010-4178-0207。",
  },
};

const infoIcons = [Phone, MapPin, Clock];
const inputClass =
  "h-12 w-full rounded-[6px] border border-[#2a2a2e] bg-[#000]/40 px-4 text-[#f5f5f7] placeholder-[#6e6e73] focus:border-[#cc2222] focus:outline-none";
const labelClass = "mb-2 block text-sm font-semibold text-[#c0c0c5]";

export default function ContactPage() {
  const { locale } = useSiteLanguage();
  const t = copy[locale];

  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = React.useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const body = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
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

      {/* 본문 */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">

          {/* 연락처 정보 패널 */}
          <div className="flex flex-col gap-5">
            <div className="rounded-[14px] bg-[#1c1c1e] p-8">
              <h2 className="text-xl font-black text-[#f5f5f7]">{t.infoTitle}</h2>
              <div className="mt-6 space-y-5">
                {t.infoItems.map((item, i) => {
                  const Icon = infoIcons[i];
                  const inner = (
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                        <Icon className="h-4 w-4 text-[#f5f5f7]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#6e6e73]">{item.label}</p>
                        <p className="mt-1 text-sm font-semibold leading-6 text-[#f5f5f7]">{item.value}</p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block transition hover:opacity-80"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label}>{inner}</div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[14px] bg-[#1c1c1e] p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#6e6e73]">{t.instagramLabel}</p>
              <p className="mt-3 text-sm font-semibold text-[#f5f5f7]">{t.instagramValue}</p>
            </div>

            <div className="rounded-[14px] bg-[#1c1c1e] p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#6e6e73]">Direct Call</p>
              <a
                href="tel:01041780207"
                className="mt-3 block text-2xl font-black text-[#f5f5f7] transition hover:text-[#cc2222]"
              >
                010-4178-0207
              </a>
              <p className="mt-1 text-sm text-[#6e6e73]">천경필 대표</p>
            </div>
          </div>

          {/* 문의 폼 */}
          <div className="rounded-[14px] bg-[#1c1c1e] p-8 sm:p-10">
            <h2 className="text-xl font-black text-[#f5f5f7]">{t.formTitle}</h2>

            {status === "success" ? (
              <div className="mt-10 flex flex-col items-center gap-4 py-12 text-center">
                <CheckCircle className="h-16 w-16 text-[#cc2222]" />
                <h3 className="text-2xl font-black text-[#f5f5f7]">{t.successTitle}</h3>
                <p className="max-w-sm text-[#c0c0c5]">{t.successDesc}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 inline-flex h-12 items-center justify-center rounded-[2px] border border-[#424245] px-8 text-sm font-semibold text-[#f5f5f7] transition hover:bg-white/5"
                >
                  다시 문의하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                {/* 문의 제목 */}
                <div>
                  <label htmlFor="inquiryTitle" className={labelClass}>{t.fields.inquiryTitle} *</label>
                  <input
                    id="inquiryTitle"
                    name="inquiryTitle"
                    type="text"
                    required
                    placeholder={t.placeholders.inquiryTitle}
                    className={inputClass}
                  />
                </div>

                {/* 이름 + 연락처 */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>{t.fields.name} *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder={t.placeholders.name}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact" className={labelClass}>{t.fields.contact} *</label>
                    <input
                      id="contact"
                      name="contact"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder={t.placeholders.contact}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* 상세 내용 */}
                <div>
                  <label htmlFor="detail" className={labelClass}>{t.fields.detail} *</label>
                  <textarea
                    id="detail"
                    name="detail"
                    rows={6}
                    required
                    placeholder={t.placeholders.detail}
                    className="w-full rounded-[6px] border border-[#2a2a2e] bg-[#000]/40 px-4 py-3 text-[#f5f5f7] placeholder-[#6e6e73] focus:border-[#cc2222] focus:outline-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-[#cc2222]">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex h-[52px] w-full items-center justify-center rounded-[2px] bg-[#cc2222] text-base font-bold text-white transition hover:bg-[#cc2222]/90 disabled:opacity-60"
                >
                  {status === "submitting" ? t.submitting : t.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

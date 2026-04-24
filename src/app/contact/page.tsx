"use client";

import React from "react";
import GSSCHeader from "@/components/GSSCHeader";
import Footer from "@/components/Footer";
import { CheckCircle, Instagram, MapPin, Phone, User } from "lucide-react";

const infoCards = [
  {
    Icon: Phone,
    iconBg: "bg-[#cc2222]",
    key: "전화",
    value: "010-4178-0207",
    href: "tel:01041780207",
  },
  {
    Icon: User,
    iconBg: "bg-[#c49550]",
    key: "대표",
    value: "천경필",
    href: undefined,
  },
  {
    Icon: MapPin,
    iconBg: "bg-[#2a2a2a]",
    key: "훈련 장소",
    value: "서울특별시 관악구 조원로 56",
    href: "https://map.kakao.com/link/search/서울특별시 관악구 조원로 56",
  },
  {
    Icon: Instagram,
    iconBg: "bg-[#2a2a2a]",
    key: "인스타그램",
    value: "【공식 계정 주소 입력】",
    href: undefined,
  },
];

const inputClass =
  "h-12 w-full rounded-[6px] border border-[#2a2a2e] bg-[#000]/40 px-4 text-sm text-[#f5f5f7] placeholder:text-[#6e6e73] focus:border-[#cc2222] focus:outline-none";
const labelClass = "mb-2 block text-sm font-semibold text-[#c0c0c5]";

export default function ContactPage() {
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

      {/* S1: 히어로 */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed',sans-serif] text-sm font-bold uppercase tracking-[0.15em] text-[#cc2222]">
            Contact · G.S.S.C
          </p>
          <h1 className="mt-3 font-['Barlow_Condensed',sans-serif] text-[clamp(2.5rem,8vw,4rem)] font-black uppercase leading-[1.0] tracking-tight text-[#f5f5f7]">
            CONTACT
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-[1.7] text-[#c0c0c5]">
            궁금한 점은 언제든지 문의해주세요.<br className="hidden sm:block" />
            영업일 기준 1~2일 내로 빠르게 답변드립니다.
          </p>
        </div>
      </section>

      {/* S2: 연락처 + 문의 폼 */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[360px_1fr]">

          {/* 좌측: 연락처 카드 4개 */}
          <div className="flex flex-col gap-3">
            {infoCards.map(({ Icon, iconBg, key, value, href }) => {
              const inner = (
                <div className="flex items-center gap-4">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] ${iconBg}`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.06em] text-[#555]">{key}</p>
                    <p className="mt-0.5 text-sm font-semibold text-[#f5f5f7]">{value}</p>
                  </div>
                </div>
              );

              return href ? (
                <a
                  key={key}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="rounded-[12px] bg-[#1c1c1e] px-5 py-4 transition hover:bg-[#242426]"
                >
                  {inner}
                </a>
              ) : (
                <div key={key} className="rounded-[12px] bg-[#1c1c1e] px-5 py-4">
                  {inner}
                </div>
              );
            })}
          </div>

          {/* 우측: 문의 폼 */}
          <div className="rounded-[14px] bg-[#1c1c1e] p-8 sm:p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <CheckCircle className="h-14 w-14 text-[#cc2222]" />
                <h2 className="text-2xl font-black text-[#f5f5f7]">문의가 접수되었습니다</h2>
                <p className="max-w-sm text-sm leading-relaxed text-[#c0c0c5]">
                  영업일 기준 1~2일 내로 연락드리겠습니다.<br />
                  급한 문의는 아래 번호로 직접 연락 주세요.
                </p>
                <a href="tel:01041780207" className="text-sm font-bold text-[#f5f5f7] hover:text-white">
                  010-4178-0207
                </a>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 h-11 rounded-[2px] border border-[#424245] px-8 text-sm font-semibold text-[#f5f5f7] hover:bg-white/5"
                >
                  다시 문의하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      이름 <span className="text-[#cc2222]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="성함을 입력해주세요"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact" className={labelClass}>
                      연락처 <span className="text-[#cc2222]">*</span>
                    </label>
                    <input
                      id="contact"
                      name="contact"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="010-0000-0000"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className={labelClass}>
                    문의 유형 <span className="text-[#cc2222]">*</span>
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>선택해주세요</option>
                    <option value="선수 모집">선수 모집</option>
                    <option value="후원">후원</option>
                    <option value="기타">기타</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="detail" className={labelClass}>상세 내용</label>
                  <textarea
                    id="detail"
                    name="detail"
                    rows={5}
                    placeholder="궁금한 점을 자유롭게 작성해주세요"
                    className="w-full rounded-[6px] border border-[#2a2a2e] bg-[#000]/40 px-4 py-3 text-sm text-[#f5f5f7] placeholder:text-[#6e6e73] focus:border-[#cc2222] focus:outline-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-[#cc2222]">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="h-[52px] w-full rounded-[2px] bg-[#cc2222] text-base font-bold text-white transition hover:bg-[#cc2222]/90 disabled:opacity-50"
                >
                  {status === "submitting" ? "제출 중..." : "문의하기"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* S3: 훈련장 위치 */}
      <section className="border-t border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed',sans-serif] text-xs font-bold uppercase tracking-[0.15em] text-[#cc2222]">
            훈련 장소
          </p>
          <p className="mt-2 text-base font-bold text-[#f5f5f7]">서울특별시 관악구 조원로 56</p>
          <p className="mt-1 text-sm text-[#6e6e73]">지도에서 위치를 확인하세요.</p>

          <div className="mt-6 overflow-hidden rounded-[14px] border border-[#222]">
            <iframe
              src="https://maps.google.com/maps?q=서울특별시+관악구+조원로+56&output=embed&z=16&hl=ko"
              width="100%"
              height="360"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="훈련장 위치"
            />
          </div>

          <div className="mt-4 flex gap-3">
            <a
              href="https://map.kakao.com/link/search/서울특별시 관악구 조원로 56"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-[2px] border border-[#424245] px-4 text-sm text-[#c0c0c5] transition hover:bg-white/5"
            >
              <MapPin className="h-4 w-4" />
              카카오맵으로 보기
            </a>
            <a
              href="geo:37.4784,126.9516"
              className="inline-flex h-10 items-center gap-2 rounded-[2px] border border-[#424245] px-4 text-sm text-[#c0c0c5] transition hover:bg-white/5"
            >
              <MapPin className="h-4 w-4" />
              지도 앱으로 열기
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

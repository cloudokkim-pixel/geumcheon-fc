"use client";

import React from "react";
import GSSCHeader from "@/components/GSSCHeader";
import Footer from "@/components/Footer";
import { CheckCircle, FileCheck, Landmark, Megaphone, Users } from "lucide-react";

const packages = [
  {
    tag: "기업 스폰서십",
    title: "브랜드를 선수와 함께",
    desc: "유니폼, 현수막, 홈페이지에 기업 로고를 노출하고 ESG 보고서에 활용하세요.",
    benefits: [
      "유니폼·현수막 로고 노출",
      "홈페이지 스폰서 섹션 등재",
      "ESG 활동 증서·보고서 제공",
      "기부금 세금 혜택 적용",
    ],
    borderColor: "#cc2222",
    tagClass: "text-[#cc2222]",
    dotClass: "bg-[#cc2222]",
  },
  {
    tag: "현물 후원",
    title: "장비와 의료로 함께",
    desc: "훈련 장비, 의료 지원 등 현물로 참여하실 수 있습니다. 병원·의원과 파트너 연동.",
    benefits: [
      "훈련 장비·유니폼 현물 제공",
      "의료·스포츠 재활 지원",
      "홈페이지 파트너 섹션 등재",
      "현물 기부 영수증 발행",
    ],
    borderColor: "#c49550",
    tagClass: "text-[#c49550]",
    dotClass: "bg-[#c49550]",
  },
  {
    tag: "개인 후원",
    title: "선수 한 명의 꿈을",
    desc: "선수 1명의 훈련비를 지원하는 형태로 참여하실 수 있습니다. 소액부터 가능합니다.",
    benefits: [
      "선수 훈련비 일부 또는 전액 지원",
      "선수 성장 리포트 수령",
      "기부금 영수증 발행",
    ],
    borderColor: "#444",
    tagClass: "text-[#888890]",
    dotClass: "bg-[#555]",
  },
];

const benefitCards = [
  {
    Icon: Megaphone,
    title: "브랜드 노출",
    desc: "유니폼, 현수막, 홈페이지에 기업 로고 상시 노출",
  },
  {
    Icon: FileCheck,
    title: "ESG 인증",
    desc: "후원 증서 + 활동 보고서 제공. ESG 보고서에 바로 활용 가능",
  },
  {
    Icon: Landmark,
    title: "세금 혜택",
    desc: "기부금 세금처리 가능. 법인세 절감 효과",
  },
  {
    Icon: Users,
    title: "지역 네트워크",
    desc: "금천·관악구 학부모·지역사회와의 자연스러운 연결",
  },
];

const inputClass =
  "h-12 w-full rounded-[6px] border border-[#2a2a2e] bg-[#000]/40 px-4 text-sm text-[#f5f5f7] placeholder:text-[#6e6e73] focus:border-[#cc2222] focus:outline-none";

export default function SupportPage() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = React.useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
      <GSSCHeader />

      {/* S1: 히어로 */}
      <section className="border-b border-[#222] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-['Barlow_Condensed',sans-serif] text-sm font-bold uppercase tracking-[0.15em] text-[#cc2222]">
            Support · G.S.S.C · Since 2015
          </p>
          <h1 className="mt-3 font-['Barlow_Condensed',sans-serif] text-[clamp(2.5rem,8vw,4rem)] font-black leading-[1.05] tracking-tight text-[#f5f5f7]">
            선수의 꿈을 함께<br />
            <span className="text-[#cc2222]">만드는 파트너</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-[1.8] text-[#c0c0c5]">
            G밸리 기업과 함께하는 진정한 스포츠 ESG 후원.<br className="hidden sm:block" />
            선수의 성장이 곧 지역 사회의 성장입니다.
          </p>
        </div>
      </section>

      {/* S2: G밸리 ESG 메시지 */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[14px] border-l-4 border-[#c49550] bg-[#1a1208] px-8 py-10">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#c49550]">
            가산디지털단지(G밸리) 기업이라면
          </p>
          <h2 className="mt-4 font-['Barlow_Condensed',sans-serif] text-[clamp(1.5rem,4vw,2.25rem)] font-black leading-[1.1] text-[#f5f5f7]">
            지역 사회 기여와<br />브랜드 가치를 동시에
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-[1.9] text-[#a1a1a6]">
            G.S.S.C는 서울 서남권을 기반으로 10년 넘게 운영 중인 진정한 축구 클럽입니다. G밸리 인근 기업의 ESG 활동과 지역 스포츠 후원을 연결하는 가장 현실적인 파트너입니다. 후원금은 기부금으로 처리돼 세금 혜택도 받으실 수 있습니다.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-5">
            {[
              { num: "Since 2015", label: "10년 이상 신뢰" },
              { num: "전 연령", label: "초등~성인 커버" },
              { num: "서울 서남권", label: "지역 밀착 ESG" },
            ].map(({ num, label }) => (
              <div key={label} className="rounded-[8px] bg-[#2a1a08] px-3 py-4 sm:px-5">
                <p className="font-['Barlow_Condensed',sans-serif] text-base font-black text-[#c49550] sm:text-xl">{num}</p>
                <p className="mt-1 text-xs leading-snug text-[#6e6e73]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S3: 후원 패키지 */}
      <section className="border-t border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="font-['Barlow_Condensed',sans-serif] text-xs font-bold uppercase tracking-[0.15em] text-[#cc2222]">
              후원 선택
            </p>
            <h2 className="mt-2 font-['Barlow_Condensed',sans-serif] text-[clamp(1.5rem,4vw,2.25rem)] font-black leading-[1.1] text-[#f5f5f7]">
              후원 방식을<br />
              <span className="text-[#cc2222]">선택하세요</span>
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.tag}
                className="rounded-[14px] bg-[#1c1c1e] p-7"
                style={{ borderTop: `3px solid ${pkg.borderColor}` }}
              >
                <p className={`text-xs font-bold uppercase tracking-[0.08em] ${pkg.tagClass}`}>{pkg.tag}</p>
                <h3 className="mt-3 text-xl font-black text-[#f5f5f7]">{pkg.title}</h3>
                <p className="mt-3 text-sm leading-[1.8] text-[#a1a1a6]">{pkg.desc}</p>
                <ul className="mt-5 space-y-2">
                  {pkg.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-[#c0c0c5]">
                      <span className={`mt-[0.45em] inline-block h-[5px] w-[5px] shrink-0 rounded-full ${pkg.dotClass}`} />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* S4: 후원사 혜택 */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-10">
          <p className="font-['Barlow_Condensed',sans-serif] text-xs font-bold uppercase tracking-[0.15em] text-[#cc2222]">
            후원사 혜택
          </p>
          <h2 className="mt-2 font-['Barlow_Condensed',sans-serif] text-[clamp(1.5rem,4vw,2.25rem)] font-black leading-[1.1] text-[#f5f5f7]">
            후원하면<br />
            <span className="text-[#cc2222]">무엇을 얻는가</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-4">
          {benefitCards.map(({ Icon, title, desc }) => (
            <div key={title} className="rounded-[14px] bg-[#1c1c1e] p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#f5f5f7]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-bold text-[#f5f5f7]">{title}</h3>
              <p className="mt-2 text-xs leading-[1.7] text-[#6e6e73]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* S5: 후원 문의 폼 */}
      <section className="border-t border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-['Barlow_Condensed',sans-serif] text-[clamp(1.5rem,4vw,2.25rem)] font-black leading-[1.1] text-[#f5f5f7]">
              <span className="text-[#cc2222]">후원 문의</span>하기
            </h2>
            <p className="mt-3 text-sm leading-[1.8] text-[#c0c0c5]">
              작성하신 내용은 영업일 기준 1~2일 내로 연락드립니다. 부담 없이 문의해주세요.
            </p>
          </div>

          <div className="rounded-[14px] bg-[#1c1c1e] p-8 sm:p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <CheckCircle className="h-14 w-14 text-[#cc2222]" />
                <h3 className="text-2xl font-black text-[#f5f5f7]">문의가 접수되었습니다</h3>
                <p className="max-w-sm text-sm leading-relaxed text-[#c0c0c5]">
                  영업일 기준 1~2일 내로 연락드리겠습니다.<br />
                  빠른 문의는 아래 번호로 연락 주세요.
                </p>
                <p className="text-sm text-[#6e6e73]">
                  <a href="tel:01041780207" className="font-semibold text-[#f5f5f7]">010-4178-0207</a>
                  {" "}(천경락 대표)
                </p>
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
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#c0c0c5]">
                      담당자명 <span className="text-[#cc2222]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="성함을 입력해주세요"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="mb-2 block text-sm font-semibold text-[#c0c0c5]">
                      기업·단체명
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      placeholder="소속 기업 또는 단체명 (개인 후원 시 생략 가능)"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact" className="mb-2 block text-sm font-semibold text-[#c0c0c5]">
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
                  <div>
                    <label htmlFor="supportType" className="mb-2 block text-sm font-semibold text-[#c0c0c5]">
                      후원 유형 <span className="text-[#cc2222]">*</span>
                    </label>
                    <select
                      id="supportType"
                      name="supportType"
                      required
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled>선택해주세요</option>
                      <option value="기업 스폰서십">기업 스폰서십</option>
                      <option value="현물 후원">현물 후원</option>
                      <option value="개인 후원">개인 후원</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#c0c0c5]">
                    문의 내용
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="후원 규모, 방식, 궁금한 점 등 자유롭게 작성해주세요"
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
                  {status === "submitting" ? "제출 중..." : "후원 문의하기"}
                </button>

                <p className="text-center text-sm text-[#6e6e73]">
                  전화 문의 ·{" "}
                  <a href="tel:01041780207" className="font-semibold text-[#f5f5f7] hover:text-white">
                    010-4178-0207
                  </a>{" "}
                  <span className="text-[#444]">(천경락 대표)</span>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

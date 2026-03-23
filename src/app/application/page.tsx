"use client";

import React from "react";
import GSSCHeader from "@/components/GSSCHeader";
import Footer from "@/components/Footer";
import { useSiteLanguage, type Locale } from "@/components/site-language";
import { Phone, MapPin, CheckCircle } from "lucide-react";

type ApplicationCopy = {
  pageLabel: string;
  pageTitle: string;
  pageDesc: string;
  infoItems: Array<{ label: string; value: string }>;
  formTitle: string;
  fields: {
    name: string;
    school: string;
    grade: string;
    contact: string;
    position: string;
    ageGroup: string;
    message: string;
  };
  placeholders: {
    name: string;
    school: string;
    grade: string;
    contact: string;
    position: string;
    ageGroup: string;
    message: string;
  };
  gradeOptions: string[];
  positionOptions: string[];
  ageGroupOptions: string[];
  submit: string;
  submitting: string;
  successTitle: string;
  successDesc: string;
  noticeTitle: string;
  notices: string[];
};

const copy: Record<Locale, ApplicationCopy> = {
  ko: {
    pageLabel: "Recruitment",
    pageTitle: "선수모집",
    pageDesc: "서울금천축구클럽 G.C.S.C와 함께 성장할 선수를 모집합니다. 아래 양식을 작성해 주시면 빠르게 연락드립니다.",
    infoItems: [
      { label: "훈련장", value: "서울특별시 관악구 조원로 56" },
      { label: "대표 연락처", value: "010-4178-0207" },
      { label: "모집 대상", value: "초등~고등 선수" },
      { label: "훈련 시간·요일·월 회비", value: "【확인 필요 — 리더옥님 확인 대기】" },
    ],
    formTitle: "신청서 작성",
    fields: {
      name: "이름",
      school: "학교명",
      grade: "학년",
      contact: "연락처",
      position: "포지션",
      ageGroup: "연령 그룹",
      message: "추가 문의사항",
    },
    placeholders: {
      name: "이름을 입력하세요",
      school: "학교명을 입력하세요",
      grade: "학년을 선택하세요",
      contact: "010-0000-0000",
      position: "포지션을 선택하세요 (선택)",
      ageGroup: "연령 그룹을 선택하세요",
      message: "추가 문의사항을 입력하세요 (선택)",
    },
    gradeOptions: ["초등 1학년", "초등 2학년", "초등 3학년", "초등 4학년", "초등 5학년", "초등 6학년", "중학교 1학년", "중학교 2학년", "중학교 3학년", "고등학교 1학년", "고등학교 2학년", "고등학교 3학년"],
    positionOptions: ["선택 안 함", "GK (골키퍼)", "CB (센터백)", "LB / RB (풀백)", "DM (수비형 미드필더)", "CM (중앙 미드필더)", "LM / RM (측면 미드필더)", "CAM (공격형 미드필더)", "LW / RW (윙어)", "ST (스트라이커)"],
    ageGroupOptions: ["U12 (초등)", "U15 (중학교)", "U18 (고등학교)"],
    submit: "신청하기",
    submitting: "제출 중...",
    successTitle: "신청이 완료되었습니다",
    successDesc: "빠른 시일 내에 연락드리겠습니다. 문의사항은 010-4178-0207로 연락 주세요.",
    noticeTitle: "안내 사항",
    notices: [
      "신청 후 담당자 확인을 통해 개별 연락을 드립니다.",
      "입단 전 체험 훈련 기회가 제공될 수 있습니다.",
      "훈련 시간·요일·월 회비는 추후 안내 예정입니다.",
      "기타 문의는 대표 연락처로 직접 연락 주세요.",
    ],
  },
  en: {
    pageLabel: "Recruitment",
    pageTitle: "Player Recruitment",
    pageDesc: "We are looking for players who want to grow with Geumcheon FC G.C.S.C. Fill in the form below and we'll get back to you soon.",
    infoItems: [
      { label: "Training Ground", value: "56 Jowon-ro, Gwanak-gu, Seoul" },
      { label: "Contact", value: "010-4178-0207" },
      { label: "Eligible Players", value: "Elementary to High School" },
      { label: "Schedule & Fees", value: "【To be confirmed】" },
    ],
    formTitle: "Application Form",
    fields: {
      name: "Name",
      school: "School",
      grade: "Grade",
      contact: "Contact Number",
      position: "Position",
      ageGroup: "Age Group",
      message: "Additional Notes",
    },
    placeholders: {
      name: "Enter your name",
      school: "Enter your school",
      grade: "Select your grade",
      contact: "010-0000-0000",
      position: "Select position (optional)",
      ageGroup: "Select age group",
      message: "Any additional questions (optional)",
    },
    gradeOptions: ["Grade 1 (Elementary)", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Middle School Year 1", "Middle School Year 2", "Middle School Year 3", "High School Year 1", "High School Year 2", "High School Year 3"],
    positionOptions: ["No preference", "GK (Goalkeeper)", "CB (Centre Back)", "LB / RB (Full Back)", "DM (Defensive Mid)", "CM (Central Mid)", "LM / RM (Wide Mid)", "CAM (Attacking Mid)", "LW / RW (Winger)", "ST (Striker)"],
    ageGroupOptions: ["U12 (Elementary)", "U15 (Middle School)", "U18 (High School)"],
    submit: "Submit Application",
    submitting: "Submitting...",
    successTitle: "Application Submitted",
    successDesc: "We will contact you as soon as possible. For inquiries call 010-4178-0207.",
    noticeTitle: "Important Notes",
    notices: [
      "After submission, a staff member will contact you individually.",
      "A trial training session may be offered before joining.",
      "Training schedule and fees will be confirmed separately.",
      "For other inquiries, please contact us directly.",
    ],
  },
  ja: {
    pageLabel: "Recruitment",
    pageTitle: "選手募集",
    pageDesc: "G.C.S.Cと共に成長したい選手を募集しています。下記フォームにご記入いただければ、すぐにご連絡いたします。",
    infoItems: [
      { label: "練習場所", value: "ソウル特別市 冠岳区 組員路 56" },
      { label: "代表連絡先", value: "010-4178-0207" },
      { label: "募集対象", value: "小学生〜高校生" },
      { label: "練習時間・曜日・月会費", value: "【確認待ち】" },
    ],
    formTitle: "申請フォーム",
    fields: {
      name: "氏名",
      school: "学校名",
      grade: "学年",
      contact: "連絡先",
      position: "ポジション",
      ageGroup: "年齢グループ",
      message: "備考",
    },
    placeholders: {
      name: "氏名を入力してください",
      school: "学校名を入力してください",
      grade: "学年を選択してください",
      contact: "010-0000-0000",
      position: "ポジションを選択（任意）",
      ageGroup: "年齢グループを選択してください",
      message: "追加事項を入力してください（任意）",
    },
    gradeOptions: ["小学1年", "小学2年", "小学3年", "小学4年", "小学5年", "小学6年", "中学1年", "中学2年", "中学3年", "高校1年", "高校2年", "高校3年"],
    positionOptions: ["指定なし", "GK（ゴールキーパー）", "CB（センターバック）", "LB / RB（フルバック）", "DM（守備的MF）", "CM（セントラルMF）", "LM / RM（サイドMF）", "CAM（攻撃的MF）", "LW / RW（ウィング）", "ST（ストライカー）"],
    ageGroupOptions: ["U12（小学生）", "U15（中学生）", "U18（高校生）"],
    submit: "申請する",
    submitting: "送信中...",
    successTitle: "申請が完了しました",
    successDesc: "すぐにご連絡いたします。お問い合わせは 010-4178-0207 までどうぞ。",
    noticeTitle: "ご案内",
    notices: [
      "申請後、担当者より個別にご連絡いたします。",
      "入団前に体験トレーニングの機会が提供される場合があります。",
      "練習時間・曜日・月会費は後日ご案内いたします。",
      "その他のお問い合わせは代表連絡先にご連絡ください。",
    ],
  },
  zh: {
    pageLabel: "Recruitment",
    pageTitle: "球员招募",
    pageDesc: "我们正在招募希望与G.C.S.C共同成长的球员。请填写以下表格，我们将尽快与您联系。",
    infoItems: [
      { label: "训练场地", value: "首尔特别市冠岳区组元路56号" },
      { label: "联系电话", value: "010-4178-0207" },
      { label: "招募对象", value: "小学至高中阶段球员" },
      { label: "训练时间与费用", value: "【待确认】" },
    ],
    formTitle: "报名表",
    fields: {
      name: "姓名",
      school: "学校",
      grade: "年级",
      contact: "联系方式",
      position: "位置",
      ageGroup: "年龄组",
      message: "备注",
    },
    placeholders: {
      name: "请输入姓名",
      school: "请输入学校名称",
      grade: "请选择年级",
      contact: "010-0000-0000",
      position: "请选择位置（可选）",
      ageGroup: "请选择年龄组",
      message: "请输入补充说明（可选）",
    },
    gradeOptions: ["小学1年级", "小学2年级", "小学3年级", "小学4年级", "小学5年级", "小学6年级", "初中1年级", "初中2年级", "初中3年级", "高中1年级", "高中2年级", "高中3年级"],
    positionOptions: ["不指定", "GK（守门员）", "CB（中后卫）", "LB/RB（边后卫）", "DM（后腰）", "CM（中场）", "LM/RM（边路中场）", "CAM（攻击型中场）", "LW/RW（边锋）", "ST（前锋）"],
    ageGroupOptions: ["U12（小学生）", "U15（初中生）", "U18（高中生）"],
    submit: "提交申请",
    submitting: "提交中...",
    successTitle: "申请已提交",
    successDesc: "我们将尽快与您联系。如有疑问请拨打 010-4178-0207。",
    noticeTitle: "注意事项",
    notices: [
      "提交后，工作人员将单独与您联系。",
      "入队前可能提供体验训练机会。",
      "训练时间和费用将另行通知。",
      "其他问题请直接联系代表电话。",
    ],
  },
};

const inputClass =
  "h-12 w-full rounded-[6px] border border-[#2a2a2e] bg-[#000]/40 px-4 text-[#f5f5f7] placeholder-[#6e6e73] focus:border-[#cc2222] focus:outline-none";
const selectClass =
  "h-12 w-full appearance-none rounded-[6px] border border-[#2a2a2e] bg-[#000]/40 px-4 text-[#f5f5f7] focus:border-[#cc2222] focus:outline-none";
const labelClass = "mb-2 block text-sm font-semibold text-[#c0c0c5]";

export default function ApplicationPage() {
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
      const res = await fetch("/api/apply", {
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

      {/* 안내 카드 */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.infoItems.map((item, i) => {
            const icons = [MapPin, Phone, null, null];
            const Icon = icons[i];
            return (
              <div key={item.label} className="rounded-[14px] bg-[#1c1c1e] p-5">
                {Icon && (
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Icon className="h-4 w-4 text-[#f5f5f7]" />
                  </div>
                )}
                <p className="text-xs text-[#6e6e73]">{item.label}</p>
                <p className="mt-1 text-sm font-semibold leading-6 text-[#f5f5f7]">{item.value}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 폼 + 안내 */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* 신청 폼 */}
          <div className="rounded-[14px] bg-[#1c1c1e] p-6 sm:p-10">
            <h2 className="mb-8 text-2xl font-black text-[#f5f5f7]">{t.formTitle}</h2>

            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <CheckCircle className="h-16 w-16 text-[#cc2222]" />
                <h3 className="text-2xl font-black text-[#f5f5f7]">{t.successTitle}</h3>
                <p className="max-w-sm text-[#c0c0c5]">{t.successDesc}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 inline-flex h-12 items-center justify-center rounded-[2px] border border-[#424245] px-8 text-sm font-semibold text-[#f5f5f7] transition hover:bg-white/5"
                >
                  다시 신청하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* 이름 */}
                  <div className="sm:col-span-1">
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

                  {/* 연락처 */}
                  <div className="sm:col-span-1">
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

                  {/* 학교명 */}
                  <div className="sm:col-span-1">
                    <label htmlFor="school" className={labelClass}>{t.fields.school} *</label>
                    <input
                      id="school"
                      name="school"
                      type="text"
                      required
                      placeholder={t.placeholders.school}
                      className={inputClass}
                    />
                  </div>

                  {/* 학년 */}
                  <div className="sm:col-span-1">
                    <label htmlFor="grade" className={labelClass}>{t.fields.grade} *</label>
                    <select id="grade" name="grade" required className={selectClass} defaultValue="">
                      <option value="" disabled>{t.placeholders.grade}</option>
                      {t.gradeOptions.map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>

                  {/* 연령 그룹 */}
                  <div className="sm:col-span-1">
                    <label htmlFor="ageGroup" className={labelClass}>{t.fields.ageGroup} *</label>
                    <select id="ageGroup" name="ageGroup" required className={selectClass} defaultValue="">
                      <option value="" disabled>{t.placeholders.ageGroup}</option>
                      {t.ageGroupOptions.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </div>

                  {/* 포지션 */}
                  <div className="sm:col-span-1">
                    <label htmlFor="position" className={labelClass}>{t.fields.position}</label>
                    <select id="position" name="position" className={selectClass} defaultValue="">
                      <option value="">{t.placeholders.position}</option>
                      {t.positionOptions.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  {/* 추가 문의 */}
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className={labelClass}>{t.fields.message}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder={t.placeholders.message}
                      className="w-full rounded-[6px] border border-[#2a2a2e] bg-[#000]/40 px-4 py-3 text-[#f5f5f7] placeholder-[#6e6e73] focus:border-[#cc2222] focus:outline-none"
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p className="mt-4 text-sm text-[#cc2222]">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-[2px] bg-[#cc2222] text-base font-bold text-white transition hover:bg-[#cc2222]/90 disabled:opacity-60"
                >
                  {status === "submitting" ? t.submitting : t.submit}
                </button>
              </form>
            )}
          </div>

          {/* 안내사항 */}
          <div className="flex flex-col gap-6">
            <div className="rounded-[14px] bg-[#1c1c1e] p-7">
              <h3 className="text-lg font-black text-[#f5f5f7]">{t.noticeTitle}</h3>
              <ul className="mt-5 space-y-4">
                {t.notices.map((notice, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-6 text-[#c0c0c5]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#cc2222]/15 text-[10px] font-black text-[#cc2222]">
                      {i + 1}
                    </span>
                    {notice}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[14px] bg-[#1c1c1e] p-7">
              <p className="text-xs uppercase tracking-[0.28em] text-[#6e6e73]">Direct Contact</p>
              <a
                href="tel:01041780207"
                className="mt-3 block text-2xl font-black text-[#f5f5f7] transition hover:text-[#cc2222]"
              >
                010-4178-0207
              </a>
              <p className="mt-2 text-sm text-[#6e6e73]">천경필 대표</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

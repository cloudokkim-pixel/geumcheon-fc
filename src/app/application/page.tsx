"use client";

import React from "react";
import GSSCHeader from "@/components/GSSCHeader";
import Footer from "@/components/Footer";
import { useSiteLanguage, type Locale } from "@/components/site-language";
import { CheckCircle, ChevronDown } from "lucide-react";

type AgeGroup = {
  label: string;
  ageRange: string;
  items: Array<{ label: string; value: string }>;
};

type ProcessStep = { step: string; title: string; desc: string };

type Faq = { q: string; a: string };

type ApplicationCopy = {
  heroLabel: string;
  heroTitle: string;
  heroSub: string;
  ageReqLabel: string;
  ageReqTitle: string;
  ageGroups: AgeGroup[];
  processLabel: string;
  processTitle: string;
  processSteps: ProcessStep[];
  formLabel: string;
  formTitle: string;
  formSub: string;
  fieldLabels: {
    name: string;
    contact: string;
    ageGroup: string;
    school: string;
    trainingExp: string;
    message: string;
  };
  fieldPlaceholders: {
    name: string;
    contact: string;
    ageGroup: string;
    school: string;
    trainingExp: string;
    message: string;
  };
  ageGroupOptions: string[];
  submit: string;
  submitting: string;
  successTitle: string;
  successDesc: string;
  resetButton: string;
  phoneFallback: string;
  faqLabel: string;
  faqTitle: string;
  faqs: Faq[];
};

const copy: Record<Locale, ApplicationCopy> = {
  ko: {
    heroLabel: "Recruitment",
    heroTitle: "선수의 길,\n지금 시작하세요",
    heroSub: "초등부 · 중등부 · 고등부 · 성인부 전 연령 모집 중",
    ageReqLabel: "Age Requirements",
    ageReqTitle: "연령별 모집 안내",
    ageGroups: [
      {
        label: "초등부",
        ageRange: "U6 – U12",
        items: [
          { label: "모집 대상", value: "초등학교 1–6학년 (만 6–12세)" },
          { label: "훈련 시간", value: "추후 안내 예정" },
          { label: "훈련 장소", value: "서울특별시 관악구 조원로 56" },
          { label: "선발비", value: "추후 안내 예정" },
          { label: "선발 방식", value: "체험 훈련 후 코칭 스태프 평가" },
        ],
      },
      {
        label: "중등부",
        ageRange: "U13 – U15",
        items: [
          { label: "모집 대상", value: "중학교 1–3학년 (만 13–15세)" },
          { label: "훈련 시간", value: "추후 안내 예정" },
          { label: "훈련 장소", value: "서울특별시 관악구 조원로 56" },
          { label: "선발비", value: "추후 안내 예정" },
          { label: "선발 방식", value: "체험 훈련 후 코칭 스태프 평가" },
        ],
      },
      {
        label: "고등부",
        ageRange: "U16 – U18",
        items: [
          { label: "모집 대상", value: "고등학교 1–3학년 (만 16–18세)" },
          { label: "훈련 시간", value: "추후 안내 예정" },
          { label: "훈련 장소", value: "서울특별시 관악구 조원로 56" },
          { label: "선발비", value: "추후 안내 예정" },
          { label: "선발 방식", value: "체험 훈련 후 코칭 스태프 평가" },
        ],
      },
      {
        label: "성인부·K4",
        ageRange: "U19+",
        items: [
          { label: "모집 대상", value: "만 19세 이상 성인" },
          { label: "훈련 시간", value: "추후 안내 예정" },
          { label: "훈련 장소", value: "서울특별시 관악구 조원로 56" },
          { label: "선발비", value: "추후 안내 예정" },
          { label: "선발 방식", value: "체험 훈련 후 코칭 스태프 평가" },
        ],
      },
    ],
    processLabel: "How to Apply",
    processTitle: "입단 절차",
    processSteps: [
      { step: "01", title: "신청", desc: "홈페이지 또는 전화로 입단 신청서를 제출합니다." },
      { step: "02", title: "상담", desc: "담당 코치와 개별 상담을 통해 연령부 및 목표를 조율합니다." },
      { step: "03", title: "테스트", desc: "현장 체험 훈련을 통해 실력과 태도를 평가합니다." },
      { step: "04", title: "입단", desc: "최종 합격 후 입단 등록 및 훈련을 시작합니다." },
    ],
    formLabel: "Application",
    formTitle: "입단 신청하기",
    formSub: "아래 양식을 작성하시면 빠르게 연락드립니다.",
    fieldLabels: {
      name: "이름",
      contact: "연락처",
      ageGroup: "지망 연령부",
      school: "현재 학교·학년",
      trainingExp: "훈련 경험",
      message: "문의 내용",
    },
    fieldPlaceholders: {
      name: "이름을 입력하세요",
      contact: "010-0000-0000",
      ageGroup: "연령부를 선택하세요",
      school: "예) 금천초등학교 3학년",
      trainingExp: "예) 풋살 2년, 학교 축구부 1년 (없으면 '없음')",
      message: "문의 내용을 자유롭게 적어 주세요 (선택)",
    },
    ageGroupOptions: ["초등부 (U6–U12)", "중등부 (U13–U15)", "고등부 (U16–U18)", "성인부·K4 (U19+)"],
    submit: "입단 신청하기",
    submitting: "제출 중...",
    successTitle: "신청이 완료되었습니다",
    successDesc: "빠른 시일 내에 연락드리겠습니다. 문의사항은 010-4178-0207로 연락 주세요.",
    resetButton: "다시 신청하기",
    phoneFallback: "전화로 문의하기",
    faqLabel: "FAQ",
    faqTitle: "자주 묻는 질문",
    faqs: [
      {
        q: "테스트 없이 입단이 가능한가요?",
        a: "기본적으로 체험 훈련을 통한 평가를 진행합니다. 단, 연령부나 상황에 따라 별도 협의가 가능하오니 담당자에게 직접 문의 주세요.",
      },
      {
        q: "학교 수업과 병행이 가능한가요?",
        a: "네, 가능합니다. 훈련 일정은 학교 수업 이후에 운영되며, 학업과 훈련을 균형 있게 유지할 수 있도록 지원합니다.",
      },
      {
        q: "훈련 도중에 그만둘 수 있나요?",
        a: "개인 사정에 따라 중도 하차는 가능합니다. 다만 팀 운영 특성상 사전에 담당 코치에게 미리 알려주시면 감사하겠습니다.",
      },
      {
        q: "축구 경험이 없어도 초등부 입단이 가능한가요?",
        a: "초등부(U6–U12)는 기초부터 가르치는 연령부로, 경험이 없어도 지원 가능합니다. 열정과 성실한 자세가 가장 중요합니다.",
      },
      {
        q: "부모님이 매 훈련을 동반해야 하나요?",
        a: "매 훈련 동반은 필수가 아닙니다. 다만 저연령(U6–U8)의 경우 초기에는 보호자 동반을 권장하며, 이후 자율 등·하원이 가능합니다.",
      },
    ],
  },
  en: {
    heroLabel: "Recruitment",
    heroTitle: "Your path\nstarts here",
    heroSub: "Open recruitment · U12 · U15 · U18 · Senior",
    ageReqLabel: "Age Requirements",
    ageReqTitle: "Recruitment by Age Group",
    ageGroups: [
      {
        label: "Youth (U12)",
        ageRange: "U6 – U12",
        items: [
          { label: "Eligible", value: "Elementary school (ages 6–12)" },
          { label: "Training Hours", value: "To be confirmed" },
          { label: "Venue", value: "56 Jowon-ro, Gwanak-gu, Seoul" },
          { label: "Trial Fee", value: "To be confirmed" },
          { label: "Selection", value: "Trial training + coaching evaluation" },
        ],
      },
      {
        label: "Middle (U15)",
        ageRange: "U13 – U15",
        items: [
          { label: "Eligible", value: "Middle school (ages 13–15)" },
          { label: "Training Hours", value: "To be confirmed" },
          { label: "Venue", value: "56 Jowon-ro, Gwanak-gu, Seoul" },
          { label: "Trial Fee", value: "To be confirmed" },
          { label: "Selection", value: "Trial training + coaching evaluation" },
        ],
      },
      {
        label: "High School (U18)",
        ageRange: "U16 – U18",
        items: [
          { label: "Eligible", value: "High school (ages 16–18)" },
          { label: "Training Hours", value: "To be confirmed" },
          { label: "Venue", value: "56 Jowon-ro, Gwanak-gu, Seoul" },
          { label: "Trial Fee", value: "To be confirmed" },
          { label: "Selection", value: "Trial training + coaching evaluation" },
        ],
      },
      {
        label: "Senior·K4",
        ageRange: "U19+",
        items: [
          { label: "Eligible", value: "Adults age 19 and over" },
          { label: "Training Hours", value: "To be confirmed" },
          { label: "Venue", value: "56 Jowon-ro, Gwanak-gu, Seoul" },
          { label: "Trial Fee", value: "To be confirmed" },
          { label: "Selection", value: "Trial training + coaching evaluation" },
        ],
      },
    ],
    processLabel: "How to Apply",
    processTitle: "Application Process",
    processSteps: [
      { step: "01", title: "Apply", desc: "Submit an application form online or by phone." },
      { step: "02", title: "Consult", desc: "Individual consultation with the coaching staff to align age group and goals." },
      { step: "03", title: "Trial", desc: "On-site trial training for ability and attitude assessment." },
      { step: "04", title: "Join", desc: "Complete registration and start training after final acceptance." },
    ],
    formLabel: "Application",
    formTitle: "Apply Now",
    formSub: "Fill in the form below and we'll get back to you soon.",
    fieldLabels: {
      name: "Name",
      contact: "Contact Number",
      ageGroup: "Desired Age Group",
      school: "School & Grade",
      trainingExp: "Training Experience",
      message: "Message",
    },
    fieldPlaceholders: {
      name: "Enter your name",
      contact: "010-0000-0000",
      ageGroup: "Select an age group",
      school: "e.g. Geumcheon Elementary, Grade 3",
      trainingExp: "e.g. Futsal 2 years, school team 1 year (None if none)",
      message: "Any questions or notes (optional)",
    },
    ageGroupOptions: ["Youth U12 (U6–U12)", "Middle U15 (U13–U15)", "High School U18 (U16–U18)", "Senior·K4 (U19+)"],
    submit: "Submit Application",
    submitting: "Submitting...",
    successTitle: "Application Submitted",
    successDesc: "We will contact you as soon as possible. For inquiries, call 010-4178-0207.",
    resetButton: "Submit Again",
    phoneFallback: "Call us directly",
    faqLabel: "FAQ",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        q: "Can I join without a trial?",
        a: "We generally conduct a trial training session for evaluation. However, exceptions may be possible depending on age group and circumstances — please contact us directly.",
      },
      {
        q: "Can I attend school and train at the same time?",
        a: "Yes. Training sessions are scheduled after school hours, and we support players in balancing academics and athletics.",
      },
      {
        q: "Can I quit mid-season?",
        a: "Yes, you may withdraw due to personal reasons. However, given team operations, we kindly ask that you notify the coaching staff in advance.",
      },
      {
        q: "Can I join the youth group with no football experience?",
        a: "The Youth (U6–U12) group is designed for beginners. No prior experience is required — enthusiasm and dedication matter most.",
      },
      {
        q: "Do parents need to accompany their child every session?",
        a: "Parent accompaniment is not mandatory for every session. For younger ages (U6–U8) we recommend guardians be present initially, after which independent attendance is encouraged.",
      },
    ],
  },
  ja: {
    heroLabel: "Recruitment",
    heroTitle: "選手への道、\n今すぐ始めよう",
    heroSub: "イ等部・中等部・高等部・成人部 全年齢募集中",
    ageReqLabel: "Age Requirements",
    ageReqTitle: "年齢別募集案内",
    ageGroups: [
      {
        label: "イ等部",
        ageRange: "U6 – U12",
        items: [
          { label: "募集対象", value: "小学1〜6年生（満6〜12歳）" },
          { label: "練習時間", value: "後日案内予定" },
          { label: "練習場所", value: "ソウル特別市 冠岳区 組員路 56" },
          { label: "選抜費", value: "後日案内予定" },
          { label: "選抜方式", value: "体験練習後にコーチ陣が評価" },
        ],
      },
      {
        label: "中等部",
        ageRange: "U13 – U15",
        items: [
          { label: "募集対象", value: "中学1〜3年生（満13〜15歳）" },
          { label: "練習時間", value: "後日案内予定" },
          { label: "練習場所", value: "ソウル特別市 冠岳区 組員路 56" },
          { label: "選抜費", value: "後日案内予定" },
          { label: "選抜方式", value: "体験練習後にコーチ陣が評価" },
        ],
      },
      {
        label: "高等部",
        ageRange: "U16 – U18",
        items: [
          { label: "募集対象", value: "高校1〜3年生（満16〜18歳）" },
          { label: "練習時間", value: "後日案内予定" },
          { label: "練習場所", value: "ソウル特別市 冠岳区 組員路 56" },
          { label: "選抜費", value: "後日案内予定" },
          { label: "選抜方式", value: "体験練習後にコーチ陣が評価" },
        ],
      },
      {
        label: "成人部·K4",
        ageRange: "U19+",
        items: [
          { label: "募集対象", value: "満19歳以上の成人" },
          { label: "練習時間", value: "後日案内予定" },
          { label: "練習場所", value: "ソウル特別市 冠岳区 組員路 56" },
          { label: "選抜費", value: "後日案内予定" },
          { label: "選抜方式", value: "体験練習後にコーチ陣が評価" },
        ],
      },
    ],
    processLabel: "How to Apply",
    processTitle: "入団プロセス",
    processSteps: [
      { step: "01", title: "申請", desc: "ホームページまたはお電話で入団申請書を提出します。" },
      { step: "02", title: "相談", desc: "担当コーチと個別相談を行い、年齢部と目標を調整します。" },
      { step: "03", title: "テスト", desc: "体験練習を通じて実力と姿勢を評価します。" },
      { step: "04", title: "入団", desc: "最終合格後、入団登録を完了し練習を開始します。" },
    ],
    formLabel: "Application",
    formTitle: "入団申請",
    formSub: "下記フォームにご記入いただければ、すぐにご連絡いたします。",
    fieldLabels: {
      name: "氏名",
      contact: "連絡先",
      ageGroup: "希望年齢部",
      school: "在学校・学年",
      trainingExp: "練習経験",
      message: "お問い合わせ",
    },
    fieldPlaceholders: {
      name: "氏名を入力してください",
      contact: "010-0000-0000",
      ageGroup: "年齢部を選択してください",
      school: "例）金川小学校 3年生",
      trainingExp: "例）フットサル2年、学校サッカー部1年（なければ「なし」）",
      message: "お問い合わせをご自由にご記入ください（任意）",
    },
    ageGroupOptions: ["イ等部（U6–U12）", "中等部（U13–U15）", "高等部（U16–U18）", "成人部·K4（U19+）"],
    submit: "入団申請する",
    submitting: "送信中...",
    successTitle: "申請が完了しました",
    successDesc: "すぐにご連絡いたします。お問い合わせは 010-4178-0207 までどうぞ。",
    resetButton: "再度申請する",
    phoneFallback: "お電話でお問い合わせ",
    faqLabel: "FAQ",
    faqTitle: "よくある質問",
    faqs: [
      {
        q: "テストなしで入団できますか？",
        a: "基本的には体験練習を通じた評価を行います。ただし、年齢部や状況によって別途ご相談いただける場合がありますので、直接お問い合わせください。",
      },
      {
        q: "学校の授業と並行できますか？",
        a: "はい、可能です。練習日程は授業終了後に設定されており、学業と練習のバランスを保てるようサポートします。",
      },
      {
        q: "練習の途中でやめることはできますか？",
        a: "個人的な事情による途中退団は可能です。ただし、チーム運営の観点から、事前に担当コーチへお知らせいただければ幸いです。",
      },
      {
        q: "サッカー経験がなくてもイ等部に入団できますか？",
        a: "イ等部（U6–U12）は基礎から指導する年齢部ですので、経験がなくても入団できます。熱意と誠実な姿勢が最も大切です。",
      },
      {
        q: "保護者が毎回練習に同伴しなければなりませんか？",
        a: "毎回の同伴は必須ではありません。低年齢（U6–U8）の場合は初期段階での保護者同伴を推奨しており、その後は自主的な通練が可能です。",
      },
    ],
  },
  zh: {
    heroLabel: "Recruitment",
    heroTitle: "踏上球员之路，\n从现在开始",
    heroSub: "初等部・中等部・高等部・成人部 全年龄段招募中",
    ageReqLabel: "Age Requirements",
    ageReqTitle: "各年龄段招募信息",
    ageGroups: [
      {
        label: "初等部",
        ageRange: "U6 – U12",
        items: [
          { label: "招募对象", value: "小学1–6年级（6–12岁）" },
          { label: "训练时间", value: "待确认" },
          { label: "训练场地", value: "首尔特别市冠岳区组元路56号" },
          { label: "选拔费", value: "待确认" },
          { label: "选拔方式", value: "体验训练后由教练组评估" },
        ],
      },
      {
        label: "中等部",
        ageRange: "U13 – U15",
        items: [
          { label: "招募对象", value: "初中1–3年级（13–15岁）" },
          { label: "训练时间", value: "待确认" },
          { label: "训练场地", value: "首尔特别市冠岳区组元路56号" },
          { label: "选拔费", value: "待确认" },
          { label: "选拔方式", value: "体验训练后由教练组评估" },
        ],
      },
      {
        label: "高等部",
        ageRange: "U16 – U18",
        items: [
          { label: "招募对象", value: "高中1–3年级（16–18岁）" },
          { label: "训练时间", value: "待确认" },
          { label: "训练场地", value: "首尔特别市冠岳区组元路56号" },
          { label: "选拔费", value: "待确认" },
          { label: "选拔方式", value: "体验训练后由教练组评估" },
        ],
      },
      {
        label: "成人部·K4",
        ageRange: "U19+",
        items: [
          { label: "招募对象", value: "19岁及以上成人" },
          { label: "训练时间", value: "待确认" },
          { label: "训练场地", value: "首尔特别市冠岳区组元路56号" },
          { label: "选拔费", value: "待确认" },
          { label: "选拔方式", value: "体验训练后由教练组评估" },
        ],
      },
    ],
    processLabel: "How to Apply",
    processTitle: "入团流程",
    processSteps: [
      { step: "01", title: "申请", desc: "通过官网或电话提交入团申请表。" },
      { step: "02", title: "咨询", desc: "与负责教练进行一对一咨询，确认年龄组和目标。" },
      { step: "03", title: "测试", desc: "参加现场体验训练，接受能力与态度评估。" },
      { step: "04", title: "入团", desc: "最终录取后完成注册，正式开始训练。" },
    ],
    formLabel: "Application",
    formTitle: "申请入团",
    formSub: "请填写以下表格，我们将尽快与您联系。",
    fieldLabels: {
      name: "姓名",
      contact: "联系方式",
      ageGroup: "意向年龄组",
      school: "就读学校·年级",
      trainingExp: "训练经历",
      message: "咨询内容",
    },
    fieldPlaceholders: {
      name: "请输入姓名",
      contact: "010-0000-0000",
      ageGroup: "请选择年龄组",
      school: "例）金川小学 3年级",
      trainingExp: "例）五人制足球2年，学校足球队1年（无则填'无'）",
      message: "请填写您的咨询内容（可选）",
    },
    ageGroupOptions: ["初等部（U6–U12）", "中等部（U13–U15）", "高等部（U16–U18）", "成人部·K4（U19+）"],
    submit: "提交申请",
    submitting: "提交中...",
    successTitle: "申请已提交",
    successDesc: "我们将尽快与您联系。如有疑问请拨打 010-4178-0207。",
    resetButton: "重新申请",
    phoneFallback: "直接致电咨询",
    faqLabel: "FAQ",
    faqTitle: "常见问题",
    faqs: [
      {
        q: "没有测试可以入团吗？",
        a: "一般情况下需要通过体验训练进行评估。但根据年龄组和情况不同，可另行协商，请直接联系我们。",
      },
      {
        q: "可以兼顾学业与训练吗？",
        a: "可以。训练安排在放学之后，我们会支持球员在学业和训练之间保持平衡。",
      },
      {
        q: "训练中途可以退出吗？",
        a: "因个人原因中途退团是可以的。但考虑到球队运营，希望您能提前告知负责教练。",
      },
      {
        q: "没有足球经验也可以加入初等部吗？",
        a: "初等部（U6–U12）是从基础开始培训的年龄段，没有经验也可以申请。最重要的是热情与认真的态度。",
      },
      {
        q: "家长需要每次训练都陪同吗？",
        a: "家长每次陪同并非必须。但对于低龄组（U6–U8），初期建议家长陪同，之后可自行前往训练。",
      },
    ],
  },
};

const inputClass =
  "h-12 w-full rounded-[4px] border border-[#2a2a2e] bg-[#111] px-4 text-[#f5f5f7] placeholder-[#555] focus:border-[#cc2222] focus:outline-none";
const selectClass =
  "h-12 w-full appearance-none rounded-[4px] border border-[#2a2a2e] bg-[#111] px-4 text-[#f5f5f7] focus:border-[#cc2222] focus:outline-none";
const labelClass = "mb-2 block text-sm font-semibold text-[#c0c0c5]";

export default function ApplicationPage() {
  const { locale } = useSiteLanguage();
  const t = copy[locale];

  const [activeTab, setActiveTab] = React.useState(0);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
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

      {/* S1: Hero */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#cc2222]">{t.heroLabel}</p>
          <h1 className="mt-3 whitespace-pre-line text-[clamp(2rem,7vw,3.375rem)] font-black leading-tight tracking-tight text-[#f5f5f7]">
            {t.heroTitle}
          </h1>
          <p className="mt-5 text-base leading-[1.7] text-[#c0c0c5]">{t.heroSub}</p>
        </div>
      </section>

      {/* S2: Age Group Requirements */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#cc2222]">{t.ageReqLabel}</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#f5f5f7] sm:text-4xl">{t.ageReqTitle}</h2>

          {/* Tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {t.ageGroups.map((group, i) => (
              <button
                key={group.label}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`inline-flex flex-col items-start rounded-[4px] px-5 py-3 text-left transition ${
                  activeTab === i
                    ? "bg-[#cc2222] text-white"
                    : "border border-[#333] bg-[#1c1c1e] text-[#c0c0c5] hover:bg-[#2a2a2a]"
                }`}
              >
                <span className="text-sm font-black">{group.label}</span>
                <span
                  className={`text-xs font-medium tracking-wide ${
                    activeTab === i ? "text-white/75" : "text-[#6e6e73]"
                  }`}
                >
                  {group.ageRange}
                </span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="mt-5 rounded-[4px] border border-[#222] bg-[#1c1c1e] p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {t.ageGroups[activeTab].items.map((item) => (
                <div key={item.label} className="rounded-[4px] bg-[#111] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#555]">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold leading-[1.5] text-[#f5f5f7]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* S3: Application Process */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#cc2222]">{t.processLabel}</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#f5f5f7] sm:text-4xl">{t.processTitle}</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.processSteps.map((s) => (
              <div key={s.step} className="rounded-[4px] border border-[#222] bg-[#1c1c1e] p-6">
                <p className="text-3xl font-black text-[#cc2222]">{s.step}</p>
                <p className="mt-4 text-lg font-black text-[#f5f5f7]">{s.title}</p>
                <p className="mt-2 text-sm leading-[1.7] text-[#888890]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S4: Application Form */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#cc2222]">{t.formLabel}</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#f5f5f7] sm:text-4xl">{t.formTitle}</h2>
          <p className="mt-3 text-base text-[#888890]">{t.formSub}</p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_300px]">
            {/* Form */}
            <div className="rounded-[4px] border border-[#222] bg-[#1c1c1e] p-6 sm:p-10">
              {status === "success" ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center">
                  <CheckCircle className="h-16 w-16 text-[#cc2222]" />
                  <h3 className="text-2xl font-black text-[#f5f5f7]">{t.successTitle}</h3>
                  <p className="max-w-sm text-[#c0c0c5]">{t.successDesc}</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 inline-flex h-12 items-center justify-center rounded-[2px] border border-[#424245] px-8 text-sm font-semibold text-[#f5f5f7] transition hover:bg-white/5"
                  >
                    {t.resetButton}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* 이름 */}
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        {t.fieldLabels.name} *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder={t.fieldPlaceholders.name}
                        className={inputClass}
                      />
                    </div>

                    {/* 연락처 */}
                    <div>
                      <label htmlFor="contact" className={labelClass}>
                        {t.fieldLabels.contact} *
                      </label>
                      <input
                        id="contact"
                        name="contact"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder={t.fieldPlaceholders.contact}
                        className={inputClass}
                      />
                    </div>

                    {/* 지망 연령부 */}
                    <div className="sm:col-span-2">
                      <label htmlFor="ageGroup" className={labelClass}>
                        {t.fieldLabels.ageGroup} *
                      </label>
                      <select id="ageGroup" name="ageGroup" required className={selectClass} defaultValue="">
                        <option value="" disabled>
                          {t.fieldPlaceholders.ageGroup}
                        </option>
                        {t.ageGroupOptions.map((a) => (
                          <option key={a} value={a}>
                            {a}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* 현재 학교·학년 */}
                    <div>
                      <label htmlFor="school" className={labelClass}>
                        {t.fieldLabels.school}
                      </label>
                      <input
                        id="school"
                        name="school"
                        type="text"
                        placeholder={t.fieldPlaceholders.school}
                        className={inputClass}
                      />
                    </div>

                    {/* 훈련 경험 */}
                    <div>
                      <label htmlFor="trainingExp" className={labelClass}>
                        {t.fieldLabels.trainingExp}
                      </label>
                      <input
                        id="trainingExp"
                        name="trainingExp"
                        type="text"
                        placeholder={t.fieldPlaceholders.trainingExp}
                        className={inputClass}
                      />
                    </div>

                    {/* 문의 내용 */}
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className={labelClass}>
                        {t.fieldLabels.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder={t.fieldPlaceholders.message}
                        className="w-full rounded-[4px] border border-[#2a2a2e] bg-[#111] px-4 py-3 text-[#f5f5f7] placeholder-[#555] focus:border-[#cc2222] focus:outline-none"
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

            {/* Phone fallback */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[4px] border border-[#222] bg-[#1c1c1e] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[#6e6e73]">Direct Contact</p>
                <p className="mt-3 text-sm text-[#888890]">{t.phoneFallback}</p>
                <a
                  href="tel:01041780207"
                  className="mt-2 block text-2xl font-black text-[#f5f5f7] transition hover:text-[#cc2222]"
                >
                  010-4178-0207
                </a>
                <p className="mt-2 text-sm text-[#6e6e73]">천경필 대표</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S5: FAQ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#cc2222]">{t.faqLabel}</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#f5f5f7] sm:text-4xl">{t.faqTitle}</h2>

          <div className="mt-8 divide-y divide-[#222]">
            {t.faqs.map((faq, i) => (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-semibold text-[#f5f5f7]">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#6e6e73] transition ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="pb-5 text-sm leading-[1.8] text-[#888890]">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

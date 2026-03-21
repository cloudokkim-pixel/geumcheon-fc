"use client";

import Image from "next/image";
import GSSCHeader from "@/components/GSSCHeader";
import { useSiteLanguage, type Locale } from "@/components/site-language";

const logoSrc =
  "http://fs.arumnet.com/image/N1010BONSA/event/2023121540/%EA%B8%88%EC%B2%9C%20%EC%B6%95%EA%B5%AC%20%ED%81%B4%EB%9F%BD%20%EC%9D%B4%EB%AF%B8%EC%A7%80.png";

const clubIntroCopy: Record<
  Locale,
  {
    badge: string;
    heroTitle: [string, string];
    heroDesc: string;
    primary: string;
    secondary: string;
    aboutLabel: string;
    aboutTitle: string;
    sections: Array<{ title: string; text: string }>;
    programLabel: string;
    programTitle: string;
    programs: string[];
    reasonsLabel: string;
    reasonsTitle: string;
    reasons: string[];
    highlight: string;
    showcaseTitle: string;
    showcaseDesc: string;
    contactLabel: string;
    contactTitle: string;
    contactDesc: string;
    contactCards: Array<[string, string]>;
  }
> = {
  ko: {
    badge: "GEUMCHEON SPORT SOCIAL COOP",
    heroTitle: ["축구로 성장하고", "팀으로 완성되는 클럽"],
    heroDesc:
      "금천축구클럽은 기본기, 전술 이해, 체력, 태도까지 함께 성장시키는 육성형 축구 클럽입니다. 선수 한 명 한 명이 자신의 가능성을 넓히고 다음 단계로 나아갈 수 있도록 안정적인 훈련 환경을 제공합니다.",
    primary: "클럽 소개 보기",
    secondary: "문의 섹션 이동",
    aboutLabel: "About Club",
    aboutTitle: "클럽 소개",
    sections: [
      {
        title: "클럽 개요",
        text: "금천축구클럽은 축구를 통해 성장, 협동, 책임감을 배우는 팀 중심의 훈련 문화를 지향합니다. 선수들이 기술뿐 아니라 태도와 루틴까지 함께 다질 수 있도록 운영합니다.",
      },
      {
        title: "운영 방향",
        text: "기본기 완성, 경기 경험, 인성 교육, 진학 연계를 균형 있게 설계하여 선수 각자의 현재 수준과 목표에 맞는 성장 계획을 제공합니다.",
      },
      {
        title: "핵심 가치",
        text: "Discipline, Respect, Teamwork, Challenge를 중심에 두고 훈련과 경기 안에서 책임감 있는 태도와 스포츠맨십을 실천합니다.",
      },
    ],
    programLabel: "Training Program",
    programTitle: "훈련 프로그램",
    programs: [
      "기본기 훈련: 패스, 드리블, 볼 컨트롤, 방향 전환 훈련",
      "개인 전술: 포지션 이해, 1:1 대응, 판단 속도 향상",
      "팀 전술: 빌드업, 수비 조직, 전환 플레이",
      "실전 운영: 연습 경기, 대회 참가 중심의 경기 경험",
    ],
    reasonsLabel: "Why GSSC",
    reasonsTitle: "선택 이유",
    reasons: [
      "선수 성장 중심의 체계적인 훈련",
      "훈련과 경기 경험의 균형 있는 운영",
      "태도와 팀워크를 함께 강조하는 지도 철학",
      "진학과 장기 성장 방향까지 함께 보는 코칭",
    ],
    highlight:
      "향후 운영 단계에서는 U12/U15 소개, 지도 철학, 실제 활동 사진, SNS 연동 영역을 더하면 완성도가 더욱 높아집니다.",
    showcaseTitle: "활동 스케치",
    showcaseDesc: "훈련, 경기, 대회, 팀 활동 장면을 실제 사진으로 보여주는 영역입니다.",
    contactLabel: "Contact",
    contactTitle: "입단 문의 / 클럽 안내",
    contactDesc:
      "운영 중인 연락처, 카카오톡 채널, 인스타그램 주소, 훈련 장소, 모집 대상 정보를 이 섹션에 배치해 빠르게 문의를 받을 수 있습니다.",
    contactCards: [
      ["훈련 지역", "서울 금천구"],
      ["운영 채널", "Instagram / KakaoTalk"],
      ["문의 안내", "연락처 정보 입력"],
    ],
  },
  en: {
    badge: "GEUMCHEON SPORT SOCIAL COOP",
    heroTitle: ["Grow through football", "be completed as a team"],
    heroDesc:
      "Geumcheon Soccer Club is a development-focused football club that grows fundamentals, tactical understanding, physical strength, and attitude together. We provide a stable environment where each player can expand their potential and prepare for the next stage.",
    primary: "Explore the Club",
    secondary: "Jump to Contact",
    aboutLabel: "About Club",
    aboutTitle: "Club Introduction",
    sections: [
      {
        title: "Club Overview",
        text: "The club values a team-first training culture where players learn growth, cooperation, and responsibility through football. We help players strengthen both technique and daily discipline.",
      },
      {
        title: "Operating Direction",
        text: "We balance fundamentals, match experience, character education, and pathway support to deliver a growth plan that fits each player's stage and goal.",
      },
      {
        title: "Core Values",
        text: "Discipline, Respect, Teamwork, and Challenge guide how we train, compete, and build sportsmanship every day.",
      },
    ],
    programLabel: "Training Program",
    programTitle: "Programs",
    programs: [
      "Fundamentals: passing, dribbling, ball control, and directional change",
      "Individual tactics: positional awareness, 1v1 response, and decision speed",
      "Team tactics: build-up play, defensive organization, and transitions",
      "Match application: practice matches and tournament experience",
    ],
    reasonsLabel: "Why GSSC",
    reasonsTitle: "Why Players Choose Us",
    reasons: [
      "A structured system centered on player development",
      "Balanced operation between training and match experience",
      "A coaching philosophy that values attitude and teamwork",
      "Support that also looks at school advancement and long-term growth",
    ],
    highlight:
      "This page can later be expanded with U12/U15 sections, coaching philosophy, real activity photos, and social media integration.",
    showcaseTitle: "Activity Showcase",
    showcaseDesc: "This section is intended for real photos from training, matches, tournaments, and team activities.",
    contactLabel: "Contact",
    contactTitle: "Join Inquiry / Club Guide",
    contactDesc:
      "Place your phone number, KakaoTalk or Instagram channel, training location, and recruitment details here so families can contact the club quickly.",
    contactCards: [
      ["Training Area", "Geumcheon-gu, Seoul"],
      ["Channels", "Instagram / KakaoTalk"],
      ["Inquiry Desk", "Contact details available here"],
    ],
  },
  ja: {
    badge: "GEUMCHEON SPORT SOCIAL COOP",
    heroTitle: ["サッカーで成長し", "チームで完成するクラブ"],
    heroDesc:
      "クムチョンサッカークラブは、基礎技術、戦術理解、フィジカル、姿勢まで共に育てる育成型クラブです。選手一人ひとりが可能性を広げ、次の段階へ進めるよう安定したトレーニング環境を提供します。",
    primary: "クラブ紹介を見る",
    secondary: "お問い合わせへ移動",
    aboutLabel: "About Club",
    aboutTitle: "クラブ紹介",
    sections: [
      {
        title: "クラブ概要",
        text: "サッカーを通じて成長、協力、責任感を学ぶチーム中心のトレーニング文化を大切にしています。技術だけでなく姿勢と日々の習慣も整えます。",
      },
      {
        title: "運営方針",
        text: "基礎技術、試合経験、人間教育、進学サポートをバランスよく設計し、各選手の目標に合う成長計画を提供します。",
      },
      {
        title: "中核価値",
        text: "Discipline、Respect、Teamwork、Challenge を軸に、責任感とスポーツマンシップを日々の活動で実践します。",
      },
    ],
    programLabel: "Training Program",
    programTitle: "トレーニングプログラム",
    programs: [
      "基礎技術: パス、ドリブル、ボールコントロール、方向転換",
      "個人戦術: ポジション理解、1対1対応、判断速度向上",
      "チーム戦術: ビルドアップ、守備組織、切り替え",
      "実戦運営: 練習試合と大会参加による経験蓄積",
    ],
    reasonsLabel: "Why GSSC",
    reasonsTitle: "選ばれる理由",
    reasons: [
      "選手の成長を中心に据えた体系的な指導",
      "練習と試合経験のバランスある運営",
      "姿勢とチームワークも重視する指導哲学",
      "進学と長期成長まで見据えたサポート",
    ],
    highlight:
      "今後は U12/U15 紹介、指導哲学、実際の活動写真、SNS 連携を加えることでさらに完成度が高まります。",
    showcaseTitle: "活動スケッチ",
    showcaseDesc: "練習、試合、大会、チーム活動の様子を実際の写真で見せるエリアです。",
    contactLabel: "Contact",
    contactTitle: "入団相談 / クラブ案内",
    contactDesc:
      "連絡先、カカオトーク、Instagram、練習場所、募集案内を配置し、保護者や選手がすぐに相談できるようにします。",
    contactCards: [
      ["練習地域", "ソウル特別市 衿川区"],
      ["運営チャンネル", "Instagram / KakaoTalk"],
      ["お問い合わせ", "連絡先情報を掲載"],
    ],
  },
  zh: {
    badge: "GEUMCHEON SPORT SOCIAL COOP",
    heroTitle: ["通过足球成长", "以团队完成自我"],
    heroDesc:
      "金泉足球俱乐部是一家重视基础、战术理解、体能与态度共同成长的青训俱乐部。我们为每位球员提供稳定的训练环境，帮助他们拓展潜力并迈向下一阶段。",
    primary: "查看俱乐部介绍",
    secondary: "前往咨询区域",
    aboutLabel: "About Club",
    aboutTitle: "俱乐部介绍",
    sections: [
      {
        title: "俱乐部概况",
        text: "我们重视以团队为中心的训练文化，让球员通过足球学习成长、合作与责任感，同时培养技术与日常习惯。",
      },
      {
        title: "运营方向",
        text: "以基础技术、比赛经验、品格教育和升学支持为核心，为不同阶段的球员提供平衡的成长方案。",
      },
      {
        title: "核心价值",
        text: "Discipline、Respect、Teamwork、Challenge 是我们的核心价值，并体现在日常训练与比赛中。",
      },
    ],
    programLabel: "Training Program",
    programTitle: "训练项目",
    programs: [
      "基础训练：传球、盘带、控球与变向",
      "个人战术：位置理解、一对一应对、判断速度提升",
      "团队战术：后场组织、防守结构、攻防转换",
      "实战运营：训练赛与比赛参赛经验",
    ],
    reasonsLabel: "Why GSSC",
    reasonsTitle: "选择我们的理由",
    reasons: [
      "以球员成长为中心的系统训练",
      "训练与比赛经验保持平衡",
      "重视态度与团队合作的指导理念",
      "兼顾升学与长期成长方向的支持",
    ],
    highlight:
      "后续还可以加入 U12/U15 介绍、指导理念、真实活动照片以及社交媒体联动内容，让页面更加完整。",
    showcaseTitle: "活动展示",
    showcaseDesc: "这里适合展示训练、比赛、大会和团队活动的真实照片。",
    contactLabel: "Contact",
    contactTitle: "入队咨询 / 俱乐部说明",
    contactDesc:
      "可在此放置联系电话、KakaoTalk、Instagram、训练地点和招生信息，方便家长与球员快速联系。",
    contactCards: [
      ["训练地区", "首尔特别市 衿川区"],
      ["运营渠道", "Instagram / KakaoTalk"],
      ["咨询方式", "可在此填写联系方式"],
    ],
  },
};

export default function GSSCIntroPage() {
  const { locale, dictionary } = useSiteLanguage();
  const copy = clubIntroCopy[locale];

  return (
    <div className="min-h-screen bg-transparent text-[#f5f5f7]">
      <GSSCHeader />

      <section className="relative overflow-hidden border-b border-[#222]">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[420px_1fr] md:px-10 md:py-24">
          <div className="flex items-center justify-center">
            <div className="rounded-[14px] border border-white/10 bg-[#1c1c1e] p-4 shadow-2xl">
              <div className="flex h-[420px] w-[320px] items-center justify-center rounded-[10px] border border-white/10 bg-[#000] text-center">
                <div>
                  <div className="mb-3 text-xs uppercase tracking-[0.5em] text-[#cc2222]">G.S.S.C</div>
                  <div className="text-2xl font-black tracking-wide">{dictionary.header.clubName}</div>
                  <div className="mt-6 flex justify-center">
                    <div className="relative h-[240px] w-[240px]">
                      <Image src={logoSrc} alt={dictionary.header.clubName} fill className="object-contain" sizes="240px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-[#a1a1a6]">
              {copy.badge}
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              {copy.heroTitle[0]}
              <br />
              {copy.heroTitle[1]}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#a1a1a6] md:text-lg">{copy.heroDesc}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#about" className="rounded-[2px] bg-[#cc2222] px-6 py-3 font-bold text-white transition hover:bg-[#cc2222]/90">
                {copy.primary}
              </a>
              <a href="#contact" className="rounded-[2px] border border-[#424245] bg-transparent px-6 py-3 font-semibold text-[#f5f5f7] transition hover:bg-white/5">
                {copy.secondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#cc2222]">{copy.aboutLabel}</div>
            <h2 className="text-3xl font-black text-[#f5f5f7] md:text-4xl">{copy.aboutTitle}</h2>
          </div>
          <div className="hidden text-sm text-[#6e6e73] md:block">Since 2015 • G.S.S.C</div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {copy.sections.map((item) => (
            <div key={item.title} className="rounded-[14px] bg-[#1c1c1e] p-7">
              <h3 className="mb-4 text-xl font-bold text-[#f5f5f7]">{item.title}</h3>
              <p className="text-sm leading-7 text-[#a1a1a6]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#222]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-10">
          <div className="rounded-[14px] bg-[#1c1c1e] p-8">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#cc2222]">{copy.programLabel}</div>
            <h2 className="text-3xl font-black text-[#f5f5f7] md:text-4xl">{copy.programTitle}</h2>
            <div className="mt-8 space-y-4">
              {copy.programs.map((program, index) => (
                <div key={program} className="flex gap-4 rounded-[8px] border border-white/10 bg-[#111] p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center font-black text-[#cc2222]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="leading-7 text-[#a1a1a6]">{program}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[14px] bg-[#1c1c1e] p-8">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#cc2222]">{copy.reasonsLabel}</div>
            <h2 className="text-3xl font-black text-[#f5f5f7] md:text-4xl">{copy.reasonsTitle}</h2>
            <div className="mt-8 space-y-4">
              {copy.reasons.map((reason) => (
                <div key={reason} className="rounded-[8px] border border-white/10 bg-[#111] px-5 py-4 text-[#a1a1a6]">
                  {reason}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[8px] border border-white/10 bg-[#222] p-6 text-sm leading-7 text-[#a1a1a6]">
              {copy.highlight}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group overflow-hidden rounded-[14px] border border-white/10 bg-[#1c1c1e]">
              <div className="flex h-60 items-center justify-center bg-[#000]/30 text-[#6e6e73]">
                {copy.showcaseTitle} {item}
              </div>
              <div className="p-6">
                <div className="text-lg font-bold text-[#f5f5f7]">
                  {copy.showcaseTitle} {item}
                </div>
                <p className="mt-2 text-sm leading-7 text-[#a1a1a6]">{copy.showcaseDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-[#222]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="rounded-[14px] bg-[#1c1c1e] p-8 md:p-10">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#cc2222]">{copy.contactLabel}</div>
            <h2 className="text-3xl font-black text-[#f5f5f7] md:text-4xl">{copy.contactTitle}</h2>
            <p className="mt-4 max-w-2xl text-[#a1a1a6] leading-7">{copy.contactDesc}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {copy.contactCards.map(([label, value]) => (
                <div key={label} className="rounded-[8px] border border-white/10 bg-[#111] p-5">
                  <div className="text-sm text-[#6e6e73]">{label}</div>
                  <div className="mt-2 text-lg font-bold text-[#f5f5f7]">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

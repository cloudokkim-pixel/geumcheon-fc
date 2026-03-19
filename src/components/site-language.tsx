"use client";

import React from "react";

export type Locale = "ko" | "en" | "ja" | "zh";

type LocaleOption = {
  code: Locale;
  label: string;
  shortLabel: string;
};

type SiteDictionary = {
  metaTitle: string;
  metaDescription: string;
  header: {
    clubName: string;
    clubNameEn: string;
    nav: Array<{ href: string; label: string }>;
    apply: string;
    menu: string;
    openMenu: string;
    closeMenu: string;
    closeMobileMenu: string;
    languageLabel: string;
  };
  home: {
    heroBadge: string;
    heroTitleTop: string;
    heroTitleBottom: string;
    heroDesc: string;
    heroPrimary: string;
    heroSecondary: string;
    heroStats: Array<{ title: string; sub: string }>;
    clubIdentityLabel: string;
    clubIdentityDesc: string;
    clubStarted: string;
    summaryCards: Array<{ label: string; value: string }>;
    aboutLabel: string;
    aboutTitle: string;
    aboutDesc: string;
    aboutIdentityTitle: string;
    aboutIdentityDesc: string;
    aboutFacts: Array<{ key: string; value: string }>;
    aboutFeatures: Array<{ title: string; desc: string }>;
    programLabel: string;
    programTitle: string;
    programDesc: string;
    programOverviewLabel: string;
    programOverviewTitle: string;
    programOverviewDesc: string;
    programPointsTitle: string;
    programPoints: string[];
    programs: Array<{ title: string; desc: string }>;
    recruitLabel: string;
    recruitTitle: string;
    recruitDesc: string;
    recruitInfo: Array<{ label: string; value: string }>;
    recruitPrimary: string;
    recruitSecondary: string;
    galleryLabel: string;
    galleryTitle: string;
    galleryDesc: string;
    galleryCta: string;
    gallerySections: Array<{ title: string; desc: string }>;
    sponsorLabel: string;
    sponsorTitle: string;
    sponsorDesc: string;
    sponsors: Array<{ title: string; desc: string }>;
    sponsorCta: string;
    contactLabel: string;
    contactTitle: string;
    contactDesc: string;
    contactCards: Array<{ label: string; value: string }>;
    contactPrimary: string;
    contactSecondary: string;
    promiseLabel: string;
    promiseTitleLines: [string, string];
    promiseDesc: string;
    footerNav: Array<{ href: string; label: string }>;
    footerCopyright: string;
  };
};

const localeOptions: LocaleOption[] = [
  { code: "ko", label: "대한민국", shortLabel: "KR" },
  { code: "en", label: "United States", shortLabel: "EN" },
  { code: "ja", label: "日本", shortLabel: "JP" },
  { code: "zh", label: "中国", shortLabel: "CN" },
];

const dictionaries: Record<Locale, SiteDictionary> = {
  ko: {
    metaTitle: "서울금천축구클럽",
    metaDescription: "서울금천축구클럽 공식 홈페이지",
    header: {
      clubName: "서울금천축구클럽",
      clubNameEn: "Geumcheon Soccer Club",
      nav: [
        { href: "/club-introduction", label: "클럽소개" },
        { href: "/program", label: "훈련프로그램" },
        { href: "/application", label: "선수모집" },
        { href: "/gallery", label: "갤러리" },
        { href: "/support", label: "후원" },
        { href: "/contact", label: "문의" },
      ],
      apply: "참가 신청",
      menu: "메뉴",
      openMenu: "메뉴 열기",
      closeMenu: "메뉴 닫기",
      closeMobileMenu: "모바일 메뉴 닫기",
      languageLabel: "언어 선택",
    },
    home: {
      heroBadge: "Elite Youth Soccer Academy",
      heroTitleTop: "GEUMCHEON",
      heroTitleBottom: "SOCCER CLUB",
      heroDesc:
        "서울금천축구클럽은 중등부와 고등부 선수를 대상으로 기본기, 전술 이해, 피지컬, 진학 연계를 함께 설계하는 성장형 축구 클럽입니다.",
      heroPrimary: "선수 모집 바로가기",
      heroSecondary: "클럽 소개 보기",
      heroStats: [
        { title: "중등부", sub: "전 학년 모집" },
        { title: "고등부", sub: "1-2학년 모집" },
        { title: "주 5회", sub: "정규 훈련 운영" },
        { title: "실내·실외", sub: "전용 구장 사용" },
      ],
      clubIdentityLabel: "Club Identity",
      clubIdentityDesc: "강한 팀 컬러와 성장 중심 철학을 바탕으로 선수들의 현재와 다음 단계를 함께 준비합니다.",
      clubStarted: "클럽 시작",
      summaryCards: [
        { label: "훈련 일정", value: "월-금 17:30 - 19:30" },
        { label: "모집 대상", value: "중등부 전학년 / 고등부 1-2학년" },
        { label: "훈련 환경", value: "전용 실내 및 실외 구장" },
        { label: "상담 문의", value: "010-4178-0207" },
      ],
      aboutLabel: "About Club",
      aboutTitle: "클럽 소개",
      aboutDesc:
        "기초 훈련부터 경기 적용, 진학 상담까지 연결되는 운영 체계를 통해 선수들의 장기 성장을 지원합니다.",
      aboutIdentityTitle: "함께 훈련하고 함께 성장하는 서울금천축구클럽",
      aboutIdentityDesc:
        "선수 개인의 수준과 목표에 맞춘 코칭, 안정적인 훈련 루틴, 경기 경험의 축적을 통해 다음 단계까지 준비하는 클럽입니다.",
      aboutFacts: [
        { key: "창단", value: "Since 2015" },
        { key: "모집", value: "중등부 · 고등부" },
        { key: "훈련", value: "주 5회 운영" },
        { key: "방향", value: "훈련 · 진학 연계" },
      ],
      aboutFeatures: [
        { title: "기본기 중심 훈련", desc: "패스, 드리블, 볼 컨트롤, 방향 전환을 반복적으로 강화합니다." },
        { title: "전문 코칭 시스템", desc: "학년과 성장 단계에 맞춘 체계적인 코칭을 제공합니다." },
        { title: "전용 훈련 환경", desc: "실내와 실외 구장을 병행 사용해 안정적으로 훈련합니다." },
        { title: "진학 연계 지원", desc: "선수 목표에 맞춘 상담과 장기 성장 방향을 함께 설계합니다." },
      ],
      programLabel: "Training Program",
      programTitle: "훈련 프로그램",
      programDesc: "연령과 성장 단계에 맞춘 기본기, 전술, 피지컬, 진로 연계 프로그램을 운영합니다.",
      programOverviewLabel: "Program Overview",
      programOverviewTitle: "성장 단계에 맞춘 체계적 훈련",
      programOverviewDesc: "기초 기술, 포지션 전술, 실전 대응, 피지컬 강화를 유기적으로 연결합니다.",
      programPointsTitle: "주요 포인트",
      programPoints: [
        "기초 기술 반복 훈련",
        "포지션별 판단과 전술 이해",
        "실전 감각과 피지컬 강화",
      ],
      programs: [
        { title: "기본기 훈련", desc: "볼 컨트롤, 패스, 퍼스트 터치, 방향 전환 훈련" },
        { title: "수비와 전술", desc: "팀 전술 이해와 수비 조직, 위치 선정 훈련" },
        { title: "피지컬 강화", desc: "스피드, 민첩성, 코어 중심 프로그램" },
        { title: "진학 컨설팅", desc: "선수 목표에 맞춘 진학 및 장기 성장 상담" },
      ],
      recruitLabel: "Recruit",
      recruitTitle: "선수 모집 안내",
      recruitDesc: "중등부 전학년, 고등부 1-2학년 선수를 모집 중이며 테스트 및 상담을 통해 입단을 안내합니다.",
      recruitInfo: [
        { label: "모집 대상", value: "중등부 전학년 / 고등부 1-2학년" },
        { label: "훈련 시간", value: "월-금 17:30 - 19:30" },
        { label: "훈련 장소", value: "전용 실내 및 실외 구장" },
        { label: "문의", value: "010-4178-0207" },
      ],
      recruitPrimary: "입단 신청",
      recruitSecondary: "모집 공고 보기",
      galleryLabel: "Gallery",
      galleryTitle: "갤러리",
      galleryDesc: "훈련, 경기, 행사 등 클럽의 실제 분위기를 한눈에 확인할 수 있는 기록 공간입니다.",
      galleryCta: "전체 갤러리 보기",
      gallerySections: [
        { title: "훈련", desc: "기초와 전술이 연결되는 실제 훈련 장면" },
        { title: "경기", desc: "집중력과 팀워크가 드러나는 경기 기록" },
        { title: "행사", desc: "클럽 행사와 특별 활동 스케치" },
        { title: "기타", desc: "선수단의 일상과 팀 문화 기록" },
      ],
      sponsorLabel: "Sponsor",
      sponsorTitle: "클럽 후원",
      sponsorDesc: "선수들의 훈련 환경과 성장 기회를 넓히기 위한 후원 프로그램을 운영합니다.",
      sponsors: [
        { title: "개인 후원", desc: "선수 육성과 운영비 지원에 참여할 수 있습니다." },
        { title: "기업 후원", desc: "지역 기업과 함께 훈련 환경 개선 프로젝트를 진행합니다." },
        { title: "물품 후원", desc: "훈련 장비, 유니폼, 보조 물품 후원으로 현장을 지원합니다." },
      ],
      sponsorCta: "후원 참여하기",
      contactLabel: "Contact",
      contactTitle: "선수 모집 상담",
      contactDesc: "전화 문의와 상담 접수를 통해 테스트 일정과 입단 절차를 자세히 안내합니다.",
      contactCards: [
        { label: "전화 문의", value: "010-4178-0207" },
        { label: "대표", value: "천경필 대표" },
      ],
      contactPrimary: "선수 모집 신청",
      contactSecondary: "문의 남기기",
      promiseLabel: "Club Promise",
      promiseTitleLines: ["훈련의 완성도와", "다음 기회를 함께 준비합니다"],
      promiseDesc: "기본기부터 진학 상담까지 연결된 운영 체계를 통해 선수들이 더 안정적으로 성장할 수 있는 환경을 만듭니다.",
      footerNav: [
        { href: "/club-introduction", label: "클럽소개" },
        { href: "/program", label: "훈련프로그램" },
        { href: "/application", label: "선수모집" },
        { href: "/gallery", label: "갤러리" },
        { href: "/support", label: "후원" },
        { href: "/contact", label: "문의" },
      ],
      footerCopyright: "© 2025 Geumcheon Soccer Club. All rights reserved.",
    },
  },
  en: {
    metaTitle: "Geumcheon Soccer Club",
    metaDescription: "Official homepage of Geumcheon Soccer Club",
    header: {
      clubName: "Geumcheon Soccer Club",
      clubNameEn: "Elite Youth Soccer Academy",
      nav: [
        { href: "/club-introduction", label: "Club" },
        { href: "/program", label: "Programs" },
        { href: "/application", label: "Recruitment" },
        { href: "/gallery", label: "Gallery" },
        { href: "/support", label: "Support" },
        { href: "/contact", label: "Contact" },
      ],
      apply: "Apply Now",
      menu: "Menu",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      closeMobileMenu: "Close mobile menu",
      languageLabel: "Language",
    },
    home: {
      heroBadge: "Elite Youth Soccer Academy",
      heroTitleTop: "GEUMCHEON",
      heroTitleBottom: "SOCCER CLUB",
      heroDesc: "A development-focused academy that combines technical training, tactical understanding, physical growth, and pathway guidance for youth players.",
      heroPrimary: "View Recruitment",
      heroSecondary: "About the Club",
      heroStats: [
        { title: "Middle School", sub: "All grades welcome" },
        { title: "High School", sub: "Grades 1-2 open" },
        { title: "5 Days", sub: "Weekly training" },
        { title: "Indoor / Outdoor", sub: "Dedicated grounds" },
      ],
      clubIdentityLabel: "Club Identity",
      clubIdentityDesc: "We prepare both the player's present growth and next opportunity with a bold team identity.",
      clubStarted: "Club founded",
      summaryCards: [
        { label: "Schedule", value: "Mon-Fri 17:30 - 19:30" },
        { label: "Target", value: "Middle school / High school grades 1-2" },
        { label: "Facilities", value: "Dedicated indoor and outdoor fields" },
        { label: "Inquiry", value: "010-4178-0207" },
      ],
      aboutLabel: "About Club",
      aboutTitle: "Club Introduction",
      aboutDesc: "We support long-term development through a connected system covering fundamentals, match application, and pathway consulting.",
      aboutIdentityTitle: "Train together, grow together",
      aboutIdentityDesc: "The club connects technical detail, tactical understanding, and long-term planning in one stable training structure.",
      aboutFacts: [
        { key: "Founded", value: "Since 2015" },
        { key: "Recruitment", value: "Middle / High school" },
        { key: "Training", value: "5 days a week" },
        { key: "Focus", value: "Training + pathway" },
      ],
      aboutFeatures: [
        { title: "Fundamentals First", desc: "Passing, dribbling, first touch, and directional change are trained in detail." },
        { title: "Professional Coaching", desc: "Structured coaching is tailored to age and development stage." },
        { title: "Dedicated Facilities", desc: "Indoor and outdoor spaces support stable training all year round." },
        { title: "Pathway Support", desc: "Players receive guidance aligned with their academic and career goals." },
      ],
      programLabel: "Training Program",
      programTitle: "Programs",
      programDesc: "A balanced structure of technique, tactics, physical development, and pathway support.",
      programOverviewLabel: "Program Overview",
      programOverviewTitle: "Step-by-step player development",
      programOverviewDesc: "Training links technical repetition, positional tactics, physical work, and match understanding.",
      programPointsTitle: "Key Points",
      programPoints: ["Technical repetition", "Position-based decisions", "Physical and match readiness"],
      programs: [
        { title: "Fundamentals", desc: "Ball control, passing, first touch, and movement" },
        { title: "Defensive and Tactical Work", desc: "Positioning, structure, and transition understanding" },
        { title: "Physical Development", desc: "Speed, agility, and core training" },
        { title: "Pathway Consulting", desc: "School and long-term planning support" },
      ],
      recruitLabel: "Recruit",
      recruitTitle: "Player Recruitment",
      recruitDesc: "We are currently recruiting middle school players and high school grades 1-2, with tests and consultation available.",
      recruitInfo: [
        { label: "Target", value: "Middle school / High school grades 1-2" },
        { label: "Time", value: "Mon-Fri 17:30 - 19:30" },
        { label: "Location", value: "Dedicated indoor and outdoor fields" },
        { label: "Contact", value: "010-4178-0207" },
      ],
      recruitPrimary: "Apply",
      recruitSecondary: "View Notice",
      galleryLabel: "Gallery",
      galleryTitle: "Gallery",
      galleryDesc: "A visual record of training, matches, events, and everyday club moments.",
      galleryCta: "View Full Gallery",
      gallerySections: [
        { title: "Training", desc: "Scenes from focused technical work" },
        { title: "Match", desc: "Records of concentration and teamwork" },
        { title: "Events", desc: "Special club activities and programs" },
        { title: "More", desc: "Everyday moments around the squad" },
      ],
      sponsorLabel: "Sponsor",
      sponsorTitle: "Club Support",
      sponsorDesc: "Support the club's training environment and player opportunities.",
      sponsors: [
        { title: "Individual Support", desc: "Help with player development and operational costs." },
        { title: "Corporate Support", desc: "Partner with the club on local development projects." },
        { title: "Equipment Support", desc: "Support the field with training and team equipment." },
      ],
      sponsorCta: "Become a Supporter",
      contactLabel: "Contact",
      contactTitle: "Recruitment Consultation",
      contactDesc: "Contact us for trial schedules, club details, and participation guidance.",
      contactCards: [
        { label: "Phone", value: "010-4178-0207" },
        { label: "Director", value: "CEO Cheon Gyeong-pil" },
      ],
      contactPrimary: "Apply as Player",
      contactSecondary: "Leave Inquiry",
      promiseLabel: "Club Promise",
      promiseTitleLines: ["We prepare both", "training quality and future opportunities"],
      promiseDesc: "We build an environment where players can grow with more structure and confidence.",
      footerNav: [
        { href: "/club-introduction", label: "Club" },
        { href: "/program", label: "Programs" },
        { href: "/application", label: "Recruitment" },
        { href: "/gallery", label: "Gallery" },
        { href: "/support", label: "Support" },
        { href: "/contact", label: "Contact" },
      ],
      footerCopyright: "© 2025 Geumcheon Soccer Club. All rights reserved.",
    },
  },
  ja: {
    metaTitle: "クムチョンサッカークラブ",
    metaDescription: "クムチョンサッカークラブ公式ホームページ",
    header: {
      clubName: "クムチョンサッカークラブ",
      clubNameEn: "Geumcheon Soccer Club",
      nav: [
        { href: "/club-introduction", label: "クラブ紹介" },
        { href: "/program", label: "プログラム" },
        { href: "/application", label: "選手募集" },
        { href: "/gallery", label: "ギャラリー" },
        { href: "/support", label: "後援" },
        { href: "/contact", label: "お問い合わせ" },
      ],
      apply: "参加申請",
      menu: "メニュー",
      openMenu: "メニューを開く",
      closeMenu: "メニューを閉じる",
      closeMobileMenu: "モバイルメニューを閉じる",
      languageLabel: "言語選択",
    },
    home: {
      heroBadge: "Elite Youth Soccer Academy",
      heroTitleTop: "GEUMCHEON",
      heroTitleBottom: "SOCCER CLUB",
      heroDesc: "基礎技術、戦術理解、フィジカル、進路サポートまでつなぐ育成型サッカークラブです。",
      heroPrimary: "選手募集を見る",
      heroSecondary: "クラブ紹介を見る",
      heroStats: [
        { title: "中等部", sub: "全学年募集" },
        { title: "高等部", sub: "1-2年生募集" },
        { title: "週5回", sub: "定期トレーニング" },
        { title: "屋内・屋外", sub: "専用グラウンド" },
      ],
      clubIdentityLabel: "Club Identity",
      clubIdentityDesc: "力強いチームカラーと成長中心の哲学で現在と次の段階を共に準備します。",
      clubStarted: "クラブ開始",
      summaryCards: [
        { label: "トレーニング", value: "月-金 17:30 - 19:30" },
        { label: "対象", value: "中等部 / 高等部 1-2年生" },
        { label: "環境", value: "専用屋内・屋外グラウンド" },
        { label: "相談", value: "010-4178-0207" },
      ],
      aboutLabel: "About Club",
      aboutTitle: "クラブ紹介",
      aboutDesc: "基礎、試合応用、進路相談まで連結する運営体制で選手の長期成長を支えます。",
      aboutIdentityTitle: "共に練習し、共に成長するクラブ",
      aboutIdentityDesc: "技術、戦術、試合経験、進路計画を一つの安定した育成構造でつなげています。",
      aboutFacts: [
        { key: "創設", value: "Since 2015" },
        { key: "募集", value: "中等部・高等部" },
        { key: "練習", value: "週5回" },
        { key: "方向性", value: "育成・進路連携" },
      ],
      aboutFeatures: [
        { title: "基礎重視", desc: "パス、ドリブル、ファーストタッチを細かく指導します。" },
        { title: "専門コーチング", desc: "年齢と成長段階に合う体系的な指導を行います。" },
        { title: "専用環境", desc: "屋内と屋外を併用して安定した練習環境を整えます。" },
        { title: "進路支援", desc: "選手の目標に合わせた相談と長期設計を行います。" },
      ],
      programLabel: "Training Program",
      programTitle: "トレーニングプログラム",
      programDesc: "基礎、戦術、フィジカル、進路支援をバランスよく構成しています。",
      programOverviewLabel: "Program Overview",
      programOverviewTitle: "成長段階に合う体系的な練習",
      programOverviewDesc: "技術反復、戦術理解、試合対応、フィジカル強化を連結します。",
      programPointsTitle: "主なポイント",
      programPoints: ["基礎技術の反復", "ポジション別判断", "実戦感覚とフィジカル強化"],
      programs: [
        { title: "基礎技術", desc: "ボールコントロール、パス、方向転換" },
        { title: "守備と戦術", desc: "ポジション理解、守備組織、連携" },
        { title: "フィジカル", desc: "スピード、敏捷性、コア強化" },
        { title: "進路相談", desc: "進学と長期成長に向けた相談" },
      ],
      recruitLabel: "Recruit",
      recruitTitle: "選手募集案内",
      recruitDesc: "中等部全学年と高等部1-2年生を募集しており、テストと相談を通じて入団案内を行います。",
      recruitInfo: [
        { label: "対象", value: "中等部 / 高等部 1-2年生" },
        { label: "時間", value: "月-金 17:30 - 19:30" },
        { label: "場所", value: "専用屋内・屋外グラウンド" },
        { label: "問い合わせ", value: "010-4178-0207" },
      ],
      recruitPrimary: "入団申請",
      recruitSecondary: "募集案内を見る",
      galleryLabel: "Gallery",
      galleryTitle: "ギャラリー",
      galleryDesc: "練習、試合、行事などクラブの雰囲気を確認できる記録空間です。",
      galleryCta: "ギャラリーを見る",
      gallerySections: [
        { title: "練習", desc: "技術と戦術がつながる練習風景" },
        { title: "試合", desc: "集中力とチームワークが見える記録" },
        { title: "行事", desc: "特別活動やクラブイベント" },
        { title: "その他", desc: "チームの日常と文化" },
      ],
      sponsorLabel: "Sponsor",
      sponsorTitle: "クラブ後援",
      sponsorDesc: "選手たちの環境と機会を広げるための後援プログラムです。",
      sponsors: [
        { title: "個人後援", desc: "選手育成と運営支援に参加できます。" },
        { title: "企業後援", desc: "地域企業と共に育成環境を整えます。" },
        { title: "物品後援", desc: "練習用品やユニフォーム支援ができます。" },
      ],
      sponsorCta: "後援に参加する",
      contactLabel: "Contact",
      contactTitle: "選手募集相談",
      contactDesc: "テスト日程、入団手続き、クラブ情報について詳しくご案内します。",
      contactCards: [
        { label: "電話", value: "010-4178-0207" },
        { label: "代表", value: "チョン・ギョンピル代表" },
      ],
      contactPrimary: "申請する",
      contactSecondary: "問い合わせを残す",
      promiseLabel: "Club Promise",
      promiseTitleLines: ["練習の完成度と", "次の機会を共に準備します"],
      promiseDesc: "基礎から進路相談までつながる運営で、選手の安定した成長を支えます。",
      footerNav: [
        { href: "/club-introduction", label: "クラブ紹介" },
        { href: "/program", label: "プログラム" },
        { href: "/application", label: "選手募集" },
        { href: "/gallery", label: "ギャラリー" },
        { href: "/support", label: "後援" },
        { href: "/contact", label: "お問い合わせ" },
      ],
      footerCopyright: "© 2025 Geumcheon Soccer Club. All rights reserved.",
    },
  },
  zh: {
    metaTitle: "金泉足球俱乐部",
    metaDescription: "金泉足球俱乐部官方网站",
    header: {
      clubName: "金泉足球俱乐部",
      clubNameEn: "Geumcheon Soccer Club",
      nav: [
        { href: "/club-introduction", label: "俱乐部介绍" },
        { href: "/program", label: "训练项目" },
        { href: "/application", label: "球员招募" },
        { href: "/gallery", label: "相册" },
        { href: "/support", label: "赞助" },
        { href: "/contact", label: "联系我们" },
      ],
      apply: "申请参加",
      menu: "菜单",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
      closeMobileMenu: "关闭移动菜单",
      languageLabel: "语言选择",
    },
    home: {
      heroBadge: "Elite Youth Soccer Academy",
      heroTitleTop: "GEUMCHEON",
      heroTitleBottom: "SOCCER CLUB",
      heroDesc: "以基础技术、战术理解、体能成长和升学支持为核心的青训足球俱乐部。",
      heroPrimary: "查看招募",
      heroSecondary: "查看俱乐部介绍",
      heroStats: [
        { title: "初中部", sub: "全年级招募" },
        { title: "高中部", sub: "1-2年级招募" },
        { title: "每周5次", sub: "固定训练" },
        { title: "室内·室外", sub: "专用场地" },
      ],
      clubIdentityLabel: "Club Identity",
      clubIdentityDesc: "以鲜明的球队风格和成长理念，帮助球员准备当下与下一阶段。",
      clubStarted: "俱乐部创立",
      summaryCards: [
        { label: "训练时间", value: "周一至周五 17:30 - 19:30" },
        { label: "招募对象", value: "初中部 / 高中部 1-2年级" },
        { label: "训练环境", value: "专用室内与室外场地" },
        { label: "咨询电话", value: "010-4178-0207" },
      ],
      aboutLabel: "About Club",
      aboutTitle: "俱乐部介绍",
      aboutDesc: "通过基础训练、比赛应用和升学咨询相结合的体系，支持球员长期成长。",
      aboutIdentityTitle: "一起训练，一起成长",
      aboutIdentityDesc: "将技术、战术、比赛经验和长期规划结合为稳定的培养结构。",
      aboutFacts: [
        { key: "创立", value: "Since 2015" },
        { key: "招募", value: "初中部·高中部" },
        { key: "训练", value: "每周5次" },
        { key: "方向", value: "训练·升学联动" },
      ],
      aboutFeatures: [
        { title: "重视基础", desc: "细致训练传球、盘带、第一脚触球和变向。" },
        { title: "专业指导", desc: "根据年龄和成长阶段提供系统训练。" },
        { title: "专用环境", desc: "结合室内与室外场地，维持稳定训练节奏。" },
        { title: "升学支持", desc: "根据球员目标提供咨询与长期规划。" },
      ],
      programLabel: "Training Program",
      programTitle: "训练项目",
      programDesc: "均衡配置基础、战术、体能和升学支持内容。",
      programOverviewLabel: "Program Overview",
      programOverviewTitle: "符合成长阶段的系统训练",
      programOverviewDesc: "把技术重复、战术理解、比赛应对和体能强化连接起来。",
      programPointsTitle: "重点内容",
      programPoints: ["基础技术反复训练", "位置判断与战术理解", "比赛感与体能强化"],
      programs: [
        { title: "基础训练", desc: "控球、传球、第一脚触球和变向" },
        { title: "防守与战术", desc: "位置、结构和转换理解" },
        { title: "体能强化", desc: "速度、敏捷和核心训练" },
        { title: "升学咨询", desc: "面向长期成长的升学规划支持" },
      ],
      recruitLabel: "Recruit",
      recruitTitle: "球员招募说明",
      recruitDesc: "目前招募初中部全部年级和高中部1-2年级球员，可通过测试与咨询完成入队流程。",
      recruitInfo: [
        { label: "对象", value: "初中部 / 高中部 1-2年级" },
        { label: "时间", value: "周一至周五 17:30 - 19:30" },
        { label: "地点", value: "专用室内与室外场地" },
        { label: "联系", value: "010-4178-0207" },
      ],
      recruitPrimary: "申请入队",
      recruitSecondary: "查看公告",
      galleryLabel: "Gallery",
      galleryTitle: "相册",
      galleryDesc: "可一目了然地查看训练、比赛、活动等俱乐部真实氛围的记录空间。",
      galleryCta: "查看全部相册",
      gallerySections: [
        { title: "训练", desc: "体现技术与战术连接的训练场景" },
        { title: "比赛", desc: "展现专注力与团队合作的记录" },
        { title: "活动", desc: "特别活动与俱乐部项目" },
        { title: "其他", desc: "球队日常与文化记录" },
      ],
      sponsorLabel: "Sponsor",
      sponsorTitle: "俱乐部赞助",
      sponsorDesc: "为球员训练环境和成长机会提供支持的赞助计划。",
      sponsors: [
        { title: "个人赞助", desc: "可参与球员培养与运营支持。" },
        { title: "企业赞助", desc: "与地区企业合作改善训练环境。" },
        { title: "物资赞助", desc: "通过训练器材和队服支持现场运营。" },
      ],
      sponsorCta: "参与赞助",
      contactLabel: "Contact",
      contactTitle: "球员招募咨询",
      contactDesc: "欢迎咨询测试安排、入队流程及俱乐部详细信息。",
      contactCards: [
        { label: "电话", value: "010-4178-0207" },
        { label: "代表", value: "千京弼 代表" },
      ],
      contactPrimary: "提交申请",
      contactSecondary: "留下咨询",
      promiseLabel: "Club Promise",
      promiseTitleLines: ["我们一起准备", "训练质量与下一次机会"],
      promiseDesc: "从基础训练到升学咨询，我们提供稳定而清晰的成长环境。",
      footerNav: [
        { href: "/club-introduction", label: "俱乐部介绍" },
        { href: "/program", label: "训练项目" },
        { href: "/application", label: "球员招募" },
        { href: "/gallery", label: "相册" },
        { href: "/support", label: "赞助" },
        { href: "/contact", label: "联系我们" },
      ],
      footerCopyright: "© 2025 Geumcheon Soccer Club. All rights reserved.",
    },
  },
};

type SiteLanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  locales: LocaleOption[];
  dictionary: SiteDictionary;
};

const SiteLanguageContext = React.createContext<SiteLanguageContextValue | null>(null);

const STORAGE_KEY = "gssc-locale";

export function SiteLanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>("ko");

  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && stored in dictionaries) {
      setLocaleState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLocale = React.useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    document.documentElement.lang = nextLocale;
  }, []);

  const value = React.useMemo(
    () => ({
      locale,
      setLocale,
      locales: localeOptions,
      dictionary: dictionaries[locale],
    }),
    [locale, setLocale],
  );

  return <SiteLanguageContext.Provider value={value}>{children}</SiteLanguageContext.Provider>;
}

export function useSiteLanguage() {
  const context = React.useContext(SiteLanguageContext);
  if (!context) {
    throw new Error("useSiteLanguage must be used within SiteLanguageProvider");
  }
  return context;
}

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
  { code: "zh", label: "中文", shortLabel: "CN" },
];

const dictionaries: Record<Locale, SiteDictionary> = {
  ko: {
    metaTitle: "서울금천축구클럽",
    metaDescription: "서울금천축구클럽 공식 홈페이지 시안",
    header: {
      clubName: "서울금천축구클럽",
      clubNameEn: "Geumcheon Soccer Club",
      nav: [
        { href: "/club-introduction", label: "클럽소개" },
        { href: "/program", label: "훈련프로그램" },
        { href: "/application", label: "선수모집" },
        { href: "/gallery", label: "갤러리" },
        { href: "/contact", label: "후원" },
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
        "서울금천축구클럽은 중등부·고등부 선수를 대상으로 기본기, 포지션별 전술, 피지컬, 진학 연계를 함께 운영하는 성장형 축구클럽입니다. 선수 한 명 한 명의 현재 수준과 목표에 맞춰 체계적인 훈련 환경을 제공합니다.",
      heroPrimary: "선수 모집 바로가기",
      heroSecondary: "클럽 소개 보기",
      heroStats: [
        { title: "중등부", sub: "전학년 모집" },
        { title: "고등부", sub: "1·2학년 모집" },
        { title: "주 5회", sub: "정규 훈련 운영" },
        { title: "실내·실외", sub: "전용 구장 활용" },
      ],
      clubIdentityLabel: "Club Identity",
      clubIdentityDesc: "엠블럼 중심형 비주얼과 강한 스포츠 무드를 결합한 메인 브랜딩 블록",
      clubStarted: "클럽 운영 시작",
      summaryCards: [
        { label: "훈련 운영", value: "월 ~ 금 17:30 - 19:30" },
        { label: "주요 대상", value: "중등부 전학년 / 고등부 1·2학년" },
        { label: "훈련 환경", value: "전용 실내구장 및 실외구장" },
        { label: "상담 문의", value: "010-4178-0207" },
      ],
      aboutLabel: "About Club",
      aboutTitle: "클럽 소개",
      aboutDesc:
        "서울금천축구클럽은 기술 완성과 경기 이해도 향상을 바탕으로, 선수의 현재 성장과 다음 단계를 함께 준비하는 것을 목표로 합니다. 기초 훈련, 실전 적용, 진학 연계를 유기적으로 연결해 안정적인 성장을 지원합니다.",
      aboutIdentityTitle: "함께 뛰고 함께 성장하는 서울금천축구클럽",
      aboutIdentityDesc:
        "기본기의 완성에서 출발해 포지션별 디테일, 실전 감각, 피지컬 보강, 진학 준비까지 이어지는 훈련 구조를 운영합니다. 선수 스스로의 성장과 팀 플레이의 균형을 함께 만들어가는 클럽입니다.",
      aboutFacts: [
        { key: "창단", value: "Since 2015" },
        { key: "모집", value: "중등부 · 고등부" },
        { key: "훈련", value: "주 5회 운영" },
        { key: "방향", value: "훈련 · 진학 연계" },
      ],
      aboutFeatures: [
        { title: "기본기 중심 훈련", desc: "패스, 퍼스트터치, 드리블, 방향 전환 등 경기력의 기초를 세밀하게 훈련합니다." },
        { title: "전문 코칭 시스템", desc: "학년과 성장 단계에 맞춘 체계적 지도와 반복 피드백으로 선수 완성도를 높입니다." },
        { title: "전용 훈련 환경", desc: "실내·실외 구장을 병행 활용하여 시즌과 날씨에 맞는 안정적인 훈련을 운영합니다." },
        { title: "진학 연계 지원", desc: "선수의 목표에 따라 진학 상담과 장기 성장 방향을 함께 설계합니다." },
      ],
      programLabel: "Training Program",
      programTitle: "훈련 프로그램",
      programDesc: "연령과 성장 단계에 맞춰 기본기 훈련, 포지션별 전술, 피지컬 강화, 진학 상담을 유기적으로 연결한 프로그램을 운영합니다.",
      programOverviewLabel: "Program Overview",
      programOverviewTitle: "선수 성장에 맞춘 단계별 훈련",
      programOverviewDesc: "기술 훈련과 전술 이해를 기본으로 하며, 실전 대응 능력과 피지컬 보강을 병행합니다. 선수의 목표에 따라 진학 준비와 장기 로드맵까지 함께 설계합니다.",
      programPointsTitle: "주요 포인트",
      programPoints: [
        "기본기와 볼 감각 중심의 반복 훈련 운영",
        "포지션별 상황 판단과 전술 이해 강화",
        "피지컬 보강 및 진학 연계 상담 지원",
      ],
      programs: [
        { title: "기본기 집중 세션", desc: "볼 컨트롤, 패스, 첫 터치, 밸런스와 방향 전환 중심의 반복 훈련" },
        { title: "포지션별 디테일 훈련", desc: "공격, 미드필드, 수비 역할별 상황 판단과 전술 이해 훈련" },
        { title: "피지컬 · 스피드 강화", desc: "성장기 선수에게 필요한 민첩성, 코어, 스피드 보강 프로그램 운영" },
        { title: "진학 · 진로 컨설팅", desc: "선수 목표에 맞춘 진학 설계와 장기 커리어 로드맵 지원" },
      ],
      recruitLabel: "Recruit",
      recruitTitle: "선수 모집 안내",
      recruitDesc: "서울금천축구클럽은 중등부 전학년, 고등부 1·2학년 선수를 모집하고 있습니다. 훈련 참여와 상담은 아래 모집 안내를 통해 확인하실 수 있습니다.",
      recruitInfo: [
        { label: "모집대상", value: "중등부 전학년 / 고등부 1·2학년" },
        { label: "훈련시간", value: "월 ~ 금 17:30 ~ 19:30" },
        { label: "훈련장소", value: "전용 실내 및 실외 구장" },
        { label: "상담문의", value: "010-4178-0207" },
      ],
      recruitPrimary: "참가 신청",
      recruitSecondary: "모집 요강 보기",
      galleryLabel: "Gallery Preview",
      galleryTitle: "훈련 갤러리",
      galleryDesc: "훈련 집중도, 전술 훈련, 피지컬 세션, 팀워크 장면을 중심으로 클럽의 실제 분위기를 보여주는 미리보기 영역입니다.",
      galleryCta: "전체 갤러리 보기",
      gallerySections: [
        { title: "훈련 집중도", desc: "반복 훈련 속에서 기술 완성도를 높이는 현장 장면입니다." },
        { title: "전술 훈련", desc: "포지션 이해와 팀 밸런스를 맞추는 전술 세션을 보여줍니다." },
        { title: "피지컬 세션", desc: "스피드와 민첩성, 체력 기반을 만드는 피지컬 프로그램입니다." },
        { title: "팀워크", desc: "선수 간 호흡과 경기 몰입도를 높이는 팀 세션을 담았습니다." },
      ],
      sponsorLabel: "Sponsor",
      sponsorTitle: "클럽 후원",
      sponsorDesc: "선수들의 훈련 환경 개선과 성장을 위해 후원 프로그램을 운영합니다.",
      sponsors: [
        { title: "개인 후원", desc: "선수 장학 지원과 훈련 운영비 보강에 참여할 수 있습니다." },
        { title: "기업 후원", desc: "지역 기업과의 파트너십으로 훈련 환경과 클럽 운영을 함께 만듭니다." },
        { title: "훈련 장비 후원", desc: "훈련용품, 유니폼, 회복 장비 후원으로 선수들의 현장을 직접 지원합니다." },
      ],
      sponsorCta: "후원 참여하기",
      contactLabel: "Contact",
      contactTitle: "선수 모집 상담",
      contactDesc: "전화 문의와 상담 접수를 통해 테스트 일정과 훈련 참여 절차를 자세히 안내해드립니다.",
      contactCards: [
        { label: "전화 문의", value: "010-4178-0207" },
        { label: "담당자", value: "천경필 대표" },
      ],
      contactPrimary: "선수 모집 지원",
      contactSecondary: "문의 남기기",
      promiseLabel: "Club Promise",
      promiseTitleLines: ["훈련의 완성도와 다음", "기회를 함께 준비합니다"],
      promiseDesc: "기본기 훈련부터 진학 상담까지 이어지는 운영 체계를 통해 선수들이 더 안정적으로 성장할 수 있는 환경을 만들고 있습니다.",
      footerNav: [
        { href: "/club-introduction", label: "클럽소개" },
        { href: "/program", label: "훈련프로그램" },
        { href: "/application", label: "선수모집" },
        { href: "/gallery", label: "갤러리" },
        { href: "/contact", label: "후원" },
        { href: "/contact", label: "문의" },
      ],
      footerCopyright: "© 2025 Geumcheon Soccer Club. All rights reserved.",
    },
  },
  en: {
    metaTitle: "Geumcheon Soccer Club",
    metaDescription: "Official homepage concept for Geumcheon Soccer Club",
    header: {
      clubName: "Geumcheon Soccer Club",
      clubNameEn: "Elite Youth Soccer Academy",
      nav: [
        { href: "/club-introduction", label: "Club" },
        { href: "/program", label: "Programs" },
        { href: "/application", label: "Apply" },
        { href: "/gallery", label: "Gallery" },
        { href: "/contact", label: "Support" },
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
      heroDesc: "Geumcheon Soccer Club is a development-focused academy for middle and high school players, combining technical work, position-based tactics, physical training, and academic pathway guidance in one structured environment.",
      heroPrimary: "Player Recruitment",
      heroSecondary: "About the Club",
      heroStats: [
        { title: "Middle School", sub: "All grades welcome" },
        { title: "High School", sub: "Grades 1-2 open" },
        { title: "5 Days", sub: "Weekly training" },
        { title: "Indoor / Outdoor", sub: "Dedicated grounds" },
      ],
      clubIdentityLabel: "Club Identity",
      clubIdentityDesc: "A bold hero block built around the club emblem and a strong competitive sports mood.",
      clubStarted: "Club founded",
      summaryCards: [
        { label: "Training Schedule", value: "Mon - Fri 17:30 - 19:30" },
        { label: "Target Players", value: "Middle school / High school grades 1-2" },
        { label: "Training Environment", value: "Dedicated indoor and outdoor fields" },
        { label: "Inquiries", value: "010-4178-0207" },
      ],
      aboutLabel: "About Club",
      aboutTitle: "Club Introduction",
      aboutDesc: "The club helps players build strong fundamentals, improve game understanding, and prepare confidently for their next stage through connected training, match application, and school advancement support.",
      aboutIdentityTitle: "Train together, grow together at Geumcheon Soccer Club",
      aboutIdentityDesc: "Our structure connects fundamentals, positional details, match awareness, physical development, and long-term pathway planning into one stable growth system.",
      aboutFacts: [
        { key: "Founded", value: "Since 2015" },
        { key: "Recruitment", value: "Middle / High school" },
        { key: "Training", value: "5 days a week" },
        { key: "Focus", value: "Training + pathway" },
      ],
      aboutFeatures: [
        { title: "Fundamentals First", desc: "Passing, first touch, dribbling, and directional changes are trained in detail." },
        { title: "Professional Coaching", desc: "Structured coaching and repeated feedback help players progress by age and stage." },
        { title: "Dedicated Facilities", desc: "Indoor and outdoor fields are used together for stable training across seasons." },
        { title: "Pathway Support", desc: "Players receive guidance aligned with their academic and career goals." },
      ],
      programLabel: "Training Program",
      programTitle: "Programs",
      programDesc: "Our program combines technical development, positional tactics, physical growth, and pathway consulting according to each player's stage.",
      programOverviewLabel: "Program Overview",
      programOverviewTitle: "Step-by-step training for player growth",
      programOverviewDesc: "We combine technical repetition, tactical understanding, match response, and physical development while also supporting long-term planning.",
      programPointsTitle: "Key Points",
      programPoints: [
        "Repetition-centered technical training",
        "Position-specific decision making and tactical understanding",
        "Physical development with pathway consulting",
      ],
      programs: [
        { title: "Fundamentals Session", desc: "Ball control, passing, first touch, balance, and turning drills" },
        { title: "Position Detail Training", desc: "Role-specific decisions and tactical understanding for each area of the pitch" },
        { title: "Physical and Speed Work", desc: "Agility, core strength, and speed work designed for growing athletes" },
        { title: "Academic Pathway Consulting", desc: "Long-term school and career planning aligned with player goals" },
      ],
      recruitLabel: "Recruit",
      recruitTitle: "Player Recruitment",
      recruitDesc: "We are currently recruiting players from all middle school grades and high school grades 1-2. Training participation and consultation details are available below.",
      recruitInfo: [
        { label: "Target", value: "All middle school / High school grades 1-2" },
        { label: "Schedule", value: "Mon - Fri 17:30 - 19:30" },
        { label: "Location", value: "Dedicated indoor and outdoor fields" },
        { label: "Contact", value: "010-4178-0207" },
      ],
      recruitPrimary: "Apply",
      recruitSecondary: "View Details",
      galleryLabel: "Gallery Preview",
      galleryTitle: "Training Gallery",
      galleryDesc: "A quick look at the real atmosphere of the club through training intensity, tactical work, physical sessions, and teamwork.",
      galleryCta: "View Full Gallery",
      gallerySections: [
        { title: "Focus", desc: "Scenes that show repeated work to sharpen technical quality." },
        { title: "Tactics", desc: "Sessions focused on positional understanding and team balance." },
        { title: "Physical Work", desc: "Programs that build speed, agility, and stamina." },
        { title: "Teamwork", desc: "Moments that show chemistry and match concentration." },
      ],
      sponsorLabel: "Sponsor",
      sponsorTitle: "Club Support",
      sponsorDesc: "Support programs help improve training conditions and player development.",
      sponsors: [
        { title: "Individual Support", desc: "Contribute to player scholarships and operating costs." },
        { title: "Corporate Support", desc: "Partner with the club to improve the training environment." },
        { title: "Equipment Support", desc: "Provide training gear, uniforms, and recovery equipment." },
      ],
      sponsorCta: "Join as a Supporter",
      contactLabel: "Contact",
      contactTitle: "Recruitment Consultation",
      contactDesc: "Call or leave an inquiry to receive detailed guidance on trials and participation steps.",
      contactCards: [
        { label: "Phone", value: "010-4178-0207" },
        { label: "Director", value: "CEO Cheon Gyeong-pil" },
      ],
      contactPrimary: "Apply as Player",
      contactSecondary: "Leave Inquiry",
      promiseLabel: "Club Promise",
      promiseTitleLines: ["We prepare both", "training quality and next opportunities"],
      promiseDesc: "From fundamentals to pathway guidance, we build an environment where players can grow with more stability and clarity.",
      footerNav: [
        { href: "/club-introduction", label: "Club" },
        { href: "/program", label: "Programs" },
        { href: "/application", label: "Apply" },
        { href: "/gallery", label: "Gallery" },
        { href: "/contact", label: "Support" },
        { href: "/contact", label: "Contact" },
      ],
      footerCopyright: "© 2025 Geumcheon Soccer Club. All rights reserved.",
    },
  },
  ja: {
    metaTitle: "クムチョンサッカークラブ",
    metaDescription: "クムチョンサッカークラブ公式ホームページ案",
    header: {
      clubName: "クムチョンサッカークラブ",
      clubNameEn: "Geumcheon Soccer Club",
      nav: [
        { href: "/club-introduction", label: "クラブ紹介" },
        { href: "/program", label: "トレーニング" },
        { href: "/application", label: "募集案内" },
        { href: "/gallery", label: "ギャラリー" },
        { href: "/contact", label: "後援" },
        { href: "/contact", label: "お問い合わせ" },
      ],
      apply: "申込はこちら",
      menu: "メニュー",
      openMenu: "メニューを開く",
      closeMenu: "メニューを閉じる",
      closeMobileMenu: "モバイルメニューを閉じる",
      languageLabel: "言語",
    },
    home: {
      heroBadge: "Elite Youth Soccer Academy",
      heroTitleTop: "GEUMCHEON",
      heroTitleBottom: "SOCCER CLUB",
      heroDesc: "クムチョンサッカークラブは、中高生選手を対象に、基礎技術、ポジション別戦術、フィジカル強化、進路相談を一体で運営する成長型サッカークラブです。",
      heroPrimary: "選手募集を見る",
      heroSecondary: "クラブ紹介を見る",
      heroStats: [
        { title: "中学部", sub: "全学年募集" },
        { title: "高校部", sub: "1・2年生募集" },
        { title: "週5回", sub: "定期トレーニング" },
        { title: "屋内・屋外", sub: "専用グラウンド" },
      ],
      clubIdentityLabel: "Club Identity",
      clubIdentityDesc: "エンブレムを中心にした、力強いスポーツムードのメインビジュアルです。",
      clubStarted: "クラブ運営開始",
      summaryCards: [
        { label: "トレーニング", value: "月 - 金 17:30 - 19:30" },
        { label: "対象", value: "中学部全学年 / 高校部1・2年" },
        { label: "環境", value: "専用屋内・屋外グラウンド" },
        { label: "相談", value: "010-4178-0207" },
      ],
      aboutLabel: "About Club",
      aboutTitle: "クラブ紹介",
      aboutDesc: "技術完成度と試合理解を高めながら、現在の成長と次のステージ準備を同時に支えることを目指しています。",
      aboutIdentityTitle: "ともに走り、ともに成長するクラブ",
      aboutIdentityDesc: "基礎、ポジション別ディテール、実戦感覚、フィジカル補強、進路準備までつながる構造を運営しています。",
      aboutFacts: [
        { key: "創設", value: "Since 2015" },
        { key: "募集", value: "中学部・高校部" },
        { key: "練習", value: "週5回" },
        { key: "方向", value: "練習・進路連携" },
      ],
      aboutFeatures: [
        { title: "基礎技術中心", desc: "パス、ファーストタッチ、ドリブル、方向転換を細かく鍛えます。" },
        { title: "専門コーチング", desc: "成長段階に合わせた体系的な指導と反復フィードバックを行います。" },
        { title: "専用環境", desc: "屋内外グラウンドを併用し、安定した練習環境を提供します。" },
        { title: "進路支援", desc: "選手の目標に合わせて進学相談と長期設計を支援します。" },
      ],
      programLabel: "Training Program",
      programTitle: "トレーニングプログラム",
      programDesc: "年齢と成長段階に応じて、基礎技術、戦術、フィジカル、進路相談を有機的に結びます。",
      programOverviewLabel: "Program Overview",
      programOverviewTitle: "成長段階に合わせた練習",
      programOverviewDesc: "技術、戦術理解、実戦対応、フィジカル補強を組み合わせ、長期ロードマップも支援します。",
      programPointsTitle: "主なポイント",
      programPoints: [
        "基礎技術とボール感覚の反復練習",
        "ポジション別の判断力と戦術理解強化",
        "フィジカル補強と進路相談",
      ],
      programs: [
        { title: "基礎集中セッション", desc: "ボールコントロール、パス、ファーストタッチ、バランス、方向転換" },
        { title: "ポジション別トレーニング", desc: "攻撃・中盤・守備の役割別判断と戦術理解" },
        { title: "フィジカル・スピード強化", desc: "成長期の選手に必要な敏捷性、体幹、スピード強化" },
        { title: "進学・進路コンサルティング", desc: "選手目標に合わせた長期的な進路設計" },
      ],
      recruitLabel: "Recruit",
      recruitTitle: "選手募集案内",
      recruitDesc: "中学部全学年、高校部1・2年生を募集しています。練習参加と相談は下記をご確認ください。",
      recruitInfo: [
        { label: "対象", value: "中学部全学年 / 高校部1・2年" },
        { label: "時間", value: "月 - 金 17:30 - 19:30" },
        { label: "場所", value: "専用屋内・屋外グラウンド" },
        { label: "相談", value: "010-4178-0207" },
      ],
      recruitPrimary: "参加申込",
      recruitSecondary: "募集要項を見る",
      galleryLabel: "Gallery Preview",
      galleryTitle: "トレーニングギャラリー",
      galleryDesc: "集中力、戦術練習、フィジカル、チームワークを通してクラブの雰囲気を紹介します。",
      galleryCta: "ギャラリーを見る",
      gallerySections: [
        { title: "集中度", desc: "反復練習の中で技術完成度を高める場面です。" },
        { title: "戦術練習", desc: "ポジション理解とチームバランスを整えるセッションです。" },
        { title: "フィジカル", desc: "スピード、敏捷性、持久力の土台を作るプログラムです。" },
        { title: "チームワーク", desc: "連携と試合没入度を高める場面を紹介します。" },
      ],
      sponsorLabel: "Sponsor",
      sponsorTitle: "クラブ後援",
      sponsorDesc: "選手の練習環境改善と成長のための後援プログラムを運営しています。",
      sponsors: [
        { title: "個人後援", desc: "奨学支援や運営費強化に参加できます。" },
        { title: "企業後援", desc: "地域企業との連携で練習環境とクラブ運営を支えます。" },
        { title: "用具後援", desc: "トレーニング用品やユニフォーム、回復機材を支援できます。" },
      ],
      sponsorCta: "後援に参加する",
      contactLabel: "Contact",
      contactTitle: "選手募集相談",
      contactDesc: "電話相談や問い合わせ受付を通して、テスト日程と参加手順をご案内します。",
      contactCards: [
        { label: "電話", value: "010-4178-0207" },
        { label: "担当者", value: "チョン・ギョンピル代表" },
      ],
      contactPrimary: "選手募集支援",
      contactSecondary: "問い合わせを残す",
      promiseLabel: "Club Promise",
      promiseTitleLines: ["練習の完成度と次の", "チャンスをともに準備します"],
      promiseDesc: "基礎練習から進路相談までつながる運営体制で、より安定した成長環境を作っています。",
      footerNav: [
        { href: "/club-introduction", label: "クラブ紹介" },
        { href: "/program", label: "トレーニング" },
        { href: "/application", label: "募集案内" },
        { href: "/gallery", label: "ギャラリー" },
        { href: "/contact", label: "後援" },
        { href: "/contact", label: "お問い合わせ" },
      ],
      footerCopyright: "© 2025 Geumcheon Soccer Club. All rights reserved.",
    },
  },
  zh: {
    metaTitle: "衿川足球俱乐部",
    metaDescription: "衿川足球俱乐部官网页面方案",
    header: {
      clubName: "衿川足球俱乐部",
      clubNameEn: "Geumcheon Soccer Club",
      nav: [
        { href: "/club-introduction", label: "俱乐部介绍" },
        { href: "/program", label: "训练项目" },
        { href: "/application", label: "招生报名" },
        { href: "/gallery", label: "相册" },
        { href: "/contact", label: "赞助" },
        { href: "/contact", label: "联系" },
      ],
      apply: "立即申请",
      menu: "菜单",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
      closeMobileMenu: "关闭移动菜单",
      languageLabel: "语言",
    },
    home: {
      heroBadge: "Elite Youth Soccer Academy",
      heroTitleTop: "GEUMCHEON",
      heroTitleBottom: "SOCCER CLUB",
      heroDesc: "衿川足球俱乐部面向初中和高中球员，提供基础技术、位置战术、体能强化和升学衔接的一体化成长训练环境。",
      heroPrimary: "查看招生",
      heroSecondary: "查看俱乐部介绍",
      heroStats: [
        { title: "初中部", sub: "全年级招生" },
        { title: "高中部", sub: "高一至高二招生" },
        { title: "每周5次", sub: "固定训练" },
        { title: "室内外", sub: "专用场地" },
      ],
      clubIdentityLabel: "Club Identity",
      clubIdentityDesc: "以队徽为中心，结合强烈竞技氛围的主视觉区块。",
      clubStarted: "俱乐部成立",
      summaryCards: [
        { label: "训练安排", value: "周一至周五 17:30 - 19:30" },
        { label: "主要对象", value: "初中部 / 高中一二年级" },
        { label: "训练环境", value: "专用室内与室外球场" },
        { label: "咨询电话", value: "010-4178-0207" },
      ],
      aboutLabel: "About Club",
      aboutTitle: "俱乐部介绍",
      aboutDesc: "俱乐部以提升技术完成度和比赛理解力为核心，同时帮助球员为下一阶段做好准备。",
      aboutIdentityTitle: "一起训练，一起成长的衿川足球俱乐部",
      aboutIdentityDesc: "从基础、位置细节、实战感觉、体能强化到升学准备，形成一套连贯的成长系统。",
      aboutFacts: [
        { key: "创立", value: "Since 2015" },
        { key: "招生", value: "初中部 · 高中部" },
        { key: "训练", value: "每周5次" },
        { key: "方向", value: "训练与升学衔接" },
      ],
      aboutFeatures: [
        { title: "基础技术训练", desc: "细致训练传球、第一脚触球、盘带和转向等基本能力。" },
        { title: "专业教练体系", desc: "按照年龄和成长阶段提供系统指导与重复反馈。" },
        { title: "专用训练环境", desc: "结合室内与室外场地，保证四季稳定训练。" },
        { title: "升学衔接支持", desc: "根据球员目标设计长期升学与成长方向。" },
      ],
      programLabel: "Training Program",
      programTitle: "训练项目",
      programDesc: "根据年龄和成长阶段，将基础训练、位置战术、体能强化与升学咨询有机结合。",
      programOverviewLabel: "Program Overview",
      programOverviewTitle: "贴合成长阶段的训练结构",
      programOverviewDesc: "以技术和战术理解为基础，同时提升实战应对与体能，并支持长期发展规划。",
      programPointsTitle: "核心重点",
      programPoints: [
        "以基本功和球感为核心的重复训练",
        "加强位置判断和战术理解",
        "体能补强与升学咨询支持",
      ],
      programs: [
        { title: "基础强化课程", desc: "球感、传球、第一脚处理、平衡和转向训练" },
        { title: "位置细节训练", desc: "前场、中场、防守各角色的判断与战术理解" },
        { title: "体能与速度强化", desc: "为成长阶段球员设计的敏捷、核心和速度训练" },
        { title: "升学与发展咨询", desc: "结合球员目标制定长期升学和发展路线" },
      ],
      recruitLabel: "Recruit",
      recruitTitle: "招生 안내",
      recruitDesc: "目前招募初中部全年级及高中一二年级球员，可通过下方查看训练参与与咨询信息。",
      recruitInfo: [
        { label: "招生对象", value: "初中部全年级 / 高中一二年级" },
        { label: "训练时间", value: "周一至周五 17:30 - 19:30" },
        { label: "训练地点", value: "专用室内及室外场地" },
        { label: "咨询电话", value: "010-4178-0207" },
      ],
      recruitPrimary: "报名申请",
      recruitSecondary: "查看招生细则",
      galleryLabel: "Gallery Preview",
      galleryTitle: "训练相册",
      galleryDesc: "通过专注度、战术训练、体能课程和团队配合，展示俱乐部真实氛围。",
      galleryCta: "查看全部相册",
      gallerySections: [
        { title: "专注训练", desc: "展示在重复训练中提升技术完成度的现场画面。" },
        { title: "战术训练", desc: "展示提升位置理解和团队平衡的战术课程。" },
        { title: "体能课程", desc: "打造速度、敏捷和体能基础的项目。" },
        { title: "团队合作", desc: "展示提高配合与比赛投入度的团队场景。" },
      ],
      sponsorLabel: "Sponsor",
      sponsorTitle: "俱乐部赞助",
      sponsorDesc: "通过赞助项目改善训练环境并支持球员成长。",
      sponsors: [
        { title: "个人赞助", desc: "可参与奖学金支持与训练运营补强。" },
        { title: "企业赞助", desc: "与本地企业合作，共同建设训练环境和俱乐部运营。" },
        { title: "训练装备赞助", desc: "通过训练器材、队服和恢复设备直接支持球员。" },
      ],
      sponsorCta: "参与赞助",
      contactLabel: "Contact",
      contactTitle: "招生咨询",
      contactDesc: "通过电话与咨询申请，可详细了解测试安排与训练参与流程。",
      contactCards: [
        { label: "电话咨询", value: "010-4178-0207" },
        { label: "负责人", value: "千京弼代表" },
      ],
      contactPrimary: "球员报名",
      contactSecondary: "留下咨询",
      promiseLabel: "Club Promise",
      promiseTitleLines: ["我们一起准备", "训练质量与下一次机会"],
      promiseDesc: "从基础训练到升学咨询，我们通过连贯的运营体系为球员打造更稳定的成长环境。",
      footerNav: [
        { href: "/club-introduction", label: "俱乐部介绍" },
        { href: "/program", label: "训练项目" },
        { href: "/application", label: "招生报名" },
        { href: "/gallery", label: "相册" },
        { href: "/contact", label: "赞助" },
        { href: "/contact", label: "联系" },
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
    [locale, setLocale]
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

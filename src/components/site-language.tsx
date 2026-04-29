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
    // S2 Hero
    heroLabel: string;
    heroLine1: string;
    heroLine2: string;
    heroLine3: string;
    heroDesc: string;
    heroPrimary: string;
    heroSecondary: string;
    // S3 Stats
    stats: Array<{ num: string; label: string; sub: string }>;
    // S4 Pipeline
    pipelineLabel: string;
    pipelineLine1: string;
    pipelineLine2: string;
    pipelineDesc: string;
    pipelineSteps: Array<{ age: string; name: string; point: string; sepia: boolean }>;
    pipelineCta: string;
    // S5 Club Identity
    identityLabel: string;
    identityTitle1: string;
    identityTitle2: string;
    identityDesc: string;
    identityValues: Array<{ num: string; title: string; body: string }>;
    identityCta: string;
    // S6 Training System
    trainingLabel: string;
    trainingTitle1: string;
    trainingTitle2: string;
    trainingDesc: string;
    trainingPrograms: Array<{ num: string; title: string; body: string }>;
    trainingCta: string;
    // S7 Recruit CTA
    recruitTitle: string;
    recruitDesc: string;
    recruitButton: string;
    recruitPhone: string;
    // S8 Gallery
    galleryLabel: string;
    galleryTitle1: string;
    galleryTitle2: string;
    galleryCta: string;
    // S9 Promise
    promiseLabel: string;
    promiseLine1: string;
    promiseLine2: string;
    promiseLine3: string;
    promiseDesc: string;
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
    metaTitle: "서울금천축구클럽 G.C.S.C | 금천구 엘리트 유소년 축구",
    metaDescription: "금천구 유소년 축구클럽. 초등~K4 수직 통합 선수개발. 체계적 엘리트 훈련.",
    header: {
      clubName: "서울금천축구클럽",
      clubNameEn: "G.C.S.C",
      nav: [
        { href: "/club-introduction", label: "클럽소개" },
        { href: "/program", label: "육성시스템" },
        { href: "/roadmap", label: "로드맵" },
        { href: "/application", label: "선수모집" },
        { href: "/achievements", label: "진학현황" },
        { href: "/schedule", label: "경기일정" },
        { href: "/partners", label: "파트너" },
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
      heroLabel: "Since 2015 · G.C.S.C",
      heroLine1: "훈련부터 진학까지",
      heroLine2: "GEUMCHEON",
      heroLine3: "SOCCER CLUB",
      heroDesc: "초등부터 성인까지, 선수의 길을 끝까지 함께 설계합니다.",
      heroPrimary: "선수 모집 바로가기",
      heroSecondary: "클럽 소개 보기",
      stats: [
        { num: "2015", label: "창단 연도", sub: "Since 10년의 역사" },
        { num: "전 연령", label: "초등 · 중등 · 고등 · 성인", sub: "U6부터 K4까지" },
        { num: "주 5회", label: "정규 훈련", sub: "실내 · 실외 병행" },
        { num: "K4", label: "리그 연계", sub: "성인 무대 직결 파이프라인" },
      ],
      pipelineLabel: "Pipeline · G.C.S.C",
      pipelineLine1: "첫 번째 공부터",
      pipelineLine2: "마지막 계약서까지",
      pipelineDesc: "하나의 시스템으로 연결된 선수의 길.",
      pipelineSteps: [
        { age: "U6 – U12", name: "초등부", point: "기본기와 즐거움", sepia: false },
        { age: "U13 – U15", name: "중등부", point: "기술 완성과 전술 입문", sepia: false },
        { age: "U16 – U18", name: "고등부", point: "실전과 진로 설계", sepia: false },
        { age: "성인", name: "K4 리그", point: "성인 무대 데뷔", sepia: true },
        { age: "그 다음", name: "프로 / 대학", point: "최종 목적지", sepia: true },
      ],
      pipelineCta: "커리어 로드맵 자세히 보기",
      identityLabel: "Club Identity · G.C.S.C",
      identityTitle1: "축구 학원이 아니라",
      identityTitle2: "축구 매니지먼트 클럽",
      identityDesc: "훈련에서 끝나지 않습니다. 선수의 커리어 전체를 설계하고, 끝까지 책임집니다.",
      identityValues: [
        { num: "01", title: "끝까지 책임진다", body: "입단부터 성인 무대까지. 중간에 끊기지 않는 선수의 성장 경로를 만드는 것이 우리의 약속입니다." },
        { num: "02", title: "시스템으로 성장한다", body: "개인 코치의 능력이 아닌, 클럽 전체의 일관된 플레이북으로 선수를 성장시킵니다." },
        { num: "03", title: "재능을 낭비하지 않는다", body: "상위 1%가 아닌 상위 20~40%의 선수들. 시스템이 없어서 묻히는 재능을 발굴하고 키웁니다." },
      ],
      identityCta: "클럽 소개 자세히 보기",
      trainingLabel: "Training System · G.C.S.C",
      trainingTitle1: "단계별로 설계된",
      trainingTitle2: "육성 시스템",
      trainingDesc: "기본기부터 전술, 피지컬, 진학 연계까지. 연령별로 다른 기준으로 훈련합니다.",
      trainingPrograms: [
        { num: "01", title: "기본기 훈련", body: "볼 컨트롤, 패스, 퍼스트 터치, 방향 전환. 모든 성장의 출발점." },
        { num: "02", title: "전술 · 수비", body: "팀 전술, 수비 조직, 공간 활용. 경기를 읽는 선수로 키웁니다." },
        { num: "03", title: "피지컬 강화", body: "스피드, 민첩성, 코어 훈련. 기술을 받쳐주는 몸을 만듭니다." },
        { num: "04", title: "진학 컨설팅", body: "목표 대학, 진학 루트, 커리어 설계. 운동만 가르치지 않습니다." },
      ],
      trainingCta: "육성 시스템 전체 보기",
      recruitTitle: "지금 바로 시작하세요",
      recruitDesc: "초등부 · 중등부 · 고등부 · 성인부 — 전 연령 모집 중",
      recruitButton: "선수 모집 신청",
      recruitPhone: "010-4178-0207",
      galleryLabel: "Gallery · G.C.S.C",
      galleryTitle1: "현장의",
      galleryTitle2: "기록",
      galleryCta: "전체 갤러리 보기",
      promiseLabel: "Club Promise · Since 2015",
      promiseLine1: "첫 번째 공부터",
      promiseLine2: "마지막 계약서까지,",
      promiseLine3: "G.C.S.C가 함께합니다",
      promiseDesc: "입단부터 프로 계약까지. 선수의 모든 단계를 클럽이 함께 설계하고 책임집니다.",
    },
  },

  en: {
    metaTitle: "Geumcheon Soccer Club G.C.S.C | Elite Youth Soccer",
    metaDescription: "Youth soccer club in Seoul. Integrated player development from elementary to K4.",
    header: {
      clubName: "Geumcheon Soccer Club",
      clubNameEn: "G.C.S.C",
      nav: [
        { href: "/club-introduction", label: "About" },
        { href: "/program", label: "Program" },
        { href: "/roadmap", label: "Roadmap" },
        { href: "/application", label: "Recruitment" },
        { href: "/achievements", label: "Achievements" },
        { href: "/schedule", label: "Schedule" },
        { href: "/partners", label: "Partners" },
        { href: "/gallery", label: "Gallery" },
        { href: "/support", label: "Support" },
        { href: "/contact", label: "Contact" },
      ],
      apply: "Apply",
      menu: "Menu",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      closeMobileMenu: "Close mobile menu",
      languageLabel: "Select language",
    },
    home: {
      heroLabel: "Since 2015 · G.C.S.C",
      heroLine1: "From Training to Career",
      heroLine2: "GEUMCHEON",
      heroLine3: "SOCCER CLUB",
      heroDesc: "From elementary to adult — we design the full path of every player.",
      heroPrimary: "Apply Now",
      heroSecondary: "About the Club",
      stats: [
        { num: "2015", label: "Founded", sub: "10 years of history" },
        { num: "All Ages", label: "Elementary · Middle · High · Adult", sub: "U6 to K4" },
        { num: "5×/Week", label: "Regular Training", sub: "Indoor & outdoor" },
        { num: "K4", label: "League Track", sub: "Direct pipeline to adult football" },
      ],
      pipelineLabel: "Pipeline · G.C.S.C",
      pipelineLine1: "From the First Ball",
      pipelineLine2: "to the Last Contract",
      pipelineDesc: "One connected system for the player's entire career.",
      pipelineSteps: [
        { age: "U6 – U12", name: "Elementary", point: "Fundamentals & fun", sepia: false },
        { age: "U13 – U15", name: "Middle School", point: "Technique & tactics", sepia: false },
        { age: "U16 – U18", name: "High School", point: "Match & career planning", sepia: false },
        { age: "Adult", name: "K4 League", point: "Adult stage debut", sepia: true },
        { age: "Next", name: "Pro / University", point: "Final destination", sepia: true },
      ],
      pipelineCta: "View Career Roadmap",
      identityLabel: "Club Identity · G.C.S.C",
      identityTitle1: "Not a Soccer Academy —",
      identityTitle2: "A Soccer Management Club",
      identityDesc: "We don't stop at training. We design the entire career of every player and see it through.",
      identityValues: [
        { num: "01", title: "We see it through", body: "From joining to the adult stage. An unbroken development path for every player is our promise." },
        { num: "02", title: "Growth through systems", body: "Not individual coaching talent — the club's consistent playbook is what develops players." },
        { num: "03", title: "No wasted talent", body: "Not just the top 1% — the top 20–40%. We find and develop talent that gets buried without a system." },
      ],
      identityCta: "About the Club",
      trainingLabel: "Training System · G.C.S.C",
      trainingTitle1: "A System Designed",
      trainingTitle2: "for Every Stage",
      trainingDesc: "From fundamentals to tactics, physical training, and pathway consulting — different standards for each age group.",
      trainingPrograms: [
        { num: "01", title: "Fundamental Training", body: "Ball control, passing, first touch, directional change. The starting point of all growth." },
        { num: "02", title: "Tactics & Defense", body: "Team tactics, defensive organization, spatial use. Building players who read the game." },
        { num: "03", title: "Physical Development", body: "Speed, agility, core training. Building the body that supports the skills." },
        { num: "04", title: "Pathway Consulting", body: "Target university, entry routes, career design. We teach more than football." },
      ],
      trainingCta: "View Full Training System",
      recruitTitle: "Start Right Now",
      recruitDesc: "Elementary · Middle · High · Adult — All ages currently recruiting",
      recruitButton: "Apply to Join",
      recruitPhone: "010-4178-0207",
      galleryLabel: "Gallery · G.C.S.C",
      galleryTitle1: "On the",
      galleryTitle2: "Ground",
      galleryCta: "View Full Gallery",
      promiseLabel: "Club Promise · Since 2015",
      promiseLine1: "From the First Ball",
      promiseLine2: "to the Last Contract,",
      promiseLine3: "G.C.S.C is with you.",
      promiseDesc: "From joining to a professional contract — the club designs and owns every step of the player's journey.",
    },
  },

  ja: {
    metaTitle: "金泉サッカークラブ G.C.S.C | エリートユース育成",
    metaDescription: "ソウルの少年サッカークラブ。小学生からK4まで一貫した選手育成。",
    header: {
      clubName: "金泉サッカークラブ",
      clubNameEn: "G.C.S.C",
      nav: [
        { href: "/club-introduction", label: "クラブ紹介" },
        { href: "/program", label: "育成システム" },
        { href: "/roadmap", label: "ロードマップ" },
        { href: "/application", label: "選手募集" },
        { href: "/achievements", label: "進学実績" },
        { href: "/schedule", label: "試合日程" },
        { href: "/partners", label: "パートナー" },
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
      heroLabel: "Since 2015 · G.C.S.C",
      heroLine1: "トレーニングから進学まで",
      heroLine2: "GEUMCHEON",
      heroLine3: "SOCCER CLUB",
      heroDesc: "小学生から成人まで、選手の道をずっと一緒に設計します。",
      heroPrimary: "選手募集に申し込む",
      heroSecondary: "クラブ紹介を見る",
      stats: [
        { num: "2015", label: "創設年", sub: "10年の歴史" },
        { num: "全年齢", label: "小・中・高・成人", sub: "U6からK4まで" },
        { num: "週5回", label: "定期練習", sub: "室内・室外併用" },
        { num: "K4", label: "リーグ連携", sub: "成人舞台への直結パイプライン" },
      ],
      pipelineLabel: "Pipeline · G.C.S.C",
      pipelineLine1: "最初のボールから",
      pipelineLine2: "最後の契約書まで",
      pipelineDesc: "ひとつのシステムでつながる選手の道。",
      pipelineSteps: [
        { age: "U6 – U12", name: "小学部", point: "基礎技術と楽しさ", sepia: false },
        { age: "U13 – U15", name: "中学部", point: "技術完成と戦術入門", sepia: false },
        { age: "U16 – U18", name: "高校部", point: "実戦と進路設計", sepia: false },
        { age: "成人", name: "K4リーグ", point: "成人舞台デビュー", sepia: true },
        { age: "その先", name: "プロ / 大学", point: "最終目的地", sepia: true },
      ],
      pipelineCta: "キャリアロードマップを見る",
      identityLabel: "Club Identity · G.C.S.C",
      identityTitle1: "サッカー塾ではなく、",
      identityTitle2: "サッカーマネジメントクラブ",
      identityDesc: "トレーニングで終わりません。選手のキャリア全体を設計し、最後まで責任を持ちます。",
      identityValues: [
        { num: "01", title: "最後まで責任を持つ", body: "入団から成人舞台まで。途切れない選手の成長経路を作ることが私たちの約束です。" },
        { num: "02", title: "システムで成長する", body: "個人コーチの能力ではなく、クラブ全体の一貫したプレイブックで選手を成長させます。" },
        { num: "03", title: "才能を無駄にしない", body: "上位1%だけでなく、上位20〜40%の選手たち。システムがなくて埋もれる才能を発掘します。" },
      ],
      identityCta: "クラブ紹介を見る",
      trainingLabel: "Training System · G.C.S.C",
      trainingTitle1: "段階別に設計された",
      trainingTitle2: "育成システム",
      trainingDesc: "基礎技術から戦術、フィジカル、進学連携まで。年齢別に異なる基準で練習します。",
      trainingPrograms: [
        { num: "01", title: "基礎技術訓練", body: "ボールコントロール、パス、ファーストタッチ、方向転換。全ての成長の出発点。" },
        { num: "02", title: "戦術・守備", body: "チーム戦術、守備組織、スペース活用。試合を読む選手に育てます。" },
        { num: "03", title: "フィジカル強化", body: "スピード、敏捷性、コア訓練。技術を支える体を作ります。" },
        { num: "04", title: "進学コンサルティング", body: "目標大学、進学ルート、キャリア設計。サッカーだけは教えません。" },
      ],
      trainingCta: "育成システム全体を見る",
      recruitTitle: "今すぐ始めよう",
      recruitDesc: "小学部・中学部・高校部・成人部 — 全年齢募集中",
      recruitButton: "選手募集に申し込む",
      recruitPhone: "010-4178-0207",
      galleryLabel: "Gallery · G.C.S.C",
      galleryTitle1: "現場の",
      galleryTitle2: "記録",
      galleryCta: "ギャラリー全体を見る",
      promiseLabel: "Club Promise · Since 2015",
      promiseLine1: "最初のボールから",
      promiseLine2: "最後の契約書まで、",
      promiseLine3: "G.C.S.Cが共にいます",
      promiseDesc: "入団からプロ契約まで。選手の全ての段階をクラブが共に設計し、責任を持ちます。",
    },
  },

  zh: {
    metaTitle: "金泉足球俱乐部 G.C.S.C | 精英青少年足球",
    metaDescription: "首尔青少年足球俱乐部。从小学到K4联赛的垂直整合球员培养。",
    header: {
      clubName: "金泉足球俱乐部",
      clubNameEn: "G.C.S.C",
      nav: [
        { href: "/club-introduction", label: "俱乐部介绍" },
        { href: "/program", label: "培训系统" },
        { href: "/roadmap", label: "职业路线图" },
        { href: "/application", label: "球员招募" },
        { href: "/achievements", label: "升学成绩" },
        { href: "/schedule", label: "赛程" },
        { href: "/partners", label: "合作伙伴" },
        { href: "/gallery", label: "相册" },
        { href: "/support", label: "赞助" },
        { href: "/contact", label: "联系我们" },
      ],
      apply: "申请参加",
      menu: "菜单",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
      closeMobileMenu: "关闭移动菜单",
      languageLabel: "选择语言",
    },
    home: {
      heroLabel: "Since 2015 · G.C.S.C",
      heroLine1: "从训练到升学",
      heroLine2: "GEUMCHEON",
      heroLine3: "SOCCER CLUB",
      heroDesc: "从小学到成人，我们全程陪伴每一位球员规划未来。",
      heroPrimary: "立即申请",
      heroSecondary: "了解俱乐部",
      stats: [
        { num: "2015", label: "成立年份", sub: "十年历史" },
        { num: "全年龄", label: "小学·初中·高中·成人", sub: "U6至K4" },
        { num: "每周5次", label: "定期训练", sub: "室内·室外并行" },
        { num: "K4", label: "联赛衔接", sub: "直通成人赛场通道" },
      ],
      pipelineLabel: "Pipeline · G.C.S.C",
      pipelineLine1: "从第一个球",
      pipelineLine2: "到最后一份合同",
      pipelineDesc: "一套连贯的系统，贯穿球员的整个职业生涯。",
      pipelineSteps: [
        { age: "U6 – U12", name: "小学部", point: "基础技术与乐趣", sepia: false },
        { age: "U13 – U15", name: "初中部", point: "技术完成与战术入门", sepia: false },
        { age: "U16 – U18", name: "高中部", point: "实战与职业规划", sepia: false },
        { age: "成人", name: "K4联赛", point: "成人赛场首秀", sepia: true },
        { age: "之后", name: "职业 / 大学", point: "最终目的地", sepia: true },
      ],
      pipelineCta: "查看职业路线图",
      identityLabel: "Club Identity · G.C.S.C",
      identityTitle1: "不是足球培训班，",
      identityTitle2: "而是足球经纪俱乐部",
      identityDesc: "我们不止于训练。我们为每位球员规划完整的职业生涯，并全程负责到底。",
      identityValues: [
        { num: "01", title: "负责到底", body: "从加入到成人赛场。为每位球员打造不断档的成长路径，是我们的承诺。" },
        { num: "02", title: "系统化成长", body: "不依赖个别教练的能力，而是用俱乐部统一的战术手册培养球员。" },
        { num: "03", title: "不浪费天赋", body: "不只关注前1%，而是前20~40%。我们发掘那些因缺乏系统而被埋没的才华。" },
      ],
      identityCta: "了解俱乐部",
      trainingLabel: "Training System · G.C.S.C",
      trainingTitle1: "分阶段设计的",
      trainingTitle2: "培训系统",
      trainingDesc: "从基础技术到战术、体能、升学衔接，根据不同年龄制定不同标准进行训练。",
      trainingPrograms: [
        { num: "01", title: "基础技术训练", body: "控球、传球、第一脚触球、变向。所有成长的起点。" },
        { num: "02", title: "战术·防守", body: "团队战术、防守组织、空间利用。培养读懂比赛的球员。" },
        { num: "03", title: "体能强化", body: "速度、敏捷性、核心训练。打造支撑技术的身体。" },
        { num: "04", title: "升学咨询", body: "目标大学、升学路径、职业规划。我们教的不只是足球。" },
      ],
      trainingCta: "查看完整培训系统",
      recruitTitle: "现在就开始",
      recruitDesc: "小学部·初中部·高中部·成人部 — 全年龄段招募中",
      recruitButton: "申请加入",
      recruitPhone: "010-4178-0207",
      galleryLabel: "Gallery · G.C.S.C",
      galleryTitle1: "现场",
      galleryTitle2: "记录",
      galleryCta: "查看全部相册",
      promiseLabel: "Club Promise · Since 2015",
      promiseLine1: "从第一个球",
      promiseLine2: "到最后一份合同，",
      promiseLine3: "G.C.S.C陪伴你",
      promiseDesc: "从加入到职业合同。俱乐部与你共同规划球员成长的每一个阶段，并全程负责。",
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

const STORAGE_KEY = "GCSC-locale";

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
  const ctx = React.useContext(SiteLanguageContext);
  if (!ctx) throw new Error("useSiteLanguage must be used inside SiteLanguageProvider");
  return ctx;
}

"use client";

import { useState } from "react";
import GSSCHeader from "@/components/GSSCHeader";
import Footer from "@/components/Footer";
import { useSiteLanguage, type Locale } from "@/components/site-language";

type DaySchedule = { day: string; time: string; content: string };

type AgeGroup = {
  ageRange: string;
  name: string;
  goalLine: string;
  detail: { goalLabel: string; goal: string; trainingLabel: string; training: string; evalLabel: string; evaluation: string; nextLabel: string; next: string };
  schedule: DaySchedule[];
};

type TrainingCard = { num: string; title: string; body: string };

type PlaybookCard = { stage: string; rule: string; desc: string };

type ProgramCopy = {
  heroLabel: string;
  heroTitle: [string, string];
  heroSub: string;
  ageLabel: string;
  ageGroups: AgeGroup[];
  programLabel: string;
  programTitle: [string, string];
  programs: TrainingCard[];
  playbookLabel: string;
  playbookTitle: string;
  playbook: [PlaybookCard, PlaybookCard];
  scheduleLabel: string;
  scheduleNote: string;
  ctaTitle: [string, string];
  ctaSub: string;
  ctaBtn: string;
};

const copy: Record<Locale, ProgramCopy> = {
  ko: {
    heroLabel: "Training System · G.S.S.C",
    heroTitle: ["훈련부터 진학까지,", "단계별 육성 시스템"],
    heroSub: "초등부부터 고등까지, 연령별로 다른 기준으로 훈련합니다.\nG.S.S.C의 플레이북은 선수가 아닌 시스템이 성장을 보장합니다.",
    ageLabel: "연령별 단계",
    ageGroups: [
      {
        ageRange: "U6 – U12",
        name: "초등부",
        goalLine: "기본기와 즐거움",
        detail: {
          goalLabel: "훈련 목표",
          goal: "볼을 좋아하게 만드는 것. 기본기와 즐거움을 동시에 잡는 단계.",
          trainingLabel: "핵심 훈련",
          training: "볼 감각, 드리블, 패스, 퍼스트 터치. 승리보다 개인 기술 형성에 집중.",
          evalLabel: "평가 기준",
          evaluation: "기술 습득도 70% · 참여 태도 30%. 경쟁 위한 평가 없음.",
          nextLabel: "다음 단계",
          next: "중등부 진입 테스트 연계. 기준을 충족한 선수는 자연스럽게 중등부로 연결.",
        },
        schedule: [
          { day: "월", time: "16:00–18:00", content: "볼 감각 훈련" },
          { day: "화", time: "16:00–18:00", content: "드리블 · 패스" },
          { day: "수", time: "16:00–18:00", content: "퍼스트 터치" },
          { day: "목", time: "16:00–18:00", content: "미니게임" },
          { day: "금", time: "16:00–18:00", content: "팀 게임" },
        ],
      },
      {
        ageRange: "U13 – U15",
        name: "중등부",
        goalLine: "기술 완성과 전술 입문",
        detail: {
          goalLabel: "훈련 목표",
          goal: "기술을 완성하고 전술을 이해하는 단계. 경기를 읽는 선수로 키웁니다.",
          trainingLabel: "핵심 훈련",
          training: "볼 컨트롤 심화, 포지션, 팀 전술 기초, 수비 조직 이해.",
          evalLabel: "평가 기준",
          evaluation: "기술 완성도 70% · 전술 이해도 30%. 주말리그 실전 경험 병행.",
          nextLabel: "다음 단계",
          next: "고등부 진급 또는 학교 축구부 연계 선택. G.S.S.C가 진로 옵션 함께 설계.",
        },
        schedule: [
          { day: "월", time: "17:00–19:00", content: "기본기 훈련" },
          { day: "화", time: "17:00–19:00", content: "전술 훈련" },
          { day: "수", time: "17:00–19:00", content: "피지컬 + 볼" },
          { day: "목", time: "17:00–19:00", content: "경기 적용 훈련" },
          { day: "금", time: "17:00–19:00", content: "팀 훈련 + 경기 준비" },
        ],
      },
      {
        ageRange: "U16 – U18",
        name: "고등부",
        goalLine: "실전과 진로 설계",
        detail: {
          goalLabel: "훈련 목표",
          goal: "실전과 진로를 동시에 준비하는 단계. 대학 진학 또는 K4 진출 목표 설정.",
          trainingLabel: "핵심 훈련",
          training: "팀 전술 심화, 경기 분석, 피지컬 강화, 포지션별 특화 훈련.",
          evalLabel: "평가 기준",
          evaluation: "전술 적용도 70% · 기술 완성도 30%. 개인 성장 리포트 주 1회 제공.",
          nextLabel: "다음 단계",
          next: "K4 리그 진출 또는 대학 체육특기자 선택. 진학 컨설팅 포함.",
        },
        schedule: [
          { day: "월", time: "17:00–19:00", content: "전술 훈련" },
          { day: "화", time: "17:00–19:00", content: "포지션별 훈련" },
          { day: "수", time: "17:00–19:00", content: "피지컬 강화" },
          { day: "목", time: "17:00–19:00", content: "경기 분석" },
          { day: "금", time: "17:00–19:00", content: "실전 경기" },
        ],
      },
      {
        ageRange: "성인",
        name: "성인부 · K4",
        goalLine: "성인 무대 데뷔",
        detail: {
          goalLabel: "훈련 목표",
          goal: "성인 무대 데뷔와 지속 성장. K4에서 K3, 그 너머로 이어지는 연결고리.",
          trainingLabel: "핵심 훈련",
          training: "리그 전술 분석, 아이들링 스카우팅, 경기력 유지 훈련, 부상 예방 루틴.",
          evalLabel: "지원 내용",
          evaluation: "이적 상담, 에이전트 연결, 해외 진출 루트 상담 포함.",
          nextLabel: "입단 조건",
          next: "G.S.S.C 선수단 출신 우선. 외부 선수도 테스트 후 선발.",
        },
        schedule: [
          { day: "월", time: "20:00–22:00", content: "전술 + 볼" },
          { day: "화", time: "20:00–22:00", content: "경기력 훈련" },
          { day: "수", time: "20:00–22:00", content: "피지컬" },
          { day: "목", time: "20:00–22:00", content: "전술 훈련" },
          { day: "토", time: "09:00–12:00", content: "리그 경기" },
        ],
      },
    ],
    programLabel: "Training Program · G.S.S.C",
    programTitle: ["G.S.S.C가 훈련하는", "4가지 방식"],
    programs: [
      { num: "01", title: "기본기 훈련", body: "볼 컨트롤, 패스, 퍼스트 터치, 방향 전환. 화려한 기술보다 정확한 기본기가 먼저입니다." },
      { num: "02", title: "전술 · 수비", body: "팀 전술, 수비 조직, 공간 이해. 혼자 뛰는 선수가 아닌, 팀을 이기게 하는 선수를 만듭니다." },
      { num: "03", title: "피지컬 강화", body: "스피드, 민첩성, 코어 훈련. 기술을 경기에서 실행하는 몸 상태를 만듭니다." },
      { num: "04", title: "진학 컨설팅", body: "목표 대학 설계, 진학 루트 상담, 포트폴리오 준비. 가르치기만 하는 클럽이 아닙니다." },
    ],
    playbookLabel: "G.S.S.C Playbook — 단계별 육성 원칙",
    playbookTitle: "우리는 언제 무엇을 가르치는가",
    playbook: [
      {
        stage: "U15 이하 — 이등 · 중등부",
        rule: "기술 70% · 승리 30%",
        desc: "이 시기에 승리에 집착하면 기본기가 무너집니다. 먼저 선수를 만들고, 그다음 팀을 만듭니다.",
      },
      {
        stage: "U16 이상 — 고등 · 성인부",
        rule: "전술 · 승리 70% · 기술 30%",
        desc: "기본기가 완성된 선수에게는 실전이 필요합니다. 경기에서 이기는 방법을 함께 고민합니다.",
      },
    ],
    scheduleLabel: "Weekly Schedule · G.S.S.C",
    scheduleNote: "※ 실제 훈련 시간·요일은 시즌에 따라 변경될 수 있습니다. 정확한 일정은 문의해주세요.",
    ctaTitle: ["이 시스템 안에서", "성장할 준비가 됐나요?"],
    ctaSub: "지금 바로 선수 모집 신청을 시작하세요.",
    ctaBtn: "선수 모집 신청",
  },
  en: {
    heroLabel: "Training System · G.S.S.C",
    heroTitle: ["From training to career path,", "a stage-by-stage development system"],
    heroSub: "Different standards for every age group — elementary through high school.\nG.S.S.C's playbook ensures it's the system, not individuals, that guarantees growth.",
    ageLabel: "Age Groups",
    ageGroups: [
      {
        ageRange: "U6 – U12",
        name: "Elementary",
        goalLine: "Fundamentals & fun",
        detail: {
          goalLabel: "Training Goal",
          goal: "Making players love the ball. The stage where fundamentals and fun go hand in hand.",
          trainingLabel: "Core Training",
          training: "Ball feel, dribbling, passing, first touch. Focus on building individual technique over winning.",
          evalLabel: "Evaluation",
          evaluation: "Skill acquisition 70% · Participation attitude 30%. No competition-based grading.",
          nextLabel: "Next Stage",
          next: "Linked to middle school entry test. Players who meet the criteria naturally progress.",
        },
        schedule: [
          { day: "Mon", time: "4:00–6:00 PM", content: "Ball feel training" },
          { day: "Tue", time: "4:00–6:00 PM", content: "Dribble · Pass" },
          { day: "Wed", time: "4:00–6:00 PM", content: "First touch" },
          { day: "Thu", time: "4:00–6:00 PM", content: "Mini games" },
          { day: "Fri", time: "4:00–6:00 PM", content: "Team games" },
        ],
      },
      {
        ageRange: "U13 – U15",
        name: "Middle School",
        goalLine: "Technical completion & tactical intro",
        detail: {
          goalLabel: "Training Goal",
          goal: "Completing technique and understanding tactics. Developing players who can read the game.",
          trainingLabel: "Core Training",
          training: "Advanced ball control, positioning, team tactics foundation, defensive structure.",
          evalLabel: "Evaluation",
          evaluation: "Technical completion 70% · Tactical understanding 30%. Weekend league match experience included.",
          nextLabel: "Next Stage",
          next: "Progression to high school group or school football team connection. G.S.S.C designs pathway options together.",
        },
        schedule: [
          { day: "Mon", time: "5:00–7:00 PM", content: "Fundamentals" },
          { day: "Tue", time: "5:00–7:00 PM", content: "Tactical training" },
          { day: "Wed", time: "5:00–7:00 PM", content: "Physical + Ball" },
          { day: "Thu", time: "5:00–7:00 PM", content: "Match application" },
          { day: "Fri", time: "5:00–7:00 PM", content: "Team + Match prep" },
        ],
      },
      {
        ageRange: "U16 – U18",
        name: "High School",
        goalLine: "Match-ready & career planning",
        detail: {
          goalLabel: "Training Goal",
          goal: "Simultaneously preparing for matches and career paths. Setting university or K4 goals.",
          trainingLabel: "Core Training",
          training: "Advanced team tactics, match analysis, physical strengthening, position-specific training.",
          evalLabel: "Evaluation",
          evaluation: "Tactical application 70% · Technical completion 30%. Individual growth report weekly.",
          nextLabel: "Next Stage",
          next: "K4 league entry or university sports scholarship. Career consulting included.",
        },
        schedule: [
          { day: "Mon", time: "5:00–7:00 PM", content: "Tactical training" },
          { day: "Tue", time: "5:00–7:00 PM", content: "Position-specific" },
          { day: "Wed", time: "5:00–7:00 PM", content: "Physical work" },
          { day: "Thu", time: "5:00–7:00 PM", content: "Match analysis" },
          { day: "Fri", time: "5:00–7:00 PM", content: "Match play" },
        ],
      },
      {
        ageRange: "Senior",
        name: "Senior · K4",
        goalLine: "Senior level debut",
        detail: {
          goalLabel: "Training Goal",
          goal: "Senior level debut and continued growth. The bridge from K4 to K3 and beyond.",
          trainingLabel: "Core Training",
          training: "League tactical analysis, scouting prep, match fitness maintenance, injury prevention.",
          evalLabel: "Support",
          evaluation: "Transfer consulting, agent connections, overseas pathway consulting included.",
          nextLabel: "Admission",
          next: "G.S.S.C alumni prioritized. External players accepted after tryout.",
        },
        schedule: [
          { day: "Mon", time: "8:00–10:00 PM", content: "Tactics + Ball" },
          { day: "Tue", time: "8:00–10:00 PM", content: "Match fitness" },
          { day: "Wed", time: "8:00–10:00 PM", content: "Physical" },
          { day: "Thu", time: "8:00–10:00 PM", content: "Tactical session" },
          { day: "Sat", time: "9:00 AM–12:00 PM", content: "League match" },
        ],
      },
    ],
    programLabel: "Training Program · G.S.S.C",
    programTitle: ["Four ways", "G.S.S.C trains"],
    programs: [
      { num: "01", title: "Fundamentals", body: "Ball control, passing, first touch, directional change. Precise fundamentals come before flashy technique." },
      { num: "02", title: "Tactics & Defence", body: "Team tactics, defensive organisation, spatial awareness. We build players who make their team win, not just individuals." },
      { num: "03", title: "Physical Conditioning", body: "Speed, agility, and core training. We build the physical state that allows technique to be executed in matches." },
      { num: "04", title: "Career Consulting", body: "University pathway design, route consulting, portfolio preparation. We're not just a club that teaches." },
    ],
    playbookLabel: "G.S.S.C Playbook — Stage-based development principles",
    playbookTitle: "When and what do we teach",
    playbook: [
      {
        stage: "U15 & under — Elementary · Middle",
        rule: "Technique 70% · Winning 30%",
        desc: "Obsessing over winning at this age destroys fundamentals. We build the player first, then build the team.",
      },
      {
        stage: "U16 & over — High School · Senior",
        rule: "Tactics · Winning 70% · Technique 30%",
        desc: "Players who have mastered fundamentals need real matches. We figure out how to win games together.",
      },
    ],
    scheduleLabel: "Weekly Schedule · G.S.S.C",
    scheduleNote: "※ Actual training times and days may change by season. Contact us for accurate schedules.",
    ctaTitle: ["Ready to grow", "within this system?"],
    ctaSub: "Start your player application right now.",
    ctaBtn: "Apply Now",
  },
  ja: {
    heroLabel: "Training System · G.S.S.C",
    heroTitle: ["トレーニングから進路まで、", "段階別育成システム"],
    heroSub: "小学生から高校生まで、年代ごとに異なる基準でトレーニングします。\nG.S.S.Cのプレイブックは、個人ではなくシステムが成長を保証します。",
    ageLabel: "年代別ステージ",
    ageGroups: [
      {
        ageRange: "U6 – U12",
        name: "小学生部",
        goalLine: "基礎と楽しさ",
        detail: {
          goalLabel: "トレーニング目標",
          goal: "ボールを好きにさせること。基礎と楽しさを同時に身につける段階。",
          trainingLabel: "核心トレーニング",
          training: "ボール感覚、ドリブル、パス、ファーストタッチ。勝利より個人技術の形成に集中。",
          evalLabel: "評価基準",
          evaluation: "技術習得度 70% · 参加態度 30%。競争による評価なし。",
          nextLabel: "次のステージ",
          next: "中学部進入テストと連携。基準を満たした選手は自然に中学部へ進む。",
        },
        schedule: [
          { day: "月", time: "16:00–18:00", content: "ボール感覚トレーニング" },
          { day: "火", time: "16:00–18:00", content: "ドリブル · パス" },
          { day: "水", time: "16:00–18:00", content: "ファーストタッチ" },
          { day: "木", time: "16:00–18:00", content: "ミニゲーム" },
          { day: "金", time: "16:00–18:00", content: "チームゲーム" },
        ],
      },
      {
        ageRange: "U13 – U15",
        name: "中学生部",
        goalLine: "技術完成と戦術入門",
        detail: {
          goalLabel: "トレーニング目標",
          goal: "技術を完成させ戦術を理解する段階。試合を読める選手に育てます。",
          trainingLabel: "核心トレーニング",
          training: "ボールコントロール深化、ポジション、チーム戦術基礎、守備組織理解。",
          evalLabel: "評価基準",
          evaluation: "技術完成度 70% · 戦術理解度 30%。週末リーグ実戦経験も実施。",
          nextLabel: "次のステージ",
          next: "高校部進級または学校サッカー部との連携を選択。G.S.S.Cが進路オプションを共に設計。",
        },
        schedule: [
          { day: "月", time: "17:00–19:00", content: "基礎技術トレーニング" },
          { day: "火", time: "17:00–19:00", content: "戦術トレーニング" },
          { day: "水", time: "17:00–19:00", content: "フィジカル + ボール" },
          { day: "木", time: "17:00–19:00", content: "試合適用トレーニング" },
          { day: "金", time: "17:00–19:00", content: "チーム + 試合準備" },
        ],
      },
      {
        ageRange: "U16 – U18",
        name: "高校生部",
        goalLine: "実戦と進路設計",
        detail: {
          goalLabel: "トレーニング目標",
          goal: "実戦と進路を同時に準備する段階。大学進学またはK4進出目標を設定。",
          trainingLabel: "核心トレーニング",
          training: "チーム戦術深化、試合分析、フィジカル強化、ポジション別特化トレーニング。",
          evalLabel: "評価基準",
          evaluation: "戦術適用度 70% · 技術完成度 30%。個人成長レポートを週1回提供。",
          nextLabel: "次のステージ",
          next: "K4リーグ進出または大学スポーツ特待選択。進路コンサルティング含む。",
        },
        schedule: [
          { day: "月", time: "17:00–19:00", content: "戦術トレーニング" },
          { day: "火", time: "17:00–19:00", content: "ポジション別" },
          { day: "水", time: "17:00–19:00", content: "フィジカル強化" },
          { day: "木", time: "17:00–19:00", content: "試合分析" },
          { day: "金", time: "17:00–19:00", content: "実戦試合" },
        ],
      },
      {
        ageRange: "成人",
        name: "成人部 · K4",
        goalLine: "シニア舞台デビュー",
        detail: {
          goalLabel: "トレーニング目標",
          goal: "シニア舞台デビューと継続的成長。K4からK3、さらにその先へつながる橋。",
          trainingLabel: "核心トレーニング",
          training: "リーグ戦術分析、スカウティング準備、試合力維持トレーニング、怪我予防ルーティン。",
          evalLabel: "サポート内容",
          evaluation: "移籍相談、エージェント紹介、海外進出ルート相談含む。",
          nextLabel: "入団条件",
          next: "G.S.S.C選手団出身者優先。外部選手はテスト後に選抜。",
        },
        schedule: [
          { day: "月", time: "20:00–22:00", content: "戦術 + ボール" },
          { day: "火", time: "20:00–22:00", content: "試合力トレーニング" },
          { day: "水", time: "20:00–22:00", content: "フィジカル" },
          { day: "木", time: "20:00–22:00", content: "戦術トレーニング" },
          { day: "土", time: "9:00–12:00", content: "リーグ試合" },
        ],
      },
    ],
    programLabel: "Training Program · G.S.S.C",
    programTitle: ["G.S.S.Cが訓練する", "4つの方法"],
    programs: [
      { num: "01", title: "基礎技術トレーニング", body: "ボールコントロール、パス、ファーストタッチ、方向転換。華やかな技より正確な基礎が先です。" },
      { num: "02", title: "戦術 · 守備", body: "チーム戦術、守備組織、空間理解。個人だけでなく、チームを勝たせる選手を育てます。" },
      { num: "03", title: "フィジカル強化", body: "スピード、敏捷性、コアトレーニング。技術を試合で実行できる身体状態を作ります。" },
      { num: "04", title: "進路コンサルティング", body: "目標大学設計、進路ルート相談、ポートフォリオ準備。教えるだけのクラブではありません。" },
    ],
    playbookLabel: "G.S.S.C Playbook — 段階別育成原則",
    playbookTitle: "いつ何を教えるか",
    playbook: [
      {
        stage: "U15以下 — 小学生 · 中学生部",
        rule: "技術 70% · 勝利 30%",
        desc: "この時期に勝利に執着すると基礎が崩れます。まず選手を作り、それからチームを作ります。",
      },
      {
        stage: "U16以上 — 高校生 · 成人部",
        rule: "戦術 · 勝利 70% · 技術 30%",
        desc: "基礎が完成した選手には実戦が必要です。試合に勝つ方法を一緒に考えます。",
      },
    ],
    scheduleLabel: "Weekly Schedule · G.S.S.C",
    scheduleNote: "※ 実際のトレーニング時間・曜日はシーズンによって変更される場合があります。正確な日程はお問い合わせください。",
    ctaTitle: ["このシステムの中で", "成長する準備はできていますか？"],
    ctaSub: "今すぐ選手募集の申し込みを始めてください。",
    ctaBtn: "選手募集申し込み",
  },
  zh: {
    heroLabel: "Training System · G.S.S.C",
    heroTitle: ["从训练到升学，", "阶段式培养体系"],
    heroSub: "从小学到高中，每个年龄段有不同的训练标准。\nG.S.S.C的战术手册确保是系统而非个人来保障成长。",
    ageLabel: "年龄段阶段",
    ageGroups: [
      {
        ageRange: "U6 – U12",
        name: "小学部",
        goalLine: "基础与乐趣",
        detail: {
          goalLabel: "训练目标",
          goal: "让球员爱上足球。基础技术与快乐并重的阶段。",
          trainingLabel: "核心训练",
          training: "球感、盘带、传球、第一脚触球。专注于个人技术培养，而非追求胜负。",
          evalLabel: "评估标准",
          evaluation: "技术习得度 70% · 参与态度 30%。不进行竞争性评价。",
          nextLabel: "下一阶段",
          next: "衔接初中部入组测试。达到标准的球员自然晋升至初中部。",
        },
        schedule: [
          { day: "周一", time: "16:00–18:00", content: "球感训练" },
          { day: "周二", time: "16:00–18:00", content: "盘带 · 传球" },
          { day: "周三", time: "16:00–18:00", content: "第一脚触球" },
          { day: "周四", time: "16:00–18:00", content: "小型比赛" },
          { day: "周五", time: "16:00–18:00", content: "团队比赛" },
        ],
      },
      {
        ageRange: "U13 – U15",
        name: "初中部",
        goalLine: "技术完成与战术入门",
        detail: {
          goalLabel: "训练目标",
          goal: "完善技术并理解战术的阶段。培养能够读懂比赛的球员。",
          trainingLabel: "核心训练",
          training: "球控深化、位置、团队战术基础、防守组织理解。",
          evalLabel: "评估标准",
          evaluation: "技术完成度 70% · 战术理解度 30%。同时参加周末联赛实战。",
          nextLabel: "下一阶段",
          next: "晋升高中部或衔接学校足球队。G.S.S.C共同设计升学选项。",
        },
        schedule: [
          { day: "周一", time: "17:00–19:00", content: "基础技术训练" },
          { day: "周二", time: "17:00–19:00", content: "战术训练" },
          { day: "周三", time: "17:00–19:00", content: "体能 + 球技" },
          { day: "周四", time: "17:00–19:00", content: "比赛应用训练" },
          { day: "周五", time: "17:00–19:00", content: "团队训练 + 备战" },
        ],
      },
      {
        ageRange: "U16 – U18",
        name: "高中部",
        goalLine: "实战与升学设计",
        detail: {
          goalLabel: "训练目标",
          goal: "同时备战比赛和规划升学。设定大学或K4联赛进入目标。",
          trainingLabel: "核心训练",
          training: "团队战术深化、比赛分析、体能强化、位置特化训练。",
          evalLabel: "评估标准",
          evaluation: "战术应用度 70% · 技术完成度 30%。每周提供一次个人成长报告。",
          nextLabel: "下一阶段",
          next: "进入K4联赛或选择大学体育特招。包含升学咨询。",
        },
        schedule: [
          { day: "周一", time: "17:00–19:00", content: "战术训练" },
          { day: "周二", time: "17:00–19:00", content: "位置特化训练" },
          { day: "周三", time: "17:00–19:00", content: "体能强化" },
          { day: "周四", time: "17:00–19:00", content: "比赛分析" },
          { day: "周五", time: "17:00–19:00", content: "实战比赛" },
        ],
      },
      {
        ageRange: "成人",
        name: "成人部 · K4",
        goalLine: "职业赛场首秀",
        detail: {
          goalLabel: "训练目标",
          goal: "职业赛场首秀与持续成长。从K4到K3乃至更高舞台的连接纽带。",
          trainingLabel: "核心训练",
          training: "联赛战术分析、球探准备、竞技状态维持训练、伤病预防常规。",
          evalLabel: "支持内容",
          evaluation: "转会咨询、经纪人对接、海外发展路线咨询。",
          nextLabel: "入团条件",
          next: "G.S.S.C选手团出身优先。外部球员测试后择优录取。",
        },
        schedule: [
          { day: "周一", time: "20:00–22:00", content: "战术 + 球技" },
          { day: "周二", time: "20:00–22:00", content: "竞技训练" },
          { day: "周三", time: "20:00–22:00", content: "体能" },
          { day: "周四", time: "20:00–22:00", content: "战术训练" },
          { day: "周六", time: "09:00–12:00", content: "联赛比赛" },
        ],
      },
    ],
    programLabel: "Training Program · G.S.S.C",
    programTitle: ["G.S.S.C训练的", "四种方式"],
    programs: [
      { num: "01", title: "基础技术训练", body: "控球、传球、第一脚触球、变向。精准的基础技术先于华丽的技巧。" },
      { num: "02", title: "战术 · 防守", body: "团队战术、防守组织、空间理解。培养让球队获胜的球员，而非单打独斗。" },
      { num: "03", title: "体能强化", body: "速度、敏捷性、核心训练。打造能在比赛中实现技术的身体状态。" },
      { num: "04", title: "升学咨询", body: "目标大学规划、升学路线咨询、个人档案准备。我们不只是一个教学的俱乐部。" },
    ],
    playbookLabel: "G.S.S.C Playbook — 阶段式培养原则",
    playbookTitle: "我们何时教什么",
    playbook: [
      {
        stage: "U15及以下 — 小学 · 初中部",
        rule: "技术 70% · 胜负 30%",
        desc: "这个阶段执着于胜负会摧毁基础。先打造球员，再构建球队。",
      },
      {
        stage: "U16及以上 — 高中 · 成人部",
        rule: "战术 · 胜负 70% · 技术 30%",
        desc: "基础完善的球员需要实战。我们一起研究如何赢得比赛。",
      },
    ],
    scheduleLabel: "Weekly Schedule · G.S.S.C",
    scheduleNote: "※ 实际训练时间与日期可能因赛季而调整。准确时间请联系我们。",
    ctaTitle: ["准备好在这个系统中", "成长了吗？"],
    ctaSub: "立即开始球员招募申请。",
    ctaBtn: "申请球员招募",
  },
};

export default function ProgramPage() {
  const { locale } = useSiteLanguage();
  const t = copy[locale];
  const [activeTab, setActiveTab] = useState(0);

  const selected = t.ageGroups[activeTab];

  return (
    <div className="min-h-screen bg-transparent text-[#f5f5f7]">
      <GSSCHeader />

      {/* ── S1 Hero ── */}
      <section className="border-b border-[#222] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#cc2222]">{t.heroLabel}</p>
          <h1
            className="font-['Barlow_Condensed',sans-serif] font-black uppercase leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(36px, 7vw, 72px)" }}
          >
            <span className="block text-[#f5f5f7]">{t.heroTitle[0]}</span>
            <span className="block text-[#cc2222]">{t.heroTitle[1]}</span>
          </h1>
          <p className="mt-6 max-w-xl whitespace-pre-line text-base leading-[1.8] text-[#c0c0c5] sm:text-lg">{t.heroSub}</p>
        </div>
      </section>

      {/* ── S2 Age Group Tabs ── */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-[#cc2222]">{t.ageLabel}</p>

          {/* 탭 */}
          <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {t.ageGroups.map((group, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`rounded-[4px] px-4 py-4 text-left transition ${
                  activeTab === i ? "bg-[#cc2222]" : "bg-[#1c1c1e] hover:bg-[#2a2a2a]"
                }`}
              >
                <p className={`mb-1 text-[10px] font-bold tracking-[0.06em] ${activeTab === i ? "text-white/70" : "text-[#6e6e73]"}`}>
                  {group.ageRange}
                </p>
                <p className={`text-sm font-bold ${activeTab === i ? "text-white" : "text-[#f5f5f7]"}`}>{group.name}</p>
                <p className={`mt-1 text-[11px] leading-[1.4] ${activeTab === i ? "text-white/70" : "text-[#6e6e73]"}`}>
                  {group.goalLine}
                </p>
              </button>
            ))}
          </div>

          {/* 탭 상세 내용 */}
          <div className="rounded-[4px] border border-[#2a2a2a] bg-[#111] px-6 py-6 sm:px-8">
            <p className="mb-5 font-['Barlow_Condensed',sans-serif] text-lg font-black uppercase tracking-[0.02em] text-[#cc2222]">
              {selected.name} — {selected.ageRange}
            </p>
            <div className="grid gap-0 divide-y divide-[#1e1e1e]">
              {[
                { label: selected.detail.goalLabel, value: selected.detail.goal },
                { label: selected.detail.trainingLabel, value: selected.detail.training },
                { label: selected.detail.evalLabel, value: selected.detail.evaluation },
                { label: selected.detail.nextLabel, value: selected.detail.next },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-[96px_1fr] gap-4 py-3 sm:grid-cols-[120px_1fr]">
                  <span className="pt-0.5 text-[11px] font-semibold tracking-[0.04em] text-[#555]">{row.label}</span>
                  <span className="text-sm leading-[1.7] text-[#c0c0c5]">{row.value}</span>
                </div>
              ))}
            </div>

            {/* 주간 훈련 일정 — 탭과 함께 변경됨 */}
            <div className="mt-6 border-t border-[#1e1e1e] pt-5">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[#555]">{t.scheduleLabel}</p>
              <div className="overflow-x-auto">
                <div className="grid min-w-[400px] grid-cols-5 gap-2">
                  {selected.schedule.map((slot) => (
                    <div key={slot.day} className="overflow-hidden rounded-[3px] bg-[#1a1a1a]">
                      <div className="bg-[#cc2222] px-2 py-1.5 text-center text-[10px] font-bold text-white">{slot.day}</div>
                      <div className="px-2 py-3">
                        <p className="mb-1 text-[10px] text-[#444]">{slot.time}</p>
                        <p className="text-[11px] leading-[1.4] text-[#c0c0c5]">{slot.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-[10px] text-[#333]">{t.scheduleNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── S3 Training Program 4 Cards ── */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#cc2222]">{t.programLabel}</p>
          <h2
            className="mb-10 font-['Barlow_Condensed',sans-serif] font-black uppercase leading-[1.05]"
            style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
          >
            <span className="text-[#f5f5f7]">{t.programTitle[0]}</span>
            <br />
            <span className="text-[#cc2222]">{t.programTitle[1]}</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.programs.map((prog) => (
              <div key={prog.num} className="rounded-[4px] border-t-[3px] border-[#cc2222] bg-[#1c1c1e] px-5 py-6">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[#cc2222]">{prog.num}</p>
                <p className="mb-3 text-sm font-bold text-[#f5f5f7]">{prog.title}</p>
                <p className="text-[11px] leading-[1.7] text-[#6e6e73]">{prog.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S4 G.S.S.C Playbook ── */}
      <section className="border-b border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[4px] border-l-[3px] border-[#cc2222] bg-[#1a0808] px-6 py-6 sm:px-8 sm:py-8">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.1em] text-[#cc2222]">{t.playbookLabel}</p>
            <p
              className="mb-6 font-['Barlow_Condensed',sans-serif] font-black text-[#f5f5f7]"
              style={{ fontSize: "clamp(20px, 3vw, 28px)" }}
            >
              {t.playbookTitle}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {t.playbook.map((card, i) => (
                <div key={i} className={`rounded-[3px] bg-[#1c1c1e] px-5 py-5 ${i === 1 ? "border-t border-[#c49550]/30" : ""}`}>
                  <p className={`mb-2 text-[10px] font-bold uppercase tracking-[0.06em] ${i === 1 ? "text-[#c49550]" : "text-[#cc2222]"}`}>
                    {card.stage}
                  </p>
                  <p className="mb-2 text-sm font-bold text-[#f5f5f7]">{card.rule}</p>
                  <p className="text-[11px] leading-[1.6] text-[#6e6e73]">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── S5 Recruit CTA ── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[4px] border-l-[3px] border-[#cc2222] bg-[#1a0808] px-8 py-10 sm:px-10">
            <h2
              className="mb-3 font-['Barlow_Condensed',sans-serif] font-black uppercase leading-[1.1] text-[#f5f5f7]"
              style={{ fontSize: "clamp(24px, 4vw, 40px)" }}
            >
              {t.ctaTitle[0]}
              <br />
              <span className="text-[#cc2222]">{t.ctaTitle[1]}</span>
            </h2>
            <p className="mb-8 text-sm text-[#c0c0c5]">{t.ctaSub}</p>
            <a
              href="/application"
              className="inline-flex h-12 items-center rounded-[2px] bg-[#cc2222] px-8 text-sm font-bold text-white transition hover:bg-[#cc2222]/90"
            >
              {t.ctaBtn}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

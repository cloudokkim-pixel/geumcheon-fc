"use client";

import GSSCHeader from "@/components/GSSCHeader";
import Footer from "@/components/Footer";
import { useSiteLanguage, type Locale } from "@/components/site-language";

/* ─────────────────────────────────────────────
   타입
───────────────────────────────────────────── */
type TrackItem = {
  year: string;
  title: string;
  desc: string;
};

type RoadmapCopy = {
  pageLabel: string;
  pageTitle: string;
  pageDesc: string;
  playerTrackLabel: string;
  academicTrackLabel: string;
  timelineLabel: string;
  playerTrack: TrackItem[];
  academicTrack: TrackItem[];
  noticeText: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

/* ─────────────────────────────────────────────
   카피
───────────────────────────────────────────── */
const copy: Record<Locale, RoadmapCopy> = {
  ko: {
    pageLabel: "Career Roadmap",
    pageTitle: "커리어 로드맵",
    pageDesc:
      "금천축구클럽은 초등 입단부터 K4 실업팀 진출과 대학 진학까지 선수 개인의 목표에 맞는 수직 통합 성장 경로를 제공합니다.",
    playerTrackLabel: "선수 트랙",
    academicTrackLabel: "진학 트랙",
    timelineLabel: "성장 단계",
    playerTrack: [
      {
        year: "U12",
        title: "초등 입단",
        desc: "기본기 집중 훈련, 즐거운 축구 경험, 팀 문화 적응",
      },
      {
        year: "U15",
        title: "중학교 과정",
        desc: "포지션 이해, 팀 전술 도입, 지역 대회 참가",
      },
      {
        year: "U18",
        title: "고등학교 과정",
        desc: "실전 전술 훈련, 전국 대회 경험, 진로 컨설팅 병행",
      },
      {
        year: "PRO",
        title: "K4 실업팀 진출",
        desc: "【확인 필요 — K4 진출 선수 수】명의 선수가 K4 이상 팀에 진출했습니다.",
      },
    ],
    academicTrack: [
      {
        year: "초등",
        title: "클럽 입단",
        desc: "학업과 훈련 균형, 기초 체력 및 인성 교육",
      },
      {
        year: "중등",
        title: "중학교 연계",
        desc: "학교 체육과 클럽 훈련 병행, 체육 특기자 준비",
      },
      {
        year: "고등",
        title: "체육고·특성화고 진학",
        desc: "체육 특기자 전형, 진학 로드맵 개인 설계",
      },
      {
        year: "대학",
        title: "대학 진학",
        desc: "【확인 필요 — 대학 진학 실적】체육 특기자로 대학 진학한 선수들의 진학 현황입니다.",
      },
    ],
    noticeText:
      "실제 진출·진학 데이터는 리더옥님 확인 후 업데이트 예정입니다. 현재 표시된 숫자는 플레이스홀더입니다.",
    ctaTitle: "나만의 로드맵을 만들어 보세요",
    ctaDesc: "코치진과 함께 개인 목표에 맞는 성장 계획을 세울 수 있습니다.",
    ctaPrimary: "선수 등록 신청",
    ctaSecondary: "클럽 문의",
  },
  en: {
    pageLabel: "Career Roadmap",
    pageTitle: "Career Roadmap",
    pageDesc:
      "From elementary enrollment to K4 advancement and university admission, Geumcheon FC provides a vertically integrated growth pathway tailored to each player's goals.",
    playerTrackLabel: "Player Track",
    academicTrackLabel: "Academic Track",
    timelineLabel: "Growth Stages",
    playerTrack: [
      {
        year: "U12",
        title: "Elementary Entry",
        desc: "Fundamentals training, fun football experience, team culture",
      },
      {
        year: "U15",
        title: "Middle School",
        desc: "Positional understanding, team tactics, regional tournaments",
      },
      {
        year: "U18",
        title: "High School",
        desc: "Match tactics, national competitions, career pathway consulting",
      },
      {
        year: "PRO",
        title: "K4 Advancement",
        desc: "【To be confirmed — K4 advancement count】 players have advanced to K4 level teams.",
      },
    ],
    academicTrack: [
      {
        year: "Elem.",
        title: "Club Entry",
        desc: "Balance of study and training, physical foundation and character education",
      },
      {
        year: "Middle",
        title: "Middle School Link",
        desc: "School PE and club training in parallel, athletic scholarship preparation",
      },
      {
        year: "High",
        title: "Athletic High School",
        desc: "Athletic scholarship track, individualized academic-sports pathway",
      },
      {
        year: "Univ.",
        title: "University Entry",
        desc: "【To be confirmed — university admission results】 players have advanced via athletic scholarship.",
      },
    ],
    noticeText:
      "Actual advancement and admission data will be updated after confirmation. Numbers shown are placeholders.",
    ctaTitle: "Build your own roadmap",
    ctaDesc: "Work with our coaches to create a personalized growth plan aligned with your goals.",
    ctaPrimary: "Apply Now",
    ctaSecondary: "Contact the Club",
  },
  ja: {
    pageLabel: "Career Roadmap",
    pageTitle: "キャリアロードマップ",
    pageDesc:
      "小学校入団からK4実業チーム進出と大学進学まで、選手個人の目標に合わせた縦統合型成長パスを提供します。",
    playerTrackLabel: "選手トラック",
    academicTrackLabel: "進学トラック",
    timelineLabel: "成長ステージ",
    playerTrack: [
      { year: "U12", title: "小学校入団", desc: "基礎技術集中、楽しいサッカー体験、チーム文化への適応" },
      { year: "U15", title: "中学校課程", desc: "ポジション理解、チーム戦術導入、地域大会参加" },
      { year: "U18", title: "高校課程", desc: "実戦戦術訓練、全国大会経験、進路コンサルティング" },
      { year: "PRO", title: "K4チーム進出", desc: "【確認待ち — K4進出人数】名の選手がK4以上のチームへ進出。" },
    ],
    academicTrack: [
      { year: "小学", title: "クラブ入団", desc: "学業と練習のバランス、基礎体力と人格教育" },
      { year: "中学", title: "中学校連携", desc: "学校体育とクラブ練習の並行、体育特待生準備" },
      { year: "高校", title: "体育系高校進学", desc: "体育特待生選考、個人進学ロードマップ設計" },
      { year: "大学", title: "大学進学", desc: "【確認待ち — 大学進学実績】名が体育特待生として大学進学。" },
    ],
    noticeText: "実際の進出・進学データはリーダーオクさん確認後に更新予定です。現在の数字はプレースホルダーです。",
    ctaTitle: "自分だけのロードマップを描こう",
    ctaDesc: "コーチと共に、個人目標に合った成長計画を立てることができます。",
    ctaPrimary: "選手登録申請",
    ctaSecondary: "クラブへのお問い合わせ",
  },
  zh: {
    pageLabel: "Career Roadmap",
    pageTitle: "职业路线图",
    pageDesc:
      "从小学入队到晋升K4职业队与大学升学，金泉FC为每位球员提供纵向一体化的成长路径。",
    playerTrackLabel: "球员赛道",
    academicTrackLabel: "升学赛道",
    timelineLabel: "成长阶段",
    playerTrack: [
      { year: "U12", title: "小学入队", desc: "基础技术集中训练，享受足球乐趣，融入团队文化" },
      { year: "U15", title: "初中阶段", desc: "位置理解、团队战术导入、参加地区比赛" },
      { year: "U18", title: "高中阶段", desc: "实战战术训练，全国比赛经验，升学咨询同步进行" },
      { year: "PRO", title: "晋升K4球队", desc: "【待确认 — K4晋升人数】名球员已晋升K4及以上级别球队。" },
    ],
    academicTrack: [
      { year: "小学", title: "加入俱乐部", desc: "学习与训练平衡，体能基础与品格教育" },
      { year: "初中", title: "初中衔接", desc: "学校体育与俱乐部训练并行，体育特长生准备" },
      { year: "高中", title: "体育高中升学", desc: "体育特长生考核，个人升学路线图设计" },
      { year: "大学", title: "大学升学", desc: "【待确认 — 大学升学实绩】名球员通过体育特长生升入大学。" },
    ],
    noticeText: "实际晋升与升学数据将在确认后更新，当前显示为占位内容。",
    ctaTitle: "制定您的专属成长路线",
    ctaDesc: "与教练一起，制定符合个人目标的成长计划。",
    ctaPrimary: "申请球员注册",
    ctaSecondary: "联系俱乐部",
  },
};

/* ─────────────────────────────────────────────
   타임라인 노드 컴포넌트
───────────────────────────────────────────── */
function TimelineNode({ label, color }: { label: string; color: "red" | "gold" }) {
  const bg = color === "red" ? "bg-[#cc2222]" : "bg-[#c49550]";
  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`h-3 w-3 rounded-full ${bg}`} />
      <span
        className="text-[10px] font-black uppercase tracking-[0.1em]"
        style={{ color: color === "red" ? "#cc2222" : "#c49550" }}
      >
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   트랙 카드 컴포넌트
───────────────────────────────────────────── */
function TrackCard({
  item,
  color,
  align,
}: {
  item: TrackItem;
  color: "red" | "gold";
  align: "left" | "right";
}) {
  const accent = color === "red" ? "#cc2222" : "#c49550";
  const borderColor = color === "red" ? "border-[#cc2222]/30" : "border-[#c49550]/30";

  return (
    <div
      className={`rounded-[12px] border bg-[#1c1c1e] p-5 ${borderColor} ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      <span
        className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.15em]"
        style={{ backgroundColor: `${accent}18`, color: accent }}
      >
        {item.year}
      </span>
      <h3 className="mt-2.5 text-base font-bold text-[#f5f5f7]">{item.title}</h3>
      <p className="mt-1.5 text-[13px] leading-6 text-[#888890]">{item.desc}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   모바일 단일 컬럼 항목
───────────────────────────────────────────── */
function MobileItem({
  item,
  color,
  isLast,
}: {
  item: TrackItem;
  color: "red" | "gold";
  isLast: boolean;
}) {
  const accent = color === "red" ? "#cc2222" : "#c49550";
  const borderColor = color === "red" ? "border-[#cc2222]/30" : "border-[#c49550]/30";

  return (
    <div className="grid grid-cols-[56px_1fr] gap-4">
      {/* 타임라인 마커 */}
      <div className="flex flex-col items-center">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-[11px] font-black"
          style={{ borderColor: accent, color: accent, backgroundColor: `${accent}12` }}
        >
          {item.year}
        </div>
        {!isLast && <div className="mt-1 w-0.5 flex-1" style={{ backgroundColor: `${accent}30` }} />}
      </div>
      {/* 카드 */}
      <div className={`mb-6 rounded-[12px] border bg-[#1c1c1e] p-5 ${borderColor}`}>
        <h3 className="text-base font-bold text-[#f5f5f7]">{item.title}</h3>
        <p className="mt-1.5 text-[13px] leading-6 text-[#888890]">{item.desc}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   페이지
───────────────────────────────────────────── */
export default function RoadmapPage() {
  const { locale } = useSiteLanguage();
  const t = copy[locale];

  const stages = t.playerTrack.map((_, i) => i);

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

          {/* 트랙 범례 */}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <span className="h-3 w-3 rounded-full bg-[#cc2222]" />
              <span className="text-[#cc2222]">{t.playerTrackLabel}</span>
            </span>
            <span className="flex items-center gap-2 text-sm font-semibold">
              <span className="h-3 w-3 rounded-full bg-[#c49550]" />
              <span className="text-[#c49550]">{t.academicTrackLabel}</span>
            </span>
          </div>
        </div>
      </section>

      {/* 인포그래픽 */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

        {/* ── 데스크탑 레이아웃 (768px+): 1fr 80px 1fr ── */}
        <div className="hidden md:block">
          <div
            className="grid items-start gap-x-0"
            style={{ gridTemplateColumns: "1fr 80px 1fr" }}
          >
            {/* 트랙 레이블 행 */}
            <div className="pb-4 text-right">
              <span className="text-sm font-black uppercase tracking-[0.2em] text-[#cc2222]">
                {t.playerTrackLabel}
              </span>
            </div>
            <div />
            <div className="pb-4 text-left">
              <span className="text-sm font-black uppercase tracking-[0.2em] text-[#c49550]">
                {t.academicTrackLabel}
              </span>
            </div>

            {/* 각 단계 */}
            {stages.map((i) => (
              <>
                {/* 왼쪽: 선수 트랙 */}
                <div key={`player-${i}`} className="pb-8 pr-6 flex justify-end">
                  <div className="w-full max-w-xs">
                    <TrackCard item={t.playerTrack[i]} color="red" align="right" />
                  </div>
                </div>

                {/* 중앙: 타임라인 */}
                <div key={`center-${i}`} className="relative flex flex-col items-center pb-8">
                  {/* 세로 선 (첫 번째 아이템 위) */}
                  {i === 0 && (
                    <div className="h-4 w-0.5 bg-gradient-to-b from-transparent to-[#2a2a2e]" />
                  )}
                  <TimelineNode
                    label={t.playerTrack[i].year}
                    color={i % 2 === 0 ? "red" : "gold"}
                  />
                  {/* 세로 연결선 */}
                  {i < stages.length - 1 && (
                    <div className="mt-2 flex-1 w-0.5 bg-[#2a2a2e]" style={{ minHeight: "80px" }} />
                  )}
                </div>

                {/* 오른쪽: 진학 트랙 */}
                <div key={`academic-${i}`} className="pb-8 pl-6">
                  <div className="w-full max-w-xs">
                    <TrackCard item={t.academicTrack[i]} color="gold" align="left" />
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* ── 모바일 레이아웃 (~768px): 56px 1fr ── */}
        <div className="md:hidden space-y-0">
          {/* 선수 트랙 */}
          <div className="mb-8">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-[#cc2222]">
              {t.playerTrackLabel}
            </p>
            {t.playerTrack.map((item, i) => (
              <MobileItem
                key={item.title}
                item={item}
                color="red"
                isLast={i === t.playerTrack.length - 1}
              />
            ))}
          </div>

          {/* 구분선 */}
          <div className="my-8 border-t border-[#222]" />

          {/* 진학 트랙 */}
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-[#c49550]">
              {t.academicTrackLabel}
            </p>
            {t.academicTrack.map((item, i) => (
              <MobileItem
                key={item.title}
                item={item}
                color="gold"
                isLast={i === t.academicTrack.length - 1}
              />
            ))}
          </div>
        </div>

        {/* 데이터 확인 필요 안내 */}
        <div className="mt-10 rounded-[10px] border border-[#2a2a2e] bg-[#1c1c1e] px-5 py-4 text-sm leading-6 text-[#6e6e73]">
          ⚠ {t.noticeText}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#222] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-[clamp(1.375rem,4vw,2.25rem)] font-black text-[#f5f5f7]">{t.ctaTitle}</h2>
          <p className="mt-4 text-base text-[#c0c0c5]">{t.ctaDesc}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="/application"
              className="inline-flex h-[52px] w-full items-center justify-center rounded-[2px] bg-[#cc2222] px-10 text-base font-bold text-white transition hover:bg-[#cc2222]/90 sm:w-auto"
            >
              {t.ctaPrimary}
            </a>
            <a
              href="/contact"
              className="inline-flex h-[52px] w-full items-center justify-center rounded-[2px] border border-[#424245] bg-transparent px-10 text-base font-medium text-[#f5f5f7] transition hover:bg-white/5 sm:w-auto"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

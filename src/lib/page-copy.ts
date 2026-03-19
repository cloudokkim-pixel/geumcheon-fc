import type { Locale } from "@/components/site-language";

export const homepageGalleryCopy: Record<
  Locale,
  {
    label: string;
    title: string;
    desc: string;
    cta: string;
  }
> = {
  ko: {
    label: "Gallery",
    title: "갤러리",
    desc: "훈련, 경기, 행사, 기타 기록을 통해 금천축구클럽의 현장 분위기와 팀의 흐름을 한눈에 볼 수 있는 공간입니다.",
    cta: "전체 갤러리 보기",
  },
  en: {
    label: "Gallery",
    title: "Gallery",
    desc: "Explore training, matches, events, and other club moments collected in one gallery.",
    cta: "View Full Gallery",
  },
  ja: {
    label: "Gallery",
    title: "ギャラリー",
    desc: "トレーニング、試合、行事、そのほかの記録を一つのギャラリーでご覧いただけます。",
    cta: "ギャラリーを見る",
  },
  zh: {
    label: "Gallery",
    title: "相册",
    desc: "在一个相册中查看训练、比赛、活动以及其他俱乐部记录。",
    cta: "查看全部相册",
  },
};

export const programPageCopy: Record<
  Locale,
  {
    title: string;
    items: Array<{ title: string; desc: string }>;
  }
> = {
  ko: {
    title: "훈련 프로그램",
    items: [
      { title: "기본기 집중 세션", desc: "볼 컨트롤, 패스, 퍼스트 터치, 방향 전환을 반복적으로 훈련합니다." },
      { title: "포지션별 전술 훈련", desc: "공격, 미드필드, 수비 역할에 맞춘 판단과 전술 이해를 강화합니다." },
      { title: "피지컬 및 스피드 강화", desc: "성장기 선수에게 필요한 코어, 민첩성, 스피드 프로그램을 운영합니다." },
      { title: "진학 및 진로 컨설팅", desc: "선수 목표에 맞춘 진학 계획과 장기 로드맵을 함께 설계합니다." },
    ],
  },
  en: {
    title: "Training Programs",
    items: [
      { title: "Fundamentals Session", desc: "Ball control, passing, first touch, and directional change are trained through repetition." },
      { title: "Position-Based Tactics", desc: "We strengthen decisions and tactical understanding for attacking, midfield, and defensive roles." },
      { title: "Physical and Speed Work", desc: "Core strength, agility, and speed sessions are designed for developing players." },
      { title: "Pathway Consulting", desc: "We help players build school and long-term development plans aligned with their goals." },
    ],
  },
  ja: {
    title: "トレーニングプログラム",
    items: [
      { title: "基礎技術集中セッション", desc: "ボールコントロール、パス、ファーストタッチ、方向転換を反復して鍛えます。" },
      { title: "ポジション別戦術トレーニング", desc: "攻撃、ミッドフィルド、守備の役割に合わせた判断力と戦術理解を高めます。" },
      { title: "フィジカル・スピード強化", desc: "成長期の選手に必要な体幹、敏捷性、スピードを高めるプログラムです。" },
      { title: "進学・進路コンサルティング", desc: "選手の目標に合わせて進学計画と長期ロードマップを一緒に設計します。" },
    ],
  },
  zh: {
    title: "训练项目",
    items: [
      { title: "基础技术强化课程", desc: "通过反复训练提升控球、传球、第一脚触球和变向能力。" },
      { title: "位置战术训练", desc: "根据进攻、中场和防守角色强化判断力与战术理解。" },
      { title: "体能与速度提升", desc: "为成长阶段球员安排核心力量、敏捷性和速度训练。" },
      { title: "升学与发展咨询", desc: "根据球员目标共同规划升学路径与长期成长路线。" },
    ],
  },
};

export const applicationPageCopy: Record<
  Locale,
  {
    title: string;
    fields: [string, string, string, string, string];
    placeholders: [string, string, string, string, string];
    submit: string;
  }
> = {
  ko: {
    title: "참가 신청",
    fields: ["이름", "학교명", "학년", "연락받을 연락처", "기타"],
    placeholders: ["이름을 입력하세요", "학교명을 입력하세요", "학년을 입력하세요", "연락처를 입력하세요", "기타 문의사항을 입력하세요"],
    submit: "신청하기",
  },
  en: {
    title: "Apply",
    fields: ["Name", "School", "Grade", "Contact Number", "Notes"],
    placeholders: ["Enter your name", "Enter your school", "Enter your grade", "Enter your contact number", "Enter any additional notes"],
    submit: "Submit",
  },
  ja: {
    title: "参加申請",
    fields: ["氏名", "学校名", "学年", "連絡先", "その他"],
    placeholders: ["氏名を入力してください", "学校名を入力してください", "学年を入力してください", "連絡先を入力してください", "その他のお問い合わせ内容を入力してください"],
    submit: "申請する",
  },
  zh: {
    title: "报名申请",
    fields: ["姓名", "学校", "年级", "联系电话", "其他"],
    placeholders: ["请输入姓名", "请输入学校名称", "请输入年级", "请输入联系电话", "请输入其他咨询内容"],
    submit: "提交申请",
  },
};

export const contactPageCopy: Record<
  Locale,
  {
    title: string;
    fields: [string, string, string, string];
    placeholders: [string, string, string, string];
    submit: string;
  }
> = {
  ko: {
    title: "클럽 문의",
    fields: ["문의 제목", "이름", "연락처", "상세 내용"],
    placeholders: ["문의 제목을 입력하세요", "이름을 입력하세요", "연락처를 입력하세요", "문의 내용을 입력하세요"],
    submit: "문의하기",
  },
  en: {
    title: "Contact",
    fields: ["Inquiry Title", "Name", "Contact", "Details"],
    placeholders: ["Enter a subject", "Enter your name", "Enter your contact", "Enter your message"],
    submit: "Send Inquiry",
  },
  ja: {
    title: "お問い合わせ",
    fields: ["お問い合わせ件名", "氏名", "連絡先", "詳細内容"],
    placeholders: ["件名を入力してください", "氏名を入力してください", "連絡先を入力してください", "内容を入力してください"],
    submit: "送信する",
  },
  zh: {
    title: "联系我们",
    fields: ["咨询标题", "姓名", "联系方式", "详细内容"],
    placeholders: ["请输入咨询标题", "请输入姓名", "请输入联系方式", "请输入咨询内容"],
    submit: "发送咨询",
  },
};

export const galleryPageCopy: Record<
  Locale,
  {
    title: string;
    desc: string;
    helper: string;
    all: string;
    searchPlaceholder: string;
    search: string;
    noImageTitle: string;
    noImageDesc: string;
    empty: string;
  }
> = {
  ko: {
    title: "갤러리",
    desc: "금천축구클럽의 훈련, 경기, 행사, 기타 기록을 한곳에서 모아볼 수 있도록 정리한 갤러리입니다.",
    helper: "카테고리 필터와 검색으로 원하는 장면을 빠르게 찾아보실 수 있습니다.",
    all: "전체",
    searchPlaceholder: "제목 검색",
    search: "검색",
    noImageTitle: "등록된 이미지가 없습니다",
    noImageDesc: "썸네일 없이 게시된 갤러리입니다",
    empty: "조건에 맞는 게시글이 없습니다.",
  },
  en: {
    title: "Gallery",
    desc: "Browse training, matches, events, and other club records in one place.",
    helper: "Use category filters and search to quickly find the moments you want.",
    all: "All",
    searchPlaceholder: "Search title",
    search: "Search",
    noImageTitle: "No image uploaded",
    noImageDesc: "This gallery was posted without a thumbnail",
    empty: "No posts match your current filters.",
  },
  ja: {
    title: "ギャラリー",
    desc: "トレーニング、試合、行事、そのほかの記録を一か所で見られるようにまとめたギャラリーです。",
    helper: "カテゴリーフィルターと検索で見たい場面をすばやく探せます。",
    all: "すべて",
    searchPlaceholder: "タイトル検索",
    search: "検索",
    noImageTitle: "登録された画像がありません",
    noImageDesc: "サムネイルなしで投稿されたギャラリーです",
    empty: "条件に合う投稿がありません。",
  },
  zh: {
    title: "相册",
    desc: "这里汇集了金泉足球俱乐部的训练、比赛、活动及其他记录，方便集中查看。",
    helper: "可通过分类筛选和搜索快速找到想看的内容。",
    all: "全部",
    searchPlaceholder: "搜索标题",
    search: "搜索",
    noImageTitle: "没有已上传图片",
    noImageDesc: "这篇相册内容没有缩略图",
    empty: "没有符合条件的帖子。",
  },
};

export const galleryDetailPageCopy: Record<
  Locale,
  {
    posted: string;
    updated: string;
    info: string;
    category: string;
    createdAt: string;
    updatedAt: string;
    imageCount: string;
    previous: string;
    next: string;
    previousEmpty: string;
    nextEmpty: string;
  }
> = {
  ko: {
    posted: "게시일",
    updated: "수정일",
    info: "게시글 정보",
    category: "카테고리",
    createdAt: "생성일",
    updatedAt: "수정일",
    imageCount: "이미지 수",
    previous: "이전",
    next: "다음",
    previousEmpty: "이전 글이 없습니다.",
    nextEmpty: "다음 글이 없습니다.",
  },
  en: {
    posted: "Posted",
    updated: "Updated",
    info: "Post Information",
    category: "Category",
    createdAt: "Created",
    updatedAt: "Updated",
    imageCount: "Images",
    previous: "Previous",
    next: "Next",
    previousEmpty: "There is no previous post.",
    nextEmpty: "There is no next post.",
  },
  ja: {
    posted: "投稿日",
    updated: "更新日",
    info: "投稿情報",
    category: "カテゴリー",
    createdAt: "作成日",
    updatedAt: "更新日",
    imageCount: "画像数",
    previous: "前へ",
    next: "次へ",
    previousEmpty: "前の記事はありません。",
    nextEmpty: "次の記事はありません。",
  },
  zh: {
    posted: "发布日期",
    updated: "更新日期",
    info: "帖子信息",
    category: "分类",
    createdAt: "创建日期",
    updatedAt: "更新日期",
    imageCount: "图片数量",
    previous: "上一篇",
    next: "下一篇",
    previousEmpty: "没有上一篇文章。",
    nextEmpty: "没有下一篇文章。",
  },
};

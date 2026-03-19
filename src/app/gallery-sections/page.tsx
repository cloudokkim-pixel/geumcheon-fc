import React from "react";
import GSSCHeader from "../../components/GSSCHeader";

const gallerySections = [
  {
    title: "훈련 집중도",
    desc: "정규 훈련 모습과 선수들의 집중력, 몰입감을 담은 섹션입니다.",
    img: "https://images.unsplash.com/photo-1517649763962-0c1c5e1b8a36?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "전술 이해 훈련",
    desc: "전술 세션, 포지션별 움직임, 팀 전술 이해 장면을 보여줍니다.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "피지컬 세션",
    desc: "체력 강화, 코어 트레이닝, 스피드와 민첩성 중심 훈련입니다.",
    img: "https://images.unsplash.com/photo-1461897104016-0b3b4b7f2c6c?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "팀워크 강화",
    desc: "팀 플레이와 협동 훈련, 조별 프로그램 장면입니다.",
    img: "https://images.unsplash.com/photo-1518081461904-7b8b8e7f9a4a?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "실전 감각 향상",
    desc: "연습 경기와 대회 참가를 통해 경기 감각을 높이는 모습입니다.",
    img: "https://images.unsplash.com/photo-1518081461904-7b8b8e7f9a4a?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "진학 준비 지원",
    desc: "진학 상담과 진로 컨설팅을 포함한 지원 프로그램 소개입니다.",
    img: "https://images.unsplash.com/photo-1517649763962-0c1c5e1b8a36?auto=format&fit=crop&w=400&q=80",
  },
];

export default function GallerySectionsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <GSSCHeader />
      <div className="mt-6 flex flex-col items-center justify-center px-6">
        <h1 className="mb-8 text-3xl font-bold">훈련 갤러리 섹션</h1>
        <div className="grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gallerySections.map((section) => (
            <div key={section.title} className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-lg">
              <img src={section.img} alt={section.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <p className="mb-2 text-lg font-bold text-red-300">{section.title}</p>
                <p className="text-sm text-white/80">{section.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

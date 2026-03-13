import React from "react";
import GSSCHeader from "../../components/GSSCHeader";

const gallerySections = [
  {
    title: "훈련 집중도",
    desc: "실전 훈련 모습, 집중력과 몰입의 순간을 담은 사진 및 설명.",
    img: "https://images.unsplash.com/photo-1517649763962-0c1c5e1b8a36?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "전술 이해 훈련",
    desc: "전술 세션, 포지션별 움직임, 팀 전술 이해 장면.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "피지컬 세션",
    desc: "체력 강화, 피지컬 트레이닝, 스피드 및 민첩성 훈련.",
    img: "https://images.unsplash.com/photo-1461897104016-0b3b4b7f2c6c?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "팀워크 강화",
    desc: "팀 플레이, 협동 훈련, 단합 프로그램 장면.",
    img: "https://images.unsplash.com/photo-1518081461904-7b8b8e7f9a4a?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "실전 감각 향상",
    desc: "연습 경기, 실전 대응, 경기력 향상 모습.",
    img: "https://images.unsplash.com/photo-1518081461904-7b8b8e7f9a4a?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "진학 준비 지원",
    desc: "진학 상담, 진로 컨설팅, 지원 프로그램 장면.",
    img: "https://images.unsplash.com/photo-1517649763962-0c1c5e1b8a36?auto=format&fit=crop&w=400&q=80"
  }
];

export default function GallerySectionsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <GSSCHeader />
      <div className="flex flex-col items-center justify-center mt-6">
        <h1 className="text-3xl font-bold mb-8">훈련 갤러리 섹션</h1>
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallerySections.map((section) => (
            <div key={section.title} className="rounded-2xl overflow-hidden border border-white/10 bg-black/30 shadow-lg">
              <img src={section.img} alt={section.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-lg font-bold text-red-300 mb-2">{section.title}</p>
                <p className="text-sm text-white/80">{section.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

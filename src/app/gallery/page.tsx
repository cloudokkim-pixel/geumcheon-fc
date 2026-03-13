import React from "react";
import GSSCHeader from "../../components/GSSCHeader";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <GSSCHeader />
      <div className="flex flex-col items-center justify-center mt-6">
        <h1 className="text-3xl font-bold mb-8">훈련 갤러리</h1>
        <div className="w-full max-w-2xl bg-white/5 rounded-2xl p-8 shadow-lg backdrop-blur">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* 훈련 집중도 */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-black/30">
                  <img src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=400&q=80" alt="훈련 집중도" className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-lg font-bold text-red-300">훈련 집중도</p>
                <p className="text-sm text-white/80 mt-2">실전 훈련 모습</p>
              </div>
            </div>
            {/* 전술 이해 훈련 */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-black/30">
                  <img src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=400&q=80" alt="전술 이해 훈련" className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-lg font-bold text-red-300">전술 이해 훈련</p>
                <p className="text-sm text-white/80 mt-2">전술 세션, 포지션별 움직임, 팀 전술 이해 장면</p>
              </div>
            </div>
            {/* 피지컬 세션 */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-black/30">
                  <img src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=400&q=80" alt="피지컬 세션" className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-lg font-bold text-red-300">피지컬 세션</p>
                <p className="text-sm text-white/80 mt-2">체력 강화, 피지컬 트레이닝, 스피드 및 민첩성 훈련</p>
              </div>
            </div>
            {/* 팀워크 강화 */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-black/30">
                  <img src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=400&q=80" alt="팀워크 강화" className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-lg font-bold text-red-300">팀워크 강화</p>
                <p className="text-sm text-white/80 mt-2">팀 플레이, 협동 훈련, 단합 프로그램 장면</p>
              </div>
            </div>
            {/* 실전 감각 향상 */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-black/30">
                  <img src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=400&q=80" alt="실전 감각 향상" className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-lg font-bold text-red-300">실전 감각 향상</p>
                <p className="text-sm text-white/80 mt-2">연습 경기, 실전 대응, 경기력 향상 모습</p>
              </div>
            </div>
            {/* 진학 준비 지원 */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-black/30">
                  <img src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=400&q=80" alt="진학 준비 지원" className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-lg font-bold text-red-300">진학 준비 지원</p>
                <p className="text-sm text-white/80 mt-2">진학 상담, 진로 컨설팅, 지원 프로그램 장면</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

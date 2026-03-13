import React from "react";
import GSSCHeader from "../../components/GSSCHeader";

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <GSSCHeader />
      <div className="flex flex-col items-center justify-center mt-6">
        <h1 className="text-3xl font-bold mb-8">훈련 프로그램</h1>
        <div className="w-full max-w-2xl bg-white/5 rounded-2xl p-8 shadow-lg backdrop-blur">
          <ul className="space-y-6">
            <li className="border-b border-white/10 pb-6">
              <h2 className="text-xl font-bold text-red-300 mb-2">기본기 집중 세션</h2>
              <p className="text-white/80">볼 컨트롤, 패스, 첫 터치, 밸런스와 방향 전환 중심의 반복 훈련</p>
            </li>
            <li className="border-b border-white/10 pb-6">
              <h2 className="text-xl font-bold text-red-300 mb-2">포지션별 디테일 훈련</h2>
              <p className="text-white/80">공격, 미드필드, 수비 역할별 상황 판단과 전술 이해 훈련</p>
            </li>
            <li className="border-b border-white/10 pb-6">
              <h2 className="text-xl font-bold text-red-300 mb-2">피지컬 · 스피드 강화</h2>
              <p className="text-white/80">성장기 선수에게 필요한 민첩성, 코어, 스피드 보강 프로그램 운영</p>
            </li>
            <li>
              <h2 className="text-xl font-bold text-red-300 mb-2">진학 · 진로 컨설팅</h2>
              <p className="text-white/80">선수 목표에 맞춘 진학 설계와 장기 커리어 로드맵 지원</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

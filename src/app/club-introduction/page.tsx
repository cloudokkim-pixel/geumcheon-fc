import React from "react";
import GSSCHeader from "../../components/GSSCHeader";

export default function GSSCIntroPage() {
  const sections = [
    {
      title: "클럽 소개",
      text: "금천축구클럽은 축구를 통해 성장, 팀워크, 도전을 배우는 축구 커뮤니티입니다. 유소년 선수들이 기본기부터 실전 감각까지 균형 있게 성장할 수 있도록 훈련 중심의 환경을 지향합니다.",
    },
    {
      title: "운영 방향",
      text: "훈련의 완성도, 경기 경험, 인성 교육을 함께 고려한 프로그램 구성으로 선수 개개인의 잠재력을 끌어내는 데 집중합니다.",
    },
    {
      title: "핵심 가치",
      text: "Discipline · Respect · Teamwork · Challenge. 경기력 향상과 더불어 스포츠맨십과 책임감을 함께 키웁니다.",
    },
  ];

  const programs = [
    "기본기 훈련: 패스, 드리블, 볼 컨트롤, 슈팅",
    "개인 전술: 포지션 이해, 1:1 대응, 판단 속도 향상",
    "팀 전술: 빌드업, 수비 조직, 전환 플레이",
    "실전 운영: 연습 경기, 친선전, 대회 참가 중심 경험",
  ];

  const reasons = [
    "선수 성장 중심의 단계별 훈련",
    "훈련과 경기 경험의 균형 있는 운영",
    "팀워크와 태도를 함께 강조하는 지도 철학",
    "강한 인상을 주는 블랙 · 레드 · 골드 아이덴티티",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <GSSCHeader />
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-black via-zinc-950 to-red-950/40">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(90deg,transparent_0%,transparent_44%,rgba(255,255,255,0.08)_44%,rgba(255,255,255,0.08)_56%,transparent_56%,transparent_100%)] bg-[length:220px_220px]" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[420px_1fr] md:px-10 md:py-24">
          <div className="flex items-center justify-center">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
              <div className="flex h-[420px] w-[320px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-zinc-950 text-center">
                <div>
                  <div className="mb-3 text-xs uppercase tracking-[0.5em] text-yellow-400">G.S.S.C</div>
                  <div className="text-2xl font-black tracking-wide">금천축구클럽</div>
                  <div className="mt-4 text-sm text-zinc-400"><img src="http://fs.arumnet.com/image/N1010BONSA/event/2023121540/%EA%B8%88%EC%B2%9C%20%EC%B6%95%EA%B5%AC%20%ED%81%B4%EB%9F%BD%20%EC%9D%B4%EB%AF%B8%EC%A7%80.png" alt="금천축구클럽 로고" className="mx-auto h-[360px] w-auto object-contain" /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-sm text-yellow-300">
              GEUMCHEON SPORT SOCIAL COOP
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              축구로 성장하고
              <br />
              팀으로 완성되는 클럽
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
              블랙과 레드의 강한 아이덴티티, 체계적인 훈련 운영, 실전 경험 중심의 프로그램.
              금천축구클럽은 선수의 현재보다 가능성에 집중하는 축구 소개 페이지를 위한
              원페이지 디자인 시안입니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#about" className="rounded-2xl bg-red-600 px-6 py-3 font-semibold shadow-lg shadow-red-950/50 transition hover:-translate-y-0.5">
                클럽 소개 보기
              </a>
              <a href="#contact" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-zinc-100 transition hover:bg-white/10">
                문의 섹션 이동
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400">About Club</div>
            <h2 className="text-3xl font-black md:text-4xl">브랜드 소개</h2>
          </div>
          <div className="hidden text-sm text-zinc-500 md:block">Since 2015 · G.S.S.C</div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-zinc-950 p-7 shadow-xl shadow-black/30">
              <h3 className="mb-4 text-xl font-bold text-white">{item.title}</h3>
              <p className="text-sm leading-7 text-zinc-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950/80">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-10">
          <div className="rounded-[2rem] border border-red-500/20 bg-gradient-to-br from-red-950/50 to-black p-8">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400">Training Program</div>
            <h2 className="text-3xl font-black md:text-4xl">훈련 프로그램</h2>
            <div className="mt-8 space-y-4">
              {programs.map((program, index) => (
                <div key={program} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-black text-black">
                    {index + 1}
                  </div>
                  <div className="leading-7 text-zinc-200">{program}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black p-8">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400">Why GSSC</div>
            <h2 className="text-3xl font-black md:text-4xl">선택 포인트</h2>
            <div className="mt-8 space-y-4">
              {reasons.map((reason) => (
                <div key={reason} className="rounded-2xl border border-white/10 px-5 py-4 text-zinc-200">
                  {reason}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-6 text-sm leading-7 text-yellow-100">
              홈페이지 운영 시에는 이 영역에 U12/U15 팀 소개, 지도 철학, 활동 사진, 인스타그램 연동 피드를 추가하면 완성도가 높아집니다.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950">
              <div className="flex h-60 items-center justify-center bg-gradient-to-br from-red-700/20 via-black to-yellow-500/10 text-zinc-500">
                활동 사진 영역 {item}
              </div>
              <div className="p-6">
                <div className="text-lg font-bold">Activity Showcase {item}</div>
                <p className="mt-2 text-sm leading-7 text-zinc-400">훈련, 경기, 대회, 팀워크 장면 등 실제 사진으로 대체 권장</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-yellow-400">Contact</div>
            <h2 className="text-3xl font-black md:text-4xl">입단 문의 / 클럽 안내</h2>
            <p className="mt-4 max-w-2xl text-zinc-300 leading-7">
              실제 운영 시에는 전화번호, 카카오톡 채널, 인스타그램 주소, 훈련 지역, 모집 대상 등을 이 섹션에 배치하면 됩니다.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["활동 지역", "서울 금천구"],
                ["운영 채널", "Instagram / KakaoTalk"],
                ["문의 안내", "연락처 정보 입력"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <div className="text-sm text-zinc-500">{label}</div>
                  <div className="mt-2 text-lg font-bold">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

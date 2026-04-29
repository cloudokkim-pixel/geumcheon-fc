"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const FOUNDED = new Date("2015-03-01");

const MONTH_LABELS = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
const SAMPLE_VISITS = [312, 287, 345, 401, 389, 422, 398, 441, 378, 415, 432, 389];

const CONTENT_CARDS = [
  { tag: "Gallery", name: "갤러리 관리", desc: "훈련·경기 사진 게시물", href: "/admin/gallery", btnLabel: "+ 글 작성" },
  { tag: "Staff", name: "지도자 관리", desc: "코칭스태프 프로필·이력", href: "/admin/staff", btnLabel: "+ 등록" },
  { tag: "FAQ", name: "FAQ 관리", desc: "자주 묻는 질문 등록·수정", href: "/admin/faq", btnLabel: "+ 추가" },
  { tag: "Career", name: "진학 관리", desc: "진학 현황 데이터 관리", href: "/admin/achievements", btnLabel: "+ 등록" },
  { tag: "Schedule", name: "경기일정 관리", desc: "연령별 경기·훈련 일정 등록", href: "/admin/schedule", btnLabel: "+ 일정 추가" },
  { tag: "Partners", name: "파트너 관리", desc: "협력기관·스폰서 등록·수정", href: "/admin/partners", btnLabel: "+ 등록" },
];

function countUp(setter: (v: number) => void, target: number, duration: number) {
  const start = performance.now();
  function tick(now: number) {
    const progress = Math.min((now - start) / duration, 1);
    setter(Math.floor(progress * target));
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

export default function AdminDashboard() {
  const today = new Date();
  const totalDays = Math.floor((today.getTime() - FOUNDED.getTime()) / (1000 * 60 * 60 * 24));
  const season = today.getFullYear() - 2015 + 1;
  const yearEnd = new Date(today.getFullYear(), 11, 31);
  const remaining = Math.floor((yearEnd.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  const todayVisits = 127;

  const currentMonth = today.getMonth();
  const chartData = MONTH_LABELS.slice(0, currentMonth + 1).map((label, i) => ({
    label,
    value: SAMPLE_VISITS[i],
  }));

  const [days, setDays] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const dateStr = today.toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric", weekday: "short" });

  useEffect(() => {
    const timer = setTimeout(() => {
      countUp(setDays, totalDays, 1400);
      drawChart();
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  function drawChart() {
    const svg = svgRef.current;
    if (!svg) return;
    const ns = "http://www.w3.org/2000/svg";
    const isDesktop = window.innerWidth >= 768;
    const W = 400, H = isDesktop ? 160 : 130, padL = 6, padR = 6, padT = 20, padB = 20;
    const chartW = W - padL - padR;
    const chartH = H - padT - padB;
    const n = chartData.length;
    const maxV = Math.max(...chartData.map((d) => d.value));
    const slot = chartW / n;
    const barW = slot * 0.5;
    const barRx = barW / 2;

    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.style.height = isDesktop ? "150px" : "120px";
    svg.innerHTML = "";

    const defs = document.createElementNS(ns, "defs");
    defs.innerHTML = `
      <linearGradient id="gNorm" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#cc2222" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="#cc2222" stop-opacity="0.06"/>
      </linearGradient>
      <linearGradient id="gCur" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#cc2222" stop-opacity="1"/>
        <stop offset="100%" stop-color="#cc2222" stop-opacity="0.25"/>
      </linearGradient>`;
    svg.appendChild(defs);

    chartData.forEach((d, i) => {
      const isCur = i === n - 1;
      const bH = (d.value / maxV) * chartH;
      const x = padL + i * slot + (slot - barW) / 2;
      const y = padT + chartH - bH;

      const track = document.createElementNS(ns, "rect");
      track.setAttribute("x", String(x));
      track.setAttribute("y", String(padT));
      track.setAttribute("width", String(barW));
      track.setAttribute("height", String(chartH));
      track.setAttribute("rx", String(barRx));
      track.setAttribute("fill", "rgba(0,0,0,0.04)");
      svg.appendChild(track);

      const bar = document.createElementNS(ns, "rect");
      bar.setAttribute("x", String(x));
      bar.setAttribute("y", String(y));
      bar.setAttribute("width", String(barW));
      bar.setAttribute("height", String(bH));
      bar.setAttribute("rx", String(barRx));
      bar.setAttribute("fill", isCur ? "url(#gCur)" : "url(#gNorm)");
      bar.style.transformOrigin = `${x}px ${padT + chartH}px`;
      bar.style.transform = "scaleY(0)";
      bar.style.transition = `transform 0.5s cubic-bezier(.4,0,.2,1) ${i * 50}ms`;
      svg.appendChild(bar);
      requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.transform = "scaleY(1)"; }));

      const lbl = document.createElementNS(ns, "text");
      lbl.setAttribute("x", String(x + barW / 2));
      lbl.setAttribute("y", String(H - 5));
      lbl.setAttribute("text-anchor", "middle");
      lbl.setAttribute("font-family", "'Barlow Condensed',sans-serif");
      lbl.setAttribute("font-size", "9");
      lbl.setAttribute("font-weight", "700");
      lbl.setAttribute("fill", isCur ? "#cc2222" : "#ccc");
      lbl.textContent = d.label.replace("월", "");
      svg.appendChild(lbl);

      if (isCur) {
        const bx = x + barW / 2;
        const by = y - 4;
        const bg = document.createElementNS(ns, "rect");
        bg.setAttribute("x", String(bx - 16));
        bg.setAttribute("y", String(by - 13));
        bg.setAttribute("width", "32");
        bg.setAttribute("height", "14");
        bg.setAttribute("rx", "7");
        bg.setAttribute("fill", "#cc2222");
        svg.appendChild(bg);
        const vt = document.createElementNS(ns, "text");
        vt.setAttribute("x", String(bx));
        vt.setAttribute("y", String(by - 3));
        vt.setAttribute("text-anchor", "middle");
        vt.setAttribute("font-family", "'Barlow Condensed',sans-serif");
        vt.setAttribute("font-size", "9");
        vt.setAttribute("font-weight", "700");
        vt.setAttribute("fill", "#fff");
        vt.textContent = d.value.toLocaleString();
        svg.appendChild(vt);
      }
    });
  }

  return (
    <div>
      {/* PAGE HEADER */}
      <div className="flex items-end justify-between border-b border-[#e8e8e8] bg-white px-4 pb-4 pt-5 sm:px-6 sm:pb-[18px] sm:pt-6">
        <div>
          <p className="font-['Barlow_Condensed',sans-serif] text-[10px] font-bold uppercase tracking-[0.18em] text-[#cc2222]">
            Admin Dashboard
          </p>
          <h1 className="mt-1 font-['Barlow_Condensed',sans-serif] text-[34px] font-black uppercase leading-none tracking-[0.01em] text-black sm:text-[40px]">
            대시보드
          </h1>
        </div>
        <p className="text-right text-[11px] leading-relaxed text-[#bbb]">{dateStr}</p>
      </div>

      <div className="flex flex-col gap-4 px-3.5 py-4 sm:gap-5 sm:px-6 sm:py-5">

        {/* HERO */}
        <div className="rounded-[14px] bg-white p-5 pb-4 shadow-[0_2px_8px_rgba(0,0,0,0.07)] md:px-7 md:pb-5 md:pt-6">
          <div className="flex flex-col md:flex-row md:items-stretch">
            <div className="border-b border-[#e8e8e8] pb-4 md:flex md:flex-col md:justify-center md:border-b-0 md:border-r md:pb-0 md:pr-7">
              <p className="font-['Barlow_Condensed',sans-serif] text-[10px] font-bold uppercase tracking-[0.18em] text-[#cc2222]">
                Since 2015 · G.C.S.C
              </p>
              <div className="mt-1.5 font-['Barlow_Condensed',sans-serif] text-[64px] font-black leading-none tracking-[-3px] text-black">
                {days.toLocaleString()}
                <span className="ml-1 text-[18px] font-bold tracking-normal text-[#bbb]">일째</span>
              </div>
              <p className="mt-1.5 text-[11px] leading-relaxed text-[#888]">
                2015년 창단부터<br />오늘까지 함께 성장 중
              </p>
              <div className="mt-3.5 flex gap-5">
                <div>
                  <div className="font-['Barlow_Condensed',sans-serif] text-[20px] font-black leading-none tracking-[-0.5px] text-black">
                    {season}
                  </div>
                  <div className="mt-0.5 text-[10px] text-[#888]">번째 시즌</div>
                </div>
                <div>
                  <div className="font-['Barlow_Condensed',sans-serif] text-[20px] font-black leading-none tracking-[-0.5px] text-black">
                    {remaining.toLocaleString()}
                  </div>
                  <div className="mt-0.5 text-[10px] text-[#888]">연말까지 D-</div>
                </div>
                <div>
                  <div className="font-['Barlow_Condensed',sans-serif] text-[20px] font-black leading-none tracking-[-0.5px] text-black">
                    {todayVisits}
                  </div>
                  <div className="mt-0.5 text-[10px] text-[#888]">오늘 접속</div>
                </div>
              </div>
            </div>

            <div className="min-w-0 flex-1 pt-4 md:pl-7 md:pt-0">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#444]">
                  월별 사이트 접속자{" "}
                  <span className="text-[10px] font-normal text-[#bbb]">(올해)</span>
                </span>
                <span className="rounded-[20px] bg-[#cc2222]/8 px-2 py-0.5 font-['Barlow_Condensed',sans-serif] text-[11px] font-bold text-[#cc2222]">
                  Today {todayVisits}명
                </span>
              </div>
              <svg
                ref={svgRef}
                className="w-full"
                style={{ overflow: "visible" }}
              />
            </div>
          </div>
        </div>

        {/* 신청 관리 */}
        <div>
          <div className="mb-2.5 flex items-center gap-2">
            <span className="h-[13px] w-[3px] rounded-sm bg-[#cc2222]" />
            <span className="font-['Barlow_Condensed',sans-serif] text-[13px] font-bold uppercase tracking-[0.14em] text-[#888]">
              신청 관리
            </span>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-2.5">
            {[
              {
                count: 5,
                title: "미처리 문의",
                href: "/admin/contact",
                rows: [
                  { rank: 1, text: "U-15 입단 관련 문의드립니다", meta: "김OO · 오늘 14:22", isNew: true },
                  { rank: 2, text: "훈련 일정 확인 요청", meta: "박OO · 오늘 11:05", isNew: true },
                  { rank: 3, text: "후원 방법 안내 요청", meta: "이OO · 어제", chip: "처리중" },
                  { rank: 4, text: "클럽 소개 자료 요청", meta: "최OO · 4/16", chip: "완료" },
                ],
              },
              {
                count: 3,
                title: "입단 신청 대기",
                href: "/admin/application",
                rows: [
                  { rank: 1, text: "현OO · U-15 / MF", meta: "2011년생 · 오늘 접수", isNew: true },
                  { rank: 2, text: "정OO · U-12 / FW", meta: "2014년생 · 어제 접수", isNew: true },
                  { rank: 3, text: "강OO · U-15 / GK", meta: "2012년생 · 4/16 접수", chip: "검토중" },
                  { rank: 4, text: "임OO · U-18 / DF", meta: "2009년생 · 4/14 접수", chip: "완료" },
                ],
              },
              {
                count: 2,
                title: "후원 신청 미확인",
                href: "/admin/support-requests",
                rows: [
                  { rank: 1, text: "OO기업 · 연간 후원", meta: "오늘 접수", isNew: true },
                  { rank: 2, text: "개인 후원 · 김OO", meta: "4/16 접수", isNew: true },
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex-1 overflow-hidden rounded-[14px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.07)]"
              >
                <div className="flex items-end justify-between border-b border-[#e8e8e8] px-4 py-4">
                  <div>
                    <div className="font-['Barlow_Condensed',sans-serif] text-[36px] font-black leading-none tracking-[-1px] text-[#cc2222]">
                      {card.count}
                    </div>
                    <div className="mt-1 text-[13px] font-semibold text-[#444]">{card.title}</div>
                  </div>
                  <Link
                    href={card.href}
                    className="pb-0.5 font-['Barlow_Condensed',sans-serif] text-[11px] font-bold uppercase tracking-[0.08em] text-[#bbb] transition hover:text-[#cc2222]"
                  >
                    전체보기 →
                  </Link>
                </div>
                {card.rows.map((row) => (
                  <div
                    key={row.rank}
                    className="flex items-center gap-2.5 border-b border-[#e8e8e8] px-4 py-[13px] last:border-b-0"
                  >
                    <span className="w-3.5 shrink-0 text-right font-['Barlow_Condensed',sans-serif] text-[12px] font-bold text-[#bbb]">
                      {row.rank}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[14px] font-semibold leading-snug text-black">
                        {row.text}
                      </div>
                      <div className="mt-0.5 text-[11px] text-[#888]">{row.meta}</div>
                    </div>
                    <div className="shrink-0">
                      {row.isNew ? (
                        <span className="inline-block rounded-[20px] bg-[#cc2222]/[0.08] px-[9px] py-[3px] font-['Barlow_Condensed',sans-serif] text-[10px] font-bold uppercase tracking-[0.04em] text-[#cc2222]">
                          신규
                        </span>
                      ) : (
                        <span className="inline-block rounded-[20px] bg-[#f2f2f2] px-[9px] py-[3px] font-['Barlow_Condensed',sans-serif] text-[10px] font-bold uppercase tracking-[0.04em] text-[#888]">
                          {row.chip}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 콘텐츠 관리 */}
        <div>
          <div className="mb-2.5 flex items-center gap-2">
            <span className="h-[13px] w-[3px] rounded-sm bg-[#cc2222]" />
            <span className="font-['Barlow_Condensed',sans-serif] text-[13px] font-bold uppercase tracking-[0.14em] text-[#888]">
              콘텐츠 관리
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-2.5">
            {CONTENT_CARDS.map((card) => (
              <div
                key={card.tag}
                className="flex flex-col gap-1.5 rounded-[14px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.07)]"
                style={{ padding: "18px 16px 14px" }}
              >
                <span className="font-['Barlow_Condensed',sans-serif] text-[9px] font-bold uppercase tracking-[0.16em] text-[#cc2222]">
                  {card.tag}
                </span>
                <span className="text-[14px] font-bold text-black">{card.name}</span>
                <span className="mb-1.5 text-[11px] leading-[1.5] text-[#888]">{card.desc}</span>
                <div className="mt-auto flex gap-1.5 border-t border-[#e8e8e8] pt-2.5">
                  <Link
                    href={card.href}
                    className="flex-1 rounded-[8px] bg-[#f2f2f2] px-1 py-2 text-center text-[12px] font-semibold text-[#444] transition hover:bg-[#e8e8e8]"
                  >
                    관리
                  </Link>
                  <Link
                    href={`${card.href}/new`}
                    className="flex-1 rounded-[8px] bg-[#cc2222]/[0.08] px-1 py-2 text-center text-[12px] font-semibold text-[#cc2222] transition hover:bg-[#cc2222]/[0.14]"
                  >
                    {card.btnLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 최근 활동 */}
        <div>
          <div className="mb-2.5 flex items-center gap-2">
            <span className="h-[13px] w-[3px] rounded-sm bg-[#cc2222]" />
            <span className="font-['Barlow_Condensed',sans-serif] text-[13px] font-bold uppercase tracking-[0.14em] text-[#888]">
              최근 활동
            </span>
          </div>
          <div className="overflow-hidden rounded-[14px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
            {[
              { active: true, text: "gcadmin 님이 갤러리 게시물 발행 [금천U-15] 2026년 03월 3주차 훈련", time: "2026-03-19 · 오전 10:42" },
              { active: true, text: "gcadmin 님 로그인", time: "2026-04-18 · 오후 2:00" },
              { active: false, text: "갤러리 게시물 수정 및 이미지 2장 추가", time: "2026-03-19 · 오전 9:15" },
            ].map((log, i, arr) => (
              <div key={i} className="flex gap-3 px-4 py-3">
                <div className="flex shrink-0 flex-col items-center pt-1.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${log.active ? "bg-black" : "bg-[#bbb]"}`} />
                  {i < arr.length - 1 && <span className="mt-0.5 min-h-[12px] w-px flex-1 bg-[#e8e8e8]" />}
                </div>
                <div className={i < arr.length - 1 ? "pb-2" : ""}>
                  <p className="text-[13px] leading-relaxed text-[#444]">{log.text}</p>
                  <p className="mt-0.5 text-[11px] text-[#bbb]">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

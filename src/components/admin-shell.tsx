"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type NavItem = { href: string; label: string; badge?: number };
type NavGroup = { group: string; items: NavItem[] };

const navGroups: NavGroup[] = [
  {
    group: "Overview",
    items: [{ href: "/admin", label: "대시보드" }],
  },
  {
    group: "콘텐츠 관리",
    items: [
      { href: "/admin/gallery", label: "갤러리 관리" },
      { href: "/admin/staff", label: "지도자 관리" },
      { href: "/admin/faq", label: "FAQ 관리" },
      { href: "/admin/achievements", label: "진학 관리" },
      { href: "/admin/schedule", label: "경기일정 관리" },
      { href: "/admin/partners", label: "파트너 관리" },
    ],
  },
  {
    group: "신청 관리",
    items: [
      { href: "/admin/application", label: "입단 신청 관리", badge: 3 },
      { href: "/admin/support-requests", label: "후원 관리", badge: 2 },
      { href: "/admin/contact", label: "문의 관리", badge: 5 },
    ],
  },
  {
    group: "시스템",
    items: [{ href: "/admin/users", label: "사용자 관리" }],
  },
];

type Props = { username: string; children: React.ReactNode };

export default function AdminShell({ username, children }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  function isActive(href: string) {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  function NavList({ onSelect }: { onSelect?: () => void }) {
    return (
      <>
        {navGroups.map((group, gi) => (
          <div key={group.group}>
            <div className="px-4 pb-1 pt-3 font-['Barlow_Condensed',sans-serif] text-[9px] font-bold uppercase tracking-[0.18em] text-[#bbb]">
              {group.group}
            </div>
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onSelect}
                className={`mx-2 flex items-center justify-between px-3 text-[13px] font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-[#f2f2f2] font-semibold text-[#cc2222]"
                    : "text-[#444] hover:bg-[#f2f2f2] hover:text-[#cc2222]"
                }`}
                style={{
                  borderRadius: onSelect ? 10 : 8,
                  fontSize: onSelect ? 14 : 13,
                  marginTop: 2,
                  marginBottom: 2,
                  paddingTop: onSelect ? 11 : 9,
                  paddingBottom: onSelect ? 11 : 9,
                }}
              >
                {item.label}
                {item.badge ? (
                  <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-[9px] bg-[#cc2222] px-[5px] font-['Barlow_Condensed',sans-serif] text-[10px] font-bold text-white">
                    {item.badge}
                  </span>
                ) : null}
              </Link>
            ))}
            {gi < navGroups.length - 1 && (
              <div className="mx-4 my-1.5 h-px bg-[#e8e8e8]" />
            )}
          </div>
        ))}
      </>
    );
  }

  return (
    <div className="admin-ui min-h-dvh bg-[#f2f2f2] text-[#111] antialiased">
      {/* TOP BAR */}
      <header
        style={{ borderTop: "3px solid #cc2222" }}
        className="fixed left-0 right-0 top-0 z-[300] flex h-[52px] items-center border-b border-[#e8e8e8] bg-white px-4"
      >
        <div className="min-w-0 flex-1">
          <span className="block truncate font-['Barlow_Condensed',sans-serif] text-[18px] font-black uppercase leading-none tracking-[0.02em] text-black">
            서울금천축구클럽
          </span>
          <span className="mt-0.5 block font-['Barlow_Condensed',sans-serif] text-[9px] font-bold uppercase tracking-[0.14em] text-[#888]">
            G.S.S.C
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-2.5">
          <span className="rounded-[20px] border border-[#cc2222]/30 px-2.5 py-[3px] font-['Barlow_Condensed',sans-serif] text-[10px] font-bold uppercase tracking-[0.16em] text-[#cc2222]">
            Admin
          </span>
          <button
            className="flex flex-col gap-1 p-1.5 md:hidden"
            onClick={() => setDrawerOpen(true)}
            aria-label="메뉴 열기"
          >
            <span className="block h-[1.5px] w-[18px] rounded-sm bg-[#444]" />
            <span className="block h-[1.5px] w-[18px] rounded-sm bg-[#444]" />
            <span className="block h-[1.5px] w-[12px] rounded-sm bg-[#444]" />
          </button>
        </div>
      </header>

      {/* SIDEBAR (desktop) */}
      <aside className="fixed bottom-0 left-0 top-[52px] z-[200] hidden w-[224px] flex-col overflow-y-auto border-r border-[#e8e8e8] bg-white md:flex">
        <div className="border-b border-[#e8e8e8] px-4 pb-3.5 pt-[18px]">
          <div className="font-['Barlow_Condensed',sans-serif] text-[18px] font-black uppercase leading-none tracking-[0.02em] text-black">
            {username}
          </div>
          <div className="mt-0.5 font-['Barlow_Condensed',sans-serif] text-[9px] font-bold uppercase tracking-[0.16em] text-[#cc2222]">
            Super Admin
          </div>
          <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-[#bbb]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1a7a3e]" />
            온라인
          </div>
        </div>
        <nav className="flex-1 py-2">
          <NavList />
        </nav>
        <div className="border-t border-[#e8e8e8] p-4">
          <button
            onClick={handleLogout}
            className="mb-2 w-full rounded-[8px] bg-[#f2f2f2] py-[9px] text-[12px] font-semibold text-[#444] transition hover:text-[#cc2222]"
          >
            로그아웃
          </button>
          <p className="text-center font-['Barlow_Condensed',sans-serif] text-[9px] font-bold uppercase tracking-[0.14em] text-[#bbb]">
            G.S.S.C Admin v1.0
          </p>
        </div>
      </aside>

      {/* OVERLAY */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-[400] bg-black/30"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* DRAWER (mobile) */}
      <div
        style={{ borderTop: "3px solid #cc2222" }}
        className={`fixed bottom-0 right-0 top-0 z-[500] flex w-[272px] flex-col overflow-y-auto rounded-l-[16px] bg-white shadow-xl transition-transform duration-[280ms] ease-[cubic-bezier(.4,0,.2,1)] ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="shrink-0 border-b border-[#e8e8e8] px-5 pb-4 pt-5">
          <div className="font-['Barlow_Condensed',sans-serif] text-[22px] font-black uppercase leading-none tracking-[0.02em] text-black">
            {username}
          </div>
          <div className="mt-0.5 font-['Barlow_Condensed',sans-serif] text-[10px] font-bold uppercase tracking-[0.16em] text-[#cc2222]">
            Super Admin
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-[11px] text-[#888]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1a7a3e]" />
            온라인
          </div>
        </div>
        <nav className="flex-1 py-2">
          <NavList onSelect={() => setDrawerOpen(false)} />
        </nav>
        <div className="shrink-0 border-t border-[#e8e8e8] p-4">
          <button
            onClick={handleLogout}
            className="w-full rounded-[10px] bg-[#f2f2f2] py-[11px] text-[13px] font-semibold text-[#444] transition hover:text-[#cc2222]"
          >
            로그아웃
          </button>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div className="pt-[52px] md:ml-[224px]">
        <div
          className="pb-[calc(58px+env(safe-area-inset-bottom,0px))] md:pb-10"
        >
          {children}
        </div>
      </div>

      {/* BOTTOM TAB (mobile only) */}
      <nav
        style={{ height: "calc(58px + env(safe-area-inset-bottom, 0px))", paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        className="fixed bottom-0 left-0 right-0 z-[300] flex items-stretch border-t border-[#e8e8e8] bg-white md:hidden"
      >
        {(
          [
            { href: "/admin", label: "홈" },
            { href: "/admin/application", label: "신청 관리", badge: 10 },
            { href: "/admin/gallery", label: "콘텐츠" },
          ] as (NavItem & { href: string })[]
        ).map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`relative flex flex-1 flex-col items-center justify-center gap-0.5 pb-1 pt-2 transition-colors ${
              isActive(tab.href) ? "text-[#cc2222]" : "text-[#bbb]"
            }`}
          >
            {isActive(tab.href) && (
              <span className="absolute left-[20%] right-[20%] top-0 h-0.5 rounded-b-sm bg-[#cc2222]" />
            )}
            {tab.badge ? (
              <span
                style={{ right: "calc(50% - 22px)" }}
                className="absolute top-[5px] flex h-4 min-w-[16px] items-center justify-center rounded-[8px] border-2 border-white bg-[#cc2222] px-1 font-['Barlow_Condensed',sans-serif] text-[9px] font-bold text-white"
              >
                {tab.badge}
              </span>
            ) : null}
            <span className="font-['Barlow_Condensed',sans-serif] text-[10px] font-bold uppercase tracking-[0.1em]">
              {tab.label}
            </span>
          </Link>
        ))}
        <button
          className="relative flex flex-1 flex-col items-center justify-center gap-0.5 pb-1 pt-2 text-[#bbb] transition-colors"
          onClick={() => setDrawerOpen(true)}
        >
          <span className="font-['Barlow_Condensed',sans-serif] text-[10px] font-bold uppercase tracking-[0.1em]">
            메뉴
          </span>
        </button>
      </nav>
    </div>
  );
}

"use client";

import React from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useSiteLanguage } from "./site-language";

const logoSrc =
  "http://fs.arumnet.com/image/N1010BONSA/event/2023121540/%EA%B8%88%EC%B2%9C%20%EC%B6%95%EA%B5%AC%20%ED%81%B4%EB%9F%BD%20%EC%9D%B4%EB%AF%B8%EC%A7%80.png";

const localeFlags = {
  ko: { src: "https://flagcdn.com/w40/kr.png", alt: "Korea flag" },
  en: { src: "https://flagcdn.com/w40/us.png", alt: "United States flag" },
  ja: { src: "https://flagcdn.com/w40/jp.png", alt: "Japan flag" },
  zh: { src: "https://flagcdn.com/w40/cn.png", alt: "China flag" },
} as const;

export default function GCSCHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [localeOpen, setLocaleOpen] = React.useState(false);
  const { locale, setLocale, locales, dictionary } = useSiteLanguage();
  const header = dictionary.header;
  const currentLocale = locales.find((item) => item.code === locale) ?? locales[0];
  const currentFlag = localeFlags[currentLocale.code];

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  React.useEffect(() => {
    const onPointerDown = () => setLocaleOpen(false);
    if (!localeOpen) return;

    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [localeOpen]);

  return (
    <header className="gnb sticky top-0 z-50 border-b border-[#222] bg-[rgba(0,0,0,0.92)] backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-16 lg:px-8">
        <a href="/" className="flex items-center gap-3 sm:gap-4">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-black shadow-[0_10px_25px_rgba(0,0,0,0.22)] sm:h-12 sm:w-12">
            <img src={logoSrc} alt={header.clubName} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-base font-black text-[#f5f5f7] sm:text-lg">{header.clubName}</p>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#888890] sm:text-xs">{header.clubNameEn}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-4 lg:flex">
          {header.nav.map((item) => (
            <a
              key={`${item.href}-${item.label}`}
              href={item.href}
              className="text-sm font-medium text-[#c0c0c5] transition hover:text-[#f5f5f7]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative" onPointerDown={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setLocaleOpen((prev) => !prev)}
              className="inline-flex h-11 items-center gap-2 rounded-[2px] border border-[#424245] bg-transparent px-4 text-sm font-semibold text-[#f5f5f7] transition hover:bg-white/5"
              aria-label={header.languageLabel}
              aria-expanded={localeOpen}
            >
              <img src={currentFlag.src} alt={currentFlag.alt} className="h-4 w-6 rounded-[2px] object-cover shadow-sm" loading="lazy" decoding="async" />
              <span className="text-[#c0c0c5]">{currentLocale.shortLabel}</span>
              <ChevronDown className={`h-4 w-4 transition ${localeOpen ? "rotate-180" : ""}`} />
            </button>

            {localeOpen && (
              <div className="absolute right-0 top-[calc(100%+0.6rem)] w-44 overflow-hidden rounded-[6px] border border-[#222] bg-[#1c1c1e] p-2 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                {locales.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => {
                      setLocale(option.code);
                      setLocaleOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-[4px] px-3 py-2.5 text-sm transition ${
                      option.code === locale ? "bg-white/10 text-[#f5f5f7]" : "text-[#c0c0c5] hover:bg-white/5 hover:text-[#f5f5f7]"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <img
                        src={localeFlags[option.code].src}
                        alt={localeFlags[option.code].alt}
                        className="h-4 w-6 rounded-[2px] object-cover shadow-sm"
                        loading="lazy"
                        decoding="async"
                      />
                      <span>{option.label}</span>
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-[#888890]">{option.shortLabel}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="/application"
            className="hidden h-11 items-center justify-center rounded-[2px] bg-[#cc2222] px-5 text-sm font-bold text-white transition hover:bg-[#cc2222]/90 lg:inline-flex"
          >
            {header.apply}
          </a>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] border border-[#424245] bg-transparent text-[#f5f5f7] transition hover:bg-white/5 lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? header.closeMenu : header.openMenu}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <button
            className="absolute inset-0 bg-black/55"
            onClick={() => setMenuOpen(false)}
            aria-label={header.closeMobileMenu}
          />

          <div className="fixed right-0 top-0 h-screen w-[330px] max-w-[82vw] overflow-y-auto bg-[#1c1c1e] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between px-7 pb-6 pt-10">
              <h2 className="text-2xl font-black tracking-[-0.03em] text-[#f5f5f7]">{header.menu}</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center text-[#f5f5f7] transition hover:text-[#c0c0c5]"
                aria-label={header.closeMenu}
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            <nav className="flex flex-col px-7 pb-10">
              {header.nav.map((item) => (
                <a
                  key={`${item.href}-${item.label}-mobile`}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-4 text-base font-medium tracking-[-0.01em] text-[#c0c0c5] transition hover:text-[#f5f5f7]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

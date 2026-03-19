"use client";

import GSSCHeader from "../../components/GSSCHeader";
import { useSiteLanguage } from "@/components/site-language";
import { programPageCopy } from "@/lib/page-copy";

export default function ProgramPage() {
  const { locale } = useSiteLanguage();
  const t = programPageCopy[locale];

  return (
    <div className="min-h-screen bg-black text-white">
      <GSSCHeader />
      <div className="mt-6 flex flex-col items-center justify-center px-4">
        <h1 className="mb-8 text-3xl font-bold">{t.title}</h1>
        <div className="w-full max-w-2xl rounded-2xl bg-white/5 p-8 shadow-lg backdrop-blur">
          <ul className="space-y-6">
            {t.items.map((item, index) => (
              <li key={item.title} className={index === t.items.length - 1 ? "" : "border-b border-white/10 pb-6"}>
                <h2 className="mb-2 text-xl font-bold text-red-300">{item.title}</h2>
                <p className="text-white/80">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

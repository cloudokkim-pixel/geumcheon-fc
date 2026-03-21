"use client";

import GSSCHeader from "../../components/GSSCHeader";
import { useSiteLanguage } from "@/components/site-language";
import { programPageCopy } from "@/lib/page-copy";

export default function ProgramPage() {
  const { locale } = useSiteLanguage();
  const t = programPageCopy[locale];

  return (
    <div className="min-h-screen bg-transparent text-[#f5f5f7]">
      <GSSCHeader />
      <div className="mt-6 flex flex-col items-center justify-center px-4">
        <h1 className="mb-8 text-3xl font-bold text-[#f5f5f7]">{t.title}</h1>
        <div className="w-full max-w-2xl rounded-[14px] bg-[#1c1c1e] p-8">
          <ul className="space-y-6">
            {t.items.map((item, index) => (
              <li key={item.title} className={index === t.items.length - 1 ? "" : "border-b border-[#222] pb-6"}>
                <h2 className="mb-2 text-xl font-bold text-[#f5f5f7]">{item.title}</h2>
                <p className="text-[#a1a1a6]">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

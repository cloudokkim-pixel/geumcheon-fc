"use client";

import GSSCHeader from "../../components/GSSCHeader";
import { useSiteLanguage } from "@/components/site-language";
import { contactPageCopy } from "@/lib/page-copy";

export default function ContactPage() {
  const { locale } = useSiteLanguage();
  const t = contactPageCopy[locale];

  return (
    <div className="min-h-screen bg-transparent text-[#f5f5f7]">
      <GSSCHeader />
      <div className="mt-6 flex flex-col items-center justify-center px-4">
        <h1 className="mb-8 text-3xl font-bold text-[#f5f5f7]">{t.title}</h1>
        <form className="w-full max-w-md rounded-[14px] bg-[#1c1c1e] p-8">
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-[#f5f5f7]" htmlFor="title">{t.fields[0]}</label>
            <input className="w-full rounded-[6px] border border-[#424245] bg-[#000]/30 px-4 py-3 text-[#f5f5f7] focus:border-[#cc2222] focus:outline-none" id="title" name="title" type="text" placeholder={t.placeholders[0]} />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-[#f5f5f7]" htmlFor="name">{t.fields[1]}</label>
            <input className="w-full rounded-[6px] border border-[#424245] bg-[#000]/30 px-4 py-3 text-[#f5f5f7] focus:border-[#cc2222] focus:outline-none" id="name" name="name" type="text" placeholder={t.placeholders[1]} />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-[#f5f5f7]" htmlFor="contact">{t.fields[2]}</label>
            <input className="w-full rounded-[6px] border border-[#424245] bg-[#000]/30 px-4 py-3 text-[#f5f5f7] focus:border-[#cc2222] focus:outline-none" id="contact" name="contact" type="text" placeholder={t.placeholders[2]} />
          </div>
          <div className="mb-8">
            <label className="mb-2 block text-sm font-semibold text-[#f5f5f7]" htmlFor="detail">{t.fields[3]}</label>
            <textarea className="w-full rounded-[6px] border border-[#424245] bg-[#000]/30 px-4 py-3 text-[#f5f5f7] focus:border-[#cc2222] focus:outline-none" id="detail" name="detail" rows={4} placeholder={t.placeholders[3]} />
          </div>
          <button type="submit" className="w-full rounded-[2px] bg-[#cc2222] py-3 text-base font-bold text-white transition hover:bg-[#cc2222]/90">{t.submit}</button>
        </form>
      </div>
    </div>
  );
}

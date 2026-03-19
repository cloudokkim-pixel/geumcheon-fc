"use client";

import GSSCHeader from "../../components/GSSCHeader";
import { useSiteLanguage } from "@/components/site-language";
import { contactPageCopy } from "@/lib/page-copy";

export default function ContactPage() {
  const { locale } = useSiteLanguage();
  const t = contactPageCopy[locale];

  return (
    <div className="min-h-screen bg-black text-white">
      <GSSCHeader />
      <div className="mt-6 flex flex-col items-center justify-center px-4">
        <h1 className="mb-8 text-3xl font-bold">{t.title}</h1>
        <form className="w-full max-w-md rounded-2xl bg-white/5 p-8 shadow-lg backdrop-blur">
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-white" htmlFor="title">{t.fields[0]}</label>
            <input className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-red-500 focus:outline-none" id="title" name="title" type="text" placeholder={t.placeholders[0]} />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-white" htmlFor="name">{t.fields[1]}</label>
            <input className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-red-500 focus:outline-none" id="name" name="name" type="text" placeholder={t.placeholders[1]} />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-white" htmlFor="contact">{t.fields[2]}</label>
            <input className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-red-500 focus:outline-none" id="contact" name="contact" type="text" placeholder={t.placeholders[2]} />
          </div>
          <div className="mb-8">
            <label className="mb-2 block text-sm font-semibold text-white" htmlFor="detail">{t.fields[3]}</label>
            <textarea className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-red-500 focus:outline-none" id="detail" name="detail" rows={4} placeholder={t.placeholders[3]} />
          </div>
          <button type="submit" className="w-full rounded-xl bg-red-600 py-3 text-base font-semibold text-white transition hover:bg-red-700">{t.submit}</button>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import GSSCHeader from "../../components/GSSCHeader";

export default function ApplicationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <GSSCHeader />
      <div className="flex flex-col items-center justify-center mt-6">
        <h1 className="text-3xl font-bold mb-8">참가 신청</h1>
        <form className="w-full max-w-md bg-white/5 rounded-2xl p-8 shadow-lg backdrop-blur">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold text-white" htmlFor="name">이름</label>
            <input className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-red-500 focus:outline-none" id="name" name="name" type="text" placeholder="이름을 입력하세요" />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold text-white" htmlFor="school">학교명</label>
            <input className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-red-500 focus:outline-none" id="school" name="school" type="text" placeholder="학교명을 입력하세요" />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold text-white" htmlFor="grade">학년</label>
            <input className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-red-500 focus:outline-none" id="grade" name="grade" type="text" placeholder="학년을 입력하세요" />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold text-white" htmlFor="contact">연락받을 연락처</label>
            <input className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-red-500 focus:outline-none" id="contact" name="contact" type="text" placeholder="연락처를 입력하세요" />
          </div>
          <div className="mb-8">
            <label className="block mb-2 text-sm font-semibold text-white" htmlFor="etc">기타</label>
            <textarea className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-red-500 focus:outline-none" id="etc" name="etc" rows={3} placeholder="기타 문의사항을 입력하세요" />
          </div>
          <button type="submit" className="w-full rounded-xl bg-red-600 py-3 text-base font-semibold text-white transition hover:bg-red-700">신청하기</button>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import GSSCHeader from "../../components/GSSCHeader";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <GSSCHeader />
      <div className="flex flex-col items-center justify-center mt-6">
        <h1 className="text-3xl font-bold mb-8">클럽 문의</h1>
        <form className="w-full max-w-md bg-white/5 rounded-2xl p-8 shadow-lg backdrop-blur">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold text-white" htmlFor="title">문의 제목</label>
            <input className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-red-500 focus:outline-none" id="title" name="title" type="text" placeholder="문의 제목을 입력하세요" />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold text-white" htmlFor="name">이름</label>
            <input className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-red-500 focus:outline-none" id="name" name="name" type="text" placeholder="이름을 입력하세요" />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold text-white" htmlFor="contact">연락처</label>
            <input className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-red-500 focus:outline-none" id="contact" name="contact" type="text" placeholder="연락처를 입력하세요" />
          </div>
          <div className="mb-8">
            <label className="block mb-2 text-sm font-semibold text-white" htmlFor="detail">상세 내용</label>
            <textarea className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-red-500 focus:outline-none" id="detail" name="detail" rows={4} placeholder="문의 내용을 입력하세요" />
          </div>
          <button type="submit" className="w-full rounded-xl bg-red-600 py-3 text-base font-semibold text-white transition hover:bg-red-700">문의하기</button>
        </form>
      </div>
    </div>
  );
}

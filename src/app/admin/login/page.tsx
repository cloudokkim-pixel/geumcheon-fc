"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error || "로그인에 실패했습니다.");
      setLoading(false);
      return;
    }

    router.push(searchParams.get("next") || "/admin/gallery");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050b15] px-4 text-white">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-[#0b1324] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.32)]">
        <p className="text-sm uppercase tracking-[0.3em] text-red-300">Admin Login</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight">관리자 로그인</h1>
        <p className="mt-3 text-sm leading-6 text-white/65">
          관리자 API와 `/admin` 페이지 접근을 위한 세션 로그인입니다.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm text-white/60">아이디</label>
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/60">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4"
            />
          </div>

          {error ? <p className="text-sm text-red-300">{error}</p> : null}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-red-500 px-6 text-sm font-semibold text-white disabled:opacity-60"
          >
            {loading ? "로그인 중..." : "로그인"}
          </button>
        </form>
      </div>
    </main>
  );
}

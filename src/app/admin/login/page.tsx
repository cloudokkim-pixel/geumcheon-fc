"use client";

import { FormEvent, Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const ADMIN_USERNAME_STORAGE_KEY = "gssc_admin_username";

function AdminLoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberUsername, setRememberUsername] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedUsername = window.localStorage.getItem(ADMIN_USERNAME_STORAGE_KEY);

    if (savedUsername) {
      setUsername(savedUsername);
      setRememberUsername(true);
    }
  }, []);

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

    if (rememberUsername && username.trim()) {
      window.localStorage.setItem(ADMIN_USERNAME_STORAGE_KEY, username.trim());
    } else {
      window.localStorage.removeItem(ADMIN_USERNAME_STORAGE_KEY);
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
          관리자 페이지와 업로드 기능에 접근하기 위한 로그인입니다.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="admin-username" className="mb-2 block text-sm text-white/60">
              아이디
            </label>
            <input
              id="admin-username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="username"
              className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4"
            />
          </div>

          <div>
            <label htmlFor="admin-password" className="mb-2 block text-sm text-white/60">
              비밀번호
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4"
            />
          </div>

          <label className="flex items-center gap-3 text-sm text-white/65">
            <input
              type="checkbox"
              checked={rememberUsername}
              onChange={(event) => setRememberUsername(event.target.checked)}
              className="h-4 w-4 rounded border-white/20 bg-white/5 accent-red-500"
            />
            <span>아이디 기억하기</span>
          </label>

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

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#050b15] px-4 text-white">
          Loading...
        </main>
      }
    >
      <AdminLoginContent />
    </Suspense>
  );
}

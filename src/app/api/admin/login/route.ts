import { cookies } from "next/headers";
import { createAdminSessionToken, getSessionCookieName, isValidAdminLogin } from "@/lib/auth/session";
import { jsonError } from "@/lib/gallery/api";

export async function POST(request: Request) {
  const body = await request.json();
  const username = typeof body.username === "string" ? body.username.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!username || !password) {
    return jsonError("Username and password are required.");
  }

  if (!isValidAdminLogin(username, password)) {
    return jsonError("Invalid credentials.", 401);
  }

  cookies().set({
    name: getSessionCookieName(),
    value: createAdminSessionToken(username),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return Response.json({
    success: true,
  });
}

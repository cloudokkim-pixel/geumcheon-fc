import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

type AdminSessionPayload = {
  username: string;
  role: "admin";
  exp: number;
};

const sessionCookieName = "GCSC_admin_session";

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || "dev-only-admin-session-secret-change-me";
}

function toBase64Url(value: string) {
  return Buffer.from(value).toString("base64url");
}

function fromBase64Url(value: string) {
  return Buffer.from(value, "base64url").toString("utf8");
}

function sign(value: string) {
  return createHmac("sha256", getSessionSecret()).update(value).digest("base64url");
}

export function createAdminSessionToken(username: string, maxAgeSeconds = 60 * 60 * 8) {
  const payload: AdminSessionPayload = {
    username,
    role: "admin",
    exp: Math.floor(Date.now() / 1000) + maxAgeSeconds,
  };

  const encoded = toBase64Url(JSON.stringify(payload));
  const signature = sign(encoded);
  return `${encoded}.${signature}`;
}

export function verifyAdminSessionToken(token?: string | null) {
  if (!token) {
    return null;
  }

  const [encoded, signature] = token.split(".");

  if (!encoded || !signature) {
    return null;
  }

  const expected = sign(encoded);
  const actualBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);

  if (actualBuffer.length !== expectedBuffer.length || !timingSafeEqual(actualBuffer, expectedBuffer)) {
    return null;
  }

  const payload = JSON.parse(fromBase64Url(encoded)) as AdminSessionPayload;

  if (!payload.exp || payload.exp < Math.floor(Date.now() / 1000) || payload.role !== "admin") {
    return null;
  }

  return payload;
}

export function getAdminCredentials() {
  return {
    username: process.env.ADMIN_LOGIN_ID || "gcadmin@local.dev",
    password: process.env.ADMIN_LOGIN_PASSWORD || "8888",
  };
}

export function isValidAdminLogin(username: string, password: string) {
  const credentials = getAdminCredentials();
  return username === credentials.username && password === credentials.password;
}

export function getSessionCookieName() {
  return sessionCookieName;
}

function readTokenFromCookieHeader(cookieHeader?: string | null) {
  if (!cookieHeader) {
    return null;
  }

  const cookiesMap = cookieHeader.split(";").reduce<Record<string, string>>((acc, part) => {
    const [rawKey, ...rawValue] = part.trim().split("=");

    if (!rawKey) {
      return acc;
    }

    acc[rawKey] = rawValue.join("=");
    return acc;
  }, {});

  return cookiesMap[sessionCookieName] || null;
}

export function getCurrentAdminSession(cookieHeader?: string | null) {
  const token = cookieHeader ? readTokenFromCookieHeader(cookieHeader) : cookies().get(sessionCookieName)?.value;
  return verifyAdminSessionToken(token);
}

import { getCurrentAdminSession } from "@/lib/auth/session";

export function requireAdminSession(cookieHeader?: string | null) {
  const session = getCurrentAdminSession(cookieHeader);

  if (!session) {
    throw new Error("UNAUTHORIZED");
  }

  return session;
}

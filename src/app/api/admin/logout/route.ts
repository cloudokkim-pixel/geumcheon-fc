import { cookies } from "next/headers";
import { getSessionCookieName } from "@/lib/auth/session";

export async function POST() {
  cookies().set({
    name: getSessionCookieName(),
    value: "",
    path: "/",
    maxAge: 0,
  });

  return Response.json({ success: true });
}

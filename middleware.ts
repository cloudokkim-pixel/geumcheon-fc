import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const sessionCookieName = "gssc_admin_session";

function isProtectedAdminPage(pathname: string) {
  return pathname.startsWith("/admin") && pathname !== "/admin/login";
}

function isProtectedAdminApi(pathname: string) {
  return pathname.startsWith("/api/admin") && pathname !== "/api/admin/login";
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (!isProtectedAdminPage(pathname) && !isProtectedAdminApi(pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get(sessionCookieName)?.value;

  if (token) {
    return NextResponse.next();
  }

  if (isProtectedAdminApi(pathname)) {
    return NextResponse.json(
      {
        error: "Unauthorized.",
      },
      { status: 401 },
    );
  }

  const loginUrl = new URL("/admin/login", request.url);
  loginUrl.searchParams.set("next", `${pathname}${search}`);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};

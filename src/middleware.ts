// Library imports
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  // // Cookies
  const cookie: any = request.cookies.toString();

  // Conditions
  if (request.nextUrl.pathname === "/signin" && cookie !== "") {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// Matchers
export const config = {
  matcher: [
    "/",
    "/todo/:path*",
    "/reminders/:path*",
    "/archive/:path*",
    "/trash/:path*",
    "/signin/:path*",
    "/signup/:path*",
  ],
};

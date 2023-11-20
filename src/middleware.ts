// Library imports
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/signin") {
    return NextResponse.redirect(new URL("/signin", request.url));
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
  ],
};

import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  const isPublic =
    pathname === "/admin/login" ||
    pathname === "/admin/verify-otp";

  const token = req.cookies.get("admin_token")?.value;

  // 🔒 Protect admin routes
  if (pathname.startsWith("/admin") && !isPublic) {
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    try {
      await jwtVerify(token, secret);
    } catch {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  // 🚫 Prevent logged-in admin from login page
  if (isPublic && token) {
    try {
      await jwtVerify(token, secret);
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    } catch {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secretKey = process.env.JWT_SECRET;
if (!secretKey) throw new Error("JWT_SECRET missing");

const secret = new TextEncoder().encode(secretKey);

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  const isAdminRoute =
    pathname.startsWith("/admin") ||
    pathname.startsWith("/api/admin");

  const isPublic =
    pathname === "/admin/login" ||
    pathname === "/admin/verify-otp" ||
    pathname.startsWith("/api/admin/auth");

  const token = req.cookies.get("admin_token")?.value;

  if (isAdminRoute && !isPublic) {
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    try {
      await jwtVerify(token, secret);
    } catch {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  if (isPublic && token) {
    try {
      await jwtVerify(token, secret);
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    } catch { }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
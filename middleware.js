import { NextResponse } from "next/server";
import  { NextRequest } from "next/server";

export function middleware(req) {
  const pathname = req.nextUrl.pathname;

  const isAdminRoute = pathname.startsWith("/admin");
  const isPublicAdminRoute =
    pathname === "/admin/login" ||
    pathname === "/admin/verify-otp";

  const token = req.cookies.get("admin_session");

  // If trying to access protected admin route
  if (isAdminRoute && !isPublicAdminRoute && !token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
  if (isPublicAdminRoute && token) {
  return NextResponse.redirect(new URL("/admin/dashboard", req.url));
}


  return NextResponse.next();
}
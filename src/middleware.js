import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import Cookies from "js-cookie";

export async function middleware(request) {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  // If trying to access login page while already authenticated
  if (request.nextUrl.pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If trying to access protected routes without authentication
  if (request.nextUrl.pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};

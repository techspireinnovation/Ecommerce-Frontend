import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const refreshToken = request.cookies.get("admin_refresh_token")?.value;

    if( !refreshToken){
        const response = NextResponse.redirect(new URL('/admin/login', request.url));
        response.cookies.delete("admin_refresh_token");

      return response;
    }
  }
  return NextResponse.next();
}


export const config = {
    matcher: ["/admin/:path*"],
}

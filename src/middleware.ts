import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const authPages = new Set([
  "/auth/login",
  "/auth/changepassword",
  "/auth/register",
  "/auth/forgetpassword",
  "/auth/verifycode",
  "/auth/resetpassword",
]);
const publicPages = new Set(["/", ...Array.from(authPages)]);

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  if (publicPages.has(req.nextUrl.pathname)) {
    if (!token) return NextResponse.next();

    if (authPages.has(req.nextUrl.pathname)) {
      const redirectUrl = new URL("/dashboard", req.nextUrl.origin);
      return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.next();
  }

  if (token) return NextResponse.next();

  const redirectUrl = new URL("/auth/login", req.nextUrl.origin);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

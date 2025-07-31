// import { NextRequest, NextResponse } from "next/server";

// export default function middleware(req:NextRequest) {

// if (req.nextUrl.pathname === '/') {
//     const redirectUrl = new URL ('/route/dashboard', req.nextUrl.origin);
// return NextResponse.redirect(redirectUrl)
// }
// }
// export const config = {
//     matcher: [
//       '/((?!api|_next/static|_next/image|favicon.ico).*)',
//     ],
//   }

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const authPages = new Set([
  "/auth/login",
  // "/auth/changepassword",
  "/auth/register",
  "/auth/forgetpassword",
  "/auth/verifycode",
  "/auth/resetpassword",
]);
const publicPages = new Set([
  "/route/dashboard",
  "/auth/changepassword",
  ...Array.from(authPages),
]);

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  console.log(token?.token);

  if (publicPages.has(req.nextUrl.pathname)) {
    if (!token) return NextResponse.next();

    if (authPages.has(req.nextUrl.pathname)) {
      const redirectUrl = new URL("/route/dashboard", req.nextUrl.origin);
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

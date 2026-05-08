import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoutes = createRouteMatcher([
  "/dashboard(.*)",
  "/platform(.*)",
  "/settings(.*)",
  "/api/members(.*)",
  "/api/attendance(.*)",
  "/api/billing/checkout(.*)",
  "/api/invoices(.*)"
]);

const hasClerk = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY);

const middleware = hasClerk
  ? clerkMiddleware(async (auth, req) => {
      if (protectedRoutes(req)) {
        await auth.protect();
      }

      const { sessionClaims } = await auth();
      const role = (sessionClaims as { metadata?: { role?: string } } | null | undefined)?.metadata?.role;
      const path = req.nextUrl.pathname;

      if (path.startsWith("/platform") && role !== "PLATFORM_ADMIN") {
        return NextResponse.redirect(new URL("/dashboard/admin", req.url));
      }

      return NextResponse.next();
    })
  : function demoMiddleware() {
      return NextResponse.next();
    };

export default middleware;

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)", "/(api|trpc)(.*)"]
};

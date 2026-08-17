import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Routes that don't require authentication
const publicRoutes = ["/login", "/register"];

// Route prefixes for each role
const roleRoutePrefixes = {
  ADMIN: "/admin",
  CLINIC: "/clinic",
  USER: "/user",
} as const;

// All protected route prefixes
const protectedPrefixes = Object.values(roleRoutePrefixes);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Allow static files and API routes (auth API handles its own protection)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if the user has a session cookie
  // better-auth sets a session cookie - we check for standard or secure variant
  const sessionCookie =
    request.cookies.get("better-auth.session_token") ||
    request.cookies.get("__Secure-better-auth.session_token");

  // If no session and trying to access protected route, redirect to login
  if (!sessionCookie) {
    const isProtectedRoute = protectedPrefixes.some((prefix) =>
      pathname.startsWith(prefix),
    );

    if (isProtectedRoute) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }

    // For root path without session, redirect to login
    if (pathname === "/") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // If user has a session and is on root, redirect to their dashboard
  if (sessionCookie && pathname === "/") {
    // We can't verify the role here without hitting the database
    // The individual layouts will handle role-based redirects
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (auth API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (metadata file)
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico).*)",
  ],
};

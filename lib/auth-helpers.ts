import "server-only";

import { cache } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { USER_ROLES, type Role } from "@/lib/auth";

/**
 * Get the current session user.
 * Forwards request headers to better-auth's getSession API.
 */
export const getCurrentUser = cache(async () => {
  try {
    const { auth } = await import("@/lib/auth");
    const reqHeaders = await headers();

    const session = await auth.api.getSession({ headers: reqHeaders });

    if (!session?.user) {
      return null;
    }

    const normalizedRole = (session.user.role || "USER").toUpperCase() as Role;

    return {
      ...session.user,
      role: normalizedRole,
    };
  } catch (e) {
    console.error("[getCurrentUser] Error:", e);
    return null;
  }
});

/**
 * Require a specific role. Redirects to /login if not authenticated,
 * or to the user's default dashboard if they don't have the required role.
 */
export async function requireRole(requiredRole: Role) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/login");
  }

  const userRole = (currentUser.role || "USER").toUpperCase() as Role;

  if (userRole !== requiredRole) {
    redirect(getDefaultRoute(userRole));
  }

  return currentUser;
}

/**
 * Get the default route for a given role.
 */
export function getDefaultRoute(role?: string | null): string {
  const normalizedRole = role?.toUpperCase();
  switch (normalizedRole) {
    case USER_ROLES.ADMIN:
      return "/admin";
    case USER_ROLES.CLINIC:
      return "/clinic";
    case USER_ROLES.USER:
      return "/user";
    default:
      return "/login";
  }
}

/**
 * Check if a user has the required role without redirecting.
 */
export async function hasRole(requiredRole: Role): Promise<boolean> {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return false;
  }

  return (currentUser.role || "USER").toUpperCase() === requiredRole;
}

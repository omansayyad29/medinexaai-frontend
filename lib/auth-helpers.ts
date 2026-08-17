import "server-only";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";
import { getDefaultRoute, normalizeRole, type Role } from "@/lib/roles";

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

    return {
      ...session.user,
      role: normalizeRole(session.user.role),
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

  if (currentUser.role !== requiredRole) {
    redirect(getDefaultRoute(currentUser.role));
  }

  return currentUser;
}

/**
 * Check if a user has the required role without redirecting.
 */
export async function hasRole(requiredRole: Role): Promise<boolean> {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return false;
  }

  return currentUser.role === requiredRole;
}

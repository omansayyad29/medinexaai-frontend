"use server";

import { getCurrentUser } from "@/lib/auth-helpers";
import { getDefaultRoute, type Role } from "@/lib/roles";

/**
 * Get the current user's role after login.
 * Used by client components to redirect to the appropriate dashboard.
 */
export async function getUserRole(): Promise<Role | null> {
  const user = await getCurrentUser();

  if (!user) {
    return null;
  }

  return user.role;
}

/**
 * Get the default dashboard route for the current user.
 */
export async function getDashboardRoute(): Promise<string> {
  const user = await getCurrentUser();

  if (!user) {
    return "/login";
  }

  return getDefaultRoute(user.role);
}

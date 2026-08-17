"use server";

import { getCurrentUser } from "@/lib/auth-helpers";
import { USER_ROLES, type Role } from "@/lib/auth";

/**
 * Get the current user's role after login.
 * Used by client components to redirect to the appropriate dashboard.
 */
export async function getUserRole(): Promise<Role | null> {
  const user = await getCurrentUser();

  if (!user) {
    return null;
  }

  return user.role as Role;
}

/**
 * Get the default dashboard route for the current user.
 */
export async function getDashboardRoute(): Promise<string> {
  const role = await getUserRole();

  if (!role) {
    return "/login";
  }

  switch (role) {
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

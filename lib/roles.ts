/**
 * Role definitions and role → route logic.
 *
 * Kept free of server/DB imports so it can be unit-tested in isolation and
 * imported safely by client components.
 */

/** Roles an account can have. Only these values are ever stored. */
export const USER_ROLES = {
  ADMIN: "ADMIN",
  CLINIC: "CLINIC",
  USER: "USER",
} as const;

export type Role = (typeof USER_ROLES)[keyof typeof USER_ROLES];

/** Array of valid role values for zod validation */
export const ROLES = ["ADMIN", "CLINIC", "USER"] as const;

/**
 * Normalize a raw role value to a valid Role, defaulting to "USER" for
 * unknown or missing values.
 */
export function normalizeRole(role?: string | null): Role {
  const upper = role?.toUpperCase();
  if (
    upper === USER_ROLES.ADMIN ||
    upper === USER_ROLES.CLINIC ||
    upper === USER_ROLES.USER
  ) {
    return upper;
  }
  return USER_ROLES.USER;
}

/**
 * Get the default dashboard route for a given role. Unknown or missing roles
 * fall back to the login page.
 */
export function getDefaultRoute(role?: string | null): string {
  switch (role?.toUpperCase()) {
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

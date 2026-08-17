import { describe, expect, it } from "vitest";
import { getDefaultRoute, normalizeRole, USER_ROLES } from "./roles";

describe("getDefaultRoute", () => {
  it("returns the admin dashboard for ADMIN", () => {
    expect(getDefaultRoute(USER_ROLES.ADMIN)).toBe("/admin");
  });

  it("returns the clinic dashboard for CLINIC", () => {
    expect(getDefaultRoute(USER_ROLES.CLINIC)).toBe("/clinic");
  });

  it("returns the user dashboard for USER", () => {
    expect(getDefaultRoute(USER_ROLES.USER)).toBe("/user");
  });

  it("is case-insensitive", () => {
    expect(getDefaultRoute("admin")).toBe("/admin");
    expect(getDefaultRoute("Clinic")).toBe("/clinic");
  });

  it("falls back to /login for unknown or missing roles", () => {
    expect(getDefaultRoute("SUPER_ADMIN")).toBe("/login");
    expect(getDefaultRoute(null)).toBe("/login");
    expect(getDefaultRoute(undefined)).toBe("/login");
    expect(getDefaultRoute("")).toBe("/login");
  });
});

describe("normalizeRole", () => {
  it("normalizes valid roles to uppercase", () => {
    expect(normalizeRole("admin")).toBe(USER_ROLES.ADMIN);
    expect(normalizeRole("CLINIC")).toBe(USER_ROLES.CLINIC);
    expect(normalizeRole("user")).toBe(USER_ROLES.USER);
  });

  it("defaults unknown or missing roles to USER", () => {
    expect(normalizeRole("weird_role")).toBe(USER_ROLES.USER);
    expect(normalizeRole(null)).toBe(USER_ROLES.USER);
    expect(normalizeRole(undefined)).toBe(USER_ROLES.USER);
    expect(normalizeRole("")).toBe(USER_ROLES.USER);
  });
});

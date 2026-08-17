import { describe, expect, it } from "vitest";
import {
  ADMIN_ROUTES,
  CLINIC_ROUTES,
  getRoutesForRole,
  USER_ROUTES,
} from "./routes";

describe("getRoutesForRole", () => {
  it("returns the admin navigation for ADMIN", () => {
    expect(getRoutesForRole("ADMIN")).toBe(ADMIN_ROUTES);
  });

  it("returns the clinic navigation for CLINIC", () => {
    expect(getRoutesForRole("clinic")).toBe(CLINIC_ROUTES);
  });

  it("returns the user navigation for USER", () => {
    expect(getRoutesForRole("USER")).toBe(USER_ROUTES);
  });

  it("returns an empty list for unknown roles", () => {
    expect(getRoutesForRole("SUPER_ADMIN")).toEqual([]);
    expect(getRoutesForRole(null)).toEqual([]);
  });
});

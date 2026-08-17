import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { db } from "@/db";
import * as schema from "@/db/schema";

/** Roles an account can have. Only these values are ever stored. */
export const USER_ROLES = {
  ADMIN: "ADMIN",
  CLINIC: "CLINIC",
  USER: "USER",
} as const;

export type Role = (typeof USER_ROLES)[keyof typeof USER_ROLES];

/** Array of valid role values for zod validation */
export const ROLES = ["ADMIN", "CLINIC", "USER"] as const;
const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),

  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,

  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // 5 minutes cache
    },
  },

  emailAndPassword: {
    enabled: true,
  },

  // Google sign-in is only offered to regular users (it is hidden on the
  // clinic tab of the auth forms). Accounts created through OAuth always get
  // the default "user" role. The provider is only enabled when both env vars
  // are set (the truthy check narrows them to string).
  socialProviders:
    googleClientId && googleClientSecret
      ? {
          google: {
            clientId: googleClientId,
            clientSecret: googleClientSecret,
          },
        }
      : undefined,

  user: {
    additionalFields: {
      // Server-owned: clients can never set it directly. New accounts default
      // to "user"; the clinic signup server action upgrades the role with a
      // direct database write (see app/(auth)/actions.ts).
      role: {
        type: "string",
        required: false,
        defaultValue: "USER",
        input: false,
      },
    },
  },

  // Copies Set-Cookie headers from auth.api calls (e.g. signUpEmail inside a
  // server action) into Next.js cookies. Must stay the last plugin.
  plugins: [nextCookies()],
});

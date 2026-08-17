"use server";

import { isAPIError } from "better-auth/api";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/db";
import { user } from "@/db/schema";
import { auth, USER_ROLES } from "@/lib/auth";

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z
    .enum([USER_ROLES.ADMIN, USER_ROLES.CLINIC, USER_ROLES.USER])
    .default(USER_ROLES.USER),
});

export type RegisterInput = z.input<typeof registerSchema>;

export type RegisterResult = {
  error?: { code: string; message: string };
};

/**
 * Creates a new account and signs the user in (the session cookie is set via
 * the nextCookies plugin). The role is validated and assigned server-side so
 * clients can never pick a role that isn't in ROLES.
 */
export async function register(input: RegisterInput): Promise<RegisterResult> {
  const parsed = registerSchema.safeParse(input);

  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    return {
      error: {
        code: "VALIDATION_ERROR",
        message: issue?.message ?? "Please check your details and try again.",
      },
    };
  }

  const { name, email, password, role } = parsed.data;

  try {
    const { user: createdUser } = await auth.api.signUpEmail({
      body: { name, email, password },
    });

    // role is input:false, so signUpEmail always creates "USER". Clinic and admin
    // accounts are upgraded with a direct, server-owned database write.
    if (role === USER_ROLES.CLINIC || role === USER_ROLES.ADMIN) {
      await db.update(user).set({ role }).where(eq(user.id, createdUser.id));
    }
  } catch (error) {
    if (isAPIError(error)) {
      // The error code exists at runtime but isn't part of the public type.
      const code = (error as { code?: string }).code ?? "UNKNOWN_ERROR";
      return { error: { code, message: error.message } };
    }
    throw error;
  }

  return {};
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { type RegisterInput, register } from "@/app/(auth)/actions";
import { getAuthErrorMessage } from "@/components/auth/auth-errors";
import { GoogleButton } from "@/components/auth/GoogleButton";
import { RoleToggle } from "@/components/auth/RoleToggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/lib/auth-client";

type Role = "USER" | "CLINIC" | "ADMIN";

const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterValues = z.infer<typeof registerSchema>;

export function RegisterForm({ googleEnabled }: { googleEnabled: boolean }) {
  const router = useRouter();
  const [role, setRole] = useState<Role>("USER");
  const {
    register: registerField,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterValues>();

  async function onSubmit(values: RegisterValues) {
    const { error } = await register({
      name: values.name,
      email: values.email,
      password: values.password,
      role,
    } satisfies RegisterInput);

    if (error) {
      toast.error(getAuthErrorMessage(error));
      return;
    }

    toast.success(
      role === "CLINIC"
        ? "Clinic account created — welcome!"
        : role === "ADMIN"
          ? "Admin account created — welcome!"
          : "Account created — welcome!",
    );
    window.location.href = "/";
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Create your account</CardTitle>
        <CardDescription>
          Choose your account type to get started.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <RoleToggle value={role} onChange={setRole} />

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">
              {role === "CLINIC" ? "Clinic name" : "Full name"}
            </Label>
            <Input
              id="name"
              type="text"
              placeholder={
                role === "CLINIC" ? "Medinexa Care Clinic" : "Jane Doe"
              }
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              {...registerField("name")}
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              {...registerField("email")}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="At least 8 characters"
              autoComplete="new-password"
              aria-invalid={Boolean(errors.password)}
              {...registerField("password")}
            />
            {errors.password && (
              <p className="text-xs text-destructive">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Repeat your password"
              autoComplete="new-password"
              aria-invalid={Boolean(errors.confirmPassword)}
              {...registerField("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-xs text-destructive">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting
              ? "Creating account…"
              : role === "CLINIC"
                ? "Create clinic account"
                : role === "ADMIN"
                  ? "Create admin account"
                  : "Create account"}
          </Button>
        </form>

        {/* Google sign-in is only offered to regular users, not clinics. */}
        {role === "USER" && googleEnabled && (
          <>
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted-foreground">or</span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <GoogleButton
              onClick={async () => {
                // OAuth creates the account on first sign-in.
                const { error } = await signIn.social({
                  provider: "google",
                  callbackURL: "/",
                });
                if (error) toast.error(getAuthErrorMessage(error));
              }}
            />
          </>
        )}

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}

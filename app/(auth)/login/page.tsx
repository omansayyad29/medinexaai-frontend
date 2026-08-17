import { Suspense } from "react";
import { LoginForm } from "@/components/auth/LoginForm";
import { isGoogleEnabled } from "@/lib/auth-config";

export const metadata = {
  title: "Sign in",
};

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm googleEnabled={isGoogleEnabled} />
    </Suspense>
  );
}

import { RegisterForm } from "@/components/auth/RegisterForm";
import { isGoogleEnabled } from "@/lib/auth-config";

export const metadata = {
  title: "Create account",
};

export default function RegisterPage() {
  return <RegisterForm googleEnabled={isGoogleEnabled} />;
}

import { LoginForm } from "@/components/auth/LoginForm";

export const metadata = {
  title: "Sign in | Medinexa AI",
};

const googleEnabled =
  Boolean(process.env.GOOGLE_CLIENT_ID) &&
  Boolean(process.env.GOOGLE_CLIENT_SECRET);

export default function LoginPage() {
  return <LoginForm googleEnabled={googleEnabled} />;
}

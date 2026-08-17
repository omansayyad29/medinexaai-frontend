import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata = {
  title: "Create account | Medinexa AI",
};

const googleEnabled =
  Boolean(process.env.GOOGLE_CLIENT_ID) &&
  Boolean(process.env.GOOGLE_CLIENT_SECRET);

export default function RegisterPage() {
  return <RegisterForm googleEnabled={googleEnabled} />;
}

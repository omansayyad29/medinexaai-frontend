import { Building } from "lucide-react";
import { redirect } from "next/navigation";
import { type Role } from "@/lib/auth";
import { getCurrentUser, getDefaultRoute } from "@/lib/auth-helpers";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  // Already signed in? Send them directly to their default dashboard.
  if (user) {
    redirect(getDefaultRoute(user.role as Role));
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-muted/20 p-4">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Building size={20} />
        </div>
        <span className="text-xl font-semibold tracking-tight">
          Medinexa AI
        </span>
      </div>
      {children}
    </div>
  );
}

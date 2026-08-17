import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth-helpers";
import { getDefaultRoute } from "@/lib/roles";

// Renders based on the session, so it must not be statically prerendered.
export const dynamic = "force-dynamic";

export default async function RootPage() {
  const user = await getCurrentUser();

  if (!user) {
    return redirect("/login");
  }

  // Redirect to appropriate dashboard based on role
  return redirect(getDefaultRoute(user.role));
}

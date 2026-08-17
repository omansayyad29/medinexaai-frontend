import { USER_ROLES } from "@/lib/auth";
import { getCurrentUser } from "@/lib/auth-helpers";
import { redirect } from "next/navigation";

export default async function RootPage() {
  console.log("[RootPage] Rendering root page...");
  const user = await getCurrentUser();

  console.log(
    "[RootPage] User:",
    user ? `${user.email} (${user.role})` : "null",
  );

  if (!user) {
    console.log("[RootPage] No user found, redirecting to /login");
    return redirect("/login");
  }

  // Redirect to appropriate dashboard based on role
  const role = user.role?.toUpperCase();
  switch (role) {
    case USER_ROLES.ADMIN:
      console.log("[RootPage] Redirecting to /admin");
      return redirect("/admin");
    case USER_ROLES.CLINIC:
      console.log("[RootPage] Redirecting to /clinic");
      return redirect("/clinic");
    case USER_ROLES.USER:
      console.log("[RootPage] Redirecting to /user");
      return redirect("/user");
    default:
      console.log("[RootPage] Unknown role, redirecting to /login");
      return redirect("/login");
  }
}

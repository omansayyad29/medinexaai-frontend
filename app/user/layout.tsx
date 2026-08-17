import { redirect } from "next/navigation";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { USER_ROUTES } from "@/constants/routes";
import { getCurrentUser } from "@/lib/auth-helpers";
import { USER_ROLES } from "@/lib/auth";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== USER_ROLES.USER) {
    // Redirect to appropriate dashboard based on role
    if (user.role === USER_ROLES.ADMIN) {
      redirect("/admin");
    } else {
      redirect("/clinic");
    }
  }

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar routes={USER_ROUTES} user={user} logoLabel="Medinexa" />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar routes={USER_ROUTES} />
        <main className="flex-1 overflow-y-auto bg-muted/20 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

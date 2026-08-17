import { redirect } from "next/navigation";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { ADMIN_ROUTES } from "@/constants/routes";
import { getCurrentUser } from "@/lib/auth-helpers";
import { USER_ROLES } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== USER_ROLES.ADMIN) {
    // Redirect to appropriate dashboard based on role
    if (user.role === USER_ROLES.CLINIC) {
      redirect("/clinic");
    } else {
      redirect("/user");
    }
  }

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar routes={ADMIN_ROUTES} user={user} logoLabel="Medinexa Admin" />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar routes={ADMIN_ROUTES} />
        <main className="flex-1 overflow-y-auto bg-muted/20 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

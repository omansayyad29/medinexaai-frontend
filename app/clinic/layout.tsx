import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { CLINIC_ROUTES } from "@/constants/routes";
import { requireRole } from "@/lib/auth-helpers";
import { USER_ROLES } from "@/lib/roles";

// Renders based on the session, so it must not be statically prerendered.
export const dynamic = "force-dynamic";

export default async function ClinicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await requireRole(USER_ROLES.CLINIC);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar
        routes={CLINIC_ROUTES}
        user={user}
        logoLabel="Clinic Dashboard"
      />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar routes={CLINIC_ROUTES} />
        <main className="flex-1 overflow-y-auto bg-muted/20 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

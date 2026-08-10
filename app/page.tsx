import { AppointmentChart } from "@/components/dashboard/AppointmentChart";
import { GrowthChart } from "@/components/dashboard/GrowthChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { StatsCards } from "@/components/dashboard/StatsCards";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">
          Dashboard overview
        </h2>
        <p className="text-muted-foreground text-sm">
          Welcome back to the Medinexa Super Admin Panel. Here is what's
          happening today.
        </p>
      </div>

      <StatsCards />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="h-[350px]">
            <GrowthChart />
          </div>
          <div className="h-[350px]">
            <AppointmentChart />
          </div>
        </div>
        <div className="lg:col-span-3">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}

import {
  Building,
  Building2,
  Calendar,
  CreditCard,
  DollarSign,
  HeartPulse,
  MessageSquare,
  Stethoscope,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DASHBOARD_STATS } from "@/mocks/dashboard.mock";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  trend?: string;
  trendUp?: boolean;
}

function StatCard({ title, value, icon: Icon, trend, trendUp }: StatCardProps) {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="tracking-tight text-sm font-medium">{title}</h3>
        <Icon size={16} className="text-muted-foreground" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p
            className={cn(
              "text-xs",
              trendUp ? "text-emerald-500" : "text-destructive",
            )}
          >
            {trend} from last month
          </p>
        )}
      </div>
    </div>
  );
}

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Clinics"
        value={DASHBOARD_STATS.totalClinics}
        icon={Building2}
        trend="+4.5%"
        trendUp={true}
      />
      <StatCard
        title="Active Clinics"
        value={DASHBOARD_STATS.activeClinics}
        icon={Building}
        trend="+2.1%"
        trendUp={true}
      />
      <StatCard
        title="Total Patients"
        value={`${(DASHBOARD_STATS.totalPatients / 1000).toFixed(1)}k`}
        icon={HeartPulse}
        trend="+12%"
        trendUp={true}
      />
      <StatCard
        title="Total Doctors"
        value={DASHBOARD_STATS.totalDoctors}
        icon={Stethoscope}
        trend="+1.2%"
        trendUp={true}
      />
      <StatCard
        title="Appointments Today"
        value={DASHBOARD_STATS.appointmentsToday}
        icon={Calendar}
        trend="-5%"
        trendUp={false}
      />
      <StatCard
        title="AI Conversations"
        value={DASHBOARD_STATS.aiConversations}
        icon={MessageSquare}
        trend="+18%"
        trendUp={true}
      />
      <StatCard
        title="Active Subscriptions"
        value={DASHBOARD_STATS.activeSubscriptions}
        icon={CreditCard}
        trend="+4%"
        trendUp={true}
      />
      <StatCard
        title="Monthly Revenue"
        value={DASHBOARD_STATS.monthlyRevenue}
        icon={DollarSign}
        trend="+10%"
        trendUp={true}
      />
    </div>
  );
}

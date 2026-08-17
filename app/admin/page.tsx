import {
  Activity,
  Calendar,
  CreditCard,
  HeartPulse,
  MessageSquare,
  Stethoscope,
  Users,
  Building2,
} from "lucide-react";

const STATS = [
  {
    label: "Total Clinics",
    value: "128",
    icon: Building2,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    label: "Total Doctors",
    value: "456",
    icon: Stethoscope,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Total Users",
    value: "3,842",
    icon: Users,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    label: "Total Patients",
    value: "12,450",
    icon: HeartPulse,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    label: "Today's Appointments",
    value: "89",
    icon: Calendar,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    label: "AI Conversations",
    value: "1,234",
    icon: MessageSquare,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    label: "Active Subscriptions",
    value: "96",
    icon: CreditCard,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    label: "System Status",
    value: "Healthy",
    icon: Activity,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">
          Dashboard overview
        </h2>
        <p className="text-muted-foreground text-sm">
          Welcome back to the Medinexa Admin Panel. Here is what&apos;s
          happening across the platform.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border bg-card p-4 shadow-sm flex items-center gap-4"
          >
            <div className={`p-3 ${stat.bgColor} ${stat.color} rounded-lg`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              {
                action: "New clinic registered",
                time: "2 minutes ago",
                type: "clinic",
              },
              {
                action: "Doctor added to clinic",
                time: "15 minutes ago",
                type: "doctor",
              },
              {
                action: "Subscription upgraded",
                time: "1 hour ago",
                type: "subscription",
              },
              {
                action: "New user registered",
                time: "2 hours ago",
                type: "user",
              },
              {
                action: "AI conversation completed",
                time: "3 hours ago",
                type: "ai",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-foreground">{item.action}</span>
                <span className="text-muted-foreground">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold mb-4">Platform Health</h3>
          <div className="space-y-4">
            {[
              { label: "API Response Time", value: "45ms", status: "good" },
              { label: "Database Connections", value: "8/10", status: "good" },
              { label: "Memory Usage", value: "62%", status: "warning" },
              { label: "CPU Usage", value: "34%", status: "good" },
              { label: "Active Sessions", value: "1,234", status: "good" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-muted-foreground">{item.label}</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{item.value}</span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      item.status === "good" ? "bg-green-500" : "bg-amber-500"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

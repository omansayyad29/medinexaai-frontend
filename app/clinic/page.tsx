import {
  Calendar,
  CheckCircle,
  MessageSquare,
  Star,
  ThumbsDown,
  Users,
  XCircle,
} from "lucide-react";

const STATS = [
  {
    label: "Today's Appointments",
    value: "12",
    icon: Calendar,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    label: "Upcoming Appointments",
    value: "34",
    icon: Calendar,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    label: "Pending Approvals",
    value: "5",
    icon: CheckCircle,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    label: "Missed Appointments",
    value: "2",
    icon: XCircle,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    label: "AI Conversations",
    value: "89",
    icon: MessageSquare,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    label: "AI Automation Rate",
    value: "78%",
    icon: MessageSquare,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: "No-show Rate",
    value: "8%",
    icon: ThumbsDown,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    label: "Feedback Score",
    value: "4.8",
    icon: Star,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    label: "Google Reviews",
    value: "4.7",
    icon: Star,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    label: "Total Patients",
    value: "1,234",
    icon: Users,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

export default function ClinicDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">Clinic Dashboard</h2>
        <p className="text-muted-foreground text-sm">
          Welcome back! Here&apos;s what&apos;s happening at your clinic today.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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

      <div className="rounded-xl border bg-card shadow-sm p-6">
        <h3 className="font-semibold mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Book Appointment
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Add Patient
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Add Doctor
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            View AI Conversations
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Create Recall Campaign
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold mb-4">Today&apos;s Schedule</h3>
          <div className="space-y-3">
            {[
              { time: "09:00 AM", patient: "John Smith", type: "Consultation" },
              { time: "10:30 AM", patient: "Sarah Johnson", type: "Follow-up" },
              { time: "11:00 AM", patient: "Mike Davis", type: "Check-up" },
              { time: "02:00 PM", patient: "Emily Brown", type: "Treatment" },
              {
                time: "03:30 PM",
                patient: "Robert Wilson",
                type: "Consultation",
              },
            ].map((item) => (
              <div
                key={`${item.time}-${item.patient}`}
                className="flex items-center justify-between text-sm p-2 rounded-lg hover:bg-muted/50"
              >
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground font-mono text-xs">
                    {item.time}
                  </span>
                  <span className="font-medium">{item.patient}</span>
                </div>
                <span className="text-muted-foreground">{item.type}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold mb-4">Recent AI Interactions</h3>
          <div className="space-y-3">
            {[
              {
                patient: "Lisa Anderson",
                query: "Appointment reschedule",
                status: "Resolved",
              },
              {
                patient: "Tom Harris",
                query: "Medication reminder",
                status: "Resolved",
              },
              {
                patient: "Amy Clark",
                query: "Insurance inquiry",
                status: "Pending",
              },
              {
                patient: "David Lee",
                query: "Test results",
                status: "Resolved",
              },
            ].map((item) => (
              <div
                key={`${item.patient}-${item.query}`}
                className="flex items-center justify-between text-sm p-2 rounded-lg hover:bg-muted/50"
              >
                <div className="flex flex-col">
                  <span className="font-medium">{item.patient}</span>
                  <span className="text-muted-foreground text-xs">
                    {item.query}
                  </span>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    item.status === "Resolved"
                      ? "bg-green-500/10 text-green-600"
                      : "bg-amber-500/10 text-amber-600"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  HealthCard,
  type HealthStatus,
} from "@/components/system-health/HealthCard";

const SYSTEM_HEALTH_MOCK = [
  {
    id: 1,
    service: "Core API",
    status: "Healthy" as HealthStatus,
    uptime: "99.99%",
    latency: "45ms",
    icon: "server" as const,
  },
  {
    id: 2,
    service: "Primary Database",
    status: "Healthy" as HealthStatus,
    uptime: "99.98%",
    latency: "12ms",
    icon: "database" as const,
  },
  {
    id: 3,
    service: "Redis Cache",
    status: "Healthy" as HealthStatus,
    uptime: "99.99%",
    latency: "2ms",
    icon: "database" as const,
  },
  {
    id: 4,
    service: "AI Inference Service",
    status: "Degraded" as HealthStatus,
    uptime: "99.90%",
    latency: "450ms",
    icon: "ai" as const,
  },
  {
    id: 5,
    service: "WhatsApp Webhook",
    status: "Healthy" as HealthStatus,
    uptime: "99.95%",
    latency: "120ms",
    icon: "message" as const,
  },
];

export default function SystemHealthPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">System Health</h2>
        <p className="text-muted-foreground text-sm">
          Real-time status of critical Medinexa AI infrastructure and services.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SYSTEM_HEALTH_MOCK.map((service) => (
          <HealthCard
            key={service.id}
            service={service.service}
            status={service.status}
            uptime={service.uptime}
            latency={service.latency}
            icon={service.icon}
          />
        ))}
      </div>

      <div className="rounded-xl border bg-card p-6 shadow-sm flex flex-col gap-4 mt-4">
        <h3 className="font-semibold border-b pb-4">Recent Incidents</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 border-l-2 border-amber-500 pl-4 py-1">
            <span className="font-medium text-sm">
              AI Service Degraded Performance
            </span>
            <span className="text-xs text-muted-foreground">
              Started 25 mins ago • Investigating
            </span>
            <p className="text-sm mt-1 text-muted-foreground">
              We are experiencing higher than normal latency in the AI inference
              layer. Scaling up instances.
            </p>
          </div>
          <div className="flex flex-col gap-1 border-l-2 border-emerald-500 pl-4 py-1">
            <span className="font-medium text-sm">
              Database Maintenance Completed
            </span>
            <span className="text-xs text-muted-foreground">
              Yesterday, 02:00 AM • Resolved
            </span>
            <p className="text-sm mt-1 text-muted-foreground">
              Scheduled database maintenance completed successfully with zero
              downtime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

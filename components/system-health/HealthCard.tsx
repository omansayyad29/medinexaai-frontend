import {
  Activity,
  Database,
  MessageSquare,
  Network,
  Server,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type HealthStatus = "Healthy" | "Degraded" | "Down";

interface HealthCardProps {
  service: string;
  status: HealthStatus;
  uptime: string;
  latency: string;
  icon: "server" | "database" | "ai" | "message" | "activity";
}

export function HealthCard({
  service,
  status,
  uptime,
  latency,
  icon,
}: HealthCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "server":
        return <Server size={24} className="text-muted-foreground" />;
      case "database":
        return <Database size={24} className="text-muted-foreground" />;
      case "ai":
        return <Network size={24} className="text-muted-foreground" />;
      case "message":
        return <MessageSquare size={24} className="text-muted-foreground" />;
      default:
        return <Activity size={24} className="text-muted-foreground" />;
    }
  };

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-muted/50">{getIcon()}</div>
          <div className="flex flex-col">
            <h3 className="font-semibold">{service}</h3>
            <span className="text-xs text-muted-foreground">
              Uptime: {uptime}
            </span>
          </div>
        </div>
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
            {
              "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400":
                status === "Healthy",
              "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400":
                status === "Degraded",
              "bg-destructive/10 text-destructive dark:bg-destructive/20":
                status === "Down",
            },
          )}
        >
          {status}
        </span>
      </div>

      <div className="flex items-center justify-between border-t pt-4 mt-2">
        <span className="text-sm text-muted-foreground">Current Latency</span>
        <span className="font-medium text-sm">{latency}</span>
      </div>
    </div>
  );
}

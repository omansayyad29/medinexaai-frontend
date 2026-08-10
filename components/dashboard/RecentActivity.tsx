import { cn } from "@/lib/utils";
import { RECENT_ACTIVITY } from "@/mocks/dashboard.mock";

export function RecentActivity() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm flex flex-col h-full">
      <div className="p-6 pb-4 border-b">
        <h3 className="font-semibold leading-none tracking-tight">
          Recent Activity
        </h3>
      </div>
      <div className="p-0 flex-1 overflow-auto">
        <ul className="divide-y">
          {RECENT_ACTIVITY.map((activity) => (
            <li
              key={activity.id}
              className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors"
            >
              <div
                className={cn(
                  "flex h-2 w-2 rounded-full mt-1.5 self-start flex-shrink-0",
                  {
                    "bg-emerald-500": activity.status === "success",
                    "bg-blue-500": activity.status === "info",
                    "bg-amber-500": activity.status === "warning",
                    "bg-destructive": activity.status === "error",
                  },
                )}
              />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium leading-none">
                  {activity.action}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{activity.entity}</span>
                  <span>•</span>
                  <span>{activity.time}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

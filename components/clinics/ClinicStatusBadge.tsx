import { cn } from "@/lib/utils";
import type { ClinicStatus } from "@/types/clinic";

interface ClinicStatusBadgeProps {
  status: ClinicStatus;
}

export function ClinicStatusBadge({ status }: ClinicStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        {
          "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400":
            status === "Active",
          "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400":
            status === "Pending",
          "bg-destructive/10 text-destructive dark:bg-destructive/20":
            status === "Suspended",
        },
      )}
    >
      {status}
    </span>
  );
}

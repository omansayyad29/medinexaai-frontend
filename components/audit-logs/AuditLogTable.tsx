import { cn } from "@/lib/utils";
import type { AuditLog } from "@/types/audit";

interface AuditLogTableProps {
  logs: AuditLog[];
}

export function AuditLogTable({ logs }: AuditLogTableProps) {
  return (
    <div className="rounded-md border bg-card">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Timestamp
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                User
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Action
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Entity
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {logs.map((log) => (
              <tr
                key={log.id}
                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                <td className="p-4 align-middle text-muted-foreground whitespace-nowrap">
                  {new Date(log.timestamp).toLocaleString()}
                </td>
                <td className="p-4 align-middle font-medium">{log.user}</td>
                <td className="p-4 align-middle">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
                      {
                        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400":
                          log.action === "Created" ||
                          log.action === "Activated",
                        "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400":
                          log.action === "Updated",
                        "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400":
                          log.action === "Suspended",
                        "bg-destructive/10 text-destructive dark:bg-destructive/20":
                          log.action === "Deleted" || log.action === "Failed",
                      },
                    )}
                  >
                    {log.action}
                  </span>
                </td>
                <td className="p-4 align-middle text-muted-foreground">
                  {log.entity}
                </td>
                <td className="p-4 align-middle text-sm">{log.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

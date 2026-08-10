import { CreditCard, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Subscription } from "@/types/subscription";

interface SubscriptionTableProps {
  subscriptions: Subscription[];
}

export function SubscriptionTable({ subscriptions }: SubscriptionTableProps) {
  return (
    <div className="rounded-md border bg-card">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Clinic
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Plan
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Status
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Start Date
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Renewal Date
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Amount
              </th>
              <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {subscriptions.map((sub) => (
              <tr
                key={sub.id}
                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                <td className="p-4 align-middle">
                  <div className="flex flex-col">
                    <Link
                      href={`/clinics/${sub.clinicId}`}
                      className="hover:underline font-medium"
                    >
                      {sub.clinicName}
                    </Link>
                    <span className="text-xs text-muted-foreground">
                      ID: {sub.id}
                    </span>
                  </div>
                </td>
                <td className="p-4 align-middle">
                  <span className="inline-flex items-center rounded-md bg-secondary/50 px-2 py-1 text-xs font-medium text-secondary-foreground">
                    {sub.plan}
                  </span>
                </td>
                <td className="p-4 align-middle">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
                      {
                        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400":
                          sub.status === "Active",
                        "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400":
                          sub.status === "Trial",
                        "bg-destructive/10 text-destructive dark:bg-destructive/20":
                          sub.status === "Expired" ||
                          sub.status === "Cancelled",
                      },
                    )}
                  >
                    {sub.status}
                  </span>
                </td>
                <td className="p-4 align-middle text-muted-foreground">
                  {new Date(sub.startDate).toLocaleDateString()}
                </td>
                <td className="p-4 align-middle text-muted-foreground">
                  {new Date(sub.renewalDate).toLocaleDateString()}
                </td>
                <td className="p-4 align-middle font-medium">
                  ${sub.amount.toLocaleString()} / mo
                </td>
                <td className="p-4 align-middle text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="button"
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                    >
                      <CreditCard size={16} />
                      <span className="sr-only">Manage Billing</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                    >
                      <MoreHorizontal size={16} />
                      <span className="sr-only">Actions</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

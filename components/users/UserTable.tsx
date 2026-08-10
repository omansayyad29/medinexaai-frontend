import { Edit, Eye, Power } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { User } from "@/types/user";

interface UserTableProps {
  users: User[];
}

export function UserTable({ users }: UserTableProps) {
  return (
    <div className="rounded-md border bg-card">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Name
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Clinic
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Role
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Status
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Last Active
              </th>
              <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                <td className="p-4 align-middle font-medium">
                  <div className="flex flex-col">
                    <span>{user.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {user.email}
                    </span>
                  </div>
                </td>
                <td className="p-4 align-middle text-muted-foreground hover:text-foreground">
                  <Link
                    href={`/clinics/${user.clinicId}`}
                    className="hover:underline"
                  >
                    {user.clinicName}
                  </Link>
                </td>
                <td className="p-4 align-middle">
                  <span className="inline-flex items-center rounded-md bg-secondary/50 px-2 py-1 text-xs font-medium text-secondary-foreground">
                    {user.role}
                  </span>
                </td>
                <td className="p-4 align-middle">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
                      {
                        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400":
                          user.status === "Active",
                        "bg-destructive/10 text-destructive dark:bg-destructive/20":
                          user.status === "Inactive",
                      },
                    )}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-4 align-middle text-muted-foreground">
                  {user.lastActive}
                </td>
                <td className="p-4 align-middle text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="button"
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                    >
                      <Eye size={16} />
                      <span className="sr-only">View</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                    >
                      <Edit size={16} />
                      <span className="sr-only">Edit</span>
                    </button>
                    <button
                      type="button"
                      className={cn(
                        "p-2 transition-colors rounded-md hover:bg-muted",
                        user.status === "Active"
                          ? "text-destructive hover:text-destructive hover:bg-destructive/10"
                          : "text-emerald-500 hover:bg-emerald-500/10",
                      )}
                    >
                      <Power size={16} />
                      <span className="sr-only">Toggle Status</span>
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

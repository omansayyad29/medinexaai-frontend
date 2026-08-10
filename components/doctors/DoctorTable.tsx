import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Doctor } from "@/types/doctor";

interface DoctorTableProps {
  doctors: Doctor[];
}

export function DoctorTable({ doctors }: DoctorTableProps) {
  return (
    <div className="rounded-md border bg-card">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Doctor Name
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Clinic
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Specialization
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Appointments
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Status
              </th>
              <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {doctors.map((doctor) => (
              <tr
                key={doctor.id}
                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                <td className="p-4 align-middle font-medium">
                  <div className="flex flex-col">
                    <span>{doctor.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {doctor.email}
                    </span>
                  </div>
                </td>
                <td className="p-4 align-middle text-muted-foreground hover:text-foreground">
                  <Link
                    href={`/clinics/${doctor.clinicId}`}
                    className="hover:underline"
                  >
                    {doctor.clinicName}
                  </Link>
                </td>
                <td className="p-4 align-middle">{doctor.specialization}</td>
                <td className="p-4 align-middle">{doctor.appointmentsCount}</td>
                <td className="p-4 align-middle">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
                      {
                        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400":
                          doctor.status === "Active",
                        "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400":
                          doctor.status === "On Leave",
                        "bg-destructive/10 text-destructive dark:bg-destructive/20":
                          doctor.status === "Inactive",
                      },
                    )}
                  >
                    {doctor.status}
                  </span>
                </td>
                <td className="p-4 align-middle text-right">
                  <button
                    type="button"
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                  >
                    <MoreHorizontal size={16} />
                    <span className="sr-only">Actions</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

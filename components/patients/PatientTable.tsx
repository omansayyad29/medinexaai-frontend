import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Patient } from "@/types/patient";

interface PatientTableProps {
  patients: Patient[];
}

export function PatientTable({ patients }: PatientTableProps) {
  return (
    <div className="rounded-md border bg-card">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Patient Name
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Clinic
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Total Visits
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Last Visit
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Trust Score
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
            {patients.map((patient) => (
              <tr
                key={patient.id}
                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                <td className="p-4 align-middle font-medium">
                  <div className="flex flex-col">
                    <span>{patient.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {patient.phone}
                    </span>
                  </div>
                </td>
                <td className="p-4 align-middle text-muted-foreground hover:text-foreground">
                  <Link
                    href={`/clinics/${patient.clinicId}`}
                    className="hover:underline"
                  >
                    {patient.clinicName}
                  </Link>
                </td>
                <td className="p-4 align-middle">
                  {patient.totalAppointments}
                </td>
                <td className="p-4 align-middle">
                  {new Date(patient.lastVisit).toLocaleDateString()}
                </td>
                <td className="p-4 align-middle">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-16 bg-muted rounded-full overflow-hidden">
                      <div
                        className={cn("h-full rounded-full", {
                          "bg-emerald-500": patient.trustScore >= 80,
                          "bg-amber-500":
                            patient.trustScore >= 50 && patient.trustScore < 80,
                          "bg-destructive": patient.trustScore < 50,
                        })}
                        style={{ width: `${patient.trustScore}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {patient.trustScore}/100
                    </span>
                  </div>
                </td>
                <td className="p-4 align-middle">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
                      {
                        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400":
                          patient.status === "Active",
                        "bg-destructive/10 text-destructive dark:bg-destructive/20":
                          patient.status === "Inactive",
                      },
                    )}
                  >
                    {patient.status}
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

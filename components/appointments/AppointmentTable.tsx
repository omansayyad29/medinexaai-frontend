import { Calendar, Clock, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Appointment } from "@/types/appointment";

interface AppointmentTableProps {
  appointments: Appointment[];
}

export function AppointmentTable({ appointments }: AppointmentTableProps) {
  return (
    <div className="rounded-md border bg-card">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Patient
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Clinic / Doctor
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Date & Time
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Source
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
            {appointments.map((apt) => (
              <tr
                key={apt.id}
                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                <td className="p-4 align-middle font-medium">
                  <div className="flex flex-col">
                    <span>{apt.patientName}</span>
                    <span className="text-xs text-muted-foreground">
                      ID: {apt.id}
                    </span>
                  </div>
                </td>
                <td className="p-4 align-middle">
                  <div className="flex flex-col">
                    <Link
                      href={`/clinics/${apt.clinicId}`}
                      className="hover:underline font-medium"
                    >
                      {apt.clinicName}
                    </Link>
                    <span className="text-xs text-muted-foreground">
                      {apt.doctorName}
                    </span>
                  </div>
                </td>
                <td className="p-4 align-middle">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-xs">
                      <Calendar size={14} className="text-muted-foreground" />
                      <span>{new Date(apt.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <Clock size={14} className="text-muted-foreground" />
                      <span>{apt.time}</span>
                    </div>
                  </div>
                </td>
                <td className="p-4 align-middle">
                  <span className="inline-flex items-center rounded-md bg-secondary/50 px-2 py-1 text-xs font-medium text-secondary-foreground">
                    {apt.bookingSource}
                  </span>
                </td>
                <td className="p-4 align-middle">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
                      {
                        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400":
                          apt.status === "Confirmed" ||
                          apt.status === "Completed",
                        "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400":
                          apt.status === "Pending" ||
                          apt.status === "Rescheduled",
                        "bg-destructive/10 text-destructive dark:bg-destructive/20":
                          apt.status === "Cancelled" ||
                          apt.status === "No Show",
                      },
                    )}
                  >
                    {apt.status}
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

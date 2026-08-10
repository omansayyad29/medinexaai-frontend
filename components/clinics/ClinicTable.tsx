import { Edit, Eye, Trash } from "lucide-react";
import Link from "next/link";
import type { Clinic } from "@/types/clinic";
import { ClinicStatusBadge } from "./ClinicStatusBadge";

interface ClinicTableProps {
  clinics: Clinic[];
}

export function ClinicTable({ clinics }: ClinicTableProps) {
  return (
    <div className="rounded-md border bg-card">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Clinic Name
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Owner
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Specialty
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Doctors
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Patients
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                Plan
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
            {clinics.map((clinic) => (
              <tr
                key={clinic.id}
                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                <td className="p-4 align-middle font-medium">
                  <div className="flex flex-col">
                    <span>{clinic.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {clinic.location}
                    </span>
                  </div>
                </td>
                <td className="p-4 align-middle">{clinic.owner}</td>
                <td className="p-4 align-middle">{clinic.specialty}</td>
                <td className="p-4 align-middle">{clinic.doctorsCount}</td>
                <td className="p-4 align-middle">{clinic.patientsCount}</td>
                <td className="p-4 align-middle">
                  <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
                    {clinic.subscriptionPlan}
                  </span>
                </td>
                <td className="p-4 align-middle">
                  <ClinicStatusBadge status={clinic.status} />
                </td>
                <td className="p-4 align-middle text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/clinics/${clinic.id}`}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                    >
                      <Eye size={16} />
                      <span className="sr-only">View</span>
                    </Link>
                    <button
                      type="button"
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                    >
                      <Edit size={16} />
                      <span className="sr-only">Edit</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 text-muted-foreground hover:text-destructive transition-colors rounded-md hover:bg-destructive/10"
                    >
                      <Trash size={16} />
                      <span className="sr-only">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {clinics.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="h-24 text-center text-muted-foreground"
                >
                  No clinics found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

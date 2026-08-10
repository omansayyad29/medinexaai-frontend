import { Filter, Search } from "lucide-react";
import { PatientTable } from "@/components/patients/PatientTable";
import { PATIENTS_MOCK_DATA } from "@/mocks/patients.mock";

export default function PatientsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">Patients</h2>
        <p className="text-muted-foreground text-sm">
          Global patient records across all clinics. (Sensitive medical data is
          hidden)
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between w-full">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search
              size={16}
              className="absolute left-2.5 top-2.5 text-muted-foreground"
            />
            <input
              type="search"
              placeholder="Search patients..."
              className="h-9 w-full rounded-md border border-input bg-background px-8 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>

          <button
            type="button"
            className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Filter size={16} className="mr-2" />
            Filters
          </button>
        </div>
      </div>

      <PatientTable patients={PATIENTS_MOCK_DATA} />

      <div className="flex items-center justify-between px-2">
        <div className="flex-1 text-sm text-muted-foreground">
          Showing <strong>1</strong> to <strong>5</strong> of{" "}
          <strong>{PATIENTS_MOCK_DATA.length}</strong> patients
        </div>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-3 text-xs font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
          >
            Previous
          </button>
          <button
            type="button"
            className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-3 text-xs font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

import { ClinicFilters } from "@/components/clinics/ClinicFilters";
import { ClinicTable } from "@/components/clinics/ClinicTable";
import { CLINICS_MOCK_DATA } from "@/mocks/clinics.mock";

export default function ClinicsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">
          Clinics Management
        </h2>
        <p className="text-muted-foreground text-sm">
          View and manage all registered clinics, their subscriptions, and
          status.
        </p>
      </div>

      <ClinicFilters />

      <ClinicTable clinics={CLINICS_MOCK_DATA} />

      <div className="flex items-center justify-between px-2">
        <div className="flex-1 text-sm text-muted-foreground">
          Showing <strong>1</strong> to <strong>5</strong> of{" "}
          <strong>{CLINICS_MOCK_DATA.length}</strong> clinics
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

import { Filter, Plus, Search } from "lucide-react";

export function ClinicFilters() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between w-full">
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <div className="relative w-full sm:w-64">
          <Search
            size={16}
            className="absolute left-2.5 top-2.5 text-muted-foreground"
          />
          <input
            type="search"
            placeholder="Search clinics..."
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

      <button
        type="button"
        className="inline-flex h-9 w-full sm:w-auto items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
      >
        <Plus size={16} className="mr-2" />
        Add Clinic
      </button>
    </div>
  );
}

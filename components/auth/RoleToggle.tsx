"use client";

import type { Role } from "@/lib/roles";
import { cn } from "@/lib/utils";

export const ROLE_OPTIONS: { value: Role; label: string }[] = [
  { value: "USER", label: "User" },
  { value: "CLINIC", label: "Clinic" },
  { value: "ADMIN", label: "Admin" },
];

export function RoleToggle({
  value,
  onChange,
  options = ROLE_OPTIONS,
}: {
  value: Role;
  onChange: (role: Role) => void;
  options?: { value: Role; label: string }[];
}) {
  return (
    <div
      className="grid gap-1 rounded-lg bg-muted p-1"
      style={{
        gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))`,
      }}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={cn(
            "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
            value === option.value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

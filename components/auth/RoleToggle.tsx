"use client";

import { cn } from "@/lib/utils";

type Role = "USER" | "CLINIC" | "ADMIN";

const OPTIONS: { value: Role; label: string }[] = [
  { value: "USER", label: "User" },
  { value: "CLINIC", label: "Clinic" },
  { value: "ADMIN", label: "Admin" },
];

export function RoleToggle({
  value,
  onChange,
}: {
  value: Role;
  onChange: (role: Role) => void;
}) {
  return (
    <div className="grid grid-cols-3 gap-1 rounded-lg bg-muted p-1">
      {OPTIONS.map((option) => (
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

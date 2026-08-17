import type * as React from "react";
import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    // The association is provided by callers via `htmlFor` at each usage
    // site, so the standalone primitive is fine without a control.
    // biome-ignore lint/a11y/noLabelWithoutControl: reusable primitive
    <label
      data-slot="label"
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className,
      )}
      {...props}
    />
  );
}

export { Label };

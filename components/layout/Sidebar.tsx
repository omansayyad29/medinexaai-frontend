"use client";

import { Building } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION_ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col border-r bg-background md:flex">
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <Building size={20} />
        </div>
        <span className="font-semibold text-lg tracking-tight">
          Medinexa AI
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="grid gap-1 px-2">
          {NAVIGATION_ROUTES.map((route) => {
            const isActive =
              pathname === route.href ||
              (pathname.startsWith(`${route.href}/`) && route.href !== "/");

            return (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-secondary text-secondary-foreground"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-primary",
                  )}
                >
                  <route.icon
                    size={18}
                    className={cn(
                      isActive ? "text-primary" : "text-muted-foreground",
                    )}
                  />
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t p-4">
        <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground">
          <div className="h-8 w-8 rounded-full bg-secondary" />
          <div className="flex flex-col">
            <span className="text-foreground">Super Admin</span>
            <span className="text-xs">admin@medinexa.ai</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

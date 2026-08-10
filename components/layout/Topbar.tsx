"use client";

import { Bell, Menu, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { NAVIGATION_ROUTES } from "@/constants/routes";

export function Topbar() {
  const pathname = usePathname();

  const currentRoute = NAVIGATION_ROUTES.find(
    (route) =>
      pathname === route.href ||
      (pathname.startsWith(`${route.href}/`) && route.href !== "/"),
  ) || { name: "Dashboard" };

  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="md:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground"
        >
          <Menu size={20} />
          <span className="sr-only">Toggle Sidebar</span>
        </button>
        <h1 className="text-lg font-semibold tracking-tight">
          {currentRoute.name}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex relative">
          <Search
            size={16}
            className="absolute left-2.5 top-2.5 text-muted-foreground"
          />
          <input
            type="search"
            placeholder="Search..."
            className="h-9 w-64 rounded-md border border-input bg-transparent px-8 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <button
          type="button"
          className="relative p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Bell size={20} />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive"></span>
          <span className="sr-only">Notifications</span>
        </button>
      </div>
    </header>
  );
}

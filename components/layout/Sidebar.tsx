"use client";

import {
  Activity,
  BarChart,
  Bell,
  BookOpen,
  Building,
  Building2,
  Calendar,
  ClipboardList,
  Clock,
  CreditCard,
  FileText,
  FileUser,
  HeartPulse,
  LayoutDashboard,
  LogOut,
  MessageCircle,
  MessageSquare,
  Search,
  Settings,
  Star,
  Stethoscope,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Activity,
  BarChart,
  Bell,
  BookOpen,
  Building,
  Building2,
  Calendar,
  ClipboardList,
  Clock,
  CreditCard,
  FileText,
  FileUser,
  HeartPulse,
  LayoutDashboard,
  MessageCircle,
  MessageSquare,
  Search,
  Settings,
  Star,
  Stethoscope,
  User,
  Users,
};

function renderIcon(
  icon?: React.ComponentType<{ size?: number; className?: string }> | string,
  props?: { size?: number; className?: string },
) {
  if (!icon) return null;
  if (typeof icon === "string") {
    const IconComponent = ICON_MAP[icon];
    return IconComponent ? <IconComponent {...props} /> : null;
  }
  const IconComponent = icon;
  return <IconComponent {...props} />;
}

type NavItem = {
  name: string;
  href?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }> | string;
  type?: string;
};

interface SidebarProps {
  routes: NavItem[];
  user?: {
    name?: string | null;
    email?: string | null;
    role?: string | null;
  } | null;
  logoLabel?: string;
}

export function Sidebar({
  routes,
  user,
  logoLabel = "Medinexa AI",
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col border-r bg-background md:flex">
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <Building size={20} />
        </div>
        <span className="font-semibold text-lg tracking-tight">
          {logoLabel}
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="grid gap-1 px-2">
          {routes.map((route) => {
            // Render section heading
            if (route.type === "heading") {
              return (
                <li key={route.name} className="pt-4 pb-1 px-3">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {route.name}
                  </span>
                </li>
              );
            }

            if (!route.href) {
              return null;
            }

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
                  {renderIcon(route.icon, {
                    size: 18,
                    className: cn(
                      isActive ? "text-primary" : "text-muted-foreground",
                    ),
                  })}
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground">
            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-xs font-medium">
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-foreground">{user?.name || "User"}</span>
              <span className="text-xs truncate max-w-[140px]">
                {user?.email || ""}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={async () => {
              await signOut();
              window.location.href = "/login";
            }}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            title="Sign out"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}

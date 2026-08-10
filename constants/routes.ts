import {
  Activity,
  Building2,
  Calendar,
  CreditCard,
  FileText,
  HeartPulse,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Stethoscope,
  Users,
} from "lucide-react";

export const NAVIGATION_ROUTES = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Clinics", href: "/clinics", icon: Building2 },
  { name: "Doctors", href: "/doctors", icon: Stethoscope },
  { name: "Users & Staff", href: "/users", icon: Users },
  { name: "Patients", href: "/patients", icon: HeartPulse },
  { name: "Appointments", href: "/appointments", icon: Calendar },
  { name: "AI Conversations", href: "/conversations", icon: MessageSquare },
  { name: "Subscriptions", href: "/subscriptions", icon: CreditCard },
  { name: "Audit Logs", href: "/audit-logs", icon: FileText },
  { name: "System Health", href: "/system-health", icon: Activity },
  { name: "Settings", href: "/settings", icon: Settings },
];

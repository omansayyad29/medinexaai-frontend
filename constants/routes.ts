export type NavItem = {
  name: string;
  href?: string;
  icon?: string;
  type?: string;
};

// Admin navigation routes
export const ADMIN_ROUTES: NavItem[] = [
  { name: "Dashboard", href: "/admin", icon: "LayoutDashboard" },
  {
    name: "PLATFORM MANAGEMENT",
    type: "heading",
  },
  { name: "Clinics", href: "/admin/clinics", icon: "Building2" },
  { name: "Doctors", href: "/admin/doctors", icon: "Stethoscope" },
  { name: "Users & Staff", href: "/admin/users", icon: "Users" },
  { name: "Patients", href: "/admin/patients", icon: "HeartPulse" },
  { name: "Appointments", href: "/admin/appointments", icon: "Calendar" },
  {
    name: "AI & COMMUNICATION",
    type: "heading",
  },
  {
    name: "AI Conversations",
    href: "/admin/conversations",
    icon: "MessageSquare",
  },
  {
    name: "BUSINESS",
    type: "heading",
  },
  { name: "Subscriptions", href: "/admin/subscriptions", icon: "CreditCard" },
  {
    name: "SYSTEM",
    type: "heading",
  },
  { name: "Audit Logs", href: "/admin/audit-logs", icon: "FileText" },
  { name: "System Health", href: "/admin/system-health", icon: "Activity" },
  { name: "Settings", href: "/admin/settings", icon: "Settings" },
];

// Clinic navigation routes
export const CLINIC_ROUTES: NavItem[] = [
  { name: "Dashboard", href: "/clinic", icon: "LayoutDashboard" },
  {
    name: "CLINIC OPERATIONS",
    type: "heading",
  },
  { name: "Appointments", href: "/clinic/appointments", icon: "Calendar" },
  { name: "Patients", href: "/clinic/patients", icon: "HeartPulse" },
  { name: "Doctors", href: "/clinic/doctors", icon: "Stethoscope" },
  {
    name: "AI FRONT DESK",
    type: "heading",
  },
  {
    name: "AI Conversations",
    href: "/clinic/conversations",
    icon: "MessageSquare",
  },
  {
    name: "AI Knowledge Base",
    href: "/clinic/knowledge-base",
    icon: "BookOpen",
  },
  {
    name: "PATIENT ENGAGEMENT",
    type: "heading",
  },
  { name: "Recall Campaigns", href: "/clinic/recalls", icon: "ClipboardList" },
  { name: "Feedback", href: "/clinic/feedback", icon: "Star" },
  { name: "Google Reviews", href: "/clinic/reviews", icon: "Star" },
  {
    name: "ANALYTICS",
    type: "heading",
  },
  { name: "Analytics", href: "/clinic/analytics", icon: "BarChart" },
  {
    name: "CLINIC MANAGEMENT",
    type: "heading",
  },
  { name: "Clinic Profile", href: "/clinic/profile", icon: "Building2" },
  { name: "Working Hours", href: "/clinic/working-hours", icon: "Clock" },
  {
    name: "Booking Policies",
    href: "/clinic/booking-policies",
    icon: "ClipboardList",
  },
  { name: "Notifications", href: "/clinic/notifications", icon: "Bell" },
  {
    name: "Communication Settings",
    href: "/clinic/communication",
    icon: "MessageCircle",
  },
  {
    name: "SUBSCRIPTION",
    type: "heading",
  },
  { name: "Subscription", href: "/clinic/subscription", icon: "CreditCard" },
  {
    name: "SETTINGS",
    type: "heading",
  },
  { name: "Settings", href: "/clinic/settings", icon: "Settings" },
];

// User (Patient) navigation routes
export const USER_ROUTES: NavItem[] = [
  { name: "Dashboard", href: "/user", icon: "LayoutDashboard" },
  {
    name: "MY HEALTHCARE",
    type: "heading",
  },
  { name: "My Appointments", href: "/user/appointments", icon: "Calendar" },
  { name: "My Doctors", href: "/user/doctors", icon: "Stethoscope" },
  { name: "My Clinics", href: "/user/clinics", icon: "Building2" },
  {
    name: "APPOINTMENTS",
    type: "heading",
  },
  { name: "Book Appointment", href: "/user/book-appointment", icon: "Search" },
  { name: "Upcoming", href: "/user/appointments/upcoming", icon: "Calendar" },
  {
    name: "Past Appointments",
    href: "/user/appointments/past",
    icon: "Calendar",
  },
  {
    name: "AI ASSISTANT",
    type: "heading",
  },
  { name: "Chat with AI", href: "/user/ai", icon: "MessageCircle" },
  {
    name: "MY ACCOUNT",
    type: "heading",
  },
  { name: "Profile", href: "/user/profile", icon: "User" },
  { name: "Documents", href: "/user/documents", icon: "FileUser" },
  { name: "Notifications", href: "/user/notifications", icon: "Bell" },
  { name: "Settings", href: "/user/settings", icon: "Settings" },
];

/**
 * Get navigation routes for a specific role.
 */
export function getRoutesForRole(role?: string | null): NavItem[] {
  const normalizedRole = role?.toUpperCase();
  switch (normalizedRole) {
    case "ADMIN":
      return ADMIN_ROUTES;
    case "CLINIC":
      return CLINIC_ROUTES;
    case "USER":
      return USER_ROUTES;
    default:
      return [];
  }
}

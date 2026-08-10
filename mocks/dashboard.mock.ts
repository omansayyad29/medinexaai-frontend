export const DASHBOARD_STATS = {
  totalClinics: 124,
  activeClinics: 118,
  totalPatients: 45200,
  totalDoctors: 840,
  appointmentsToday: 1245,
  aiConversations: 8590,
  activeSubscriptions: 115,
  monthlyRevenue: "$45,200",
};

export const CLINIC_GROWTH_DATA = [
  { month: "Jan", clinics: 85 },
  { month: "Feb", clinics: 90 },
  { month: "Mar", clinics: 98 },
  { month: "Apr", clinics: 105 },
  { month: "May", clinics: 112 },
  { month: "Jun", clinics: 124 },
];

export const APPOINTMENT_TRENDS_DATA = [
  { name: "Mon", online: 400, walkIn: 240 },
  { name: "Tue", online: 300, walkIn: 139 },
  { name: "Wed", online: 200, walkIn: 980 },
  { name: "Thu", online: 278, walkIn: 390 },
  { name: "Fri", online: 189, walkIn: 480 },
  { name: "Sat", online: 239, walkIn: 380 },
  { name: "Sun", online: 349, walkIn: 430 },
];

export const RECENT_ACTIVITY = [
  {
    id: "1",
    action: "New Clinic Registered",
    entity: "City Health Care",
    time: "2 mins ago",
    status: "success",
  },
  {
    id: "2",
    action: "Subscription Upgraded",
    entity: "Dr. Smith Clinic (Pro)",
    time: "1 hour ago",
    status: "info",
  },
  {
    id: "3",
    action: "High AI Hand-off Rate",
    entity: "Dental Smile Studio",
    time: "3 hours ago",
    status: "warning",
  },
  {
    id: "4",
    action: "Payment Failed",
    entity: "Wellness Center",
    time: "5 hours ago",
    status: "error",
  },
];

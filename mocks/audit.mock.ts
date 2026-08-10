import type { AuditLog } from "@/types/audit";

export const AUDIT_LOGS_MOCK_DATA: AuditLog[] = [
  {
    id: "AL-1001",
    user: "Super Admin",
    action: "Created",
    entity: "Clinic",
    description: "Created new clinic 'City Health Care'",
    timestamp: "2024-03-15T14:30:00Z",
  },
  {
    id: "AL-1002",
    user: "System",
    action: "Updated",
    entity: "Subscription",
    description: "Auto-renewed subscription for 'Dental Smile Studio'",
    timestamp: "2024-03-15T00:00:00Z",
  },
  {
    id: "AL-1003",
    user: "Super Admin",
    action: "Suspended",
    entity: "Clinic",
    description:
      "Suspended clinic 'Wellness Pediatric Center' due to non-payment",
    timestamp: "2024-03-14T16:45:00Z",
  },
  {
    id: "AL-1004",
    user: "Dr. Sarah Jenkins",
    action: "Created",
    entity: "User",
    description: "Added new staff member 'Mark Thompson'",
    timestamp: "2024-03-14T11:20:00Z",
  },
  {
    id: "AL-1005",
    user: "System",
    action: "Failed",
    entity: "Payment",
    description:
      "Payment failed for 'Advanced Orthopedics' invoice INV-2024-03",
    timestamp: "2024-03-13T09:15:00Z",
  },
];

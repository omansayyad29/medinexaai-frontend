export type AuditAction =
  | "Created"
  | "Updated"
  | "Deleted"
  | "Suspended"
  | "Activated"
  | "Failed";

export interface AuditLog {
  id: string;
  user: string;
  action: AuditAction;
  entity: string;
  description: string;
  timestamp: string;
}

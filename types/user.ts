export type UserRole = "Owner" | "Admin" | "Receptionist" | "Doctor" | "Staff";
export type UserStatus = "Active" | "Inactive";

export interface User {
  id: string;
  name: string;
  email: string;
  clinicId: string;
  clinicName: string;
  role: UserRole;
  status: UserStatus;
  lastActive: string;
}

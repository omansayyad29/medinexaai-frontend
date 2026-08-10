export type SubscriptionPlan = "Trial" | "Basic" | "Pro" | "Enterprise";
export type ClinicStatus = "Active" | "Suspended" | "Pending";

export interface Clinic {
  id: string;
  name: string;
  owner: string;
  email: string;
  phone: string;
  specialty: string;
  location: string;
  doctorsCount: number;
  patientsCount: number;
  staffCount: number;
  appointmentsCount: number;
  aiConversationsCount: number;
  subscriptionPlan: SubscriptionPlan;
  status: ClinicStatus;
  createdAt: string;
}

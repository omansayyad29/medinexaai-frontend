import type { SubscriptionPlan } from "./clinic";

export type SubscriptionStatus = "Active" | "Trial" | "Expired" | "Cancelled";

export interface Subscription {
  id: string;
  clinicId: string;
  clinicName: string;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  startDate: string;
  renewalDate: string;
  amount: number;
}

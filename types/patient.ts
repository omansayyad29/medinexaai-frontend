export type PatientStatus = "Active" | "Inactive";

export interface Patient {
  id: string;
  name: string;
  clinicId: string;
  clinicName: string;
  phone: string;
  totalAppointments: number;
  lastVisit: string;
  trustScore: number;
  status: PatientStatus;
}

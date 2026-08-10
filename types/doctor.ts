export type DoctorStatus = "Active" | "On Leave" | "Inactive";

export interface Doctor {
  id: string;
  name: string;
  clinicId: string;
  clinicName: string;
  specialization: string;
  appointmentsCount: number;
  status: DoctorStatus;
  email: string;
  phone: string;
}

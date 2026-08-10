export type AppointmentStatus =
  | "Confirmed"
  | "Pending"
  | "Completed"
  | "Cancelled"
  | "Rescheduled"
  | "No Show";
export type BookingSource =
  | "Website"
  | "WhatsApp"
  | "Email"
  | "SMS"
  | "Phone"
  | "Walk-in";

export interface Appointment {
  id: string;
  patientName: string;
  patientId: string;
  clinicName: string;
  clinicId: string;
  doctorName: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  bookingSource: BookingSource;
}

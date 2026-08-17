import { Calendar, MessageCircle, Plus, Stethoscope } from "lucide-react";
import Link from "next/link";

export default function UserDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">Welcome, John! 👋</h2>
        <p className="text-muted-foreground text-sm">
          Here&apos;s an overview of your healthcare journey.
        </p>
      </div>

      {/* Next Appointment Card */}
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h3 className="font-semibold mb-4">Next Appointment</h3>
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg">
            <Stethoscope size={24} />
          </div>
          <div className="flex-1">
            <p className="font-medium text-lg">Dr. Sharma</p>
            <p className="text-muted-foreground">Dental Consultation</p>
            <p className="text-muted-foreground text-sm mt-1">
              Tomorrow — 10:30 AM
            </p>
          </div>
          <Link
            href="/user/appointments"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            View Appointment
          </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h3 className="font-semibold mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/user/book-appointment"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Plus size={16} />
            Book Appointment
          </Link>
          <Link
            href="/user/ai"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <MessageCircle size={16} />
            Chat with AI
          </Link>
          <Link
            href="/user/appointments"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Calendar size={16} />
            View Appointments
          </Link>
        </div>
      </div>

      {/* Recent Appointments */}
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h3 className="font-semibold mb-4">Recent Appointments</h3>
        <div className="space-y-3">
          {[
            {
              date: "Jan 15, 2024",
              doctor: "Dr. Sharma",
              type: "Dental Consultation",
              status: "Completed",
            },
            {
              date: "Jan 10, 2024",
              doctor: "Dr. Patel",
              type: "Skin Consultation",
              status: "Completed",
            },
            {
              date: "Jan 5, 2024",
              doctor: "Dr. Kumar",
              type: "Follow-up",
              status: "Completed",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-sm p-3 rounded-lg hover:bg-muted/50"
            >
              <div className="flex items-center gap-4">
                <div className="text-muted-foreground text-xs w-20">
                  {item.date}
                </div>
                <div>
                  <p className="font-medium">{item.doctor}</p>
                  <p className="text-muted-foreground text-xs">{item.type}</p>
                </div>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-600">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* My Doctors */}
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h3 className="font-semibold mb-4">My Doctors</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Dr. Sharma",
              specialty: "Dentist",
              clinic: "Smile Dental Care",
            },
            {
              name: "Dr. Patel",
              specialty: "Dermatologist",
              clinic: "Skin Health Clinic",
            },
            {
              name: "Dr. Kumar",
              specialty: "General Physician",
              clinic: "City Medical Center",
            },
          ].map((doctor, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-medium text-primary">
                  {doctor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="font-medium text-sm">{doctor.name}</p>
                <p className="text-muted-foreground text-xs">
                  {doctor.specialty}
                </p>
                <p className="text-muted-foreground text-xs">{doctor.clinic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

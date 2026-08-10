import {
  ArrowLeft,
  Calendar,
  HeartPulse,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Stethoscope,
  Users,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClinicStatusBadge } from "@/components/clinics/ClinicStatusBadge";
import { CLINICS_MOCK_DATA } from "@/mocks/clinics.mock";

export default async function ClinicDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const clinic = CLINICS_MOCK_DATA.find((c) => c.id === resolvedParams.id);

  if (!clinic) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Link
          href="/clinics"
          className="p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
        >
          <ArrowLeft size={20} />
          <span className="sr-only">Back to Clinics</span>
        </Link>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold tracking-tight">{clinic.name}</h2>
            <ClinicStatusBadge status={clinic.status} />
          </div>
          <p className="text-muted-foreground text-sm">
            Clinic ID: {clinic.id} • Created on{" "}
            {new Date(clinic.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm flex flex-col h-full md:col-span-2">
          <div className="p-6 border-b">
            <h3 className="font-semibold leading-none tracking-tight">
              Basic Information
            </h3>
          </div>
          <div className="p-6 grid gap-6 sm:grid-cols-2">
            <div className="space-y-1">
              <span className="text-sm text-muted-foreground">Owner</span>
              <p className="font-medium">{clinic.owner}</p>
            </div>
            <div className="space-y-1">
              <span className="text-sm text-muted-foreground">Specialty</span>
              <p className="font-medium">{clinic.specialty}</p>
            </div>
            <div className="space-y-1">
              <span className="text-sm text-muted-foreground">Email</span>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-muted-foreground" />
                <p className="font-medium">{clinic.email}</p>
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-sm text-muted-foreground">Phone</span>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-muted-foreground" />
                <p className="font-medium">{clinic.phone}</p>
              </div>
            </div>
            <div className="space-y-1 sm:col-span-2">
              <span className="text-sm text-muted-foreground">Location</span>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-muted-foreground" />
                <p className="font-medium">{clinic.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-card text-card-foreground shadow-sm flex flex-col h-full">
          <div className="p-6 border-b">
            <h3 className="font-semibold leading-none tracking-tight">
              Subscription
            </h3>
          </div>
          <div className="p-6 flex flex-col justify-center items-center h-full gap-4">
            <div className="text-center">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary mb-2">
                {clinic.subscriptionPlan} Plan
              </span>
              <p className="text-sm text-muted-foreground">
                Active since Jan 2023
              </p>
            </div>
            <button
              type="button"
              className="w-full inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Manage Subscription
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div className="rounded-xl border bg-card p-4 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg">
            <Stethoscope size={24} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Doctors</p>
            <p className="text-2xl font-bold">{clinic.doctorsCount}</p>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-4 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-lg">
            <HeartPulse size={24} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Patients</p>
            <p className="text-2xl font-bold">{clinic.patientsCount}</p>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-4 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-purple-500/10 text-purple-500 rounded-lg">
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Staff</p>
            <p className="text-2xl font-bold">{clinic.staffCount}</p>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-4 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-amber-500/10 text-amber-500 rounded-lg">
            <Calendar size={24} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Appointments</p>
            <p className="text-2xl font-bold">{clinic.appointmentsCount}</p>
          </div>
        </div>
        <div className="rounded-xl border bg-card p-4 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-pink-500/10 text-pink-500 rounded-lg">
            <MessageSquare size={24} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">AI Chats</p>
            <p className="text-2xl font-bold">{clinic.aiConversationsCount}</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border bg-card shadow-sm">
        <div className="border-b">
          <nav className="flex space-x-6 px-6" aria-label="Tabs">
            {[
              "Overview",
              "Doctors",
              "Staff",
              "Patients",
              "Appointments",
              "AI Conversations",
            ].map((tab, idx) => (
              <button
                type="button"
                key={tab}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${idx === 0 ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted"}`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-6">
          <p className="text-muted-foreground text-sm text-center py-12">
            Tab content goes here. Detailed views will be implemented in
            subsequent phases.
          </p>
        </div>
      </div>
    </div>
  );
}

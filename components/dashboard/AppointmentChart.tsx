"use client";

import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { APPOINTMENT_TRENDS_DATA } from "@/mocks/dashboard.mock";

export function AppointmentChart() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm flex flex-col h-full">
      <div className="p-6 pb-2">
        <h3 className="font-semibold leading-none tracking-tight">
          Appointment Trends
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Online vs Walk-in appointments this week.
        </p>
      </div>
      <div className="p-6 pt-0 flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={APPOINTMENT_TRENDS_DATA}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid var(--border)",
                backgroundColor: "var(--background)",
                color: "var(--foreground)",
              }}
              cursor={{ fill: "var(--muted)" }}
            />
            <Legend iconType="circle" wrapperStyle={{ fontSize: "12px" }} />
            <Bar
              dataKey="online"
              fill="var(--primary)"
              radius={[4, 4, 0, 0]}
              name="Online Booking"
            />
            <Bar
              dataKey="walkIn"
              fill="var(--secondary)"
              radius={[4, 4, 0, 0]}
              name="Walk-in"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

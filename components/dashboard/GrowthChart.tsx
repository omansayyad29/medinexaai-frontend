"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CLINIC_GROWTH_DATA } from "@/mocks/dashboard.mock";

export function GrowthChart() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow-sm flex flex-col h-full">
      <div className="p-6 pb-2">
        <h3 className="font-semibold leading-none tracking-tight">
          Clinic Growth
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Total registered clinics over time.
        </p>
      </div>
      <div className="p-6 pt-0 flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={CLINIC_GROWTH_DATA}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorClinics" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--primary)"
                  stopOpacity={0.3}
                />
                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
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
              }}
            />
            <Area
              type="monotone"
              dataKey="clinics"
              stroke="var(--primary)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorClinics)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

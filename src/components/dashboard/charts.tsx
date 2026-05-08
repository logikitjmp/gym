"use client";

import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { attendanceData, planPopularity, revenueData } from "@/lib/fixtures/demo";

const colors = ["#b7ff2a", "#7dd3fc", "#ffffff", "#f59e0b"];

export function RevenueChart() {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,161,161,0.2)" />
          <XAxis dataKey="month" stroke="currentColor" tickLine={false} axisLine={false} />
          <YAxis stroke="currentColor" tickLine={false} axisLine={false} tickFormatter={(value) => `INR ${Number(value) / 100000}L`} />
          <Tooltip contentStyle={{ borderRadius: 16, border: "1px solid rgba(183,255,42,0.25)", background: "#0b0f12", color: "#f7f8f4" }} />
          <Line type="monotone" dataKey="revenue" stroke="#b7ff2a" strokeWidth={4} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function AttendanceChart() {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={attendanceData}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,161,161,0.2)" />
          <XAxis dataKey="day" stroke="currentColor" tickLine={false} axisLine={false} />
          <YAxis stroke="currentColor" tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ borderRadius: 16, border: "1px solid rgba(183,255,42,0.25)", background: "#0b0f12", color: "#f7f8f4" }} />
          <Bar dataKey="checkins" radius={[12, 12, 4, 4]} fill="#b7ff2a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PlanPopularityChart() {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={planPopularity} dataKey="value" nameKey="name" innerRadius={58} outerRadius={96} paddingAngle={4}>
            {planPopularity.map((entry, index) => (
              <Cell key={entry.name} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ borderRadius: 16, border: "1px solid rgba(183,255,42,0.25)", background: "#0b0f12", color: "#f7f8f4" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

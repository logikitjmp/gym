import { Activity, Building2, Cpu, Settings, TrendingUp } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { RevenueChart } from "@/components/dashboard/charts";
import { Card } from "@/components/ui/card";
import { MetricCard } from "@/components/ui/metric-card";
import { platformMetrics } from "@/lib/fixtures/demo";

const systemControls = [
  { icon: Building2, label: "Gym subscription management" },
  { icon: Activity, label: "User analytics and cohort health" },
  { icon: Cpu, label: "AI usage tracking and limits" },
  { icon: Settings, label: "System settings and feature flags" }
];

export const metadata = {
  title: "Platform Admin"
};

export default function PlatformPage() {
  return (
    <DashboardShell role="platform" title="Platform Admin Panel" subtitle="Manage all gyms, subscriptions, revenue, users, AI usage, and system settings.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {platformMetrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <div className="flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-volt" />
            <h2 className="text-xl font-black">Platform revenue monitoring</h2>
          </div>
          <RevenueChart />
        </Card>
        <Card>
          <h2 className="text-xl font-black">System controls</h2>
          <div className="mt-5 space-y-3">
            {systemControls.map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-black/10 p-4 dark:border-white/10">
                <item.icon className="h-4 w-4 text-volt" />
                <span className="font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardShell>
  );
}

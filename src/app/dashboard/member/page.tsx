import { Activity, Camera, CreditCard, Droplets, Dumbbell, Soup, Trophy } from "lucide-react";
import { AiAssistantPanel } from "@/components/dashboard/ai-assistant-panel";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MetricCard } from "@/components/ui/metric-card";
import { dietPlans, members, workoutLibrary } from "@/lib/fixtures/demo";
import { enrichMember } from "@/lib/services/members";

const member = enrichMember(members[0]);
const memberMetrics = [
  { label: "Attendance", value: `${member.attendance}%`, delta: "12 visits this month", tone: "green" as const },
  { label: "BMI", value: String(member.bmi), delta: member.bmiCategory, tone: "blue" as const },
  { label: "Renewal", value: `${member.renewalWindow}d`, delta: "Auto-renew enabled", tone: "amber" as const },
  { label: "Water goal", value: "2.6L", delta: "74% complete today", tone: "blue" as const }
];
const progressItems = [
  { icon: Trophy, label: "Leaderboard rank", value: "#12 this month" },
  { icon: Droplets, label: "Water tracker", value: "2.6L of 3.5L" },
  { icon: Camera, label: "Progress photos", value: "4 uploads" }
];

export const metadata = {
  title: "Member Portal"
};

export default function MemberDashboardPage() {
  return (
    <DashboardShell role="member" title="Member Portal" subtitle="Your workouts, meals, body measurements, progress photos, payments, and AI fitness assistant.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {memberMetrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-volt text-xl font-black text-ink">{member.avatar}</span>
            <div>
              <h2 className="text-2xl font-black">{member.name}</h2>
              <p className="text-sm text-black/58 dark:text-white/58">{member.goal} - Trainer {member.trainer}</p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              ["Height", `${member.heightCm} cm`],
              ["Weight", `${member.weightKg} kg`],
              ["Age", `${member.age}`],
              ["Plan", member.plan],
              ["Diet", "Flexible"],
              ["Renewal", member.renewalDate]
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-black/10 p-4 dark:border-white/10">
                <p className="text-xs text-black/50 dark:text-white/50">{label}</p>
                <p className="mt-1 font-black">{value}</p>
              </div>
            ))}
          </div>
        </Card>
        <AiAssistantPanel />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card id="workout">
          <Dumbbell className="h-6 w-6 text-volt" />
          <h2 className="mt-4 text-xl font-black">Today&apos;s workout</h2>
          <p className="mt-2 text-sm text-black/58 dark:text-white/58">{workoutLibrary[0].name}</p>
          <div className="mt-5 space-y-3">
            {["Incline dumbbell press - 4x10", "Lat pulldown - 4x12", "Leg press - 4x10"].map((exercise) => (
              <div key={exercise} className="rounded-2xl border border-black/10 p-3 text-sm dark:border-white/10">{exercise}</div>
            ))}
          </div>
        </Card>
        <Card id="diet">
          <Soup className="h-6 w-6 text-volt" />
          <h2 className="mt-4 text-xl font-black">Nutrition overview</h2>
          <p className="mt-2 text-sm text-black/58 dark:text-white/58">{dietPlans[0].name}</p>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              ["Calories", dietPlans[0].calories],
              ["Protein", `${dietPlans[0].protein}g`],
              ["Meals", 5]
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-black/5 p-3 text-center dark:bg-white/10">
                <p className="text-xs text-black/50 dark:text-white/50">{label}</p>
                <p className="mt-1 font-black">{value}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card id="progress">
          <Activity className="h-6 w-6 text-volt" />
          <h2 className="mt-4 text-xl font-black">Progress tracking</h2>
          <div className="mt-5 space-y-3">
            {progressItems.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-2xl border border-black/10 p-3 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <item.icon className="h-4 w-4 text-volt" />
                  <span className="text-sm">{item.label}</span>
                </div>
                <Badge>{item.value}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card id="payments" className="mt-6">
        <div className="flex items-center gap-3">
          <CreditCard className="h-5 w-5 text-volt" />
          <h2 className="text-xl font-black">Subscription and payments</h2>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <Badge>Plan: {member.plan}</Badge>
          <Badge>Status: {member.status}</Badge>
          <Badge>Next invoice: INR 2,999</Badge>
        </div>
      </Card>
    </DashboardShell>
  );
}

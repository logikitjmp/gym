import { CalendarCheck, Dumbbell, MessageCircle, Soup, TrendingUp, Users } from "lucide-react";
import { AiAssistantPanel } from "@/components/dashboard/ai-assistant-panel";
import { AttendanceChart } from "@/components/dashboard/charts";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MetricCard } from "@/components/ui/metric-card";
import { dietPlans, members, workoutLibrary } from "@/lib/fixtures/demo";

const trainerMetrics = [
  { label: "Assigned clients", value: "42", delta: "+6 new this month", tone: "green" as const },
  { label: "Plan adherence", value: "81%", delta: "+9% weekly", tone: "green" as const },
  { label: "Appointments", value: "18", delta: "Today and tomorrow", tone: "blue" as const },
  { label: "Progress reviews", value: "6", delta: "Due today", tone: "amber" as const }
];

export const metadata = {
  title: "Trainer Dashboard"
};

export default function TrainerDashboardPage() {
  return (
    <DashboardShell role="trainer" title="Trainer Dashboard" subtitle="Assigned clients, workouts, diet plans, attendance, progress analytics, and scheduling.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {trainerMetrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <Card>
          <div className="mb-5 flex items-center gap-3">
            <Users className="h-5 w-5 text-volt" />
            <h2 className="text-xl font-black">Assigned clients</h2>
          </div>
          <div className="space-y-3">
            {members.map((member) => (
              <div key={member.id} className="flex items-center justify-between rounded-2xl border border-black/10 p-4 dark:border-white/10">
                <div>
                  <p className="font-black">{member.name}</p>
                  <p className="text-sm text-black/55 dark:text-white/55">{member.goal} - {member.attendance}% attendance</p>
                </div>
                <Badge>{member.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
        <Card id="attendance">
          <div className="flex items-center gap-3">
            <CalendarCheck className="h-5 w-5 text-volt" />
            <h2 className="text-xl font-black">Client attendance</h2>
          </div>
          <AttendanceChart />
        </Card>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Card id="workouts">
          <div className="flex items-center gap-3">
            <Dumbbell className="h-5 w-5 text-volt" />
            <h2 className="text-xl font-black">Workout creation</h2>
          </div>
          <div className="mt-5 grid gap-3">
            {workoutLibrary.map((workout) => (
              <div key={workout.name} className="rounded-2xl border border-black/10 p-4 dark:border-white/10">
                <div className="flex items-center justify-between">
                  <p className="font-black">{workout.name}</p>
                  <Badge>{workout.duration}</Badge>
                </div>
                <p className="mt-2 text-sm text-black/55 dark:text-white/55">{workout.category} - {workout.level} - reps and sets tracked</p>
              </div>
            ))}
          </div>
        </Card>
        <Card id="diet">
          <div className="flex items-center gap-3">
            <Soup className="h-5 w-5 text-volt" />
            <h2 className="text-xl font-black">Diet assignments</h2>
          </div>
          <div className="mt-5 space-y-3">
            {dietPlans.map((plan) => (
              <div key={plan.name} className="rounded-2xl border border-black/10 p-4 dark:border-white/10">
                <p className="font-black">{plan.name}</p>
                <p className="mt-1 text-sm text-black/55 dark:text-white/55">{plan.calories} calories - {plan.protein}g protein - {plan.preference}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <AiAssistantPanel />
        <Card id="messages">
          <div className="flex items-center gap-3">
            <MessageCircle className="h-5 w-5 text-volt" />
            <h2 className="text-xl font-black">Messages and schedule</h2>
          </div>
          <div className="mt-5 space-y-3">
            {["Kabir asked for shoulder-safe pressing swaps.", "Ananya booked a PT slot at 7:30 AM.", "Rohan shared progress photos for review."].map((message) => (
              <div key={message} className="rounded-2xl border border-black/10 p-4 text-sm dark:border-white/10">{message}</div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl bg-volt/10 p-4">
            <TrendingUp className="h-5 w-5 text-volt" />
            <p className="mt-3 text-sm leading-6">Client progress analytics show strength adherence is up 12% after AI-generated deload recommendations.</p>
          </div>
        </Card>
      </div>
    </DashboardShell>
  );
}

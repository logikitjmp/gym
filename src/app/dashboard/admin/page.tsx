import { Bell, CalendarCheck, CreditCard, Dumbbell, MessageSquare, Soup, UserPlus } from "lucide-react";
import { AiAssistantPanel } from "@/components/dashboard/ai-assistant-panel";
import { AttendanceChart, PlanPopularityChart, RevenueChart } from "@/components/dashboard/charts";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { MemberTable } from "@/components/dashboard/member-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MetricCard } from "@/components/ui/metric-card";
import { adminMetrics, dietPlans, notifications, trainers, workoutLibrary } from "@/lib/fixtures/demo";

export const metadata = {
  title: "Admin Dashboard"
};

export default function AdminDashboardPage() {
  return (
    <DashboardShell
      title="Gym Owner Dashboard"
      subtitle="Revenue, memberships, attendance, trainers, payments, AI automation, and retention intelligence."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {adminMetrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card id="analytics">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black">Revenue analytics</h2>
              <p className="text-sm text-black/58 dark:text-white/58">Monthly revenue and member growth.</p>
            </div>
            <Badge>INR 18.7L MRR</Badge>
          </div>
          <RevenueChart />
        </Card>
        <Card id="attendance">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black">Daily attendance</h2>
              <p className="text-sm text-black/58 dark:text-white/58">QR, app, and manual check-ins.</p>
            </div>
            <CalendarCheck className="h-5 w-5 text-volt" />
          </div>
          <AttendanceChart />
        </Card>
      </div>

      <div className="mt-6">
        <MemberTable />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card id="trainers">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-black">Top trainers</h2>
            <Button variant="secondary" className="h-10">
              <UserPlus className="h-4 w-4" />
              Add trainer
            </Button>
          </div>
          <div className="space-y-3">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="flex items-center justify-between rounded-2xl border border-black/10 p-4 dark:border-white/10">
                <div>
                  <p className="font-black">{trainer.name}</p>
                  <p className="text-sm text-black/55 dark:text-white/55">{trainer.specialty}</p>
                </div>
                <div className="text-right">
                  <p className="font-black">{trainer.revenue}</p>
                  <p className="text-xs text-volt">{trainer.clients} clients - {trainer.rating} rating</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card id="payments">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black">Membership and payments</h2>
              <p className="text-sm text-black/58 dark:text-white/58">Renewals, GST-ready invoices, and subscription reminders.</p>
            </div>
            <CreditCard className="h-5 w-5 text-volt" />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["Renewals due", "118", "Next 30 days"],
              ["Pending payments", "34", "Auto reminders ready"],
              ["Invoices issued", "1,482", "GST metadata attached"]
            ].map(([label, value, hint]) => (
              <div key={label} className="rounded-2xl border border-black/10 p-4 dark:border-white/10">
                <p className="text-sm text-black/55 dark:text-white/55">{label}</p>
                <p className="mt-3 text-3xl font-black">{value}</p>
                <p className="mt-2 text-xs text-volt">{hint}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <PlanPopularityChart />
          </div>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Card id="workouts">
          <div className="flex items-center gap-3">
            <Dumbbell className="h-5 w-5 text-volt" />
            <h2 className="text-xl font-black">Workout management</h2>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {workoutLibrary.map((workout) => (
              <div key={workout.name} className="rounded-2xl border border-black/10 p-4 dark:border-white/10">
                <p className="font-black">{workout.name}</p>
                <p className="mt-1 text-sm text-black/55 dark:text-white/55">{workout.category} - {workout.level}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card id="diet">
          <div className="flex items-center gap-3">
            <Soup className="h-5 w-5 text-volt" />
            <h2 className="text-xl font-black">Diet plan system</h2>
          </div>
          <div className="mt-5 space-y-3">
            {dietPlans.map((plan) => (
              <div key={plan.name} className="flex items-center justify-between rounded-2xl border border-black/10 p-4 dark:border-white/10">
                <div>
                  <p className="font-black">{plan.name}</p>
                  <p className="text-sm text-black/55 dark:text-white/55">{plan.preference}</p>
                </div>
                <Badge>{plan.calories} kcal - {plan.protein}g protein</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <AiAssistantPanel />
        <Card id="notifications">
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-volt" />
            <h2 className="text-xl font-black">Notifications</h2>
          </div>
          <div className="mt-5 space-y-3">
            {notifications.map((notification) => (
              <div key={notification} className="flex gap-3 rounded-2xl border border-black/10 p-4 dark:border-white/10">
                <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
                <p className="text-sm text-black/70 dark:text-white/70">{notification}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardShell>
  );
}

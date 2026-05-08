import { Bot, CalendarCheck, CreditCard, Dumbbell, LineChart, MessageSquare, QrCode, ShieldCheck, Soup, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  { title: "Gym management", body: "Member profiles, trainers, plans, renewals, and operational alerts.", icon: ShieldCheck },
  { title: "Attendance system", body: "QR check-ins, manual logs, late alerts, and attendance analytics.", icon: QrCode },
  { title: "Payments", body: "Stripe, Razorpay, invoices, GST metadata, and auto-renew workflows.", icon: CreditCard },
  { title: "Workout planning", body: "Exercise library, reps, sets, goal categories, and progress history.", icon: Dumbbell },
  { title: "Diet planning", body: "Meals, calories, macros, vegetarian and non-vegetarian options.", icon: Soup },
  { title: "AI fitness assistant", body: "Workout generation, diet suggestions, progress analysis, and chat.", icon: Bot },
  { title: "Trainer dashboard", body: "Assigned clients, messages, scheduling, and client analytics.", icon: Users },
  { title: "Analytics", body: "Revenue, retention, member growth, plan popularity, and trainer performance.", icon: LineChart },
  { title: "Notifications", body: "Expiry alerts, workout reminders, push, email, and WhatsApp-ready flows.", icon: MessageSquare },
  { title: "Scheduling", body: "Appointments, personal training sessions, and daily coach planning.", icon: CalendarCheck }
];

export function FeatureGrid() {
  return (
    <div id="features" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {features.map((feature) => (
        <Card key={feature.title} className="min-h-52 transition hover:-translate-y-1 hover:border-volt/60">
          <feature.icon className="h-7 w-7 text-volt" />
          <h3 className="mt-5 text-lg font-black">{feature.title}</h3>
          <p className="mt-3 text-sm leading-6 text-black/58 dark:text-white/58">{feature.body}</p>
        </Card>
      ))}
    </div>
  );
}

import { Building2, CreditCard, Dumbbell, UserRoundCog } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card, Section } from "@/components/ui/card";

const steps = [
  { icon: Building2, title: "Create gym profile", body: "Add branding, GST number, contact info, and public gym page settings." },
  { icon: UserRoundCog, title: "Invite trainers", body: "Assign specialties, clients, calendars, and role-based access." },
  { icon: CreditCard, title: "Connect billing", body: "Enable Stripe or Razorpay, auto-renewals, reminders, and invoices." },
  { icon: Dumbbell, title: "Launch AI plans", body: "Generate workouts, diet templates, and progress review workflows." }
];

export const metadata = {
  title: "Onboarding"
};

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-bone text-ink dark:bg-ink dark:text-bone">
      <Section>
        <div className="max-w-3xl">
          <h1 className="text-5xl font-black tracking-tight">Set up your gym in four focused steps.</h1>
          <p className="mt-4 text-lg leading-8 text-black/58 dark:text-white/58">
            GymFlow AI starts with a premium demo workspace, then becomes production-ready as each provider key is connected.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={step.title} className="min-h-64">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-volt text-ink">{index + 1}</span>
              <step.icon className="mt-7 h-7 w-7 text-volt" />
              <h2 className="mt-4 text-xl font-black">{step.title}</h2>
              <p className="mt-3 text-sm leading-6 text-black/58 dark:text-white/58">{step.body}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex gap-3">
          <ButtonLink href="/dashboard/admin">Open demo dashboard</ButtonLink>
          <ButtonLink href="/settings" variant="secondary">Configure settings</ButtonLink>
        </div>
      </Section>
    </main>
  );
}

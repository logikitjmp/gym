import { ArrowLeft, CreditCard } from "lucide-react";
import { PricingCards } from "@/components/landing/pricing-cards";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/card";

export const metadata = {
  title: "Pricing"
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-bone text-ink dark:bg-ink dark:text-bone">
      <Section>
        <ButtonLink href="/" variant="secondary">
          <ArrowLeft className="h-4 w-4" />
          Back home
        </ButtonLink>
        <div className="mt-12 max-w-3xl">
          <CreditCard className="h-10 w-10 text-volt" />
          <h1 className="mt-6 text-5xl font-black tracking-tight">GymFlow AI pricing</h1>
          <p className="mt-4 text-lg leading-8 text-black/58 dark:text-white/58">
            Pick a plan for your gym, then connect Stripe or Razorpay when you are ready for live payments.
          </p>
        </div>
        <div className="mt-12">
          <PricingCards />
        </div>
      </Section>
    </main>
  );
}

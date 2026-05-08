import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pricingPlans } from "@/lib/fixtures/demo";
import { cn } from "@/lib/utils";

export function PricingCards() {
  return (
    <div id="pricing" className="grid gap-5 lg:grid-cols-3">
      {pricingPlans.map((plan) => (
        <Card key={plan.name} className={cn("flex min-h-[420px] flex-col", plan.highlighted && "border-volt/70 bg-volt/10 shadow-glow")}>
          <div>
            <p className="text-sm font-bold text-volt">{plan.name}</p>
            <h3 className="mt-4 text-4xl font-black tracking-tight">{plan.price}</h3>
            <p className="mt-3 text-sm leading-6 text-black/58 dark:text-white/58">{plan.description}</p>
          </div>
          <ul className="mt-8 flex-1 space-y-4">
            {plan.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <ButtonLink href="/pricing" variant={plan.highlighted ? "primary" : "secondary"} className="mt-8 w-full">
            Choose plan
          </ButtonLink>
        </Card>
      ))}
    </div>
  );
}

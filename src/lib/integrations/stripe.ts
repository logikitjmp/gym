import Stripe from "stripe";
import { env } from "@/lib/env";

export type CheckoutInput = {
  planName: string;
  amount: number;
  currency?: string;
  memberEmail?: string;
  successUrl?: string;
  cancelUrl?: string;
};

export async function createStripeCheckout(input: CheckoutInput) {
  if (!env.stripeSecretKey) {
    return {
      provider: "STRIPE",
      demo: true,
      checkoutUrl: `${env.appUrl}/pricing?checkout=demo-stripe&plan=${encodeURIComponent(input.planName)}`,
      externalId: `demo_stripe_${Date.now()}`
    };
  }

  const stripe = new Stripe(env.stripeSecretKey);
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: input.memberEmail,
    success_url: input.successUrl ?? `${env.appUrl}/dashboard/admin?payment=success`,
    cancel_url: input.cancelUrl ?? `${env.appUrl}/pricing?payment=cancelled`,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: (input.currency ?? "inr").toLowerCase(),
          unit_amount: input.amount * 100,
          product_data: {
            name: input.planName
          }
        }
      }
    ],
    metadata: {
      source: "gymflow-ai"
    }
  });

  return {
    provider: "STRIPE",
    demo: false,
    checkoutUrl: session.url,
    externalId: session.id
  };
}

export function verifyStripeWebhook(payload: string | Buffer, signature: string | null) {
  if (!env.stripeSecretKey || !env.stripeWebhookSecret || !signature) {
    return {
      verified: false,
      demo: true,
      event: { type: "checkout.session.completed", id: `demo_evt_${Date.now()}` }
    };
  }

  const stripe = new Stripe(env.stripeSecretKey);
  const event = stripe.webhooks.constructEvent(payload, signature, env.stripeWebhookSecret);
  return { verified: true, demo: false, event };
}

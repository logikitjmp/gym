import { verifyStripeWebhook } from "@/lib/integrations/stripe";
import { jsonResponse } from "@/lib/utils";

export async function POST(request: Request) {
  const payload = await request.text();
  const signature = request.headers.get("stripe-signature");
  const result = verifyStripeWebhook(payload, signature);

  return jsonResponse({
    received: true,
    provider: "STRIPE",
    verified: result.verified,
    demo: result.demo,
    eventType: result.event.type
  });
}

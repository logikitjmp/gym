import { z } from "zod";
import { createRazorpayOrder } from "@/lib/integrations/razorpay";
import { createStripeCheckout } from "@/lib/integrations/stripe";
import { jsonResponse } from "@/lib/utils";

const checkoutSchema = z.object({
  provider: z.enum(["STRIPE", "RAZORPAY"]).default("RAZORPAY"),
  planName: z.string().min(2),
  amount: z.number().int().positive(),
  currency: z.string().default("INR"),
  memberEmail: z.string().email().optional()
});

export async function POST(request: Request) {
  try {
    const input = checkoutSchema.parse(await request.json());
    const checkout =
      input.provider === "STRIPE"
        ? await createStripeCheckout(input)
        : await createRazorpayOrder(input);

    return jsonResponse({
      status: "READY",
      checkout
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return jsonResponse({ error: "Invalid checkout payload.", issues: error.flatten() }, { status: 400 });
    }
    return jsonResponse({ error: "Unable to create checkout." }, { status: 500 });
  }
}

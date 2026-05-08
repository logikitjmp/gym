import crypto from "node:crypto";
import Razorpay from "razorpay";
import { env } from "@/lib/env";
import type { CheckoutInput } from "@/lib/integrations/stripe";

export async function createRazorpayOrder(input: CheckoutInput) {
  if (!env.razorpayKeyId || !env.razorpayKeySecret) {
    return {
      provider: "RAZORPAY",
      demo: true,
      orderId: `demo_razorpay_${Date.now()}`,
      amount: input.amount * 100,
      currency: input.currency ?? "INR"
    };
  }

  const razorpay = new Razorpay({
    key_id: env.razorpayKeyId,
    key_secret: env.razorpayKeySecret
  });

  const order = await razorpay.orders.create({
    amount: input.amount * 100,
    currency: input.currency ?? "INR",
    receipt: `gymflow_${Date.now()}`,
    notes: {
      planName: input.planName,
      source: "gymflow-ai"
    }
  });

  return {
    provider: "RAZORPAY",
    demo: false,
    orderId: order.id,
    amount: order.amount,
    currency: order.currency
  };
}

export function verifyRazorpaySignature(payload: string, signature: string | null) {
  if (!env.razorpayWebhookSecret || !signature) {
    return { verified: false, demo: true };
  }

  const expected = crypto.createHmac("sha256", env.razorpayWebhookSecret).update(payload).digest("hex");
  const expectedBuffer = Buffer.from(expected);
  const signatureBuffer = Buffer.from(signature);

  if (expectedBuffer.length !== signatureBuffer.length) {
    return { verified: false, demo: false };
  }

  return {
    verified: crypto.timingSafeEqual(expectedBuffer, signatureBuffer),
    demo: false
  };
}

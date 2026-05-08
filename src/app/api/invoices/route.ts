import { z } from "zod";
import { jsonResponse } from "@/lib/utils";

const invoiceSchema = z.object({
  memberName: z.string().min(2),
  planName: z.string().min(2),
  subtotal: z.number().int().positive(),
  gstNumber: z.string().optional(),
  currency: z.string().default("INR")
});

export async function POST(request: Request) {
  try {
    const input = invoiceSchema.parse(await request.json());
    const tax = Math.round(input.subtotal * 0.18);
    const invoiceNumber = `GF-${new Date().getFullYear()}-${Date.now().toString().slice(-6)}`;

    return jsonResponse({
      invoiceNumber,
      memberName: input.memberName,
      planName: input.planName,
      subtotal: input.subtotal,
      tax,
      total: input.subtotal + tax,
      currency: input.currency,
      gstNumber: input.gstNumber,
      issuedAt: new Date().toISOString(),
      status: "ISSUED"
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return jsonResponse({ error: "Invalid invoice payload.", issues: error.flatten() }, { status: 400 });
    }
    return jsonResponse({ error: "Unable to create invoice." }, { status: 500 });
  }
}

import { verifyRazorpaySignature } from "@/lib/integrations/razorpay";
import { jsonResponse } from "@/lib/utils";

export async function POST(request: Request) {
  const payload = await request.text();
  const signature = request.headers.get("x-razorpay-signature");
  const result = verifyRazorpaySignature(payload, signature);

  return jsonResponse({
    received: true,
    provider: "RAZORPAY",
    verified: result.verified,
    demo: result.demo
  });
}

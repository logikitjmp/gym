import { z } from "zod";
import { aiRequestSchema, canUseAi, runFitnessAi } from "@/lib/integrations/openai";
import { jsonResponse } from "@/lib/utils";

export async function POST(request: Request) {
  try {
    const input = aiRequestSchema.parse(await request.json());

    if (!canUseAi(input.role, input.feature)) {
      return jsonResponse({ error: "This role cannot access the requested AI feature." }, { status: 403 });
    }

    const result = await runFitnessAi(input);

    if (process.env.DATABASE_URL) {
      const { prisma } = await import("@/lib/db");
      prisma.aiConversation
        .create({
          data: {
            gymId: "demo_gym",
            userRole: input.role,
            feature: input.feature,
            prompt: input.message,
            response: result.response,
            model: result.model,
            fallback: result.fallback,
            tokenEstimate: result.tokenEstimate
          }
        })
        .catch(() => undefined);
    }

    return jsonResponse(result);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return jsonResponse({ error: "Invalid AI request.", issues: error.flatten() }, { status: 400 });
    }
    return jsonResponse({ error: "AI assistant failed to respond." }, { status: 500 });
  }
}

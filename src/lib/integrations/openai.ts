import OpenAI from "openai";
import { z } from "zod";
import { env } from "@/lib/env";
import type { AiFeature, AppRole } from "@/lib/types";

export const aiRequestSchema = z.object({
  feature: z.enum(["workout", "diet", "progress", "chat"]),
  role: z.enum(["ADMIN", "TRAINER", "MEMBER", "PLATFORM_ADMIN"]).default("MEMBER"),
  goal: z.string().optional(),
  weightKg: z.number().optional(),
  experience: z.string().optional(),
  dietPreference: z.string().optional(),
  message: z.string().min(2).max(2000)
});

type AiRequest = z.infer<typeof aiRequestSchema>;

const fallbackResponses: Record<AiFeature, string> = {
  workout:
    "Demo AI workout: 4-day strength split with progressive overload, 8-12 rep hypertrophy blocks, two cardio finishers, and mobility on rest days.",
  diet:
    "Demo AI diet: prioritize 1.8g protein/kg, high-fiber carbs around training, hydration checkpoints, and a balanced dinner with vegetables and lean protein.",
  progress:
    "Demo AI progress analysis: attendance is strong, but recovery markers suggest adding one lower-intensity session and tracking sleep for two weeks.",
  chat:
    "Demo AI assistant: keep workouts goal-specific, log every session, and adjust calories based on weekly progress rather than daily fluctuations."
};

function buildPrompt(input: AiRequest) {
  return [
    "You are GymFlow AI, a premium fitness operations assistant for gyms.",
    "Give practical, safe, non-medical fitness guidance. Be concise and structured.",
    `Role: ${input.role}`,
    `Feature: ${input.feature}`,
    input.goal ? `Goal: ${input.goal}` : undefined,
    input.weightKg ? `Weight: ${input.weightKg}kg` : undefined,
    input.experience ? `Experience: ${input.experience}` : undefined,
    input.dietPreference ? `Diet preference: ${input.dietPreference}` : undefined,
    `User request: ${input.message}`
  ]
    .filter(Boolean)
    .join("\n");
}

export async function runFitnessAi(input: AiRequest) {
  const model = input.feature === "progress" ? env.openaiPremiumModel : env.openaiModel;
  const prompt = buildPrompt(input);

  if (!env.openaiApiKey) {
    return {
      model,
      fallback: true,
      tokenEstimate: Math.ceil(prompt.length / 4),
      response: fallbackResponses[input.feature]
    };
  }

  const client = new OpenAI({ apiKey: env.openaiApiKey });
  const response = await client.responses.create({
    model,
    input: prompt,
    temperature: 0.35
  });

  return {
    model,
    fallback: false,
    tokenEstimate: response.usage?.total_tokens ?? Math.ceil(prompt.length / 4),
    response: response.output_text ?? "GymFlow AI generated a plan, but no text output was returned."
  };
}

export function canUseAi(role: AppRole, feature: AiFeature) {
  if (role === "PLATFORM_ADMIN") return true;
  if (role === "ADMIN") return true;
  if (role === "TRAINER") return feature !== "progress" || true;
  return feature === "workout" || feature === "diet" || feature === "chat";
}

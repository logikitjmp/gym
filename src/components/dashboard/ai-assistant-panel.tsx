"use client";

import { useState, useTransition } from "react";
import { Bot, Loader2, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const quickPrompts = [
  "Generate a 4-day muscle gain routine for an intermediate member at 82kg.",
  "Create a vegetarian fat-loss diet around 1850 calories.",
  "Analyze attendance dropping on Tuesdays and suggest interventions."
];

export function AiAssistantPanel() {
  const [message, setMessage] = useState(quickPrompts[0]);
  const [response, setResponse] = useState("Ask GymFlow AI to generate workouts, diets, progress insights, or member guidance.");
  const [isPending, startTransition] = useTransition();

  function submitPrompt(prompt = message) {
    startTransition(async () => {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          feature: prompt.toLowerCase().includes("diet") ? "diet" : prompt.toLowerCase().includes("analyze") ? "progress" : "workout",
          role: "ADMIN",
          message: prompt,
          goal: "Strength and member retention",
          weightKg: 82,
          experience: "Intermediate"
        })
      });
      const data = (await res.json()) as { response?: string; fallback?: boolean };
      setResponse(`${data.fallback ? "Demo mode: " : ""}${data.response ?? "No AI response returned."}`);
    });
  }

  return (
    <Card id="ai" className="overflow-hidden">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-volt text-ink shadow-glow">
          <Bot className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-xl font-black">AI Fitness Assistant</h2>
          <p className="text-sm text-black/58 dark:text-white/58">Workout generation, diet suggestions, progress analysis, and Q&A.</p>
        </div>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        {quickPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => {
              setMessage(prompt);
              submitPrompt(prompt);
            }}
            className="rounded-2xl border border-black/10 bg-black/[0.03] p-3 text-left text-xs font-semibold transition hover:border-volt/70 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <Sparkles className="mb-2 h-4 w-4 text-volt" />
            {prompt}
          </button>
        ))}
      </div>

      <div className="mt-5 rounded-[20px] border border-black/10 bg-black/[0.03] p-4 dark:border-white/10 dark:bg-white/[0.04]">
        <p className="text-sm leading-6 text-black/70 dark:text-white/72">{response}</p>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="h-12 flex-1 rounded-full border border-black/10 bg-white/75 px-4 text-sm outline-none transition focus:border-volt dark:border-white/10 dark:bg-white/10"
          placeholder="Ask GymFlow AI..."
        />
        <Button type="button" onClick={() => submitPrompt()} disabled={isPending}>
          {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          Ask AI
        </Button>
      </div>
    </Card>
  );
}

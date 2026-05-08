import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <Card className="flex min-h-48 flex-col items-center justify-center text-center">
      <Sparkles className="h-8 w-8 text-volt" />
      <h3 className="mt-4 text-xl font-black">{title}</h3>
      <p className="mt-2 max-w-md text-sm text-black/60 dark:text-white/60">{body}</p>
    </Card>
  );
}

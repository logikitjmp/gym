import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Metric } from "@/lib/types";

const tones = {
  green: "text-volt",
  blue: "text-sky-400",
  amber: "text-amber-400",
  red: "text-red-400"
};

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <Card className="min-h-32 overflow-hidden">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-black/55 dark:text-white/55">{metric.label}</p>
          <p className="mt-3 text-3xl font-black tracking-tight">{metric.value}</p>
        </div>
        <span className="rounded-full bg-volt/15 p-2 text-volt">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <p className={cn("mt-4 text-sm font-semibold", tones[metric.tone])}>{metric.delta}</p>
    </Card>
  );
}

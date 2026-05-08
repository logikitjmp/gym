"use client";

import { motion } from "framer-motion";
import { Activity, ArrowUpRight, CalendarCheck, CreditCard, Dumbbell, Sparkles, Users } from "lucide-react";
import { adminMetrics } from "@/lib/fixtures/demo";

const previewNav = [
  { label: "Dashboard", icon: Activity },
  { label: "Members", icon: Users },
  { label: "Attendance", icon: CalendarCheck },
  { label: "Payments", icon: CreditCard },
  { label: "Workout AI", icon: Dumbbell }
];

export function HeroPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto mt-12 w-full max-w-6xl"
    >
      <div className="absolute -inset-5 rounded-[36px] bg-volt/20 blur-3xl" />
      <div className="glass relative overflow-hidden rounded-[32px] border-white/15 bg-coal/80 p-4 shadow-glass">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-volt" />
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">Live gym command center</span>
        </div>
        <div className="grid gap-4 pt-4 lg:grid-cols-[240px_1fr]">
          <div className="hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-4 lg:block">
            {previewNav.map((item, index) => (
              <div key={item.label} className={`mb-2 flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-semibold ${index === 0 ? "bg-volt text-ink" : "text-white/64"}`}>
                <item.icon className="h-4 w-4" />
                {item.label}
              </div>
            ))}
          </div>
          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {adminMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * index, duration: 0.5 }}
                  className="rounded-[22px] border border-white/10 bg-white/[0.06] p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-white/50">{metric.label}</p>
                    <ArrowUpRight className="h-4 w-4 text-volt" />
                  </div>
                  <p className="mt-3 text-2xl font-black text-white">{metric.value}</p>
                  <p className="mt-2 text-xs font-semibold text-volt">{metric.delta}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-white">Monthly revenue</h3>
                  <span className="rounded-full bg-volt/15 px-3 py-1 text-xs font-semibold text-volt">+22%</span>
                </div>
                <div className="mt-6 flex h-44 items-end gap-3">
                  {[42, 54, 48, 68, 76, 88, 100].map((height, index) => (
                    <motion.span
                      key={height}
                      initial={{ height: 16 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.08 * index, duration: 0.65 }}
                      className="flex-1 rounded-t-2xl bg-gradient-to-t from-volt/40 to-volt"
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-volt text-ink">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-black text-white">AI insight</h3>
                    <p className="text-xs text-white/50">Retention risk</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-white/68">
                  Members with less than 2 visits this week are 3.2x more likely to miss renewal. Send a trainer check-in today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

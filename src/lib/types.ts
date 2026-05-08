import type { LucideIcon } from "lucide-react";

export type AppRole = "ADMIN" | "TRAINER" | "MEMBER" | "PLATFORM_ADMIN";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Metric = {
  label: string;
  value: string;
  delta: string;
  tone: "green" | "blue" | "amber" | "red";
};

export type MemberRecord = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  plan: string;
  trainer: string;
  status: "Active" | "Expiring" | "Expired";
  goal: string;
  heightCm: number;
  weightKg: number;
  age: number;
  attendance: number;
  renewalDate: string;
};

export type TrainerRecord = {
  id: string;
  name: string;
  specialty: string;
  clients: number;
  rating: number;
  revenue: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type AiFeature = "workout" | "diet" | "progress" | "chat";

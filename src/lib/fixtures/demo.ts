import type { MemberRecord, Metric, PricingPlan, TrainerRecord } from "@/lib/types";

export const gymBrand = {
  name: "GymFlow AI",
  gymName: "Volt Performance Club",
  slug: "volt-performance-club",
  tagline: "Manage Your Gym Smarter with AI",
  description:
    "Memberships, attendance, payments, workouts, trainers, and analytics - all in one powerful platform."
};

export const adminMetrics: Metric[] = [
  { label: "Active members", value: "1,284", delta: "+12.4% this month", tone: "green" },
  { label: "Revenue", value: "INR 18.7L", delta: "+22% MRR growth", tone: "green" },
  { label: "Attendance rate", value: "78%", delta: "+8.2% weekly", tone: "blue" },
  { label: "Pending payments", value: "INR 84K", delta: "34 reminders queued", tone: "amber" }
];

export const platformMetrics: Metric[] = [
  { label: "Gyms onboarded", value: "412", delta: "+28 this month", tone: "green" },
  { label: "Platform MRR", value: "INR 42.6L", delta: "+18.6%", tone: "green" },
  { label: "AI requests", value: "98K", delta: "72% workout plans", tone: "blue" },
  { label: "Churn risk", value: "3.8%", delta: "-1.1%", tone: "amber" }
];

export const members: MemberRecord[] = [
  {
    id: "GF-1001",
    name: "Kabir Sethi",
    email: "kabir@example.com",
    avatar: "KS",
    plan: "Pro Annual",
    trainer: "Riya Sharma",
    status: "Active",
    goal: "Muscle gain",
    heightCm: 178,
    weightKg: 82,
    age: 29,
    attendance: 86,
    renewalDate: "2026-06-14"
  },
  {
    id: "GF-1002",
    name: "Ananya Rao",
    email: "ananya@example.com",
    avatar: "AR",
    plan: "PT Elite",
    trainer: "Dev Malik",
    status: "Expiring",
    goal: "Strength",
    heightCm: 165,
    weightKg: 61,
    age: 34,
    attendance: 92,
    renewalDate: "2026-05-18"
  },
  {
    id: "GF-1003",
    name: "Rohan Iyer",
    email: "rohan@example.com",
    avatar: "RI",
    plan: "Monthly",
    trainer: "Riya Sharma",
    status: "Active",
    goal: "Weight loss",
    heightCm: 171,
    weightKg: 91,
    age: 41,
    attendance: 74,
    renewalDate: "2026-06-02"
  }
];

export const trainers: TrainerRecord[] = [
  { id: "TR-01", name: "Riya Sharma", specialty: "Strength and transformation", clients: 42, rating: 4.9, revenue: "INR 4.8L" },
  { id: "TR-02", name: "Dev Malik", specialty: "HIIT and conditioning", clients: 36, rating: 4.8, revenue: "INR 3.9L" },
  { id: "TR-03", name: "Naina Kapoor", specialty: "Nutrition and mobility", clients: 29, rating: 4.9, revenue: "INR 3.1L" }
];

export const revenueData = [
  { month: "Jan", revenue: 920000, members: 920 },
  { month: "Feb", revenue: 1080000, members: 980 },
  { month: "Mar", revenue: 1260000, members: 1060 },
  { month: "Apr", revenue: 1490000, members: 1150 },
  { month: "May", revenue: 1870000, members: 1284 }
];

export const attendanceData = [
  { day: "Mon", checkins: 222 },
  { day: "Tue", checkins: 248 },
  { day: "Wed", checkins: 286 },
  { day: "Thu", checkins: 264 },
  { day: "Fri", checkins: 312 },
  { day: "Sat", checkins: 356 },
  { day: "Sun", checkins: 198 }
];

export const planPopularity = [
  { name: "Monthly", value: 36 },
  { name: "Quarterly", value: 24 },
  { name: "Yearly", value: 28 },
  { name: "PT Pack", value: 12 }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter Gym Plan",
    price: "INR 999/month",
    description: "For boutique gyms launching digital operations.",
    features: ["Up to 250 members", "Attendance logs", "Membership tracking", "Basic analytics", "Demo AI assistant"]
  },
  {
    name: "Pro Gym Plan",
    price: "INR 2999/month",
    description: "For high-growth gyms needing automation and AI.",
    highlighted: true,
    features: ["Unlimited members", "Trainer dashboards", "AI workout and diet plans", "Stripe and Razorpay", "WhatsApp-ready alerts"]
  },
  {
    name: "Enterprise Plan",
    price: "Custom",
    description: "For gym chains, franchises, and premium clubs.",
    features: ["Multi-gym admin panel", "Custom SLA", "Advanced analytics", "AI usage governance", "Dedicated onboarding"]
  }
];

export const workoutLibrary = [
  { name: "AI Hypertrophy Builder", category: "Muscle gain", level: "Intermediate", duration: "55 min", completion: 72 },
  { name: "Metabolic Cut Circuit", category: "Weight loss", level: "Beginner", duration: "42 min", completion: 81 },
  { name: "Power Foundation", category: "Strength", level: "Advanced", duration: "68 min", completion: 64 },
  { name: "Cardio Engine", category: "Cardio", level: "All levels", duration: "35 min", completion: 89 }
];

export const dietPlans = [
  { name: "Lean Bulk Nutrition", calories: 2650, protein: 165, preference: "Flexible" },
  { name: "Vegetarian Fat Loss", calories: 1850, protein: 118, preference: "Vegetarian" },
  { name: "Performance Fuel", calories: 2400, protein: 150, preference: "Non-vegetarian" }
];

export const notifications = [
  "34 payment reminders queued for WhatsApp and email",
  "18 members expire within the next 7 days",
  "Riya Sharma has 6 client progress reviews today",
  "AI detected a drop in Tuesday morning attendance"
];

export const testimonials = [
  {
    quote: "GymFlow AI replaced four separate tools and gave our trainers one clean operating system.",
    author: "Meera Joshi",
    role: "Owner, Urban Lift"
  },
  {
    quote: "The AI workout generator saves hours every week while still feeling personal.",
    author: "Arjun Nair",
    role: "Head Coach, Peak Yard"
  },
  {
    quote: "Members love the app. We love the renewals dashboard.",
    author: "Sameer Khan",
    role: "Founder, Forge Fitness"
  }
];

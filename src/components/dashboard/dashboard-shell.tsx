import Link from "next/link";
import type { ReactNode } from "react";
import {
  BarChart3,
  Bell,
  CalendarCheck,
  CreditCard,
  Dumbbell,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Shield,
  Soup,
  Users,
  UserRoundCog
} from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/types";

const adminNav: NavItem[] = [
  { label: "Dashboard", href: "/dashboard/admin", icon: LayoutDashboard },
  { label: "Members", href: "/dashboard/admin#members", icon: Users },
  { label: "Trainers", href: "/dashboard/admin#trainers", icon: UserRoundCog },
  { label: "Attendance", href: "/dashboard/admin#attendance", icon: CalendarCheck },
  { label: "Membership Plans", href: "/pricing", icon: Shield },
  { label: "Payments", href: "/dashboard/admin#payments", icon: CreditCard },
  { label: "Workout Plans", href: "/dashboard/admin#workouts", icon: Dumbbell },
  { label: "Diet Plans", href: "/dashboard/admin#diet", icon: Soup },
  { label: "Analytics", href: "/dashboard/admin#analytics", icon: BarChart3 },
  { label: "Notifications", href: "/dashboard/admin#notifications", icon: Bell },
  { label: "Settings", href: "/settings", icon: Settings }
];

const trainerNav: NavItem[] = [
  { label: "Clients", href: "/dashboard/trainer", icon: Users },
  { label: "Workouts", href: "/dashboard/trainer#workouts", icon: Dumbbell },
  { label: "Diet Plans", href: "/dashboard/trainer#diet", icon: Soup },
  { label: "Attendance", href: "/dashboard/trainer#attendance", icon: CalendarCheck },
  { label: "Messages", href: "/dashboard/trainer#messages", icon: MessageSquare },
  { label: "Schedule", href: "/dashboard/trainer#schedule", icon: CalendarCheck }
];

const memberNav: NavItem[] = [
  { label: "Overview", href: "/dashboard/member", icon: LayoutDashboard },
  { label: "Workout", href: "/dashboard/member#workout", icon: Dumbbell },
  { label: "Diet", href: "/dashboard/member#diet", icon: Soup },
  { label: "Progress", href: "/dashboard/member#progress", icon: BarChart3 },
  { label: "Payments", href: "/dashboard/member#payments", icon: CreditCard }
];

export function DashboardShell({
  children,
  role = "admin",
  title,
  subtitle
}: {
  children: ReactNode;
  role?: "admin" | "trainer" | "member" | "platform";
  title: string;
  subtitle: string;
}) {
  const nav = role === "trainer" ? trainerNav : role === "member" ? memberNav : adminNav;

  return (
    <div className="min-h-screen bg-bone text-ink dark:bg-ink dark:text-bone">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-black/10 bg-white/72 p-5 backdrop-blur-2xl dark:border-white/10 dark:bg-coal/76 lg:block">
        <Logo />
        <nav className="mt-9 space-y-1">
          {nav.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-black/65 transition hover:bg-black/5 hover:text-black dark:text-white/65 dark:hover:bg-white/10 dark:hover:text-white",
                index === 0 && "bg-volt text-ink hover:bg-volt"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-5 left-5 right-5 rounded-[20px] border border-volt/20 bg-volt/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-volt">AI Copilot</p>
          <p className="mt-2 text-sm text-black/65 dark:text-white/70">Generate plans, spot churn, and automate reminders.</p>
        </div>
      </aside>

      <main className="lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-black/10 bg-bone/80 px-4 py-4 backdrop-blur-2xl dark:border-white/10 dark:bg-ink/80 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <Badge className="mb-2 hidden sm:inline-flex">Volt Performance Club</Badge>
              <h1 className="truncate text-2xl font-black tracking-tight sm:text-3xl">{title}</h1>
              <p className="mt-1 text-sm text-black/58 dark:text-white/58">{subtitle}</p>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/platform" className="hidden rounded-full border border-black/10 px-4 py-2 text-sm font-semibold dark:border-white/10 md:block">
                Platform
              </Link>
              <ThemeToggle />
            </div>
          </div>
          <div className="scrollbar-hide mt-4 flex gap-2 overflow-x-auto lg:hidden">
            {nav.slice(0, 7).map((item) => (
              <Link key={item.href} href={item.href} className="flex shrink-0 items-center gap-2 rounded-full border border-black/10 px-3 py-2 text-xs font-semibold dark:border-white/10">
                <item.icon className="h-3.5 w-3.5" />
                {item.label}
              </Link>
            ))}
          </div>
        </header>
        <div className="px-4 py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}

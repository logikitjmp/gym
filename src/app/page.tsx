import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, PlayCircle, Sparkles, Star, Users } from "lucide-react";
import { AiAssistantPanel } from "@/components/dashboard/ai-assistant-panel";
import { MemberTable } from "@/components/dashboard/member-table";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { HeroPreview } from "@/components/landing/hero-preview";
import { PricingCards } from "@/components/landing/pricing-cards";
import { SiteHeader } from "@/components/landing/site-header";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, Section } from "@/components/ui/card";
import { gymBrand, testimonials, workoutLibrary } from "@/lib/fixtures/demo";

const trusted = ["Urban Lift", "Forge Fitness", "Peak Yard", "Iron Hive", "Motion Lab", "Core District"];
const dashboardPreviews = [
  { title: "Gym Owner", body: "Revenue, renewals, attendance, trainers, and AI insights.", icon: Building2 },
  { title: "Trainer", body: "Clients, workout plans, diet assignments, appointments, and messages.", icon: Users },
  { title: "Member", body: "Progress, workouts, meals, water, measurements, and subscription status.", icon: Star }
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-bone text-ink dark:bg-ink dark:text-bone">
      <SiteHeader />
      <section className="relative min-h-[760px] overflow-hidden pt-32 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(5,5,7,0.96) 0%, rgba(5,5,7,0.72) 46%, rgba(5,5,7,0.62) 100%), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=85')"
          }}
        />
        <div className="absolute inset-0 bg-premium-grid premium-grid opacity-35" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="border-volt/30 bg-volt/10 text-volt">
              <Sparkles className="h-3.5 w-3.5" />
              AI-powered fitness business OS
            </Badge>
            <h1 className="mt-8 text-balance text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl">
              Manage Your Gym Smarter with AI
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">{gymBrand.description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/sign-up" className="h-12 px-6">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/dashboard/admin" variant="secondary" className="h-12 border-white/15 bg-white/10 px-6 text-white hover:bg-white/15">
                Watch Demo
                <PlayCircle className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
          <HeroPreview />
        </div>
      </section>

      <Section className="py-14">
        <div className="flex flex-col gap-6 border-b border-black/10 pb-12 dark:border-white/10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-black/50 dark:text-white/50">Trusted by gyms worldwide</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Built for clubs that care about member experience.</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {trusted.map((brand) => (
              <span key={brand} className="rounded-full border border-black/10 px-4 py-3 text-center text-sm font-black dark:border-white/10">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-10 max-w-3xl">
          <Badge>Features showcase</Badge>
          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Every gym workflow in one fast command center.</h2>
        </div>
        <FeatureGrid />
      </Section>

      <Section id="dashboard">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Badge>Dashboard previews</Badge>
            <h2 className="mt-5 text-4xl font-black tracking-tight">Admin, trainer, and member experiences.</h2>
          </div>
          <ButtonLink href="/dashboard/admin" variant="secondary">
            Open dashboard
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {dashboardPreviews.map((preview) => (
            <Card key={preview.title} className="min-h-64">
              <preview.icon className="h-8 w-8 text-volt" />
              <h3 className="mt-6 text-2xl font-black">{preview.title}</h3>
              <p className="mt-3 leading-7 text-black/58 dark:text-white/58">{preview.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="ai">
        <AiAssistantPanel />
      </Section>

      <Section>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <Badge>Membership management preview</Badge>
            <h2 className="mt-5 text-4xl font-black tracking-tight">Search, track, renew, and coach members.</h2>
          </div>
        </div>
        <MemberTable />
      </Section>

      <Section>
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Badge>Workout and diet planning</Badge>
            <h2 className="mt-5 text-4xl font-black tracking-tight">Personalized routines with measurable progress.</h2>
            <p className="mt-4 leading-7 text-black/58 dark:text-white/58">
              Trainers can assign structured plans, members can track completion, and AI can generate goal-based routines.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {workoutLibrary.map((workout) => (
              <Card key={workout.name}>
                <p className="text-sm font-bold text-volt">{workout.category}</p>
                <h3 className="mt-3 text-xl font-black">{workout.name}</h3>
                <p className="mt-2 text-sm text-black/58 dark:text-white/58">{workout.level} - {workout.duration}</p>
                <div className="mt-5 h-2 rounded-full bg-black/10 dark:bg-white/10">
                  <div className="h-full rounded-full bg-volt" style={{ width: `${workout.completion}%` }} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-10 max-w-3xl">
          <Badge>Testimonials</Badge>
          <h2 className="mt-5 text-4xl font-black tracking-tight">Operators, trainers, and members feel the difference.</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.author} className="min-h-64">
              <div className="flex gap-1 text-volt">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-lg font-semibold leading-8">{`"${item.quote}"`}</p>
              <p className="mt-6 font-black">{item.author}</p>
              <p className="text-sm text-black/55 dark:text-white/55">{item.role}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-10 text-center">
          <Badge>Pricing plans</Badge>
          <h2 className="mt-5 text-4xl font-black tracking-tight">Start lean. Scale into enterprise operations.</h2>
        </div>
        <PricingCards />
      </Section>

      <Section id="faq">
        <div className="grid gap-5 lg:grid-cols-2">
          {[
            ["Does GymFlow AI support Razorpay and Stripe?", "Yes. Both adapters are included with webhook verification and demo fallbacks for local testing."],
            ["Can trainers create workout and diet plans?", "Yes. Trainers get assigned clients, plan creation, messaging, appointments, and progress analytics."],
            ["Is it mobile responsive?", "Yes. The MVP uses responsive dashboards, mobile navigation, PWA metadata, and touch-friendly controls."],
            ["Can members check in with QR codes?", "Yes. QR and manual attendance are both modeled, with late check-in alerts and analytics."]
          ].map(([question, answer]) => (
            <Card key={question}>
              <CheckCircle2 className="h-6 w-6 text-volt" />
              <h3 className="mt-4 text-xl font-black">{question}</h3>
              <p className="mt-3 leading-7 text-black/58 dark:text-white/58">{answer}</p>
            </Card>
          ))}
        </div>
      </Section>

      <footer className="border-t border-black/10 px-4 py-10 dark:border-white/10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-black/58 dark:text-white/58 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold">(c) 2026 GymFlow AI. Premium gym operations, powered by AI.</p>
          <div className="flex gap-5">
            <Link href="/pricing">Pricing</Link>
            <Link href="/gym/volt-performance-club">Public gym profile</Link>
            <Link href="/settings">Settings</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

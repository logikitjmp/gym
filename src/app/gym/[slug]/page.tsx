import { CalendarCheck, Dumbbell, MapPin, Star, Users } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card, Section } from "@/components/ui/card";
import { gymBrand, trainers } from "@/lib/fixtures/demo";

const gymStats = [
  { icon: Users, label: "1,284 members" },
  { icon: Star, label: "4.9 trainer rating" },
  { icon: CalendarCheck, label: "QR attendance" },
  { icon: MapPin, label: "Bandra West, Mumbai" }
];

export const metadata = {
  title: "Public Gym Profile"
};

export default async function PublicGymProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-bone text-ink dark:bg-ink dark:text-bone">
      <section className="relative min-h-[620px] overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(5,5,7,0.92), rgba(5,5,7,0.56)), url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=2200&q=85')"
          }}
        />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl flex-col justify-end px-4 pb-20 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-volt">{slug.replaceAll("-", " ")}</p>
          <h1 className="mt-5 max-w-4xl text-6xl font-black tracking-tight">{gymBrand.gymName}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">Premium strength, conditioning, nutrition, and AI-guided member experience in one performance club.</p>
          <div className="mt-8 flex gap-3">
            <ButtonLink href="/sign-up">Join now</ButtonLink>
            <ButtonLink href="/dashboard/member" variant="secondary" className="border-white/15 bg-white/10 text-white hover:bg-white/15">Member demo</ButtonLink>
          </div>
        </div>
      </section>
      <Section>
        <div className="grid gap-5 md:grid-cols-4">
          {gymStats.map((stat) => (
            <Card key={stat.label}>
              <stat.icon className="h-6 w-6 text-volt" />
              <p className="mt-4 font-black">{stat.label}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Dumbbell className="h-8 w-8 text-volt" />
            <h2 className="mt-5 text-4xl font-black tracking-tight">Training built around your goals.</h2>
            <p className="mt-4 leading-7 text-black/58 dark:text-white/58">Strength, cardio, transformation, nutrition, and personal training packages managed through GymFlow AI.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {trainers.map((trainer) => (
              <Card key={trainer.id}>
                <p className="text-xl font-black">{trainer.name}</p>
                <p className="mt-2 text-sm text-black/58 dark:text-white/58">{trainer.specialty}</p>
                <p className="mt-4 text-sm font-bold text-volt">{trainer.rating} rating</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}

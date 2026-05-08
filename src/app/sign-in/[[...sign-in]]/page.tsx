import { SignIn } from "@clerk/nextjs";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SignInPage() {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-ink px-4 py-12 text-bone">
        <Card className="max-w-md text-center">
          <h1 className="text-3xl font-black">Demo authentication</h1>
          <p className="mt-4 text-sm leading-6 text-white/62">
            Clerk keys are not configured yet. Explore GymFlow AI with seeded demo roles, then add Clerk environment variables for live auth.
          </p>
          <div className="mt-6 grid gap-3">
            <ButtonLink href="/dashboard/admin">Open admin dashboard</ButtonLink>
            <ButtonLink href="/dashboard/trainer" variant="secondary">Open trainer dashboard</ButtonLink>
            <ButtonLink href="/dashboard/member" variant="secondary">Open member portal</ButtonLink>
          </div>
        </Card>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-4 py-12">
      <SignIn
        appearance={{
          elements: {
            rootBox: "mx-auto",
            cardBox: "shadow-glow"
          }
        }}
      />
    </main>
  );
}

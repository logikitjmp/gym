import { SignUp } from "@clerk/nextjs";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SignUpPage() {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-ink px-4 py-12 text-bone">
        <Card className="max-w-md text-center">
          <h1 className="text-3xl font-black">Start in demo mode</h1>
          <p className="mt-4 text-sm leading-6 text-white/62">
            Add Clerk keys to enable email/password, Google login, OTP verification, forgot password, and role-based production auth.
          </p>
          <div className="mt-6 grid gap-3">
            <ButtonLink href="/dashboard/admin">Launch demo gym</ButtonLink>
            <ButtonLink href="/settings" variant="secondary">View setup settings</ButtonLink>
          </div>
        </Card>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-4 py-12">
      <SignUp
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

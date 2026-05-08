import { Globe2, Languages, Moon, ShieldCheck, Smartphone, Webhook } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const settings = [
  { icon: ShieldCheck, title: "Role-based authentication", body: "Admin, trainer, member, and platform admin permissions via Clerk metadata." },
  { icon: Webhook, title: "Integration keys", body: "Stripe, Razorpay, OpenAI, Cloudinary, email, and WhatsApp provider configuration." },
  { icon: Languages, title: "Multi-language support", body: "English default with i18n-ready routing and Hindi-ready copy structure." },
  { icon: Moon, title: "Dark and light mode", body: "Theme toggle persists across sessions and supports system preference." },
  { icon: Smartphone, title: "PWA support", body: "Installable app shell with manifest, mobile-first layout, and theme color." },
  { icon: Globe2, title: "Public gym profile", body: "SEO-ready page for club branding, trainers, plans, and lead capture." }
];

export const metadata = {
  title: "Settings"
};

export default function SettingsPage() {
  return (
    <DashboardShell title="Settings" subtitle="Configure gym profile, roles, integrations, localization, notifications, and app behavior.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {settings.map((item) => (
          <Card key={item.title} className="min-h-56">
            <item.icon className="h-7 w-7 text-volt" />
            <h2 className="mt-5 text-xl font-black">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-black/58 dark:text-white/58">{item.body}</p>
          </Card>
        ))}
      </div>
      <Card className="mt-6">
        <h2 className="text-xl font-black">Environment readiness</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {["DATABASE_URL", "CLERK_SECRET_KEY", "OPENAI_API_KEY", "STRIPE_SECRET_KEY", "RAZORPAY_KEY_ID", "CLOUDINARY_CLOUD_NAME"].map((key) => (
            <Badge key={key}>{key}</Badge>
          ))}
        </div>
      </Card>
    </DashboardShell>
  );
}

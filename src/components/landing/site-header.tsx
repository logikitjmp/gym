import { ArrowRight, PlayCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/60 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/70 lg:flex">
          <a href="#features">Features</a>
          <a href="#dashboard">Dashboards</a>
          <a href="#ai">AI Assistant</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink href="/sign-in" variant="secondary" className="hidden sm:inline-flex">
            Watch Demo
            <PlayCircle className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/sign-up">
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}

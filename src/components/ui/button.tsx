import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-volt text-ink shadow-glow hover:bg-volt-strong focus-visible:ring-volt",
  secondary:
    "border border-black/10 bg-white/70 text-ink hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-bone dark:hover:bg-white/15",
  ghost:
    "text-foreground hover:bg-black/5 dark:hover:bg-white/10",
  dark:
    "bg-ink text-bone hover:bg-black dark:bg-bone dark:text-ink dark:hover:bg-white"
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary"
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt focus-visible:ring-offset-2",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}

import Link from "next/link";
import { Activity } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-volt text-ink shadow-glow">
        <Activity className="h-5 w-5" />
      </span>
      <span className="text-lg font-black tracking-tight">GymFlow AI</span>
    </Link>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "@/components/providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  title: {
    default: "GymFlow AI - AI Gym Management SaaS",
    template: "%s | GymFlow AI"
  },
  description:
    "GymFlow AI is an all-in-one gym management and fitness platform for memberships, attendance, payments, workouts, trainers, AI coaching, and analytics.",
  applicationName: "GymFlow AI",
  keywords: ["gym management software", "fitness SaaS", "AI fitness assistant", "gym attendance", "membership management"],
  authors: [{ name: "GymFlow AI" }],
  openGraph: {
    title: "GymFlow AI",
    description: "Manage your gym smarter with AI.",
    type: "website",
    url: "/"
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#b7ff2a",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const hasClerk = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
  const document = (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );

  if (!hasClerk) {
    return document;
  }

  return (
    <ClerkProvider>
      {document}
    </ClerkProvider>
  );
}

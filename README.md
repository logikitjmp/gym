# GymFlow AI

GymFlow AI is a premium full-stack SaaS MVP for gym owners, trainers, members, and platform operators. It combines gym operations, member management, attendance, plans, payments, AI fitness guidance, analytics, and responsive SaaS UI.

## Stack

- Next.js App Router, React, TypeScript
- Tailwind CSS, Framer Motion, Recharts, Lucide icons
- Clerk authentication with role-based routing
- Prisma with PostgreSQL
- Stripe, Razorpay, and OpenAI adapters with demo fallbacks

## Local Setup

This workspace did not have global `npm`, `pnpm`, Docker, `psql`, or Git available on PATH when scaffolded. Install Node.js LTS with npm, then run:

```bash
npm install
cp .env.example .env.local
npm run db:generate
npm run dev
```

For real data persistence, set `DATABASE_URL` to a PostgreSQL database. For integrations, fill the Clerk, Stripe, Razorpay, Cloudinary, and OpenAI keys in `.env.local`.

## Useful Commands

```bash
npm run typecheck
npm run lint
npm run test
npm run build
npm run e2e
```

## Demo Behavior

When integration keys are missing, payment and AI routes return deterministic demo responses so the product can still be explored safely. Replace the environment variables to enable real providers.

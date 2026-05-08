import { PrismaClient, UserRole, FitnessGoal, DietPreference, PaymentProvider, PaymentStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const gym = await prisma.gym.upsert({
    where: { slug: "volt-performance-club" },
    update: {},
    create: {
      name: "Volt Performance Club",
      slug: "volt-performance-club",
      address: "Bandra West, Mumbai",
      phone: "+91 90000 12000",
      gstNumber: "27AAFCG1234K1ZX"
    }
  });

  await prisma.user.upsert({
    where: { clerkId: "demo_admin" },
    update: {},
    create: {
      clerkId: "demo_admin",
      email: "owner@gymflow.ai",
      name: "Aarav Mehta",
      role: UserRole.ADMIN,
      gymId: gym.id
    }
  });

  const trainer = await prisma.trainer.upsert({
    where: { id: "demo_trainer_1" },
    update: {},
    create: {
      id: "demo_trainer_1",
      gymId: gym.id,
      fullName: "Riya Sharma",
      email: "riya@gymflow.ai",
      specialty: "Strength and transformation coaching",
      rating: 4.9
    }
  });

  const member = await prisma.member.upsert({
    where: { memberCode: "GF-1001" },
    update: {},
    create: {
      gymId: gym.id,
      trainerId: trainer.id,
      memberCode: "GF-1001",
      fullName: "Kabir Sethi",
      email: "kabir@example.com",
      phone: "+91 98888 11111",
      age: 29,
      heightCm: 178,
      weightKg: 82,
      goal: FitnessGoal.MUSCLE_GAIN,
      dietPreference: DietPreference.FLEXIBLE,
      emergencyName: "Nisha Sethi",
      emergencyPhone: "+91 98888 22222",
      expirationDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 24)
    }
  });

  const plan = await prisma.membershipPlan.upsert({
    where: { id: "demo_plan_pro" },
    update: {},
    create: {
      id: "demo_plan_pro",
      gymId: gym.id,
      name: "Pro Gym Plan",
      cadence: "monthly",
      priceInr: 2999,
      features: ["Unlimited members", "AI plans", "Trainer dashboard", "Payment reminders"]
    }
  });

  const subscription = await prisma.subscription.create({
    data: {
      memberId: member.id,
      planId: plan.id,
      startsAt: new Date(),
      endsAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
      autoRenew: true,
      provider: PaymentProvider.DEMO
    }
  });

  await prisma.payment.create({
    data: {
      gymId: gym.id,
      subscriptionId: subscription.id,
      provider: PaymentProvider.DEMO,
      status: PaymentStatus.PAID,
      amount: 2999,
      paidAt: new Date()
    }
  });

  await prisma.attendanceLog.createMany({
    data: Array.from({ length: 8 }, (_, index) => ({
      memberId: member.id,
      checkedInAt: new Date(Date.now() - index * 1000 * 60 * 60 * 24),
      source: index % 2 === 0 ? "QR" : "MANUAL",
      isLate: index === 2
    }))
  });

  await prisma.workoutPlan.create({
    data: {
      gymId: gym.id,
      trainerId: trainer.id,
      title: "AI Hypertrophy Builder",
      category: FitnessGoal.MUSCLE_GAIN,
      level: "Intermediate",
      durationMin: 55,
      exercises: {
        create: [
          { name: "Incline Dumbbell Press", category: "Chest", sets: 4, reps: "8-10", restSeconds: 90 },
          { name: "Lat Pulldown", category: "Back", sets: 4, reps: "10-12", restSeconds: 75 },
          { name: "Leg Press", category: "Legs", sets: 4, reps: "10", restSeconds: 120 }
        ]
      }
    }
  });

  await prisma.dietPlan.create({
    data: {
      gymId: gym.id,
      trainerId: trainer.id,
      title: "Lean Bulk Nutrition",
      preference: DietPreference.FLEXIBLE,
      calories: 2650,
      proteinG: 165,
      carbsG: 295,
      fatG: 78,
      meals: {
        create: [
          { name: "Protein oats", time: "07:30", calories: 520, macros: { protein: 38, carbs: 64, fat: 14 } },
          { name: "Chicken rice bowl", time: "13:00", calories: 740, macros: { protein: 52, carbs: 82, fat: 18 } },
          { name: "Paneer wrap", time: "20:00", calories: 680, macros: { protein: 42, carbs: 58, fat: 24 } }
        ]
      }
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });

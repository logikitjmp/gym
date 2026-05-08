import { attendanceData, members, planPopularity, revenueData, trainers } from "@/lib/fixtures/demo";

export function getAdminAnalytics() {
  const activeMembers = members.filter((member) => member.status === "Active").length;
  const attendanceRate = Math.round(
    members.reduce((total, member) => total + member.attendance, 0) / members.length
  );
  const revenue = revenueData.at(-1)?.revenue ?? 0;

  return {
    activeMembers,
    attendanceRate,
    revenue,
    revenueData,
    attendanceData,
    planPopularity,
    topTrainers: trainers.slice(0, 3)
  };
}

export function calculateRetentionScore(attendanceRate: number, renewalRisk: number, paymentRisk: number) {
  const score = Math.max(0, Math.min(100, attendanceRate * 0.55 + (100 - renewalRisk) * 0.3 + (100 - paymentRisk) * 0.15));
  return Math.round(score);
}

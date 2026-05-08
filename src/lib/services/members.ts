import { calculateBmi, bmiCategory, daysUntil } from "@/lib/utils";
import type { MemberRecord } from "@/lib/types";

export function enrichMember(member: MemberRecord) {
  const bmi = calculateBmi(member.weightKg, member.heightCm);
  const renewalWindow = daysUntil(member.renewalDate);

  return {
    ...member,
    bmi,
    bmiCategory: bmiCategory(bmi),
    renewalWindow,
    needsRenewalAttention: renewalWindow <= 14 || member.status !== "Active"
  };
}

export function filterMembers(members: MemberRecord[], query: string) {
  const normalized = query.toLowerCase();
  return members.filter((member) =>
    [member.id, member.name, member.email, member.plan, member.goal, member.trainer]
      .join(" ")
      .toLowerCase()
      .includes(normalized)
  );
}

import { z } from "zod";

export const attendanceCheckInSchema = z.object({
  memberCode: z.string().min(3),
  source: z.enum(["QR", "MANUAL", "APP"]).default("QR"),
  checkedInAt: z.string().datetime().optional()
});

export function isLateCheckIn(date = new Date()) {
  const hour = date.getHours();
  return hour >= 11 && hour < 16;
}

export function createCheckInReceipt(memberCode: string, checkedInAt = new Date()) {
  return {
    id: `att_${memberCode}_${checkedInAt.getTime()}`,
    memberCode,
    checkedInAt: checkedInAt.toISOString(),
    isLate: isLateCheckIn(checkedInAt),
    status: "CHECKED_IN" as const
  };
}

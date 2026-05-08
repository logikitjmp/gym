import { describe, expect, it } from "vitest";
import { createCheckInReceipt, isLateCheckIn } from "@/lib/services/attendance";

describe("attendance service", () => {
  it("marks late check-ins during the configured mid-day window", () => {
    expect(isLateCheckIn(new Date("2026-05-07T12:00:00+05:30"))).toBe(true);
    expect(isLateCheckIn(new Date("2026-05-07T07:00:00+05:30"))).toBe(false);
  });

  it("creates deterministic check-in receipt shape", () => {
    const receipt = createCheckInReceipt("GF-1001", new Date("2026-05-07T07:00:00+05:30"));
    expect(receipt.memberCode).toBe("GF-1001");
    expect(receipt.status).toBe("CHECKED_IN");
    expect(receipt.id).toContain("GF-1001");
  });
});

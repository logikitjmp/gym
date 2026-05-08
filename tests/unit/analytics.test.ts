import { describe, expect, it } from "vitest";
import { calculateRetentionScore, getAdminAnalytics } from "@/lib/services/analytics";

describe("analytics service", () => {
  it("returns dashboard analytics from fixtures", () => {
    const analytics = getAdminAnalytics();
    expect(analytics.activeMembers).toBeGreaterThan(0);
    expect(analytics.revenueData.length).toBeGreaterThan(0);
  });

  it("clamps retention score between 0 and 100", () => {
    expect(calculateRetentionScore(200, -100, -100)).toBe(100);
    expect(calculateRetentionScore(-50, 200, 200)).toBe(0);
  });
});

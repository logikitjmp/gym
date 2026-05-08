import { describe, expect, it } from "vitest";
import { calculateBmi, bmiCategory } from "@/lib/utils";
import { enrichMember, filterMembers } from "@/lib/services/members";
import { members } from "@/lib/fixtures/demo";

describe("member health helpers", () => {
  it("calculates BMI with a stable single decimal", () => {
    expect(calculateBmi(82, 178)).toBe(25.9);
    expect(bmiCategory(22.4)).toBe("Healthy");
  });

  it("enriches members with BMI and renewal flags", () => {
    const enriched = enrichMember(members[0]);
    expect(enriched.bmi).toBeGreaterThan(0);
    expect(enriched.renewalWindow).toEqual(expect.any(Number));
  });

  it("filters members by trainer, plan, goal, or identity", () => {
    expect(filterMembers(members, "riya").length).toBeGreaterThan(0);
    expect(filterMembers(members, "not-a-member")).toHaveLength(0);
  });
});

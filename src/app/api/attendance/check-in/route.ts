import { z } from "zod";
import { attendanceCheckInSchema, createCheckInReceipt } from "@/lib/services/attendance";
import { members } from "@/lib/fixtures/demo";
import { jsonResponse } from "@/lib/utils";

export async function POST(request: Request) {
  try {
    const input = attendanceCheckInSchema.parse(await request.json());
    const member = members.find((item) => item.id === input.memberCode);

    if (!member) {
      return jsonResponse({ error: "Member QR code was not found." }, { status: 404 });
    }

    const receipt = createCheckInReceipt(input.memberCode, input.checkedInAt ? new Date(input.checkedInAt) : new Date());

    return jsonResponse({
      ...receipt,
      member: {
        name: member.name,
        plan: member.plan,
        trainer: member.trainer
      }
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return jsonResponse({ error: "Invalid check-in payload.", issues: error.flatten() }, { status: 400 });
    }
    return jsonResponse({ error: "Unable to check member in." }, { status: 500 });
  }
}

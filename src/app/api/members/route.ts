import { z } from "zod";
import { members } from "@/lib/fixtures/demo";
import { filterMembers } from "@/lib/services/members";
import { jsonResponse } from "@/lib/utils";

const memberSchema = z.object({
  id: z.string().min(3).optional(),
  name: z.string().min(2),
  email: z.string().email(),
  plan: z.string().min(2),
  trainer: z.string().min(2),
  goal: z.string().min(2),
  heightCm: z.number().positive(),
  weightKg: z.number().positive(),
  age: z.number().int().positive(),
  phone: z.string().optional(),
  emergencyName: z.string().optional(),
  emergencyPhone: z.string().optional()
});

const mutationSchema = z.object({
  id: z.string().min(3),
  patch: memberSchema.partial().optional()
});

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "";
  return jsonResponse({
    members: query ? filterMembers(members, query) : members,
    total: query ? filterMembers(members, query).length : members.length,
    demo: true
  });
}

export async function POST(request: Request) {
  try {
    const input = memberSchema.parse(await request.json());
    return jsonResponse(
      {
        member: {
          ...input,
          id: input.id ?? `GF-${Math.floor(1000 + Math.random() * 9000)}`,
          avatar: input.name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)
            .toUpperCase(),
          status: "Active",
          attendance: 0,
          renewalDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString().slice(0, 10)
        },
        demo: true
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return jsonResponse({ error: "Invalid member payload.", issues: error.flatten() }, { status: 400 });
    }
    return jsonResponse({ error: "Unable to create member." }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const input = mutationSchema.parse(await request.json());
    const member = members.find((item) => item.id === input.id);

    if (!member) {
      return jsonResponse({ error: "Member not found." }, { status: 404 });
    }

    return jsonResponse({
      member: {
        ...member,
        ...input.patch
      },
      demo: true
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return jsonResponse({ error: "Invalid member update.", issues: error.flatten() }, { status: 400 });
    }
    return jsonResponse({ error: "Unable to update member." }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const input = mutationSchema.pick({ id: true }).parse(await request.json());
    return jsonResponse({
      id: input.id,
      deleted: members.some((member) => member.id === input.id),
      demo: true
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return jsonResponse({ error: "Invalid member deletion.", issues: error.flatten() }, { status: 400 });
    }
    return jsonResponse({ error: "Unable to delete member." }, { status: 500 });
  }
}

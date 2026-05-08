import { z } from "zod";
import { createUploadTarget } from "@/lib/integrations/storage";
import { jsonResponse } from "@/lib/utils";

const uploadSchema = z.object({
  fileName: z.string().min(2),
  contentType: z.string().min(3)
});

export async function POST(request: Request) {
  try {
    const input = uploadSchema.parse(await request.json());
    const target = await createUploadTarget(input.fileName, input.contentType);
    return jsonResponse(target);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return jsonResponse({ error: "Invalid upload request.", issues: error.flatten() }, { status: 400 });
    }
    return jsonResponse({ error: "Unable to create upload target." }, { status: 500 });
  }
}

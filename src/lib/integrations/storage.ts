import crypto from "node:crypto";
import { env } from "@/lib/env";

export async function createUploadTarget(fileName: string, contentType: string) {
  const safeName = fileName.replace(/[^a-z0-9._-]/gi, "-").toLowerCase();

  if (!env.cloudinaryCloudName || !env.cloudinaryApiKey || !env.cloudinaryApiSecret) {
    return {
      provider: "DEMO",
      uploadUrl: `/api/uploads?demo=1&file=${safeName}`,
      publicUrl: `/demo-uploads/${safeName}`,
      fields: { contentType }
    };
  }

  const timestamp = Math.round(Date.now() / 1000);
  const folder = "gymflow-ai";
  const signature = crypto
    .createHash("sha1")
    .update(`folder=${folder}&timestamp=${timestamp}${env.cloudinaryApiSecret}`)
    .digest("hex");

  return {
    provider: "CLOUDINARY",
    uploadUrl: `https://api.cloudinary.com/v1_1/${env.cloudinaryCloudName}/auto/upload`,
    publicUrl: "",
    fields: {
      api_key: env.cloudinaryApiKey,
      timestamp,
      folder,
      signature
    }
  };
}

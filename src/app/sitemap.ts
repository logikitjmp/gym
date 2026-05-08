import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  return [
    "",
    "/onboarding",
    "/pricing",
    "/dashboard/admin",
    "/dashboard/trainer",
    "/dashboard/member",
    "/platform",
    "/gym/volt-performance-club"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));
}

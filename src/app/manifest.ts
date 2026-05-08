import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GymFlow AI",
    short_name: "GymFlow",
    description: "AI-powered gym management and fitness SaaS platform.",
    start_url: "/dashboard/admin",
    display: "standalone",
    background_color: "#050507",
    theme_color: "#b7ff2a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}

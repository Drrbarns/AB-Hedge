import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL?.startsWith("http")
  ? process.env.NEXT_PUBLIC_SITE_URL
  : `https://${process.env.NEXT_PUBLIC_SITE_URL ?? "abhedge.vercel.app"}`;

const routes = [
  "/",
  "/about",
  "/projects",
  "/industries",
  "/insights",
  "/contact",
  "/careers",
  "/ab-hedge",
  "/sapalon",
  "/sapalon/services",
  "/country-wide",
  "/country-wide/solutions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }));
}

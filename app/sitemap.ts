import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://mhb.mohimaa.shop";
  const currentDate = new Date();

  const routes = [
    "",
    "/about",
    "/academics",
    "/admission",
    "/contact",
    "/events",
    "/gallery",
    "/notices",
    "/principal",
    "/teachers",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" || route === "/notices" ? "daily" : "weekly",
    priority:
      route === ""
        ? 1.0
        : route === "/admission" || route === "/notices"
          ? 0.9
          : 0.8,
  }));
}

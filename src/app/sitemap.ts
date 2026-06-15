import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blog-posts";

const BASE_URL = "https://www.fabtechqatar.com";
const LOCALES = ["en", "ar"] as const;
const NOW = new Date().toISOString();

function urls(paths: string[]): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: NOW,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1.0 : path.startsWith("/solutions") ? 0.9 : path.startsWith("/blog") ? 0.8 : 0.7,
    }))
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/solutions/villa",
    "/solutions/hospitality",
    "/solutions/restaurant",
    "/solutions/industrial",
    "/solutions/cool-coatings",
    "/solutions/shade-misting",
    "/solutions/personal-cooling",
    "/solutions/mosquito-control",
    "/products",
    "/products/aurora-misting-pole",
    "/products/rondo-ceiling-unit",
    "/products/panorama-led-fan",
    "/products/vento-kit-fans",
    "/products/linea-kit",
    "/products/fog-app-pump",
    "/products/fog-extra-pump",
    "/products/fog-70-var3",
    "/products/fog-adiabatico",
    "/blog",
    "/about",
    "/projects",
    "/contact",
  ];

  const blogPaths = BLOG_POSTS.map((post) => `/blog/${post.slug}`);

  return [...urls(staticPaths), ...urls(blogPaths)];
}

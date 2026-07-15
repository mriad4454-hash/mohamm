import { MetadataRoute } from "next";
import { projects } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  const staticPages = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/case-studies",
    "/blog",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const projectPages = projects.map((p) => ({
    url: `${base}/portfolio/${p.slug}`,
    lastModified: new Date(),
  }));

  const caseStudyPages = projects.map((p) => ({
    url: `${base}/case-studies/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...projectPages, ...caseStudyPages];
}

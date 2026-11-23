import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";

export const dynamic = "force-static";

// Fixed date: avoids reporting every static page as modified on each build.
const SITE_UPDATED = new Date("2026-11-23");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://voxwel.com";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: SITE_UPDATED,
      alternates: { languages: { en: baseUrl, fr: `${baseUrl}/fr/logiciel-lancement-alerte`, "x-default": baseUrl } },
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/demo`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: SITE_UPDATED,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/de/hinweisgebersoftware-preise`,
      lastModified: SITE_UPDATED,
      alternates: { languages: { de: `${baseUrl}/de/hinweisgebersoftware-preise`, en: `${baseUrl}/blogs/whistleblowing-software-pricing-comparison`, "x-default": `${baseUrl}/blogs/whistleblowing-software-pricing-comparison` } },
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fr/logiciel-lancement-alerte`,
      lastModified: SITE_UPDATED,
      alternates: { languages: { fr: `${baseUrl}/fr/logiciel-lancement-alerte`, en: baseUrl, "x-default": baseUrl } },
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lumora`,
      lastModified: SITE_UPDATED,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: SITE_UPDATED,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: SITE_UPDATED,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: SITE_UPDATED,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/gdpr`,
      lastModified: SITE_UPDATED,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
  ];

  // Blog posts
  const blogPages = blogPosts.map((post) => ({
    ...(post.slug === "whistleblowing-software-pricing-comparison" && {
      alternates: {
        languages: {
          en: `${baseUrl}/blogs/${post.slug}`,
          de: `${baseUrl}/de/hinweisgebersoftware-preise`,
          "x-default": `${baseUrl}/blogs/${post.slug}`,
        },
      },
    }),
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.lastUpdated || post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages];
}

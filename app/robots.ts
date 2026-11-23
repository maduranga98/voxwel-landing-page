import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/blogs/",
          "/about",
          "/lumora",
          "/privacy-policy",
          "/terms-of-service",
          "/cookie-policy",
          "/gdpr",
        ],
        disallow: [
          "/dashboard",
          "/admin",
          "/login",
          "/register",
          "/signup",
          "/app/",
          "/api/",
        ],
      },
      // AI Crawlers - Explicitly allow for maximum discoverability
      {
        userAgent: [
          "GPTBot", // OpenAI ChatGPT
          "ChatGPT-User", // ChatGPT user-initiated requests
          "OAI-SearchBot", // ChatGPT search results
          "Claude-SearchBot", // Claude search indexing
          "Claude-User", // Claude user-initiated fetches
          "Perplexity-User", // Perplexity user-initiated fetches
          "Google-Extended", // Google Bard/Gemini AI
          "CCBot", // Common Crawl (used by many AI systems)
          "anthropic-ai", // Claude AI
          "ClaudeBot", // Claude crawler
          "Claude-Web", // Claude web browser
          "Bytespider", // ByteDance/TikTok AI
          "Applebot-Extended", // Apple Intelligence
          "PerplexityBot", // Perplexity AI
          "YouBot", // You.com AI
          "Diffbot", // Diffbot AI
          "FacebookBot", // Meta AI
          "ImagesiftBot", // AI image understanding
        ],
        allow: "/",
        disallow: ["/dashboard", "/admin", "/login", "/app/"],
      },
    ],
    sitemap: "https://voxwel.com/sitemap.xml",
  };
}

import { blogPosts } from "@/data/blogPosts";

export const dynamic = "force-static";

export async function GET() {
  const siteData = {
    meta: {
      name: "VoxWel",
      tagline: "Where Every Voice Matters",
      description:
        "Anonymous employee reporting platform with military-grade encryption. Stop lawsuits, fraud, and workplace disasters before they happen.",
      url: "https://voxwel.com",
      company: "Lumora Ventures",
      version: "1.0.0",
      lastUpdated: new Date().toISOString(),
    },
    product: {
      name: "VoxWel",
      type: "SaaS - Workplace Safety & Compliance Platform",
      category: "Employee Reporting & Workplace Safety",
      pricing: {
        model: "Per Employee",
        amount: 1,
        currency: "USD",
        period: "month",
        trial: {
          duration: 14,
          unit: "days",
          creditCardRequired: false,
        },
      },
      features: [
        "Anonymous workplace reporting with military-grade encryption",
        "Real-time issue tracking and resolution",
        "Department-based content organization",
        "Compliance tracking and audit trails",
        "Advanced analytics and reporting dashboards",
        "File attachment and evidence sharing",
        "Three-strike moderation system",
        "GDPR compliant data handling",
        "24/7 secure access",
        "Mobile-friendly interface",
        "Role-based access control",
        "Customizable reporting workflows",
      ],
      benefits: [
        "Prevent lawsuits before they happen",
        "Detect fraud early",
        "Improve workplace culture",
        "Maintain compliance",
        "Protect whistleblowers",
        "Reduce legal risks",
        "Build employee trust",
        "Save money on incidents",
      ],
    },
    useCases: [
      {
        title: "Harassment Reporting",
        description:
          "Provide a safe channel for employees to report workplace harassment and discrimination",
      },
      {
        title: "Fraud Detection",
        description:
          "Enable early detection of financial misconduct and fraudulent activities",
      },
      {
        title: "Safety Violations",
        description:
          "Allow employees to report safety hazards and OSHA violations anonymously",
      },
      {
        title: "Compliance Issues",
        description:
          "Track and resolve regulatory compliance concerns before they escalate",
      },
      {
        title: "Whistleblower Protection",
        description:
          "Protect employees who report serious misconduct with guaranteed anonymity",
      },
      {
        title: "Culture Improvement",
        description:
          "Gather honest feedback to improve workplace culture and employee satisfaction",
      },
    ],
    targetAudience: [
      "HR Departments",
      "Compliance Officers",
      "Workplace Safety Managers",
      "Legal Departments",
      "Executive Leadership",
      "Employees seeking anonymous reporting",
      "Mid-sized to large enterprises",
      "Regulated industries (healthcare, finance, etc.)",
    ],
    technology: {
      stack: ["Next.js 15", "React 18", "TypeScript", "Tailwind CSS"],
      deployment: "Firebase Hosting",
      security: [
        "Military-grade encryption",
        "GDPR compliant",
        "SOC 2 Type II ready",
        "End-to-end encryption",
        "Zero-knowledge architecture",
      ],
    },
    contact: {
      general: "info@lumoraventures.com",
      support: "info@lumoraventures.com",
      security: "info@lumoraventures.com",
      privacy: "info@lumoraventures.com",
      dpo: "info@lumoraventures.com",
    },
    social: {
      linkedin: "https://www.linkedin.com/company/lumora-ventures-pvt-ltd/",
      facebook: "https://web.facebook.com/profile.php?id=61575034203203",
    },
    pages: {
      home: "https://voxwel.com/",
      about: "https://voxwel.com/about",
      blog: "https://voxwel.com/blogs",
      privacy: "https://voxwel.com/privacy-policy",
      terms: "https://voxwel.com/terms-of-service",
      cookies: "https://voxwel.com/cookie-policy",
      gdpr: "https://voxwel.com/gdpr",
      lumora: "https://voxwel.com/lumora",
    },
    resources: {
      sitemap: "https://voxwel.com/sitemap.xml",
      rss: "https://voxwel.com/rss.xml",
      robots: "https://voxwel.com/robots.txt",
      security: "https://voxwel.com/.well-known/security.txt",
      llms: "https://voxwel.com/llms.txt",
      humans: "https://voxwel.com/humans.txt",
    },
    blog: {
      total: blogPosts.length,
      latest: blogPosts.slice(0, 3).map((post) => ({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        date: post.date,
        author: post.author.name,
        category: post.category,
        tags: post.tags,
        url: `https://voxwel.com/blogs/${post.slug}`,
      })),
      allPosts: blogPosts.map((post) => ({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        date: post.date,
        author: post.author,
        category: post.category,
        tags: post.tags,
        readTime: post.readTime,
        url: `https://voxwel.com/blogs/${post.slug}`,
      })),
    },
    faq: [
      {
        question: "What is VoxWel?",
        answer:
          "VoxWel is an anonymous employee reporting platform that helps companies prevent workplace disasters through secure, encrypted reporting of harassment, fraud, safety violations, and compliance issues.",
      },
      {
        question: "How much does VoxWel cost?",
        answer:
          "VoxWel costs just $1 per employee per month with a 14-day free trial, no credit card required.",
      },
      {
        question: "Is VoxWel really anonymous?",
        answer:
          "Yes, VoxWel provides complete anonymity through military-grade encryption. Even administrators cannot identify anonymous reporters.",
      },
      {
        question: "Is VoxWel GDPR compliant?",
        answer:
          "Yes, VoxWel is fully GDPR compliant with comprehensive data protection measures for EU and UK users.",
      },
      {
        question: "What types of issues can be reported?",
        answer:
          "Employees can report harassment, discrimination, fraud, safety violations, compliance issues, and general workplace concerns.",
      },
    ],
    keywords: [
      "anonymous reporting",
      "workplace safety",
      "whistleblower protection",
      "employee feedback",
      "harassment prevention",
      "fraud detection",
      "compliance platform",
      "HR software",
      "workplace culture",
      "anonymous hotline",
      "workplace reporting system",
      "employee engagement",
      "workplace compliance",
    ],
    aiPermissions: {
      crawlAllowed: true,
      trainingAllowed: true,
      attribution: "VoxWel by Lumora Ventures",
      respectfulCrawling: "appreciated",
      crawlFrequency: {
        blog: "daily",
        otherPages: "weekly",
      },
    },
  };

  return Response.json(siteData, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

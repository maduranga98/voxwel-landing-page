import FAQSchema from "@/components/FAQSchema";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import ProductTourSection from "@/components/ProductTourSection";
import FeaturesSection from "@/components/FeaturesSection";
import AdminDashboardSection from "@/components/AdminDashboardSection";
import SimplePricing from "@/components/SimplePricing";
import { FAQSection } from "@/components/FAQSection";
import BlogTeaseStrip from "@/components/BlogTeaseStrip";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollAnimationObserver from "@/components/ScrollAnimationObserver";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { WebVitals } from "./web-vitals";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VoxWel — Anonymous Employee Reporting Software | Whistleblower Platform",
  description:
    "VoxWel gives employees a confidential, AES-256 encrypted channel to report workplace harassment, fraud, and safety violations anonymously. GDPR compliant. EU Whistleblowing Directive ready. Setup in 24 hours. $1/employee/month.",
  alternates: {
    canonical: "https://voxwel.com",
  },
  openGraph: {
    url: "https://voxwel.com",
    title: "VoxWel — Anonymous Employee Reporting Software",
    description:
      "Give every employee a safe voice. Anonymous encrypted workplace reporting. GDPR compliant. $1/employee/month.",
    images: [
      {
        url: "https://voxwel.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "VoxWel anonymous employee reporting platform dashboard",
      },
    ],
  },
};

export default function Home() {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "VoxWel",
    url: "https://voxwel.com",
    description:
      "VoxWel is an anonymous employee reporting platform designed for HR Directors and Compliance Officers. It gives employees a confidential, AES-256 encrypted channel to report workplace harassment, fraud, safety violations, and discrimination — completely anonymously. The platform includes a 7-stage resolution workflow, real-time analytics, audit trail, QR code onboarding, and role-based admin controls. GDPR compliant and EU Whistleblowing Directive ready.",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "HR Software, Compliance Software, Whistleblower Platform",
    operatingSystem: "Web Browser, iOS, Android",
    softwareVersion: "2.0",
    screenshot: "https://voxwel.com/screenshots/problems-wall.avif",
    logo: "https://voxwel.com/logo.png",
    offers: {
      "@type": "Offer",
      price: "1.00",
      priceCurrency: "USD",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://voxwel.com/#pricing",
      description: "$1 per employee per month. All features included. No hidden fees.",
      seller: {
        "@type": "Organization",
        name: "VoxWel by Lumora Ventures",
      },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1.00",
        priceCurrency: "USD",
        unitText: "per employee per month",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "12",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "100% anonymous employee reporting",
      "AES-256 military-grade encryption",
      "GDPR compliant reporting channel",
      "EU Whistleblowing Directive 2019/1937 compliance",
      "7-stage resolution workflow",
      "Real-time analytics and engagement dashboard",
      "Employee Happiness Indicator scoring",
      "QR code employee onboarding",
      "24-hour platform setup",
      "Role-based admin controls",
      "Automatic compliance audit trail",
      "Team discussion channels",
      "Recognition and appreciation feed",
      "File attachment support",
      "Priority escalation alerts",
      "Department-based assignment",
    ],
    provider: {
      "@type": "Organization",
      name: "Lumora Ventures",
      url: "https://voxwel.com",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "maduranga@voxwel.com",
      telephone: "+94766206555",
      availableLanguage: ["English"],
    },
  };

  return (
    <ErrorBoundary>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <FAQSchema
        faqs={[
          {
            question: "How can VoxWel guarantee 100% anonymity for employees?",
            answer:
              "VoxWel uses AES-256 end-to-end encryption and a zero-knowledge architecture. When an employee submits a report, no identifying metadata is stored — not their IP address, device fingerprint, or session data. Even VoxWel administrators cannot identify who submitted a report. Anonymity is architectural, not just a policy promise.",
          },
          {
            question:
              "Can our IT department track who submitted a report on VoxWel?",
            answer:
              "No. VoxWel is specifically designed to prevent this. Reports are encrypted before they leave the employee's device and stored in a way that makes source identification technically impossible, even with full database access. Your IT team cannot trace any report back to its source.",
          },
          {
            question:
              "Is VoxWel compliant with GDPR and the EU Whistleblowing Directive?",
            answer:
              "Yes. VoxWel is fully compliant with GDPR, the EU Whistleblowing Directive (2019/1937), and the UK Public Interest Disclosure Act. The platform includes built-in data retention policies, right-to-erasure workflows, and consent management. Compliance is maintained automatically as regulations evolve.",
          },
          {
            question: "How quickly can we deploy VoxWel across our organization?",
            answer:
              "24 hours or less. Once you sign up, you receive a company-specific QR code and reporting link that you can distribute to your team immediately. There is no IT project, no app installation, and no employee training required. Most organizations are fully live within the same business day.",
          },
          {
            question: "Why is VoxWel priced at only $1 per employee per month?",
            answer:
              "We designed VoxWel to be accessible to every company, not just enterprises with six-figure compliance budgets. A 100-person company pays $100/month — the cost of one business lunch. The alternative is a $75,000+ lawsuit that could have been prevented by an early anonymous report.",
          },
          {
            question:
              "What is the difference between the three reporting walls?",
            answer:
              "VoxWel has three distinct channels: Anonymous Reports (fully encrypted, completely anonymous reporting for sensitive issues), Team Pulse (open team discussion and feedback), and Recognition Feed (public celebration of achievements and milestones). All three are accessible from one dashboard with role-based access controls.",
          },
        ]}
      />
      <WebVitals />
      <ScrollAnimationObserver />
      <main className="min-h-screen w-full overflow-x-hidden pt-16">
        {/* Section 1 — Navbar */}
        <Navigation />
        {/* Section 2 — Hero */}
        <Hero />
        {/* Section 3 — Trust Bar */}
        <TrustBar />
        {/* Section 4 — Problem / Stats */}
        <ProblemSection />
        {/* Section 5 — How It Works */}
        <HowItWorks />
        {/* Section 6 — Product Tour */}
        <ProductTourSection />
        {/* Section 7 — Features (tab UI) */}
        <FeaturesSection />
        {/* Section 8 — Admin Dashboard */}
        <AdminDashboardSection />
        {/* Section 9 — Pricing (calculator logic preserved) */}
        <SimplePricing />
        {/* Section 10 — FAQ */}
        <FAQSection />
        {/* Blog strip — after FAQ, before Final CTA */}
        <BlogTeaseStrip />
        {/* Section 11 — Contact + Demo Booking */}
        <FinalCTA />
        {/* Section 13 — Footer */}
        <Footer />
      </main>
    </ErrorBoundary>
  );
}

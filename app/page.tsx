import FAQSchema from "@/components/FAQSchema";
import { homeFAQs } from "@/data/homeFAQs";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import ProductTourSection from "@/components/ProductTourSection";
import FeaturesSection from "@/components/FeaturesSection";
import AdminDashboardSection from "@/components/AdminDashboardSection";
import SecuritySection from "@/components/SecuritySection";
import SimplePricing from "@/components/SimplePricing";
import { FAQSection } from "@/components/FAQSection";
import BlogTeaseStrip from "@/components/BlogTeaseStrip";
import WhistleblowingSoftwareOverview from "@/components/WhistleblowingSoftwareOverview";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollAnimationObserver from "@/components/ScrollAnimationObserver";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { WebVitals } from "./web-vitals";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Whistleblowing Software for SMBs | Anonymous & EU-Ready | VoxWel" },
  description:
    "VoxWel is whistleblowing software for growing companies: encrypted anonymous reporting, case management and audit trail. EU Directive & GDPR ready. $1/employee/month.",
  alternates: {
    canonical: "https://voxwel.com",
    languages: {
      en: "https://voxwel.com",
      fr: "https://voxwel.com/fr/logiciel-lancement-alerte",
      "x-default": "https://voxwel.com",
    },
  },
  openGraph: {
    url: "https://voxwel.com",
    title: "VoxWel — Whistleblowing Software for Growing Companies",
    description:
      "Anonymous, encrypted whistleblowing software with case management. EU Directive & GDPR ready. Live in 24 hours, $1/employee/month.",
    images: [
      {
        url: "https://voxwel.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "VoxWel whistleblowing software dashboard",
      },
    ],
  },
};

export default function Home() {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://voxwel.com/#software",
    name: "VoxWel",
    alternateName: "VoxWel Whistleblowing Software",
    url: "https://voxwel.com",
    description:
      "VoxWel is whistleblowing software and an anonymous employee reporting platform designed for HR Directors and Compliance Officers. It gives employees a confidential, AES-256 encrypted channel to report workplace harassment, fraud, safety violations, and discrimination — completely anonymously. The platform includes a 7-stage resolution workflow, real-time analytics, audit trail, QR code onboarding, and role-based admin controls. GDPR compliant and EU Whistleblowing Directive ready.",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Whistleblowing Software, Compliance Software, HR Software",
    operatingSystem: "Web Browser, iOS, Android",
    softwareVersion: "2.0",
    screenshot: "https://voxwel.com/screenshots/problems-wall.avif",
    offers: {
      "@type": "Offer",
      price: "1.00",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
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
    publisher: { "@id": "https://voxwel.com/#organization" },
    provider: {
      "@type": "Organization",
      name: "Lumora Ventures",
      url: "https://voxwel.com",
      logo: "https://voxwel.com/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: "maduranga@voxwel.com",
        telephone: "+94766206555",
        availableLanguage: ["English"],
      },
    },
  };

  return (
    <ErrorBoundary>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <FAQSchema faqs={homeFAQs} />
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
        {/* Section 4b — "What is whistleblowing software" (head-term SEO content) */}
        <WhistleblowingSoftwareOverview />
        {/* Section 5 — How It Works */}
        <HowItWorks />
        {/* Section 6 — Product Tour */}
        <ProductTourSection />
        {/* Section 7 — Features (tab UI) */}
        <FeaturesSection />
        {/* Section 8 — Admin Dashboard */}
        <AdminDashboardSection />
        {/* Section 8b — Security & Compliance (also fixes Footer's /#security link,
            which pointed at a section that was never rendered on the page) */}
        <SecuritySection />
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

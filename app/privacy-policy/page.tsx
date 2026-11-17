import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "VoxWel's privacy policy. Learn how we protect employee anonymity, handle data, and comply with GDPR and EU Whistleblowing Directive requirements.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | VoxWel",
    description:
      "Learn how VoxWel protects employee anonymity, handles data, and complies with GDPR requirements.",
    url: "https://voxwel.com/privacy-policy",
    images: [{ url: "https://voxwel.com/og-image.png", width: 1200, height: 630, alt: "VoxWel anonymous employee reporting platform" }],
  },
  alternates: {
    canonical: "https://voxwel.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="section-container max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="text-primary-teal hover:underline text-sm mb-4 inline-block"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Privacy Policy
            </h1>
            <p className="text-text-secondary">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-text-tertiary text-sm mt-2">
              VoxWel is a product of Lumora Ventures
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                1. Introduction
              </h2>
              <p className="text-text-secondary mb-4">
                Welcome to VoxWel, a product developed and operated by Lumora
                Ventures ("we," "our," or "us"). We are committed to protecting
                your personal information and your right to privacy. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our employee feedback
                and engagement platform.
              </p>
              <p className="text-text-secondary">
                By using VoxWel, you agree to the collection and use of
                information in accordance with this policy. If you do not agree
                with our policies and practices, please do not use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                2.1 Information You Provide
              </h3>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                <li>
                  Account Information: Name, email address, company name, job
                  title
                </li>
                <li>
                  Profile Information: Optional profile details and preferences
                </li>
                <li>
                  Content: Posts, comments, feedback, and files you upload to
                  the platform
                </li>
                <li>
                  Communication: Messages you send through our support channels
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                2.2 Anonymous Information
              </h3>
              <p className="text-text-secondary mb-4">
                When you use our anonymous posting feature, we collect your
                content but implement technical measures to ensure we cannot
                identify you as the poster. This includes:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                <li>Anonymous post content and attachments</li>
                <li>
                  Metadata stripped of identifying information (IP addresses,
                  device IDs, etc.)
                </li>
                <li>
                  Aggregated usage statistics that cannot be traced to
                  individuals
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                2.3 Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>
                  Device Information: Browser type, operating system, device
                  type
                </li>
                <li>
                  Usage Data: Pages visited, features used, time spent on
                  platform
                </li>
                <li>Log Data: IP addresses, access times, error logs</li>
                <li>
                  Cookies and Similar Technologies: As described in our Cookie
                  Policy
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>
                  Provide, maintain, and improve our services and platform
                  functionality
                </li>
                <li>
                  Process and complete transactions and send related notices
                </li>
                <li>
                  Send administrative information, updates, and security alerts
                </li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>
                  Monitor and analyze usage trends to improve user experience
                </li>
                <li>
                  Detect, prevent, and address technical issues and security
                  threats
                </li>
                <li>Comply with legal obligations and enforce our policies</li>
                <li>
                  Generate anonymized analytics and insights for our clients
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                4. Anonymous Posting Protection
              </h2>
              <p className="text-text-secondary mb-4">
                We take anonymity seriously. For anonymous posts:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>
                  We use military-grade encryption to protect anonymous content
                </li>
                <li>No identifiable metadata is stored with anonymous posts</li>
                <li>
                  Even Lumora Ventures administrators cannot identify anonymous
                  posters
                </li>
                <li>
                  We maintain an immutable audit trail for compliance, but
                  without user identification
                </li>
                <li>
                  Anonymous posts are processed through separate systems to
                  prevent correlation
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                5. Information Sharing and Disclosure
              </h2>
              <p className="text-text-secondary mb-4">
                We do not sell your personal information. We may share your
                information only in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                5.1 With Your Organization
              </h3>
              <p className="text-text-secondary mb-4">
                Your employer (the organization that purchased VoxWel) will have
                access to:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                <li>Your non-anonymous posts and activity</li>
                <li>Aggregated analytics and trends</li>
                <li>
                  Reports and insights that do NOT reveal anonymous poster
                  identities
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                5.2 Service Providers
              </h3>
              <p className="text-text-secondary mb-4">
                We may share information with third-party service providers who
                perform services on our behalf, such as:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                <li>Cloud hosting providers (AWS, Google Cloud, etc.)</li>
                <li>Analytics services</li>
                <li>Customer support tools</li>
                <li>Payment processors</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                5.3 Legal Requirements
              </h3>
              <p className="text-text-secondary">
                We may disclose information if required by law or if we believe
                disclosure is necessary to:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Comply with legal obligations or government requests</li>
                <li>Protect our rights, property, or safety</li>
                <li>
                  Prevent fraud or security threats to our users or the public
                </li>
                <li>Enforce our Terms of Service or investigate violations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                6. Data Security
              </h2>
              <p className="text-text-secondary mb-4">
                Lumora Ventures implements appropriate technical and
                organizational measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>
                  End-to-end encryption for sensitive data and anonymous posts
                </li>
                <li>
                  Regular security audits and penetration testing by third-party
                  experts
                </li>
                <li>
                  Access controls limiting who can view personal information
                </li>
                <li>
                  Secure data centers with physical and network security
                  measures
                </li>
                <li>
                  Employee training on data protection and confidentiality
                </li>
                <li>Incident response procedures for security breaches</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                7. Your Privacy Rights
              </h2>
              <p className="text-text-secondary mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>
                  <strong>Access:</strong> Request a copy of the personal
                  information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information (subject to legal obligations)
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data to
                  another service
                </li>
                <li>
                  <strong>Objection:</strong> Object to processing of your
                  personal information
                </li>
                <li>
                  <strong>Restriction:</strong> Request restriction of
                  processing in certain circumstances
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> Withdraw consent where
                  processing is based on consent
                </li>
              </ul>
              <p className="text-text-secondary mt-4">
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:info@lumoraventures.com"
                  className="text-primary-teal hover:underline"
                >
                  info@lumoraventures.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                8. Data Retention
              </h2>
              <p className="text-text-secondary mb-4">
                We retain your information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Provide our services to you and your organization</li>
                <li>Comply with legal, tax, or regulatory requirements</li>
                <li>Resolve disputes and enforce our agreements</li>
                <li>Maintain security and prevent fraud</li>
              </ul>
              <p className="text-text-secondary mt-4">
                When your organization's subscription ends, we will delete or
                anonymize your data within 90 days, unless longer retention is
                required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                9. International Data Transfers
              </h2>
              <p className="text-text-secondary">
                Lumora Ventures operates globally. Your information may be
                transferred to and processed in countries other than your own,
                including countries that may not have the same data protection
                laws. We implement appropriate safeguards, such as Standard
                Contractual Clauses, to protect your information during
                international transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                10. Children's Privacy
              </h2>
              <p className="text-text-secondary">
                VoxWel is designed for workplace use and is not intended for
                individuals under 18 years of age. We do not knowingly collect
                personal information from children. If we become aware that we
                have collected information from a child, we will delete it
                immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-text-secondary">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new policy on
                this page and updating the "Last updated" date. Your continued
                use of VoxWel after changes become effective constitutes
                acceptance of the revised policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                12. Contact Us
              </h2>
              <p className="text-text-secondary mb-4">
                If you have questions or concerns about this Privacy Policy or
                our data practices, please contact:
              </p>
              <div className="bg-background-softGray p-6 rounded-lg">
                <p className="text-text-primary font-semibold mb-2">
                  Lumora Ventures - VoxWel Privacy Team
                </p>
                <p className="text-text-secondary">
                  Email:{" "}
                  <a
                    href="mailto:info@lumoraventures.com"
                    className="text-primary-teal hover:underline"
                  >
                    info@lumoraventures.com
                  </a>
                </p>
                <p className="text-text-secondary">
                  Address: 123 Innovation Street, San Francisco, CA 94102
                </p>
                <p className="text-text-secondary">Phone: +1 (234) 567-890</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                13. EU/UK Data Protection Officer
              </h2>
              <p className="text-text-secondary mb-4">
                For users in the European Union or United Kingdom, you may
                contact our Data Protection Officer at:
              </p>
              <div className="bg-background-softGray p-6 rounded-lg">
                <p className="text-text-secondary">
                  Email:{" "}
                  <a
                    href="mailto:info@lumoraventures.com"
                    className="text-primary-teal hover:underline"
                  >
                    info@lumoraventures.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

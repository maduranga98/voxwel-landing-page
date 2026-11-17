import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FiCheck,
  FiShield,
  FiLock,
  FiEye,
  FiFileText,
  FiMail,
} from "react-icons/fi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR Compliance for Anonymous Reporting",
  description:
    "How VoxWel meets GDPR and EU Whistleblowing Directive 2019/1937 requirements, and how we protect employee data.",
  alternates: {
    canonical: "https://voxwel.com/gdpr",
  },
  openGraph: {
    title: "GDPR Compliance | VoxWel",
    description:
      "VoxWel is fully GDPR compliant and meets EU Whistleblowing Directive 2019/1937 requirements. Learn how we protect employee data.",
    url: "https://voxwel.com/gdpr",
    images: [{ url: "https://voxwel.com/og-image.png", width: 1200, height: 630, alt: "VoxWel anonymous employee reporting platform" }],
  },
};

export default function GDPR() {
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
              GDPR Compliance
            </h1>
            <p className="text-text-secondary">
              General Data Protection Regulation Compliance Statement
            </p>
            <p className="text-text-tertiary text-sm mt-2">
              VoxWel is a product of Lumora Ventures
            </p>
          </div>

          {/* Compliance Badge */}
          <div className="bg-linear-to-br from-primary-navy to-primary-teal rounded-2xl p-8 text-white mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <FiShield className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">GDPR Compliant Platform</h2>
                <p className="text-white/80">
                  Lumora Ventures is committed to protecting your data rights
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                1. Our Commitment to GDPR Compliance
              </h2>
              <p className="text-text-secondary mb-4">
                Lumora Ventures and our product VoxWel are fully committed to
                compliance with the European Union's General Data Protection
                Regulation (GDPR). We respect your data privacy rights and have
                implemented comprehensive measures to ensure your personal data
                is processed lawfully, fairly, and transparently.
              </p>
              <p className="text-text-secondary">
                This page outlines how we comply with GDPR requirements and what
                rights you have regarding your personal data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                2. Legal Basis for Processing
              </h2>
              <p className="text-text-secondary mb-4">
                We process your personal data under the following legal bases:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-background-softGray p-4 rounded-lg border-l-4 border-primary-teal">
                  <h3 className="font-semibold text-text-primary mb-2">
                    Contract Performance
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Processing necessary to provide the VoxWel service to you
                    and your organization
                  </p>
                </div>

                <div className="bg-background-softGray p-4 rounded-lg border-l-4 border-primary-teal">
                  <h3 className="font-semibold text-text-primary mb-2">
                    Legitimate Interest
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Improving our services, security, fraud prevention, and
                    business operations
                  </p>
                </div>

                <div className="bg-background-softGray p-4 rounded-lg border-l-4 border-primary-teal">
                  <h3 className="font-semibold text-text-primary mb-2">
                    Legal Obligation
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Complying with legal requirements, court orders, and
                    regulatory obligations
                  </p>
                </div>

                <div className="bg-background-softGray p-4 rounded-lg border-l-4 border-primary-teal">
                  <h3 className="font-semibold text-text-primary mb-2">
                    Consent
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Where you have given explicit consent for specific
                    processing activities
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                3. Your GDPR Rights
              </h2>
              <p className="text-text-secondary mb-4">
                Under GDPR, you have the following rights regarding your
                personal data:
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 bg-status-success-light rounded-full flex items-center justify-center">
                      <FiCheck className="w-5 h-5 text-status-success" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Right to Access (Article 15)
                    </h3>
                    <p className="text-text-secondary">
                      You can request a copy of all personal data we hold about
                      you. We will provide this information in a structured,
                      commonly used, and machine-readable format within 30 days.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 bg-status-success-light rounded-full flex items-center justify-center">
                      <FiCheck className="w-5 h-5 text-status-success" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Right to Rectification (Article 16)
                    </h3>
                    <p className="text-text-secondary">
                      You can request correction of inaccurate or incomplete
                      personal data. We will update your information within 30
                      days and notify any third parties where appropriate.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-10 h-10 bg-status-success-light rounded-full flex items-center justify-center">
                      <FiCheck className="w-5 h-5 text-status-success" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Right to Erasure / "Right to be Forgotten" (Article 17)
                    </h3>
                    <p className="text-text-secondary">
                      You can request deletion of your personal data when:
                    </p>
                    <ul className="list-disc pl-6 text-text-secondary mt-2">
                      <li>The data is no longer necessary for its purpose</li>
                      <li>You withdraw consent (where applicable)</li>
                      <li>You object and there are no overriding grounds</li>
                      <li>The data was unlawfully processed</li>
                      <li>Legal obligations require deletion</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-status-success-light rounded-full flex items-center justify-center">
                      <FiCheck className="w-5 h-5 text-status-success" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Right to Restriction of Processing (Article 18)
                    </h3>
                    <p className="text-text-secondary">
                      You can request restriction of processing when you contest
                      accuracy, processing is unlawful, or you need the data for
                      legal claims.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-status-success-light rounded-full flex items-center justify-center">
                      <FiCheck className="w-5 h-5 text-status-success" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Right to Data Portability (Article 20)
                    </h3>
                    <p className="text-text-secondary">
                      You can receive your personal data in a structured,
                      commonly used format and transmit it to another
                      controller.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-status-success-light rounded-full flex items-center justify-center">
                      <FiCheck className="w-5 h-5 text-status-success" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Right to Object (Article 21)
                    </h3>
                    <p className="text-text-secondary">
                      You can object to processing based on legitimate interests
                      or for direct marketing purposes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-status-success-light rounded-full flex items-center justify-center">
                      <FiCheck className="w-5 h-5 text-status-success" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Right to Withdraw Consent (Article 7)
                    </h3>
                    <p className="text-text-secondary">
                      Where processing is based on consent, you can withdraw it
                      at any time without affecting prior processing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-status-success-light rounded-full flex items-center justify-center">
                      <FiCheck className="w-5 h-5 text-status-success" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Right to Lodge a Complaint (Article 77)
                    </h3>
                    <p className="text-text-secondary">
                      You have the right to lodge a complaint with your local
                      supervisory authority if you believe we have not complied
                      with GDPR.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                4. How to Exercise Your Rights
              </h2>
              <p className="text-text-secondary mb-4">
                To exercise any of your GDPR rights, please contact us:
              </p>

              <div className="bg-primary-teal/10 border-2 border-primary-teal rounded-xl p-6 mb-4">
                <div className="flex items-start gap-4">
                  <FiMail className="w-6 h-6 text-primary-teal flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-text-primary font-semibold mb-2">
                      Submit a GDPR Request
                    </p>
                    <p className="text-text-secondary mb-3">
                      Email our Data Protection Officer at:
                    </p>
                    <a
                      href="mailto:info@lumoraventures.com"
                      className="text-primary-teal font-semibold hover:underline text-lg"
                    >
                      info@lumoraventures.com
                    </a>
                    <p className="text-text-secondary mt-3 text-sm">
                      Include "GDPR Request" in the subject line and specify
                      which right you wish to exercise.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-text-secondary mb-2">
                <strong>Response Time:</strong> We will respond to your request
                within 30 days (extendable to 60 days for complex requests).
              </p>
              <p className="text-text-secondary mb-2">
                <strong>Verification:</strong> We may need to verify your
                identity before processing your request to protect your data.
              </p>
              <p className="text-text-secondary">
                <strong>Cost:</strong> Requests are generally free, unless they
                are manifestly unfounded or excessive.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                5. Data Protection Measures
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border-2 border-border-light rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary-teal/10 rounded-lg flex items-center justify-center">
                      <FiLock className="w-6 h-6 text-primary-teal" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      Encryption
                    </h3>
                  </div>
                  <p className="text-text-secondary text-sm">
                    All data is encrypted in transit (TLS 1.3) and at rest
                    (AES-256). Anonymous posts use additional encryption layers.
                  </p>
                </div>

                <div className="bg-white border-2 border-border-light rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary-teal/10 rounded-lg flex items-center justify-center">
                      <FiEye className="w-6 h-6 text-primary-teal" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      Access Controls
                    </h3>
                  </div>
                  <p className="text-text-secondary text-sm">
                    Role-based access controls limit who can view personal data.
                    Multi-factor authentication required for administrators.
                  </p>
                </div>

                <div className="bg-white border-2 border-border-light rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary-teal/10 rounded-lg flex items-center justify-center">
                      <FiFileText className="w-6 h-6 text-primary-teal" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      Audit Trails
                    </h3>
                  </div>
                  <p className="text-text-secondary text-sm">
                    Comprehensive logging of all data access and processing
                    activities for accountability and compliance.
                  </p>
                </div>

                <div className="bg-white border-2 border-border-light rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary-teal/10 rounded-lg flex items-center justify-center">
                      <FiShield className="w-6 h-6 text-primary-teal" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      Regular Audits
                    </h3>
                  </div>
                  <p className="text-text-secondary text-sm">
                    Annual third-party security audits and continuous internal
                    compliance reviews.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                6. Data Processing Agreements (DPA)
              </h2>
              <p className="text-text-secondary mb-4">
                For organizations using VoxWel:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>
                  We act as a data processor on behalf of your organization (the
                  data controller)
                </li>
                <li>
                  We provide a comprehensive Data Processing Agreement (DPA)
                  compliant with GDPR Article 28
                </li>
                <li>
                  Standard Contractual Clauses (SCCs) are included for
                  international data transfers
                </li>
                <li>
                  Your organization retains full control over employee data and
                  processing instructions
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                7. International Data Transfers
              </h2>
              <p className="text-text-secondary mb-4">
                When transferring data outside the EEA, we ensure adequate
                protection through:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>
                  Standard Contractual Clauses (SCCs) approved by the European
                  Commission
                </li>
                <li>
                  Transfer Impact Assessments (TIAs) to evaluate data protection
                  laws in recipient countries
                </li>
                <li>
                  Additional safeguards including encryption, access controls,
                  and data minimization
                </li>
                <li>
                  Preference for data storage within the EU/EEA where possible
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                8. Data Breach Notification
              </h2>
              <p className="text-text-secondary mb-4">
                In the event of a data breach that poses a risk to your rights
                and freedoms:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>
                  We will notify the relevant supervisory authority within 72
                  hours
                </li>
                <li>
                  We will notify affected individuals without undue delay if the
                  breach poses a high risk
                </li>
                <li>
                  We will document all breaches, including facts, effects, and
                  remedial actions
                </li>
                <li>We maintain an incident response plan tested annually</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                9. Data Protection Impact Assessments (DPIA)
              </h2>
              <p className="text-text-secondary">
                We conduct DPIAs for processing activities that pose high risks
                to data subjects, including our anonymous posting feature. These
                assessments help us identify and minimize privacy risks before
                implementing new features or processing activities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                10. Contact Our Data Protection Officer
              </h2>
              <p className="text-text-secondary mb-4">
                For any GDPR-related questions or concerns:
              </p>
              <div className="bg-background-softGray p-6 rounded-lg">
                <p className="text-text-primary font-semibold mb-2">
                  Lumora Ventures - Data Protection Officer
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
                <p className="text-text-secondary mt-4 text-sm">
                  You can also contact your local supervisory authority if you
                  have concerns about how we handle your data.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                11. Supervisory Authorities
              </h2>
              <p className="text-text-secondary mb-4">
                If you are located in the EU/EEA, you have the right to lodge a
                complaint with your local data protection authority. Find your
                supervisory authority at:{" "}
                <a
                  href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
                  className="text-primary-teal hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  European Data Protection Board
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

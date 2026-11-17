import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for VoxWel's anonymous employee reporting platform. Read our usage terms, data handling commitments, and service agreements.",
  openGraph: {
    title: "Terms of Service | VoxWel",
    description:
      "Terms of service for VoxWel's anonymous employee reporting platform. Read our usage terms and service agreements.",
    url: "https://voxwel.com/terms-of-service",
    images: [{ url: "https://voxwel.com/og-image.png", width: 1200, height: 630, alt: "VoxWel anonymous employee reporting platform" }],
  },
  alternates: {
    canonical: "https://voxwel.com/terms-of-service",
  },
};

export default function TermsOfService() {
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
              Terms of Service
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
                1. Agreement to Terms
              </h2>
              <p className="text-text-secondary mb-4">
                These Terms of Service ("Terms") constitute a legally binding
                agreement between you and Lumora Ventures ("Company," "we,"
                "us," or "our") concerning your access to and use of the VoxWel
                platform ("Service").
              </p>
              <p className="text-text-secondary">
                By accessing or using the Service, you agree to be bound by
                these Terms. If you do not agree to these Terms, you may not
                access or use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                2. Description of Service
              </h2>
              <p className="text-text-secondary mb-4">
                VoxWel is an employee feedback and engagement platform that
                provides:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Anonymous and named posting capabilities</li>
                <li>Issue reporting and tracking workflows</li>
                <li>Department-based content organization</li>
                <li>Analytics and reporting dashboards</li>
                <li>Compliance and audit trail features</li>
                <li>File attachment and sharing capabilities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                3. User Accounts and Eligibility
              </h2>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                3.1 Account Creation
              </h3>
              <p className="text-text-secondary mb-4">
                To access the Service, your organization must purchase a
                subscription, and you must be invited by your organization's
                administrator. You agree to:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>
                  Notify us immediately of any unauthorized access or security
                  breach
                </li>
                <li>Be responsible for all activities under your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                3.2 Eligibility
              </h3>
              <p className="text-text-secondary">
                You must be at least 18 years old and an employee or authorized
                representative of the subscribing organization to use the
                Service. By using the Service, you represent that you meet these
                requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                4. Acceptable Use Policy
              </h2>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                4.1 Permitted Use
              </h3>
              <p className="text-text-secondary mb-4">
                You may use the Service to:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                <li>Share workplace feedback and suggestions</li>
                <li>Report legitimate workplace concerns or violations</li>
                <li>Collaborate with colleagues on workplace improvements</li>
                <li>Access analytics and reports (if authorized)</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                4.2 Prohibited Activities
              </h3>
              <p className="text-text-secondary mb-4">You may NOT:</p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Post false, defamatory, or malicious content</li>
                <li>Harass, threaten, or abuse other users</li>
                <li>Violate any laws, regulations, or third-party rights</li>
                <li>Upload viruses, malware, or any harmful code</li>
                <li>
                  Attempt to gain unauthorized access to the Service or other
                  users' accounts
                </li>
                <li>Reverse engineer, decompile, or disassemble the Service</li>
                <li>
                  Use the Service for any commercial purpose without our written
                  permission
                </li>
                <li>
                  Abuse the anonymous posting feature for malicious purposes
                </li>
                <li>
                  Spam or flood the platform with repetitive or irrelevant
                  content
                </li>
                <li>
                  Impersonate another person or misrepresent your affiliation
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                5. Content and Intellectual Property
              </h2>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                5.1 Your Content
              </h3>
              <p className="text-text-secondary mb-4">
                You retain ownership of content you post to the Service ("Your
                Content"). By posting content, you grant Lumora Ventures and
                your organization a non-exclusive, worldwide, royalty-free
                license to use, store, display, and process Your Content solely
                to provide the Service.
              </p>
              <p className="text-text-secondary mb-4">
                You represent and warrant that:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                <li>You own or have the right to post Your Content</li>
                <li>
                  Your Content does not violate any laws or third-party rights
                </li>
                <li>Your Content does not contain malware or harmful code</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                5.2 Our Intellectual Property
              </h3>
              <p className="text-text-secondary">
                The Service, including its design, features, software, and
                branding, is owned by Lumora Ventures and protected by
                intellectual property laws. You may not copy, modify,
                distribute, or create derivative works based on the Service
                without our written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                6. Anonymous Posting and Moderation
              </h2>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                6.1 Anonymity Protection
              </h3>
              <p className="text-text-secondary mb-4">
                When you use anonymous posting features:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                <li>We cannot identify you as the author of anonymous posts</li>
                <li>Your organization administrators cannot identify you</li>
                <li>
                  We use technical measures to prevent correlation of anonymous
                  posts with your account
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                6.2 Moderation and Three-Strike Policy
              </h3>
              <p className="text-text-secondary mb-4">
                We implement a three-strike system for content violations:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                <li>
                  <strong>Strike 1:</strong> Warning and content removal
                </li>
                <li>
                  <strong>Strike 2:</strong> Temporary suspension of posting
                  privileges
                </li>
                <li>
                  <strong>Strike 3:</strong> Permanent account termination
                </li>
              </ul>
              <p className="text-text-secondary">
                Severe violations (threats, illegal content, etc.) may result in
                immediate account termination without warning.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                7. Payment and Subscription
              </h2>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                7.1 Pricing
              </h3>
              <p className="text-text-secondary mb-4">
                VoxWel is priced at $1 per employee per month, billed monthly to
                your organization. Pricing is subject to change with 30 days'
                notice.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                7.2 Billing
              </h3>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                <li>Subscriptions automatically renew unless canceled</li>
                <li>Payment is due at the beginning of each billing period</li>
                <li>Late payments may result in service suspension</li>
                <li>Refunds are not provided for partial months</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                7.3 Free Trial
              </h3>
              <p className="text-text-secondary">
                New organizations may receive a 14-day free trial. No credit
                card is required during the trial. The trial automatically ends
                after 14 days unless a subscription is purchased.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                8. Termination
              </h2>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                8.1 Termination by You
              </h3>
              <p className="text-text-secondary mb-4">
                Your organization may cancel its subscription at any time.
                Individual users may delete their accounts through the platform
                settings.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                8.2 Termination by Us
              </h3>
              <p className="text-text-secondary mb-4">
                We may suspend or terminate your access to the Service:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                <li>If you violate these Terms</li>
                <li>If your organization fails to pay subscription fees</li>
                <li>If we suspect fraudulent or illegal activity</li>
                <li>
                  If required by law or to protect our rights or other users
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                8.3 Effect of Termination
              </h3>
              <p className="text-text-secondary">
                Upon termination, your access to the Service will cease. We will
                delete or anonymize your data within 90 days, except as required
                by law or our legitimate business needs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                9. Disclaimers and Limitation of Liability
              </h2>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                9.1 Service Provided "As Is"
              </h3>
              <p className="text-text-secondary mb-4">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. LUMORA VENTURES
                DISCLAIMS ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR
                A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                9.2 Limitation of Liability
              </h3>
              <p className="text-text-secondary mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, LUMORA VENTURES SHALL
                NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                <li>
                  Indirect, incidental, special, consequential, or punitive
                  damages
                </li>
                <li>
                  Loss of profits, revenue, data, or business opportunities
                </li>
                <li>
                  Any damages arising from your use or inability to use the
                  Service
                </li>
              </ul>
              <p className="text-text-secondary">
                OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO US
                IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                10. Indemnification
              </h2>
              <p className="text-text-secondary">
                You agree to indemnify and hold harmless Lumora Ventures, its
                affiliates, and their respective officers, directors, employees,
                and agents from any claims, damages, losses, liabilities, and
                expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your Content</li>
                <li>Your violation of any third-party rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                11. Dispute Resolution
              </h2>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                11.1 Informal Resolution
              </h3>
              <p className="text-text-secondary mb-4">
                Before filing a formal dispute, you agree to contact us at
                info@lumoraventures.com to attempt to resolve the issue
                informally.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                11.2 Arbitration
              </h3>
              <p className="text-text-secondary mb-4">
                Any disputes that cannot be resolved informally shall be
                resolved through binding arbitration in accordance with the
                rules of the American Arbitration Association.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                11.3 Class Action Waiver
              </h3>
              <p className="text-text-secondary">
                You agree to bring claims only in your individual capacity and
                not as part of any class or representative action.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                12. Governing Law
              </h2>
              <p className="text-text-secondary">
                These Terms shall be governed by and construed in accordance
                with the laws of the State of California, United States, without
                regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                13. Changes to Terms
              </h2>
              <p className="text-text-secondary">
                We may update these Terms from time to time. We will notify you
                of material changes by email or through the Service. Your
                continued use of the Service after changes become effective
                constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                14. Miscellaneous
              </h2>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                14.1 Entire Agreement
              </h3>
              <p className="text-text-secondary mb-4">
                These Terms, together with our Privacy Policy and Cookie Policy,
                constitute the entire agreement between you and Lumora Ventures.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                14.2 Severability
              </h3>
              <p className="text-text-secondary mb-4">
                If any provision of these Terms is found to be unenforceable,
                the remaining provisions will remain in full effect.
              </p>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                14.3 No Waiver
              </h3>
              <p className="text-text-secondary">
                Our failure to enforce any right or provision of these Terms
                shall not constitute a waiver of such right or provision.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                15. Contact Information
              </h2>
              <p className="text-text-secondary mb-4">
                For questions about these Terms, please contact:
              </p>
              <div className="bg-background-softGray p-6 rounded-lg">
                <p className="text-text-primary font-semibold mb-2">
                  Lumora Ventures - VoxWel Legal Team
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
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

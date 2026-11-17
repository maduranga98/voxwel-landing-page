import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "VoxWel Cookie Policy - Learn about how we use cookies and similar technologies to enhance your experience, provide security, and analyze our service usage.",
  openGraph: {
    title: "Cookie Policy | VoxWel",
    description:
      "Understand how VoxWel uses cookies and similar technologies to improve your experience and protect your data.",
    url: "https://voxwel.com/cookie-policy",
    images: [{ url: "https://voxwel.com/og-image.png", width: 1200, height: 630, alt: "VoxWel anonymous employee reporting platform" }],
  },
  alternates: {
    canonical: "https://voxwel.com/cookie-policy",
  },
};

export default function CookiePolicy() {
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
              Cookie Policy
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
                1. What Are Cookies?
              </h2>
              <p className="text-text-secondary mb-4">
                Cookies are small text files that are placed on your device
                (computer, smartphone, or tablet) when you visit a website. They
                are widely used to make websites work more efficiently and
                provide information to website owners.
              </p>
              <p className="text-text-secondary">
                Lumora Ventures uses cookies and similar technologies on the
                VoxWel platform to enhance your experience, provide security,
                and analyze how our Service is used.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                2. Types of Cookies We Use
              </h2>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                2.1 Essential Cookies (Always Active)
              </h3>
              <p className="text-text-secondary mb-4">
                These cookies are necessary for the Service to function and
                cannot be disabled. They include:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mb-4">
                  <thead>
                    <tr className="bg-background-softGray">
                      <th className="border border-border-medium p-3 text-left">
                        Cookie Name
                      </th>
                      <th className="border border-border-medium p-3 text-left">
                        Purpose
                      </th>
                      <th className="border border-border-medium p-3 text-left">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border-light p-3 text-text-secondary">
                        voxwel_session
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        Maintains your login session
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        Session
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border-light p-3 text-text-secondary">
                        csrf_token
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        Security - prevents cross-site request forgery
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        Session
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border-light p-3 text-text-secondary">
                        auth_token
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        Authentication and authorization
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        30 days
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border-light p-3 text-text-secondary">
                        cookie_consent
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        Stores your cookie preferences
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        1 year
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                2.2 Functional Cookies
              </h3>
              <p className="text-text-secondary mb-4">
                These cookies enable enhanced functionality and personalization:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mb-4">
                  <thead>
                    <tr className="bg-background-softGray">
                      <th className="border border-border-medium p-3 text-left">
                        Cookie Name
                      </th>
                      <th className="border border-border-medium p-3 text-left">
                        Purpose
                      </th>
                      <th className="border border-border-medium p-3 text-left">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border-light p-3 text-text-secondary">
                        user_preferences
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        Remembers your settings and preferences
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        1 year
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border-light p-3 text-text-secondary">
                        language
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        Stores your language preference
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        1 year
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border-light p-3 text-text-secondary">
                        theme_mode
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        Dark/light mode preference
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        1 year
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                2.3 Analytics Cookies
              </h3>
              <p className="text-text-secondary mb-4">
                These cookies help us understand how visitors interact with our
                Service:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mb-4">
                  <thead>
                    <tr className="bg-background-softGray">
                      <th className="border border-border-medium p-3 text-left">
                        Cookie Name
                      </th>
                      <th className="border border-border-medium p-3 text-left">
                        Purpose
                      </th>
                      <th className="border border-border-medium p-3 text-left">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border-light p-3 text-text-secondary">
                        _ga
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        Google Analytics - distinguishes users
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        2 years
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border-light p-3 text-text-secondary">
                        _gid
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        Google Analytics - distinguishes users
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        24 hours
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border-light p-3 text-text-secondary">
                        voxwel_analytics
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        Internal analytics - tracks feature usage
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        90 days
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                2.4 Performance Cookies
              </h3>
              <p className="text-text-secondary mb-4">
                These cookies help us improve Service performance:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mb-4">
                  <thead>
                    <tr className="bg-background-softGray">
                      <th className="border border-border-medium p-3 text-left">
                        Cookie Name
                      </th>
                      <th className="border border-border-medium p-3 text-left">
                        Purpose
                      </th>
                      <th className="border border-border-medium p-3 text-left">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border-light p-3 text-text-secondary">
                        performance_metrics
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        Measures page load times and performance
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        30 days
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border-light p-3 text-text-secondary">
                        error_tracking
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        Identifies and logs errors
                      </td>
                      <td className="border border-border-light p-3 text-text-secondary">
                        7 days
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                3. Third-Party Cookies
              </h2>
              <p className="text-text-secondary mb-4">
                We use carefully selected third-party services that may place
                cookies on your device:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>
                  <strong>Google Analytics:</strong> To understand how users
                  interact with our Service
                </li>
                <li>
                  <strong>Cloud Hosting Providers:</strong> For service delivery
                  and security
                </li>
                <li>
                  <strong>Customer Support Tools:</strong> To provide help and
                  support
                </li>
              </ul>
              <p className="text-text-secondary mt-4">
                These third parties have their own privacy policies. We
                recommend reviewing them:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mt-2">
                <li>
                  <a
                    href="https://policies.google.com/privacy"
                    className="text-primary-teal hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Privacy Policy
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                4. Anonymous Posting and Cookies
              </h2>
              <p className="text-text-secondary mb-4">
                When you use VoxWel's anonymous posting feature:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>
                  We use special technical measures to prevent correlation
                  between your anonymous posts and your account
                </li>
                <li>
                  Session cookies used for anonymous posting are immediately
                  discarded after submission
                </li>
                <li>
                  We do not track or store identifiable information related to
                  anonymous posts
                </li>
                <li>
                  Analytics cookies are not used to track anonymous posting
                  behavior
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                5. Managing Your Cookie Preferences
              </h2>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                5.1 Cookie Settings in VoxWel
              </h3>
              <p className="text-text-secondary mb-4">
                You can manage your cookie preferences through our cookie
                consent banner or in your account settings. You can:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                <li>Accept all cookies</li>
                <li>Accept only essential cookies</li>
                <li>Customize which cookie categories you allow</li>
                <li>Withdraw your consent at any time</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-primary mb-3">
                5.2 Browser Settings
              </h3>
              <p className="text-text-secondary mb-4">
                You can also control cookies through your browser settings. Most
                browsers allow you to:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-4">
                <li>View and delete cookies</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Receive notifications when cookies are being set</li>
              </ul>
              <p className="text-text-secondary mb-4">
                Here are links to cookie management for popular browsers:
              </p>
              <ul className="list-disc pl-6 text-text-secondary space-y-2">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    className="text-primary-teal hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                    className="text-primary-teal hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                    className="text-primary-teal hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    className="text-primary-teal hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>

              <div className="bg-status-warning/10 border-l-4 border-status-warning p-4 rounded-r-lg mt-6">
                <p className="text-text-secondary text-sm">
                  <strong>Note:</strong> Blocking or deleting essential cookies
                  may prevent you from using certain features of VoxWel or cause
                  the Service to function improperly.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                6. Do Not Track Signals
              </h2>
              <p className="text-text-secondary">
                Some browsers have a "Do Not Track" feature that signals to
                websites that you do not want your online activities tracked.
                Currently, there is no industry standard for how to respond to
                Do Not Track signals. VoxWel does not currently respond to Do
                Not Track signals, but we are committed to providing you with
                meaningful choices about the information we collect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                7. Updates to This Cookie Policy
              </h2>
              <p className="text-text-secondary">
                We may update this Cookie Policy from time to time to reflect
                changes in technology, legislation, or our business practices.
                When we make changes, we will update the "Last updated" date at
                the top of this policy. We encourage you to review this policy
                periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                8. Contact Us
              </h2>
              <p className="text-text-secondary mb-4">
                If you have questions about our use of cookies, please contact:
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
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

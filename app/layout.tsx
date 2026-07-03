import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
import FloatingDemoCTA from "@/components/FloatingDemoCTA";

const siteUrl = "https://voxwel.com";

// Using system fonts for better performance and reliability
// This avoids external font fetching and provides instant loading

export const metadata: Metadata = {
  metadataBase: new URL("https://voxwel.com"),
  title: {
    default:
      "VoxWel — Anonymous Employee Reporting Software | Whistleblower Platform",
    template: "%s | VoxWel",
  },
  description:
    "VoxWel gives employees an encrypted, anonymous channel to report harassment, fraud, and safety violations. GDPR compliant. EU Whistleblowing Directive ready. Setup in 24 hours. $1/employee/month.",
  keywords: [
    "anonymous employee reporting software",
    "whistleblower platform",
    "anonymous reporting tool HR",
    "workplace incident reporting software",
    "GDPR whistleblowing software",
    "employee speak up platform",
    "whistleblower hotline alternative",
    "anonymous workplace complaint system",
    "EU whistleblowing directive compliance",
    "harassment reporting software",
    "workplace fraud reporting",
    "anonymous reporting policy",
    "whistleblowing software",
    "anonymous reporting",
    "workplace harassment reporting",
    "anonymous employee complaints",
    "ethics hotline",
    "employee reporting software",
  ],
  authors: [{ name: "VoxWel by Lumora Ventures", url: siteUrl }],
  creator: "VoxWel",
  publisher: "VoxWel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: { url: "/icon.png", sizes: "512x512" },
    shortcut: "/icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    title: "VoxWel — Anonymous Employee Reporting Software",
    description:
      "Give every employee a safe voice. Anonymous, encrypted workplace reporting. GDPR compliant. $1/employee/month.",
    siteName: "VoxWel",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "VoxWel anonymous employee reporting platform dashboard",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@voxwel",
    title: "VoxWel — Anonymous Employee Reporting Software",
    description:
      "Give every employee a safe voice. Anonymous encrypted workplace reporting. GDPR compliant. $1/employee/month.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://voxwel.com",
  },
  other: {
    "facebook-domain-verification": "5r911qyz5ps61d6ladab0z8jkjog9q",
    "google-site-verification": "7-SLD-v272DMYNgyeYxSPXMLcSjAI_7hSJvfHOtLbFQ",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1abc9c" },
    { media: "(prefers-color-scheme: dark)", color: "#2d3e50" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VoxWel",
    alternateName: "VoxWel by Lumora Ventures",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
      width: 862,
      height: 862,
    },
    description:
      "VoxWel is an anonymous employee reporting platform that gives employees a confidential, AES-256 encrypted channel to report workplace harassment, fraud, and safety violations. GDPR compliant, EU Whistleblowing Directive ready, live in 24 hours.",
    email: "maduranga@voxwel.com",
    telephone: "+94766206555",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office 4157, 58 Peregrine Road, Hainault",
      addressLocality: "Ilford",
      addressRegion: "Essex",
      postalCode: "IG6 3SZ",
      addressCountry: "GB",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+94766206555",
      contactType: "customer support",
      email: "maduranga@voxwel.com",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/voxwel",
      "https://www.instagram.com/vox.wel",
      "https://www.facebook.com/voxwel",
      "https://x.com/voxwel36916",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Lumora Ventures",
      url: `${siteUrl}/lumora`,
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "VoxWel",
    url: siteUrl,
    description:
      "Anonymous employee reporting platform with military-grade encryption. Stop lawsuits, fraud, and workplace disasters before they happen.",
    publisher: {
      "@type": "Organization",
      name: "VoxWel",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/blogs?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Consent Mode */}
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Default consent mode - deny until user consents
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L4G3KLH5QV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Enhanced GA4 configuration
            gtag('config', 'G-L4G3KLH5QV', {
              'page_title': document.title,
              'page_location': window.location.href,
              'send_page_view': true,
              'anonymize_ip': true,
              'cookie_flags': 'SameSite=None;Secure'
            });

            // Track outbound links
            document.addEventListener('click', function(e) {
              const target = e.target.closest('a');
              if (target && target.hostname !== window.location.hostname) {
                gtag('event', 'click', {
                  'event_category': 'outbound',
                  'event_label': target.href,
                  'transport_type': 'beacon'
                });
              }
            });

            // Track file downloads
            document.addEventListener('click', function(e) {
              const target = e.target.closest('a');
              if (target && target.href.match(/\.(pdf|zip|doc|docx|xls|xlsx|ppt|pptx)$/i)) {
                gtag('event', 'file_download', {
                  'event_category': 'downloads',
                  'event_label': target.href,
                  'file_extension': target.href.split('.').pop()
                });
              }
            });

            // Track scroll depth
            let scrollDepth = 0;
            window.addEventListener('scroll', function() {
              const currentScroll = Math.round((window.scrollY + window.innerHeight) / document.body.scrollHeight * 100);
              if (currentScroll > scrollDepth && currentScroll % 25 === 0) {
                scrollDepth = currentScroll;
                gtag('event', 'scroll', {
                  'event_category': 'engagement',
                  'event_label': scrollDepth + '%',
                  'value': scrollDepth
                });
              }
            });
          `}
        </Script>

        {/* Preconnect to important third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* DM Sans font */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* RSS Feed for AI and RSS readers */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="VoxWel Blog RSS Feed"
          href={`${siteUrl}/rss.xml`}
        />

        {/* AI Discoverability */}
        <link
          rel="alternate"
          type="application/json"
          href={`${siteUrl}/api/data.json`}
          title="VoxWel Data API"
        />
        <meta name="ai-content-declaration" content="partially-ai-assisted" />
        <meta
          name="robots"
          content="max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        {/* Preload hero image for LCP improvement */}
        <link
          rel="preload"
          as="image"
          href="/screenshots/problems-wall.avif"
          type="image/avif"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <CookieConsent />
        <FloatingDemoCTA />
      </body>
    </html>
  );
}

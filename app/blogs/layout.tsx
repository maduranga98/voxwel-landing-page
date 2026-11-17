import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whistleblower & Workplace Compliance Blog",
  description:
    "Expert guides on anonymous employee reporting, workplace harassment prevention, GDPR compliance, and whistleblower platform best practices for HR teams.",
  keywords: [
    "workplace compliance blog",
    "anonymous employee reporting guide",
    "whistleblower platform resources",
    "HR compliance resources",
    "workplace harassment prevention",
    "GDPR compliance guide",
    "employee reporting best practices",
  ],
  alternates: {
    canonical: "https://voxwel.com/blogs",
  },
  openGraph: {
    type: "website",
    url: "https://voxwel.com/blogs",
    title: "Workplace Compliance Blog | VoxWel",
    description:
      "Expert guides on anonymous employee reporting, workplace harassment prevention, GDPR compliance, and whistleblower platform best practices.",
    images: [
      {
        url: "https://voxwel.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "VoxWel Workplace Compliance Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workplace Compliance Blog | VoxWel",
    description:
      "Expert guides on anonymous employee reporting, workplace harassment prevention, GDPR compliance, and whistleblower platform best practices.",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

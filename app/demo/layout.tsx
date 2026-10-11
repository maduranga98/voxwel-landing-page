import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free VoxWel Demo | 15 Minutes",
  description:
    "Book your free 15-minute VoxWel demo. See our anonymous workplace reporting platform in action. No credit card required. Live dashboard walkthrough included.",
  keywords: [
    "VoxWel demo",
    "workplace reporting demo",
    "anonymous reporting demo",
    "free demo",
    "workplace safety demo",
    "harassment reporting software demo",
  ],
  alternates: {
    canonical: "https://voxwel.com/demo",
  },
  openGraph: {
    title: "Book a Free Demo - See VoxWel in Action",
    description:
      "Book your free 15-minute VoxWel demo. No credit card required. See live dashboard and anonymous reporting in action.",
    url: "https://voxwel.com/demo",
    type: "website",
    images: [
      {
        url: "https://voxwel.com/og-demo.jpg",
        width: 1200,
        height: 630,
        alt: "VoxWel Demo Booking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Demo - See VoxWel in Action",
    description:
      "Book your free 15-minute VoxWel demo. No credit card required.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

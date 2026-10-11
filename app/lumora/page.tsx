import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Lumora Ventures",
  description:
    "Lumora Ventures - Building innovative workplace solutions that empower employees and protect organizations. Learn about the company behind VoxWel and our mission for workplace transparency.",
  openGraph: {
    title: "About Lumora Ventures | VoxWel",
    description:
      "Discover Lumora Ventures, the innovative startup behind VoxWel workplace reporting platform.",
    url: "https://voxwel.com/lumora",
  },
  alternates: {
    canonical: "https://voxwel.com/lumora",
  },
};

export default function LumoraVentures() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background-white">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="section-container max-w-4xl mx-auto">
          <Link
            href="/"
            className="text-primary-teal hover:underline text-sm mb-4 inline-block"
          >
            ← Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            About Lumora Ventures
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Our Mission
              </h2>
              <p className="text-text-secondary">
                Lumora Ventures is a startup company dedicated to building
                innovative workplace solutions that empower employees and
                protect organizations. We believe in creating tools that foster
                transparency, trust, and meaningful communication in the
                workplace.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Our Products
              </h2>
              <div className="bg-background-softGray p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  VoxWel - Your Anchor in Every Storm
                </h3>
                <p className="text-text-secondary mb-4">
                  VoxWel is our flagship employee feedback and engagement
                  platform designed to help companies prevent workplace crises
                  before they happen. With features like anonymous reporting,
                  comprehensive analytics, and compliance tracking, VoxWel gives
                  organizations the tools they need to create safer, more
                  transparent workplaces.
                </p>
                <Link
                  href="/"
                  className="text-primary-teal font-semibold hover:underline"
                >
                  Learn more about VoxWel →
                </Link>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Contact Us
              </h2>
              <div className="bg-background-softGray p-6 rounded-lg">
                <p className="text-text-primary font-semibold mb-2">
                  Lumora Ventures
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
                  Phone:{" "}
                  <a
                    href="tel:+9476620655"
                    className="text-primary-teal hover:underline"
                  >
                    +94 (76) 620-6555
                  </a>
                </p>
                <p className="text-text-secondary mt-2">
                  <strong>UK Office:</strong> Office 4157, 58 Peregrine Road,
                  Hainault, Ilford, Essex, United Kingdom, IG6 3SZ
                </p>
                <p className="text-text-secondary mt-1">
                  <strong>Sri Lanka Office:</strong> Kurunegala Road,
                  Kuliyapitiya, Kurunegala, Sri Lanka
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

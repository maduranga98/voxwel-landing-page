import Link from "next/link";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FiHome, FiSearch } from "react-icons/fi";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for could not be found.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background-white">
      <Navigation />

      <div className="pt-32 pb-16 min-h-[70vh] flex items-center justify-center">
        <div className="section-container max-w-2xl text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary-teal mb-4">404</h1>
            <div className="w-32 h-1 bg-linear-to-r from-primary-teal to-primary-navy mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved, deleted, or never existed in the first place.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-teal text-white font-semibold rounded-lg hover:bg-primary-teal/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <FiHome className="w-5 h-5" />
              Back to Home
            </Link>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-background-softGray text-text-primary font-semibold rounded-lg hover:bg-background-softGray/80 transition-all duration-200"
            >
              <FiSearch className="w-5 h-5" />
              Browse Blog
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-background-softGray">
            <p className="text-text-tertiary mb-4">You might be looking for:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/about"
                className="text-primary-teal hover:underline text-sm"
              >
                About VoxWel
              </Link>
              <span className="text-text-tertiary">•</span>
              <Link
                href="/blogs"
                className="text-primary-teal hover:underline text-sm"
              >
                Blog
              </Link>
              <span className="text-text-tertiary">•</span>
              <Link
                href="/privacy-policy"
                className="text-primary-teal hover:underline text-sm"
              >
                Privacy Policy
              </Link>
              <span className="text-text-tertiary">•</span>
              <Link
                href="/terms-of-service"
                className="text-primary-teal hover:underline text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

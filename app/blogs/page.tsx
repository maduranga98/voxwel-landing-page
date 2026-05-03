"use client";

import { useState, useEffect, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FiCalendar,
  FiClock,
  FiArrowRight,
  FiBookOpen,
  FiAlertTriangle,
  FiShield,
  FiTrendingUp,
  FiFileText,
  FiSearch,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { blogPosts } from "@/data/blogPosts";

const POSTS_PER_PAGE = 9;

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } =
  {
    FiAlertTriangle: FiAlertTriangle,
    FiShield: FiShield,
    FiTrendingUp: FiTrendingUp,
    FiFileText: FiFileText,
  };

function getPaginationRange(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, "…", total];
  if (current >= total - 3) return [1, "…", total - 4, total - 3, total - 2, total - 1, total];
  return [1, "…", current - 1, current, current + 1, "…", total];
}

export default function BlogsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];
  }, []);

  const filteredPosts = useMemo(() => {
    let posts = blogPosts;
    if (selectedCategory !== "All") {
      posts = posts.filter((p) => p.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return posts;
  }, [searchQuery, selectedCategory]);

  // Reset to first page whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "VoxWel Blog",
    description:
      "Expert insights on workplace safety, harassment prevention, fraud detection, and compliance.",
    url: "https://voxwel.com/blogs",
    publisher: {
      "@type": "Organization",
      name: "VoxWel",
      logo: {
        "@type": "ImageObject",
        url: "https://voxwel.com/icon.png",
      },
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: new Date(post.date).toISOString(),
      author: {
        "@type": "Person",
        name: post.author.name,
        jobTitle: post.author.role,
      },
      url: `https://voxwel.com/blogs/${post.slug}`,
      keywords: post.tags.join(", "),
      articleSection: post.category,
      image: `https://voxwel.com/blogs_images/${post.slug}.png`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div
            className="absolute w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl -top-40 -left-40 animate-pulse"
            style={{ animationDuration: "8s" }}
          />
          <div
            className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -bottom-40 -right-40 animate-pulse"
            style={{ animationDelay: "4s", animationDuration: "10s" }}
          />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #1abc9c 1px, transparent 1px),
                linear-gradient(to bottom, #1abc9c 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <Navigation />

        <div className="relative z-10 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20">
          <div className="section-container">
            {/* Back link */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <Link
                href="/"
                className="text-teal-400 hover:text-teal-300 hover:underline text-sm sm:text-base inline-flex items-center gap-2 transition-colors"
              >
                ← Back to Home
              </Link>
            </div>

            {/* Section Header */}
            <div
              className={`text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-teal-500/20 border border-teal-500/50 rounded-full text-teal-400 text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-4 sm:mb-5 md:mb-6 backdrop-blur-sm">
                📚 Insights & Resources
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
                Learn How to{" "}
                <span className="text-teal-400">Protect</span> Your Company
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto px-4">
                Expert insights, case studies, and best practices for creating
                safer, more transparent workplaces.
              </p>
            </div>

            {/* Search + Category Filters */}
            <div
              className={`mb-8 space-y-4 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Search bar */}
              <div className="relative max-w-xl mx-auto">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles by title, topic, or keyword…"
                  className="w-full pl-12 pr-10 py-3 rounded-xl bg-slate-800 border-2 border-slate-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all text-sm sm:text-base"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    aria-label="Clear search"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Category pills */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                      selectedCategory === cat
                        ? "bg-teal-500 border-teal-500 text-white shadow-lg shadow-teal-500/30"
                        : "bg-slate-800 border-slate-700 text-gray-400 hover:border-teal-500/60 hover:text-teal-400"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <p
              className={`text-sm text-gray-500 mb-6 text-center transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {filteredPosts.length === 0
                ? "No articles found"
                : `Showing ${(currentPage - 1) * POSTS_PER_PAGE + 1}–${Math.min(
                    currentPage * POSTS_PER_PAGE,
                    filteredPosts.length
                  )} of ${filteredPosts.length} article${filteredPosts.length !== 1 ? "s" : ""}`}
            </p>

            {/* Blog Grid */}
            {paginatedPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-10 sm:mb-12 md:mb-14">
                {paginatedPosts.map((post, index) => {
                  const IconComponent = iconMap[post.icon] || FiFileText;
                  return (
                    <Link key={post.slug} href={`/blogs/${post.slug}`}>
                      <article
                        className={`h-full bg-slate-800 rounded-xl md:rounded-2xl shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 overflow-hidden border-2 border-slate-700 hover:border-teal-500 group cursor-pointer hover:-translate-y-1 ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-12"
                        }`}
                        style={{
                          transitionDelay: `${Math.min(index * 60, 480)}ms`,
                        }}
                      >
                        {/* Thumbnail */}
                        <div className="relative h-36 sm:h-40 overflow-hidden bg-slate-700">
                          <img
                            src={`/blogs_images/${post.slug}.png`}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                "/og-image.png";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                          <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                            <span
                              className={`px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-sm ${
                                post.category === "Compliance"
                                  ? "bg-blue-500/30 text-blue-300 border border-blue-400/40"
                                  : post.category === "Best Practices"
                                  ? "bg-purple-500/30 text-purple-300 border border-purple-400/40"
                                  : post.category === "Case Study" ||
                                    post.category === "Case Studies"
                                  ? "bg-emerald-500/30 text-emerald-300 border border-emerald-400/40"
                                  : post.category === "Industry Insights"
                                  ? "bg-orange-500/30 text-orange-300 border border-orange-400/40"
                                  : "bg-teal-500/30 text-teal-300 border border-teal-400/40"
                              }`}
                            >
                              {post.category}
                            </span>
                          </div>
                          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white">
                              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 sm:p-6">
                          <h4 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors leading-tight line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-sm sm:text-base text-gray-400 mb-5 leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>

                          {/* Meta */}
                          <div className="flex items-center gap-4 text-xs text-gray-500 mb-5 pb-5 border-b border-slate-700/50">
                            <div className="flex items-center gap-1.5">
                              <FiCalendar className="w-3.5 h-3.5" />
                              <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  }
                                )}
                              </time>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <FiClock className="w-3.5 h-3.5" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>

                          {/* Author & Read More */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                {post.author.name.charAt(0)}
                              </div>
                              <span className="text-xs sm:text-sm text-gray-400">
                                {post.author.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-teal-400 font-semibold text-sm group-hover:gap-2.5 transition-all">
                              <span>Read Article</span>
                              <FiArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-20 mb-14">
                <p className="text-gray-400 text-lg mb-2">No articles found.</p>
                <p className="text-gray-600 text-sm">
                  Try a different search term or category.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-5 px-5 py-2.5 rounded-lg bg-slate-700 text-teal-400 text-sm font-semibold hover:bg-slate-600 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-1 sm:gap-2 mb-12 sm:mb-14">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-gray-400 hover:border-teal-500 hover:text-teal-400 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-slate-700 disabled:hover:text-gray-400 transition-all text-sm font-medium"
                  aria-label="Previous page"
                >
                  <FiChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Prev</span>
                </button>

                {getPaginationRange(currentPage, totalPages).map((page, i) =>
                  page === "…" ? (
                    <span key={`ellipsis-${i}`} className="px-1 text-gray-600 select-none">
                      …
                    </span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page as number)}
                      className={`w-9 h-9 rounded-lg text-sm font-semibold transition-all ${
                        currentPage === page
                          ? "bg-teal-500 text-white shadow-lg shadow-teal-500/30 border border-teal-500"
                          : "bg-slate-800 border border-slate-700 text-gray-400 hover:border-teal-500 hover:text-teal-400"
                      }`}
                      aria-label={`Page ${page}`}
                      aria-current={currentPage === page ? "page" : undefined}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-gray-400 hover:border-teal-500 hover:text-teal-400 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-slate-700 disabled:hover:text-gray-400 transition-all text-sm font-medium"
                  aria-label="Next page"
                >
                  <span className="hidden sm:inline">Next</span>
                  <FiChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Newsletter Signup */}
            <div
              className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-slate-700/50 shadow-2xl mb-10 sm:mb-12 md:mb-14 transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-teal-500/10 border-2 border-teal-500/30 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6">
                  <FiBookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-teal-400" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white">
                  Stay Informed About Workplace Safety
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8">
                  Get the latest insights, case studies, and best practices
                  delivered to your inbox. No spam, just valuable content.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-5 sm:px-6 py-3 sm:py-4 rounded-lg bg-slate-700/50 border-2 border-slate-600 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base"
                  >
                    Subscribe Now
                  </button>
                </form>
                <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                  Join 5,000+ HR professionals and business leaders
                </p>
              </div>
            </div>

            {/* CTA */}
            <div
              className={`text-center transition-all duration-1000 delay-900 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-5 sm:mb-6">
                Ready to protect your company from hidden workplace issues?
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white rounded-lg md:rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:scale-105 group"
              >
                <FiShield className="w-4 h-4 sm:w-5 sm:h-5" />
                Get Started with VoxWel
                <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}

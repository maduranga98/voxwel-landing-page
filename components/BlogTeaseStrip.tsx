"use client";

import Link from "next/link";
import { FiArrowRight, FiClock, FiCalendar } from "react-icons/fi";
import { blogPosts, type BlogPost } from "@/data/blogPosts";

/** Map blog categories to light-mode colored pills */
function categoryPill(category: string) {
  switch (category) {
    case "Best Practices":
      return "bg-blue-50 text-blue-700 border border-blue-200";
    case "Case Study":
      return "bg-emerald-50 text-emerald-700 border border-emerald-200";
    case "Compliance":
      return "bg-indigo-50 text-indigo-700 border border-indigo-200";
    default:
      // Crisis Prevention and anything else → red
      return "bg-red-50 text-red-700 border border-red-200";
  }
}

// Posts to feature on the homepage. Picked for real buyer intent and real
// search clicks (GSC, Oct 2026) rather than raw impression volume — the old
// list surfaced exactly the three pages that get cited by AI answer engines
// but have never produced a click, while these three already convert.
const FEATURED_SLUGS = [
  "best-navex-alternative",
  "what-is-compliance-hotline",
  "anonymous-employee-reporting-software-guide",
];

export default function BlogTeaseStrip() {
  const featuredBlogs = FEATURED_SLUGS.map((slug) =>
    blogPosts.find((p) => p.slug === slug)
  ).filter((post): post is BlogPost => post !== undefined);

  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
            RESOURCES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Want to dig deeper?
          </h2>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Learn more about the hidden costs of workplace problems
          </p>
        </div>

        {/* Blog Cards Grid — 1 col mobile → 3 col lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group flex flex-col bg-white rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Thumbnail Image */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                <img
                  src={`/blogs_images/${blog.slug}.png`}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/og-image.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span
                    className={`px-2.5 py-1 text-xs font-semibold rounded-full backdrop-blur-sm bg-white/80 border border-white/50 text-slate-800`}
                  >
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-5 md:p-6">
                {/* Title */}
                <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-2 mb-2 flex-1">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
                  {blog.excerpt}
                </p>

                {/* Footer row */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-xs font-bold">
                      {blog.author.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-slate-700 text-xs font-medium">
                        {blog.author.name}
                      </p>
                      <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <FiCalendar className="w-3 h-3" />
                        <span>
                          {new Date(blog.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="text-indigo-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read
                    <FiArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* See all */}
        <div className="text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-indigo-200 text-indigo-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 rounded-xl font-semibold text-sm transition-all group"
          >
            See All Articles
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

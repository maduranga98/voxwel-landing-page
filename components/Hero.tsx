"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const trustItems = [
    "No credit card required",
    "GDPR compliant",
    "Live in 24 hours",
    "100% anonymous",
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* LEFT — Text (3 cols) */}
          <motion.div
            className="lg:col-span-3"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Eyebrow badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-indigo-100"
            >
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full pulse-ring"></span>
              Anonymous Reporting &amp; Case Management
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6"
            >
              Whistleblowing software that gives every employee a{" "}
              <span className="text-indigo-600">safe voice</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl"
            >
              VoxWel gives employees a confidential, encrypted channel to report
              harassment, fraud, and safety violations, and gives HR the case
              management to act before it becomes a lawsuit or a headline. EU
              Whistleblowing Directive and GDPR ready.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/demo"
                className="bg-indigo-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 text-base"
              >
                Book a Free Demo →
              </Link>
              <Link
                href="/demo"
                className="border-2 border-slate-200 text-slate-700 font-semibold px-8 py-4 rounded-xl hover:border-slate-300 transition-all text-base"
              >
                Start 14-Day Free Trial
              </Link>
            </motion.div>

            {/* Trust micro-copy */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-x-6 gap-y-2"
            >
              {trustItems.map((trustItem) => (
                <span
                  key={trustItem}
                  className="text-sm text-slate-500 flex items-center gap-1.5"
                >
                  <svg
                    className="w-4 h-4 text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {trustItem}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Product screenshot (2 cols) */}
          <motion.div
            className="lg:col-span-2 animate-float"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            {/* Browser chrome mockup */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              {/* Chrome bar */}
              <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-slate-400 ml-2 font-mono">
                  app.voxwel.com/problems
                </div>
              </div>
              {/* Screenshot */}
              <Image
                src="/screenshots/problems-wall.avif"
                alt="VoxWel anonymous reports dashboard showing employee reports with priority levels and anonymous verification"
                width={800}
                height={560}
                className="w-full"
                style={{ objectFit: "cover", objectPosition: "top" }}
                priority
              />
            </div>
            {/* Caption */}
            <p className="text-center text-xs text-slate-400 mt-3">
              Anonymous Reports Dashboard — visible only to HR admins
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

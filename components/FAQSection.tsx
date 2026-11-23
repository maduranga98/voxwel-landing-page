"use client";

import { useState } from "react";
import { homeFAQs as faqs } from "@/data/homeFAQs";


export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="bg-slate-50 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Whistleblowing software FAQs
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-white rounded-xl border transition-shadow ${
                  isOpen
                    ? "border-indigo-200 shadow-md"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 text-sm md:text-base">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-lg font-bold transition-colors ${
                      isOpen
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Schedule a Demo →
          </a>
        </div>
      </div>
    </section>
  );
}

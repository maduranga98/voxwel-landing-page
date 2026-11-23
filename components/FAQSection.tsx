"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is whistleblowing software?",
    answer:
      "Whistleblowing software is a secure online channel where employees, contractors and suppliers can report misconduct such as harassment, fraud, bribery or safety risks without fear of retaliation, combined with a case management system that lets HR and compliance teams investigate, respond to reporters and keep an audit trail. VoxWel is whistleblowing software built for small and mid-sized organisations, priced at $1 per employee per month.",
  },
  {
    question: "How can VoxWel guarantee 100% anonymity for employees?",
    answer:
      "VoxWel uses AES-256 end-to-end encryption and a zero-knowledge architecture. When an employee submits a report, no identifying metadata is stored — not their IP address, device fingerprint, or session data. Even VoxWel's own administrators cannot identify who submitted a report. Anonymity is architectural, not just a policy.",
  },
  {
    question: "Can our IT department track who submitted a report?",
    answer:
      "No. VoxWel's system is specifically designed to prevent this. Reports are encrypted before they leave the employee's device and are stored in a way that makes source identification technically impossible, even with full database access.",
  },
  {
    question:
      "Is VoxWel compliant with GDPR and the EU Whistleblowing Directive?",
    answer:
      "Yes. VoxWel is fully GDPR compliant and meets the requirements of EU Directive 2019/1937 (the EU Whistleblowing Directive), which mandates that organizations with 50+ employees provide a secure, confidential internal reporting channel. VoxWel provides this channel along with the documented audit trail required for regulatory compliance.",
  },
  {
    question:
      "What is the difference between VoxWel and a traditional whistleblower hotline?",
    answer:
      "Traditional hotlines require employees to call a phone number — which many find intimidating, traceable, or only available during business hours. VoxWel is a fully digital platform available 24/7 via web browser and QR code. There is no phone call, no voice recording, and no way to trace the submission. It is also significantly more affordable: a traditional hotline costs $500–$2,000/month, while VoxWel costs $1/employee/month.",
  },
  {
    question: "What types of issues can employees report through VoxWel?",
    answer:
      "Any workplace concern: harassment, sexual harassment, discrimination, fraud, expense abuse, OSHA and safety violations, conflicts of interest, retaliation, toxic management behavior, data privacy violations, ethical concerns, and any other compliance or conduct issue. Employees can also submit named suggestions and positive feedback through the same platform.",
  },
  {
    question: "How long does it take to set up VoxWel?",
    answer:
      "24 hours or less. Once you sign up, you receive a company-specific QR code and reporting link that you can distribute to your team immediately. There is no IT project, no app installation, and no employee training required. Most organizations are fully live within the same business day.",
  },
  {
    question: "Why is VoxWel priced at only $1 per employee per month?",
    answer:
      "We designed VoxWel to be accessible to every company, not just enterprises with six-figure compliance budgets. A 100-person company pays $100/month — the cost of one business lunch. The alternative is a $75,000+ lawsuit that could have been prevented by an early anonymous report. The ROI makes the decision straightforward.",
  },
  {
    question: "What is the difference between the three reporting walls?",
    answer:
      "VoxWel has three distinct channels in one platform: Anonymous Reports (fully encrypted, completely anonymous reporting for sensitive issues), Team Pulse (open team discussion and feedback for workplace improvement ideas), and Recognition Feed (public celebration of achievements and team milestones). All three are accessible from one dashboard with role-based access controls.",
  },
];

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

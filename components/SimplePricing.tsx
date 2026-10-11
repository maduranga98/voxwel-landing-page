"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";

// ── Feature list (2-column pairs) ────────────────────────────────────────────
const featurePairs = [
  ["Unlimited reports & discussions", "Anonymous & named posting"],
  ["Military-grade AES-256 encryption", "Real-time analytics dashboard"],
  ["7-stage workflow system", "Priority escalation alerts"],
  ["File attachments (images/videos)", "Department management"],
  ["Audit trail & compliance records", "QR code onboarding"],
  ["Mobile & desktop access", "Email notifications"],
  ["24/7 platform access", "Role-based permissions"],
];

// ── Comparison table rows ─────────────────────────────────────────────────────
const comparisonRows = [
  { label: "Monthly cost (100 employees)", voxwel: "$100", hotline: "$500–$2,000", box: "$0" },
  { label: "Anonymous reporting",          voxwel: "✅",    hotline: "✅",           box: "❌" },
  { label: "Two-way communication",        voxwel: "✅",    hotline: "❌",           box: "❌" },
  { label: "Digital & always available",   voxwel: "✅",    hotline: "❌",           box: "❌" },
  { label: "Audit trail",                  voxwel: "✅",    hotline: "Partial",     box: "❌" },
  { label: "Setup time",                   voxwel: "24 hours", hotline: "2–4 weeks", box: "Instant" },
  { label: "GDPR compliant",               voxwel: "✅",    hotline: "Varies",      box: "❌" },
  { label: "Cost per year (100 employees)",voxwel: "$1,200", hotline: "$6,000–$24,000", box: "$0" },
];

export default function SimplePricing() {
  // ── Preserved calculator logic ─────────────────────────────────────────────
  const [employeeCount, setEmployeeCount] = useState(50);
  const monthlyCost = employeeCount * 1;
  const annualCost = monthlyCost * 12;

  // Pulse animation whenever the price updates
  const [priceAnimate, setPriceAnimate] = useState(false);
  useEffect(() => {
    setPriceAnimate(true);
    const t = setTimeout(() => setPriceAnimate(false), 320);
    return () => clearTimeout(t);
  }, [employeeCount]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const navbarHeight = window.innerWidth >= 768 ? 64 : 56;
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.scrollY - navbarHeight - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
            PRICING
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Less than a coffee per employee. More than a lawsuit in savings.
          </h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            One plan. Every feature. No hidden fees. No per-module pricing.
          </p>
        </div>

        {/* Main Pricing Card — centered, max-w-lg */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="bg-white rounded-3xl border-2 border-indigo-200 shadow-2xl p-8 md:p-10">
            {/* Price display */}
            <div className="text-center mb-8">
              <div className="flex items-end justify-center gap-2">
                <span className="text-7xl font-extrabold text-slate-900 leading-none">
                  $1
                </span>
                <span className="text-slate-500 text-xl mb-2">
                  / employee / month
                </span>
              </div>
              <p className="mt-3 text-amber-600 font-semibold text-sm">
                vs. $75,000–$300,000 per lawsuit
              </p>
            </div>

            {/* Interactive Calculator — logic preserved exactly */}
            <div className="bg-slate-50 rounded-2xl p-6 mb-8">
              <p className="text-center font-bold text-slate-900 mb-4">
                Calculate Your Cost
              </p>
              <div className="flex items-center gap-4 mb-2">
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Number(e.target.value))}
                  className="flex-1 h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <input
                  type="number"
                  value={employeeCount}
                  onChange={(e) =>
                    setEmployeeCount(
                      Math.max(10, Math.min(1000, Number(e.target.value)))
                    )
                  }
                  className="w-20 px-3 py-2 text-center text-lg font-bold text-slate-900 bg-white border-2 border-indigo-200 rounded-lg focus:outline-none focus:border-indigo-500"
                />
              </div>
              <p className="text-center text-slate-500 text-xs mb-5">
                employees
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl border-2 border-indigo-100">
                  <div
                    className={`text-2xl font-bold text-indigo-600${priceAnimate ? " price-pulse" : ""}`}
                  >
                    ${monthlyCost}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">per month</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border-2 border-indigo-100">
                  <div
                    className={`text-2xl font-bold text-indigo-600${priceAnimate ? " price-pulse" : ""}`}
                  >
                    ${annualCost.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">per year</div>
                </div>
              </div>

              <p className="text-center text-xs text-slate-500 mt-4">
                One prevented lawsuit covers{" "}
                <span className="font-bold text-indigo-600">
                  {Math.floor(75000 / annualCost)}+ years
                </span>{" "}
                of VoxWel.
                {employeeCount === 100 && (
                  <> One prevented lawsuit covers 62+ years of VoxWel for a 100-person company.</>
                )}
              </p>
            </div>

            {/* Features list — 2 columns */}
            <div className="mb-8 space-y-2.5">
              {featurePairs.map((pair, i) => (
                <div key={i} className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {pair.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm">
                      <FiCheck className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{f}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={scrollToContact}
              className="w-full py-4 bg-indigo-600 text-white rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-colors"
            >
              Start Free Trial
            </button>
            <p className="text-center text-slate-500 text-sm mt-4">
              ✓ 14-day free trial &nbsp;·&nbsp; ✓ No credit card required
              &nbsp;·&nbsp; ✓ Cancel anytime
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-xl font-bold text-slate-900 text-center mb-6">
            How VoxWel compares
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left p-4 text-slate-500 font-medium w-2/5" />
                  <th className="p-4 font-bold text-white bg-indigo-600 text-center">
                    VoxWel
                  </th>
                  <th className="p-4 font-semibold text-slate-700 text-center">
                    Traditional Hotline
                  </th>
                  <th className="p-4 font-semibold text-slate-700 text-center">
                    Suggestion Box
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-slate-100 ${
                      i % 2 === 0 ? "bg-white" : "bg-slate-50"
                    }`}
                  >
                    <td className="p-4 text-slate-600 font-medium">
                      {row.label}
                    </td>
                    <td className="p-4 text-center font-semibold text-indigo-700 bg-indigo-50">
                      {row.voxwel}
                    </td>
                    <td className="p-4 text-center text-slate-500">
                      {row.hotline}
                    </td>
                    <td className="p-4 text-center text-slate-500">
                      {row.box}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-slate-500 mt-4">
            Already comparing vendors?{" "}
            <Link
              href="/blogs/voxwel-vs-navex"
              className="text-indigo-600 font-semibold hover:underline"
            >
              See how VoxWel stacks up against NAVEX EthicsPoint →
            </Link>
          </p>
        </div>

        {/* Enterprise CTA */}
        <div className="max-w-lg mx-auto bg-slate-800 rounded-2xl p-6 text-center">
          <h3 className="text-lg font-bold text-white mb-2">
            Enterprise Plans Available
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            Need custom integrations, dedicated support, or white-labeling?
          </p>
          <button
            onClick={scrollToContact}
            className="text-indigo-400 hover:text-indigo-300 font-semibold text-sm transition-colors"
          >
            Contact Sales →
          </button>
        </div>
      </div>
    </section>
  );
}

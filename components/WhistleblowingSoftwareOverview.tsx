import Link from "next/link";

/**
 * Visible, crawlable "what is whistleblowing software" section for the homepage.
 * Its job is to make the homepage the clear target for the head term
 * "whistleblowing software" (GSC: ~1.2k impressions/quarter, avg. position 43),
 * which the old homepage copy never actually used outside hidden text and schema.
 */

const requirements = [
  {
    title: "EU Whistleblowing Directive",
    body: "Employers with 50+ workers must run a secure internal reporting channel, acknowledge reports within 7 days and give feedback within 3 months.",
  },
  {
    title: "Germany (HinSchG) & national laws",
    body: "Member-state laws such as the Hinweisgeberschutzgesetz add local rules on who handles reports and how long records are kept.",
  },
  {
    title: "UK PIDA",
    body: "The Public Interest Disclosure Act protects workers who raise concerns. A clear, trusted channel is how employers show they take it seriously.",
  },
  {
    title: "SOX Section 301",
    body: "US-listed companies need audit-committee procedures for confidential, anonymous submissions about accounting and auditing concerns.",
  },
];

const checklist = [
  "Anonymity enforced by encryption, not just a confidentiality promise",
  "Two-way messaging with anonymous reporters",
  "Case management with deadlines, assignments and an audit trail",
  "GDPR-ready data retention and EU data handling",
  "Fast rollout: a link or QR code, no app install, no IT project",
  "Transparent, per-employee pricing with no hidden add-ons",
];

const related = [
  { href: "/blogs/best-whistleblowing-software", label: "Best whistleblowing software compared" },
  { href: "/blogs/whistleblowing-software-pricing-comparison", label: "Whistleblowing software pricing" },
  { href: "/blogs/best-eu-directive-compliant-whistleblowing-software", label: "EU Directive compliant tools" },
  { href: "/blogs/best-navex-alternative", label: "NAVEX EthicsPoint alternatives" },
];

export default function WhistleblowingSoftwareOverview() {
  return (
    <section id="whistleblowing-software" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
          Whistleblowing Software
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 max-w-3xl">
          What is whistleblowing software?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-5 text-slate-600 text-lg leading-relaxed">
            <p>
              <strong className="text-slate-900">Whistleblowing software</strong> is a secure
              online channel where employees, contractors and suppliers can report misconduct —
              harassment, fraud, bribery, safety risks or data breaches — without fear of
              retaliation. It replaces phone hotlines and shared inboxes with an encrypted
              reporting portal and a case management system that lets HR and compliance teams
              investigate, respond and prove what they did.
            </p>
            <p>
              VoxWel is whistleblowing software built for small and mid-sized organisations.
              Reports are encrypted on the employee&apos;s device, so anonymity is a technical
              guarantee rather than a policy. Your team gets a 7-stage resolution workflow,
              anonymous two-way messaging and an automatic audit trail, and you can be live in
              24 hours for $1 per employee per month.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 pt-4">
              What to look for in a whistleblowing system
            </h3>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <p className="text-sm font-semibold text-slate-900 mb-3">Compare before you buy</p>
              <div className="flex flex-wrap gap-2">
                {related.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="text-sm text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full hover:bg-indigo-100 transition-colors"
                  >
                    {r.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-slate-900 mb-5">
              Who needs a whistleblowing channel?
            </h3>
            <div className="space-y-4">
              {requirements.map((r) => (
                <div key={r.title} className="border border-slate-200 rounded-xl p-5">
                  <p className="font-semibold text-slate-900 mb-1">{r.title}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

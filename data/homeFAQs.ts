// Single source for the homepage FAQ: rendered by FAQSection and emitted as FAQPage schema
// in app/page.tsx, so the structured data always matches the visible questions.
export const homeFAQs: { question: string; answer: string }[] = [
  {
    question: "What is whistleblowing software?",
    answer:
      "Whistleblowing software is a secure online channel where employees, contractors and suppliers can report misconduct such as harassment, fraud, bribery or safety risks without fear of retaliation, combined with a case management system that lets HR and compliance teams investigate, respond to reporters and keep an audit trail. VoxWel is whistleblowing software built for small and mid-sized organisations, priced at $1 per employee per month.",
  },
  {
    question: "How much does whistleblowing software cost?",
    answer:
      "Most whistleblowing software is priced per employee per month. Prices range from about $1 per employee per month (VoxWel, all features included, no setup fee) to $10 or more per employee per month for enterprise suites, which often add one-time setup fees and annual contracts. A 100-person company pays $100 a month for VoxWel.",
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

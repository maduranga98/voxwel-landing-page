export const blogFAQs: Record<string, { question: string; answer: string }[]> = {
  "whistleblowing-case-management-software-workflow": [
    { question: "What is the difference between a whistleblowing channel and case management software?", answer: "A channel receives the report. Case management supports the work that follows, including triage, assignment, investigation, evidence, decisions, actions and closure." },
    { question: "Should every HR employee be able to view every report?", answer: "Usually not. Access should be limited to people who need it for their assigned responsibilities, with special handling for conflicts of interest and highly sensitive cases." },
    { question: "Does case management software investigate a complaint automatically?", answer: "No. It organizes workflow and records. Qualified people must assess evidence, conduct interviews, evaluate credibility and make decisions." },
  ],
  "eu-hosting-whistleblowing-software-data-residency": [
    { question: "Does EU hosting automatically mean a whistleblowing platform is GDPR compliant?", answer: "No. GDPR compliance depends on all processing activities, legal bases, transparency, minimisation, security, processor contracts, retention and any international transfers." },
    { question: "Can EU-hosted software be accessed by support staff outside the EEA?", answer: "Potentially, depending on the service design and contractual arrangements. Ask the vendor to disclose remote access and identify the applicable transfer safeguards." },
    { question: "What is more important: hosting location or encryption?", answer: "Both address different risks. Hosting location concerns where data is processed and transferred. Encryption helps protect data from unauthorized access. Neither replaces governance, access control and proper retention." },
  ],
  "whistleblowing-software-implementation-plan": [
    { question: "Can whistleblowing software be deployed in one day?", answer: "A basic channel may be technically activated quickly. A responsible rollout also requires policy, access, escalation, privacy, testing and employee communication decisions." },
    { question: "What usually delays implementation?", answer: "Unclear ownership, late legal review, multiple entities, language requirements, integrations, data migration and unresolved decisions about who investigates sensitive cases." },
    { question: "Should employees be told before the channel launches?", answer: "Yes. Explain the purpose, confidentiality limits, access arrangements, reporting options and expected follow-up before asking employees to use the channel." },
  ],
  "verify-eu-whistleblowing-software-compliance": [
    { question: "Does the EU Whistleblowing Directive require anonymous reporting?", answer: "Not universally. The Directive requires confidentiality protections and leaves Member States room to decide whether organizations must accept and follow up anonymous reports, subject to other applicable EU law and national rules." },
    { question: "Does buying compliant software make a company compliant?", answer: "No. The employer still needs appropriate policies, trained impartial handlers, clear employee information, secure procedures and diligent follow-up." },
    { question: "What deadlines should a platform support?", answer: "The Directive includes an acknowledgement period of seven days and a feedback timeframe not exceeding three months for internal channels, subject to the conditions in Article 9 and national implementation." },
  ],
  "compare-eu-whistleblowing-software-vendors": [
    { question: "What is the most important factor when comparing whistleblowing platforms?", answer: "Start with confidentiality, independent follow-up and case handling. A reporting form is only the entry point. The organization must also control access, investigate fairly, document actions and protect personal data." },
    { question: "Should a company choose a platform that is already certified as EU Directive compliant?", answer: "Treat certification or compliance claims as evidence to investigate, not as a final answer. Ask what standard or legal requirement is being assessed, who assessed it, what is in scope and whether the relevant national law has been considered." },
    { question: "How many vendors should we evaluate?", answer: "A shortlist of three to five vendors is often manageable. Use the same scenarios and scorecard for each so the comparison is fair." },
  ],
  "whistleblower-hotline-cost": [
    { question: "How much does a whistleblower hotline cost?", answer: "Whistleblower hotline costs range from $1 to $15 per employee per month. Traditional phone hotlines cost $3–$8/employee/month. Modern digital platforms like VoxWel cost $1/employee/month with no setup fees." },
    { question: "What is the cheapest whistleblowing software?", answer: "GlobaLeaks is free open-source software but requires self-hosting. Among commercial platforms, VoxWel at $1/employee/month is the most affordable fully-managed solution with EU Directive compliance." },
    { question: "Do whistleblower hotlines charge per report?", answer: "Some traditional hotline providers charge per report or per call in addition to monthly fees. Modern platforms like VoxWel, FaceUp, and Whistleblower Software use flat per-employee pricing with no per-report charges." },
  ],
  "what-is-compliance-hotline": [
    { question: "What is a compliance hotline?", answer: "A compliance hotline is a reporting channel that allows employees to report workplace misconduct including harassment, fraud, safety violations, and ethics concerns. Modern compliance hotlines use digital platforms rather than phone-only systems." },
    { question: "Are compliance hotlines anonymous?", answer: "It depends on the platform. Phone-based hotlines are confidential but not truly anonymous — caller metadata can be traced. Digital platforms with zero-knowledge encryption (like VoxWel) provide technical anonymity where even the platform cannot identify the reporter." },
    { question: "Is a compliance hotline required by law?", answer: "The EU Whistleblowing Directive requires organizations with 50+ employees to provide internal reporting channels. In the US, SOX Section 301 requires audit committees of public companies to establish procedures for anonymous reporting. Many state laws also require reporting channels." },
  ],
  "best-whistleblowing-software": [
    { question: "What is the best whistleblowing software in 2026?", answer: "The best platform depends on company size and requirements. For SMBs and mid-market (10–1,000 employees), VoxWel offers the strongest anonymity at $1/employee/month. For large EU enterprises, FaceUp and EQS Integrity Line are established options. For free self-hosted solutions, GlobaLeaks is available." },
    { question: "How much does whistleblowing software cost?", answer: "Whistleblowing software costs range from free (GlobaLeaks, self-hosted) to $15+/employee/month (NAVEX enterprise). Most mid-market platforms cost $1–$4/employee/month. Enterprise platforms like NAVEX start at $500/month before per-employee charges." },
  ],
  "eu-whistleblowing-directive-compliance-guide": [
    { question: "What are the EU Whistleblowing Directive requirements?", answer: "The EU Whistleblowing Directive (2019/1937) has 6 core requirements: anonymous reporting channels, 7-day acknowledgment of reports, two-way communication with reporters, 3-month feedback on actions taken, retaliation protection documentation, and GDPR-compliant data handling." },
    { question: "Which companies must comply with the EU Whistleblowing Directive?", answer: "All organizations with 50 or more employees operating in an EU member state must provide internal reporting channels. The directive has been transposed into national law across all EU member states, with specific requirements varying by country." },
    { question: "What is the deadline for EU Whistleblowing Directive compliance?", answer: "The final transposition deadline for organizations with 50–249 employees was December 17, 2023. All covered organizations should already have compliant reporting channels in place. National enforcement authorities are actively monitoring compliance." },
  ],
  "best-eu-directive-compliant-whistleblowing-software": [
    {
      question: "Which whistleblowing platforms are fully compliant with the EU Directive 2019/1937?",
      answer: "Of the 7 major platforms evaluated, VoxWel, FaceUp, and EQS Integrity Line meet all 6 EU Directive requirements out of the box. Other platforms like NAVEX and SpeakUp require manual configuration or add-on modules to achieve full compliance."
    },
    {
      question: "How much does EU-compliant whistleblowing software cost?",
      answer: "Pricing ranges from $1/employee/month (VoxWel) to $15+/employee/month (NAVEX enterprise). A 500-employee company will pay between $6,000 and $15,000+ annually depending on the vendor. Some platforms also charge setup fees of $1,000–$25,000."
    },
    {
      question: "What are the 6 requirements of the EU Whistleblowing Directive?",
      answer: "The Directive requires: (1) an anonymous reporting channel, (2) 7-day acknowledgment of receipt, (3) two-way communication with the reporter even if anonymous, (4) 3-month feedback on actions taken, (5) retaliation protection documentation via audit logs, and (6) GDPR-compliant data handling with EU data residency."
    },
    {
      question: "How quickly can EU-compliant whistleblowing software be set up?",
      answer: "Setup times vary dramatically. VoxWel and FaceUp can be deployed in under 24 hours. Whistlelink and Formalize take 1–3 days. EQS Integrity Line requires 2–4 weeks. NAVEX and SpeakUp typically need 3–8 weeks for enterprise implementations."
    },
    {
      question: "Can anonymous whistleblowers receive feedback under the EU Directive?",
      answer: "Yes — the Directive requires organizations to provide feedback within 3 months even to anonymous reporters. This requires a platform with built-in two-way anonymous messaging, which not all vendors offer natively."
    }
  ],
  "whistleblowing-software-pricing-comparison": [
    {
      question: "What is the cheapest whistleblowing software for businesses?",
      answer: "VoxWel is the most affordable commercial platform at $1/employee/month ($600/year for 50 employees). GlobaLeaks is free open-source software but requires self-hosting, which typically costs more in IT labor than a managed SaaS subscription."
    },
    {
      question: "Why do whistleblowing software prices vary so much?",
      answer: "The market uses 4 different pricing models: per-employee monthly fees ($1–$15), flat monthly tiers ($100–$500+), enterprise quote-based licensing ($500–$5,000+/month), and free open-source with self-hosting costs. Legacy vendors like NAVEX charge premium prices for brand recognition and compliance consulting."
    },
    {
      question: "What hidden fees should I watch for when buying whistleblowing software?",
      answer: "Common hidden costs include setup/implementation fees ($1,000–$25,000), per-report surcharges on phone hotlines, mandatory multi-year contracts, language pack add-ons, additional user seat charges for investigators, and data migration fees when switching providers."
    },
    {
      question: "How much does NAVEX EthicsPoint cost?",
      answer: "NAVEX does not publish pricing. Based on market data, small-to-mid implementations typically start at $5,000–$10,000 annually with setup fees of $1,000–$25,000+. Enterprise contracts are multi-year and often exceed $15,000/year."
    }
  ],
  "hinweisgeberschutzgesetz-guide": [
    {
      question: "Für welche Unternehmen gilt das Hinweisgeberschutzgesetz?",
      answer: "Das HinSchG gilt seit Juli 2023 für Unternehmen ab 250 Mitarbeitenden und seit Dezember 2023 für alle Unternehmen ab 50 Mitarbeitenden. Auch Kommunen und öffentliche Einrichtungen ab 10.000 Einwohnern sind betroffen."
    },
    {
      question: "Welche Strafen drohen bei Verstoß gegen das HinSchG?",
      answer: "Bußgelder bis zu €20.000 für das Fehlen eines internen Meldekanals. Behinderung von Meldungen oder Vergeltungsmaßnahmen gegen Hinweisgeber können mit Bußgeldern bis €50.000 geahndet werden."
    },
    {
      question: "Was muss eine interne Meldestelle nach dem HinSchG leisten?",
      answer: "Die Meldestelle muss anonyme Meldungen entgegennehmen, innerhalb von 7 Tagen den Eingang bestätigen, eine vertrauliche Zwei-Wege-Kommunikation ermöglichen und innerhalb von 3 Monaten Rückmeldung zu ergriffenen Maßnahmen geben."
    },
    {
      question: "Welche Software erfüllt die HinSchG-Anforderungen?",
      answer: "Plattformen wie VoxWel ($1/Mitarbeiter/Monat), FaceUp und EQS Integrity Line erfüllen alle HinSchG-Anforderungen nativ: anonyme Meldung, Fristenverwaltung, Zwei-Wege-Kommunikation und DSGVO-konforme Datenhaltung auf EU-Servern."
    }
  ],
  "multilingual-whistleblowing-software-eu": [
    {
      question: "How many languages should a whistleblowing platform support for EU compliance?",
      answer: "At minimum, your platform must support every working language used in your EU operations. If you have employees in Germany, France, and Spain, you need German, French, and Spanish interfaces at a minimum. VoxWel supports 200+ languages natively."
    },
    {
      question: "Is multilingual support legally required under the EU Whistleblowing Directive?",
      answer: "Yes — the Directive requires reporting channels to be 'accessible.' Legal consensus across EU member states interprets this to mean employees must be able to report in their primary working language. An English-only portal for non-English-speaking employees may constitute a compliance failure."
    },
    {
      question: "What is the difference between interface translation and content translation in whistleblowing software?",
      answer: "Interface translation means the buttons and menus are in the employee's language. Content translation means the actual report text is translated for investigators working in a different language. Most platforms only offer interface translation — very few handle secure, GDPR-compliant content translation."
    }
  ],
};

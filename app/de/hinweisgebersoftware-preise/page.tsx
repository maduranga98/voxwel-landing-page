import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const siteUrl = "https://voxwel.com";
const pageUrl = `${siteUrl}/de/hinweisgebersoftware-preise`;
// Closest English equivalent: the pricing comparison guide.
const enUrl = `${siteUrl}/blogs/whistleblowing-software-pricing-comparison`;

const title = "Hinweisgebersoftware Preise 2026: Kosten & Preismodelle";
const description =
  "Was kostet Hinweisgebersoftware? Preismodelle, Preisspannen und Richtwerte 2026 – plus HinSchG-Pflichten ab 50 Beschäftigten. VoxWel: 1 USD pro Mitarbeiter/Monat.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: pageUrl,
    languages: { de: pageUrl, en: enUrl, "x-default": enUrl },
  },
  openGraph: {
    title: `${title} | VoxWel`,
    description,
    url: pageUrl,
    locale: "de_DE",
    images: [
      {
        url: "https://voxwel.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "VoxWel Hinweisgebersoftware",
      },
    ],
    type: "website",
    siteName: "VoxWel",
  },
};

/* ── Content ─────────────────────────────────────────────────────────────
 * Rechtliche Aussagen geprüft gegen HinSchG-Informationen der IHKs und
 * gesetze-im-internet.de (Stand 11/2026). Vor Änderungen bitte von einer
 * deutschsprachigen Person mit HinSchG-Kenntnissen gegenlesen lassen.
 */

const pricingRows = [
  {
    name: "VoxWel",
    note: "Digitaler Meldekanal + Fallbearbeitung",
    monthly: "100 USD",
    yearly: "1.200 USD",
    channel: "Textform (Web, QR-Code)",
    highlight: true,
  },
  {
    name: "Mittelklasse-Plattformen",
    note: "z. B. FaceUp, Whistlelink",
    monthly: "ca. 200–500 €",
    yearly: "ca. 2.400–6.000 €",
    channel: "Textform, teils Sprachnachricht",
  },
  {
    name: "Telefon-Hotline (Dienstleister)",
    note: "mit Callcenter",
    monthly: "ca. 500–2.000 €",
    yearly: "ca. 6.000–24.000 €",
    channel: "mündlich",
  },
  {
    name: "Enterprise-Suiten",
    note: "z. B. NAVEX, EQS, OneTrust",
    monthly: "ca. 1.000–5.000 €+",
    yearly: "ca. 12.000–60.000 €+",
    channel: "Textform und mündlich",
  },
  {
    name: "E-Mail-Postfach / Briefkasten",
    note: "selbst organisiert",
    monthly: "~0 €",
    yearly: "~0 €",
    channel: "Textform – Vertraulichkeit schwer sicherzustellen",
  },
];

const priceModels = [
  {
    title: "Pro Beschäftigtem und Monat",
    body: "Der Preis wächst mit der Belegschaft, nicht mit der Zahl der Meldungen. Gut planbar. Beispiel: VoxWel mit 1 USD pro Beschäftigtem.",
  },
  {
    title: "Paket nach Größenklasse",
    body: "Fester Monats- oder Jahrespreis für eine Spanne, z. B. bis 250 Beschäftigte. Häufig bei Mittelklasse-Anbietern, oft mit Jahresvertrag.",
  },
  {
    title: "Individuelles Enterprise-Angebot",
    body: "Preis nur auf Anfrage, meist mit Einrichtungsgebühr und mehrjähriger Laufzeit. Üblich bei großen Compliance-Suiten.",
  },
  {
    title: "Pro Meldung",
    body: "Selten. Problematisch, weil mehr Meldungen – also eine gesunde Speak-up-Kultur – die Kosten erhöhen.",
  },
];

const requirements = [
  {
    ref: "§ 12 HinSchG",
    title: "Interne Meldestelle ab 50 Beschäftigten",
    law: "Beschäftigungsgeber mit in der Regel mindestens 50 Beschäftigten müssen eine interne Meldestelle einrichten und betreiben. Sie kann auch von Dritten betrieben werden.",
    voxwel:
      "Stellt den digitalen Meldekanal und die Fallbearbeitung bereit. Die Meldestellenbeauftragten benennen Sie selbst.",
  },
  {
    ref: "§ 16 Abs. 3 HinSchG",
    title: "Meldungen mündlich oder in Textform",
    law: "Interne Meldekanäle müssen Meldungen in mündlicher oder in Textform ermöglichen, auf Wunsch auch ein persönliches Treffen.",
    voxwel:
      "Deckt Meldungen in Textform ab (Web und QR-Code, rund um die Uhr). Einen Telefonkanal und persönliche Termine organisiert Ihre Meldestelle zusätzlich.",
  },
  {
    ref: "§ 16 Abs. 1 HinSchG",
    title: "Anonyme Meldungen: empfohlen, nicht Pflicht",
    law: "Eine Pflicht zu anonymen Meldekanälen besteht nicht. Die interne Meldestelle soll anonym eingehende Meldungen aber bearbeiten.",
    voxwel:
      "Anonyme Meldungen sind Standard. Meldungen werden auf dem Gerät verschlüsselt (AES-256), Rückfragen laufen anonym über den Kanal.",
  },
  {
    ref: "§ 17 HinSchG",
    title: "Eingangsbestätigung in 7 Tagen, Rückmeldung in 3 Monaten",
    law: "Der Eingang ist spätestens nach sieben Tagen zu bestätigen. Innerhalb von drei Monaten nach der Bestätigung erhält die hinweisgebende Person eine Rückmeldung zu den Folgemaßnahmen.",
    voxwel:
      "Automatische Eingangsbestätigung, anonyme Zwei-Wege-Kommunikation und Fristerinnerungen im 7-stufigen Fall-Workflow.",
  },
  {
    ref: "§ 8 und § 11 HinSchG",
    title: "Vertraulichkeit und Dokumentation",
    law: "Die Identität der hinweisgebenden Person ist vertraulich zu behandeln. Meldungen sind zu dokumentieren; die Dokumentation wird drei Jahre nach Abschluss des Verfahrens gelöscht.",
    voxwel:
      "Rollenbasierter Zugriff, vollständiger Audit-Trail je Fall und konfigurierbare Löschfristen.",
  },
  {
    ref: "§ 36 HinSchG",
    title: "Verbot von Repressalien mit Beweislastumkehr",
    law: "Repressalien sind verboten. Erleidet eine hinweisgebende Person nach einer Meldung eine Benachteiligung, wird vermutet, dass es sich um eine Repressalie handelt.",
    voxwel:
      "Jeder Schritt der Fallbearbeitung wird mit Zeitstempel dokumentiert – Ihre Grundlage, um eine sachliche Entscheidung nachzuweisen.",
  },
];

const risks = [
  {
    metric: "bis 20.000 €",
    label: "Bußgeld, wenn keine interne Meldestelle eingerichtet oder betrieben wird",
    source: "§ 40 HinSchG",
  },
  {
    metric: "bis 50.000 €",
    label: "Bußgeld bei Repressalien oder wenn Meldungen behindert werden",
    source: "§ 40 HinSchG",
  },
  {
    metric: "43 %",
    label: "der Fälle von Wirtschaftskriminalität im Unternehmen werden durch Hinweise aufgedeckt (Medianschaden je Fall: 145.000 USD)",
    source: "ACFE, Occupational Fraud 2024",
  },
];

const faqs = [
  {
    q: "Was kostet Hinweisgebersoftware?",
    a: "Für ein Unternehmen mit 100 Beschäftigten liegen typische Angebote nach unserer Marktübersicht zwischen etwa 100 und 500 € im Monat. Enterprise-Suiten kosten deutlich mehr und berechnen oft zusätzlich eine Einrichtungsgebühr. VoxWel kostet 1 USD pro Beschäftigtem und Monat, also 100 USD für 100 Beschäftigte, ohne Einrichtungsgebühr.",
  },
  {
    q: "Was ist der Durchschnittspreis für EU-richtlinienkonforme Hinweisgebersoftware?",
    a: "Einen offiziellen Durchschnittspreis gibt es nicht, weil viele Anbieter keine Preise veröffentlichen. Als Richtwert: Digitale Lösungen für kleine und mittlere Unternehmen beginnen bei rund 1 € pro Beschäftigtem und Monat, Mittelklasse-Pakete liegen meist bei einigen Tausend Euro im Jahr, Enterprise-Suiten im fünfstelligen Bereich.",
  },
  {
    q: "Welche Preismodelle sind bei Hinweisgebersystemen am häufigsten?",
    a: "Am häufigsten sind Preise pro Beschäftigtem und Monat, feste Pakete nach Unternehmensgröße und individuelle Enterprise-Angebote mit Einrichtungsgebühr. Abrechnung pro Meldung ist selten, weil dann eine gute Meldekultur teurer wird.",
  },
  {
    q: "In welcher Preisspanne liegen Hinweisgebersysteme auf Unternehmensebene?",
    a: "Große Compliance-Suiten werden meist individuell angeboten. Nach unserer Marktübersicht liegen sie für mittlere und große Unternehmen grob zwischen 12.000 und 60.000 € pro Jahr oder mehr, oft zuzüglich Einrichtung. Fordern Sie für Ihre Beschäftigtenzahl immer ein schriftliches Angebot an.",
  },
  {
    q: "Welche Unternehmen müssen das HinSchG einhalten?",
    a: "Beschäftigungsgeber mit in der Regel mindestens 50 Beschäftigten müssen eine interne Meldestelle einrichten. Für Unternehmen ab 250 Beschäftigten gilt das seit dem 2. Juli 2023, für Unternehmen mit 50 bis 249 Beschäftigten seit dem 17. Dezember 2023. Einzelne Branchen, etwa Finanzdienstleister, sind unabhängig von der Größe verpflichtet.",
  },
  {
    q: "Welche Bußgelder drohen nach dem HinSchG?",
    a: "Wer keine interne Meldestelle einrichtet oder betreibt, riskiert ein Bußgeld bis zu 20.000 €. Wer Meldungen behindert, Repressalien ergreift oder die Vertraulichkeit verletzt, riskiert bis zu 50.000 € (§ 40 HinSchG).",
  },
  {
    q: "Müssen anonyme Meldungen möglich sein?",
    a: "Nein, eine Pflicht zu anonymen Meldekanälen besteht nicht. Die interne Meldestelle soll anonym eingehende Meldungen aber bearbeiten (§ 16 Abs. 1 HinSchG). In der Praxis melden viele Beschäftigte nur, wenn sie anonym bleiben können.",
  },
  {
    q: "Kann ich ein E-Mail-Postfach als Meldekanal nutzen?",
    a: "Rechtlich ist ein Meldekanal in Textform nicht an eine bestimmte Software gebunden. Ein E-Mail-Postfach macht es aber schwer, die Vertraulichkeit sicherzustellen, Fristen zu überwachen und anonym Rückfragen zu stellen. Deshalb setzen die meisten Unternehmen eine spezialisierte Lösung ein.",
  },
  {
    q: "Ist VoxWel HinSchG-konform?",
    a: "VoxWel deckt den Meldekanal in Textform ab, inklusive anonymer Meldungen, Eingangsbestätigung, anonymer Rückfragen, Fristüberwachung und Dokumentation. Das HinSchG verlangt außerdem, dass Meldungen mündlich möglich sind und auf Wunsch ein persönliches Treffen stattfindet. Das organisiert Ihre Meldestelle zusätzlich, zum Beispiel über eine Telefonnummer der Meldestellenbeauftragten.",
  },
  {
    q: "Wie schnell ist VoxWel eingerichtet?",
    a: "In der Regel innerhalb von 24 Stunden und ohne IT-Projekt. Sie erhalten einen Weblink und einen QR-Code für Ihre Beschäftigten. Testen Sie 14 Tage kostenlos, ohne Kreditkarte.",
  },
];

const sources = [
  { label: "HinSchG § 40 Bußgeldvorschriften (gesetze-im-internet.de)", href: "https://www.gesetze-im-internet.de/hinschg/__40.html" },
  { label: "IHK München: Hinweisgeberschutzgesetz", href: "https://www.ihk-muenchen.de/hinweisgeberschutzgesetz" },
  { label: "ACFE: Occupational Fraud 2024 – A Report to the Nations", href: "https://legacy.acfe.com/report-to-the-nations/2024/" },
];

export default function HinweisgebersoftwarePreisePage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url: pageUrl,
    inLanguage: "de",
    description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#software` },
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "de",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Navigation />

      <main className="pt-16">
        {/* ── HINWEIS ── */}
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-5xl mx-auto px-6 py-3 flex items-start gap-3">
            <span className="text-amber-600 text-lg mt-0.5 shrink-0">⚠</span>
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Seit dem 17. Dezember 2023</strong> müssen alle Unternehmen
              ab 50 Beschäftigten eine interne Meldestelle betreiben. Fehlt sie,
              drohen Bußgelder bis zu <strong>20.000 €</strong>.
            </p>
          </div>
        </div>

        {/* ── HERO ── */}
        <section className="bg-primary-navy text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
              Deutschland · HinSchG · DSGVO
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-white">
              Hinweisgebersoftware Preise 2026: Was kostet ein Hinweisgebersystem?
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              Für 100 Beschäftigte kosten digitale Hinweisgebersysteme meist zwischen{" "}
              <strong className="text-white">100 und 500 € im Monat</strong>.
              Hier finden Sie Richtwerte, die gängigen Preismodelle und die
              Anforderungen des HinSchG im Überblick.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo"
                className="bg-primary-teal hover:opacity-90 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-lg"
              >
                14 Tage kostenlos testen
              </a>
              <a
                href="#preisvergleich"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all text-lg"
              >
                Zum Preisvergleich →
              </a>
            </div>
          </div>
        </section>

        {/* ── PREISVERGLEICH ── */}
        <section id="preisvergleich" className="section-padding bg-background-white px-6">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-text-primary mb-4">
                Preisvergleich: Hinweisgebersysteme für 100 Beschäftigte
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Richtwerte nach Lösungstyp, mit den Meldewegen, die die
                jeweilige Lösung abdeckt.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-border-light shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-navy text-white">
                    <th className="text-left px-5 py-4 font-semibold">Lösungstyp</th>
                    <th className="text-left px-5 py-4 font-semibold">Monatlich</th>
                    <th className="text-left px-5 py-4 font-semibold">Jährlich</th>
                    <th className="text-left px-5 py-4 font-semibold">Meldewege</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row, i) => (
                    <tr
                      key={row.name}
                      className={`border-t border-border-light ${
                        row.highlight
                          ? "bg-primary-teal/5"
                          : i % 2 === 0
                            ? "bg-background-white"
                            : "bg-background-softGray/40"
                      }`}
                    >
                      <td className="px-5 py-4 font-medium text-text-primary">
                        {row.name}
                        <span className="block text-xs text-text-tertiary font-normal mt-0.5">
                          {row.note}
                        </span>
                      </td>
                      <td className={`px-5 py-4 ${row.highlight ? "font-semibold text-primary-teal" : "text-text-secondary"}`}>
                        {row.monthly}
                      </td>
                      <td className={`px-5 py-4 ${row.highlight ? "font-semibold text-primary-teal" : "text-text-secondary"}`}>
                        {row.yearly}
                      </td>
                      <td className="px-5 py-4 text-text-secondary">{row.channel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-text-tertiary text-center">
              Richtwerte nach unserer Marktübersicht, Stand 2026. Viele Anbieter
              veröffentlichen keine Preise; fordern Sie immer ein schriftliches
              Angebot an. VoxWel rechnet in US-Dollar ab.
            </p>
          </div>
        </section>

        {/* ── PREISMODELLE ── */}
        <section className="section-padding bg-background-softGray px-6">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-text-primary mb-4">
                Die gängigsten Preismodelle
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {priceModels.map((m) => (
                <div key={m.title} className="bg-background-white rounded-xl p-6 border border-border-light shadow-sm">
                  <h3 className="font-semibold text-text-primary mb-2">{m.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HINSCHG-ANFORDERUNGEN ── */}
        <section className="section-padding bg-background-white px-6">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-text-primary mb-4">
                Was das HinSchG verlangt – und was VoxWel abdeckt
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Die wichtigsten Pflichten für interne Meldestellen im Überblick.
              </p>
            </div>
            <div className="grid gap-5">
              {requirements.map((req) => (
                <div
                  key={req.title}
                  className="bg-background-white rounded-xl p-6 border border-border-light shadow-sm"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-primary-teal bg-primary-teal/10 px-2 py-0.5 rounded shrink-0">
                      {req.ref}
                    </span>
                    <h3 className="font-semibold text-text-primary text-sm">{req.title}</h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-3">{req.law}</p>
                  <div className="border-l-4 border-primary-teal bg-primary-teal/5 rounded-r-lg px-4 py-3">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      <span className="font-semibold text-primary-teal">VoxWel: </span>
                      {req.voxwel}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RISIKEN ── */}
        <section className="section-padding bg-background-softGray px-6">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-text-primary mb-4">
                Was es kostet, kein funktionierendes System zu haben
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {risks.map((card) => (
                <div
                  key={card.label}
                  className="bg-background-white rounded-2xl p-8 text-center border border-border-light"
                >
                  <div className="text-4xl font-extrabold text-status-error mb-2">{card.metric}</div>
                  <p className="text-text-primary font-semibold text-sm mb-2 leading-snug">{card.label}</p>
                  <p className="text-text-tertiary text-xs">Quelle: {card.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section-padding bg-background-white px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-text-primary mb-4">Häufige Fragen</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-background-white border border-border-light rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-text-primary hover:bg-background-softGray/60 transition-colors list-none">
                    <span className="text-sm leading-snug pr-4">{faq.q}</span>
                    <span className="shrink-0 text-primary-teal text-xl font-light group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-lg font-bold text-text-primary mb-3">Quellen</h2>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-text-secondary">
                {sources.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} rel="noopener" className="underline underline-offset-4 hover:text-primary-teal">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-text-tertiary">
                Allgemeine Information, keine Rechtsberatung. Weitere Details im{" "}
                <a href="/blogs/hinweisgeberschutzgesetz-guide" className="underline underline-offset-4">
                  HinSchG-Leitfaden (Englisch)
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-padding bg-primary-teal/10 px-6">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-6">
                Ihr digitaler Meldekanal in unter 24 Stunden
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {[
                  { label: "Preis", value: "1 USD", sub: "pro Beschäftigtem/Monat" },
                  { label: "Einrichtung", value: "Unter 24 Stunden", sub: "kein IT-Projekt" },
                  { label: "Testphase", value: "14 Tage", sub: "ohne Kreditkarte" },
                ].map((s) => (
                  <div key={s.label} className="bg-background-white rounded-xl p-5 border border-border-light">
                    <p className="text-xs text-text-tertiary uppercase tracking-wider mb-1">{s.label}</p>
                    <p className="text-xl font-extrabold text-text-primary">{s.value}</p>
                    <p className="text-xs text-text-secondary mt-1">{s.sub}</p>
                  </div>
                ))}
              </div>
              <a
                href="/demo"
                className="inline-block bg-primary-teal hover:opacity-90 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg text-lg"
              >
                14 Tage kostenlos testen
              </a>
              <p className="mt-4 text-sm text-text-tertiary">
                Ohne Einrichtungsgebühr ·{" "}
                <a href="/privacy-policy" className="underline underline-offset-4">
                  Datenschutzerklärung
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

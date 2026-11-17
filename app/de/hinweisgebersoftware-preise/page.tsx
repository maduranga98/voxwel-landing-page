import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const siteUrl = "https://voxwel.com";
const pageUrl = `${siteUrl}/de/hinweisgebersoftware-preise`;

export const metadata: Metadata = {
  title: "Hinweisgebersoftware Preise 2026: Was kostet sie?",
  description:
    "Hinweisgebersoftware kostet 1 € bis 25 € pro Mitarbeiter und Monat. Preisvergleich aller Optionen: HinSchG-konform, DSGVO-sicher.",
  alternates: {
    canonical: pageUrl,
    languages: {
      de: pageUrl,
    },
  },
  openGraph: {
    title: "Hinweisgebersoftware Preise 2026: Was kostet sie? | VoxWel",
    description:
      "Vollständiger Preisvergleich für Hinweisgebersoftware in Deutschland.",
    url: pageUrl,
    locale: "de_DE",
    images: [{ url: "https://voxwel.com/og-image.png", width: 1200, height: 630, alt: "VoxWel anonymous employee reporting platform" }],
    type: "website",
    siteName: "VoxWel",
  },
};

export default function HinweisgebersoftwarePreisePage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Hinweisgebersoftware Preise 2026",
    url: pageUrl,
    inLanguage: "de",
    description:
      "Vollständiger Preisvergleich für Hinweisgebersoftware in Deutschland.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was kostet Hinweisgebersoftware in Deutschland?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zwischen 1 € und 25 € pro Mitarbeiter/Monat. VoxWel kostet ~92 €/Monat für 100 Mitarbeiter ohne Einrichtungsgebühr. Traditionelle Hotlines 500–2.000 €/Monat.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Unternehmen müssen das HinSchG einhalten?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Seit 17. Dezember 2023 alle Unternehmen ab 50 Mitarbeitern in Deutschland. Seit 2. Juli 2023 gilt es für Unternehmen ab 250 Mitarbeitern.",
        },
      },
      {
        "@type": "Question",
        name: "Was passiert bei Verstößen gegen das HinSchG?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bußgelder bis zu 20.000 € für fehlende Meldestellen, bis zu 50.000 € bei Repressalien gegen Hinweisgeber.",
        },
      },
      {
        "@type": "Question",
        name: "Ist VoxWel HinSchG-konform?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. VoxWel erfüllt alle 6 Anforderungen: anonymer Kanal, 7-Tage-Bestätigung, bidirektionale Kommunikation, 3-Monats-Rückmeldung, Repressalienschutz und DSGVO-konforme Datenspeicherung.",
        },
      },
      {
        "@type": "Question",
        name: "Wie schnell kann VoxWel eingerichtet werden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unter 24 Stunden, kein IT-Projekt erforderlich. QR-Code und Weblink sofort einsatzbereit. 14-Tage-Testversion, keine Kreditkarte erforderlich.",
        },
      },
    ],
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
        {/* ── COMPLIANCE ALERT BANNER ── */}
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-5xl mx-auto px-6 py-3 flex items-start gap-3">
            <span className="text-amber-600 text-lg mt-0.5 shrink-0">⚠</span>
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>HinSchG-Pflicht gilt seit dem 17. Dezember 2023</strong>{" "}
              für alle Unternehmen ab 50 Mitarbeitern. Bußgelder bis zu{" "}
              <strong>20.000 €</strong>.
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
              Hinweisgebersoftware Preise 2026: Was kostet ein
              HinSchG-konformes System?
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              Hinweisgebersoftware kostet zwischen{" "}
              <strong className="text-white">1 € und 25 €</strong> pro
              Mitarbeiter im Monat. Dieser vollständige Preisvergleich zeigt
              alle Optionen — HinSchG-konform und DSGVO-sicher — bevor Sie
              einen Anbieter kontaktieren.
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

        {/* ── PRICING OVERVIEW TABLE ── */}
        <section id="preisvergleich" className="section-padding bg-background-white px-6">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-text-primary mb-4">
                Preisvergleich: Hinweisgebersoftware in Deutschland 2026
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Alle Lösungstypen im Überblick — von kostenlos bis Enterprise —
                mit HinSchG-Konformitätsstatus.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-border-light shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-navy text-white">
                    <th className="text-left px-5 py-4 font-semibold">
                      Lösungstyp
                    </th>
                    <th className="text-left px-5 py-4 font-semibold">
                      Monatlich
                    </th>
                    <th className="text-left px-5 py-4 font-semibold">
                      Jährlich (gesamt)
                    </th>
                    <th className="text-left px-5 py-4 font-semibold">
                      HinSchG
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* VoxWel — highlighted */}
                  <tr className="border-t border-border-light bg-primary-teal/5">
                    <td className="px-5 py-4 font-medium text-text-primary">
                      VoxWel (Digital)
                      <span className="ml-2 text-xs bg-primary-teal text-white px-2 py-0.5 rounded-full">
                        Empfohlen
                      </span>
                    </td>
                    <td className="px-5 py-4 font-semibold text-primary-teal">
                      ~92 €
                    </td>
                    <td className="px-5 py-4 font-semibold text-primary-teal">
                      ~1.100 €
                    </td>
                    <td className="px-5 py-4 font-semibold text-primary-teal">
                      ✓ Vollständig
                    </td>
                  </tr>

                  {/* Mittelklasse */}
                  <tr className="border-t border-border-light bg-background-white">
                    <td className="px-5 py-4 font-medium text-text-primary">
                      Mittelklasse-Plattformen
                      <span className="block text-xs text-text-tertiary font-normal mt-0.5">
                        FaceUp, Whistlelink
                      </span>
                    </td>
                    <td className="px-5 py-4 text-text-secondary">
                      200–500 €
                    </td>
                    <td className="px-5 py-4 text-text-secondary">
                      2.900–7.000 €
                    </td>
                    <td className="px-5 py-4 text-text-secondary">
                      ✓ Vollständig
                    </td>
                  </tr>

                  {/* Traditionelle Hotlines */}
                  <tr className="border-t border-border-light bg-background-softGray/40">
                    <td className="px-5 py-4 font-medium text-text-primary">
                      Traditionelle Hotlines
                    </td>
                    <td className="px-5 py-4 text-text-secondary">
                      500–2.000 €
                    </td>
                    <td className="px-5 py-4 text-text-secondary">
                      7.000–25.000 €
                    </td>
                    <td className="px-5 py-4 text-status-warning font-medium">
                      ⚠ Teilweise
                    </td>
                  </tr>

                  {/* Enterprise */}
                  <tr className="border-t border-border-light bg-background-white">
                    <td className="px-5 py-4 font-medium text-text-primary">
                      Enterprise-Suiten
                      <span className="block text-xs text-text-tertiary font-normal mt-0.5">
                        NAVEX, OneTrust
                      </span>
                    </td>
                    <td className="px-5 py-4 text-text-secondary">
                      1.000–5.000 €+
                    </td>
                    <td className="px-5 py-4 text-text-secondary">
                      15.000–70.000 €+
                    </td>
                    <td className="px-5 py-4 text-text-secondary">
                      ✓ Vollständig
                    </td>
                  </tr>

                  {/* DIY */}
                  <tr className="border-t border-border-light bg-background-softGray/40">
                    <td className="px-5 py-4 font-medium text-text-primary">
                      E-Mail / Briefkasten (DIY)
                    </td>
                    <td className="px-5 py-4 text-text-secondary">~0 €</td>
                    <td className="px-5 py-4 text-text-secondary">~0 €</td>
                    <td className="px-5 py-4 text-status-error font-medium">
                      ✗ Nicht konform
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-text-tertiary text-center">
              Richtwerte 2026. Preise können je nach Mitarbeiterzahl und
              gewählten Optionen abweichen.
            </p>
          </div>
        </section>

        {/* ── HINSCHG COMPLIANCE CHECKLIST ── */}
        <section className="section-padding bg-background-softGray px-6">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-text-primary mb-4">
                HinSchG-Compliance-Checkliste: Was Ihr System können muss
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Das Hinweisgeberschutzgesetz definiert sechs technische und
                organisatorische Mindestanforderungen. VoxWel erfüllt sie alle.
              </p>
            </div>
            <div className="grid gap-5">
              {[
                {
                  paragraph: "§16 Abs. 1",
                  title: "Anonymer Meldekanal",
                  description:
                    "Hinweisgeber müssen die Möglichkeit haben, anonym Meldungen einzureichen. Eine einfache E-Mail-Adresse genügt nicht.",
                  implementation:
                    "AES-256 Client-Side-Verschlüsselung, keine IP-Speicherung – technisch unmöglich zu identifizieren.",
                },
                {
                  paragraph: "§17 Abs. 1 Nr. 3",
                  title: "Eingangsbestätigung binnen 7 Tagen",
                  description:
                    "Der Hinweisgeber muss innerhalb von sieben Tagen eine Bestätigung des Eingangs seiner Meldung erhalten.",
                  implementation:
                    "Automatische Eingangsbestätigung wird in Minuten zugestellt – nicht erst nach Tagen.",
                },
                {
                  paragraph: "§17 Abs. 1 Nr. 4",
                  title: "Bidirektionale Kommunikation",
                  description:
                    "Das System muss eine anonyme Rückfragen-Kommunikation zwischen Meldestelle und Hinweisgeber ermöglichen.",
                  implementation:
                    "Anonymes Zwei-Wege-Messaging: Rückfragen stellen, Dokumente austauschen – ohne Identitätsoffenbarung.",
                },
                {
                  paragraph: "§17 Abs. 2",
                  title: "Rückmeldung innerhalb von 3 Monaten",
                  description:
                    "Der Hinweisgeber muss innerhalb von drei Monaten nach der Eingangsbestätigung über ergriffene Maßnahmen informiert werden.",
                  implementation:
                    "7-stufiger Workflow mit automatischem Fristtracking und Erinnerungen für Fallbearbeiter.",
                },
                {
                  paragraph: "§36 HinSchG",
                  title: "Repressalienverbot dokumentiert",
                  description:
                    "Repressalien gegen Hinweisgeber sind verboten. Die Einhaltung muss nachweisbar dokumentiert werden.",
                  implementation:
                    "Compliance-Dokumentationspaket inklusive – vollständiger Audit-Trail für jeden Fall.",
                },
                {
                  paragraph: "DSGVO / BDSG",
                  title: "DSGVO-konforme Datenspeicherung",
                  description:
                    "Alle personenbezogenen Daten müssen DSGVO-konform verarbeitet und gespeichert werden.",
                  implementation:
                    "EU-Server, DPIA-Vorlage auf Anfrage, automatische Löschfristen nach gesetzlichen Vorgaben.",
                },
              ].map((req) => (
                <div
                  key={req.paragraph}
                  className="bg-background-white rounded-xl p-6 border border-border-light shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 bg-status-success-light rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-status-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-mono text-primary-teal bg-primary-teal/10 px-2 py-0.5 rounded shrink-0">
                          {req.paragraph}
                        </span>
                        <h3 className="font-semibold text-text-primary text-sm">
                          {req.title}
                        </h3>
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed mb-3">
                        {req.description}
                      </p>
                      <div className="border-l-4 border-primary-teal bg-primary-teal/5 rounded-r-lg px-4 py-3">
                        <p className="text-sm text-text-secondary leading-relaxed">
                          <span className="font-semibold text-primary-teal">
                            VoxWel-Umsetzung:{" "}
                          </span>
                          {req.implementation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ROI SECTION ── */}
        <section className="section-padding bg-background-white px-6">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-text-primary mb-4">
                Die eigentliche Frage: Was kostet kein System?
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Die Kosten eines Compliance-Verstoßes übersteigen die
                Investition in ein System bei weitem. Hier sind die Zahlen.
              </p>
            </div>

            {/* Metric Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  metric: "70.000 €",
                  label: "Durchschnittliche Kosten einer Belästigungsklage",
                  source: "Quelle: EEOC",
                },
                {
                  metric: "110.000 €",
                  label: "Medianschaden pro Betrugsfall",
                  source: "Quelle: ACFE 2024",
                },
                {
                  metric: "1,5×",
                  label: "Fluktuationskosten bei toxischer Kultur",
                  source: "Quelle: McKinsey (× Jahresgehalt)",
                },
              ].map((card) => (
                <div
                  key={card.metric}
                  className="bg-background-softGray rounded-2xl p-8 text-center border border-border-light"
                >
                  <div className="text-4xl font-extrabold text-status-error mb-2">
                    {card.metric}
                  </div>
                  <p className="text-text-primary font-semibold text-sm mb-2 leading-snug">
                    {card.label}
                  </p>
                  <p className="text-text-tertiary text-xs">{card.source}</p>
                </div>
              ))}
            </div>

            {/* Break-even Table */}
            <div className="overflow-x-auto rounded-2xl border border-border-light shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-navy text-white">
                    <th className="text-left px-5 py-4 font-semibold">
                      Szenario
                    </th>
                    <th className="text-left px-5 py-4 font-semibold">
                      Verhinderte Kosten
                    </th>
                    <th className="text-left px-5 py-4 font-semibold">
                      VoxWel-Kosten/Jahr
                    </th>
                    <th className="text-left px-5 py-4 font-semibold">ROI</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      scenario: "1 verhinderte Belästigungsklage",
                      prevented: "70.000 €",
                      cost: "1.100 €",
                      roi: "63:1",
                    },
                    {
                      scenario: "1 früher erkannter Betrugsfall",
                      prevented: "220.000 €",
                      cost: "1.100 €",
                      roi: "200:1",
                    },
                    {
                      scenario: "3 verhinderte Mitarbeiterabgänge",
                      prevented: "112.500 €",
                      cost: "1.100 €",
                      roi: "102:1",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.scenario}
                      className={`border-t border-border-light ${i % 2 === 0 ? "bg-background-white" : "bg-background-softGray/40"}`}
                    >
                      <td className="px-5 py-4 font-medium text-text-primary">
                        {row.scenario}
                      </td>
                      <td className="px-5 py-4 text-text-secondary">
                        {row.prevented}
                      </td>
                      <td className="px-5 py-4 text-text-secondary">
                        {row.cost}
                      </td>
                      <td className="px-5 py-4 font-bold text-status-success">
                        {row.roi}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION ── */}
        <section className="section-padding bg-background-softGray px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-text-primary mb-4">
                Häufige Fragen
              </h2>
              <p className="text-text-secondary text-lg">
                Antworten auf die wichtigsten Fragen rund um
                Hinweisgebersoftware-Preise und HinSchG-Konformität.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Was kostet Hinweisgebersoftware in Deutschland?",
                  a: "Zwischen 1 € und 25 € pro Mitarbeiter/Monat. VoxWel kostet ~92 €/Monat für 100 Mitarbeiter ohne Einrichtungsgebühr. Traditionelle Telefonhotlines kosten 500–2.000 €/Monat, bieten aber oft keinen vollständigen HinSchG-Schutz.",
                },
                {
                  q: "Welche Unternehmen müssen das HinSchG einhalten?",
                  a: "Seit 17. Dezember 2023 alle Unternehmen ab 50 Mitarbeitern in Deutschland. Für Unternehmen ab 250 Mitarbeitern gilt das Gesetz bereits seit 2. Juli 2023. Die Pflicht betrifft privatwirtschaftliche Unternehmen, Behörden und kommunale Einrichtungen.",
                },
                {
                  q: "Was passiert bei Verstößen gegen das HinSchG?",
                  a: "Bußgelder bis zu 20.000 € für fehlende oder unzureichende Meldestellen. Bei nachgewiesenen Repressalien gegen Hinweisgeber können Bußgelder bis zu 50.000 € verhängt werden. Hinzukommen Reputationsschäden und zivilrechtliche Haftungsrisiken.",
                },
                {
                  q: "Ist VoxWel HinSchG-konform?",
                  a: "Ja. VoxWel erfüllt alle 6 gesetzlichen Anforderungen: anonymer Meldekanal (§16 Abs. 1), automatische 7-Tage-Bestätigung (§17 Abs. 1 Nr. 3), bidirektionale anonyme Kommunikation (§17 Abs. 1 Nr. 4), Rückmeldung innerhalb 3 Monaten (§17 Abs. 2), dokumentierter Repressalienschutz (§36 HinSchG) und DSGVO-konforme Datenspeicherung.",
                },
                {
                  q: "Wie schnell kann VoxWel eingerichtet werden?",
                  a: "Unter 24 Stunden – kein IT-Projekt erforderlich. Sie erhalten sofort einen QR-Code und einen Weblink, den Sie an Ihre Mitarbeiter verteilen können. 14-Tage-Testversion verfügbar, keine Kreditkarte erforderlich, monatlich kündbar.",
                },
                {
                  q: "Kann ich meine bestehende E-Mail-Adresse als Meldekanal nutzen?",
                  a: "Nein. Eine E-Mail erfüllt HinSchG §16 nicht — keine technische Anonymität, kein DSGVO-konformer Audit-Trail, keine bidirektionale anonyme Kommunikation. Eine dedizierte Software-Lösung ist gesetzlich vorgeschrieben.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group bg-background-white border border-border-light rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-text-primary hover:bg-background-softGray/60 transition-colors list-none">
                    <span className="text-sm leading-snug pr-4">{faq.q}</span>
                    <span className="shrink-0 text-primary-teal text-xl font-light group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="section-padding bg-primary-teal/10 px-6">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-6">
                HinSchG-konform in unter 24 Stunden
              </h2>

              {/* Stat Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {[
                  { label: "Preis", value: "~92 €/Monat", sub: "(100 MA)" },
                  { label: "Einrichtung", value: "Unter 24 Stunden", sub: "kein IT-Projekt" },
                  { label: "Vertragslaufzeit", value: "Monatlich kündbar", sub: "keine Bindung" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-background-white rounded-xl p-5 border border-border-light"
                  >
                    <p className="text-text-tertiary text-xs font-semibold uppercase tracking-wider mb-1">
                      {stat.label}
                    </p>
                    <p className="text-text-primary font-extrabold text-lg leading-tight">
                      {stat.value}
                    </p>
                    <p className="text-text-tertiary text-xs mt-0.5">
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="/demo"
                className="inline-block bg-primary-teal hover:opacity-90 text-white font-bold px-10 py-5 rounded-xl transition-all shadow-lg text-lg mb-4"
              >
                14 Tage kostenlos testen — keine Kreditkarte erforderlich
              </a>

              <p className="text-text-tertiary text-sm mt-4">
                Ohne Einrichtungsgebühr · Monatlich kündbar · DSGVO-konform.{" "}
                <a
                  href="/gdpr"
                  className="underline hover:text-primary-teal transition-colors"
                >
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

import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const siteUrl = "https://voxwel.com";
const pageUrl = `${siteUrl}/fr/logiciel-lancement-alerte`;
// Closest English equivalent: the homepage ("whistleblowing software").
const enUrl = siteUrl;

const title = "Logiciel d'alerte conforme : prix et obligations 2026";
const description =
  "Logiciel de lancement d'alerte pour les entreprises de 50 salariés et plus : obligations (loi Waserman, Directive 2019/1937), prix moyens 2026 et canal anonyme dès 1 USD par salarié.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: pageUrl,
    languages: { fr: pageUrl, en: enUrl, "x-default": enUrl },
  },
  openGraph: {
    title: `${title} | VoxWel`,
    description,
    url: pageUrl,
    locale: "fr_FR",
    images: [
      {
        url: "https://voxwel.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "VoxWel logiciel de lancement d'alerte",
      },
    ],
    type: "website",
    siteName: "VoxWel",
  },
};

/* ── Contenu ─────────────────────────────────────────────────────────────
 * Faits juridiques vérifiés auprès de service-public, Lefebvre Dalloz et
 * CMS (nov. 2026). Faire relire toute modification par une personne
 * francophone connaissant le droit des lanceurs d'alerte.
 */

const obligations = [
  {
    ref: "Loi Sapin II, art. 8",
    title: "Procédure interne obligatoire dès 50 salariés",
    law: "Toute entreprise d'au moins 50 salariés doit établir une procédure interne de recueil et de traitement des signalements, après consultation du CSE. Les entreprises de moins de 250 salariés peuvent la mutualiser.",
    voxwel: "Fournit le canal de signalement numérique et la gestion des dossiers. Vous désignez les personnes chargées du traitement.",
  },
  {
    ref: "Décret n° 2022-1284",
    title: "Accusé de réception sous 7 jours ouvrés",
    law: "L'auteur du signalement reçoit un accusé de réception écrit dans un délai de sept jours ouvrés.",
    voxwel: "Accusé de réception automatique dès la soumission, avec rappels de délais pour les gestionnaires.",
  },
  {
    ref: "Décret n° 2022-1284",
    title: "Retour d'information sous 3 mois",
    law: "L'auteur du signalement est informé, dans un délai raisonnable n'excédant pas trois mois à compter de l'accusé de réception, des mesures envisagées ou prises.",
    voxwel: "Workflow en 7 étapes avec suivi automatique des échéances et messagerie anonyme bidirectionnelle.",
  },
  {
    ref: "Directive 2019/1937, art. 9 et 16",
    title: "Confidentialité de l'identité",
    law: "Le canal doit garantir la confidentialité de l'identité de l'auteur du signalement, des personnes visées et des tiers mentionnés.",
    voxwel: "Signalements chiffrés sur l'appareil (AES-256), signalement anonyme possible, accès par rôle et journal d'audit horodaté.",
  },
  {
    ref: "Directive 2019/1937, art. 18",
    title: "Conservation et traçabilité",
    law: "Les signalements doivent être enregistrés et conservés de manière à respecter la confidentialité, sans être gardés plus longtemps que nécessaire.",
    voxwel: "Historique complet de chaque dossier et durées de conservation paramétrables, conformément au RGPD.",
  },
  {
    ref: "Code du travail, art. L1321-2",
    title: "Règlement intérieur",
    law: "Depuis le 1er septembre 2022, le règlement intérieur des entreprises d'au moins 50 salariés doit mentionner le dispositif de protection des lanceurs d'alerte.",
    voxwel: "Le lien et le QR code VoxWel peuvent être référencés directement dans votre procédure et votre règlement intérieur.",
  },
];

const pricingRows = [
  { name: "VoxWel", note: "Canal numérique + gestion des dossiers", monthly: "100 USD", channel: "Écrit (web, QR code)", highlight: true },
  { name: "Plateformes de milieu de gamme", note: "ex. FaceUp, Whistlelink", monthly: "env. 150–400 €", channel: "Écrit, parfois message vocal" },
  { name: "Hotline téléphonique externalisée", note: "avec centre d'appels", monthly: "env. 500–2 000 €", channel: "Oral" },
  { name: "Suites enterprise", note: "ex. EQS, NAVEX", monthly: "sur devis, souvent 1 000 €+", channel: "Écrit et oral" },
];

const sanctions = [
  { metric: "1 an + 15 000 €", label: "d'amende pour toute personne faisant obstacle à la transmission d'un signalement", source: "Loi Sapin II, art. 13" },
  { metric: "60 000 €", label: "d'amende civile en cas de procédure abusive ou dilatoire contre un lanceur d'alerte", source: "Loi Waserman (2022)" },
  { metric: "43 %", label: "des fraudes internes sont détectées grâce à un signalement (perte médiane : 145 000 USD par cas)", source: "ACFE, Occupational Fraud 2024" },
];

const faqs = [
  {
    q: "Quel est le prix moyen d'un logiciel d'alerte conforme à la directive européenne ?",
    a: "Il n'existe pas de prix moyen officiel, car beaucoup d'éditeurs ne publient pas leurs tarifs. À titre indicatif, pour 100 salariés, comptez environ 100 à 400 € par mois pour une solution numérique et davantage pour une suite enterprise. VoxWel coûte 1 USD par salarié et par mois, soit 100 USD pour 100 salariés, sans frais d'installation.",
  },
  {
    q: "Combien coûte une plateforme d'alerte pour une grande entreprise ?",
    a: "Les suites enterprise sont généralement vendues sur devis, avec des frais de mise en place et un engagement annuel ou pluriannuel. Selon notre observation du marché, le budget annuel dépasse souvent 12 000 €. Demandez toujours un devis écrit pour votre effectif.",
  },
  {
    q: "Quelles entreprises doivent mettre en place un canal de signalement ?",
    a: "Toute entreprise employant au moins 50 salariés doit disposer d'une procédure interne de recueil et de traitement des signalements. L'obligation existe depuis la loi Sapin II et a été renforcée par la loi Waserman du 21 mars 2022, entrée en vigueur le 1er septembre 2022, puis précisée par le décret du 3 octobre 2022.",
  },
  {
    q: "Quelles sanctions en cas d'obstacle au signalement ?",
    a: "Faire obstacle à la transmission d'un signalement est puni d'un an d'emprisonnement et de 15 000 € d'amende. Une procédure abusive ou dilatoire contre un lanceur d'alerte peut entraîner une amende civile pouvant atteindre 60 000 €.",
  },
  {
    q: "Les signalements anonymes sont-ils autorisés ?",
    a: "Oui. Les signalements anonymes peuvent être reçus et traités. Une personne ayant signalé anonymement puis identifiée ultérieurement bénéficie de la protection prévue pour les lanceurs d'alerte (Directive 2019/1937, art. 6).",
  },
  {
    q: "Quels fournisseurs proposent des canaux de signalement multilingues ?",
    a: "La plupart des plateformes numériques proposent un formulaire en plusieurs langues. Vérifiez aussi que les échanges avec l'auteur du signalement et les rappels de délais fonctionnent dans chaque langue. Le formulaire VoxWel est disponible dans plus de 200 langues.",
  },
  {
    q: "Un logiciel de signalement doit-il être certifié par la CNIL ?",
    a: "Non, la CNIL ne délivre pas de certification pour ces logiciels. Elle publie un référentiel sur les dispositifs d'alerte professionnelle. Le dispositif doit respecter le RGPD : minimisation des données, durées de conservation limitées, sécurité et droits des personnes concernées.",
  },
  {
    q: "VoxWel couvre-t-il tous les canaux de signalement ?",
    a: "VoxWel couvre le canal écrit (web et QR code, 24 h/24), le signalement anonyme, l'accusé de réception, les échanges anonymes et le suivi des délais. Si votre procédure prévoit des signalements oraux (téléphone ou entretien), organisez-les en complément, par exemple avec la ligne directe de la personne référente.",
  },
  {
    q: "En combien de temps VoxWel est-il opérationnel ?",
    a: "En général en moins de 24 heures, sans projet informatique. Vous recevez un lien et un QR code à diffuser à vos salariés. Essai gratuit de 14 jours, sans carte bancaire.",
  },
];

const sources = [
  { label: "Service-public.fr : loi Waserman et protection des lanceurs d'alerte", href: "https://entreprendre.service-public.gouv.fr/actualites/A15838" },
  { label: "Lefebvre Dalloz : les lanceurs d'alerte mieux protégés", href: "https://open.lefebvre-dalloz.fr/actualites/droit-social/lanceurs-alerte-mieux-proteges_fb19d809c-9614-4bda-916d-efd6b70641db" },
  { label: "CMS : impacts de la loi du 21 mars 2022 pour les entreprises", href: "https://cms.law/en/fra/legal-updates/lanceurs-d-alerte-quels-sont-les-impacts-de-la-loi-du-21-mars-2022-pour-les-entreprises" },
  { label: "ACFE : Occupational Fraud 2024 – A Report to the Nations", href: "https://legacy.acfe.com/report-to-the-nations/2024/" },
];

export default function LogicielLancementAlertePage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url: pageUrl,
    inLanguage: "fr",
    description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#software` },
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "fr",
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
        {/* ── RAPPEL ── */}
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-5xl mx-auto px-6 py-3 flex items-start gap-3">
            <span className="text-amber-600 text-lg mt-0.5 shrink-0">⚠</span>
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Obligation légale :</strong> toute entreprise d&apos;au moins 50
              salariés doit disposer d&apos;une procédure interne de recueil des
              signalements (loi Sapin II, renforcée par la loi Waserman depuis le
              1er septembre 2022).
            </p>
          </div>
        </div>

        {/* ── HERO ── */}
        <section className="bg-primary-navy text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
              France · Loi Waserman · Directive 2019/1937 · RGPD
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-white">
              Logiciel de lancement d&apos;alerte conforme pour les entreprises françaises
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              Un canal de signalement anonyme et chiffré, avec accusé de réception,
              échanges anonymes et suivi des délais. Opérationnel en moins de 24
              heures, à partir de <strong className="text-white">1 USD par salarié et par mois</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo"
                className="bg-primary-teal hover:opacity-90 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg text-lg"
              >
                Planifier une démonstration
              </a>
              <a
                href="#tarifs"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all text-lg"
              >
                Voir les tarifs →
              </a>
            </div>
          </div>
        </section>

        {/* ── OBLIGATIONS ── */}
        <section className="section-padding bg-background-softGray px-6">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-text-primary mb-4">
                Ce que la loi exige, et ce que VoxWel couvre
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Les principales obligations pour une procédure interne de signalement en France.
              </p>
            </div>
            <div className="grid gap-5">
              {obligations.map((o) => (
                <div key={o.title} className="bg-background-white rounded-xl p-6 border border-border-light shadow-sm">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-primary-teal bg-primary-teal/10 px-2 py-0.5 rounded shrink-0">
                      {o.ref}
                    </span>
                    <h3 className="font-semibold text-text-primary text-sm">{o.title}</h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-3">{o.law}</p>
                  <div className="border-l-4 border-primary-teal bg-primary-teal/5 rounded-r-lg px-4 py-3">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      <span className="font-semibold text-primary-teal">VoxWel : </span>
                      {o.voxwel}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TARIFS ── */}
        <section id="tarifs" className="section-padding bg-background-white px-6">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-text-primary mb-4">
                Combien coûte un logiciel d&apos;alerte ? Ordres de grandeur pour 100 salariés
              </h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-border-light shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-navy text-white">
                    <th className="text-left px-5 py-4 font-semibold">Type de solution</th>
                    <th className="text-left px-5 py-4 font-semibold">Tarif mensuel</th>
                    <th className="text-left px-5 py-4 font-semibold">Canaux couverts</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row, i) => (
                    <tr
                      key={row.name}
                      className={`border-t border-border-light ${
                        row.highlight ? "bg-primary-teal/5" : i % 2 === 0 ? "bg-background-white" : "bg-background-softGray/40"
                      }`}
                    >
                      <td className="px-5 py-4 font-medium text-text-primary">
                        {row.name}
                        <span className="block text-xs text-text-tertiary font-normal mt-0.5">{row.note}</span>
                      </td>
                      <td className={`px-5 py-4 ${row.highlight ? "font-semibold text-primary-teal" : "text-text-secondary"}`}>
                        {row.monthly}
                      </td>
                      <td className="px-5 py-4 text-text-secondary">{row.channel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-text-tertiary text-center">
              Ordres de grandeur selon notre observation du marché, 2026. Beaucoup
              d&apos;éditeurs ne publient pas leurs prix : demandez un devis écrit.
              VoxWel est facturé en dollars américains, sans frais d&apos;installation.
            </p>
          </div>
        </section>

        {/* ── SANCTIONS ── */}
        <section className="section-padding bg-background-softGray px-6">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-text-primary mb-4">
                Les risques d&apos;un dispositif défaillant
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {sanctions.map((s) => (
                <div key={s.label} className="bg-background-white rounded-2xl p-8 text-center border border-border-light">
                  <div className="text-3xl font-extrabold text-status-error mb-2">{s.metric}</div>
                  <p className="text-text-primary font-semibold text-sm mb-2 leading-snug">{s.label}</p>
                  <p className="text-text-tertiary text-xs">Source : {s.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section-padding bg-background-white px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-text-primary mb-4">
                Questions fréquentes sur le logiciel de lancement d&apos;alerte
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="group bg-background-white border border-border-light rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-text-primary hover:bg-background-softGray/60 transition-colors list-none">
                    <span className="text-sm leading-snug pr-4">{faq.q}</span>
                    <span className="shrink-0 text-primary-teal text-xl font-light group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-lg font-bold text-text-primary mb-3">Sources</h2>
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
                Information générale, ne constitue pas un conseil juridique.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-padding bg-primary-teal/10 px-6">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-6">
                Votre canal de signalement opérationnel en moins de 24 heures
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                1 USD par salarié et par mois. Sans frais d&apos;installation. Essai gratuit de 14 jours, sans carte bancaire.
              </p>
              <a
                href="/demo"
                className="inline-block bg-primary-teal hover:opacity-90 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg text-lg"
              >
                Planifier une démonstration gratuite
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

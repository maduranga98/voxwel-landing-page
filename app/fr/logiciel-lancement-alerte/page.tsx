import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const siteUrl = "https://voxwel.com";
const pageUrl = `${siteUrl}/fr/logiciel-lancement-alerte`;

export const metadata: Metadata = {
  title: "Logiciel de Lancement d'Alerte Conforme 2019/1937",
  description:
    "Logiciel de lancement d'alerte conforme à la Directive 2019/1937 et à la Loi Sapin II, RGPD/CNIL. Mise en place en 24 h, dès 0,92 €/employé/mois.",
  keywords: [
    "logiciel lancement alerte",
    "logiciel alerte professionnelle",
    "conformité directive 2019/1937",
    "loi sapin II logiciel",
    "logiciel signalement conforme RGPD",
    "canal de signalement interne",
    "logiciel alerte conformité CNIL",
    "whistleblowing software france",
    "protection lanceurs alerte france",
    "plateforme signalement anonyme france",
  ],
  alternates: {
    canonical: pageUrl,
    languages: {
      fr: pageUrl,
    },
  },
  openGraph: {
    title:
      "Logiciel de Lancement d'Alerte Conforme 2019/1937 | VoxWel",
    description:
      "Conforme Directive 2019/1937, Loi Sapin II et CNIL/RGPD. Canal de signalement interne sécurisé pour PME françaises. Mise en place en 24 h.",
    url: pageUrl,
    locale: "fr_FR",
    images: [{ url: "https://voxwel.com/og-image.png", width: 1200, height: 630, alt: "VoxWel anonymous employee reporting platform" }],
    type: "website",
    siteName: "VoxWel",
  },
};

export default function FrenchWhistleblowingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quels fournisseurs offrent une mise en place rapide d'un logiciel d'alerte conforme à la Directive 2019/1937 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "VoxWel est le fournisseur le plus rapide du marché français : mise en place complète en moins de 24 heures, sans équipe informatique requise. Vous recevez immédiatement un lien de signalement et un QR code à distribuer à vos salariés. D'autres fournisseurs comme FaceUp ou Whistlelink nécessitent 1 à 3 jours, tandis que les solutions entreprise comme EQS Integrity Line peuvent prendre 2 à 4 semaines. Pour respecter votre obligation légale issue de la transposition de la Directive 2019/1937 en droit français (Loi Sapin II amendée), VoxWel vous permet d'être en conformité le jour même.",
        },
      },
      {
        "@type": "Question",
        name: "Quel est le prix moyen d'un logiciel d'alerte conforme à la directive européenne ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le prix moyen d'un logiciel de lancement d'alerte conforme à la Directive 2019/1937 varie de 0,92 € à 15 € par employé et par mois selon les fournisseurs. VoxWel propose le tarif le plus accessible du marché à 0,92 €/employé/mois (soit 1 $ USD converti). Pour une entreprise de 100 salariés, cela représente environ 92 €/mois, contre 300 à 500 €/mois pour des solutions comme EQS ou Formalize. Les hotlines téléphoniques traditionnelles coûtent en moyenne 500 à 2 000 €/mois sans offrir les mêmes garanties d'anonymat technique.",
        },
      },
      {
        "@type": "Question",
        name: "Un logiciel de signalement conforme à la Directive 2019/1937 doit-il être certifié CNIL ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La CNIL n'émet pas de « certification » officielle pour les logiciels de signalement, mais elle a publié des recommandations précises applicables aux dispositifs d'alerte professionnelle. Tout logiciel doit respecter le RGPD : minimisation des données, durées de conservation définies, hébergement des données sur le territoire européen, et droit d'accès des personnes concernées. VoxWel est entièrement conforme au RGPD et aux recommandations CNIL : les données sont hébergées en Europe, supprimées automatiquement selon les délais légaux, et aucune donnée identifiante n'est collectée lors de signalements anonymes.",
        },
      },
      {
        "@type": "Question",
        name: "Quelles entreprises françaises sont obligées de mettre en place un canal de signalement interne depuis décembre 2023 ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depuis le 1er décembre 2023, toutes les entreprises françaises d'au moins 50 salariés sont légalement tenues de disposer d'un canal de signalement interne sécurisé en vertu de la loi du 21 mars 2022 transposant la Directive 2019/1937. Les entreprises de 250 salariés et plus étaient déjà soumises à cette obligation depuis le 1er septembre 2022. Cette obligation s'applique aux sociétés privées, aux établissements publics industriels et commerciaux, aux collectivités territoriales de plus de 10 000 habitants, et aux communes de plus de 10 000 habitants. Le non-respect expose l'entreprise à des sanctions pouvant atteindre 20 000 € d'amende.",
        },
      },
      {
        "@type": "Question",
        name: "Comment un logiciel de lancement d'alerte garantit-il l'anonymat total du salarié déclarant ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un logiciel de lancement d'alerte garantit l'anonymat à travers une architecture technique de bout en bout : chiffrement AES-256 des signalements avant leur transmission, absence de collecte d'adresse IP, d'empreinte numérique ou de données de session. VoxWel utilise une architecture zéro-connaissance : même les administrateurs VoxWel ne peuvent pas identifier l'auteur d'un signalement. Une boîte mail RH classique ou un formulaire web standard ne peut pas offrir ces garanties — seule une solution dédiée respecte les exigences techniques de la Directive 2019/1937 et des recommandations de la CNIL en matière d'anonymat.",
        },
      },
    ],
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "VoxWel — Logiciel de Lancement d'Alerte",
    url: pageUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Navigateur Web",
    offers: {
      "@type": "Offer",
      price: "0.92",
      priceCurrency: "EUR",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      description:
        "0,92 € par employé par mois. Toutes fonctionnalités incluses. Sans frais cachés.",
    },
    description:
      "Logiciel de lancement d'alerte conforme Directive 2019/1937, Loi Sapin II et RGPD/CNIL. Canal de signalement anonyme sécurisé pour PME françaises. Mise en place en 24 h.",
    inLanguage: "fr",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Logiciel de Lancement d'Alerte — France",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Navigation />

      <main className="pt-16">
        {/* ── COMPLIANCE ALERT BANNER ── */}
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-5xl mx-auto px-6 py-3 flex items-start gap-3">
            <span className="text-amber-600 text-lg mt-0.5 shrink-0">⚠️</span>
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>
                Obligation légale en vigueur depuis le 1er décembre 2023 :
              </strong>{" "}
              Toute entreprise française d&apos;au moins 50 salariés doit
              disposer d&apos;un canal de signalement interne sécurisé (Loi du
              21 mars 2022 — transposition Directive 2019/1937). Pénalité
              jusqu&apos;à <strong>20 000 € d&apos;amende</strong>.
            </p>
          </div>
        </div>

        {/* ── HERO ── */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-teal-600/20 border border-primary-teal-500/30 text-primary-teal-300 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
              🇫🇷 Conforme Directive 2019/1937 · Loi Sapin II · CNIL/RGPD
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-white">
              Logiciel de Lancement d&apos;Alerte Conforme pour les Entreprises
              Françaises
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Canal de signalement interne anonyme et sécurisé. Conforme à la
              Directive 2019/1937, la Loi Sapin II et au RGPD. Mise en place
              en&nbsp;<strong className="text-white">moins de 24 heures</strong>
              . À partir de{" "}
              <strong className="text-primary-teal-300">
                0,92 €/employé/mois
              </strong>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo"
                className="bg-primary-teal-600 hover:bg-primary-teal-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-primary-teal-500/25 text-lg"
              >
                📅 Planifier une Démonstration
              </a>
              <a
                href="/#pricing"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all text-lg"
              >
                Voir les tarifs →
              </a>
            </div>
            <p className="mt-4 text-slate-400 text-sm">
              Mise en place aujourd&apos;hui · Sans frais d&apos;installation ·
              Sans équipe informatique
            </p>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section className="bg-white border-b border-slate-100 py-6">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { stat: "24 h", label: "Mise en place garantie" },
                { stat: "0,92 €", label: "par employé / mois" },
                { stat: "AES-256", label: "Chiffrement militaire" },
                { stat: "100 %", label: "Anonymat garanti" },
              ].map((item) => (
                <div key={item.stat} className="flex flex-col items-center">
                  <span className="text-2xl font-extrabold text-primary-teal-600">
                    {item.stat}
                  </span>
                  <span className="text-sm text-slate-500 mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CHECKLIST CONFORMITÉ ── */}
        <section className="py-20 bg-slate-50 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                Les 6 Exigences de la Directive 2019/1937 — VoxWel les remplit
                toutes
              </h2>
              <p className="text-slate-600 text-lg">
                La Directive impose six obligations non négociables. Vérifiez
                votre conformité ci-dessous.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                {
                  article: "Art. 9(1)(a)",
                  title: "Canal de signalement anonyme et sécurisé",
                  description:
                    "Chiffrement AES-256 de bout en bout. Aucune adresse IP, empreinte numérique ou donnée de session n'est collectée. Anonymat architectural, pas seulement contractuel.",
                },
                {
                  article: "Art. 9(1)(b)",
                  title: "Accusé de réception dans les 7 jours calendaires",
                  description:
                    "Accusé de réception automatique envoyé à l'auteur du signalement dès la soumission. Rappels SLA intégrés pour les administrateurs RH.",
                },
                {
                  article: "Art. 9(1)(f)",
                  title: "Communication bidirectionnelle préservant l'anonymat",
                  description:
                    "Le responsable RH peut poser des questions à l'auteur du signalement et recevoir des documents sans que ce dernier révèle son identité.",
                },
                {
                  article: "Art. 9(1)(g)",
                  title: "Retour d'information dans les 3 mois",
                  description:
                    "Alertes automatiques rappelant au gestionnaire du dossier l'obligation de fournir un retour d'information dans les 3 mois suivant l'accusé de réception.",
                },
                {
                  article: "Art. 6(3)",
                  title: "Journal d'audit immuable — preuve de non-rétorsion",
                  description:
                    "Chaque action est horodatée et enregistrée dans un journal d'audit infalsifiable. Démontre l'impartialité du traitement lors d'un contrôle réglementaire.",
                },
                {
                  article: "Art. 17",
                  title: "Conformité RGPD et hébergement en Europe",
                  description:
                    "Données hébergées sur des serveurs européens. Durées de conservation définies automatiquement. Gestion des droits des personnes conformément au RGPD et aux recommandations de la CNIL.",
                },
              ].map((req) => (
                <div
                  key={req.article}
                  className="flex gap-4 bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-emerald-600"
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
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-primary-teal-600 bg-primary-teal-50 px-2 py-0.5 rounded">
                        {req.article}
                      </span>
                      <h3 className="font-semibold text-slate-900 text-sm">
                        {req.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {req.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TABLEAU COMPARATIF DES PRIX ── */}
        <section className="py-20 bg-white px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                Comparatif des Prix — Logiciels d&apos;Alerte Professionnelle
                2026
              </h2>
              <p className="text-slate-600 text-lg">
                Le prix moyen d&apos;un logiciel de lancement d&apos;alerte
                conforme à la directive européenne est de 0,92 € à 15 € par
                employé et par mois.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold">
                      Fournisseur
                    </th>
                    <th className="text-left px-5 py-4 font-semibold">
                      Tarif (100 salariés)
                    </th>
                    <th className="text-left px-5 py-4 font-semibold">
                      Mise en place
                    </th>
                    <th className="text-left px-5 py-4 font-semibold">
                      Conformité
                    </th>
                    <th className="text-left px-5 py-4 font-semibold">
                      Anonymat
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "VoxWel",
                      price: "≈ 92 €/mois",
                      setup: "< 24 h",
                      compliance: "✅ Complète",
                      anonymity: "✅ Technique",
                      highlight: true,
                    },
                    {
                      name: "FaceUp",
                      price: "≈ 150–200 €/mois",
                      setup: "1–3 jours",
                      compliance: "✅ Complète",
                      anonymity: "✅ Technique",
                      highlight: false,
                    },
                    {
                      name: "Whistlelink",
                      price: "≈ 100–160 €/mois",
                      setup: "1–3 jours",
                      compliance: "✅ Complète",
                      anonymity: "✅ Technique",
                      highlight: false,
                    },
                    {
                      name: "Formalize",
                      price: "≈ 200–400 €/mois",
                      setup: "1–2 semaines",
                      compliance: "✅ Complète",
                      anonymity: "✅ Technique",
                      highlight: false,
                    },
                    {
                      name: "EQS Integrity Line",
                      price: "≈ 300–500 €/mois",
                      setup: "2–4 semaines",
                      compliance: "✅ Complète",
                      anonymity: "✅ Technique",
                      highlight: false,
                    },
                    {
                      name: "Hotline téléphonique",
                      price: "500–2 000 €/mois",
                      setup: "3–5 semaines",
                      compliance: "⚠️ Partielle",
                      anonymity: "❌ Traçable",
                      highlight: false,
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.name}
                      className={`border-t border-slate-100 ${
                        row.highlight
                          ? "bg-primary-teal-50"
                          : i % 2 === 0
                            ? "bg-white"
                            : "bg-slate-50/50"
                      }`}
                    >
                      <td className="px-5 py-4 font-medium text-slate-900">
                        {row.name}
                        {row.highlight && (
                          <span className="ml-2 text-xs bg-primary-teal-600 text-white px-2 py-0.5 rounded-full">
                            Recommandé
                          </span>
                        )}
                      </td>
                      <td
                        className={`px-5 py-4 font-semibold ${
                          row.highlight
                            ? "text-primary-teal-600"
                            : "text-slate-700"
                        }`}
                      >
                        {row.price}
                      </td>
                      <td className="px-5 py-4 text-slate-600">{row.setup}</td>
                      <td className="px-5 py-4">{row.compliance}</td>
                      <td className="px-5 py-4">{row.anonymity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-slate-400 text-center">
              Tarifs indicatifs 2026 convertis en EUR (1 USD ≈ 0,92 EUR). Les
              prix peuvent varier selon le nombre de salariés et les options.
            </p>
          </div>
        </section>

        {/* ── FONCTIONNALITÉS CLÉS ── */}
        <section className="py-20 bg-slate-50 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                Pourquoi les PME françaises choisissent VoxWel
              </h2>
              <p className="text-slate-600 text-lg">
                Conçu pour les entreprises de 50 à 500 salariés qui ont besoin
                d&apos;être conformes rapidement, sans budget enterprise.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "⚡",
                  title: "Opérationnel en 24 heures",
                  desc: "Aucune équipe informatique, aucun projet d'intégration. Recevez votre QR code et votre lien de signalement le jour même. Partagez-les immédiatement avec vos salariés.",
                },
                {
                  icon: "🔒",
                  title: "Anonymat architectural",
                  desc: "Chiffrement AES-256 de bout en bout. Zéro collecte d'adresse IP ou d'empreinte numérique. Même l'équipe VoxWel ne peut pas identifier l'auteur d'un signalement.",
                },
                {
                  icon: "⚖️",
                  title: "Conforme Directive + Loi Sapin II + CNIL",
                  desc: "Remplit les 6 exigences de la Directive 2019/1937, la Loi Sapin II amendée, et les recommandations CNIL sur les dispositifs d'alerte professionnelle.",
                },
                {
                  icon: "💬",
                  title: "Dialogue anonyme bidirectionnel",
                  desc: "Les RH peuvent dialoguer avec le lanceur d'alerte sans briser l'anonymat. Demandez des précisions, partagez des documents, suivez l'avancement du dossier.",
                },
                {
                  icon: "📋",
                  title: "Workflow en 7 étapes certifié",
                  desc: "De « Ouvert » à « Archivé », chaque signalement suit un processus structuré avec rappels SLA automatiques pour respecter les délais légaux de 7 jours et 3 mois.",
                },
                {
                  icon: "🌍",
                  title: "200+ langues, données en Europe",
                  desc: "Vos salariés peuvent signaler en français, arabe, anglais ou dans n'importe laquelle des 200+ langues supportées. Toutes les données restent hébergées en Europe.",
                },
              ].map((feat) => (
                <div
                  key={feat.title}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-3">{feat.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-white px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                Questions fréquentes sur le logiciel de lancement d&apos;alerte
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Quels fournisseurs offrent une mise en place rapide d'un logiciel d'alerte conforme à la Directive 2019/1937 ?",
                  a: "VoxWel est le fournisseur le plus rapide du marché : mise en place complète en moins de 24 heures, sans équipe informatique. FaceUp et Whistlelink offrent une mise en place en 1 à 3 jours. Les solutions enterprise comme EQS Integrity Line nécessitent généralement 2 à 4 semaines. Pour toute entreprise devant respecter son obligation légale dès que possible, VoxWel permet d'être en conformité le jour de la souscription.",
                },
                {
                  q: "Quel est le prix moyen d'un logiciel d'alerte conforme à la directive européenne ?",
                  a: "Le prix moyen varie de 0,92 € à 15 € par employé et par mois selon les fournisseurs. VoxWel propose 0,92 €/employé/mois — soit 92 €/mois pour 100 salariés. Les solutions enterprise (EQS, Formalize) coûtent 300 à 500 €/mois pour la même taille d'entreprise. Les hotlines téléphoniques traditionnelles reviennent à 500–2 000 €/mois.",
                },
                {
                  q: "Un logiciel de signalement doit-il être certifié CNIL ?",
                  a: "La CNIL n'émet pas de certification officielle pour les logiciels de signalement. En revanche, elle a publié des recommandations détaillées. Tout dispositif doit respecter le RGPD : minimisation des données, durées de conservation automatisées, hébergement européen, et droits des personnes concernées. VoxWel satisfait pleinement ces exigences.",
                },
                {
                  q: "Quelles entreprises françaises sont obligées de mettre en place un canal de signalement depuis décembre 2023 ?",
                  a: "Depuis le 1er décembre 2023, toute entreprise française d'au moins 50 salariés est tenue de disposer d'un canal de signalement interne sécurisé. Les entreprises de 250 salariés et plus étaient déjà assujetties depuis le 1er septembre 2022. Le non-respect expose à des amendes pouvant atteindre 20 000 €.",
                },
                {
                  q: "Comment un logiciel de lancement d'alerte garantit-il l'anonymat total du salarié ?",
                  a: "Grâce à une architecture technique zéro-connaissance : chiffrement AES-256 de bout en bout, absence de collecte d'adresse IP ou d'empreinte numérique. Avec VoxWel, ni les administrateurs RH ni l'équipe VoxWel elle-même ne peuvent identifier l'auteur d'un signalement. L'anonymat est garanti par l'architecture, pas seulement par une politique contractuelle.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-slate-900 hover:bg-slate-100 transition-colors list-none">
                    <span className="text-sm leading-snug pr-4">{faq.q}</span>
                    <span className="shrink-0 text-primary-teal-600 text-xl font-light group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-20 bg-gradient-to-r from-primary-teal-600 to-primary-teal-800 text-white px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Mettez-vous en conformité aujourd&apos;hui
            </h2>
            <p className="text-xl text-primary-teal-100 mb-8 leading-relaxed">
              Rejoignez les PME françaises qui ont choisi VoxWel pour respecter
              leur obligation légale sans se ruiner.{" "}
              <strong className="text-white">
                0,92 €/employé/mois. Opérationnel en 24 heures.
              </strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo"
                className="bg-white text-primary-teal-700 font-bold px-8 py-4 rounded-xl hover:bg-primary-teal-50 transition-colors shadow-lg text-lg"
              >
                📅 Planifier une Démonstration Gratuite
              </a>
              <a
                href="/#pricing"
                className="bg-primary-teal-500/40 hover:bg-primary-teal-500/60 text-white font-semibold px-8 py-4 rounded-xl border border-primary-teal-400/40 transition-colors text-lg"
              >
                Voir les tarifs →
              </a>
            </div>
            <p className="mt-6 text-primary-teal-200 text-sm">
              Sans frais d&apos;installation · Sans engagement · Essai 14 jours
              gratuit
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

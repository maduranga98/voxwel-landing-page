"use client";

import Link from "next/link";
import AnchoraLogo from "./AnchoraLogo";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const productLinks = [
  { name: "Features",     href: "/#features" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Security",     href: "/#security" },
  { name: "Pricing",      href: "/#pricing" },
  { name: "Book a Demo",  href: "/demo" },
];

const companyLinks = [
  { name: "About Us",        href: "/about" },
  { name: "Lumora Ventures", href: "/lumora" },
  { name: "Blog",            href: "/blogs" },
  { name: "Contact",         href: "/demo" },
];

const legalLinks = [
  { name: "Privacy Policy",   href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Cookie Policy",    href: "/cookie-policy" },
  { name: "GDPR Compliance",  href: "/gdpr" },
];

function ColLinks({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) =>
          link.href.startsWith("/") ? (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ) : (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                {link.name}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* 4-column grid: 1 col mobile → 2 col sm → 4 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <AnchoraLogo size="small" />
              <span className="text-lg font-bold text-white">VoxWel</span>
            </div>
            <p className="text-white text-sm font-medium leading-snug mb-1">
              Where Every Voice Matters.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-1">
              Anonymous reporting. Military encryption. Complete protection.
            </p>
            <p className="text-slate-500 text-xs mb-5">
              A product of{" "}
              <Link
                href="/lumora"
                className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
              >
                Lumora Ventures
              </Link>
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/voxwel/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61584728859176"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/vox.wel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/voxwel36916"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
            </div>

            {/* Trust signal */}
            <a
              href="https://saasbrowser.com/en/saas/1458861/voxwel"
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://static-files.saasbrowser.com/saas-browser-badge-15.svg"
                alt="VoxWel - SaaS discovery platform"
                width="200"
              />
            </a>
          </div>

          {/* Columns 2–4 */}
          <ColLinks title="Product" links={productLinks} />
          <ColLinks title="Company" links={companyLinks} />
          <ColLinks title="Legal" links={legalLinks} />
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © 2026 VoxWel by Lumora Ventures. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500 flex-wrap justify-center">
            {[
              { label: "Privacy", href: "/privacy-policy" },
              { label: "Terms",   href: "/terms-of-service" },
              { label: "Cookies", href: "/cookie-policy" },
              { label: "GDPR",    href: "/gdpr" },
            ].map((item, i, arr) => (
              <span key={item.label} className="flex items-center gap-4">
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
                {i < arr.length - 1 && <span className="text-slate-700">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

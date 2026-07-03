"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import VoxwelLogo from "@/components/VoxwelLogo";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navLinks = [
    { name: "Why VoxWel", href: "#problem" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Product", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "/blogs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll indicator: track which section is in view
  useEffect(() => {
    if (!isHomePage) return;

    const sectionIds = navLinks
      .filter((l) => l.href.startsWith("#"))
      .map((l) => l.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      if (!isHomePage) {
        window.location.href = `/${href}`;
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        const navbarHeight = window.innerWidth >= 768 ? 64 : 56;
        const offset = 20;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.scrollY - navbarHeight - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href.startsWith("/")) return pathname === href;
    return activeSection === href.slice(1);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? "shadow-sm border-b border-slate-100" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <VoxwelLogo size="small" />
            <Link
              href="/"
              className="text-lg font-bold text-slate-900 hover:text-slate-700 transition-colors"
            >
              VoxWel
            </Link>
          </div>

          {/* Desktop Nav Links — centered */}
          <div className="hidden md:flex items-center gap-7 flex-1 justify-center">
            {navLinks.map((link) => {
              const isPageLink = link.href.startsWith("/");
              const active = isActive(link.href);
              const activeClass = active
                ? "text-indigo-600 font-semibold relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-indigo-600 after:rounded-full"
                : "text-slate-600 hover:text-slate-900";

              if (isPageLink) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative ${activeClass}`}
                  >
                    {link.name}
                  </Link>
                );
              }

              return isHomePage ? (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors relative ${activeClass}`}
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  href={`/${link.href}`}
                  className={`text-sm font-medium transition-colors relative ${activeClass}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center shrink-0">
            <Link
              href="/demo"
              className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
            >
              📅 Schedule a Demo →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden ml-auto p-2 text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-md">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => {
              const isPageLink = link.href.startsWith("/");
              const active = isActive(link.href);
              const activeClass = active
                ? "text-indigo-600 font-semibold bg-indigo-50"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50";

              if (isPageLink) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-sm font-medium px-3 py-2.5 rounded-lg transition-colors ${activeClass}`}
                  >
                    {link.name}
                  </Link>
                );
              }

              return isHomePage ? (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`block w-full text-left text-sm font-medium px-3 py-2.5 rounded-lg transition-colors ${activeClass}`}
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  href={`/${link.href}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-sm font-medium px-3 py-2.5 rounded-lg transition-colors ${activeClass}`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-200">
              <Link
                href="/demo"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-2.5 text-center text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                📅 Schedule a Demo →
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

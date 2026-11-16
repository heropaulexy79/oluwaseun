"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (label: string) => {
    trackEvent("navigation_click", { location: "header", label });
    setMobileMenuOpen(false);
  };

  const whatsappUrl = getWhatsAppUrl({ service: "general" });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-nav)] backdrop-blur-xl border-b border-[var(--border-subtle)] py-3.5 shadow-xl"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus-visible:outline-none"
          aria-label="Oluwaseun - Home"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-white font-mono font-black text-sm flex items-center justify-center shadow-lg shadow-indigo-500/20">
            OS
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base tracking-tight text-white group-hover:text-indigo-400 transition-colors leading-tight">
              Oluwaseun
            </span>
            <span className="text-[11px] text-slate-400 font-sans tracking-normal">
              Software Engineer &amp; AI Consultant
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7">
          <a
            href="#why-partner"
            onClick={() => handleNavClick("Why Partner")}
            className="text-xs uppercase tracking-wider font-mono text-slate-400 hover:text-white transition-colors"
          >
            Why Partner
          </a>
          <a
            href="#work"
            onClick={() => handleNavClick("Work")}
            className="text-xs uppercase tracking-wider font-mono text-slate-400 hover:text-white transition-colors"
          >
            Selected Work
          </a>
          <a
            href="#calculator"
            onClick={() => handleNavClick("Pricing")}
            className="text-xs uppercase tracking-wider font-mono text-slate-400 hover:text-white transition-colors"
          >
            Pricing &amp; Scope
          </a>
          <a
            href="#faq"
            onClick={() => handleNavClick("FAQ")}
            className="text-xs uppercase tracking-wider font-mono text-slate-400 hover:text-white transition-colors"
          >
            FAQ
          </a>
          <a
            href="#contact"
            onClick={() => handleNavClick("Contact")}
            className="text-xs uppercase tracking-wider font-mono text-slate-400 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Action Buttons + Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher Button */}
          <ThemeToggle />

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleNavClick("Header WhatsApp")}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border border-[#25D366]/30 font-sans font-medium text-xs transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#contact"
            onClick={() => handleNavClick("Header Discuss CTA")}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-black font-sans font-semibold text-xs tracking-normal hover:bg-slate-200 transition-all shadow-md active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>

          {/* Mobile Menu Button */}
          <button
            ref={toggleButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2 text-white border border-white/10 rounded-lg bg-white/[0.04]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          ref={mobileMenuRef}
          className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#0B0E14] border-t border-white/10 px-6 py-8 flex flex-col justify-between space-y-6 z-50 overflow-y-auto"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
                Theme &amp; Appearance
              </span>
              <ThemeToggle />
            </div>

            <div className="flex flex-col space-y-4">
              <a
                href="#why-partner"
                onClick={() => handleNavClick("Why Partner")}
                className="text-lg font-heading font-semibold text-white hover:text-indigo-400 transition-colors"
              >
                Why Partner
              </a>
              <a
                href="#work"
                onClick={() => handleNavClick("Work")}
                className="text-lg font-heading font-semibold text-white hover:text-indigo-400 transition-colors"
              >
                Selected Work
              </a>
              <a
                href="#calculator"
                onClick={() => handleNavClick("Pricing")}
                className="text-lg font-heading font-semibold text-white hover:text-indigo-400 transition-colors"
              >
                Pricing &amp; Scope
              </a>
              <a
                href="#faq"
                onClick={() => handleNavClick("FAQ")}
                className="text-lg font-heading font-semibold text-white hover:text-indigo-400 transition-colors"
              >
                FAQ
              </a>
              <a
                href="#contact"
                onClick={() => handleNavClick("Contact")}
                className="text-lg font-heading font-semibold text-white hover:text-indigo-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] text-black font-semibold text-sm"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="#contact"
              onClick={() => handleNavClick("Mobile Start Project")}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-black font-semibold text-sm"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

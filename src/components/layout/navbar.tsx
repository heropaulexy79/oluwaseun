"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

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

  // Handle ESC key to close mobile menu
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0F0E]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/50"
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
          className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9F36A] rounded-md py-1"
          aria-label="Oluwaseun - Home"
        >
          <div className="w-8 h-8 rounded-lg bg-[#181C1A] border border-white/10 flex items-center justify-center font-mono font-bold text-sm text-[#D9F36A] group-hover:border-[#D9F36A]/50 transition-all shadow-inner">
            OS
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-xl tracking-tight text-[#F7F7F4] group-hover:text-white transition-colors leading-none flex items-center gap-1">
              Oluwaseun<span className="text-[#D9F36A] inline-block">.</span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7C8B82] pt-1">
              Engineering Studio
            </span>
          </div>
        </Link>

        {/* Live Cyber Beacon Indicator */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#141816] border border-white/[0.08] text-[11px] font-mono text-[#9EABA2]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9F36A] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D9F36A]" />
          </span>
          <span className="text-white/80">AVAILABLE</span>
          <span className="text-[#55635C]">/</span>
          <span className="text-[#8B9890]">SELECT ENGAGEMENTS</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.label)}
              className="text-xs uppercase tracking-wider font-mono text-[#9EABA2] hover:text-[#D9F36A] transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D9F36A] rounded"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={() => handleNavClick("Discuss a Project CTA")}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D9F36A] text-[#121514] font-bold text-xs uppercase tracking-wider hover:bg-[#CBEA4F] hover:shadow-[0_0_20px_rgba(217,243,106,0.3)] transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9F36A]"
          >
            <span>Discuss Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>

          {/* Mobile Menu Button */}
          <button
            ref={toggleButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden p-2 text-[#F7F7F4] hover:text-[#D9F36A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9F36A] rounded-lg border border-white/10 bg-[#141816]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="md:hidden fixed inset-x-0 top-[60px] bottom-0 bg-[#0D0F0E]/98 backdrop-blur-2xl border-t border-white/10 p-6 flex flex-col justify-between overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-4 pt-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#7C8B82]">
              SYSTEM::NAV
            </span>
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.label)}
                className="text-lg font-medium text-[#F7F7F4] hover:text-[#D9F36A] py-2.5 border-b border-white/[0.06] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 pb-8 border-t border-white/[0.06] flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => handleNavClick("Mobile Discuss CTA")}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#D9F36A] text-[#121514] font-bold text-xs uppercase tracking-wider text-center shadow-[0_0_20px_rgba(217,243,106,0.3)]"
            >
              <span>Discuss Project</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <p className="text-xs font-mono text-center text-[#7C8B82]">
              High-standard Web & AI Automation Engineering.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

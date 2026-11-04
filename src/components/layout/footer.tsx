"use client";

import React, { useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MessageSquare, Terminal, Cpu } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getWhatsAppUrl } from "@/lib/whatsapp";

function getCurrentYear(): string {
  return new Date().getFullYear().toString();
}

function subscribeToYear(cb: () => void) {
  return () => void cb;
}

export function Footer() {
  const currentYear = useSyncExternalStore(
    subscribeToYear,
    getCurrentYear,
    () => "2026"
  );

  const whatsappUrl = getWhatsAppUrl({ service: "general" });

  return (
    <footer className="bg-[#090B0A] text-[#F7F7F4] border-t border-white/[0.08] pt-16 pb-12 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand & positioning */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9F36A] rounded"
            >
              <div className="w-7 h-7 rounded-lg bg-[#141816] border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-[#D9F36A]">
                OS
              </div>
              <span className="font-bold text-xl tracking-tight text-white font-sans">
                Oluwaseun<span className="text-[#D9F36A]">.</span>
              </span>
            </Link>

            <p className="text-xs text-[#8E9B93] max-w-sm leading-relaxed font-sans">
              {siteConfig.supportingCopy}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp message to Oluwaseun"
                className="p-2.5 rounded-xl bg-[#121614] text-[#9EABA2] hover:text-[#25D366] hover:border-[#25D366]/40 border border-white/10 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Oluwaseun on LinkedIn"
                className="p-2.5 rounded-xl bg-[#121614] text-[#9EABA2] hover:text-[#D9F36A] hover:border-[#D9F36A]/40 border border-white/10 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Oluwaseun on GitHub"
                className="p-2.5 rounded-xl bg-[#121614] text-[#9EABA2] hover:text-[#D9F36A] hover:border-[#D9F36A]/40 border border-white/10 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="#contact"
                aria-label="Send project email"
                className="p-2.5 rounded-xl bg-[#121614] text-[#9EABA2] hover:text-[#D9F36A] hover:border-[#D9F36A]/40 border border-white/10 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-[#7C8B82] mb-4">
              SITE::INDEX
            </h3>
            <ul className="space-y-2.5 text-xs text-[#9EABA2]">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="#contact"
                  className="text-[#D9F36A] hover:underline inline-flex items-center gap-1 font-bold"
                >
                  <span>Discuss a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Capabilities Column */}
          <div className="md:col-span-4">
            <h3 className="text-xs uppercase tracking-widest text-[#7C8B82] mb-4">
              SPEC::CAPABILITIES
            </h3>
            <ul className="space-y-3 text-xs text-[#9EABA2]">
              {siteConfig.services.map((svc) => (
                <li key={svc.id}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors block"
                  >
                    <span className="text-white font-medium block">{svc.name}</span>
                    <span className="text-[11px] text-[#7C8B82]">{svc.startingPrice}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7C8B82]">
          <p>© {currentYear} Oluwaseun. Independent Technology Consultancy.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#10B981]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              SYSTEM NODE::LAG-01 ACTIVE
            </span>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Privacy & Data Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

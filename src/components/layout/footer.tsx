"use client";

import React, { useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MessageSquare } from "lucide-react";
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
    <footer className="bg-[#06080B] text-white border-t border-white/10 pt-16 pb-12 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & positioning */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 focus-visible:outline-none"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-white font-mono font-black text-sm flex items-center justify-center">
                OS
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white">
                Oluwaseun
              </span>
            </Link>

            <p className="text-slate-400 max-w-sm leading-relaxed text-sm">
              {siteConfig.supportingCopy}
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp message"
                className="p-2.5 rounded-lg bg-white/[0.04] text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg bg-white/[0.04] text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="#contact"
                aria-label="Send project email"
                className="p-2.5 rounded-lg bg-white/[0.04] text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <a href="#why-partner" className="hover:text-white transition-colors">
                  Why Partner
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Pricing &amp; Scope
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li className="pt-1">
                <a href="#contact" className="text-white hover:underline font-semibold inline-flex items-center gap-1">
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Capabilities Column */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Core Capabilities
            </h3>
            <ul className="space-y-3 text-slate-300">
              {siteConfig.services.map((svc) => (
                <li key={svc.id}>
                  <a href="#calculator" className="hover:text-white transition-colors block">
                    <span className="text-white font-medium block">{svc.name}</span>
                    <span className="text-[11px] text-slate-400 font-mono">{svc.startingPrice}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Oluwaseun. Independent Software Engineering &amp; AI Consultancy.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LAGOS NODE ONLINE
            </span>
            <Link href="/privacy" className="hover:text-white transition-colors underline">
              Privacy &amp; Data Handling
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

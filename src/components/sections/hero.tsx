"use client";

import React from "react";
import { ArrowUpRight, CheckCircle2, MessageSquare, ShieldCheck, Zap } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  const whatsappUrl = getWhatsAppUrl({ service: "general" });

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#0B0E14] text-white hero-glow overflow-hidden border-b border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean, Focused Header Content */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-white">Direct Senior Software Engineer</span>
            <span className="text-white/30">•</span>
            <span>Web Platforms &amp; AI Automations</span>
          </div>

          {/* Clean Master Headline */}
          <h1
            id="hero-heading"
            className="font-heading font-extrabold text-4xl sm:text-6xl tracking-tight text-white leading-[1.12]"
          >
            I build high-converting websites and AI automations that win paying clients.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto">
            I partner directly with founders and ambitious businesses to engineer fast, bespoke web platforms and automated WhatsApp systems that attract clients and save hours of manual work.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-all shadow-lg active:scale-95"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border border-[#25D366]/30 font-semibold text-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* 3 Core Trust Guarantees */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sub-Second Page Loads</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>&lt; 30s WhatsApp Lead Triage</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% IP &amp; Code Ownership</span>
            </div>
          </div>
        </div>

        {/* Clean, Convincing Product Showcase */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="rounded-2xl clean-card overflow-hidden border border-white/10 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs font-mono text-slate-400">client-system.production</span>
              </div>
              <span className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Production Flow
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Left: What the Client Sees */}
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-mono block">
                  01 // High-Converting Web Platform
                </span>
                <h3 className="font-heading text-xl font-bold text-white">
                  Ultra-Fast Digital Storefront
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Engineered with Next.js 16 to achieve 100/100 Google Core Web Vitals, establishing immediate credibility with corporate buyers and eliminating mobile bounce rates.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                  <span className="text-emerald-400 font-bold">LCP: 0.8s</span>
                  <span>•</span>
                  <span>SEO Score: 100/100</span>
                  <span>•</span>
                  <span>Zero Lag</span>
                </div>
              </div>

              {/* Right: The WhatsApp Automation in Action */}
              <div className="p-4 rounded-xl bg-[#0C1210] border border-emerald-500/20 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-2">
                  <span className="text-emerald-400 font-bold">WHATSAPP AI LEAD CLOSER</span>
                  <span className="text-slate-400">&lt; 30s Response</span>
                </div>

                <div className="p-3 rounded-lg bg-[#15201A] text-xs text-slate-200">
                  <span className="text-[10px] text-slate-400 block mb-0.5 font-mono">Inbound Lead:</span>
                  &quot;Hello, we need a corporate client portal with automated quotes for our enterprise firm.&quot;
                </div>

                <div className="p-3 rounded-lg bg-[#0F3622] text-xs text-emerald-100">
                  <span className="text-[10px] text-emerald-300 font-bold block mb-0.5 font-mono">AI Qualified Output:</span>
                  &quot;Welcome! Scope classified: Enterprise Portal. Budget verified: ₦2.5M. Discovery call scheduled directly on executive calendar.&quot;
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, MessageSquare, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  const auditWhatsAppUrl = "https://wa.me/2348033285789?text=Hi%20Oluwaseun%2C%20here%20is%20my%20website%20URL%20for%20a%20free%2015-minute%20conversion%20and%20speed%20audit%3A%20";
  const whatsappUrl = getWhatsAppUrl({ service: "general" });
  
  // Interactive lead simulator tab
  const [activeTab, setActiveTab] = useState<"whatsapp" | "speed">("whatsapp");

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#0B0E14] text-white hero-glow overflow-hidden border-b border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Master Sales Hook Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Eyebrow: Credibility & Guarantee */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-white">Direct Senior Software Engineer</span>
            <span className="text-white/30">•</span>
            <span className="text-emerald-400 font-semibold">14-Day Sprint Delivery</span>
          </div>

          {/* Master Headline: Problem & Outcome Centric */}
          <h1
            id="hero-heading"
            className="font-heading font-extrabold text-4xl sm:text-6xl tracking-tight text-white leading-[1.12]"
          >
            Stop losing high-value clients to slow websites and delayed replies.
          </h1>

          {/* Subtitle: Speed to Cash + Time Reclaimed */}
          <p className="text-lg sm:text-xl text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto">
            I build bespoke, sub-second web platforms and automated 24/7 WhatsApp deal-closers that qualify leads and turn traffic into booked revenue while you sleep.
          </p>

          {/* Action CTAs: Frictionless Closing */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-all shadow-lg active:scale-95"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={auditWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border border-[#25D366]/30 font-semibold text-sm transition-all"
            >
              <Sparkles className="w-4 h-4 fill-current" />
              <span>Free 15-Min System Audit</span>
            </a>
          </div>

          {/* 3 Core De-risking Guarantees */}
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
              <span>Zero-Ghosting / 100% Code Ownership</span>
            </div>
          </div>
        </div>

        {/* Live Visual Proof Simulator: What The Client Actually Gets */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="rounded-2xl clean-card overflow-hidden border border-white/10 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 mb-6 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs font-mono text-slate-400">revenue-engine.production</span>
              </div>
              
              {/* Simulator Tabs */}
              <div className="flex items-center gap-2 bg-white/[0.05] p-1 rounded-lg border border-white/10 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setActiveTab("whatsapp")}
                  className={`px-3 py-1 text-xs rounded-md font-medium transition-all ${
                    activeTab === "whatsapp"
                      ? "bg-emerald-500 text-black font-semibold shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  ⚡ 24/7 WhatsApp AI Closer
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("speed")}
                  className={`px-3 py-1 text-xs rounded-md font-medium transition-all ${
                    activeTab === "speed"
                      ? "bg-indigo-500 text-white font-semibold shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  🚀 100/100 Core Web Vitals
                </button>
              </div>
            </div>

            {/* Tab 1: Live WhatsApp Lead Engine */}
            {activeTab === "whatsapp" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-mono block">
                    01 // 24/7 Autonomous Lead Capture
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Every inbound lead qualified in &lt; 30 seconds.
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    Never lose another deal to slow replies. Inbound traffic clicks your WhatsApp button, gets instantly greeted, budget-qualified, and logged into your spreadsheet automatically.
                  </p>
                  <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Lead Status:</span>
                      <span className="text-emerald-400 font-semibold font-mono">QUALIFIED (₦1.2M Scope)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Response Speed:</span>
                      <span className="text-white font-mono">18 seconds</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Spreadsheet Sync:</span>
                      <span className="text-emerald-400 font-mono">Synced to Row #142</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-[#090C10] border border-white/10 font-sans text-xs space-y-3 shadow-inner">
                  <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-slate-300 font-semibold">WhatsApp Business • Live Automated Triage</span>
                  </div>

                  <div className="space-y-2.5 pt-1">
                    <div className="bg-white/[0.06] p-3 rounded-lg text-slate-200 max-w-[85%]">
                      <p className="text-[11px] text-slate-400 font-mono mb-1">Inbound Client (10:14 PM):</p>
                      &ldquo;Hi, we need a complete redesign of our commercial portal before Q1. Can we see pricing?&rdquo;
                    </div>

                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg text-emerald-200 max-w-[85%] ml-auto">
                      <p className="text-[11px] text-emerald-400 font-mono mb-1">AI Deal Closer (10:14 PM):</p>
                      &ldquo;Hello! Absolutely. Oluwaseun specializes in high-converting commercial portals. What is your estimated scope and timeline?&rdquo;
                    </div>

                    <div className="bg-white/[0.06] p-3 rounded-lg text-slate-200 max-w-[85%]">
                      <p className="text-[11px] text-slate-400 font-mono mb-1">Inbound Client (10:15 PM):</p>
                      &ldquo;Budget is around ₦1.2m, needed within 3 weeks.&rdquo;
                    </div>

                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg text-emerald-200 max-w-[85%] ml-auto">
                      <p className="text-[11px] text-emerald-400 font-mono mb-1">AI Deal Closer (10:15 PM):</p>
                      &ldquo;Perfect fit! I have locked in your brief and notified Oluwaseun directly. He will send your custom blueprint by morning.&rdquo;
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Sub-Second Speed & Core Web Vitals */}
            {activeTab === "speed" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-mono block">
                    02 // Engineered For Zero Drop-Off
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Sub-second page speeds that dominate Google &amp; retain mobile buyers.
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    Every 1-second delay in page load cuts conversions by 7%. My websites are custom-engineered in Next.js 16 to load instantaneously even on spotty 3G/4G connections.
                  </p>
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                      <span className="text-2xl font-bold font-mono text-emerald-400 block">100</span>
                      <span className="text-[10px] text-slate-400 uppercase font-mono">Performance</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                      <span className="text-2xl font-bold font-mono text-emerald-400 block">0.6s</span>
                      <span className="text-[10px] text-slate-400 uppercase font-mono">LCP Speed</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                      <span className="text-2xl font-bold font-mono text-emerald-400 block">0.00</span>
                      <span className="text-[10px] text-slate-400 uppercase font-mono">Layout Shift</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[#090C10] border border-white/10 font-sans text-xs space-y-4 shadow-inner">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-slate-300 font-semibold">Google Lighthouse Audit</span>
                    <span className="text-emerald-400 font-mono font-bold">100 / 100</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-300">First Contentful Paint (FCP)</span>
                        <span className="text-emerald-400 font-mono">0.4s (Ultra Fast)</span>
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-400 h-full w-[98%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-300">Speed Index</span>
                        <span className="text-emerald-400 font-mono">0.7s (Instant)</span>
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-400 h-full w-[96%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-300">Total Blocking Time (TBT)</span>
                        <span className="text-emerald-400 font-mono">0 ms (Zero Lag)</span>
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-400 h-full w-[100%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}

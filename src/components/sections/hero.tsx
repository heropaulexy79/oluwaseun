"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Zap,
  Globe,
  Cpu,
  Terminal,
  Activity,
  Layers,
  Sparkles,
  Play,
  RotateCcw,
  MessageSquare,
  TrendingUp,
  ShieldCheck,
  Send,
  Users,
  Check,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface ChatMessage {
  sender: "client" | "ai";
  text: string;
  time: string;
}

export function HeroSection() {
  const [chatStep, setChatStep] = useState<number>(3);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const fullConversation: ChatMessage[] = [
    {
      sender: "client",
      text: "Hello! We need a high-converting client portal and automated lead qualification for our advisory firm.",
      time: "10:14 AM",
    },
    {
      sender: "ai",
      text: "Welcome! We engineer sub-second web platforms with instant WhatsApp qualification. What is your target launch timeline?",
      time: "10:14 AM",
    },
    {
      sender: "client",
      text: "Within 3 to 4 weeks. Our project investment range is ₦1.8M.",
      time: "10:15 AM",
    },
    {
      sender: "ai",
      text: "Perfect. Scope classified. I've alerted Oluwaseun and logged your brief. Would you like to review an initial architecture proposal today?",
      time: "10:15 AM",
    },
    {
      sender: "client",
      text: "Yes, please send it over right away!",
      time: "10:16 AM",
    },
  ];

  const advanceSimulation = () => {
    if (isTyping) return;
    if (chatStep >= fullConversation.length) {
      setChatStep(2);
      return;
    }

    setIsTyping(true);
    setTimeout(() => {
      setChatStep((prev) => Math.min(prev + 1, fullConversation.length));
      setIsTyping(false);
    }, 500);
  };

  const whatsappUrl = getWhatsAppUrl({ service: "general" });

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 bg-[#090B0E] text-white aurora-hero film-grain overflow-hidden border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Centered Header Content */}
        <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8 mb-16 sm:mb-20">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md text-xs font-sans text-slate-300 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">Direct Senior Partner</span>
            <span className="text-white/30">•</span>
            <span>Web Platforms &amp; WhatsApp AI Systems</span>
          </div>

          {/* Master Headline */}
          <h1
            id="hero-heading"
            className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-[-0.03em] sheen-text leading-[1.08]"
          >
            Websites that win clients.{" "}
            <span className="text-slate-400">Automations that close deals 24/7.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            I partner directly with founders and ambitious businesses to engineer bespoke, sub-second web platforms and intelligent WhatsApp AI systems that turn traffic into paying clients.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-black font-sans font-bold text-sm hover:bg-slate-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95"
            >
              <span>Claim a Free Project Scoping Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border border-[#25D366]/30 font-sans font-semibold text-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Message on WhatsApp</span>
            </a>
          </div>

          {/* Micro Trust Indicators */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-sans text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sub-Second Loading (100% Core Web Vitals)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>&lt;30s WhatsApp Lead Qualification</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% IP &amp; Source Code Ownership</span>
            </div>
          </div>
        </div>

        {/* The Centerpiece Stage: Dimensional Dual Showcase (Browser + Floating WhatsApp Phone) */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Subtle Ambient Glow behind showcase */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-cyan-500/10 to-emerald-500/20 blur-3xl rounded-3xl -z-10" />

          {/* Main Desktop macOS Glass Browser Window */}
          <div className="product-card-elevated rounded-2xl overflow-hidden border border-white/15">
            
            {/* macOS Chrome Header Bar */}
            <div className="px-5 py-3.5 bg-[#0F131A] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                <div className="ml-4 hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.05] border border-white/10 text-xs font-mono text-slate-400">
                  <span className="text-white/40">https://</span>
                  <span className="text-slate-200">client-portal.oluwaseun.dev</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-sans text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold">Live Production Architecture</span>
              </div>
            </div>

            {/* Browser Interior: Visual High-Converting Commercial Dashboard */}
            <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-b from-[#111622] to-[#0A0D14]">
              
              {/* Left 7 Columns: Real-looking Commercial Analytics & Metrics */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Metric Summary Bar */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                    <span className="text-[11px] font-sans uppercase tracking-wider text-slate-400 block mb-1">
                      Inbound Conversion
                    </span>
                    <span className="font-display text-2xl sm:text-3xl font-bold text-white">+48.2%</span>
                    <span className="text-[10px] text-emerald-400 block mt-0.5">vs. Industry Average</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                    <span className="text-[11px] font-sans uppercase tracking-wider text-slate-400 block mb-1">
                      Avg. Edge Latency
                    </span>
                    <span className="font-display text-2xl sm:text-3xl font-bold text-cyan-400">0.38s</span>
                    <span className="text-[10px] text-cyan-300 block mt-0.5">Instant Mobile Render</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                    <span className="text-[11px] font-sans uppercase tracking-wider text-slate-400 block mb-1">
                      AI Lead Triage
                    </span>
                    <span className="font-display text-2xl sm:text-3xl font-bold text-emerald-400">&lt; 30s</span>
                    <span className="text-[10px] text-emerald-300 block mt-0.5">24/7 Autopilot</span>
                  </div>
                </div>

                {/* SVG Visual Revenue / Conversion Trend Chart */}
                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-sans text-slate-400 block">Qualified Inbound Inquiries</span>
                      <span className="text-lg font-bold text-white font-display">248 Qualified Leads This Month</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                      +14 Today
                    </span>
                  </div>

                  {/* Visual SVG Wave Chart */}
                  <div className="h-24 w-full relative pt-2">
                    <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,80 Q70,60 130,45 T250,30 T380,20 T500,10 L500,100 L0,100 Z"
                        fill="url(#chartGradient)"
                      />
                      <path
                        d="M0,80 Q70,60 130,45 T250,30 T380,20 T500,10"
                        fill="none"
                        stroke="#818CF8"
                        strokeWidth="3"
                      />
                    </svg>
                  </div>
                </div>

                {/* Active Lead Intake Ticker */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-sans">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center font-bold font-mono">
                      ₦
                    </div>
                    <div>
                      <span className="text-white font-semibold block">Latest Qualified Proposal Dispatched</span>
                      <span className="text-slate-400 text-[11px]">Corporate Portal • ₦1,850,000 Scope</span>
                    </div>
                  </div>
                  <span className="text-emerald-400 font-semibold font-mono">CONFIRMED</span>
                </div>
              </div>

              {/* Right 5 Columns: The Floating WhatsApp AI Lead Closer Phone */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm rounded-[32px] bg-[#0B0F0D] border-[3px] border-white/20 p-3 shadow-[0_25px_80px_rgba(0,0,0,0.95)] relative">
                  
                  {/* Dynamic Island Phone Top */}
                  <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2.5 border border-white/10" />

                  {/* WhatsApp App Header Bar */}
                  <div className="bg-[#121B16] p-3 rounded-2xl border border-white/10 flex items-center justify-between mb-3 shadow-md">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center font-bold text-xs font-mono">
                        OS
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-xs font-bold text-white font-sans">
                          <span>Oluwaseun Systems</span>
                          <span className="w-3 h-3 rounded-full bg-emerald-500 text-black flex items-center justify-center text-[7px] font-black">
                            ✓
                          </span>
                        </div>
                        <span className="text-[10px] text-emerald-400 font-sans block">Verified Business • Online</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">24/7 AI Closer</span>
                  </div>

                  {/* Live WhatsApp Messages Stream */}
                  <div className="space-y-2 min-h-[220px] p-1 flex flex-col justify-end text-xs font-sans">
                    {fullConversation.slice(0, chatStep).map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col ${
                          msg.sender === "client" ? "items-start" : "items-end"
                        } animate-in fade-in duration-200`}
                      >
                        <div
                          className={`max-w-[88%] p-2.5 rounded-2xl leading-relaxed text-xs ${
                            msg.sender === "client"
                              ? "bg-[#1E2622] text-white rounded-tl-none border border-white/10"
                              : "bg-[#0E3D26] text-white rounded-tr-none border border-emerald-500/30 shadow-md"
                          }`}
                        >
                          <p>{msg.text}</p>
                          <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-white/50 font-mono">
                            <span>{msg.time}</span>
                            {msg.sender === "ai" && <span className="text-emerald-400">✓✓</span>}
                          </div>
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-sans px-2 py-1">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                        <span className="ml-1 text-slate-400">Qualifying project scope...</span>
                      </div>
                    )}
                  </div>

                  {/* Interactive Trigger Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={advanceSimulation}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all cursor-pointer shadow-md"
                    >
                      {chatStep >= fullConversation.length ? (
                        <>
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Restart Live Demo</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Simulate Next Customer Reply ({chatStep}/{fullConversation.length})</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

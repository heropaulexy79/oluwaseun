"use client";

import React, { useState } from "react";
import {
  ArrowRight,
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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ChatMessage {
  sender: "client" | "ai";
  text: string;
  time: string;
}

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"whatsapp" | "website">("whatsapp");
  const [chatStep, setChatStep] = useState<number>(3); // 3 messages initially visible
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const fullConversation: ChatMessage[] = [
    {
      sender: "client",
      text: "Hello, we need a high-converting website and automated lead intake for our advisory firm.",
      time: "10:14 AM",
    },
    {
      sender: "ai",
      text: "Welcome! We engineer high-speed corporate web platforms with instant WhatsApp qualification. What is your target launch timeline?",
      time: "10:14 AM",
    },
    {
      sender: "client",
      text: "Within 3 to 4 weeks. Our project investment is around ₦1.8M.",
      time: "10:15 AM",
    },
    {
      sender: "ai",
      text: "Understood! Your scope has been classified and Oluwaseun has received an instant executive briefing. Would you like a formal proposal today?",
      time: "10:15 AM",
    },
    {
      sender: "client",
      text: "Yes, let's schedule a 15-minute alignment call right away.",
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
    }, 600);
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-36 bg-[#0D0F0E] text-[#F7F7F4] overflow-hidden cyber-grid border-b border-white/[0.08]"
    >
      {/* Ambient Lighting Orbs - High End Studio */}
      <div
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[550px] bg-[#D9F36A]/[0.08] blur-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[550px] h-[500px] bg-[#38BDF8]/[0.06] blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Cyber Corner Crosshairs */}
      <div className="absolute top-28 left-6 text-white/20 font-mono text-xs select-none pointer-events-none hidden sm:block">
        + COMMERCE::ENGINE.V2
      </div>
      <div className="absolute top-28 right-6 text-white/20 font-mono text-xs select-none pointer-events-none hidden sm:block">
        CLIENT-ACQUISITION::ACTIVE +
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Direct Client Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="cyber">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping inline-block" />
                <span>Taking Select Q2-Q3 Projects</span>
              </Badge>
              <span className="text-xs text-white/30 font-mono">/</span>
              <Badge variant="outline">
                <span className="font-mono text-[11px] text-[#A0ACA4]">Direct Senior Engineer</span>
              </Badge>
            </div>

            <h1
              id="hero-heading"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] gradient-heading"
            >
              Websites that win high-value clients. Automations that save 20+ hours a week.
            </h1>

            <p className="text-base sm:text-xl text-[#9EABA2] leading-relaxed max-w-2xl font-normal">
              I partner directly with ambitious founders and business leaders to engineer fast, conversion-focused websites and intelligent WhatsApp AI automations that turn inquiries into paying customers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#D9F36A] text-[#121514] font-bold text-xs uppercase tracking-wider hover:bg-[#CBEA4F] transition-all shadow-[0_0_30px_rgba(217,243,106,0.35)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9F36A]"
              >
                <span>Claim a Free 15-Min Project Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>

              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#141816]/90 text-[#F7F7F4] hover:bg-[#1C221E] border border-white/10 hover:border-white/20 font-medium text-xs uppercase tracking-wider transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D9F36A]"
              >
                <span>Explore Scope & Pricing Guide</span>
              </a>
            </div>

            {/* Micro Credibility Telemetry Bar */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-[#9EABA2]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9F36A] shrink-0" />
                <span>Sub-Second Page Loads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9F36A] shrink-0" />
                <span>24h Response Guarantee</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#D9F36A] shrink-0" />
                <span>Zero Agency Overhead</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Commercial Engine Mockup */}
          <div className="lg:col-span-5 relative">
            {/* Floating Top Badge */}
            <div className="hidden sm:flex absolute -top-4 -right-2 z-20 items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#1A201D]/90 backdrop-blur-md border border-[#D9F36A]/30 shadow-2xl text-xs font-mono text-[#D9F36A]">
              <TrendingUp className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Conversion Impact: +48%</span>
            </div>

            {/* Main Interactive Showcase Container */}
            <div className="relative rounded-2xl glass-panel-elevated p-5 sm:p-6 overflow-hidden border-white/10 shadow-2xl">
              {/* Top Bar Switcher */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/90" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/90" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/90" />
                  <span className="text-xs font-mono text-[#9EABA2] ml-2">live.conversion.engine</span>
                </div>
                
                <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                  <span>24/7 ACTIVE</span>
                </div>
              </div>

              {/* View Switcher Tabs */}
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-[#101312] rounded-lg border border-white/[0.06] mb-4 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab("whatsapp")}
                  className={`py-2 px-3 rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    activeTab === "whatsapp"
                      ? "bg-[#1E2522] text-[#25D366] font-bold shadow-sm border border-[#25D366]/30"
                      : "text-[#7B8B82] hover:text-[#D0DDD5]"
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp AI Closer</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("website")}
                  className={`py-2 px-3 rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    activeTab === "website"
                      ? "bg-[#1E2522] text-[#38BDF8] font-bold shadow-sm border border-[#38BDF8]/30"
                      : "text-[#7B8B82] hover:text-[#D0DDD5]"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>High-Speed Web Platform</span>
                </button>
              </div>

              {/* TAB 1: WhatsApp AI Closer Live Simulation */}
              {activeTab === "whatsapp" && (
                <div className="space-y-3">
                  {/* Simulated Mobile WhatsApp Chat Window */}
                  <div className="p-3.5 rounded-xl bg-[#0B110E] border border-[#25D366]/20 space-y-2.5 min-h-[220px] flex flex-col justify-end">
                    <div className="text-[10px] font-mono text-center text-[#55645B] border-b border-white/[0.05] pb-1.5 mb-1">
                      🔒 End-to-End Encrypted Commercial Pipeline
                    </div>

                    {fullConversation.slice(0, chatStep).map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col ${
                          msg.sender === "client" ? "items-start" : "items-end"
                        } animate-in fade-in slide-in-from-bottom-2 duration-200`}
                      >
                        <div
                          className={`max-w-[85%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${
                            msg.sender === "client"
                              ? "bg-[#1A221E] text-[#E0E6E2] rounded-tl-none border border-white/[0.06]"
                              : "bg-[#133022] text-[#E8F8EE] rounded-tr-none border border-[#25D366]/30 shadow-sm"
                          }`}
                        >
                          <div className="flex items-center gap-1 font-semibold text-[10px] mb-0.5">
                            {msg.sender === "client" ? (
                              <span className="text-[#9EABA2]">Prospective Client</span>
                            ) : (
                              <span className="text-[#25D366] flex items-center gap-1">
                                <span>AI Qualification Assistant</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                              </span>
                            )}
                          </div>
                          <p>{msg.text}</p>
                          <span className="text-[9px] text-[#7A8A80] block text-right mt-1">
                            {msg.time}
                          </span>
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex items-center gap-1.5 text-xs text-[#25D366] font-mono px-2 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-bounce [animation-delay:0.4s]" />
                        <span className="text-[11px] text-[#8E9B93] ml-1">AI analyzing project scope...</span>
                      </div>
                    )}
                  </div>

                  {/* Interactive Trigger Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={advanceSimulation}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#14231B] hover:bg-[#1A2D23] border border-[#25D366]/40 text-[#25D366] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                    >
                      {chatStep >= fullConversation.length ? (
                        <>
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Restart Live Demo</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Simulate Next Lead Response ({chatStep}/{fullConversation.length})</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 2: High-Speed Web Platform Preview */}
              {activeTab === "website" && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-[#121614] border border-white/[0.08] space-y-3">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#9EABA2]">Average Page Load (LCP)</span>
                      <span className="text-[#10B981] font-bold">0.68s (3x Faster)</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1F2522] rounded-full overflow-hidden">
                      <div className="w-[98%] h-full bg-[#10B981]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 rounded-xl bg-[#121614] border border-white/[0.06]">
                      <div className="text-[10px] uppercase text-[#7B8B82]">Mobile Usability</div>
                      <div className="text-xl font-bold text-[#D9F36A] mt-1">100 / 100</div>
                      <div className="text-[10px] text-[#10B981]">Zero layout shifts</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#121614] border border-white/[0.06]">
                      <div className="text-[10px] uppercase text-[#7B8B82]">Inbound Lead Influx</div>
                      <div className="text-xl font-bold text-[#38BDF8] mt-1">+48.2%</div>
                      <div className="text-[10px] text-[#10B981]">Higher form completions</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#141A17] border border-[#D9F36A]/20 text-[11px] text-[#A0ACA4] leading-relaxed">
                    <strong className="text-white block mb-0.5">Why speed matters to clients:</strong>
                    Every 0.5s delay drops conversion by 12%. I build directly on Next.js Edge for instantaneous responses.
                  </div>
                </div>
              )}

              {/* Bottom Console Status */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#7B8B82]">
                <span>SENIOR ENG PARTNER // OLゴWASEUN</span>
                <span className="flex items-center gap-1 text-[#10B981]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  READY FOR CLIENT INTAKE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

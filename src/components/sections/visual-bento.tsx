"use client";

import React, { useState } from "react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import {
  Zap,
  Cpu,
  Globe,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Check,
  Terminal,
  Activity,
  Code2,
  Clock,
  TrendingUp,
  GitBranch,
} from "lucide-react";

export function VisualBentoSection() {
  const [activeSpeedTab, setActiveSpeedTab] = useState<"nextjs" | "legacy">("nextjs");

  return (
    <section
      id="capabilities"
      aria-labelledby="bento-heading"
      className="relative py-24 sm:py-32 bg-[#070809] text-white border-b border-white/[0.08] hairline-grid overflow-hidden"
    >
      {/* Aurora Ambient Glows */}
      <div
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] aurora-glow-emerald rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[500px] aurora-glow-cyan rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08] mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50 block mb-3">
              ARCHITECTURAL MASTERY &amp; TELEMETRY
            </span>
            <h2
              id="bento-heading"
              className="font-display font-extrabold text-3xl sm:text-5xl tracking-[-0.03em] metallic-text leading-[1.08]"
            >
              Designed for visual authority.{" "}
              <span className="text-white/40">Engineered for pure speed.</span>
            </h2>
          </div>

          <div className="max-w-xs font-mono text-xs text-white/50 md:text-right">
            <span>NO TEMPLATE RESELLING. NO WORDPRESS BLOAT. HAND-CRAFTED DIGITAL EXCELLENCE.</span>
          </div>
        </div>

        {/* The Visual Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Tile 1: 0.38s Radial Speedometer & Core Web Vitals (7 cols) */}
          <SpotlightCard className="lg:col-span-7 p-8 sm:p-10 glass-surface border border-white/[0.08] flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] font-mono text-xs text-white/50 mb-6">
                <span className="uppercase tracking-widest">[01] SPEED_ENGINE</span>
                <span className="text-[#10B981] flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-blip" />
                  SUB_SECOND
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Radial Gauge SVG */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center relative">
                  <div className="relative w-40 h-40 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                      <circle
                        cx="60"
                        cy="60"
                        r="52"
                        className="stroke-white/10"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="52"
                        className="stroke-[#10B981]"
                        strokeWidth="8"
                        strokeDasharray={326}
                        strokeDashoffset={326 * (1 - 0.99)}
                        strokeLinecap="round"
                        fill="transparent"
                      />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="font-display font-black text-3xl text-white tracking-tight">0.38s</span>
                      <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider">FIRST PAINT</span>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-[#10B981] mt-3 font-semibold">
                    ⚡ 3.4x Faster than Average
                  </span>
                </div>

                {/* Telemetry Matrix Scores */}
                <div className="sm:col-span-7 space-y-3 font-mono text-xs">
                  <h3 className="font-display text-xl font-bold text-white tracking-tight font-sans">
                    Core Web Vitals Benchmark
                  </h3>
                  <p className="text-white/60 font-sans text-xs leading-relaxed">
                    Every 100ms of lag costs 1% in conversions. I build directly on Next.js 16 Edge runtime for instant worldwide delivery.
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="p-2.5 bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                      <span className="text-white/60">Performance</span>
                      <span className="text-[#10B981] font-bold">100 / 100</span>
                    </div>
                    <div className="p-2.5 bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                      <span className="text-white/60">Accessibility</span>
                      <span className="text-[#10B981] font-bold">100 / 100</span>
                    </div>
                    <div className="p-2.5 bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                      <span className="text-white/60">Best Practices</span>
                      <span className="text-[#10B981] font-bold">100 / 100</span>
                    </div>
                    <div className="p-2.5 bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                      <span className="text-white/60">SEO Authority</span>
                      <span className="text-[#10B981] font-bold">100 / 100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-[11px] text-white/40">
              <span>ZERO RUNTIME LAYOUT SHIFTS (CLS: 0.00)</span>
              <span className="text-white">EDGE_GLOBAL_CDN</span>
            </div>
          </SpotlightCard>

          {/* Tile 2: WhatsApp AI Lead Qualification Pipeline (5 cols) */}
          <SpotlightCard className="lg:col-span-5 p-8 sm:p-10 glass-surface border border-white/[0.08] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] font-mono text-xs text-white/50 mb-6">
                <span className="uppercase tracking-widest">[02] AI_CLOSER</span>
                <span className="text-[#38BDF8] flex items-center gap-1 font-bold">
                  <span>AUTONOMOUS</span>
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-white tracking-tight">
                    24/7 Lead Triage Pulse
                  </h3>
                  {/* Equalizer simulation */}
                  <div className="flex items-end gap-1 h-6">
                    <span className="w-1 bg-[#10B981] rounded-full animate-eq-1" />
                    <span className="w-1 bg-[#10B981] rounded-full animate-eq-2" />
                    <span className="w-1 bg-[#10B981] rounded-full animate-eq-3" />
                    <span className="w-1 bg-[#10B981] rounded-full animate-eq-4" />
                    <span className="w-1 bg-[#10B981] rounded-full animate-eq-5" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/60 font-sans leading-relaxed">
                  Incoming leads on your site trigger an instantaneous WhatsApp conversation that classifies intent, confirms budget, and schedules discovery calls automatically.
                </p>

                {/* Visual Lead Score Chip */}
                <div className="p-4 bg-white/[0.03] border border-white/[0.08] space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50">LEAD QUALITY SCORE</span>
                    <span className="text-[#10B981] font-bold">96 / 100 · HIGH INTENT</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[96%] h-full bg-[#10B981]" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-white/40 pt-1">
                    <span>Scope: Corporate Portal</span>
                    <span>Budget: ₦1.8M Verified</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-[11px] text-white/40">
              <span>RESPONSE TIME: &lt; 28 SECONDS</span>
              <span className="text-[#10B981]">0 MISSED LEADS</span>
            </div>
          </SpotlightCard>

          {/* Tile 3: Production Tech Stack (4 cols) */}
          <SpotlightCard className="lg:col-span-4 p-8 glass-surface border border-white/[0.08] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] font-mono text-xs text-white/50 mb-5">
                <span className="uppercase tracking-widest">[03] STACK_SPEC</span>
                <span className="text-white/60">LATEST_GEN</span>
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-2">
                Production-Grade Engineering Stack
              </h3>
              <p className="text-xs text-white/60 font-sans leading-relaxed mb-6">
                No third-party black boxes. Built using industry-standard open technologies with maximum flexibility and zero vendor lock-in.
              </p>

              {/* Glass Stack Badges */}
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                <div className="p-3 bg-white/[0.02] border border-white/[0.06] flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span className="font-bold text-white">Next.js 16</span>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/[0.06] flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                  <span className="font-bold text-white">React 19</span>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/[0.06] flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                  <span className="font-bold text-white">TypeScript</span>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/[0.06] flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                  <span className="font-bold text-white">Tailwind CSS 4</span>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/[0.06] flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#25D366]" />
                  <span className="font-bold text-white">WhatsApp API</span>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/[0.06] flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  <span className="font-bold text-white">Resend &amp; Edge</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] font-mono text-[11px] text-white/40">
              <span>ZERO MONOLITHIC DEPENDENCIES</span>
            </div>
          </SpotlightCard>

          {/* Tile 4: 100% IP & Asset Ownership (4 cols) */}
          <SpotlightCard className="lg:col-span-4 p-8 glass-surface border border-white/[0.08] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] font-mono text-xs text-white/50 mb-5">
                <span className="uppercase tracking-widest">[04] CLIENT_SECURITY</span>
                <span className="text-[#10B981]">100% OWNERSHIP</span>
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-2">
                Complete IP &amp; Code Handover
              </h3>
              <p className="text-xs text-white/60 font-sans leading-relaxed mb-6">
                You own your GitHub repository, domain DNS, and server keys completely. No recurring license traps or proprietary hostage code.
              </p>

              {/* Simulated Terminal Git Handover */}
              <div className="p-4 bg-[#050607] border border-white/10 font-mono text-[11px] space-y-1.5 text-white/70">
                <div className="text-white/40">// Verification Handover Spec</div>
                <div className="text-[#10B981] font-semibold">✓ Repository Transferred</div>
                <div className="text-white/60">→ git remote: client/production</div>
                <div className="text-white/60">→ domain &amp; SSL: verified</div>
                <div className="text-white/60">→ documentation: complete</div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] font-mono text-[11px] text-white/40">
              <span>ZERO PROPRIETARY PLATFORM LOCK-IN</span>
            </div>
          </SpotlightCard>

          {/* Tile 5: Direct Senior Engineering Collaboration (4 cols) */}
          <SpotlightCard className="lg:col-span-4 p-8 glass-surface border border-white/[0.08] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] font-mono text-xs text-white/50 mb-5">
                <span className="uppercase tracking-widest">[05] PARTNERSHIP</span>
                <span className="text-white/80">DIRECT_ACCESS</span>
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-2">
                Unfiltered Senior Engineer Access
              </h3>
              <p className="text-xs text-white/60 font-sans leading-relaxed mb-6">
                Work directly with the architect building your system. No account managers playing telephone with your requirements.
              </p>

              <div className="space-y-2.5 font-mono text-xs text-white/80">
                <div className="p-3 bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <span>Weekly Video Demos</span>
                  <span className="text-[#10B981] font-bold">100% On-Time</span>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <span>Direct WhatsApp Channel</span>
                  <span className="text-[#10B981] font-bold">&lt; 2h Reply</span>
                </div>
                <div className="p-3 bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <span>Scope Creep Protection</span>
                  <span className="text-white font-bold">Fixed Milestones</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] font-mono text-[11px] text-white/40">
              <span>AGILITY: 3X FASTER THAN TRADITIONAL AGENCIES</span>
            </div>
          </SpotlightCard>

        </div>
      </div>
    </section>
  );
}


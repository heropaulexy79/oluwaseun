import React from "react";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import { ArrowUpRight, Check, Globe, Database, Cpu, Terminal, Shield, FileText, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function PortfolioSection() {
  return (
    <section
      id="work"
      aria-labelledby="portfolio-heading"
      className="relative py-24 sm:py-32 bg-[#090B0E] text-white border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08] mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-3">
              SELECTED CASE STUDIES &amp; COMMERCIAL WORK
            </span>
            <h2
              id="portfolio-heading"
              className="font-display font-extrabold text-3xl sm:text-5xl tracking-[-0.03em] sheen-text leading-[1.08]"
            >
              Real production architectures.{" "}
              <span className="text-slate-400">Measurable commercial results.</span>
            </h2>
          </div>

          <div className="max-w-xs font-mono text-xs text-slate-400 md:text-right">
            <span>CLIENT PRIVACY NOTICE: PROPRIETARY WORK AND INTERNAL METRICS PROTECTED UNDER CLIENT NDA.</span>
          </div>
        </div>

        {/* Case Study Modules */}
        <div className="space-y-16">
          {PORTFOLIO_PROJECTS.map((project, idx) => (
            <SpotlightCard
              key={project.id}
              className="product-card-elevated rounded-2xl overflow-hidden border border-white/15 grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.85)]"
            >
              {/* Left Column: Narrative & Metrics */}
              <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  {/* Case Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 font-mono text-xs">
                    <span className="text-slate-300 font-bold">
                      CASE 0{idx + 1} // {project.category.toUpperCase()}
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {project.badgeLabel || "PRODUCTION SYSTEM"}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                    {project.title}
                  </h3>

                  {/* Context & Problem */}
                  <div className="space-y-4 text-sm text-slate-300 font-sans">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">
                        Commercial Challenge
                      </span>
                      <p className="leading-relaxed">{project.businessContext}</p>
                    </div>

                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                        Friction Eliminated
                      </span>
                      <p className="leading-relaxed text-slate-400">{project.problemAddressed}</p>
                    </div>
                  </div>

                  {/* Execution Deliverables */}
                  <div className="space-y-2.5">
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-400 block">
                      Engineered Execution:
                    </span>
                    <ul className="space-y-2">
                      {project.workDelivered.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Outcome Benchmark & Stack */}
                <div className="pt-6 border-t border-white/10 space-y-4">
                  {project.verifiableOutcome && (
                    <div className="p-4 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/30 text-xs font-sans">
                      <span className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                        ✓ VERIFIED COMMERCIAL BENCHMARK
                      </span>
                      <p className="text-white text-sm font-medium">{project.verifiableOutcome}</p>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-white/[0.04] text-slate-300 text-xs font-mono rounded border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Tangible Realistic UI Viewport */}
              <div className="lg:col-span-6 p-8 sm:p-10 bg-[#0B0E14] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs text-slate-400 mb-6">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-slate-300 font-sans">System Viewport</span>
                    </div>
                    <span className="text-emerald-400 font-mono">LIVE PREVIEW</span>
                  </div>

                  {/* UI Artifact 1: Lead Routing / WhatsApp Bot */}
                  {project.interactivePreviewType === "lead-routing" && (
                    <div className="space-y-4 font-sans text-xs">
                      {/* WhatsApp Conversation Box */}
                      <div className="p-4 rounded-xl bg-[#0F1612] border border-emerald-500/30 space-y-3 shadow-lg">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[11px] text-slate-400 font-mono">
                          <span className="text-emerald-400 font-bold">WHATSAPP AI INGEST</span>
                          <span>&lt; 14ms Latency</span>
                        </div>
                        
                        <div className="bg-[#1A2520] p-3 rounded-lg text-white space-y-1">
                          <span className="text-[10px] text-slate-400 block">Inbound Client Inquiry:</span>
                          <p className="text-xs">&quot;We need a corporate booking portal for 4 regional branches. Launch deadline is next month. Budget is ₦2.5M.&quot;</p>
                        </div>

                        <div className="bg-[#123B28] p-3 rounded-lg text-emerald-100 space-y-1">
                          <span className="text-[10px] text-emerald-300 font-bold block">AI Classification Output:</span>
                          <div className="font-mono text-[11px] space-y-0.5 text-emerald-200">
                            <div>• Tier: Enterprise Tier (₦2.5M)</div>
                            <div>• Urgency: High (4-Week Target)</div>
                            <div>• Status: Executive Calendar Dispatched</div>
                          </div>
                        </div>
                      </div>

                      {/* Webhook Dispatch Ticker */}
                      <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-[11px] flex items-center justify-between">
                        <span className="text-slate-400">FOUNDER DISPATCH ALERT:</span>
                        <span className="text-emerald-400 font-bold">DELIVERED IN 12s</span>
                      </div>
                    </div>
                  )}

                  {/* UI Artifact 2: E-Commerce / Ordering Platform */}
                  {project.interactivePreviewType === "ecommerce-portal" && (
                    <div className="space-y-4 font-sans text-xs">
                      {/* Simulated B2B Order Card */}
                      <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10 space-y-4 shadow-lg">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 font-mono text-[11px] font-semibold">
                            B2B Commercial Catalog
                          </span>
                          <span className="text-emerald-400 font-mono font-bold">LCP: 0.8s</span>
                        </div>

                        <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 flex items-center justify-between">
                          <div>
                            <span className="text-white font-bold block">Heavy Industrial Power Inverter 50kVA</span>
                            <span className="text-[11px] text-slate-400 font-mono">SKU: INV-50K-NG • In Stock (12 Units)</span>
                          </div>
                          <span className="font-mono font-bold text-white text-sm">₦14,200,000</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                          <div className="p-2.5 rounded bg-white/[0.03] border border-white/10 flex items-center gap-1.5 text-slate-300">
                            <FileText className="w-3.5 h-3.5 text-cyan-400" />
                            <span>PDF Quote Generated</span>
                          </div>
                          <div className="p-2.5 rounded bg-white/[0.03] border border-white/10 flex items-center gap-1.5 text-emerald-400">
                            <Check className="w-3.5 h-3.5" />
                            <span>Paystack Deposit Active</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-[11px] flex items-center justify-between">
                        <span className="text-slate-400">MOBILE CORE WEB VITALS:</span>
                        <span className="text-emerald-400 font-bold">PERFECT 100/100</span>
                      </div>
                    </div>
                  )}

                  {/* UI Artifact 3: Internal Operations Knowledge Assistant */}
                  {project.interactivePreviewType === "ai-ops" && (
                    <div className="space-y-4 font-sans text-xs">
                      <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10 space-y-3.5 shadow-lg">
                        <div className="flex items-center justify-between text-slate-400 font-mono text-[11px]">
                          <span>OPERATIONS VECTOR SEARCH</span>
                          <span className="text-cyan-400">Strict Grounding</span>
                        </div>

                        <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-slate-300">
                          <span className="text-[10px] text-slate-400 font-mono block">Query:</span>
                          &quot;What is our standard SLA for enterprise client downtime in Lagos?&quot;
                        </div>

                        <div className="p-3.5 rounded-lg bg-cyan-950/30 border border-cyan-500/30 text-cyan-100 space-y-1">
                          <span className="text-[10px] text-cyan-400 font-mono font-bold block">Verified Knowledge Output:</span>
                          <p className="text-xs">&quot;Priority 1 downtime carries a guaranteed 2-hour on-site and sub-30 minute remote response commitment.&quot;</p>
                          <span className="text-[10px] text-cyan-300/80 font-mono block pt-1">
                            Verified Source: Operations Handbook v4.2 § 8.3
                          </span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-[11px] flex items-center justify-between">
                        <span className="text-slate-400">HALLUCINATION RISK:</span>
                        <span className="text-emerald-400 font-bold">0.00% DETERMINISTIC</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom CTA */}
                <div className="pt-6 border-t border-white/10 mt-8">
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-between py-3 px-5 rounded-xl bg-white text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all text-center"
                  >
                    <span>Deploy a Solution Like This</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

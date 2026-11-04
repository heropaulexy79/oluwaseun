import React from "react";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Globe, Database, Terminal, Shield, Sparkles } from "lucide-react";

export function PortfolioSection() {
  return (
    <section
      id="work"
      aria-labelledby="portfolio-heading"
      className="relative py-24 sm:py-32 bg-[#0B0D0C] text-[#F7F7F4] border-b border-white/[0.08] cyber-grid overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/4 right-1/4 w-[600px] h-[500px] bg-[#38BDF8]/[0.03] blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <Badge variant="cyber" className="mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Architectural Showcases & Case Studies</span>
            </Badge>
            <h2
              id="portfolio-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight gradient-heading leading-tight"
            >
              Selected Engineering Architectures
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#9EABA2] leading-relaxed">
              Real-world systems, code architectures, and automation pipelines designed for business stability, high conversions, and zero-defect execution.
            </p>
          </div>

          <div className="p-4 rounded-xl glass-panel text-xs font-mono text-[#8E9B93] max-w-xs md:text-right border-white/[0.08]">
            <span className="font-semibold text-white block mb-1">Notice of Discretion</span>
            Production client case studies are presented during private consultations to respect proprietary client NDAs.
          </div>
        </div>

        {/* Project Showcases */}
        <div className="space-y-12 sm:space-y-16">
          {PORTFOLIO_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-2xl glass-panel-elevated overflow-hidden transition-all duration-300 hover:border-[#D9F36A]/40"
            >
              {/* Top macOS / Cyber Console Bar */}
              <div className="flex items-center justify-between px-6 py-3.5 bg-[#101312] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/90" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/90" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/90" />
                  <span className="text-xs font-mono text-[#7C8B82] ml-2">
                    architecture://{project.id}.spec
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase text-[#D9F36A] px-2 py-0.5 rounded bg-[#D9F36A]/10 border border-[#D9F36A]/20">
                    STAGE::VERIFIED
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left Col: Project Scope & Deliverables */}
                <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08]">
                  <div className="space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#D9F36A] bg-[#D9F36A]/10 px-2.5 py-1 rounded border border-[#D9F36A]/20">
                        0{idx + 1}
                      </span>
                      <Badge variant="cyan">{project.category}</Badge>
                      {project.isPrototypeOrShowcase && (
                        <span className="text-[11px] font-mono text-[#A0ACA4] bg-[#141816] px-2.5 py-0.5 rounded-full border border-white/10">
                          {project.badgeLabel || "Architecture Showcase"}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                      {project.title}
                    </h3>

                    {/* Context & Problem */}
                    <div className="space-y-4 pt-2">
                      <div className="p-4 rounded-xl bg-[#121614] border border-white/[0.06]">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D9F36A] mb-1">
                          Business Context & Challenge
                        </h4>
                        <p className="text-sm text-[#9EABA2] leading-relaxed">
                          {project.businessContext}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7C8B82] mb-1">
                          Operational Friction Addressed
                        </h4>
                        <p className="text-sm text-[#9EABA2] leading-relaxed">
                          {project.problemAddressed}
                        </p>
                      </div>
                    </div>

                    {/* Work Delivered */}
                    <div className="pt-2">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3">
                        Technical Execution:
                      </h4>
                      <ul className="space-y-2.5">
                        {project.workDelivered.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9EABA2]">
                            <CheckCircle2 className="w-4 h-4 text-[#D9F36A] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Outcome & Tech Stack */}
                  <div className="mt-8 pt-6 border-t border-white/[0.08] space-y-4">
                    {project.verifiableOutcome && (
                      <div className="p-3.5 rounded-xl bg-[#141A17] border border-[#10B981]/30 flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping mt-1.5 shrink-0" />
                        <div>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#10B981] block mb-0.5">
                            Verifiable Performance Benchmark
                          </span>
                          <p className="text-xs text-[#A0ACA4]">
                            {project.verifiableOutcome}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-[#121614] text-[#D9F36A] text-[11px] font-mono border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Col: System Telemetry & Pipeline */}
                <div className="lg:col-span-5 bg-[#0F1311] p-8 sm:p-10 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                      <span className="text-xs font-mono text-[#D9F36A] uppercase tracking-wider flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>Interactive System Topology</span>
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    </div>

                    {project.interactivePreviewType === "lead-routing" && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="p-3.5 rounded-xl bg-[#141816] border border-white/10 space-y-1.5 hover:border-[#38BDF8]/40 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-[#38BDF8] font-semibold">
                              <Globe className="w-3.5 h-3.5" />
                              <span>Inbound Hook Ingest</span>
                            </div>
                            <span className="text-[10px] text-[#10B981]">&lt; 14ms</span>
                          </div>
                          <p className="text-[11px] text-[#8E9B93]">
                            POST /api/webhooks/lead-intake (Encrypted Edge)
                          </p>
                        </div>

                        <div className="flex justify-center text-[#D9F36A] text-xs">↓</div>

                        <div className="p-3.5 rounded-xl bg-[#141816] border border-white/10 space-y-1.5 hover:border-[#D9F36A]/40 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-[#D9F36A] font-semibold">
                              <Cpu className="w-3.5 h-3.5" />
                              <span>AI Parser & Classifier</span>
                            </div>
                            <span className="text-[10px] text-[#D9F36A]">100% Deterministic</span>
                          </div>
                          <p className="text-[11px] text-[#8E9B93]">
                            JSON Schema Extraction (Budget, Urgency, Scope)
                          </p>
                        </div>

                        <div className="flex justify-center text-[#D9F36A] text-xs">↓</div>

                        <div className="p-3.5 rounded-xl bg-[#141816] border border-white/10 space-y-1.5 hover:border-[#10B981]/40 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-[#10B981] font-semibold">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>WhatsApp API Dispatch</span>
                            </div>
                            <span className="text-[10px] text-[#10B981]">Instant Alert</span>
                          </div>
                          <p className="text-[11px] text-[#8E9B93]">
                            Instant structured briefing delivered to founder phone
                          </p>
                        </div>
                      </div>
                    )}

                    {project.interactivePreviewType === "ecommerce-portal" && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="p-3.5 rounded-xl bg-[#141816] border border-white/10 space-y-1.5 hover:border-[#38BDF8]/40 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-[#38BDF8] font-semibold">
                              <Globe className="w-3.5 h-3.5" />
                              <span>Edge Rendered UI</span>
                            </div>
                            <span className="text-[10px] text-[#10B981]">LCP: 0.8s</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-[10px] text-[#8E9B93] pt-1">
                            <div>TTFB: 32ms</div>
                            <div>FCP: 0.38s</div>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#141816] border border-white/10 space-y-1.5 hover:border-[#D9F36A]/40 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-[#D9F36A] font-semibold">
                              <Database className="w-3.5 h-3.5" />
                              <span>Instant Client Search</span>
                            </div>
                            <span className="text-[10px] text-[#D9F36A]">Sub-100ms</span>
                          </div>
                          <p className="text-[11px] text-[#8E9B93]">
                            Optimistic cache with zero layout shift on mobile
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#141816] border border-white/10 space-y-1.5 hover:border-[#10B981]/40 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-[#10B981] font-semibold">
                              <Terminal className="w-3.5 h-3.5" />
                              <span>Quotation Engine</span>
                            </div>
                            <span className="text-[10px] text-[#10B981]">Dynamic PDF</span>
                          </div>
                          <p className="text-[11px] text-[#8E9B93]">
                            Automated spec breakdown & commercial deposit gateway
                          </p>
                        </div>
                      </div>
                    )}

                    {project.interactivePreviewType === "ai-ops" && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="p-3.5 rounded-xl bg-[#141816] border border-white/10 space-y-1.5 hover:border-[#38BDF8]/40 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-[#38BDF8] font-semibold">
                              <Database className="w-3.5 h-3.5" />
                              <span>Vector Document Index</span>
                            </div>
                            <span className="text-[10px] text-[#38BDF8]">Hybrid Search</span>
                          </div>
                          <p className="text-[11px] text-[#8E9B93]">
                            SOPs, contracts, and architecture manuals indexed
                          </p>
                        </div>

                        <div className="flex justify-center text-[#D9F36A] text-xs">↓</div>

                        <div className="p-3.5 rounded-xl bg-[#141816] border border-white/10 space-y-1.5 hover:border-[#D9F36A]/40 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-[#D9F36A] font-semibold">
                              <Cpu className="w-3.5 h-3.5" />
                              <span>Strict Grounding Guardrails</span>
                            </div>
                            <span className="text-[10px] text-[#D9F36A]">Zero Hallucination</span>
                          </div>
                          <p className="text-[11px] text-[#8E9B93]">
                            Deterministic source reference check with citation links
                          </p>
                        </div>

                        <div className="flex justify-center text-[#D9F36A] text-xs">↓</div>

                        <div className="p-3.5 rounded-xl bg-[#141816] border border-white/10 space-y-1.5 hover:border-[#10B981]/40 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-[#10B981] font-semibold">
                              <Shield className="w-3.5 h-3.5" />
                              <span>Role-Permissioned Dispatch</span>
                            </div>
                            <span className="text-[10px] text-[#10B981]">Encrypted</span>
                          </div>
                          <p className="text-[11px] text-[#8E9B93]">
                            Secure internal team messaging query bridge
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-white/[0.08] mt-6">
                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D9F36A] hover:text-[#CBEA4F] transition-colors"
                    >
                      <span>Build a Similar Solution For Your Business</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

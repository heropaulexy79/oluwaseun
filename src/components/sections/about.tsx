import React from "react";
import { Badge } from "@/components/ui/badge";
import { Terminal, ShieldCheck, Cpu, ArrowUpRight, CheckCircle2, Code2, Globe, Sparkles, Activity } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-24 sm:py-32 bg-[#0B0D0C] text-[#F7F7F4] border-b border-white/[0.08] cyber-grid overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[500px] bg-[#D9F36A]/[0.04] blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Cyber-Studio Engineering Dossier */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl glass-panel-elevated p-8 sm:p-10 border border-white/10 shadow-2xl overflow-hidden">
              {/* Radial corner aura */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D9F36A]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#D9F36A] flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>ENGINEER::DOSSIER</span>
                </span>
                <span className="text-[11px] font-mono text-[#8E9B93] px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                  Lagos / Global
                </span>
              </div>

              {/* Monogram Badge & Identity */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl bg-[#141816] border border-[#D9F36A]/40 flex items-center justify-center text-2xl font-black text-[#D9F36A] shadow-[0_0_25px_rgba(217,243,106,0.2)]">
                  OS
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#10B981] border-2 border-[#141816] animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    Oluwaseun
                  </h3>
                  <p className="text-xs font-mono text-[#A0ACA4]">
                    Senior Software Engineer & Automation Architect
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#9EABA2] leading-relaxed mb-6">
                Specialized in high-conversion web infrastructure, mission-critical digital products, and production automation pipelines that save business hours.
              </p>

              {/* Core Tenets & Capabilities */}
              <div className="pt-5 border-t border-white/[0.08] space-y-3 font-mono text-xs text-[#9EABA2]">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#111413] border border-white/[0.06]">
                  <div className="flex items-center gap-2.5 text-white">
                    <Terminal className="w-3.5 h-3.5 text-[#D9F36A]" />
                    <span>Standards</span>
                  </div>
                  <span className="text-[11px] text-[#D9F36A]">Production-Grade</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#111413] border border-white/[0.06]">
                  <div className="flex items-center gap-2.5 text-white">
                    <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>AI Integration</span>
                  </div>
                  <span className="text-[11px] text-[#38BDF8]">Low-Risk / Grounded</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#111413] border border-white/[0.06]">
                  <div className="flex items-center gap-2.5 text-white">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Direct Access</span>
                  </div>
                  <span className="text-[11px] text-[#10B981]">Unfiltered Partner</span>
                </div>
              </div>

              {/* Bottom Telemetry Chip */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#7C8B82]">
                <span>STATUS: ACTIVE ENGAGEMENTS</span>
                <span className="text-[#D9F36A]">Q2-Q3 / 2026</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Principles */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="cyber">The Consultant & Engineer</Badge>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight gradient-heading leading-tight"
            >
              Building digital tools around business problems, not technology hype.
            </h2>

            <div className="space-y-4 text-base text-[#9EABA2] leading-relaxed">
              <p>
                When companies hire large agencies, they often end up paying for account managers, layers of bureaucracy, and cookie-cutter templates. When they hire low-cost freelancers, they often inherit brittle code with zero long-term maintainability.
              </p>
              <p>
                I operate as a direct technical partner. You work directly with the senior engineer architecting, coding, and deploying your solution.
              </p>
              <p>
                Whether building a high-converting web presence for an ambitious Nigerian enterprise or engineering complex automation pipelines for international clients, the focus remains the same: <strong className="text-white">practical business utility, commercial credibility, and dependable execution.</strong>
              </p>
            </div>

            {/* Principles & Guarantees Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl glass-panel glass-panel-hover flex items-start gap-3.5">
                <div className="p-1.5 rounded-lg bg-[#161D19] border border-[#D9F36A]/30 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#D9F36A]" />
                </div>
                <div>
                  <span className="font-mono font-bold text-xs uppercase tracking-wider text-white block">
                    Direct Senior Partnership
                  </span>
                  <p className="text-xs text-[#8E9B93] mt-1 leading-relaxed">
                    Zero junior handoffs or account manager delays. You communicate directly with the engineer building your product.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel glass-panel-hover flex items-start gap-3.5">
                <div className="p-1.5 rounded-lg bg-[#161D19] border border-[#D9F36A]/30 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#D9F36A]" />
                </div>
                <div>
                  <span className="font-mono font-bold text-xs uppercase tracking-wider text-white block">
                    100% IP & Asset Ownership
                  </span>
                  <p className="text-xs text-[#8E9B93] mt-1 leading-relaxed">
                    You hold full ownership of all code repositories, database access, and deployed infrastructure from day one.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel glass-panel-hover flex items-start gap-3.5">
                <div className="p-1.5 rounded-lg bg-[#161D19] border border-[#D9F36A]/30 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#D9F36A]" />
                </div>
                <div>
                  <span className="font-mono font-bold text-xs uppercase tracking-wider text-white block">
                    Predictable Fixed Milestones
                  </span>
                  <p className="text-xs text-[#8E9B93] mt-1 leading-relaxed">
                    Clear phase deliverables, weekly demo links, and zero unexpected scope creep invoices.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel glass-panel-hover flex items-start gap-3.5">
                <div className="p-1.5 rounded-lg bg-[#161D19] border border-[#D9F36A]/30 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#D9F36A]" />
                </div>
                <div>
                  <span className="font-mono font-bold text-xs uppercase tracking-wider text-white block">
                    Commercial ROI Focus
                  </span>
                  <p className="text-xs text-[#8E9B93] mt-1 leading-relaxed">
                    Solutions engineered specifically to cut operational lag, win customer trust, and drive measurable revenue.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D9F36A] hover:text-[#CBEA4F] transition-colors"
              >
                <span>Initiate a project conversation</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

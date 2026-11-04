import React from "react";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, ArrowRight, RefreshCw, Cpu, Activity, Clock } from "lucide-react";

export function PartnershipSection() {
  const pillars = [
    {
      icon: <Activity className="w-5 h-5 text-[#38BDF8]" />,
      title: "Uptime & System Monitoring",
      description:
        "Proactive checking of website availability, SSL renewals, DNS health, and API webhook delivery so issues are diagnosed before your customers notice.",
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#D9F36A]" />,
      title: "Content & Feature Iterations",
      description:
        "Dedicated monthly engineering hours to adjust copy, launch new landing pages, update products, or refine design details as your business evolves.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#A7F3D0]" />,
      title: "Automation & API Upkeep",
      description:
        "Third-party APIs (WhatsApp, payment gateways, CRMs) frequently update their schemas. Retainers ensure your automated pipelines adapt without breaking.",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#F59E0B]" />,
      title: "Priority Technical Support",
      description:
        "Direct access to your dedicated engineer for urgent troubleshooting, performance diagnostics, and strategic technical guidance whenever questions arise.",
    },
  ];

  return (
    <section
      id="partnership"
      aria-labelledby="partnership-heading"
      className="relative py-24 sm:py-32 bg-[#0D0F0E] text-[#F7F7F4] border-b border-white/[0.08] cyber-grid overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-[#38BDF8]/[0.03] blur-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <Badge variant="cyber" className="mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Long-Term Continuity & SLAs</span>
          </Badge>
          <h2
            id="partnership-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight gradient-heading leading-tight"
          >
            Digital systems shouldn&apos;t be abandoned after launch.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9EABA2] leading-relaxed">
            The most profitable websites and automations are treated as living assets that compound over time. An ongoing technical partnership ensures your systems stay secure, responsive, and aligned with your operational roadmap.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-[#141816] border border-white/10 inline-flex mb-5 shadow-inner">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9EABA2] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Retainer Scope Clarification Card */}
        <div className="mt-12 p-8 sm:p-10 rounded-2xl glass-panel-elevated border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D9F36A]">
              <span className="w-2 h-2 rounded-full bg-[#D9F36A] animate-pulse" />
              <span>Transparent Engagement Structure</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Structured retainers from ₦75,000/month.
            </h4>
            <p className="text-xs sm:text-sm text-[#9EABA2] leading-relaxed">
              Ongoing technical support is never mandatory. It is available to organizations that need peace of mind, fast turnaround, and dependable engineering oversight without hiring in-house staff.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href="#contact"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#D9F36A] text-[#121514] font-bold text-xs uppercase tracking-wider hover:bg-[#CBEA4F] hover:shadow-[0_0_20px_rgba(217,243,106,0.3)] transition-all"
            >
              <span>Discuss Support Retainer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

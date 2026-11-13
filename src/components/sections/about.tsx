import React from "react";
import { ArrowUpRight, Check, Terminal, ShieldCheck, Cpu, CheckCircle2, Award, Users, Lock, Zap } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-24 sm:py-32 bg-[#090B0E] text-white border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-3">
            ABOUT OLUWASEUN
          </span>
          <h2
            id="about-heading"
            className="font-display font-extrabold text-3xl sm:text-5xl tracking-[-0.03em] sheen-text leading-[1.08]"
          >
            A senior technical partner,{" "}
            <span className="text-slate-400">not an agency bureaucracy.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            When you hire large agencies, you pay for account managers, layers of bureaucracy, and junior developers learning on your project. When you partner with me, you collaborate directly with the senior engineer architecting and shipping your product.
          </p>
        </div>

        {/* 4 Guarantees in High-Contrast Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SpotlightCard className="p-7 rounded-2xl product-card border border-white/10 flex flex-col justify-between space-y-6">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-5">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                Direct Senior Partner
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Zero account managers playing telephone. You speak directly with the senior engineer architecting and writing your code.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 font-mono text-[11px] text-slate-400">
              COMMUNICATION: UNFILTERED
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-7 rounded-2xl product-card border border-white/10 flex flex-col justify-between space-y-6">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                100% IP &amp; Code Ownership
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                You own all repositories, domains, and database keys from day one. Zero proprietary lock-in or recurring hostage fees.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 font-mono text-[11px] text-slate-400">
              IP RIGHTS: 100% YOURS
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-7 rounded-2xl product-card border border-white/10 flex flex-col justify-between space-y-6">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-5">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                Sub-Second Speed
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Built on Next.js 16 Edge runtime achieving 100/100 Core Web Vitals to maximize search rankings and prevent mobile drop-off.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 font-mono text-[11px] text-slate-400">
              BENCHMARK: 100/100 SPEED
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-7 rounded-2xl product-card border border-white/10 flex flex-col justify-between space-y-6">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-5">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                Predictable Milestones
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Transparent weekly sprint demos, realistic timelines, and clear deliverables. Zero unexpected scope-creep invoices.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 font-mono text-[11px] text-slate-400">
              DELIVERY: RELIABLE &amp; CLEAR
            </div>
          </SpotlightCard>
        </div>

        {/* CTA banner */}
        <div className="mt-12 p-8 rounded-2xl product-card-elevated border border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-2xl font-bold text-white">
              Ready to elevate your digital presence or automate operations?
            </h4>
            <p className="text-slate-300 text-sm mt-1">
              Currently accepting 2 new client engagements for Q2-Q3.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all shrink-0"
          >
            <span>Start a Project Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

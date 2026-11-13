import React from "react";
import { ProjectEnquiryForm } from "@/components/forms/project-enquiry-form";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { MessageSquare, Clock, ShieldCheck, Mail, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-24 sm:py-32 bg-[#090B0E] text-white border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Founder Access & WhatsApp Fast Track */}
          <div className="lg:col-span-5 space-y-8 font-sans">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-3">
                PROJECT CONSULTATION
              </span>
              <h2
                id="contact-heading"
                className="font-display font-extrabold text-3xl sm:text-5xl tracking-[-0.03em] sheen-text leading-[1.08]"
              >
                Let&apos;s build what your business needs next.
              </h2>
              <p className="mt-4 text-base text-slate-300 font-sans leading-relaxed">
                Whether you need a commercial website that establishes instant authority or an automated WhatsApp workflow that handles leads while you sleep, let&apos;s scope the right solution.
              </p>
            </div>

            {/* Fast Channel: WhatsApp Direct */}
            <div className="p-7 rounded-2xl product-card border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="uppercase tracking-widest">FASTEST CHANNEL</span>
                <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  WHATSAPP DIRECT
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white tracking-tight">
                Prefer immediate messaging on WhatsApp?
              </h3>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                If you already have a project brief or prefer real-time messaging, reach out directly. I respond personally to all genuine commercial inquiries within hours.
              </p>
              <div className="pt-2">
                <WhatsAppButton
                  service="general"
                  variant="primary"
                  label="Message Oluwaseun on WhatsApp"
                  className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#25D366] text-black hover:bg-[#20BA5A] transition-all shadow-md"
                />
              </div>
            </div>

            {/* Direct Commitments */}
            <div className="space-y-4 text-xs text-slate-400 pt-2 font-sans">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-md bg-white/10 text-white font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">
                  24h
                </span>
                <span>
                  <strong className="text-white">Guaranteed 24-Hour Turnaround:</strong> You will receive a structured response and feasibility estimate within one business day.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-md bg-white/10 text-white font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">
                  NDA
                </span>
                <span>
                  <strong className="text-white">Strict Confidentiality:</strong> Your project ideas, internal metrics, and technical requirements remain completely confidential.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl product-card-elevated border border-white/15 p-8 sm:p-12 shadow-2xl">
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8 font-sans">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-1">
                    PROJECT INTAKE
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                    Structured Project Scoping
                  </h3>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  CONFIDENTIAL
                </span>
              </div>

              <ProjectEnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

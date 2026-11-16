import React from "react";
import { ProjectEnquiryForm } from "@/components/forms/project-enquiry-form";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { MessageSquare, Clock, ShieldCheck, Mail, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-24 sm:py-32 bg-[#090B0E] text-white border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-2">
            START YOUR ENGAGEMENT
          </span>
          <h2
            id="contact-heading"
            className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Ready to turn traffic into paying clients?
          </h2>
          <p className="mt-4 text-base text-slate-300 font-sans leading-relaxed">
            Choose the lane that matches how fast you like to move. Direct senior engineer access on both.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Lane A: Fast-Track WhatsApp Direct */}
          <div className="lg:col-span-5 space-y-6 font-sans">
            <div className="p-8 rounded-2xl clean-card border border-emerald-500/30 bg-[#0C1318] space-y-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  LANE A: FAST-TRACK (2 MIN)
                </span>
                <span className="text-slate-400">PHONE FIRST</span>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
                  Prefer direct messaging or audio notes on WhatsApp?
                </h3>
                <p className="text-sm text-slate-300 font-sans leading-relaxed mt-2">
                  Send your current website URL or explain what you need built in 2 minutes. I personally review your request and send back a voice note or blueprint within hours.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href="https://wa.me/2348033285789?text=Hi%20Oluwaseun%2C%20I%20would%20like%20to%20discuss%20a%20project%20scope%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-extrabold uppercase tracking-wider bg-[#25D366] text-black hover:bg-[#20BA5A] transition-all shadow-lg active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Message Oluwaseun on WhatsApp</span>
                </a>
                <p className="text-[11px] text-center text-slate-400 font-mono">
                  Direct line to senior engineer • Average reply &lt; 30 mins
                </p>
              </div>

              {/* Direct Reassurances */}
              <div className="border-t border-white/10 pt-4 space-y-3 text-xs text-slate-300 font-sans">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict NDA &amp; commercial confidentiality</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Guaranteed same-day scoping feedback</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lane B: Structured Project Scoping Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl clean-card border border-white/15 p-8 sm:p-10 shadow-2xl">
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8 font-sans">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-1">
                    LANE B: STRUCTURED SCOPING (3 MIN)
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
                    Formal Project Blueprint
                  </h3>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
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

import React from "react";
import { ProjectEnquiryForm } from "@/components/forms/project-enquiry-form";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Clock, ShieldCheck, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-24 sm:py-32 bg-[#0B0D0C] text-[#F7F7F4] cyber-grid overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#D9F36A]/[0.05] blur-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-[#38BDF8]/[0.04] blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context, Value Proposition & WhatsApp direct channel */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <Badge variant="cyber" className="mb-4">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Initiate Project Conversation</span>
              </Badge>
              <h2
                id="contact-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight gradient-heading leading-tight"
              >
                Tell me what you&apos;re trying to build or improve.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#9EABA2] leading-relaxed">
                Whether you need a high-converting website, an automated workflow, or a more substantial digital product, let&apos;s discuss the problem and work out the right solution.
              </p>
            </div>

            {/* Fast Channel: WhatsApp Direct */}
            <div className="p-6 sm:p-7 rounded-2xl glass-panel-elevated border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#25D366]">
                <MessageSquare className="w-4 h-4" />
                <span>Preferred Fast Track</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Prefer a direct conversation on WhatsApp?
              </h3>
              <p className="text-xs sm:text-sm text-[#9EABA2] leading-relaxed">
                If you already have a project brief or prefer real-time messaging, reach out directly. I respond personally to all genuine commercial inquiries.
              </p>
              <div className="pt-2">
                <WhatsAppButton
                  service="general"
                  variant="primary"
                  label="Message Oluwaseun on WhatsApp"
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(37,211,102,0.25)]"
                />
              </div>
            </div>

            {/* Assurances */}
            <div className="space-y-4 pt-2 font-mono">
              <div className="flex items-start gap-3 text-xs text-[#9EABA2]">
                <Clock className="w-4 h-4 text-[#D9F36A] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Guaranteed 24h Turnaround:</strong> Structured response and initial feasibility assessment within one business day.
                </span>
              </div>

              <div className="flex items-start gap-3 text-xs text-[#9EABA2]">
                <ShieldCheck className="w-4 h-4 text-[#D9F36A] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Strict Confidentiality:</strong> Project ideas, metrics, and technical requirements remain completely confidential.
                </span>
              </div>

              <div className="flex items-start gap-3 text-xs text-[#9EABA2]">
                <Mail className="w-4 h-4 text-[#D9F36A] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Zero Spam Policy:</strong> No automated email marketing sequences or unsolicited sales follow-ups.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-2xl glass-panel-elevated border-white/10 shadow-2xl">
              <div className="pb-6 border-b border-white/[0.08] mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Project Enquiry & Scoping
                  </h3>
                  <span className="font-mono text-[10px] uppercase text-[#D9F36A] px-2 py-0.5 rounded bg-[#D9F36A]/10 border border-[#D9F36A]/20">
                    STAGE::INTAKE
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#9EABA2] mt-1 font-mono">
                  Complete this form to receive a structured scope review and estimate.
                </p>
              </div>

              <ProjectEnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

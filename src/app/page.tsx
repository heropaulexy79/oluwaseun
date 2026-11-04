import React from "react";
import { HeroSection } from "@/components/sections/hero";
import { ProblemsSection } from "@/components/sections/problems";
import { ServicesSection } from "@/components/sections/services";
import { ScopeEstimatorSection } from "@/components/sections/scope-estimator";
import { PortfolioSection } from "@/components/sections/portfolio";
import { ProcessSection } from "@/components/sections/process";
import { AboutSection } from "@/components/sections/about";
import { PartnershipSection } from "@/components/sections/partnership";
import { ContactSection } from "@/components/sections/contact";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

export default function HomePage() {
  return (
    <>
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <HeroSection />
        <ProblemsSection />
        <ServicesSection />
        <ScopeEstimatorSection />
        <PortfolioSection />
        <ProcessSection />
        <AboutSection />
        <PartnershipSection />
        <ContactSection />
      </main>
      <FloatingWhatsApp />
    </>
  );
}

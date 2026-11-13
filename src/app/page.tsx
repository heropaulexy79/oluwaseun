import React from "react";
import { HeroSection } from "@/components/sections/hero";
import { WhyPartnerSection } from "@/components/sections/why-partner";
import { PortfolioSection } from "@/components/sections/portfolio";
import { ScopeEstimatorSection } from "@/components/sections/scope-estimator";
import { ContactSection } from "@/components/sections/contact";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

export default function HomePage() {
  return (
    <>
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <HeroSection />
        <WhyPartnerSection />
        <PortfolioSection />
        <ScopeEstimatorSection />
        <ContactSection />
      </main>
      <FloatingWhatsApp />
    </>
  );
}

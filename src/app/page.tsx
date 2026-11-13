import React from "react";
import { HeroSection } from "@/components/sections/hero";
import { ProblemsSection } from "@/components/sections/problems";
import { PortfolioSection } from "@/components/sections/portfolio";
import { VisualBentoSection } from "@/components/sections/visual-bento";
import { ScopeEstimatorSection } from "@/components/sections/scope-estimator";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

export default function HomePage() {
  return (
    <>
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <HeroSection />
        <ProblemsSection />
        <PortfolioSection />
        <VisualBentoSection />
        <ScopeEstimatorSection />
        <AboutSection />
        <ContactSection />
      </main>
      <FloatingWhatsApp />
    </>
  );
}

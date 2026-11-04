export const siteConfig = {
  name: "Oluwaseun",
  tagline: "Web Development & AI Automation",
  role: "Software Engineer & Digital Solutions Consultant",
  headline: "I build digital experiences that win trust and intelligent systems that make business work better.",
  supportingCopy:
    "I help businesses build better digital experiences, streamline operations, and apply AI and automation to real business problems.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://oluwaseun.dev",
  ogImage: "/og-image.png",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  contactEmail: process.env.CONTACT_NOTIFICATION_EMAIL || "contact@oluwaseun.dev",
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Scope & Pricing", href: "#calculator" },
    { label: "Case Studies", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
  ],
  services: [
    {
      id: "web-development",
      name: "Web Development",
      eyebrow: "DIGITAL EXPERIENCES",
      tagline: "Business websites, landing pages, e-commerce experiences, and custom web applications built around your business goals.",
      startingPrice: "From ₦400,000",
      pricingNote: "Final pricing reflects scope, custom functionality, content preparation, integrations, and performance requirements. International projects quoted in USD/GBP/EUR.",
      ctaText: "Discuss a Website Project",
      deliverables: [
        "Business and corporate websites",
        "Conversion-focused landing pages",
        "E-commerce websites and catalogs",
        "Custom web applications & portals",
        "Website redesigns and performance overhauls",
        "Third-party API and business tool integrations",
      ],
      idealFor: "Businesses upgrading from generic templates or needing a high-converting digital storefront.",
    },
    {
      id: "ai-automation",
      name: "AI & Business Automation",
      eyebrow: "INTELLIGENT SYSTEMS",
      tagline: "Practical AI solutions and connected workflows that reduce repetitive work, improve response times, and help businesses operate more efficiently.",
      startingPrice: "Custom project pricing",
      pricingNote: "Scope and investment depend on workflow complexity, source data quality, system integrations, fallback rules, and operational risk.",
      ctaText: "Explore Automation Opportunities",
      deliverables: [
        "Custom AI assistants & knowledge retrieval bots",
        "Lead capture, qualification & CRM routing automation",
        "Multi-system workflow automation (Make / Zapier / Custom APIs)",
        "Business software and database synchronization",
        "Repetitive document and administrative task automation",
        "Custom AI-powered internal productivity tools",
      ],
      idealFor: "Growing teams drowning in manual copy-paste, delayed inquiries, or fragmented software tools.",
    },
    {
      id: "ongoing-support",
      name: "Ongoing Technical Support",
      eyebrow: "RELIABILITY & GROWTH",
      tagline: "Keep your website and business systems reliable, secure, and improving after launch.",
      startingPrice: "From ₦75,000/month",
      pricingNote: "Retainer packages depend on agreed update limits, monitoring frequency, and SLAs. Never mandatory—available where valuable.",
      ctaText: "Discuss Ongoing Support",
      deliverables: [
        "Routine website maintenance and security updates",
        "Technical troubleshooting and defect resolution",
        "Agreed content and functionality enhancements",
        "Uptime monitoring and backup checks where applicable",
        "Automation workflow maintenance and API upkeep",
        "Ongoing technical consultation and roadmap reviews",
      ],
      idealFor: "Organizations that rely on their digital infrastructure and require dependable engineering oversight.",
    },
  ],
  problems: [
    {
      number: "01",
      title: "Your website does not reflect the actual quality of your business",
      description:
        "First impressions make or break high-ticket trust. When prospects land on an outdated, slow, or template-heavy website, they question your credibility before you ever speak with them.",
      resolution: "Modern, high-performance web experiences engineered to build authority and convert interest.",
    },
    {
      number: "02",
      title: "Valuable leads slip away due to slow or inconsistent follow-up",
      description:
        "Inquiries coming from WhatsApp, contact forms, or email often sit unattended for hours. Every minute of delay decreases lead conversion rates dramatically.",
      resolution: "Automated instant acknowledgment, intelligent lead routing, and CRM synchronization.",
    },
    {
      number: "03",
      title: "Your team spends hours every week on repetitive administrative tasks",
      description:
        "Manually copying data between spreadsheets, re-typing invoice details, and managing customer status updates drains team focus and leads to expensive human errors.",
      resolution: "Tailored automation pipelines connecting your tools seamlessly so your staff focus on growth.",
    },
    {
      number: "04",
      title: "Your business tools are isolated and do not communicate",
      description:
        "When your payment provider, marketing software, CRM, and internal databases operate in silos, managers lack visibility and operations become fragile.",
      resolution: "Reliable custom API integrations that synchronize customer records and business events in real-time.",
    },
    {
      number: "05",
      title: "You need a custom digital product but lack an in-house engineering team",
      description:
        "Off-the-shelf software rarely fits proprietary business models. Hiring full-time engineers is costly and time-consuming when you need practical solutions delivered now.",
      resolution: "Senior-level end-to-end design, implementation, and deployment without agency overhead.",
    },
  ],
  processSteps: [
    {
      step: "01",
      name: "Discovery",
      headline: "Understand the core business problem",
      summary:
        "We audit your current digital footprint, customer journey, pain points, and commercial objectives. We identify what will truly move the needle before writing a single line of code.",
      deliverable: "Clear requirements document, architectural direction, and feasibility assessment.",
    },
    {
      step: "02",
      name: "Proposal",
      headline: "Define agreed scope, timeline, and investment",
      summary:
        "You receive an explicit, transparent proposal specifying exact deliverables, milestone schedules, fixed or milestone pricing, and defined success criteria with zero surprises.",
      deliverable: "Commercial proposal, contract terms, and milestone delivery roadmap.",
    },
    {
      step: "03",
      name: "Build",
      headline: "Engineered with precision and constant communication",
      summary:
        "Development begins using modern standards: high-performance code, responsive visual layouts, robust data models, and enterprise-grade security. Regular demo links keep you informed.",
      deliverable: "Staging environments, testable milestone builds, and status updates.",
    },
    {
      step: "04",
      name: "Launch",
      headline: "Production deployment, validation, and handover",
      summary:
        "We execute a checklist-driven rollout: DNS configuration, SSL security, performance optimization, SEO validation, and user documentation. We ensure everything functions under real traffic.",
      deliverable: "Production deployment, documentation, code repository handover, and training.",
    },
    {
      step: "05",
      name: "Improve",
      headline: "Continuous reliability, monitoring, and optimization",
      summary:
        "Digital assets thrive with care. We provide structured ongoing maintenance, proactive error monitoring, workflow adjustments, and feature iterations aligned with your evolving goals.",
      deliverable: "Monthly maintenance reports, backup audits, and priority support.",
    },
  ],
};

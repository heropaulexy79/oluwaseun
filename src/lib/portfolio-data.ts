import { ProjectItem } from "@/types/project";

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "lead-qualification-engine",
    title: "Intelligent Inbound Lead Routing & WhatsApp Qualification Engine",
    category: "AI & Automation",
    isPrototypeOrShowcase: true,
    badgeLabel: "Architecture Showcase",
    businessContext:
      "High-volume service and advisory businesses frequently lose prospect momentum due to slow triage and unstructured messaging across WhatsApp and web contact forms.",
    problemAddressed:
      "Inbound prospects arrived with incomplete briefs, requiring repetitive manual questioning by staff and causing valuable inquiries to cool down over hours of lag.",
    workDelivered: [
      "Event-driven webhook bridge connecting web landing triggers directly to WhatsApp Business APIs",
      "Context-aware AI qualification engine that parses project scope, timeline, and investment tier",
      "Automated lead scoring, CRM enrichment, and deduplication against existing customer records",
      "Real-time escalation dispatch alerts to staff with a concise, actionable project summary",
    ],
    techStack: ["Next.js App Router", "TypeScript", "AI APIs", "WhatsApp Webhooks", "Structured JSON Schema"],
    verifiableOutcome:
      "Engineered to compress lead qualification response times from hours to under 30 seconds with complete structured briefing.",
    interactivePreviewType: "lead-routing",
  },
  {
    id: "b2b-digital-platform",
    title: "High-Performance Commercial Catalog & Client Ordering Platform",
    category: "Web Development",
    isPrototypeOrShowcase: true,
    badgeLabel: "Architecture Showcase",
    businessContext:
      "Regional suppliers and B2B merchants requiring an authoritative digital catalog, rapid search across multi-variant inventory, and instant quote generation.",
    problemAddressed:
      "Legacy systems suffered from heavy load times, sluggish mobile filters, and fragmented inquiry flows that discouraged corporate buyers from self-servicing.",
    workDelivered: [
      "Lightweight, server-rendered Next.js catalog achieving sub-second first-contentful-paint",
      "Instant client-side multi-facet search with zero layout shift on mobile viewports",
      "Dynamic quote builder and downloadable commercial proposal specification",
      "Accessible design system adhering to WCAG 2.2 AA standards with optimized Core Web Vitals",
    ],
    techStack: ["Next.js", "React 19", "Tailwind CSS", "TypeScript", "Server Components"],
    verifiableOutcome:
      "Maintains perfect 100 SEO & accessibility scores with sub-1.2s Largest Contentful Paint on mobile connections.",
    interactivePreviewType: "ecommerce-portal",
  },
  {
    id: "ops-document-assistant",
    title: "Internal Operations Knowledge Assistant & Workflow Bridge",
    category: "Custom Digital Product",
    isPrototypeOrShowcase: true,
    badgeLabel: "Architecture Showcase",
    businessContext:
      "Growing teams and digital consultancies managing distributed SOP manuals, contracts, technical specifications, and client onboarding handbooks.",
    problemAddressed:
      "Staff routinely spent 1-2 hours daily searching through unindexed documentation, creating operational bottlenecks and inconsistent client communications.",
    workDelivered: [
      "Grounded semantic search indexing company manuals and service agreements with vector retrieval",
      "Strict citation guardrails ensuring the assistant only answers using verified company documentation",
      "Automated onboarding checklist generator that synchronizes task milestones into project trackers",
      "Privacy-conscious local caching preventing sensitive internal documents from unauthorized indexing",
    ],
    techStack: ["TypeScript", "Vector Search", "Zod Validation", "Next.js UI", "Webhook Pipelines"],
    verifiableOutcome:
      "Eliminated repetitive manual documentation lookups with deterministic citation-backed answers.",
    interactivePreviewType: "ai-ops",
  },
];

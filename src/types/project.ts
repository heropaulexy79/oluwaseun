export type ProjectCategory =
  | "Web Development"
  | "AI & Automation"
  | "Custom Digital Product";

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  isPrototypeOrShowcase?: boolean;
  badgeLabel?: string;
  businessContext: string;
  problemAddressed: string;
  workDelivered: string[];
  techStack: string[];
  verifiableOutcome?: string;
  interactivePreviewType: "lead-routing" | "ecommerce-portal" | "ai-ops";
  liveUrl?: string;
  githubUrl?: string;
}

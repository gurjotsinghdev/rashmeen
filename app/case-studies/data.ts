export type CaseStudySection = {
  title: string;
  description?: string;
  bullets?: string[];
  wide?: boolean;
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  link: string;
  role: string;
  product: string;
  timeline: string;
  summary: string;
  highlights: string[];
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "river-erp",
    title: "River ERP",
    subtitle: "B2B SaaS Product Case Study",
    link: "https://rivererp.com",
    role: "Product Manager (Self-directed)",
    product: "ERPNext-based SaaS for SMBs",
    timeline: "2024 - Present",
    summary:
      "Designed a transaction-based, unlimited-user ERP built for clarity, onboarding speed, and operational visibility.",
    highlights: [
      "Core workflows from purchase to payment",
      "Role-based dashboards and executive KPIs",
      "Transaction-based pricing aligned to usage",
    ],
    sections: [
      {
        title: "Problem",
        description:
          "Small and mid-sized wholesale and manufacturing businesses struggle to scale due to fragmented systems (spreadsheets, accounting software, disconnected tools). This causes poor inventory visibility, delayed financial insight, manual errors, and dependence on key staff.",
        wide: true,
      },
      {
        title: "Users",
        bullets: [
          "Business owners (decision makers)",
          "Operations and warehouse managers",
          "Finance and accounts teams",
        ],
      },
      {
        title: "Goals",
        bullets: [
          "Provide real-time visibility into sales, inventory, and receivables",
          "Reduce manual operational overhead",
          "Enable predictable, affordable ERP adoption for SMBs",
          "Improve time to value through faster onboarding",
        ],
      },
      {
        title: "Solution",
        description:
          "A transaction-based ERP with unlimited users, built on ERPNext and tailored for clarity with role-based dashboards and opinionated workflows.",
        wide: true,
      },
      {
        title: "Key Product Decisions",
        bullets: [
          "Defined core workflows: purchase to stock to sales to invoice to payment",
          "Designed role-based dashboards for owners, operations, and finance",
          "Prioritized executive KPIs over raw data tables",
          "Introduced transaction-based pricing aligned to business activity",
          "Simplified onboarding with preconfigured masters, reports, and workflows",
        ],
      },
      {
        title: "Execution",
        bullets: [
          "Authored PRDs for inventory, sales, purchasing, accounting, and dashboards",
          "Modeled master data, permissions, and workflows for realistic demo scenarios",
          "Built demo-ready dashboards to simulate real business usage",
          "Defined GTM positioning and pricing tiers for SMB adoption",
        ],
      },
      {
        title: "Success Metrics",
        bullets: [
          "Demo to paid conversion",
          "Time to first value (onboarding speed)",
          "Adoption of core workflows",
          "Reduction in manual reconciliation effort",
          "Customer retention and support load",
        ],
      },
      {
        title: "Key Learnings",
        bullets: [
          "SMBs value clarity and predictability over advanced features",
          "Dashboards drive adoption more than configuration flexibility",
          "Pricing transparency is critical for trust",
          "ERP adoption fails when UX prioritizes systems over users",
        ],
      },
    ],
  },
  {
    slug: "promptpromax",
    title: "PromptProMax",
    subtitle: "Prompt Discovery Platform Case Study",
    link: "https://promptpromax.com",
    role: "Product Manager (Product teardown + growth plan)",
    product: "Crowdsourced prompt library for makers, marketers, and builders",
    timeline: "2024",
    summary:
      "Reviewed the product experience, surfaced friction in discovery, and defined a roadmap to increase engagement and sponsor conversion.",
    highlights: [
      "Social-style prompt feed with clear taxonomy",
      "Reduced friction through one-click copy",
      "Sponsor placement designed for native fit",
    ],
    sections: [
      {
        title: "Problem",
        description:
          "Prompt seekers struggle to find high-quality prompts quickly, while platforms need a repeatable engagement loop to retain users and monetize traffic.",
        wide: true,
      },
      {
        title: "Users",
        bullets: [
          "Creators and builders looking for proven prompts",
          "Marketers and operators who need fast inspiration",
          "Sponsors and AI tool vendors seeking qualified exposure",
        ],
      },
      {
        title: "Goals",
        bullets: [
          "Improve prompt discovery speed",
          "Increase copy and save actions per session",
          "Grow repeat visits through curated collections",
          "Drive sponsor click-through without hurting UX",
        ],
      },
      {
        title: "Solution",
        description:
          "Recommended a social-style prompt feed with clear taxonomy, sticky filters, and one-click copy to reduce friction and increase engagement.",
        wide: true,
      },
      {
        title: "Key Product Decisions",
        bullets: [
          "Standardized prompt cards with category tags and quick copy actions",
          "Introduced featured collections to create weekly reasons to return",
          "Separated sponsor placements into high-visibility, low-distraction zones",
          "Added a prompt submission flow with lightweight curation",
        ],
      },
      {
        title: "Execution",
        bullets: [
          "Audited the information architecture and search behaviors",
          "Mapped conversion funnels for copy, save, and sponsor clicks",
          "Defined A/B tests for category ordering and homepage layout",
          "Outlined a growth loop connecting prompt uploads to sharing",
        ],
      },
      {
        title: "Success Metrics",
        bullets: [
          "Search to copy rate",
          "Prompts saved per session",
          "Return visits per week",
          "Sponsor click-through rate",
          "Prompt submission completion rate",
        ],
      },
      {
        title: "Key Learnings",
        bullets: [
          "Clear taxonomy reduces bounce and boosts depth of browsing",
          "One-click copy is the core activation moment",
          "Curated collections create habit-forming return triggers",
          "Sponsors convert when they feel native to the browsing flow",
        ],
      },
    ],
  },
];

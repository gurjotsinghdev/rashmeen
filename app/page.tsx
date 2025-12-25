import { socialLinks } from "./config";

type CaseStudySection = {
  title: string;
  description?: string;
  bullets?: string[];
  wide?: boolean;
};

type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  link: string;
  role: string;
  product: string;
  timeline: string;
  summary: string;
  sections: CaseStudySection[];
};

const highlights = [
  {
    title: "B2B SaaS focus",
    description: "ERP, inventory, finance, and operations systems built for SMB scale.",
  },
  {
    title: "Clarity over complexity",
    description: "I design workflows that reduce cognitive load and speed up onboarding.",
  },
  {
    title: "Outcome-driven roadmaps",
    description: "Decisions tied to revenue, retention, and time-to-value metrics.",
  },
];

const principles = [
  {
    title: "Start with the system, end with the user",
    description: "Map dependencies, then simplify the moment of action for each role.",
  },
  {
    title: "Make value visible fast",
    description: "Dashboards, quick wins, and preconfigured flows drive adoption.",
  },
  {
    title: "Price with transparency",
    description: "Predictable pricing builds trust and unlocks long-term retention.",
  },
  {
    title: "Ship the smallest complete workflow",
    description: "Build full end-to-end loops before adding edge-case depth.",
  },
];

const toolbox = [
  "PRDs and opportunity briefs",
  "Workflow modeling and data definitions",
  "Dashboard IA and KPI design",
  "Pricing and packaging",
  "Onboarding playbooks",
  "GTM positioning and sales enablement",
];

const caseStudies: CaseStudy[] = [
  {
    id: "river-erp",
    title: "River ERP",
    subtitle: "B2B SaaS Product Case Study",
    link: "https://rivererp.com",
    role: "Product Manager (Self-directed)",
    product: "ERPNext-based SaaS for SMBs",
    timeline: "2024 - Present",
    summary:
      "Designed River ERP, a transaction-based, unlimited-user ERP product focused on clarity, usability, and business outcomes over feature overload.",
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
          "Defined core workflows: Purchase to stock to sales to invoice to payment",
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
    id: "promptpromax",
    title: "PromptProMax",
    subtitle: "Prompt Discovery Platform Case Study",
    link: "https://promptpromax.com",
    role: "Product Manager (Product teardown + growth plan)",
    product: "Crowdsourced prompt library for makers, marketers, and builders",
    timeline: "2024",
    summary:
      "Reviewed the product experience, surfaced friction in discovery, and defined a roadmap to increase prompt engagement and sponsor conversion.",
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

export default function Page() {
  return (
    <div className="flex flex-col gap-16">
      <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 md:p-12 fade-up">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-neutral-100 blur-3xl" />
          <div className="absolute left-0 top-1/3 h-64 w-64 rounded-full bg-neutral-200/60 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>
        <div className="flex flex-col gap-6 md:max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            Product Manager
          </span>
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            I design B2B SaaS products that make complex operations feel obvious.
          </h1>
          <p className="text-base text-neutral-700 md:text-lg">
            Rashmeen Malhotra. I build ERP and AI workflow products that prioritize clarity,
            predictable pricing, and fast onboarding so teams see value in days, not quarters.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#case-studies"
              className="inline-flex items-center rounded-full border border-black px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
            >
              View case studies
            </a>
            <a
              href={socialLinks.email}
              className="inline-flex items-center rounded-full border border-black/15 px-5 py-2 text-sm font-medium text-black transition-colors hover:border-black"
            >
              Contact
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 transition-colors hover:text-black"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {highlights.map((item, index) => (
          <div
            key={item.title}
            className="rounded-2xl border border-black/10 bg-white p-5 fade-up"
            style={{ animationDelay: `${120 * (index + 1)}ms` }}
          >
            <h3 className="text-lg font-semibold text-black">{item.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
          </div>
        ))}
      </section>

      <section id="case-studies" className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            Case studies
          </p>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Product stories with outcomes and decisions.
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {caseStudies.map((study, index) => (
            <article
              key={study.id}
              className="rounded-3xl border border-black/10 bg-white p-6 md:p-8 fade-up"
              style={{ animationDelay: `${120 * (index + 1)}ms` }}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
                    {study.subtitle}
                  </span>
                  <h3 className="text-2xl font-semibold text-black">{study.title}</h3>
                  <p className="text-sm text-neutral-600">{study.summary}</p>
                </div>
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-black underline underline-offset-4"
                >
                  {study.link.replace("https://", "")}
                </a>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-black/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                    Role
                  </p>
                  <p className="mt-2 text-sm text-black">{study.role}</p>
                </div>
                <div className="rounded-2xl border border-black/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                    Product
                  </p>
                  <p className="mt-2 text-sm text-black">{study.product}</p>
                </div>
                <div className="rounded-2xl border border-black/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                    Timeline
                  </p>
                  <p className="mt-2 text-sm text-black">{study.timeline}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {study.sections.map((section) => (
                  <div
                    key={section.title}
                    className={`rounded-2xl border border-black/10 bg-white p-4 ${
                      section.wide ? "md:col-span-2" : ""
                    }`}
                  >
                    <h4 className="text-sm font-semibold text-black">{section.title}</h4>
                    {section.description && (
                      <p className="mt-2 text-sm text-neutral-600">
                        {section.description}
                      </p>
                    )}
                    {section.bullets && (
                      <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-neutral-600">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="principles" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            Principles
          </p>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            The product operating system I run.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-2xl border border-black/10 bg-white p-5"
            >
              <h3 className="text-base font-semibold text-black">{principle.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
            Toolbox
          </p>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            What I ship and how I deliver.
          </h2>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {toolbox.map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-2xl border border-black/10 bg-white p-4 text-sm text-neutral-700"
            >
              <span>{item}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Ready
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="rounded-3xl border border-black/10 bg-black px-8 py-10 text-white md:px-12"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 md:max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-300">
              Contact
            </p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              I am open to product leadership roles and advisory work.
            </h2>
            <p className="text-sm text-neutral-300">
              Looking for a PM who can translate operational complexity into a product
              people love? I am ready to help your teams ship with confidence.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={socialLinks.email}
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
            >
              Email me
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-300 underline underline-offset-4"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

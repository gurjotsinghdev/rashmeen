import Link from "next/link";
import { socialLinks } from "./config";
import { caseStudies } from "./case-studies/data";

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

const toolboxTracks = [
  {
    title: "Strategy and discovery",
    description: "Translate messy ops into crisp product bets.",
    items: [
      "Opportunity briefs and PRDs",
      "User journey and workflow mapping",
      "Executive KPI definitions",
    ],
  },
  {
    title: "Execution systems",
    description: "Ship complete, role-based workflows fast.",
    items: [
      "Data models and permissions",
      "Dashboard IA and reporting",
      "Release planning and QA notes",
    ],
  },
  {
    title: "Growth and monetization",
    description: "Make adoption and revenue predictable.",
    items: [
      "Pricing and packaging",
      "Onboarding playbooks",
      "Sales and GTM enablement",
    ],
  },
];

const toolboxSignals = [
  {
    title: "Clarity in week one",
    description: "Rapidly map the system, the users, and the leverage points.",
  },
  {
    title: "Value in week four",
    description: "Ship a complete workflow with measurable adoption signals.",
  },
  {
    title: "Momentum every quarter",
    description: "Roadmaps tied to revenue, retention, and time-to-value.",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col gap-16">
      <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 md:p-12 fade-up">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-neutral-100 blur-3xl float-slow" />
          <div className="absolute left-0 top-1/3 h-64 w-64 rounded-full bg-neutral-200/60 blur-3xl float-slower" />
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
            className="rounded-2xl border border-black/10 bg-white p-5 fade-up hover-lift"
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
            Quick snapshots. Full stories inside.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group rounded-3xl border border-black/10 bg-white p-6 fade-up hover-lift"
              style={{ animationDelay: `${120 * (index + 1)}ms` }}
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neutral-400">
                <span>{study.subtitle}</span>
                <span>{study.timeline}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-black">
                {study.title}
              </h3>
              <p className="mt-3 text-sm text-neutral-600">{study.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                {study.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between text-sm font-medium text-black">
                <span>View case study</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
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
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="rounded-2xl border border-black/10 bg-white p-5 fade-up hover-lift"
              style={{ animationDelay: `${100 * (index + 1)}ms` }}
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
            Hiring me gives you a full product system.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {toolboxTracks.map((track, index) => {
            const isFeatured = index === 1;
            return (
              <div
                key={track.title}
                className={`rounded-2xl border border-black/10 p-6 fade-up hover-lift ${
                  isFeatured ? "bg-black text-white" : "bg-white text-black"
                }`}
                style={{ animationDelay: `${120 * (index + 1)}ms` }}
              >
                <h3 className="mt-4 text-xl font-semibold">{track.title}</h3>
                <p className={`mt-2 text-sm ${isFeatured ? "text-neutral-300" : "text-neutral-600"}`}>
                  {track.description}
                </p>
                <ul className={`mt-4 space-y-2 text-sm ${isFeatured ? "text-neutral-300" : "text-neutral-600"}`}>
                  {track.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className={`mt-1 h-1.5 w-1.5 rounded-full ${isFeatured ? "bg-white" : "bg-black"}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-6">
          <div className="grid gap-4 md:grid-cols-3">
            {toolboxSignals.map((signal, index) => (
              <div
                key={signal.title}
                className="flex flex-col gap-2 fade-up"
                style={{ animationDelay: `${120 * (index + 1)}ms` }}
              >
                <h3 className="text-base font-semibold text-black">
                  {signal.title}
                </h3>
                <p className="text-sm text-neutral-600">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="rounded-3xl border border-black/10 bg-black px-8 py-10 text-white md:px-12 fade-up"
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

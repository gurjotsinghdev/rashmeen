import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "../data";
import { metaData, socialLinks } from "app/config";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);

  if (!study) {
    return;
  }

  return {
    title: `${study.title} Case Study`,
    description: study.summary,
    openGraph: {
      title: `${study.title} Case Study`,
      description: study.summary,
      url: `${metaData.baseUrl}/case-studies/${study.slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-10">
      <Link
        href="/#case-studies"
        className="text-sm text-neutral-500 transition-colors hover:text-black"
      >
        ← Back to case studies
      </Link>

      <section className="rounded-3xl border border-black/10 bg-white p-6 md:p-10 fade-up">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
              {study.subtitle}
            </span>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {study.title}
            </h1>
            <p className="text-sm text-neutral-600 md:text-base">
              {study.summary}
            </p>
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

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {study.highlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-2xl border border-black/10 bg-white p-4 text-sm text-neutral-700 hover-lift"
            >
              {highlight}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {study.sections.map((section) => (
          <div
            key={section.title}
            className={`rounded-2xl border border-black/10 bg-white p-5 hover-lift ${
              section.wide ? "md:col-span-2" : ""
            }`}
          >
            <h2 className="text-sm font-semibold text-black">{section.title}</h2>
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
      </section>

      <section className="rounded-3xl border border-black/10 bg-black px-6 py-8 text-white md:px-10 fade-up">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-300">
              Next step
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">
              Let&apos;s build the next workflow together.
            </h2>
            <p className="text-sm text-neutral-300">
              I partner with founders and product teams to ship clarity at scale.
            </p>
          </div>
          <div className="flex flex-col gap-2">
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

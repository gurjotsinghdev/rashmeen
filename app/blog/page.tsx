import Link from "next/link";
import type { Metadata } from "next";
import { formatDate, getBlogPosts } from "app/lib/posts";

export const metadata: Metadata = {
  title: "Insights",
  description: "Writing on product strategy, ERP workflows, and growth.",
};

export default function BlogIndex() {
  const posts = getBlogPosts().sort((a, b) =>
    a.metadata.publishedAt < b.metadata.publishedAt ? 1 : -1
  );

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neutral-500">
          Writing
        </p>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Insights on building products that ship value fast.
        </h1>
        <p className="text-sm text-neutral-600">
          Notes on ERP clarity, pricing, onboarding, and product execution.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-black/10 bg-white p-6 text-sm text-neutral-600">
          New posts are in progress. Check back soon.
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl border border-black/10 bg-white p-5 transition-shadow hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-base font-semibold text-black">
                    {post.metadata.title}
                  </h2>
                  <p className="mt-1 text-sm text-neutral-600">
                    {post.metadata.summary}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  {formatDate(post.metadata.publishedAt)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

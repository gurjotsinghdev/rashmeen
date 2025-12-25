import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Product case studies and teardowns",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Case Studies</h1>
      <div>
        {projects.map((project) => (
          <Link
            key={project.url}
            href={project.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{project.title}</h2>
              <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 text-[15px]">
                <span>{project.description}</span>
                <span className="text-neutral-300">•</span>
                <span>{project.year}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

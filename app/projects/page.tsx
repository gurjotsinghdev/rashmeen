import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div>
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{project.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-[15px]">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <h1 className="mt-16 mb-8 text-2xl font-medium tracking-tight">Dashboards</h1>
      <div>
        
          <Link
            key="hello"
            href="hello"
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">Sales Dashboard</h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-[15px]">
              Simulate company sales data
              </p>
            </div>
          </Link>

          <Link
            key="hello"
            href="hello"
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">Customer Behavior Dashboard</h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-[15px]">
              Churn or satisfaction survey data
              </p>
            </div>
          </Link>
        
      </div>
    </section>
    
  );
}

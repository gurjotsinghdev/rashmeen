import Link from "next/link";
import { metaData } from "../config";

const navItems = {
  "/#case-studies": { name: "Case Studies" },
  "/#principles": { name: "Principles" },
  "/#contact": { name: "Contact" },
};

export function Navbar() {
  return (
    <nav className="py-6 md:py-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {metaData.title}
        </Link>
        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-700">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-colors hover:text-black"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

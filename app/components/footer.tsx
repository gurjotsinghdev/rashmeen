import { metaData, socialLinks } from "app/config";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 pt-6 text-sm text-neutral-600">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-neutral-900">© {YEAR} {metaData.title}</span>
          <span>Product Manager building B2B SaaS and AI workflows.</span>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-neutral-700">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={socialLinks.email}>Email</a>
        </div>
      </div>
    </footer>
  );
}

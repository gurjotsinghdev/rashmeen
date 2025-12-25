export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "River ERP",
    year: 2024,
    description: "Transaction-based ERP product for SMBs",
    url: "https://rivererp.com",
  },
  {
    title: "PromptProMax",
    year: 2024,
    description: "Crowdsourced prompt discovery platform",
    url: "https://promptpromax.com",
  },
];

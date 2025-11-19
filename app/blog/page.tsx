import Image from "next/image";
import { socialLinks } from "./config";

const projects = [
  {
    title: "Sales Performance Dashboard",
    description: "Interactive Power BI dashboard analyzing regional sales trends, customer segments, and revenue forecasts with dynamic filtering.",
    tech: ["Power BI", "SQL", "Excel"],
    image: "/project1.jpg",
    github: "https://github.com/yourusername/sales-dashboard",
    demo: "https://demo-link.com"
  },
  {
    title: "Customer Churn Prediction",
    description: "ML model predicting customer churn with 89% accuracy using ensemble methods and feature engineering techniques.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    image: "/project2.jpg",
    github: "https://github.com/yourusername/churn-prediction"
  },
  {
    title: "Real-time Analytics Pipeline",
    description: "Data pipeline processing 100K+ daily transactions with automated ETL workflows and real-time monitoring dashboards.",
    tech: ["Python", "SQL", "Tableau", "NumPy"],
    image: "/project3.jpg",
    github: "https://github.com/yourusername/analytics-pipeline"
  },
  {
    title: "Sentiment Analysis Tool",
    description: "NLP-based sentiment analyzer for social media data using TensorFlow, providing insights into customer feedback trends.",
    tech: ["TensorFlow", "Python", "Jupyter", "VS Code"],
    image: "/project4.jpg",
    github: "https://github.com/yourusername/sentiment-analysis",
    demo: "https://demo-link.com"
  }
];

export default function Page() {
  return (
    <section className="max-w-5xl mx-auto px-4">
      {/* Hero Section */}
      <div className="prose prose-neutral dark:prose-invert mb-16">
        <h1 className="text-4xl font-bold mb-6">Data Analyst & AI Specialist</h1>
        <p className="text-lg">
          I'm a data analyst with a strong foundation in AI and Machine Learning,
          backed by a Postgraduate degree in Artificial Intelligence & ML.
        </p>
        <p className="text-lg">
          I transform data into actionable insights using Python, SQL, Power BI, Excel, 
          Pandas, NumPy, Scikit-learn, TensorFlow, Jupyter Notebooks, Tableau, 
          Matplotlib, and VS Code.
        </p>
        <p className="text-lg">
          If you're looking to hire a detail-oriented data analyst with a passion
          for AI-driven insights and clean visualizations, let's connect!
        </p>
        <div className="flex gap-4 mt-6">
          <a 
            href={socialLinks.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black rounded-lg hover:opacity-80 transition-opacity no-underline"
          >
            View GitHub
          </a>
          <a 
            href={socialLinks.twitter} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-neutral-900 dark:border-neutral-100 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors no-underline"
          >
            Connect
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-900 dark:text-neutral-100 hover:underline"
                  >
                    Code →
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-900 dark:text-neutral-100 hover:underline"
                    >
                      Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Python", "SQL", "Power BI", "Excel", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Tableau", "Matplotlib", "Jupyter", "VS Code"].map((skill, i) => (
            <div 
              key={i}
              className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg text-center hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
            >
              <span className="font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

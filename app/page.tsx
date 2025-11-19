import { socialLinks } from "./config";

const projects = [
  {
    title: "Sales Performance Dashboard",
    description: "Interactive Power BI dashboard analyzing regional sales trends, customer segments, and revenue forecasts with dynamic filtering.",
    tech: ["Power BI", "SQL", "Excel"],
    github: "https://github.com/yourusername/sales-dashboard",
    demo: "https://demo-link.com"
  },
  {
    title: "Customer Churn Prediction",
    description: "ML model predicting customer churn with 89% accuracy using ensemble methods and feature engineering techniques.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    github: "https://github.com/yourusername/churn-prediction"
  },
  {
    title: "Real-time Analytics Pipeline",
    description: "Data pipeline processing 100K+ daily transactions with automated ETL workflows and real-time monitoring dashboards.",
    tech: ["Python", "SQL", "Tableau", "NumPy"],
    github: "https://github.com/yourusername/analytics-pipeline"
  },
  {
    title: "Sentiment Analysis Tool",
    description: "NLP-based sentiment analyzer for social media data using TensorFlow, providing insights into customer feedback trends.",
    tech: ["TensorFlow", "Python", "Jupyter", "VS Code"],
    github: "https://github.com/yourusername/sentiment-analysis",
    demo: "https://demo-link.com"
  }
];

export default function Page() {
  return (
    <section className="max-w-7xl w-full px-4 sm:px-6 mx-auto">
      {/* Hero Section */}
      <div className="prose prose-neutral dark:prose-invert mb-12 sm:mb-16 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
          Rashmeen Malhotra - Data Scientist
        </h1>
        <p className="text-base sm:text-lg mb-2 sm:mb-3">
          I'm a Data Scientist with a strong foundation in AI and Machine Learning,
          backed by a Postgraduate degree in Artificial Intelligence & ML.
        </p>
        <p className="text-base sm:text-lg mb-2 sm:mb-3">
          I transform complex data into actionable insights using Python, SQL, Power BI, Excel, 
          Pandas, NumPy, Scikit-learn, TensorFlow, Jupyter Notebooks, Tableau, 
          Matplotlib, and VS Code.
        </p>
        <p className="text-base sm:text-lg mb-4 sm:mb-6">
          If you're looking to hire a detail-oriented Data Scientist with a passion
          for AI-driven insights and clean visualizations, let's connect!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <a 
            href={socialLinks.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-neutral-900 dark:border-neutral-100 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            View GitHub
          </a>
          <a 
            href={socialLinks.twitter} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-neutral-900 dark:border-neutral-100 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Connect
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4 text-sm sm:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 text-xs sm:text-sm bg-neutral-100 dark:bg-neutral-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-blue-600 hover:underline"
                >
                  Code →
                </a>
                {project.demo && (
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-blue-600 hover:underline"
                  >
                    Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center sm:text-left">Technical Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3">
          {["Python", "SQL", "Power BI", "Excel", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Tableau", "Matplotlib", "Jupyter", "VS Code"].map((skill, i) => (
            <div 
              key={i}
              className="p-2 sm:p-3 border border-neutral-200 dark:border-neutral-800 rounded-lg text-center text-xs sm:text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

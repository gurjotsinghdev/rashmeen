import Image from "next/image";
import { socialLinks } from "./config";
 

export default function Page() {
  return (
    <section>
      {/* <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a> */}
      
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a data analyst with a strong foundation in AI and Machine Learning,
          backed by a Postgraduate degree in Artificial Intelligence & ML.
        </p>
        <p>
  This portfolio showcases my expertise in transforming data into
  actionable insights using tools like Python, SQL, Power BI, Excel, 
  Pandas, NumPy, Scikit-learn, TensorFlow, Jupyter Notebooks, Tableau, 
  Matplotlib, and VS Code.
</p>
        
        
        <p>
          If you're looking to hire a detail-oriented data analyst with a passion
          for AI-driven insights and clean visualizations, let's connect!
        </p>

        <p className = "text-2xl">
          Explore my{" "}
          <a href="/projects">projects</a>, and visit my {" "}
          <a href={socialLinks.github} target="_blank">
            GitHub
          </a>{" "}
          to see more.
        </p>
      </div>
    </section>



  );
}

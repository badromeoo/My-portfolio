

import { portfolioProjects } from '../data'; 
import ProjectCard from '../components/ProjectCard'; 

const Portfolio = () => {
  return (
    
    <section id="portfolio" className="px-8 py-20">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">
          Portfolio Project
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            
            <ProjectCard key={project.title} project={project}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
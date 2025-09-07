
import React from 'react';

const skillCategories = [
  {
    title: 'Front-End',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Chakra UI'],
  },
  {
    title: 'Back-End',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Git', 'Docker', 'Jenkins', 'AWS', 'CI/CD', 'Vite'],
  },
];

const Skills = () => {
  return (
    
    <section id="skills" className="px-8 py-20">
      <div className="max-w-4xl mx-auto text-center">
       
        <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">
          Tech Stack
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category) => (
            
            <div key={category.title} className="p-6 border rounded-lg bg-slate-800/50 border-slate-700">
              
              <h3 className="mb-4 text-2xl font-semibold text-sky-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill) => (

                  <span key={skill} className="px-3 py-1 text-sm font-medium rounded-full bg-slate-700/50 text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
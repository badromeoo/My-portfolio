// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    // Ubah style kartu menjadi semi-transparan dengan border
    <div className="overflow-hidden transition-transform duration-300 transform border rounded-lg bg-slate-800/50 border-slate-700 hover:-translate-y-2">
      <img src={project.imageUrl} alt={`Tangkapan layar dari proyek ${project.title}`} className="object-cover w-full h-48"/>
      <div className="p-6">
        {/* Ubah warna teks judul kartu */}
        <h3 className="mb-2 text-xl font-bold text-slate-100">{project.title}</h3>
        {/* Ubah warna teks deskripsi */}
        <p className="mb-4 text-slate-300">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            // Ubah style "technology tags"
            <span key={tech} className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-sky-400/20 text-sky-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
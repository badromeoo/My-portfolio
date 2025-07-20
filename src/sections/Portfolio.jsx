// src/sections/Portfolio.jsx
import React from 'react';
import { portfolioProjects } from '../data'; // Impor data proyek
import ProjectCard from '../components/ProjectCard'; // Impor komponen kartu

const Portfolio = () => {
  return (
    // Hapus background section
    <section id="portfolio" className="px-8 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Ubah warna teks heading */}
        <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">
          Portfolio Project
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            // Menggunakan project.title sebagai key, ini praktik yang lebih baik
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
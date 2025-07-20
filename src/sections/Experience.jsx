// src/sections/Experience.jsx
import React from 'react';
import { workExperience } from '../data';

const Experience = () => {
  return (
    // Hapus background section
    <section id="experience" className="px-8 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Ubah warna teks heading */}
        <h2 className="mb-12 text-3xl font-bold text-center text-white md:text-4xl">
          Work Experience
        </h2>
        <div className="space-y-12">
          {workExperience.map((exp) => (
            <div key={exp.company} className="flex flex-col gap-6 md:flex-row">
              {/* Ubah warna teks untuk timeline dan perusahaan */}
              <div className="md:w-1/4">
                <p className="font-semibold text-slate-300">{exp.company}</p>
                <p className="text-sm text-slate-400">{exp.timeline}</p>
              </div>
              <div className="md:w-3/4">
                {/* Ubah warna teks untuk jabatan */}
                <h3 className="mb-2 text-xl font-bold text-slate-100">{exp.jobTitle}</h3>
                {/* Ubah warna teks untuk daftar tanggung jawab */}
                <ul className="space-y-2 list-disc list-inside text-slate-300">
                  {exp.responsibilities.map((res) => (
                    <li key={res}>{res}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
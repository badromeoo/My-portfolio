// src/sections/About.jsx
import React from "react";

const About = () => {
  const coreSkills = ["JavaScript", "React", "Node.js", "Python", "MongoDB"];
  const keyValues = ["On Time", "Details", "Team Works"];

  return (
    // Hapus background section
    <section id="about" className="px-8 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Ubah warna teks heading */}
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">About Me</h2>
        {/* Ubah warna teks paragraf dan warna aksen */}
        <p className="mb-12 text-lg text-slate-300">
          I am a <span className="font-bold text-sky-400">Junior Fullstack Developer</span> with one year of experience in website development. I possess expertise in building effective website solutions and am always committed to
          delivering the best results on every project. I created this portfolio as a demonstration of my professionalism and dedication to the development field.
        </p>

        <div className="grid gap-12 text-left md:grid-cols-2">
          {/* Core Skills */}
          <div>
            {/* Ubah warna teks sub-heading */}
            <h3 className="mb-4 text-2xl font-semibold text-slate-200">Main Skill</h3>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill) => (
                // Ubah style "skill pills" menjadi semi-transparan
                <span key={skill} className="px-3 py-1 text-sm font-semibold rounded-full bg-sky-400/20 text-sky-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Key Values */}
          <div>
            {/* Ubah warna teks sub-heading */}
            <h3 className="mb-4 text-2xl font-semibold text-slate-200">Work Principle</h3>
            {/* Ubah warna teks list */}
            <ul className="space-y-2 list-disc list-inside text-slate-300">
              {keyValues.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

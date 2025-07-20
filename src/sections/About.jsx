// src/sections/About.jsx
import React from "react";

const About = () => {
  const coreSkills = ["JavaScript", "React", "Node.js", "Python", "MongoDB"];
  const keyValues = ["Tepat Waktu", "Detail", "Komunikasi Jelas"];

  return (
    // Hapus background section
    <section id="about" className="px-8 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Ubah warna teks heading */}
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Tentang Saya
        </h2>
        {/* Ubah warna teks paragraf dan warna aksen */}
        <p className="mb-12 text-lg text-slate-300">
          Saya adalah <span className="font-bold text-sky-400">Junior Fullstack Developer</span> dengan pengalaman satu tahun dalam mengembangkan website. Saya memiliki keahlian dalam membangun solusi website yang efektif dan selalu berkomitmen memberikan hasil terbaik dalam setiap
          proyek. Portofolio ini saya buat sebagai wujud profesionalisme dan dedikasi saya di bidang development.
        </p>

        <div className="grid gap-12 text-left md:grid-cols-2">
          {/* Core Skills */}
          <div>
            {/* Ubah warna teks sub-heading */}
            <h3 className="mb-4 text-2xl font-semibold text-slate-200">Keahlian Utama</h3>
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
            <h3 className="mb-4 text-2xl font-semibold text-slate-200">Prinsip Kerja</h3>
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
// src/sections/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Mengirim...");

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY).then(
      (result) => {
        console.log("SUCCESS!", result.text);
        setStatus("Pesan berhasil terkirim!");
        form.current.reset();
      },
      (error) => {
        console.log("FAILED...", error.text);
        setStatus("Gagal mengirim pesan. Coba lagi.");
      }
    );
  };

  return (
    // Hapus background section
    <section id="contact" className="px-8 py-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Ubah warna teks heading dan paragraf */}
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Hubungi Saya</h2>
        <p className="mb-12 text-lg text-slate-300">Jika Anda tertarik untuk bekerja sama atau memiliki pertanyaan, jangan ragu untuk menghubungi saya.</p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6 text-left">
          <div>
            {/* Ubah warna teks label */}
            <label htmlFor="name" className="block text-sm font-medium text-slate-300">
              Nama
            </label>
            {/* Ubah style input */}
            <input type="text" id="name" name="name" required className="block w-full px-3 py-2 mt-1 rounded-md shadow-sm bg-slate-800/50 border-slate-700 text-slate-200 focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300">
              Email
            </label>
            <input type="email" id="email" name="email" required className="block w-full px-3 py-2 mt-1 rounded-md shadow-sm bg-slate-800/50 border-slate-700 text-slate-200 focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300">
              Pesan
            </label>
            <textarea id="message" name="message" rows="4" required className="block w-full px-3 py-2 mt-1 rounded-md shadow-sm bg-slate-800/50 border-slate-700 text-slate-200 focus:outline-none focus:ring-sky-500 focus:border-sky-500"></textarea>
          </div>
          <div className="text-center">
            {/* Ubah warna tombol submit */}
            <button type="submit" className="w-full px-6 py-3 font-bold text-white transition duration-300 rounded-lg bg-sky-500 hover:bg-sky-600">
              Kirim Pesan
            </button>
          </div>
        </form>

        {/* Ubah warna teks status */}
        {status && <p className="mt-4 text-center text-slate-300">{status}</p>}

        <div className="mt-12">
          {/* Ubah warna teks */}
          <p className="text-slate-400">Atau hubungi saya melalui:</p>
          <div className="flex justify-center mt-4 space-x-6">
            {/* Ubah warna link sosial media */}
            <a 
              href="https://www.linkedin.com/in/i-made-bintang-astawa-865918273" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-sky-400"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/badromeoo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-sky-400"
            >
              GitHub
            </a>
            <a href="mailto:astawabintang@gmail.com" className="text-slate-400 hover:text-sky-400">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

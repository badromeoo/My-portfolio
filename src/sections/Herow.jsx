import React from 'react';
// Impor komponen animasi
import BlurText from '../components/BlurText'; 
// Pastikan Anda menaruh gambar di folder assets
import Avatar from '../assets/professional-photo.png'; 

const Hero = ({ onScrollTo }) => {
  return (
    <section id="hero" className="z-10 flex flex-col items-center justify-center min-h-screen p-8 text-center md:flex-row md:text-left">
      <div className="mb-8 md:w-1/2 md:mb-0">
        
        {/* Cara penggunaan BlurText yang benar */}
        <BlurText 
        
        className="mb-2 text-5xl font-bold text-white">
          I Made Bintang Astawa
        </BlurText>
        
        <h2 className="mb-4 text-2xl font-semibold text-sky-400 md:text-3xl">
          Full-Stack Web Developer
        </h2>
        <p className="max-w-md mx-auto mb-6 text-lg text-slate-300 md:mx-0">
          Membangun solusi web yang skalabel dan berkinerja tinggi untuk kebutuhan bisnis Anda.
        </p>
        {/* Memperbaiki typo jAustify-center */}
        <div className="flex justify-center space-x-4 md:justify-start">
          <button 
            onClick={() => onScrollTo('portfolio')} 
            className="px-6 py-3 font-bold text-white transition duration-300 rounded-lg bg-sky-500 hover:bg-sky-600"
          >
            Lihat Portfolio
          </button>
          <button 
            onClick={() => onScrollTo('contact')} 
            className="px-6 py-3 font-bold transition duration-300 border rounded-lg border-slate-300 text-slate-300 hover:bg-slate-300 hover:text-slate-900"
          >
            Hubungi Saya
          </button>
        </div>
      </div>
      <div className="md:w-1/3">
        <img 
          src={Avatar} 
          alt="Professional Avatar" 
          className="object-cover w-64 h-64 mx-auto rounded-full shadow-lg md:w-80 md:h-80"
        />
      </div>
    </section>
  );
};

export default Hero;

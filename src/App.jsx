import React from "react";
import Hero from "./sections/Herow";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Silk from './components/Silk/Silk';

function App() {
  // Fungsi untuk menangani scroll ke section tertentu tetap dipertahankan
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    // Wadah utama yang menjadi patokan untuk posisi absolut
    <div className="relative w-full h-full">
      {/* LAPISAN 1: BACKGROUND (z-index: 0) */}
      <Silk
        speed={5}
        scale={1}
        color="#363579" // Warna diubah sesuai permintaan Anda
        noiseIntensity={1.5}
        rotation={0}
      />

      {/* LAPISAN 2: KONTEN UTAMA (z-index: 10) */}
      {/* Konten juga diposisikan absolut dan bisa di-scroll */}
      <main className="absolute top-0 left-0 z-10 w-full h-full overflow-y-auto">
        {/* Mengirim fungsi handleScrollTo sebagai prop ke Hero */}
        <Hero onScrollTo={handleScrollTo} />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;

// src/data.js
import ProjectImage1 from "./assets/rengoku.jpg"
import ProjectImage2 from "./assets/giyu.jpg"
import ProjectImage3 from "./assets/tanjiro.jpg"
import ClientImage4 from "./assets/hening.jpg"
import ClientImage5 from "./assets/dewa.jpg"
export const portfolioProjects = [
  {
    title: "Platform E-commerce untuk XYZ Retail",
    description: "Membangun platform e-commerce yang skalabel untuk memperluas jangkauan pasar dan mengefisiensikan proses penjualan.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    imageUrl: ProjectImage1, // Ganti dengan URL gambar proyek Anda
    // link: "#" // Opsional: Link ke proyek live atau GitHub
  },
  {
    title: "Aplikasi Manajemen Tugas",
    description: "Sebuah aplikasi web untuk membantu tim mengelola tugas harian, melacak progres, dan berkolaborasi secara efisien.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    imageUrl: ProjectImage2, // Ganti dengan URL gambar proyek Anda
    // link: "#"
  },
  {
    title: "Aplikasi Manajemen Tugas",
    description: "Sebuah aplikasi web untuk membantu tim mengelola tugas harian, melacak progres, dan berkolaborasi secara efisien.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS", ""],
    imageUrl: ProjectImage3, // Ganti dengan URL gambar proyek Anda
    // link: "#"
  },
  // Tambahkan proyek lainnya di sini
];

export const workExperience = [
  {
    jobTitle: "Full-Stack Web Developer",
    company: "Tech Solutions Inc.",
    timeline: "Januari 2021 - Sekarang",
    responsibilities: [
      "Mengembangkan dan memelihara aplikasi web full-stack menggunakan React dan Node.js.",
      "Berkolaborasi dengan desainer untuk menciptakan antarmuka yang responsif.",
      "Mengelola database dan mengoptimalkan query untuk performa.",
    ],
  },
  {
    jobTitle: "Junior Web Developer",
    company: "Digital Creations",
    timeline: "Juni 2019 - Desember 2020",
    responsibilities: [
      "Membantu tim senior dalam pengembangan fitur front-end.",
      "Melakukan testing dan debugging untuk memastikan kualitas kode.",
      "Mempelajari dan mengimplementasikan teknologi web baru.",
    ],
  },
];



// ... (kode impor gambar proyek yang sudah ada) ...
 // Ganti dengan foto klien/rekan

// ... (kode workExperience yang sudah ada) ...

// Tambahkan data baru di bawah ini
export const testimonials = [
  {
    quote: "Kerja samanya sangat luar biasa. Proyek selesai tepat waktu dengan kualitas yang melebihi ekspektasi. Sangat direkomendasikan!",
    name: "LADUSING",
    title: "CEO, Tech Solutions Inc.",
    imageUrl: ClientImage4,
  },
  {
    quote: "Kerja samanya sangat luar biasa. Proyek selesai tepat waktu dengan kualitas yang melebihi ekspektasi. Sangat direkomendasikan!",
    name: "RAJEG ",
    title: "CEO, Tech Solutions Inc.",
    imageUrl: ClientImage5,
  },
  // Tambahkan testimoni lain jika ada
];
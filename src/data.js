
import ProjectImage1 from "./assets/porto1.png"
import ProjectImage2 from "./assets/giyu.jpg"
import ProjectImage3 from "./assets/tanjiro.jpg"
import ClientImage4 from "./assets/hening.jpg"
import ClientImage5 from "./assets/dewa.jpg"


export const portfolioProjects = [
  {
    title: "Platform Tracking Crypto",
    description: "Building a scalable platform to track cryptocurrency investments and provide real-time analytics.",
    technologies: ["React.js", "Node.js", "MongoDB", "Vercel"],
    imageUrl: ProjectImage1, // Ganti dengan URL gambar proyek Anda
    // link: "#" // Opsional: Link ke proyek live atau GitHub
    link: "https://cryptotract-ashy.vercel.app/",
  },
  {
    title: "Task Management App",
    description: "A web application to help teams manage daily tasks, track progress, and collaborate efficiently.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    imageUrl: ProjectImage2, // Ganti dengan URL gambar proyek Anda
    // link: "#"
  },
  {
    title: "Task Management App",
    description: "A web application to help teams manage daily tasks, track progress, and collaborate efficiently..",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS", ],
    imageUrl: ProjectImage3, // Ganti dengan URL gambar proyek Anda
    // link: "#"
  },
  // Tambahkan proyek lainnya di sini
];

export const workExperience = [
  {
    jobTitle: "Full-Stack Web Developer",
    company: "Tech Solutions Inc.",
    timeline: "January 2021 - Now",
    responsibilities: [
      "Develope and maintain full-stack web applications using React and Node.js.",
      "Collaborate with designers to create responsive interfaces.",
      "Manage databases and optimize queries for performance.",
    ],
  },
  {
    jobTitle: "Junior Web Developer",
    company: "Digital Creations",
    timeline: "June 2019 - Desember 2020",
    responsibilities: [
      "Assisting senior team in front-end feature development.",
      "Perform testing and debugging to ensure code quality.",
      "Learning and implementing new web technologies."
    ],
  },
];



// ... (kode impor gambar proyek yang sudah ada) ...
 // Ganti dengan foto klien/rekan

// ... (kode workExperience yang sudah ada) ...

// Tambahkan data baru di bawah ini
export const testimonials = [
  {
    quote: "The collaboration was outstanding. The project was completed on time and the quality exceeded expectations. Highly recommended!",
    name: "LADUSING",
    title: "CEO, Tech Solutions Inc.",
    imageUrl: ClientImage4,
  },
  {
    quote: "The collaboration was outstanding. The project was completed on time and the quality exceeded expectations. Highly recommended!",
    name: "RAJEG ",
    title: "CEO, Tech Solutions Inc.",
    imageUrl: ClientImage5,
  },
  // Tambahkan testimoni lain jika ada
];
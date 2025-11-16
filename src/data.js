import ProjectImage1 from "./assets/porto1.png";
import ProjectImage2 from "./assets/srikandiva.png";
import ProjectImage3 from "./assets/bwd.png";
import ClientImage4 from "./assets/hening.jpg";
import ClientImage5 from "./assets/dewa.jpg";

export const portfolioProjects = [
  {
    title: "Platform Tracking Crypto",
    description: "Building a scalable platform to track cryptocurrency investments and provide real-time analytics.",
    technologies: ["React.js", "Node.js", "MongoDB", "Vercel"],
    imageUrl: ProjectImage1,

    link: "https://cryptotract-ashy.vercel.app/",
  },
  {
    title: "SrikandiVa",
    description: "A web application to help teams manage daily tasks, track progress, and collaborate efficiently.",
    technologies: ["Next.js", "Vercel", "Tailwind CSS", "Supabase", "Sanity"],
    imageUrl: ProjectImage2,

    link: "https://www.srikandiva.id/",
  },
  {
    title: "Bali Wedding Directory",
    description: "A web application to listing wedding services and vendors in Bali.",
    technologies: ["Next.js", "Vercel", "Tailwind CSS", "Supabase", "Sanity","TypeScript"],
    
    imageUrl: ProjectImage3,
    link: "https://www.baliweddingdirectory.com/",
  },
];

export const workExperience = [
  {
    jobTitle: "Full-Stack Web Developer Intern",
    company: "Incognito Asia",
    timeline: "August 2025 - November 2025",
    responsibilities: ["Develope and maintain full-stack web applications using React, Next.js, TypeScript, Node.js and supabase.", "Collaborate with designers to create responsive interfaces.", "Manage databases and optimize queries for performance."],
  },
 
];

// export const testimonials = [
//   {
//     quote: "The collaboration was outstanding. The project was completed on time and the quality exceeded expectations. Highly recommended!",
//     name: "LADUSING",
//     title: "CEO, Tech Solutions Inc.",
//     imageUrl: ClientImage4,
//   },
//   {
//     quote: "The collaboration was outstanding. The project was completed on time and the quality exceeded expectations. Highly recommended!",
//     name: "RAJEG ",
//     title: "CEO, Tech Solutions Inc.",
//     imageUrl: ClientImage5,
//   },
// ];

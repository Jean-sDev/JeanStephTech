import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import ScrollReveal from "scrollreveal";
import Parcours from "../components/Parcours";
import Skills from "../components/Skills";

export default function Home() {
  const author = {
    name: "JEAN - STÉPHANE DEV",
    email: "support@lordobitotech.xyz",
    phone: "+2250712668494",
  };

  const projects = [
    {
      id: 1,
      title: "BLOG JEAN - STEPH TECH",
      desc: "Blog of my project and personal business JEAN - STEPH TECH",
      link: "https://lordobitotech.xyz/blog",
      tags: ["React", "Vite", "Tailwind"],
    },
    {
      id: 3,
      title: "FREE - PANELS",
      desc: "A project that offers you the opportunity to have free pterodactyl servers, available as open source on GitHub.",
      link: "https://free-panels.lordobitotech.xyz",
      github: "https://github.com/Jean-sDev/FreePanel-Host",
      tags: ["React", "Vite", "TypeScript"],
    },
    {
      id: 2,
      title: "JEAN - STEPH TECH",
      desc: "The company portfolio built in React will give you access to all our creations.\nIt is also available as open source where you could use it for your personal use.",
      link: "https://lordobitotech.xyz",
      github: "https://github.com/Jean-sDev/JeanStephTech",
      tags: ["React", "Tailwind", "Vite"],
    },
    {
      id: 4,
      title: "FREE BOT",
      desc: "Retrouvez tous les services bots créé par JEAN - STEPH TECH et ses associés.",
      link: "https://free-bots.lordobitotech.xyz",
      tags: ["HTML", "CSS", "Node.js"],
    },
  ];

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 800,
      easing: "ease-in-out",
      origin: "bottom",
      interval: 200,
    });

    sr.reveal("section");
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-300 transition-colors duration-500">
      {/* Hero */}
      <Hero />

      {/* Parcours */}
      <Parcours />

      {/* Skills */}
      <Skills />

      {/* Our Projects*/}
      <Projects projects={projects} author={author} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

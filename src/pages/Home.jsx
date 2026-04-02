import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import ScrollReveal from "scrollreveal";
import Parcours from "../components/Parcours";
import Skills from "../components/Skills";

export default function Home() {
  const author = {
    name: "JEAN - STEPHANE TECH",
    email: "support@lordobitotech.xyz",
    phone: "+2250596259021",
  };

  const projects = [
    { id: 1, title: "BLOG JEAN - STEPH TECH", desc: "Blog of my project...", link: "https://www.lordobitotech.xyz/blog", tags: ["React", "Vite", "Tailwind"] },
    { id: 3, title: "FREE - PANELS", desc: "A project that offers...", link: "https://freepanels.lordobitotech.xyz", tags: ["React", "Vite", "TypeScript"] },
    { id: 2, title: "JEAN - STEPH TECH", desc: "The company website...", link: "https://lordobitotech.xyz", tags: ["React", "Tailwind", "Vite"] },
    { id: 4, title: "FREE BOT", desc: "Retrouvez tous les services...", link: "https://free-bots.lordobitotech.xyz", tags: ["HTML", "CSS", "Node.js"] },
    { id: 5, title: "FREE PANELS BOT (TG)", desc: "100% Free Pterodactyl...", link: "https://t.me/FreePterodactylPanels_Bot", tags: ["TypeScript", "Telegram Bot"] },
    { id: 6, title: "BLACK HAT VPS", desc: "Deploy your projects...", link: "https://www.blackhatvps.store", tags: ["TypeScript", "Vite", "React"] },
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
      <Hero />
      <Parcours />
      <Skills />

      <Projects 
        projects={projects.slice(0, 3)} 
        author={author} 
        showAllLink={true} 
      />

      <Footer />
    </div>
  );
}

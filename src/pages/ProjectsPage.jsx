// src/pages/ProjectsPage.jsx
import React from "react";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  const author = {     
name: "JEAN - STEPHANE TECH",
    email: "support@lordobitotech.xyz",
    phone: "+2250596259021", 
};
  const allProjects = [     
{
      id: 1,
      title: "BLOG JEAN - STEPH TECH",
      desc: "Blog of my project and personal business JEAN - STEPH TECH",
      github: "https://github.com/orgs/JeanStephTech/JeanStephTech/pages/Blog.jsx",
      link: "https://www.lordobitotech.xyz/blog",
      tags: ["React", "Vite", "Tailwind"],
    },
    {
      id: 3,
      title: "FREE - PANELS (Website)",
      desc: "A project that offers you the opportunity to have free pterodactyl servers, available as open source on GitHub.",
      link: "https://fps-web.lordobitotech.xyz",
      tags: ["React", "Vite", "TypeScript"],
    },
    {
      id: 2,
      title: "JEAN - STEPH TECH",
      desc: "The company website built in React will give you access to all our creations.\nIt is also available as open source where you could use it for your personal use.",
      link: "https://lordobitotech.xyz",
      github: "https://github.com/orgs/JeanStephTech/JeanStephTech",
      tags: ["React", "Tailwind", "Vite"],
    },
    {
      id: 4,
      title: "FREE BOT",
      desc: "Retrouvez tous les services bots créé par JEAN - STEPH TECH et ses associés.",
      link: "https://free-bots.lordobitotech.xyz",
      tags: ["HTML", "CSS", "Node.js"],
    },
{
      id: 5,
      title: "FREE PANELS BOT (TG)",
      desc: "100% Free Pterodactyl Hosting Bot! Deploy and manage your free Pterodactyl servers directly from Telegram.",
      link: "https://t.me/FreePterodactylPanels_Bot",
      tags: ["TypeScript", "Telegram Bot"],
    },
{
      id: 6,
      title: "BLACK HAT VPS",
      desc: "Deploy your projects on ultra-fast Cloud VPS servers with BlachatVPS. AMD EPYC™ processors, 100% NVMe storage, generous bandwidth, and built-in DDoS protection. Instant deployment.",
      link: "https://www.blackhatvps.store",
      tags: ["TypeScript", "Vite", "React"],
    },
 ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Projects projects={allProjects} author={author} />
      <Footer />
    </div>
  );
}

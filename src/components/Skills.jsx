import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
// Import des nouvelles icônes
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPhp, 
  FaPython, FaVuejs, FaLinux, FaGithub 
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiPostgresql, SiVercel, SiRender 
} from "react-icons/si";

export default function Skills() {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "50px",
      duration: 1000,
      easing: "ease-out",
      origin: "bottom",
      interval: 100,
      reset: false,
    });
  }, []);

  const skills = [
    // --- Tes compétences existantes ---
    { name: "React / Next.js", icon: <SiNextdotjs className="text-black dark:text-white w-12 h-12" />, desc: "SSR, Static generation and dynamic UI" },
    { name: "Vue.js", icon: <FaVuejs className="text-emerald-500 w-12 h-12" />, desc: "Progressive framework and reactive components" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 w-12 h-12" />, desc: "Typed, robust and scalable code" },
    
    // --- Nouvelles compétences Backend & IA ---
    { name: "Python", icon: <FaPython className="text-yellow-500 w-12 h-12" />, desc: "AI integration, Automation and Data Science" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 w-12 h-12" />, desc: "Relational database management and security" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-12 h-12" />, desc: "High-performance backend and APIs" },

    // --- Nouvelles compétences Infrastructure & DevOps ---
    { name: "Linux", icon: <FaLinux className="text-slate-700 dark:text-slate-300 w-12 h-12" />, desc: "Server administration and shell scripting" },
    { name: "Vercel & Render", icon: <SiVercel className="text-black dark:text-white w-12 h-12" />, desc: "Cloud deployment and CI/CD workflows" },
    { name: "GitHub", icon: <FaGithub className="text-slate-900 dark:text-white w-12 h-12" />, desc: "Version control and collaborative engineering" },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 dark:text-slate-100 reveal">
          Technical Stack & Expertise
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto reveal">
          We master the best modern tools to build fast, scalable, and intelligent digital products.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div 
              key={i} 
              className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 text-center shadow-md hover:shadow-2xl reveal hover:translate-y-[-8px] transition-all duration-300 border border-transparent hover:border-blue-500/30"
            >
              <div className="mb-5 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                {skill.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Parcours() {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "50px",
      duration: 1000,
      easing: "ease-out",
      origin: "bottom",
      interval: 150,
      reset: false,
    });
  }, []);

  const parcours = [
    {
      year: "2024",
      title: "The adventure begins",
      desc: "I started my journey as a self-taught developer. Passionate about technology and bots, I explored HTML, CSS and JavaScript through small personal projects.",
    },
    {
      year: "2024",
      title: "First WhatsApp bot",
      desc: "Creating my first WhatsApp bot. This step allowed me to understand automation, session management, and real-time communication with users.",
    },
    {
      year: "2025",
      title: "Launch of my first websites",
      desc: "Development of 3 websites, including educational platforms and portfolios. I applied my frontend knowledge to create modern, responsive, and accessible interfaces.",
    },
    {
      year: "2025",
      title: "JEAN - STEPH TECH",
      desc: "JEAN - STEPH TECH Foundation, my flagship project. Here, I combined my web development and bot skills to create professional solutions and advanced automation tools.",
    },
    {
      year: "2026",
      title: "Current projects and future vision",
      desc: "Ongoing development of innovative bots and websites, including the company website and other ambitious projects. Objective: to create solutions that automate tasks, improve the user experience and bring value to my clients.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-slate-900 dark:text-slate-100 reveal">
          Our Journey
        </h2>

        <div className="space-y-12">
          {parcours.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-start gap-6 reveal">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg md:text-xl">
                {step.year}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
                  {step.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

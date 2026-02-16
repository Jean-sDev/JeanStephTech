  import React from "react";

/* --- Icônes SVG --- */
const WebsiteIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 2a10 10 0 100 20 10 10 0 000-20Zm7.93 9h-3.09a15.56 15.56 0 00-1.34-5.03A8.03 8.03 0 0119.93 11ZM12 4.07c.86 1.17 1.53 2.86 1.87 4.93h-3.74c.34-2.07 1.01-3.76 1.87-4.93ZM4.07 13h3.09c.22 1.78.76 3.44 1.53 4.85A8.03 8.03 0 014.07 13Zm3.09-2H4.07a8.03 8.03 0 013.53-5.03A15.56 15.56 0 007.16 11Zm4.84 8.93c-.86-1.17-1.53-2.86-1.87-4.93h3.74c-.34 2.07 1.01 3.76-1.87 4.93ZM16.84 13h3.09a8.03 8.03 0 01-3.53 5.03c.77-1.41 1.31-3.07 1.53-4.85ZM10.13 13c.34 2.07 1.01 3.76 1.87 4.93.86-1.17 1.53-2.86 1.87-4.93h-3.74Z"/></svg>;
const WhatsAppIcon = () => <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current"><path d="M19.11 17.44c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.16-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.54-.44-.47-.61-.48l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26 0 1.33.98 2.61 1.12 2.79.14.18 1.92 2.94 4.66 4.12.65.28 1.16.45 1.55.58.65.21 1.25.18 1.72.11.52-.08 1.61-.66 1.84-1.29.23-.63.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32Z"/><path d="M16 3C8.82 3 3 8.82 3 16c0 2.82.92 5.42 2.47 7.53L3 29l5.66-2.43A12.94 12.94 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3Z"/></svg>;
const YouTubeIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C16.9 2.5 12 2.5 12 2.5h0s-4.9 0-8.6.3c-.4 0-1.3.1-2.1 1-.6.7-.8 2.4-.8 2.4S0 8.1 0 10v2c0 1.9.5 3.8.5 3.8s.2 1.7.8 2.4c.8.9 1.9.9 2.4 1 1.7.2 7.3.3 7.3.3s4.9 0 8.6-.3c.4 0 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.5-1.9.5-3.8v-2c0-1.9-.5-3.8-.5-3.8ZM9.75 14.02V7.98l6.25 3.02-6.25 3.02Z"/></svg>;
const GitHubIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.21.08 1.85 1.25 1.85 1.25 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.63-2.8 5.66-5.48 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12 12 0 0012 .5Z"/></svg>;

const teamMembers = [
  {
    name: "JEAN STEPH TECH",
    role: "FOUNDER & CEO",
    avatar: "https://i.pravatar.cc/150?u=jean",
    description: "Expert en solutions digitales et visionnaire technique.",
    links: { site: "https://lordobitotech.xyz", whatsapp: "#", youtube: "#", github: "#" }
  },
  {
    name: "STYVEN - EMMANUEL",
    role: "CO-FOUNDER & CTO",
    avatar: "", 
    description: "Spécialiste en architecture système et innovation logicielle.",
    links: { whatsapp: "#" }
  },
  {
    name: "IBRAHIMA BARRY",
    role: "CMO & COO",
    avatar: "https://i.pravatar.cc/150?u=ibrahima",
    description: "Responsable de la stratégie de marque et des opérations.",
    links: { github: "#", youtube: "#" }
  }
];

export default function Team() {
  return (
    <div className="min-h-screen py-16 px-6 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-blue-600 dark:text-blue-400">
          Notre Équipe
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((m, i) => (
            <div key={i} className="flex flex-col items-center p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl dark:shadow-none border border-slate-200 dark:border-slate-700">
              
              {/* Avatar Slot */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-blue-500 p-1">
                {m.avatar ? (
                  <img src={m.avatar} alt={m.name} className="w-full h-full rounded-full object-cover" />
                ) : (
                  <div className="w-full h-full rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-2xl font-bold">
                    {m.name[0]}
                  </div>
                )}
              </div>

              <h2 className="text-xl font-bold mb-1">{m.name}</h2>
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase mb-3">{m.role}</p>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm text-center mb-6">
                {m.description}
              </p>

              {/* Links */}
              <div className="flex gap-4 text-slate-500 dark:text-slate-400">
                {m.links.site && <a href={m.links.site} className="hover:text-blue-500 transition-colors"><WebsiteIcon /></a>}
                {m.links.whatsapp && <a href={m.links.whatsapp} className="hover:text-green-500 transition-colors"><WhatsAppIcon /></a>}
                {m.links.youtube && <a href={m.links.youtube} className="hover:text-red-500 transition-colors"><YouTubeIcon /></a>}
                {m.links.github && <a href={m.links.github} className="hover:text-black dark:hover:text-white transition-colors"><GitHubIcon /></a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Footer() {
  const socials = [
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg", url: "https://github.com/JeanStephTech" },
    { name: "LinkedIn", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg", url: "https://linkedin.com/in/JeanStephTech" },
    { name: "X", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg", url: "https://x.com/JeanStephTech" },
    { name: "Facebook", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg", url: "https://www.facebook.com/share/18LdKKrncj" },
    { name: "Instagram", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg", url: "https://instagram.com/JeanStephTech" },
    { name: "YouTube", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg", url: "https://youtube.com/@JeanStephDev" },
    { name: "Telegram", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/telegram.svg", url: "https://t.me/JeanStephTech" },
    { name: "WhatsApp", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg", url: "https://whatsapp.com/channel/0029Vb65HSyHwXbEQbQjQV26" },
  ];

  const quickLinks = [
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Terms of Use", url: "/terms" },
    { name: "Legal notice", url: "/legal" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <footer className="bg-white dark:bg-slate-900 border-t mt-16 py-12 text-slate-700 dark:text-slate-300">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Structure en colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          
          {/* Colonne 1: Branding / Description */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">JEAN - STEPH TECH</h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Innovating for tomorrow. Your technology partner for high-performance digital solutions.
            </p>
          </div>

          {/* Colonne 2: Liens rapides (Aligned vertically) */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 uppercase text-xs tracking-wider">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-fit"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Colonne 3: Social Networks */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 uppercase text-xs tracking-wider">Find us on</h3>
            <div className="flex flex-wrap gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <img 
                    src={s.icon} 
                    alt={s.name} 
                    className="w-5 h-5 dark:invert opacity-80 hover:opacity-100" 
                  />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Ligne de bas de page (Copyright) */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} <strong>JEAN - STEPH TECH</strong>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

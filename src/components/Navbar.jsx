import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Configuration des liens de navigation
  const links = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/team", label: "Team" },
    { path: "/blog", label: "Blog" },
  ];

  // Détecte uniquement le thème du système ou localStorage au chargement
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur border-b border-slate-200 dark:border-slate-700 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo & Nom */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://files.catbox.moe/z76f8f.png"
            alt="JEAN - STEPH TECH"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h1 className="text-lg font-bold text-slate-800 dark:text-slate-100">
              JEAN - STEPH TECH
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">DIGITAL SOLUTIONS</p>
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-blue-500 transition ${
                  isActive ? "text-blue-600 font-semibold" : "text-slate-700 dark:text-slate-200"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
          >
            Contact us
          </Link>
        </nav>

        {/* Bouton Menu Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded hover:bg-blue-50 dark:hover:bg-slate-800 transition text-slate-700 dark:text-slate-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setOpen(false)} 
              className="text-slate-700 dark:text-slate-200 hover:text-blue-500"
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium text-center"
          >
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
}

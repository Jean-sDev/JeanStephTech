import React, { useState, useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import Footer2 from "../components/Footer2";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const articlesData = [
  {
    id: 1,
    date: new Date("2025-11-09"),
    category: "Bots",
    title: "Crée ton propre Bot WhatsApp – Guide Complet 2025",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800",
    excerpt: "Apprends à créer un bot WhatsApp automatisé. Ce tuto couvre l'installation, les fichiers sources et le déploiement étape par étape.",
    content: (
      <div className="space-y-4">
        <p>Automation is an incredible productivity driver. This bot uses the Baileys library for a stable connection via QR code.</p>
        <p className="bg-blue-50 dark:bg-slate-800 p-3 rounded-lg border-l-4 border-blue-600">
          📹 Complete tutorial 👉 <a href="https://youtu.be/-24iwWriOCc" className="text-blue-600 font-bold underline" target="_blank" rel="noopener noreferrer">YouTube</a><br/>
          📦 Files ➡️ <a href="https://t.me/Lord_obito_tech_official/37" className="text-blue-600 font-bold underline" target="_blank" rel="noopener noreferrer">Download</a>
        </p>
      </div>
    ),
  },
  {
    id: 2,
    date: new Date("2025-11-11"),
    category: "Bots",
    title: "How to automate WhatsApp to boost your productivity",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
    excerpt: "Discover how to set up automatic commands and manage your contacts efficiently without wasting time.",
    content: <p>A well-configured bot can filter messages, send catalogues and even schedule appointments via calendar. It's a 24/7 assistant.</p>,
  },
  {
    id: 3,
    date: new Date("2025-11-13"),
    category: "Bots",
    title: "Top 5 projects to start with a bot",
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800",
    excerpt: "Want to get started but lacking ideas? Here are the most useful projects to practice on.",
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Notification bot :</strong> Weather alerts or news.</li>
        <li><strong>Download bot :</strong> Retrieves YouTube/TikTok videos via a link.</li>
        <li><strong>Quiz Bot :</strong> Make your WhatsApp groups more interactive.</li>
        <li><strong>Bot Reminder :</strong> So that you never forget an important task again.</li>
      </ul>
    ),
  },
  {
    id: 4,
    date: new Date("2025-11-15"),
    category: "Sites",
    title: "Mastering HTML5 & CSS3: The Basics of the Web",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800",
    excerpt: "Understanding a site's structure is essential. Learn semantic tags for better SEO."",
    content: <p>HTML provides structure, CSS enhances it. For AdSense, clean code with tags like <article> is a big advantage.</p>,
  },
  {
    id: 5,
    date: new Date("2025-11-17"),
    category: "Sites",
    title: "Optimizing React performance for SEO",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800",
    excerpt: "A slow website drives visitors away. Learn how to optimize your blog for Google.",
    content: <p>Use Lazy Loading, compress your images in WebP and favor Next.js for server-side rendering (SSR).</p>,
  },
  {
    id: 6,
    date: new Date("2025-11-20"),
    category: "IA",
    title: "Artificial Intelligence at the Service of Code",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
    excerpt: "How ChatGPT and Copilot are revolutionizing the way we develop today.",
    content: <p>AI helps to structure the code, but human expertise remains vital for security and true project customization.</p>,
  },
  {
    id: 7,
    date: new Date("2025-11-22"),
    category: "Sites",
    title: "Guide du Design Responsive : Mobile-First",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=800",
    excerpt: "Plus de 60% du trafic est mobile. Ton site doit être parfait sur smartphone pour être accepté par AdSense.",
    content: <p>Utilise les Flexbox et les Grids CSS. Tailwind facilite cela avec ses classes comme md:flex et lg:grid.</p>,
  },
  {
    id: 8,
    date: new Date("2025-11-25"),
    category: "Sécurité",
    title: "Sécuriser son application Web : Les bases",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
    excerpt: "Protéger les données utilisateurs est une priorité. Apprends à éviter les injections SQL.",
    content: <p>Valide toujours les entrées utilisateurs et force le HTTPS sur l'ensemble de ton domaine.</p>,
  },
  {
    id: 9,
    date: new Date("2025-11-28"),
    category: "Bots",
    title: "Déployer son Bot sur un VPS (24h/24)",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
    excerpt: "Marre de laisser ton PC allumé ? Utilise un VPS Linux pour faire tourner ton bot sans interruption.",
    content: <p>Avec PM2, tu peux gérer ton script Node.js à distance et le relancer automatiquement en cas de crash.</p>,
  },
  {
    id: 10,
    date: new Date("2025-12-01"),
    category: "Monétisation",
    title: "Préparer son blog pour Google AdSense",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800",
    excerpt: "Toutes les astuces pour être validé du premier coup par la régie publicitaire de Google.",
    content: <p>Contenu unique, pages légales (Confidentialité/Contact) et navigation fluide sont les clés du succès.</p>,
  },
  {
    id: 11,
    date: new Date("2025-12-05"),
    category: "IA",
    title: "Intégrer l'API OpenAI dans React",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=800",
    excerpt: "Ajoute une IA conversationnelle directement sur ton site web.",
    content: <p>Utilise une route API backend pour ne jamais exposer ta clé secrète OpenAI côté client (front-end).</p>,
  },
  {
    id: 12,
    date: new Date("2025-12-10"),
    category: "Bots",
    title: "Python vs Node.js pour les Bots",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
    excerpt: "Quel langage choisir pour ton prochain projet d'automatisation ?",
    content: <p>Node.js gagne sur la réactivité asynchrone (parfait pour WhatsApp), Python gagne sur le traitement de données.</p>,
  },
  {
    id: 13,
    date: new Date("2025-12-15"),
    category: "Bots",
    title: "Bot de gestion de groupe : Auto-kick & Bienvenue",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800",
    excerpt: "Automatise la modération de tes groupes WhatsApp pour éviter les spams.",
    content: <p>Supprime les liens publicitaires automatiquement et accueille les nouveaux membres avec un message personnalisé.</p>,
  },
  {
    id: 14,
    date: new Date("2025-12-18"),
    category: "Bots",
    title: "Protéger son bot WhatsApp du bannissement",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800",
    excerpt: "Les règles d'or pour que ton numéro ne soit pas bloqué par Meta.",
    content: <p>Évite les envois massifs et ajoute des délais aléatoires entre tes messages pour simuler un humain.</p>,
  },
  {
    id: 15,
    date: new Date("2025-12-22"),
    category: "Sites",
    title: "Créer un portfolio qui attire les clients",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800",
    excerpt: "Comment mettre en avant tes projets pour décrocher des missions en freelance.",
    content: <p>Focus sur 3 projets majeurs bien documentés plutôt que 10 projets moyens sans explications.</p>,
  },
  {
    id: 16,
    date: new Date("2025-12-25"),
    category: "Sites",
    title: "Introduction à TypeScript pour JS Devs",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800",
    excerpt: "Pourquoi le typage statique va sauver tes futurs projets de bugs stupides.",
    content: <p>TypeScript détecte les erreurs avant l'exécution. C'est le standard actuel en entreprise.</p>,
  },
  {
    id: 17,
    date: new Date("2025-12-28"),
    category: "Sites",
    title: "Tailwind CSS : Pro Designs ultra-rapides",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800",
    excerpt: "Oublie les fichiers CSS de 3000 lignes. Stylise tes composants en un clin d'œil.",
    content: <p>Le workflow utilitaire permet une maintenance simplifiée et des designs cohérents sans effort.</p>,
  },
  {
    id: 18,
    date: new Date("2026-01-02"),
    category: "Sites",
    title: "L'avenir du Web : Web3 et Décentralisation",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800",
    excerpt: "Comprendre la blockchain et comment elle impacte le développement web moderne.",
    content: <p>Focus sur la propriété des données et les interactions sans intermédiaires via les Smart Contracts.</p>,
  },
  {
    id: 19,
    date: new Date("2026-01-05"),
    category: "Sites",
    title: "Top 10 extensions VS Code en 2026",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800",
    excerpt: "Booste ta productivité avec les meilleurs outils pour ton éditeur de code.",
    content: <p>De Prettier à GitLens, découvre les outils indispensables pour un workflow professionnel.</p>,
  },
  {
    id: 20,
    date: new Date("2026-01-08"),
    category: "Bots",
    title: "Créer un bot Discord avec Node.js",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=800",
    excerpt: "Apprends à animer ton serveur Discord avec des commandes personnalisées.",
    content: <p>Discord.js offre une API très riche pour gérer les membres, les rôles et les salons vocaux.</p>,
  },
  {
    id: 21,
    date: new Date("2026-01-12"),
    category: "Sites",
    title: "Le guide du Dark Mode en CSS",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800",
    excerpt: "Implémente un mode sombre propre et respectueux des préférences utilisateur.",
    content: <p>Utilise les media queries 'prefers-color-scheme' pour un basculement automatique sans JS.</p>,
  },
  {
    id: 22,
    date: new Date("2026-01-15"),
    category: "Sites",
    title: "Apprendre le SQL pour gérer tes données",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800",
    excerpt: "Savoir requêter une base de données est la clé du Full-Stack.",
    content: <p>Focus sur PostgreSQL et MySQL. Apprends les SELECT, JOIN et les indexations de performance.</p>,
  },
];

export default function Blog() {
  const [expandedId, setExpandedId] = useState(null);
  const [filter, setFilter] = useState("All");
  const articleRefs = useRef([]);

  useEffect(() => {
    ScrollReveal().reveal(articleRefs.current, {
      origin: "bottom",
      distance: "30px",
      duration: 800,
      interval: 100,
      opacity: 0,
      cleanup: true
    });
  }, [filter]);

  const categories = ["All", ...new Set(articlesData.map(a => a.category))];

  const filteredArticles = filter === "All" 
    ? articlesData 
    : articlesData.filter(a => a.category === filter);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="max-w-5xl mx-auto p-6 space-y-12">
        
        <header className="text-center space-y-4 pt-10">
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 uppercase">
            Tech Blog
          </h1>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            Tutoriels, Bots, et Développement Web Moderne.
          </p>
        </header>

        {/* Filtres */}
        <div className="flex justify-center gap-2 flex-wrap bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-sm border dark:border-slate-800">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setExpandedId(null); }}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                filter === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none scale-105"
                  : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles */}
        <div className="grid gap-6">
          {filteredArticles.map((article, idx) => (
            <div
              key={article.id}
              ref={el => (articleRefs.current[idx] = el)}
              className="bg-white dark:bg-slate-900 border dark:border-slate-800 rounded-3xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => setExpandedId(expandedId === article.id ? null : article.id)}
                className={`w-full p-6 flex items-center gap-4 text-left font-bold text-xl transition-colors ${
                  expandedId === article.id ? "bg-blue-600 text-white" : "text-slate-800 dark:text-white"
                }`}
              >
                <span className="flex-1">{article.title}</span>
                <div className={`p-2 rounded-full border-2 ${expandedId === article.id ? "border-white" : "border-slate-200 dark:border-slate-700"}`}>
                   {expandedId === article.id ? "▲" : "▼"}
                </div>
              </button>

              {expandedId === article.id && (
                <div className="p-6 space-y-6 animate-fadeIn">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full md:w-1/3 h-48 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="flex-1 space-y-4">
                       <div className="flex items-center justify-between">
                         <span className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                           {article.category}
                         </span>
                         <span className="text-sm text-slate-400">
                            {format(article.date, "dd MMMM yyyy", { locale: fr })}
                         </span>
                       </div>
                       <p className="text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
                          {article.excerpt}
                       </p>
                       <div className="text-slate-600 dark:text-slate-400 leading-relaxed border-t dark:border-slate-800 pt-4">
                          {article.content}
                       </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer2 />
    </div>
  );
}

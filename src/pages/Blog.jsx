import React from "react";

export const articlesData = [
  {
    id: 1,
    date: new Date("2025-11-09"),
    category: "Bots",
    title: "Crée ton propre Bot WhatsApp : Le Guide Complet 2025",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800",
    excerpt: "Apprenez à créer un bot WhatsApp automatisé sans connaissances approfondies en codage. Ce tutoriel couvre l'installation et le déploiement.",
    content: (
      <div className="space-y-4">
        <p>L'automatisation de WhatsApp est devenue un levier de productivité indispensable. Que ce soit pour un usage personnel ou pour gérer une communauté, un bot permet de répondre instantanément à vos contacts.</p>
        <h3 className="font-bold text-lg">Étape 1 : Prérequis</h3>
        <p>Vous aurez besoin de Node.js installé sur votre ordinateur et d'un compte Telegram pour récupérer les fichiers sources. Le bot utilise la bibliothèque Baileys pour se connecter via QR Code.</p>
        <h3 className="font-bold text-lg">Étape 2 : Installation</h3>
        <p>Téléchargez les fichiers, ouvrez votre terminal dans le dossier et lancez la commande <code>npm install</code>. Une fois les dépendances installées, utilisez <code>npm start</code> pour générer le QR Code de connexion.</p>
        <p className="bg-blue-50 p-3 rounded dark:bg-slate-800">📹 Regarde le tuto complet ici 👉 <a href="https://youtu.be/-24iwWriOCc" className="text-blue-600 underline" target="_blank">YouTube</a></p>
        <p>📦 Fichiers du bot ➡️ <a href="https://t.me/Lord_obito_tech_official/37" className="text-blue-600 underline" target="_blank">Télécharger ici</a></p>
      </div>
    ),
  },
  {
    id: 2,
    date: new Date("2025-11-11"),
    category: "Bots",
    title: "Comment automatiser WhatsApp pour booster votre productivité",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
    excerpt: "Découvrez les secrets de l'automatisation intelligente. Gérez vos messages et gagnez du temps au quotidien.",
    content: (
      <div className="space-y-4">
        <p>L'automatisation ne consiste pas seulement à répondre "Bonjour". Il s'agit de créer des flux de travail réels. Un bot bien configuré peut filtrer les messages importants, envoyer des catalogues produits automatiquement et prendre des rendez-vous via une intégration calendrier.</p>
        <p>En utilisant des outils comme les Webhooks, votre bot devient un véritable assistant virtuel disponible 24h/24.</p>
      </div>
    ),
  },
  {
    id: 3,
    date: new Date("2025-11-13"),
    category: "Bots",
    title: "Top 5 des projets de bots pour débutants en programmation",
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800",
    excerpt: "Vous débutez ? Voici cinq idées de projets concrets pour pratiquer vos compétences en JavaScript et Python.",
    content: (
      <div className="space-y-4">
        <p>Rien ne vaut la pratique pour progresser. Voici notre sélection :</p>
        <ol className="list-decimal ml-6">
          <li><strong>Bot de Notifications :</strong> Pour recevoir des alertes météo ou des news chaque matin.</li>
          <li><strong>Bot de Téléchargement :</strong> Envoyez un lien, le bot retourne le fichier média (YouTube/TikTok).</li>
          <li><strong>Bot Quiz :</strong> Idéal pour animer des groupes WhatsApp.</li>
          <li><strong>Bot de Rappels :</strong> Programmez des messages pour vos tâches importantes.</li>
          <li><strong>Bot IA :</strong> Intégrez l'API d'OpenAI pour discuter avec une IA.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 4,
    date: new Date("2025-11-15"),
    category: "Sites",
    title: "Maîtriser HTML5 et CSS3 : Les fondations du Web Moderne",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800",
    excerpt: "Comprendre la structure d'un site web est la première étape pour devenir développeur.",
    content: (
      <div className="space-y-4">
        <p>Le HTML définit la structure de votre page tandis que le CSS apporte le style. Pour AdSense, un site doit être propre, rapide et sémantique. Utilisez des balises comme <code>&lt;article&gt;</code> pour aider Google à indexer votre contenu efficacement.</p>
      </div>
    ),
  },
  {
    id: 5,
    date: new Date("2025-11-17"),
    category: "Sites",
    title: "Optimiser les performances de son site React pour le SEO",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800",
    excerpt: "Un site lent fait fuir les utilisateurs. Découvrez comment améliorer le temps de chargement pour Google.",
    content: (
      <div className="space-y-4">
        <p>React est puissant mais peut être lourd. Utilisez le <strong>Lazy Loading</strong> pour ne charger que le nécessaire, compressez vos images au format WebP et privilégiez le rendu côté serveur (SSR) avec Next.js pour un SEO optimal et une validation AdSense plus rapide.</p>
      </div>
    ),
  },
  {
    id: 6,
    date: new Date("2025-11-20"),
    category: "IA",
    title: "L'intelligence Artificielle : Révolutionner le Code en 2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
    excerpt: "Comment les outils comme ChatGPT et Copilot changent la donne pour les développeurs web.",
    content: (
      <div className="space-y-4">
        <p>L'IA permet aujourd'hui de générer des structures de code complexes en quelques secondes. Pour AdSense, évitez le copier-coller pur : utilisez l'IA pour structurer vos idées, mais apportez toujours votre expertise personnelle pour garantir l'originalité du contenu.</p>
      </div>
    ),
  },
  {
    id: 7,
    date: new Date("2025-11-22"),
    category: "Sites",
    title: "Guide du Design Responsive : Rendre votre site mobile-friendly",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=800",
    excerpt: "Plus de 60% du trafic est mobile. Si votre site ne s'affiche pas bien sur smartphone, AdSense pourrait refuser votre candidature.",
    content: (
      <div className="space-y-4">
        <p>Le design responsive utilise les Media Queries pour adapter la mise en page. Avec Tailwind CSS, c'est très simple grâce aux préfixes comme <code>md:</code> ou <code>lg:</code>. Testez toujours votre blog sur différents écrans avant de soumettre à Google.</p>
      </div>
    ),
  },
  {
    id: 8,
    date: new Date("2025-11-25"),
    category: "Sécurité",
    title: "Sécuriser son application Web : Les bases essentielles",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
    excerpt: "Protéger les données de vos utilisateurs est une priorité absolue. Apprenez à contrer les attaques courantes.",
    content: (
      <div className="space-y-4">
        <p>La sécurité commence par la validation des données d'entrée. Ne faites jamais confiance aux formulaires utilisateurs. Utilisez des protocoles HTTPS et gardez vos dépendances npm à jour pour éviter les failles critiques comme les injections XSS.</p>
      </div>
    ),
  },
  {
    id: 9,
    date: new Date("2025-11-28"),
    category: "Bots",
    title: "Déployer son Bot sur un VPS : Guide étape par étape",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
    excerpt: "Apprenez à utiliser un VPS pour faire tourner votre bot WhatsApp 24h/24 sans interruption.",
    content: (
      <div className="space-y-4">
        <p>Un VPS permet d'exécuter vos scripts sur un serveur distant. Utilisez un gestionnaire de processus comme <strong>PM2</strong> pour que votre bot redémarre automatiquement en cas de bug ou de redémarrage du serveur, assurant une disponibilité constante.</p>
      </div>
    ),
  },
  {
    id: 10,
    date: new Date("2025-12-01"),
    category: "Monétisation",
    title: "Comment préparer son blog pour l'acceptation Google AdSense",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800",
    excerpt: "Toutes les astuces pour maximiser vos chances d'être validé par la régie publicitaire de Google.",
    content: (
      <div className="space-y-4">
        <p>Google vérifie le contenu unique, la présence de pages légales (Confidentialité, Contact) et la navigation fluide. Avoir une vingtaine d'articles de qualité et une interface propre est essentiel pour une validation rapide.</p>
      </div>
    ),
  },
  {
    id: 11,
    date: new Date("2025-12-05"),
    category: "IA",
    title: "Intégrer l'API OpenAI dans un projet React",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=800",
    excerpt: "Ajoutez une touche d'intelligence à vos sites web en intégrant des chatbots GPT-4 personnalisés.",
    content: (
      <div className="space-y-4">
        <p>L'intégration se fait via des appels API sécurisés. Attention : ne stockez jamais votre clé API dans le code front-end (client). Utilisez une fonction backend pour protéger vos accès et vos crédits OpenAI.</p>
      </div>
    ),
  },
  {
    id: 12,
    date: new Date("2025-12-10"),
    category: "Bots",
    title: "Python vs Node.js pour la création de Bots : Le duel",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
    excerpt: "Quel langage choisir pour votre prochain projet ? Comparaison des performances.",
    content: (
      <div className="space-y-4">
        <p>Node.js est ultra-performant pour les applications en temps réel grâce à son architecture non-bloquante. Python est plus simple pour l'IA et le traitement de données. Pour un bot réactif, Node.js reste le meilleur choix.</p>
      </div>
    ),
  },
  {
    id: 13,
    date: new Date("2025-12-15"),
    category: "Bots",
    title: "Bot de gestion de groupe : Auto-kick et Bienvenue",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800",
    excerpt: "Automatisez la modération de vos groupes WhatsApp pour gagner du temps.",
    content: (
      <div className="space-y-4">
        <p>Gérer un groupe actif demande beaucoup d'efforts. Un bot peut supprimer les liens publicitaires, bannir les spammeurs et accueillir les nouveaux membres avec les règles du groupe de façon instantanée, garantissant une communauté saine.</p>
      </div>
    ),
  },
  {
    id: 14,
    date: new Date("2025-12-18"),
    category: "Bots",
    title: "Comment protéger son bot WhatsApp du bannissement",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800",
    excerpt: "Découvrez les règles d'or pour que votre numéro ne soit pas bloqué par WhatsApp.",
    content: (
      <div className="space-y-4">
        <p>WhatsApp interdit le spam. Pour éviter le ban, n'envoyez pas de messages massifs à des personnes qui n'ont pas enregistré votre numéro. Ajoutez des délais aléatoires entre vos messages pour simuler un comportement humain.</p>
      </div>
    ),
  },
  {
    id: 15,
    date: new Date("2025-12-22"),
    category: "Sites",
    title: "Créer un portfolio de développeur qui attire les clients",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800",
    excerpt: "Votre portfolio est votre carte de visite. Apprenez à mettre en avant vos projets tech.",
    content: (
      <div className="space-y-4">
        <p>Un bon portfolio doit montrer ce que vous savez faire. Choisissez vos 3 meilleurs projets, expliquez les technos utilisées (React, Node, Tailwind) et ajoutez des liens vers le code source sur GitHub pour prouver vos compétences.</p>
      </div>
    ),
  },
  {
    id: 16,
    date: new Date("2025-12-25"),
    category: "Sites",
    title: "Introduction à TypeScript pour les développeurs JS",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800",
    excerpt: "Pourquoi passer à TypeScript ? Découvrez comment le typage sauve vos projets.",
    content: (
      <div className="space-y-4">
        <p>TypeScript ajoute une couche de sécurité à JavaScript. Il permet de détecter les erreurs pendant le développement plutôt qu'en production. C'est aujourd'hui une compétence indispensable pour tout développeur professionnel.</p>
      </div>
    ),
  },
  {
    id: 17,
    date: new Date("2025-12-28"),
    category: "Sites",
    title: "Tailwind CSS : Créer des designs pro en un temps record",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800",
    excerpt: "Oubliez les fichiers CSS interminables. Apprenez à styliser directement dans le HTML.",
    content: (
      <div className="space-y-4">
        <p>Tailwind révolutionne le workflow. Au lieu d'écrire du CSS classique, vous utilisez des classes utilitaires (ex: <code>flex bg-blue-500</code>). Cela rend votre code plus léger et extrêmement facile à maintenir sur le long terme.</p>
      </div>
    ),
  },
  {
    id: 18,
    date: new Date("2026-01-02"),
    category: "Sites",
    title: "L'avenir du Web : Web3 et Décentralisation",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800",
    excerpt: "Qu'est-ce que le Web3 ? Comprendre la différence entre le web traditionnel et le futur.",
    content: (
      <div className="space-y-4">
        <p>Le Web3 repose sur la technologie blockchain. Il permet aux utilisateurs de posséder leurs propres données sans dépendre des géants centraux. Nous explorerons les Smart Contracts et les portefeuilles crypto (MetaMask).</p>
      </div>
    ),
  },
  {
    id: 19,
    date: new Date("2026-01-05"),
    category: "Sites",
    title: "Top 10 des extensions VS Code indispensables en 2025",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800",
    excerpt: "Optimisez votre éditeur de code pour coder plus vite et sans erreurs.",
    content: (
      <div className="space-y-4">
        <p>De Prettier pour le formatage à GitHub Copilot pour l'aide à l'écriture, découvrez les extensions qui me permettent de gagner des heures chaque semaine sur mes projets React et Node.js.</p>
      </div>
    ),
  },
  {
    id: 20,
    date: new Date("2026-01-08"),
    category: "Bots",
    title: "Comment créer un bot Discord complet avec Node.js",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=800",
    excerpt: "Discord.js est l'outil parfait pour animer vos communautés. Apprenez à coder votre bot.",
    content: (
      <div className="space-y-4">
        <p>Le bot Discord permet de gérer des rôles et de créer des mini-jeux. Nous verrons comment utiliser les Slash Commands pour une interface moderne et comment héberger le bot sur un serveur permanent.</p>
      </div>
    ),
  },
  {
    id: 21,
    date: new Date("2026-01-12"),
    category: "Sites",
    title: "Le guide complet du Dark Mode en CSS",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800",
    excerpt: "Le mode sombre est devenu une exigence utilisateur. Apprenez à l'implémenter proprement.",
    content: (
      <div className="space-y-4">
        <p>Utilisez les variables CSS ou Tailwind CSS pour offrir un mode sombre à vos lecteurs. C'est meilleur pour les yeux et cela donne un aspect moderne et premium à votre blog personnel.</p>
      </div>
    ),
  },
  {
    id: 22,
    date: new Date("2026-01-15"),
    category: "Sites",
    title: "Apprendre le SQL : Gérer les bases de données de son site",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800",
    excerpt: "Le stockage de données est crucial. Apprenez à utiliser PostgreSQL pour vos applications.",
    content: (
      <div className="space-y-4">
        <p>Apprenez les bases du langage SQL : SELECT, INSERT, UPDATE. Savoir gérer une base de données est la compétence clé qui sépare un développeur front-end d'un développeur Full-Stack complet.</p>
      </div>
    ),
  },
];

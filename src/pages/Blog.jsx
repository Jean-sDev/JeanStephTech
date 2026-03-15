const articlesData = [
  {
    id: 1,
    date: new Date("2025-11-09"),
    category: "Bots",
    title: "Crée ton propre Bot WhatsApp : Le Guide Complet 2025",
    excerpt: "Apprenez à créer un bot WhatsApp automatisé sans connaissances approfondies en codage. Ce tutoriel couvre l'installation, la configuration et le déploiement.",
    content: (
      <div className="space-y-4">
        <p>L'automatisation de WhatsApp est devenue un levier de productivité indispensable. Que ce soit pour un usage personnel ou pour gérer une communauté, un bot permet de répondre instantanément à vos contacts.</p>
        <h3 className="font-bold text-lg">Étape 1 : Prérequis</h3>
        <p>Vous aurez besoin de Node.js installé sur votre ordinateur et d'un compte Telegram pour récupérer les fichiers sources. Le bot utilise la bibliothèque Baileys pour se connecter via QR Code.</p>
        <h3 className="font-bold text-lg">Étape 2 : Installation</h3>
        <p>Téléchargez les fichiers, ouvrez votre terminal dans le dossier et lancez la commande <code>npm install</code>. Une fois les dépendances installées, utilisez <code>npm start</code> pour générer le QR Code de connexion.</p>
        <p className="bg-blue-50 p-3 rounded">📹 Regarde le tuto complet ici 👉 <a href="https://youtu.be/-24iwWriOCc" className="text-blue-600 underline" target="_blank">YouTube</a></p>
        <p>📦 Fichiers du bot ➡️ <a href="https://t.me/Lord_obito_tech_official/37" className="text-blue-600 underline" target="_blank">Télécharger ici</a></p>
      </div>
    ),
  },
  {
    id: 2,
    date: new Date("2025-11-11"),
    category: "Bots",
    title: "Comment automatiser WhatsApp pour booster votre productivité",
    excerpt: "Découvrez les secrets de l'automatisation intelligente. Gérez vos messages, créez des répondeurs automatiques et gagnez du temps au quotidien.",
    content: (
      <div className="space-y-4">
        <p>L'automatisation ne consiste pas seulement à répondre "Bonjour". Il s'agit de créer des flux de travail. Un bot bien configuré peut :</p>
        <ul className="list-disc ml-6">
          <li>Filtrer les messages importants des spams.</li>
          <li>Envoyer des catalogues produits automatiquement.</li>
          <li>Prendre des rendez-vous via une intégration calendrier.</li>
        </ul>
        <p>En utilisant des outils comme Webhooks ou des scripts personnalisés, votre bot devient un véritable assistant virtuel disponible 24h/24.</p>
      </div>
    ),
  },
  {
    id: 3,
    date: new Date("2025-11-13"),
    category: "Bots",
    title: "Top 5 des projets de bots pour débutants en programmation",
    excerpt: "Vous débutez ? Voici cinq idées de projets concrets pour pratiquer vos compétences en JavaScript et Python tout en créant des outils utiles.",
    content: (
      <div className="space-y-4">
        <p>Rien ne vaut la pratique pour progresser. Voici notre sélection :</p>
        <ol className="list-decimal ml-6">
          <li><strong>Bot de Notifications :</strong> Pour recevoir des alertes météo ou des news chaque matin.</li>
          <li><strong>Bot de Téléchargement :</strong> Envoyez un lien YouTube/TikTok au bot, et il vous retourne le fichier MP4.</li>
          <li><strong>Bot de Quiz interactif :</strong> Idéal pour animer des groupes WhatsApp.</li>
          <li><strong>Bot de Rappels :</strong> Programmez des messages pour ne plus oublier vos tâches.</li>
          <li><strong>Bot IA (ChatGPT) :</strong> Intégrez l'API d'OpenAI pour discuter avec une IA directement sur WhatsApp.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 4,
    date: new Date("2025-11-15"),
    category: "Sites",
    title: "Maîtriser HTML5 et CSS3 : Les fondations du Web Moderne",
    excerpt: "Comprendre la structure d'un site web est la première étape pour devenir développeur. Apprenez les balises sémantiques et le design responsive.",
    content: (
      <div className="space-y-4">
        <p>Le HTML (HyperText Markup Language) définit la structure de votre page. Le CSS (Cascading Style Sheets) apporte la beauté et l'ergonomie. Pour AdSense, un site doit être propre et rapide.</p>
        <h3 className="font-bold text-lg">Pourquoi la sémantique est cruciale ?</h3>
        <p>Utiliser des balises comme <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code> et <code>&lt;header&gt;</code> aide Google à comprendre votre contenu, ce qui améliore votre SEO (référencement).</p>
      </div>
    ),
  },
  {
    id: 5,
    date: new Date("2025-11-17"),
    category: "Sites",
    title: "Optimiser les performances de son site React pour le SEO",
    excerpt: "Un site lent fait fuir les utilisateurs et Google. Découvrez comment améliorer le temps de chargement et le score Lighthouse de votre blog.",
    content: (
      <div className="space-y-4">
        <p>React est puissant, mais peut être lourd. Voici 3 conseils pour optimiser votre application :</p>
        <ul className="list-disc ml-6">
          <li><strong>Lazy Loading :</strong> Ne chargez les composants que lorsqu'ils sont nécessaires.</li>
          <li><strong>Compression d'images :</strong> Utilisez des formats comme WebP au lieu du PNG.</li>
          <li><strong>SSR ou SSG :</strong> Utilisez des frameworks comme Next.js pour un rendu côté serveur, facilitant l'indexation par Google.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 6,
    date: new Date("2025-11-20"),
    category: "IA",
    title: "L'intelligence Artificielle : Révolutionner le Code en 2025",
    excerpt: "Comment les outils comme ChatGPT, Claude et Copilot changent la donne pour les développeurs web et les créateurs de contenu.",
    content: (
      <div className="space-y-4">
        <p>L'IA n'est plus un gadget. Elle permet aujourd'hui de générer des structures de code complexes en quelques secondes. Cependant, pour être accepté par AdSense, évitez le copier-coller pur.</p>
        <p>Utilisez l'IA pour structurer vos idées, mais apportez toujours votre touche personnelle et vos vérifications techniques.</p>
      </div>
    ),
  },
  {
    id: 7,
    date: new Date("2025-11-22"),
    category: "Sites",
    title: "Guide du Design Responsive : Rendre votre site mobile-friendly",
    excerpt: "Plus de 60% du trafic web est mobile. Si votre site ne s'affiche pas bien sur smartphone, AdSense pourrait refuser votre candidature.",
    content: (
      <div className="space-y-4">
        <p>Le design responsive utilise les Media Queries en CSS pour adapter la mise en page. Dans votre projet React, l'utilisation de frameworks comme Tailwind CSS facilite grandement ce travail avec des classes comme <code>md:flex</code> ou <code>hidden lg:block</code>.</p>
      </div>
    ),
  },
  {
    id: 8,
    date: new Date("2025-11-25"),
    category: "Sécurité",
    title: "Sécuriser son application Web : Les bases essentielles",
    excerpt: "Protéger les données de vos utilisateurs est une priorité. Apprenez à contrer les attaques XSS et les injections SQL.",
    content: (
      <div className="space-y-4">
        <p>La sécurité commence par la validation des données d'entrée. Ne faites jamais confiance à ce qu'un utilisateur tape dans un formulaire. Utilisez des bibliothèques de validation et assurez-vous que votre site utilise le protocole HTTPS.</p>
      </div>
    ),
  },
  {
    id: 9,
    date: new Date("2025-11-28"),
    category: "Bots",
    title: "Déployer son Bot sur un VPS : Guide étape par étape",
    excerpt: "Marre de laisser votre PC allumé pour que votre bot fonctionne ? Apprenez à utiliser un VPS pour un fonctionnement 24h/24.",
    content: (
      <div className="space-y-4">
        <p>Un VPS (Virtual Private Server) permet de faire tourner votre script Node.js sur un serveur distant. Des services comme Heroku, Render ou des VPS Linux classiques sont parfaits pour cela. Utilisez un gestionnaire de processus comme <strong>PM2</strong> pour relancer le bot automatiquement en cas de crash.</p>
      </div>
    ),
  },
  {
    id: 10,
    date: new Date("2025-12-01"),
    category: "Monétisation",
    title: "Comment préparer son blog pour l'acceptation Google AdSense",
    excerpt: "Toutes les astuces pour maximiser vos chances d'être validé par la régie publicitaire de Google du premier coup.",
    content: (
      <div className="space-y-4">
        <p>Google vérifie plusieurs points :</p>
        <ul className="list-disc ml-6">
          <li><strong>Contenu Unique :</strong> Pas de plagiat.</li>
          <li><strong>Pages Légales :</strong> Avoir une page Contact et une Politique de Confidentialité.</li>
          <li><strong>Navigation Fluide :</strong> Un menu clair et des liens qui fonctionnent.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 11,
    date: new Date("2025-12-05"),
    category: "IA",
    title: "Intégrer l'API OpenAI dans un projet React",
    excerpt: "Ajoutez une touche d'intelligence à vos sites web en intégrant des chatbots personnalisés basés sur GPT-4.",
    content: (
      <div className="space-y-4">
        <p>L'intégration se fait via des appels API sécurisés. Attention à ne jamais exposer votre clé API côté client ! Utilisez une fonction Backend (Serverless) pour faire l'intermédiaire.</p>
      </div>
    ),
  },
  {
    id: 12,
    date: new Date("2025-12-10"),
    category: "Bots",
    title: "Python vs Node.js pour la création de Bots : Le duel",
    excerpt: "Quel langage choisir pour votre prochain projet d'automatisation ? Comparaison des performances et des bibliothèques.",
    content: (
      <div className="space-y-4">
        <p>Node.js est excellent pour les entrées/sorties asynchrones (parfait pour WhatsApp), tandis que Python brille par sa simplicité et ses bibliothèques de traitement de données. Pour un bot rapide et réactif, Node.js est souvent le grand gagnant.</p>
      </div>
    ),
  },
];

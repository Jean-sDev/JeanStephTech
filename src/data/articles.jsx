export const articles = [
  {
    id: 1,
    slug: "create-your-own-whatsapp-bot-2025",
    date: new Date("2025-11-09"),
    category: "Bots",
    title: "Create Your Own WhatsApp Bot – Complete 2025 Guide",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800",
    excerpt: "Learn how to create an automated WhatsApp bot. This tutorial covers installation, source files, and step-by-step deployment.",
    content: content: (
  <div className="space-y-6">

    {/* INTRO */}
    <p>
      Dans ce guide, nous allons créer un bot WhatsApp complet étape par étape.
      Ce bot utilise la librairie Baileys pour fonctionner avec un QR code.
    </p>

    {/* EXPPLICATION */}
    <p>
      Avant de commencer, assure-toi d’avoir installé Node.js sur ton système.
      Ensuite, initialise un projet Node avec npm.
    </p>

    {/* FICHIER 1 */}
    <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg border-l-4 border-blue-600 space-y-2">

      <p className="font-bold">📁 Fichier principal : bot.js</p>

      <p>Crée un fichier <code>bot.js</code> et colle ce code :</p>

      {/* CODE BLOCK */}
      <pre className="bg-black text-green-400 p-4 rounded-lg overflow-x-auto">
{`const { default: makeWASocket } = require("@whiskeysockets/baileys");

async function startBot() {
  const sock = makeWASocket();
  console.log("Bot démarré !");
}

startBot();`}
      </pre>

      {/* COPY BUTTON (simple exemple) */}
      <button
        onClick={() => navigator.clipboard.writeText(`const { default: makeWASocket } = require("@whiskeysockets/baileys");`)}
        className="bg-blue-600 text-white px-3 py-1 rounded"
      >
        Copier le code
      </button>

    </div>

    {/* EXPPLICATION */}
    <p>
      Ce code initialise une connexion WhatsApp. Lors de la première exécution,
      un QR code sera généré.
    </p>

    {/* FICHIER 2 */}
    <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg border-l-4 border-blue-600 space-y-2">

      <p className="font-bold">📁 Fichier : package.json</p>

      <p>Ajoute les dépendances suivantes :</p>

      <pre className="bg-black text-green-400 p-4 rounded-lg overflow-x-auto">
{`{
  "name": "whatsapp-bot",
  "version": "1.0.0",
  "dependencies": {
    "@whiskeysockets/baileys": "^6.0.0"
  }
}`}
      </pre>

    </div>

    {/* FICHIER 3 */}
    <div className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg border-l-4 border-blue-600 space-y-2">

      <p className="font-bold">📁 Fichier : config.js</p>

      <p>Ajoute ta configuration :</p>

      <pre className="bg-black text-green-400 p-4 rounded-lg overflow-x-auto">
{`module.exports = {
  prefix: "!",
  owner: "TonNom"
};`}
      </pre>

    </div>

    {/* EXPLICATION FINALE */}
    <p>
      Une fois tous les fichiers configurés, lance le bot avec la commande :
    </p>

    <pre className="bg-black text-green-400 p-4 rounded-lg">
node bot.js
    </pre>

    {/* CTA DOWNLOAD */}
    <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg border-l-4 border-green-600 space-y-2">

      <p className="font-bold">
        📦 Télécharger le projet complet
      </p>

      <p>
        Clique sur le lien ci-dessous pour télécharger tous les fichiers prêts à l’emploi :
      </p>

      <a
        href="https://ton-lien-de-download.com"
        className="text-blue-600 font-bold underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Télécharger le projet complet
      </a>

    </div>

  </div>
)
  },

  {
    id: 2,
    slug: "automate-whatsapp-productivity",
    date: new Date("2025-11-11"),
    category: "Bots",
    title: "How to automate WhatsApp to boost your productivity",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
    excerpt: "Discover how to set up automatic commands and manage your contacts efficiently without wasting time.",
    content: <p>A well-configured bot can filter messages, send catalogues and even schedule appointments via calendar. It's a 24/7 assistant.</p>,
  },

  {
    id: 3,
    slug: "top-5-bot-projects",
    date: new Date("2025-11-13"),
    category: "Bots",
    title: "Top 5 projects to start with a bot",
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800",
    excerpt: "Want to get started but lacking ideas? Here are the most useful projects to practice on.",
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Notification bot:</strong> Weather alerts or news.</li>
        <li><strong>Download bot:</strong> Retrieves YouTube/TikTok videos via a link.</li>
        <li><strong>Quiz Bot:</strong> Make your WhatsApp groups more interactive.</li>
        <li><strong>Reminder Bot:</strong> So that you never forget an important task again.</li>
      </ul>
    ),
  },

  {
    id: 4,
    slug: "html-css-basics",
    date: new Date("2025-11-15"),
    category: "Websites",
    title: "Mastering HTML5 & CSS3: The Basics of the Web",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800",
    excerpt: "Understanding a site's structure is essential. Learn semantic tags for better SEO.",
    content: <p>HTML provides structure, CSS enhances it. For AdSense, clean code with tags like &lt;article&gt; is a big advantage.</p>,
  },

  {
    id: 5,
    slug: "react-seo-optimization",
    date: new Date("2025-11-17"),
    category: "Websites",
    title: "Optimizing React performance for SEO",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800",
    excerpt: "A slow website drives visitors away. Learn how to optimize your blog for Google.",
    content: <p>Use Lazy Loading, compress your images in WebP and favor Next.js for server-side rendering (SSR).</p>,
  },

  {
    id: 6,
    slug: "ai-for-coding",
    date: new Date("2025-11-20"),
    category: "AI",
    title: "Artificial Intelligence at the Service of Code",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
    excerpt: "How ChatGPT and Copilot are revolutionizing the way we develop today.",
    content: <p>AI helps to structure the code, but human expertise remains vital for security and true project customization.</p>,
  },

  {
    id: 7,
    slug: "responsive-design-guide",
    date: new Date("2025-11-22"),
    category: "Websites",
    title: "Responsive Design Guide: Mobile-First",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=800",
    excerpt: "Over 60% of traffic is mobile. Your site must be perfect on smartphones.",
    content: <p>Use CSS Flexbox and Grid. Tailwind makes responsive design easy with classes like md:flex and lg:grid.</p>,
  },

  {
    id: 8,
    slug: "web-security-basics",
    date: new Date("2025-11-25"),
    category: "Security",
    title: "Securing Your Web App: The Basics",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
    excerpt: "Protecting user data is a priority.",
    content: <p>Always validate user inputs and enforce HTTPS across your entire site.</p>,
  },

  {
    id: 9,
    slug: "deploy-bot-vps",
    date: new Date("2025-11-28"),
    category: "Bots",
    title: "Deploying Your Bot on a VPS (24/7)",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
    excerpt: "Run your bot 24/7 without keeping your PC on.",
    content: <p>Use a VPS with PM2 to keep your Node.js bot always running and auto-restarting.</p>,
  },

  {
    id: 10,
    slug: "adsense-blog-preparation",
    date: new Date("2025-12-01"),
    category: "Monetization",
    title: "Preparing Your Blog for Google AdSense",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800",
    excerpt: "All the tips to get approved by Google AdSense.",
    content: <p>Focus on unique content, clean navigation, and legal pages like Privacy Policy.</p>,
  },

  {
    id: 11,
    slug: "openai-react-integration",
    date: new Date("2025-12-05"),
    category: "AI",
    title: "Integrating OpenAI API into React",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=800",
    excerpt: "Add AI features to your website.",
    content: <p>Never expose your API key in frontend. Always use a backend proxy.</p>,
  },

  {
    id: 12,
    slug: "python-vs-node-bots",
    date: new Date("2025-12-10"),
    category: "Bots",
    title: "Python vs Node.js for Bots",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
    excerpt: "Which language should you choose?",
    content: <p>Node.js is better for real-time bots like WhatsApp, Python excels in data processing.</p>,
  },

  {
    id: 13,
    slug: "group-management-bot",
    date: new Date("2025-12-15"),
    category: "Bots",
    title: "Group Management Bot: Auto-kick & Welcome",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800",
    excerpt: "Moderate your WhatsApp group automatically.",
    content: <p>Auto-welcome users and remove spam links automatically.</p>,
  },

  {
    id: 14,
    slug: "protect-whatsapp-bot",
    date: new Date("2025-12-18"),
    category: "Bots",
    title: "Protecting Your WhatsApp Bot from Bans",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800",
    excerpt: "Avoid getting banned by WhatsApp.",
    content: <p>Don’t spam messages and simulate human-like delays between actions.</p>,
  },

  {
    id: 15,
    slug: "portfolio-that-converts",
    date: new Date("2025-12-22"),
    category: "Websites",
    title: "Creating a Portfolio That Attracts Clients",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800",
    excerpt: "Land freelance jobs with a strong portfolio.",
    content: <p>Showcase 3 strong projects instead of many average ones.</p>,
  },

  {
    id: 16,
    slug: "typescript-intro",
    date: new Date("2025-12-25"),
    category: "Websites",
    title: "Introduction to TypeScript for JS Devs",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800",
    excerpt: "Avoid bugs with static typing.",
    content: <p>TypeScript helps catch errors before running your code.</p>,
  },

  {
    id: 17,
    slug: "tailwind-css-guide",
    date: new Date("2025-12-28"),
    category: "Websites",
    title: "Tailwind CSS: Ultra-fast Pro Designs",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800",
    excerpt: "Design faster with Tailwind.",
    content: <p>Use utility classes instead of writing long CSS files.</p>,
  },

  {
    id: 18,
    slug: "web3-future",
    date: new Date("2026-01-02"),
    category: "Websites",
    title: "The Future of the Web: Web3 and Decentralization",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800",
    excerpt: "Understand blockchain and Web3.",
    content: <p>Web3 focuses on decentralization and user data ownership.</p>,
  },

  {
    id: 19,
    slug: "vscode-extensions-2026",
    date: new Date("2026-01-05"),
    category: "Websites",
    title: "Top 10 VS Code Extensions in 2026",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800",
    excerpt: "Boost your productivity.",
    content: <p>Extensions like Prettier and GitLens are essential.</p>,
  },

  {
    id: 20,
    slug: "discord-bot-nodejs",
    date: new Date("2026-01-08"),
    category: "Bots",
    title: "Creating a Discord Bot with Node.js",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=800",
    excerpt: "Build a Discord bot.",
    content: <p>Use Discord.js to create powerful bots.</p>,
  },

  {
    id: 21,
    slug: "css-dark-mode",
    date: new Date("2026-01-12"),
    category: "Websites",
    title: "The CSS Dark Mode Guide",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800",
    excerpt: "Add dark mode to your site.",
    content: <p>Use prefers-color-scheme for automatic dark mode.</p>,
  },

  {
    id: 22,
    slug: "learn-sql-basics",
    date: new Date("2026-01-15"),
    category: "Websites",
    title: "Learning SQL to Manage Your Data",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800",
    excerpt: "Master databases with SQL.",
    content: <p>Learn SELECT, JOIN and indexing for performance.</p>,
  },
];
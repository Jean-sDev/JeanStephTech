import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { articles } from "../data/articles";
import { FaWhatsapp, FaTelegram, FaFacebook, FaLink } from "react-icons/fa";

export default function Article() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const found = articles.find(a => a.slug === slug);
    setArticle(found || null);
  }, [slug]);

  if (!article) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold">Article introuvable</h1>
      </div>
    );
  }

  const url =
    typeof window !== "undefined"
      ? window.location.href
      : `https://www.lordobitotech.xyz/blog/${slug}`;

  const title = article.title;

  const handleCopy = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">

      {/* META SEO (utile pour navigation interne, PAS pour bots) */}
      <Helmet>
        <title>{article.title}</title>

        <meta name="description" content={article.excerpt} />

        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta
          property="og:url"
          content={`https://www.lordobitotech.xyz/blog/${article.slug}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="max-w-4xl mx-auto p-6 space-y-6">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white">
          {article.title}
        </h1>

        {/* IMAGE */}
        <img
          src={article.image}
          alt={article.title}
          className="w-full rounded-2xl shadow-lg"
        />

        {/* EXCERPT */}
        <p className="text-lg text-slate-500 dark:text-slate-400">
          {article.excerpt}
        </p>

        {/* SHARE */}
        <div className="flex flex-wrap gap-3 pt-2">

          <a
            href={`https://wa.me/?text=${encodeURIComponent(title + " " + url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-xl font-bold"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-xl font-bold"
          >
            <FaTelegram /> Telegram
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl font-bold"
          >
            <FaFacebook /> Facebook
          </a>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 bg-slate-700 text-white px-4 py-2 rounded-xl font-bold"
          >
            <FaLink /> Copier
          </button>

        </div>

        {/* COPY MESSAGE */}
        {copied && (
          <p className="text-green-500 font-semibold">
            Lien copié !
          </p>
        )}

        {/* CONTENT */}
        <div className="prose dark:prose-invert max-w-none pt-4">
          {article.content}
        </div>

      </div>
    </div>
  );
}
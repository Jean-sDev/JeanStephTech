import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { articles } from "../data/articles";
import Footer2 from "../components/Footer2";
import { FaWhatsapp, FaTelegram, FaFacebook, FaLink } from "react-icons/fa";

export default function Article() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  const article = articles.find(a => a.slug === slug);

  if (!article) return <h1 className="text-center mt-20">Article not found</h1>;

  const url = window.location.href;
  const title = article.title;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">

      {/* 🔥 META TAGS (SEO + PREVIEW) */}
      <Helmet>
        <title>{article.title}</title>

        <meta name="description" content={article.excerpt} />

        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content={`https://www.lordobitotech.xyz/blog/${article.slug}`} />

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

        {/* 🔥 SHARE BUTTONS */}
        <div className="flex flex-wrap gap-3 pt-2">

          {/* WhatsApp */}
          <a
            href={`https://wa.me/?text=${encodeURIComponent(title + " " + url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-bold transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>

          {/* Telegram */}
          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl font-bold transition"
          >
            <FaTelegram /> Telegram
          </a>

          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl font-bold transition"
          >
            <FaFacebook /> Facebook
          </a>

          {/* Copy */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-xl font-bold transition"
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

      {/* FOOTER */}
      {/* <Footer2 />*/}
    </div>
  );
}
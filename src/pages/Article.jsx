import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { articles } from "../data/articles";
import Footer2 from "../components/Footer2";
import { FaWhatsapp, FaTelegram, FaFacebook, FaLink } from "react-icons/fa";

export default function Article() {
  const query = new URLSearchParams(useLocation().search);
  const slug = query.get("slug");

  const article = articles.find(a => a.slug === slug);

  if (!article) return <h1>Article not found</h1>;

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.image} alt="" />
      <p>{article.excerpt}</p>
      {article.content}
    </div>
  );
}
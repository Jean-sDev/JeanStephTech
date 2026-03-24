import { useParams } from "react-router-dom";
import { articles } from "../data/articles";
import { Helmet } from "react-helmet";
import Footer2 from "../components/Footer2";

export default function Article() {
  const { slug } = useParams();

  const article = articles.find(a => a.slug === slug);

  if (!article) return <h1>Article not found</h1>;

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">

      <Helmet>
        <title>{article.title}</title>

        <meta name="description" content={article.excerpt} />

        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content={`https://www.lordobitotech.xyz/blog/${article.slug}`} />
      </Helmet>

      <div className="max-w-4xl mx-auto p-6 space-y-6">

        <h1 className="text-4xl font-black">{article.title}</h1>

        <img src={article.image} className="rounded-2xl" />

        <p className="text-slate-500">{article.excerpt}</p>

        <div className="prose dark:prose-invert">
          {article.content}
        </div>

      </div>

      <Footer2 /> {/* 🔥 REMIS */}
    </div>
  );
}
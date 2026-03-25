import { articles } from "../../../src/data/articles";

export default function handler(req, res) {
  const { slug } = req.query;

  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return res.status(404).send("Not found");
  }

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />

        <title>${article.title}</title>

        <!-- Open Graph -->
        <meta property="og:title" content="${article.title}" />
        <meta property="og:description" content="${article.excerpt}" />
        <meta property="og:image" content="${article.image}" />
        <meta property="og:url" content="https://www.lordobitotech.xyz/blog/${article.slug}" />

        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image" />

        <!-- Redirection vers React -->
        <script>
          window.location.href = "/blog/${article.slug}";
        </script>
      </head>

      <body></body>
    </html>
  `;

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Article() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchAllArticles = async () => {
      try {
        const articles = await axios.get("/api/allArticle/routes");
        setArticles(articles.data);
        console.log("articles", articles.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      }
    };

    fetchAllArticles();
  }, []);
  return (
    <div>
      <h1>Article</h1>

      {articles.map((article: any) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
          <Image
            src={article.picture}
            alt={article.title}
            width={500}
            height={300}
          />
        </div>
      ))}
    </div>
  );
}

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

  const handleAddLikes = async (id: any) => {
    try {
      const updatedArticle = await axios.put("/api/updateArticle/routes", {
        id,
      }); // Envoyer l'ID de l'article dans le corps de la requête
      console.log("updatedArticle", updatedArticle.data);

      // Mettre à jour les likes localement
      const updatedArticles: { id: number; likes: number }[] = articles.map(
        (article: { id: number; likes: number }) => {
          if (article.id === id) {
            return { ...article, likes: article.likes + 1 };
          }
          return article;
        }
      );
      setArticles(updatedArticles);
    } catch (error) {
      console.error("Erreur lors de l'ajout des likes :", error);
    }
  };

  const handleDeleteArticle = async (id: any) => {
    try {
      const deletedArticle = await axios.delete("/api/deleteArticle/routes", {
        data: { id },
      });
      console.log("deletedArticle", deletedArticle.data);

      // Supprimer l'article localement
      const updatedArticles = articles.filter(
        (article: { id: number }) => article.id !== id
      );
      setArticles(updatedArticles);
    } catch (error) {
      console.error("Erreur lors de la suppression de l'article :", error);
    }
  };

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
          ,<p>{article.likes}</p>
          <button onClick={() => handleAddLikes(article.id)}>Add Likes</button>
          <button onClick={() => handleDeleteArticle(article.id)}>
            Delete Article
          </button>
        </div>
      ))}
    </div>
  );
}

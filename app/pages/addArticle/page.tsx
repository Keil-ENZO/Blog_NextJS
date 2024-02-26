"use client";

import axios from "axios";
import { useState } from "react";

export default function AjouterArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [picture, setPicture] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await axios.post("/api/hello/routes", { title, content, picture });
      console.log("Article ajouté avec succès !");
      // Réinitialiser les champs du formulaire après soumission réussie
      setTitle("");
      setContent("");
      setPicture("");
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'article :", error);
    }
  };

  return (
    <div>
      <h1>Ajouter un nouvel article</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre :</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Contenu :</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="picture">Image :</label>
          <input
            type="text"
            id="picture"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
        </div>
        <button type="submit">Ajouter l article</button>
      </form>
    </div>
  );
}

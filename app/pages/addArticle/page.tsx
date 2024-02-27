"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { uploadFile } from "./upload.action";

export default function AjouterArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [picture, setPicture] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData: FormData = new FormData(e.currentTarget);
    const file = formData.get("picture") as File;

    const url = await uploadFile(formData);

    setPicture(url);

    console.log("url", url);

    try {
      await axios.post("/api/hello/routes", { title, content, url });
      console.log("Article ajouté avec succès !");
      // Réinitialiser les champs du formulaire après soumission réussie
      setTitle("");
      setContent("");
      setPicture(null);
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

          <input type="file" id="picture" name="picture" />
        </div>
        <button type="submit">Ajouter l article</button>
      </form>

      {picture ? (
        <img
          src={picture}
          alt="image"
          style={{ width: "200px", height: "200px" }}
        />
      ) : null}

      <Link href="/pages/article"> Articles </Link>
    </div>
  );
}

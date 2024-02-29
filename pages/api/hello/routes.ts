// pages/api/hello/routes.ts

import prisma from "@/src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

// Handler de la route "/api/hello"
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Vérifie la méthode de la requête
  if (req.method === "POST") {
    const { title, content, picture } = req.body;

    try {
      const addArticle = await prisma.articles.create({
        data: {
          title,
          content,
          picture,
          published: false,
          likes: 0,
        },
      });
      res.status(200).json({ message: addArticle });
    } catch (error) {
      console.error("Erreur lors de la création de l'article :", error);
      res
        .status(500)
        .json({ message: "Erreur lors de la création de l'article" });
    }

  } else {
    // Si la méthode de la requête n'est pas autorisée
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  }
}

import prisma from "@/src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    try {
      const { id } = req.body; // Récupérer l'ID de l'article dans le corps de la requête
      if (!id) {
        return res.status(400).json({
          message: "ID de l'article manquant dans le corps de la requête",
        });
      }

      const deleteArticle = await prisma.articles.delete({
        where: {
          id,
        },
      });

      res.status(200).json(deleteArticle);
    } catch (error: any) {
      res.status(500).json({
        message: "Erreur lors de la suppression de l'article",
        error: error.message,
      });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

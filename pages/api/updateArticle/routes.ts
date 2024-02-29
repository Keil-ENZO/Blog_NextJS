import prisma from "@/src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getAuthSession } from "../../../src/lib/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    const session = await getAuthSession(req);
    if (!session?.user) {
      return res.status(401).json({
        message: "Vous devez être connecté pour aimer un article",
      });
    }

    try {
      const { id } = req.body; // Récupérer l'ID de l'article dans le corps de la requête
      if (!id) {
        return res.status(400).json({
          message: "ID de l'article manquant dans le corps de la requête",
        });
      }

      // Mettre à jour l'article en fonction de l'ID
      const updateArticle = await prisma.articles.update({
        where: { id },
        data: {
          likes: {
            increment: 1,
          },
        },
      });

      const updateUser = await prisma.user.update({
        where: { id: session.user?.email ?? "" },
        data: { likes: true },
      });

      res.status(200).json(updateArticle);
      res.status(200).json(updateUser);
    } catch (error: any) {
      res.status(500).json({
        message: "Erreur lors de l'ajout du like",
        error: error.message,
      });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

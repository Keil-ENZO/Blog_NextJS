import prisma from "@/src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const users = await prisma.articles.findMany();
      res.status(200).json(users);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erreur lors de la création de l'article" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// pages/api/hello/routes.ts

import { NextApiRequest, NextApiResponse } from "next";

// Handler de la route "/api/hello"
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Vérifie la méthode de la requête
  if (req.method === "GET") {
    // Répond avec un message JSON
    res.status(200).json({ message: "Hello World" });
  } else {
    // Si la méthode de la requête n'est pas autorisée
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Méthode ${req.method} non autorisée`);
  }
}

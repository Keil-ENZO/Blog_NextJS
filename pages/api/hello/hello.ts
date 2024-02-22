// Importer les types Next.js nécessaires
import { NextApiRequest, NextApiResponse } from "next";

// Handler de votre API
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Votre logique de l'API
  const message = "Hello, World! This is your API endpoint.";

  // Retourner une réponse JSON
  res.status(200).json({ message });
}

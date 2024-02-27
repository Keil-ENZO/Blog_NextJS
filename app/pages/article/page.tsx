import axios from "axios";
import { NextApiResponse } from "next";

export default function Article() {
  const allArtilces = async (res: NextApiResponse) => {
    await axios.get("/api/allArticle/routes");
    console.log(res);

    return res;
  };

  return (
    <div>
      <h1>Article</h1>
    </div>
  );
}

import { User } from "@/src/auth/User";
import { getAuthSession } from "@/src/lib/auth";
import Link from "next/link";

export default async function Admin() {
  const session = await getAuthSession();

  if (!session?.user) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>Home admin</h1>
      <User />
      <Link href="/pages/addArticle"> Ajouter article </Link>
    </div>
  );
}

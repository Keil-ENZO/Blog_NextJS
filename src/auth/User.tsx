import Image from "next/image";
import { getAuthSession } from "../lib/auth";
import { LogoutBtn } from "./LogoutBtn";

export const User = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <Image
        src={session.user.image ?? ""}
        alt="img"
        width={300}
        height={300}
      />
      <h1 className="text-3xl mb-10">{session.user.name}</h1>
      <p className="text-xl mb-10">{session.user.email}</p>

      <LogoutBtn />
    </div>
  );
};

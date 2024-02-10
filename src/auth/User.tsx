import { getAuthSession } from "../lib/auth";
import { LogoutBtn } from "./LogoutBtn";

export const User = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <img
        className="border rounded-full "
        src={session.user.image ?? ""}
        alt="img"
      />
      <h1 className="text-3xl mb-10">{session.user.name}</h1>
      <p>{session.user.id}</p>

      <LogoutBtn />
    </div>
  );
};

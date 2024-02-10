import { LoginBtn } from "@/src/auth/LoginBtn";
import { User } from "@/src/auth/User";
import { getAuthSession } from "@/src/lib/auth";

export default async function Home() {
  const session = await getAuthSession();

  if (session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <User />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginBtn />
    </main>
  );
}

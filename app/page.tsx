// @use-client
import Admin from "@/app/pages/admin/page";
import User from "@/app/pages/home/page";
import { LoginBtn } from "@/src/auth/LoginBtn";
import { getAuthSession } from "@/src/lib/auth";

export default async function Home() {
  const session = await getAuthSession();

  if (session && (session as any).user.email === "enzo.keil06@icloud.com") {
    return <Admin />;
  } else {
    return <User />;
  }
  console.log("session", session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginBtn />
    </main>
  );
}

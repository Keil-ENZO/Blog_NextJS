// @use-client
import Admin from "@/app/pages/admin/page";
import User from "@/app/pages/home/page";
import { LoginBtn } from "@/src/auth/LoginBtn";
import { getAuthSession } from "@/src/lib/auth";

export default async function Home() {
  const session = await getAuthSession();

  if (session && (session as any).user.email === "enzo.keil06@icloud.com") {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Admin />
      </main>
    );
  } else if (session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <User />
      </main>
    );
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <LoginBtn />
      </main>
    );
  }
}

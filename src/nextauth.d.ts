import { DefaultSession } from "next-auth";

declare module "nextauth" {
  interface Session extends DefaultSession {
    user: DefaultUser & {
      id: string;
    };
  }
}

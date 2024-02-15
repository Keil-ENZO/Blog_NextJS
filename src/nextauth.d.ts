import { DefaultSession } from "next-auth";

declare module "nextauth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
    };
  }
}

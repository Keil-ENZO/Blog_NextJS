import prisma from "@/src/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import Email from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

const googleId = process.env.GOOGLE_ID;
const googleSecret = process.env.GOOGLE_SECRET;

if (!githubId || !githubSecret || !googleId || !googleSecret) {
  throw new Error("Missing env var for auth");
}

export const authConfig: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: githubId!,
      clientSecret: githubSecret!,
    }),
    GoogleProvider({
      clientId: googleId!,
      clientSecret: googleSecret!,
    }),

    Email({
      from: process.env.SMTP_FROM,

      server: {
        host: process.env.SMTP_SEVER,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_KEY,
        },
      },
    }),
  ],

  adapter: PrismaAdapter(prisma) as Adapter,
  secret: process.env.SECRET,
};

export default NextAuth(authConfig);

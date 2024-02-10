import prisma from "@/src/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GithubProvider from "next-auth/providers/github";

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

if (!githubId || !githubSecret) {
  throw new Error("GITHUB_ID and GITHUB_SECRET must be set");
}

export const authConfig: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: githubId!,
      clientSecret: githubSecret!,
    }),
  ],

  adapter: PrismaAdapter(prisma) as Adapter,
  secret: process.env.SECRET,
};

export default NextAuth(authConfig);

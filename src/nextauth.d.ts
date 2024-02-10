declare module "nextauth" {
  interface Session extends DefaultSessionSession {
    user: DefaultUser & {
      id: string;
    };
  }
}

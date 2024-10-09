import { NextAuthOptions } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user?: User;
  }

  interface AdapterUser {
    id?: string;
    username?: string;
    role?: string;
    access?: string;
  }

  interface CustomNextAuthOptions extends NextAuthOptions {}
}

import { CustomNextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { authAction } from '@/src/features/auth';

export const options: CustomNextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        username: { type: 'text' },
        password: { type: 'password' },
        route: { type: 'text' },
      },

      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        const { status, user, access } = await authAction(credentials);

        if (status === 200 && user && access) {
          return { ...user, access };
        }
        if (status === 401) {
          throw new Error('Неправильный логин или пароль');
        }
        throw new Error('Ошибка авторизации. Пожалуйста, попробуйте позже.');
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        username: token.username,
        role: token.role,
        access: token.access,
      };
      return session;
    },
  },
  pages: {
    signIn: '/auth',
  },
  session: {
    strategy: 'jwt',
  },
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`, //защита от подмены cookie
      options: {
        httpOnly: true,
        sameSite: 'lax', //CSPF атаки
        path: '/',
        secure: process.env.NODE_ENV !== 'development', //динамические secure
        //в продакшн будет true
        //в двелоп false
      },
    },
  },
};

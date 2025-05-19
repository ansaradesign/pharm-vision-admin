'use client';

import { Input } from '@nextui-org/input';
import { FormEvent, useRef } from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { TAuthRoutes } from '../model/auth-routes.type';
import { useNotification } from '../../notification/';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { ROUTES } from '@/src/shared/consts/routes';

interface Props {
  route: TAuthRoutes;
}

export const Auth = ({ route }: Props) => {
  const { addNotification } = useNotification();
  const router = useRouter();
  const username = useRef('');
  const password = useRef('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      username: username.current,
      password: password.current,
      route,
      redirect: false,
    });

    if (result?.error) {
      addNotification({ type: 'danger', text: result.error });
    } else {
      router.push('/');
    }
  };

  return (
    <Flex
      center
      col
      className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[400px]'
    >
      <form
        className='flex flex-col gap-4 p-6 border-1 border-divider rounded-3xl w-full'
        onSubmit={onSubmit}
      >
        <Input name='username' onChange={(e) => (username.current = e.target.value)} />
        <Input
          name='password'
          type='password'
          onChange={(e) => (password.current = e.target.value)}
        />
        <Button className='w-full font-medium' color='primary' type='submit' variant='shadow'>
          Войти
        </Button>
      </form>
      {route === 'admin' ? (
        <Link className='font-[400] text-primary' href={ROUTES.AUTH_COMPANY}>
          Вход для компаний
        </Link>
      ) : (
        <Link className='font-[400] text-primary' href={ROUTES.AUTH_ADMIN}>
          Вход для админов
        </Link>
      )}
    </Flex>
  );
};

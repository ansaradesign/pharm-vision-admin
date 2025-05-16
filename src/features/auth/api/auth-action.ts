import axios, { AxiosError } from 'axios';
import { jwtDecode } from 'jwt-decode';
import { User } from 'next-auth';

interface Params {
  username: string;
  password: string;
  [key: string]: any;
}

interface IRes {
  status: number;
  user?: User;
  access?: string;
  error?: string; //добавила дополнительное сообшение об ошибке
}

export const authAction = async (params: Params): Promise<IRes> => {
  const { username, password, route } = params;

  try {
    const { data } = await axios.post<{ access: string }>(
      `${process.env.NEXT_PUBLIC_API_AUTH_ACTIONS}api/auth/login/${route}`,
      { username, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!data?.access?.trim()) {
      return { status: 401, error: 'Invalid or empty token received' };
    }

    const user: User = jwtDecode(data.access);

    return { status: 200, user, access: data.access };
  } catch (err: unknown) {
    const error = err as AxiosError;

    return {
      status: error.status || 500,
      error: error.message || 'Authentication failed',
    };
  }
};

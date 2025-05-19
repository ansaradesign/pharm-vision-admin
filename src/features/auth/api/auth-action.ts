import { API } from '@/src/shared/consts/api';
import { ERRORS } from '@/src/shared/consts/error';
import { ROUTES } from '@/src/shared/consts/routes';
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
      `${API.API_BASE}${ROUTES.AUTH_ACTIONS}${route}`,
      { username, password },
    );

    if (!data?.access?.trim()) {
      return { status: 401, error: ERRORS.TOKEN_ERROR };
    }

    const user: User = jwtDecode(data.access);

    return { status: 200, user, access: data.access };
  } catch (err: unknown) {
    const error = err as AxiosError;

    return {
      status: error.status || 500,
      error: error.message || ERRORS.AUTH_ERROR,
    };
  }
};

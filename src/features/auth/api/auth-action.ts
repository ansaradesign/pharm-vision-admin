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
}

export const authAction = async (params: Params): Promise<IRes> => {
  const { username, password, route } = params;

  try {
    const { data } = await axios.post<{ access: string }>(
      `http://91.236.198.205/api/auth/login/${route}`,
      { username, password },
    );

    const user: User = jwtDecode(data.access);

    return { status: 200, user, access: data.access };
  } catch (err: unknown) {
    const error = err as AxiosError;

    return { status: error.status || 500 };
  }
};

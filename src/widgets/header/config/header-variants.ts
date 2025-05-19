import { ROUTES } from "@/src/shared/consts/routes";

type THeader = 'none' | 'low';

export const HeaderVariants: Record<string, THeader> = {
  [ROUTES.AUTH_ADMIN]: 'none',
  [ROUTES.HOME]: 'low',
  [ROUTES.AUTH_COMPANY]: 'none',
};

import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { ROUTES } from './src/shared/consts/routes';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const requestedPage = req.nextUrl.pathname;
  
  // Разрешаем доступ к страницам авторизации без токена
  const authPages = [ROUTES.AUTH_ADMIN, ROUTES.AUTH_COMPANY];
  if (authPages.some(page => requestedPage.startsWith(page))) {
    return NextResponse.next();
  }

  if (!token) {
    const redirectUrl = requestedPage.startsWith(ROUTES.DASHBOARD) 
      ? ROUTES.AUTH_COMPANY
      : ROUTES.AUTH_ADMIN;
    return NextResponse.redirect(new URL(redirectUrl, req.url));
  }

  const userRole = token.role;


  if (userRole === 'ADMIN') {
    return NextResponse.next();
  }

  // COMPANY только к разрешенным путям
  if (userRole === 'COMPANY') {
    const allowedPaths = [ROUTES.DASHBOARD];
    if (allowedPaths.some(path => requestedPage.startsWith(path))) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL(ROUTES.DASHBOARD, req.url));
  }

  // Если роль неизвестна - редирект на основную авторизацию
  return NextResponse.redirect(new URL(ROUTES.AUTH_ADMIN, req.url));
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
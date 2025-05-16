import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const requestedPage = req.nextUrl.pathname;
  
  // Разрешаем доступ к страницам авторизации без токена
  const authPages = ['/auth', '/auth/company'];
  if (authPages.some(page => requestedPage.startsWith(page))) {
    return NextResponse.next();
  }

  if (!token) {
    const redirectUrl = requestedPage.startsWith('/company-dashboard') 
      ? '/auth/company' 
      : '/auth';
    return NextResponse.redirect(new URL(redirectUrl, req.url));
  }

  const userRole = token.role;


  if (userRole === 'ADMIN') {
    return NextResponse.next();
  }

  // COMPANY только к разрешенным путям
  if (userRole === 'COMPANY') {
    const allowedPaths = ['/company-dashboard'];
    if (allowedPaths.some(path => requestedPage.startsWith(path))) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/company-dashboard', req.url));
  }

  // Если роль неизвестна - редирект на основную авторизацию
  return NextResponse.redirect(new URL('/auth', req.url));
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
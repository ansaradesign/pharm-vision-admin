import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  const userRole = token.role;

  const requestedPage = req.nextUrl.pathname;

  if (userRole === 'ADMIN') {
    return NextResponse.next();
  }

  if (userRole === 'COMPANY') {
    if (requestedPage === '/company-dashboard') {
      return NextResponse.next();
    } else {
      return NextResponse.redirect('/company-dashboard');
    }
  }

  return NextResponse.redirect(new URL('/auth', req.url));
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

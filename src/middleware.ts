import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/music', request.url));
  }
}

export const config = {
  matcher: '/',
};

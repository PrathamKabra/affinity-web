import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    console.error('ADMIN_PASSWORD is not set');
    return new NextResponse('Server misconfiguration: admin auth not set.', { status: 500 });
  }

  const authHeader = request.headers.get('authorization');
  const expected = `Basic ${btoa(`admin:${password}`)}`;

  if (authHeader !== expected) {
    return new NextResponse('Authentication Required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Admin Dashboard"',
      },
    });
  }

  return NextResponse.next();
}

// Config ensures this only runs on the admin path
export const config = {
  matcher: '/admin/:path*',
};
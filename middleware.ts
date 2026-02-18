import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only protect the /admin route
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const authHeader = request.headers.get('authorization');

    // Check if the Basic Auth header matches your password
    if (authHeader !== `Basic ${btoa(`admin:${process.env.ADMIN_PASSWORD}`)}`) {
      return new NextResponse('Authentication Required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Admin Dashboard"',
        },
      });
    }
  }

  return NextResponse.next();
}

// Config ensures this only runs on the admin path
export const config = {
  matcher: '/admin/:path*',
};
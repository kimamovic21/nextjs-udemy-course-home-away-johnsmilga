import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  console.log('Hello World');
//   return Response.json({ msg: 'hello there' });
//   return NextResponse.redirect(new URL('/', request.url));
};

export const config = {
  matcher: ['/about/:path*', '/tours/:path*'],
};
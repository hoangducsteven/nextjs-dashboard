import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  /* match all request paths except for teh ones starting with 
  
  - api (API routes)
  - _next/static (static files)
  - _next/image (image optimization files)
  favicon.ico (favicon file)
  
  */
 
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
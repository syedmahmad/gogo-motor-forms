import { NextResponse, type NextRequest } from 'next/server'
 


// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // used for 3 things.
  // 1- redirects:
  // 2- rewrite: in this case, route does not change but we redirected to /dashboard route.
  // it is good for legacy codes and SEO optimisation.
  // 3- effectively used to mainupulate both cookies and headers.
//   return NextResponse.redirect(new URL('/dashboard', request.url))
    const response = NextResponse.next();
    return response;
}
 
// Can add "Matching Paths" Or completely ignore this fucniton and in the above
// funciton can handle via if else condition like if request.nextUrl.pathname ==== '/'
// return NextResponse.redirect(new URL('/dashboard', request.url))
// export const config = {
//   matcher: '/',
// }
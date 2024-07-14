import { NextResponse, type NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Get the pathname from the request URL
  const { pathname } = request.nextUrl;
  // Handle redirects based on the pathname
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (pathname === '/form-management') {
    return NextResponse.redirect(new URL('/forms', request.url));
  }

  // If no match, proceed to the next middleware or route handler
  return NextResponse.next();
}

// Can add "Matching Paths" Or completely ignore this function and in the above
// function can handle via if else condition like if request.nextUrl.pathname ==== '/'
// return NextResponse.redirect(new URL('/dashboard', request.url))
export const config = {
  matcher: ['/', '/form-management'],
}

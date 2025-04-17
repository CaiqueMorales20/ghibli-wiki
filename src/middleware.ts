import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { Locale } from './lib/i18n/dictionaries'

// List of supported locales
export const locales: Locale[] = ['en', 'pt']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect root path to /pt
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/pt', request.url))
  }

  return NextResponse.next()
}

export const matcher = [
  '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
]

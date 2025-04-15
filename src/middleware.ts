import { NextResponse } from 'next/server'

import { Locale } from './lib/i18n/dictionaries'

// List of supported locales
export const locales: Locale[] = ['en', 'pt']

export function middleware() {
  // Just pass the request along without any redirects
  return NextResponse.next()
}

export const matcher = [
  '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
]

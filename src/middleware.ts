import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextRequest, NextResponse } from 'next/server'

import { Locale } from './lib/i18n/dictionaries'

// List of supported locales
export const locales: Locale[] = ['en', 'pt']
export const defaultLocale: Locale = 'en'

// Get the preferred locale from the request
function getLocale(request: NextRequest): Locale {
  // Negotiator expects a plain object, so we need to convert headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // Use negotiator and intl-localematcher to get the best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  return match(languages, locales, defaultLocale) as Locale
}

export function middleware(request: NextRequest) {
  // Check if there is a cookie with a preferred locale
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value as
    | Locale
    | undefined

  // Get the pathname
  const { pathname } = request.nextUrl

  // Skip for api routes, _next/static, _next/image, favicon.ico, etc.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('/favicon.ico') ||
    pathname.includes('.svg') ||
    pathname.includes('.png') ||
    pathname.includes('.jpg')
  ) {
    return NextResponse.next()
  }

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Determine locale to use (cookie, accept-language or default)
  const locale = localeCookie || getLocale(request)
  const newUrl = new URL(
    `/${locale}${pathname === '/' ? '' : pathname}`,
    request.url,
  )

  // Clone the URL and create a new response
  const response = NextResponse.redirect(newUrl)

  // Set NEXT_LOCALE cookie if it's not already set
  if (!localeCookie) {
    response.cookies.set('NEXT_LOCALE', locale)
  }

  return response
}

export const config = {
  // Match all request paths except for the ones starting with:
  // - api (API routes)
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  // - public folder
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}

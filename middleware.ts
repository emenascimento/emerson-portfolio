import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['pt', 'en']
const defaultLocale = 'pt'

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  
  // Ignore specific paths (api, _next/static, _next/image, favicon.ico, images)
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.match(/\.(.*)$/) // ignore files (e.g. .jpg, .png, .css)
  ) {
    return NextResponse.next()
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Basic locale detection (fallback to default)
  // In a real app, you'd parse request.headers.get('accept-language')
  const locale = defaultLocale

  // Redirect if there is no locale
  request.nextUrl.pathname = `/${locale}${pathname}`
  
  // e.g. incoming request is /case-produto-1
  // The new URL is now /pt/case-produto-1
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
  ],
}


import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isAdminPath = request.nextUrl.pathname.startsWith('/admin')
  const isAdminLoginPath = request.nextUrl.pathname === '/admin/login'
  const token = request.cookies.get('admin-token')

  if (isAdminPath && !isAdminLoginPath && !token) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*'
}
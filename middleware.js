import { NextResponse } from "next/server"

export const config = {
  matcher: '/fixtures',
}

export async function middleware(req) {
  const { nextUrl, geo } = req

  const country = geo.country || 'GB'

  if (nextUrl.pathname === '/fixtures') {
    nextUrl.pathname = `/fixtures/${country}`

    const response = NextResponse.rewrite(nextUrl)

    response.cookies.set('_vercel_no_cache', 1)

    return response
  }
}
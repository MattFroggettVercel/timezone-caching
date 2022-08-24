import { NextResponse } from "next/server"

export const config = {
  matcher: '/fixtures',
}

export async function middleware(req) {
  const { nextUrl, geo } = req

  const country = geo.country || 'GB'

  if (nextUrl.pathname === '/fixtures') {
    nextUrl.pathname = `/fixtures/${country}`

    return NextResponse.rewrite(nextUrl)
  }
}
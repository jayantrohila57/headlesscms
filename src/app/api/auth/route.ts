import ServerApiRouteProtection from '@/hooks/auth/ServerApiRouteProtection'
import { NextResponse } from 'next/server'

export async function GET() {
  const session = await ServerApiRouteProtection()
  if (!session)
    return NextResponse.json(
      { message: 'Not Authorized to Access this Route', name: 'Not Signed In!' },
      { status: 401 },
    )
  return NextResponse.json(
    { message: 'Authorized to Access thiss Route ', name: session?.user?.name },
    { status: 200 },
  )
}

import { authOptions } from '@/server/auth'
import { type Session, getServerSession } from 'next-auth'

const ServerApiRouteProtection = async (): Promise<Session | null> => {
  const session: Session | null = await getServerSession(authOptions)
  return session
}

export default ServerApiRouteProtection

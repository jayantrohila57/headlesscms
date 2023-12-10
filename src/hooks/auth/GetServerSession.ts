import { type Session, getServerSession } from 'next-auth'

const GetServerSession = async () => {
  const session: Session | null = await getServerSession()
  return session ?? null
}

export default GetServerSession

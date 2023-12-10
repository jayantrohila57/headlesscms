import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

const ServerProtectedRoute = async (redirectURL: string, directURL: string): Promise<void> => {
  const session = await getServerSession()
  if (!session || !session?.user) {
    if (redirectURL !== '') redirect(redirectURL)
  }
  if (session) {
    if (directURL !== '') redirect(directURL)
  }
}

export default ServerProtectedRoute

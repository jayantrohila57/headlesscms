import ServerProtectedRoute from '@/hooks/auth/ServerProtectedRoute'
import React from 'react'

const AuthPage = async () => {
  await ServerProtectedRoute('/auth/signin', '/')
  return <div>AuthPage</div>
}

export default AuthPage

import ServerProtectedRoute from '@/hooks/auth/ServerProtectedRoute'
import React from 'react'

const SettingPage = async () => {
  await ServerProtectedRoute('/auth/signin', '')
  return <div>SettingPage</div>
}

export default SettingPage

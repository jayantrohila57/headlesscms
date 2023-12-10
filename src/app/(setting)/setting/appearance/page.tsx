import AppearanceSetting from '@/components/setting/appearanceSetting'
import ServerProtectedRoute from '@/hooks/auth/ServerProtectedRoute'
import React from 'react'

const AppearancePage = async () => {
  await ServerProtectedRoute('/auth/signin', '')
  return <AppearanceSetting />
}
export default AppearancePage

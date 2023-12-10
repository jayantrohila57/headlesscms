import AccountSetting from '@/components/setting/accountSetting'
import ServerProtectedRoute from '@/hooks/auth/ServerProtectedRoute'
import React from 'react'

const AccountPage = async () => {
  await ServerProtectedRoute('/auth/signin', '')
  return <AccountSetting />
}
export default AccountPage

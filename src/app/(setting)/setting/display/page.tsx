import DisplaySetting from '@/components/setting/displaySetting'
import ServerProtectedRoute from '@/hooks/auth/ServerProtectedRoute'
import React from 'react'

const DisplayPage = async () => {
  await ServerProtectedRoute('/auth/signin', '')
  return <DisplaySetting />
}
export default DisplayPage

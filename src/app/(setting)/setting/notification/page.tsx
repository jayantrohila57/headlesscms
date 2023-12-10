import NotificationSettings from '@/components/setting/notificationSettings'
import ServerProtectedRoute from '@/hooks/auth/ServerProtectedRoute'
import React from 'react'

const NotificationPage = async () => {
  await ServerProtectedRoute('/auth/signin', '')
  return <NotificationSettings />
}
export default NotificationPage

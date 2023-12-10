import ProfileSetting from '@/components/setting/profileSetting'
import ServerProtectedRoute from '@/hooks/auth/ServerProtectedRoute'
import React from 'react'

const ProfilePage = async () => {
  await ServerProtectedRoute('/auth/signin', '')
  return <ProfileSetting />
}
export default ProfilePage

import SignupComp from '@/components/auth/signupPage'
import ServerProtectedRoute from '@/hooks/auth/ServerProtectedRoute'
import React from 'react'

const SignupPage = async () => {
  await ServerProtectedRoute('', '/')
  return <SignupComp />
}

export default SignupPage

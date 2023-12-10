import SigninComp from '@/components/auth/signinPage'
import ServerProtectedRoute from '@/hooks/auth/ServerProtectedRoute'
import React from 'react'

const SigninPage = async () => {
  await ServerProtectedRoute('', '/')
  return <SigninComp />
}

export default SigninPage

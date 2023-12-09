'use client'

import React from 'react'
import { signOut } from 'next-auth/react'
import { Button } from '../ui/button'

const SignoutButton = ({ children }: { children: React.ReactNode }) => (
  <Button variant={'ghost'} onClick={() => signOut()}>
    {children}
  </Button>
)

export default SignoutButton

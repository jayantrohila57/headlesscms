import { site } from '@/setting/site'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
      <h3 className='underline-primary text-lg font-semibold underline decoration-wavy'>
        {site?.name}
      </h3>
    </Link>
  )
}

export default Logo
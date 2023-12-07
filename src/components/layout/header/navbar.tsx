import React from 'react'
import { MainNav } from './main-nav'
import { UserNav } from './user-nav'
import { Search } from './search'
import { ModeToggle } from '../darkModeToggle'
import { site } from '@/setting/site'

const Navbar = () => {
  return (
    <div className='border-b'>
      <div className='flex h-14 items-center px-4'>
        <h3 className='underline-primary text-lg font-semibold underline decoration-wavy'>
          {site?.name}
        </h3>
        <MainNav className='flex pb-1 justify-center items-center mx-auto w-full max-w-4xl' />
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </div>
  )
}

export default Navbar

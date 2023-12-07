import React from 'react'
import { MainNav } from './main-nav'
import { UserNav } from './user-nav'
import { Search } from './search'
import { ModeToggle } from '../darkModeToggle'
import { site } from '@/setting/site'

const Navbar = () => {
  return (
    <div className='border-b'>
      <div className='flex h-16 items-center px-4'>
        <h2 className='underline-primary text-lg font-semibold underline decoration-wavy'>
          {site?.name}
        </h2>
        <MainNav className='flex justify-center items-center mx-auto w-full max-w-4xl' />
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

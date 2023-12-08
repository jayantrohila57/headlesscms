import React from 'react'
import { MainNav } from './main-nav'
import { UserNav } from './user-nav'
import { Search } from './search'
import { ModeToggle } from '../darkModeToggle'
import Logo from '../logo'

const Navbar = () => {
  return (
    <div className='border-b'>
      <div className='flex h-14 items-center px-4 md:px-10'>
        <Logo />
        <MainNav className='mx-auto flex w-full items-center justify-center  pb-1 pl-12 lg:w-1/5' />
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

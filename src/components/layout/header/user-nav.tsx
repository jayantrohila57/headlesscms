import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { LogOutIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { getServerAuthSession } from '@/server/auth'
import type { Session } from 'next-auth'

import Link from 'next/link'
import SignoutButton from '@/components/auth/signoutButton'

export async function UserNav() {
  const session: Session | null = await getServerAuthSession()
  return (
    <>
      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Link href={'/setting/account'}>
              <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
                <Avatar className='h-8 w-8'>
                  <AvatarImage src={session?.user?.image ?? './avatar.png'} alt='@user Image' />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
              </Button>
            </Link>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56' align='end' forceMount>
            <DropdownMenuLabel className='font-normal'>
              <div className='flex flex-col space-y-1'>
                <p className='text-sm font-medium leading-none'>{session?.user?.name ?? 'admin'}</p>
                <p className='text-xs leading-none text-muted-foreground'>
                  {session?.user?.email ?? 'm@example.com'}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href={'/setting/profile'}>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
              <Link href={'/billing'}>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
              <Link href={'/setting'}>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <SignoutButton>
              <span className='w-full pr-28'>Sign out</span>
              <LogOutIcon className='h-4 w-4' />
            </SignoutButton>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button variant={'default'} asChild>
          <Link href='/auth/signin'>Sign in</Link>
        </Button>
      )}
    </>
  )
}

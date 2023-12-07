import Navbar from '@/components/layout/header/navbar'
import { SidebarNav } from '@/components/layout/sidebar/settingSidebar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

const sidebarNavItems = [
  {
    title: 'Profile',
    href: '/setting/profile',
  },
  {
    title: 'Account',
    href: '/setting/account',
  },
  {
    title: 'Appearance',
    href: '/setting/appearance',
  },
  {
    title: 'Notifications',
    href: '/setting/notifications',
  },
  {
    title: 'Display',
    href: '/setting/display',
  },
]

export default function SettingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen w-full border'>
      <Navbar />
      <Separator />
      <div className='px-10 pt-5'>
        <Link href={'/setting'}>
          <h2 className='pb-5 text-2xl font-bold tracking-tight'>Settings</h2>
        </Link>
        <div className='space-t-8 flex flex-col lg:flex-row lg:space-x-12 lg:space-y-0'>
          <aside className='-mx-4 lg:w-1/5'>
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <ScrollArea className='h-[70vh] w-full rounded-md border'>
            <div className='m-5'>{children}</div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

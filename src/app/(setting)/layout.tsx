import Navbar from '@/components/layout/header/navbar'
import { SidebarNav } from '@/components/layout/sidebar/settingSidebar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { sidebarNavItems } from '@/setting/settingSidebar'
import Link from 'next/link'

export default function SettingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen w-full border'>
      <Navbar />

      <div className='px-10 pt-5'>
        <div className='space-t-8 flex flex-col lg:flex-row lg:space-x-12 lg:space-y-0'>
          <aside className='lg:w-1/5'>
            <Link href={'/setting'}>
              <h2 className='mb-5 pb-5 text-2xl font-bold tracking-tight'>Settings</h2>
            </Link>
            <Separator />
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <ScrollArea className='h-[80vh] w-full'>
            <div className='mx-5'>{children}</div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

'use client'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { navItems } from '@/setting/header'
import { usePathname } from 'next/navigation'

export function MainNav({ className }: { className: string }) {
  const active = usePathname()
  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6', className)}>
      {navItems.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(' underline-offset-8 transition-colors hover:underline', {
            'text-accent-foreground underline': href === active,
          })}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

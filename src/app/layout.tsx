import '@/styles/globals.css'

import { Poppins } from 'next/font/google'
import { cookies } from 'next/headers'

import { TRPCReactProvider } from '@/trpc/react'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/provider/theme-provider'

const fontSans = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'CMS',
  description: 'Headless CMS',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          <TRPCReactProvider cookies={cookies().toString()}>{children}</TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

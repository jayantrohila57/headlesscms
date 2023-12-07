import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { UserAuthForm } from '@/components/auth/userAuthForm'
import { site } from '@/setting/site'

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
}

export default function SignupComp() {
  return (
    <>
      <div className='md:hidden'>
        <Image
          src='/examples/authentication-light.png'
          width={1280}
          height={843}
          alt='Authentication'
          className='block dark:hidden'
        />
        <Image
          src='/examples/authentication-dark.png'
          width={1280}
          height={843}
          alt='Authentication'
          className='hidden dark:block'
        />
      </div>
      <div className='container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
        <Link
          href='/auth/signin'
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-4 md:right-8 md:top-4',
          )}
        >
          Sign in
        </Link>
        <div className='relative hidden h-full flex-col bg-muted p-5 text-white dark:border-r lg:flex'>
          <div className='absolute inset-0 bg-zinc-900' />
          <div className='relative z-20 flex items-center text-lg font-medium'>
            <h3 className='underline-primary text-lg font-semibold underline decoration-wavy'>
              {site?.name}
            </h3>
          </div>
        </div>
        <div className='lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-center'>
              <h1 className='text-2xl font-semibold tracking-tight'>Sign in your account </h1>
              <p className='text-sm text-muted-foreground'>
                Enter your email below to Sign in your account
              </p>
            </div>
            <UserAuthForm />
            <p className='px-8 text-center text-sm text-muted-foreground'>
              By clicking continue, you agree to our
              <Link href='/terms' className='px-1 underline underline-offset-4 hover:text-primary'>
                Terms of Service
              </Link>
              and
              <Link
                href='/privacy'
                className='px-1 underline underline-offset-4 hover:text-primary'
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

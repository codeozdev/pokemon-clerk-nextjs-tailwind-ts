'use client'

import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'

export default function SignInPage() {
  const { theme } = useTheme()
  return (
    <div className='flex items-center justify-center h-[calc(100vh-110px)] overflow-y-hidden'>
      <SignIn appearance={{ baseTheme: theme === 'dark' ? dark : undefined }} />
    </div>
  )
}

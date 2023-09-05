'use client'

import { SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'

export default function SignUpPage() {
  const { theme } = useTheme()
  return (
    <div className='flex items-center justify-center h-[calc(100vh-110px)] overflow-y-hidden'>
      <SignUp appearance={{ baseTheme: theme === 'dark' ? dark : undefined }} />
    </div>
  )
}

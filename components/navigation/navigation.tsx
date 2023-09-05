import Link from 'next/link'
import PaddingContainer from '@/components/layout/padding-container'
import ThemeButton from '@/components/ThemeButton'
import { auth, UserButton } from '@clerk/nextjs'

export default function Navigation() {
  const { userId } = auth()

  return (
    <PaddingContainer>
      <div className='flex items-center justify-between'>
        <Link href='/'>
          <div className='text-lg sm:text-3xl font-bold uppercase'>Pokemon</div>
        </Link>
        <div className='flex items-center gap-5'>
          {!userId && (
            <>
              <Link href={'/sign-in'} className='hover:underline'>
                Sign In
              </Link>

              <Link href={'/sign-up'} className='hover:underline'>
                Sign Up
              </Link>
            </>
          )}
          <ThemeButton />
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </PaddingContainer>
  )
}

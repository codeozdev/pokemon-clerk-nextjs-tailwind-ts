import Link from 'next/link'
import PaddingContainer from '@/components/layout/padding-container'

export default function Navigation() {
  return (
    <PaddingContainer>
      <div className='flex items-center justify-between'>
        <Link href='/'>
          <div className='text-lg sm:text-3xl font-bold uppercase'>Pokemon</div>
        </Link>
        <nav>
          <ul className='flex items-center gap-5'>
            <li>
              <Link href={'/sign-in'} className='hover:underline'>
                Sign In
              </Link>
            </li>
            <li>
              <Link href={'/sign-up'} className='hover:underline'>
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </PaddingContainer>
  )
}

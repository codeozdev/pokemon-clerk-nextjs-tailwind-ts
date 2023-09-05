import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-110px)] overflow-y-hidden'>
      <SignIn />
    </div>
  )
}

import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-110px)] overflow-y-hidden'>
      <SignUp />
    </div>
  )
}

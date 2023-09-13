import Link from 'next/link'
import { Navigation } from '../../templates/Navigation/router'

const navLinks = [
  { name: 'GL', href: '/GL' },
  { name: 'OBJ', href: '/OBJ' },
  { name: 'FBX', href: '/FBX' },
]

const NavigationBar = () => {
  return (
    <div className='fixed bottom-10 left-1/2 z-[5000] w-[240px] max-w-[92%] -translate-x-1/2 rounded-xl bg-[rgba(220,220,220,.4)] backdrop-blur-lg'>
      <div className='flex items-center justify-between px-5 py-2.5'>
        <Link href={'/'}>:):</Link>
        <nav className='flex gap-4'>
          <Navigation navLinks={navLinks} />
        </nav>
      </div>
    </div>
  )
}

export default NavigationBar

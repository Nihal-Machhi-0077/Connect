import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href='/' className="md:flex-1">
        <p className='text-2xl' >Connect<p/>
      </Link>
      {children}
    </div>
  )
}

export default Header

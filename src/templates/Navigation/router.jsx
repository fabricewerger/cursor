'use client'

// nextjs-router.js
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Navigation({ navLinks }) {
  const pathname = usePathname()

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)

        return (
          <Link
            className={
              isActive
                ? 'font-medium text-black '
                : 'cursor-pointer font-medium text-black/40 transition duration-150 hover:text-black'
            }
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
    </>
  )
}

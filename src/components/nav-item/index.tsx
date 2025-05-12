'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'

export const NavItem = ({
  name,
  href,
  isActive
}: {
  name: string
  href: string
  isActive: boolean
}) => {
  return (
    <li>
      <Link
        href={href}
        passHref
        className={cn(
          `
            uppercase
            font-medium
            hover:bg-indigo-500
            hover:font-medium
            rounded-lg
            p-4
            transition-colors
            duration-300
            ease-in-out
            transform
            hover:scale-110
          `,
          isActive ? 'border-b-4 bg-indigo-500' : ''
        )}
      >
        {name}
      </Link>
    </li>
  )
}

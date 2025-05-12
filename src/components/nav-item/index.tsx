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
            p-3
            text-[12px]
            transition-colors
            duration-300
            ease-
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

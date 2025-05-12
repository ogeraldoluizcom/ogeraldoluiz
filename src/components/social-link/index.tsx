import Link from 'next/link'

interface SocialLinkProps {
  href: string
  children: React.ReactNode
}

export const SocialLink = ({ href, children }: SocialLinkProps) => (
  <Link
    target="_blank"
    href={href}
    className="
      bg-indigo-500
      rounded-full
      p-2
      duration-300
      transition-transform
      ease-in-out
      transform
      hover:scale-110
    "
  >
    {children}
  </Link>
)

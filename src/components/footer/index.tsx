import Link from 'next/link'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className="flex items-center justify-between max-w-screen-xl mx-auto">
      <p className="text-xs">Construído com muito amor ❤️‍🔥</p>
      <div className="flex items-center gap-4">
        <Link
          target="_blank"
          href="https://github.com/geraldobl58"
          className="
              bg-indigo-500
              rounded-lg
              shadow-lg
              border
              border-indigo-700
              p-2
              transition-transform
              duration-300
              scale-105
              hover:scale-110
              hover:shadow-xl
          "
        >
          <FaGithub />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/geraldo-luiz-b626ab31/"
          className="
              bg-indigo-500
              rounded-lg
              shadow-lg
              border
              border-indigo-700
              p-2
              transition-transform
              duration-300
              scale-105
              hover:scale-110
              hover:shadow-xl
          "
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  )
}

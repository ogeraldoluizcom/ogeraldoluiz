'use client'

import Link from 'next/link'

import { ArrowUp } from 'lucide-react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex items-center justify-between max-w-screen-xl mx-auto">
      <p className="text-xs">Construído com muito amor ❤️‍🔥</p>
      <div className="flex items-center gap-4">
        <Link
          aria-label="github"
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
          <FaGithub className="size-4" />
        </Link>
        <Link
          aria-label="linkedin"
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
          <FaLinkedin className="size-4" />
        </Link>
        <button
          type="button"
          onClick={() => handleScrollToTop()}
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
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="size-4" />
        </button>
      </div>
    </div>
  )
}

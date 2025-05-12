'use client'

import Link from 'next/link'

import { ArrowRightIcon } from 'lucide-react'

import { AboutMe } from '@/components/about-me'
import { Typed } from '@/components/typed'

export const Hero = () => {
  return (
    <>
      <div>
        <h1 className="text-[36px] font-bold text-muted-foreground">
          👋 Olá, eu sou <b className="text-indigo-500">Geraldo Luiz</b>
        </h1>
        <Typed />
        <AboutMe />
        <Link
          href="/contato"
          className="
            inline-flex
            items-center
            justify-center
            mt-4
            p-4
            text-md
            font-medium
            text-white
            bg-indigo-500
            border
            border-transparent
            rounded-md
            shadow-sm
            hover:bg-indigo-600
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          Entre em contato <ArrowRightIcon className="ml-2 size-4" />
        </Link>
      </div>
      <div
        className="
          bg-[url('/img/avatar.png')]
          bg-cover
          bg-center
          bg-no-repeat
          w-full
          h-[650px]
          rounded-lg
        "
      />
    </>
  )
}

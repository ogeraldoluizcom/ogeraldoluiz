'use client'

import Link from 'next/link'

import { ArrowRightIcon } from 'lucide-react'

import { AboutMe } from '@/components/about-me'
import { Typed } from '@/components/typed'
import { Button } from '@/components/ui/button'

export const Hero = () => {
  return (
    <>
      <div className="space-y-5">
        <h1 className="text-2xl sm:text-4xl  font-bold text-muted-foreground">
          👋 Olá, eu sou <b className="text-indigo-500">Geraldo Luiz</b>
        </h1>
        <div className="hidden md:block">
          <Typed />
        </div>
        <AboutMe />
        <Button asChild size="lg" className="w-full">
          <Link href="/contact">
            Entre em contato <ArrowRightIcon className="ml-2 size-4" />
          </Link>
        </Button>
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
         hidden
         md:block
        "
      />
    </>
  )
}

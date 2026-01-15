import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight03Icon } from '@hugeicons/core-free-icons'

function ExperienceSection() {
  return (
       <div className="w-full animate-fade-in-blur ">
      <div>
        <p className="md:text-base text-sm text-muted-foreground">Featured</p>
        <div className="flex items-center gap-2">
          <h2 className="md:text-5xl text-3xl font-medium font-instrument-serif italic  tracking-wider shrink-0">
            My Experience
          </h2>
          <div className="w-full h-[2px] bg-gray-200 grow"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
    {/* Heree to add  */}
      </div>
      <div className="flex items-center justify-center mt-6">
        <Link href={'/works'}>
        <Button variant={'outline'}>See all experience <HugeiconsIcon icon={ArrowUpRight03Icon} /></Button>
        </Link>
      </div>
    </div>
  )
}

export default ExperienceSection
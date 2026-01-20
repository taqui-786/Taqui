import Link from 'next/link'
import React from 'react'
import { Button } from './button'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight03Icon } from '@hugeicons/core-free-icons'

function GetMoreSectionFooterBtn({link, text}: {link: string, text:string}) {
  return (
         
        <Link
          href={link}
          className="p-[2px] group border border-dashed dark:border-white/30 border-black/20  rounded-[10px]"
        >
          <Button className="rounded-[10px] [&_svg]:group-hover:rotate-45 transition-all duration-300">
            {text} <HugeiconsIcon icon={ArrowUpRight03Icon} />
          </Button>
        </Link>
   
  )
}

export default GetMoreSectionFooterBtn
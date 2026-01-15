'use client'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'
    const links = [
        {
            label: "Work",
            href: "/work",
        },
        {
            label: "Projects",
            href: "/projects",
        },
        {
            label: "Blogs",
            href: "/blogs",
        },
    ]
function HeaderNavLinks() {
const  params = usePathname()
  return (
         <nav className="flex items-center gap-2 md:gap-4 text">
            {
                links.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        data-active={params === link.href}
                        className="[@media(hover:hover)_and_(pointer:fine)]:hover:underline [@media(hover:hover)_and_(pointer:fine)]:hover:decoration-2 [@media(hover:hover)_and_(pointer:fine)]:hover:underline-offset-4 data-[active=true]:underline-offset-4 data-[active=true]:decoration-2 data-[active=true]:underline"
                    >
                        {link.label}
                    </Link>
                ))
            }
          
       
          </nav>
  )
}

export default HeaderNavLinks
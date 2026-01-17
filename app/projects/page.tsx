import ProjectFeed from '@/components/projectPage/ProjectFeed'
import React from 'react'

function page() {
  return (
        <div className="container mx-auto max-w-full md:max-w-3xl px-4 h-auto py-16 animate-fade-in-blur">

          <div className=" flex flex-col gap-4 items-center justify-center border-b pb-8 ">
            <h1 className="md:text-5xl text-4xl  text-title font-bold text-center font-instrument-serif tracking-wider italic ">All Projects</h1>
            <p className="md:text-lg text-base text-muted-foreground tracking-wider text-center ">Here are all my projects and what I have done so far</p>
          </div>
          <ProjectFeed/>
        </div>
  )
}

export default page
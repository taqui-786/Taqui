'use client'
import { allProjects } from '@/app/config/projectConfig'
import React from 'react'
import ProjectCard from '../uilayouts/ProjectCard'

function ProjectFeed() {
  return (
    <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {
            allProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))
        }
    </div>
  )
}

export default ProjectFeed
'use client'
import React from "react";
import ProjectCard from "./uilayouts/ProjectCard";
import { allProjects } from "@/app/config/projectConfig";
import { Button } from "./ui/button";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";


function ProjectsSection() {
  return (
    <div className="w-full animate-fade-in-blur ">
      <div>
        <p className="md:text-base text-sm text-primary">Featured</p>
        <div className="flex items-center gap-2">
          <h2 className="md:text-5xl text-3xl text-title font-medium font-instrument-serif italic  tracking-wider shrink-0">
            My Projects
          </h2>
          <div className="w-full h-[2px] bg-muted-foreground/30 grow"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {allProjects.filter((project) => project.featured).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-6">
        <Link href={'/projects'} className="p-[2px] group dark:border-white/30 border-black/20 border border-dashed rounded-[10px]">
        <Button className="rounded-[10px] [&_svg]:group-hover:rotate-45 transition-all duration-300">See all projects <HugeiconsIcon icon={ArrowUpRight03Icon} /></Button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectsSection;

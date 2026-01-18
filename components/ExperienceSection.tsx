import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";

function ExperienceSection() {
  return (
    <div className="w-full animate-fade-in-blur ">
      <div>
        <p className="md:text-base text-sm text-primary">Featured</p>
        <div className="flex items-center gap-2">
          <h2 className="md:text-5xl text-3xl font-medium text-title font-instrument-serif italic  tracking-wider shrink-0">
            My Experience
          </h2>
          <div className="w-full h-[2px] bg-muted-foreground/30 grow"></div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 mt-8">
        {/* Heree to add  */}
        <div className="border w-full p-2 flex items-center justify-between rounded-lg">
          <div className="flex gap-4">
            <div className="h-16 w-16 bg-muted rounded-lg overflow-hidden relative"></div>
            <div className="flex flex-col w-fit items-start justify-center gap-2">
              <h3 className="sm:text-[1.20rem] text-[1.05rem] leading-[0.90] font-semibold text-title ">Lighwork Ai</h3>
             <p className="sm:text-sm text-xs text-muted-foreground">Full Stack Developer</p>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center gap-2">
            <p className="text-title font-semibold sm:text-sm text-xs ">Oct 2024 - Mar 2025</p>
            <p className="sm:text-sm text-xs text-muted-foreground">Full Time | Remote</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-6">
        <Link
          href={"/work"}
          className="p-[2px] group border border-dashed dark:border-white/30 border-black/20  rounded-lg"
        >
          <Button className="rounded-lg [&_svg]:group-hover:rotate-45 transition-all duration-300">
            See all experience <HugeiconsIcon icon={ArrowUpRight03Icon} />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ExperienceSection;

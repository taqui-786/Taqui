import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDown01Icon,
  ArrowUp01Icon,
  ArrowUpRight03Icon,
} from "@hugeicons/core-free-icons";
import Image from "next/image";
import { CustomBadge } from "./ui/custom-badge";
import { experienceConfig } from "@/app/config/experienceConfig";
import React from "react";

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
        <Accordion
          type="single"
          collapsible
          className="w-full"
        >
          {experienceConfig.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={`item-${index}`}>
              <AccordionTrigger>
                {" "}
                <div className=" w-full px-3 py-2 hover:bg-muted transition-all duration-300 flex items-center justify-between rounded-lg">
                  <div className="flex gap-4">
                    <div className="border border-dashed dark:border-white/30 border-black/20 rounded-[10px] p-[2px]">
                      <div className="h-12 w-12 bg-muted rounded-[8px] overflow-hidden relative border border-border">
                        <Image
                          src={item.logo}
                          alt={item.company}
                          fill
                          className="object-cover size-full "
                        />
                      </div>
                    </div>
                    <div className="flex flex-col w-fit items-start justify-center gap-2">
                      <div className="flex items-center gap-2">
                        <h3 className="sm:text-[1.20rem] text-[1.05rem] leading-[0.90] font-semibold text-title ">
                          {item.company}
                        </h3>
                        <span className="px-[4px]  py-0 text-xs font-medium border border-border text-muted-foreground rounded-[4px]">
                          {item.time}
                        </span>
                      </div>
                      <p className="sm:text-sm text-lg text-muted-foreground font-normal">
                        {item.position}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start justify-center w-fit">
                    <div className="flex flex-col items-end justify-center gap-2">
                      <p className="text-title font-semibold sm:text-sm text-xs ">
                        {item.duration}
                      </p>
                      <p className="sm:text-sm text-lg font-normal text-muted-foreground">
                        {item.location}
                      </p>
                    </div>
                    <HugeiconsIcon
                      icon={ArrowDown01Icon}
                      strokeWidth={2}
                      data-slot="accordion-trigger-icon"
                      className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
                    />
                    <HugeiconsIcon
                      icon={ArrowUp01Icon}
                      strokeWidth={2}
                      data-slot="accordion-trigger-icon"
                      className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
                    />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 w-full  h-fit  ">
                <ul className="list-disc list-inside text-balance text-muted-foreground  leading-relaxed tracking-wide text-sm">
                  {item.description.map((desc, index) => (
                    <li
                      className="marker:text-muted-foreground/80 "
                      key={index}
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col items-start justify-center gap-1">
                  <h3 className="text-title font-semibold sm:text-sm text-xs ">
                    Tech Stack
                  </h3>
                  <div className="p-2 inline-flex flex-wrap gap-2 ">
                    {item.technologies.map((techstack) => (
                      <CustomBadge
                        key={techstack.name}
                        href={"/"}
                        name={techstack.name}
                      >
                        <techstack.icon size={18} />
                      </CustomBadge>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {/* Heree to add  */}
      <div className="flex items-center justify-center mt-6">
        <Link
          href={"/work"}
          className="p-[2px] group border border-dashed dark:border-white/30 border-black/20  rounded-[10px]"
        >
          <Button className="rounded-[10px] [&_svg]:group-hover:rotate-45 transition-all duration-300">
            See all experience <HugeiconsIcon icon={ArrowUpRight03Icon} />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ExperienceSection;

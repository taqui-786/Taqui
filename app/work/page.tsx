import React from "react";
import { experienceConfig } from "../config/experienceConfig";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, ArrowUp01Icon } from "@hugeicons/core-free-icons";
import { CustomBadge } from "@/components/ui/custom-badge";

function page() {
  return (
    <div className="container mx-auto max-w-full md:max-w-3xl px-4 h-auto py-16 animate-fade-in-blur">
      <div className=" flex flex-col gap-4 items-center justify-center border-b pb-8 ">
        <h1 className="md:text-5xl text-4xl  text-title font-bold text-center font-instrument-serif tracking-wider italic ">
          My Experiences
        </h1>
        <p className="md:text-lg text-base text-muted-foreground tracking-wider text-center ">
          Here are all my experiences where I have worked and learned
        </p>
      </div>
       <div className="flex flex-col w-full gap-4 mt-8">
        <Accordion
          type="single"
          collapsible={true}
          className="w-full"
          defaultValue="item-0"
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
              <AccordionContent className="flex flex-col gap-4 w-full px-4 h-fit  ">
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
    </div>
  );
}

export default page;

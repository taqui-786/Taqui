import { ExperienceItem } from '@/app/config/experienceConfig'
import React from 'react'
import { AccordionContent, AccordionItem, AccordionTrigger } from './accordion'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01Icon, ArrowUp01Icon } from '@hugeicons/core-free-icons'
import { CustomBadge } from './custom-badge'
import Image from 'next/image'

function ExperinceAccordian({item,index}: {item: ExperienceItem, index:number}) {
  return (
      <AccordionItem value={`item-${index}`} >
              <AccordionTrigger>
                {" "}
                <div className=" w-full md:px-3 py-2 hover:bg-muted transition-all duration-300 flex items-center justify-between rounded-lg">
                  <div className="flex md:gap-4 gap-2">
                    <div className="border border-dashed dark:border-white/30 border-black/20 rounded-[10px] p-[2px]">
                      <div className="h-12 w-12 bg-background rounded-[8px] overflow-hidden relative border border-border">
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
                        {/* <span className="px-[4px]  py-0 text-xs font-medium border border-border text-muted-foreground rounded-[4px]">
                          {item.time}
                        </span> */}
                      </div>
                      <p className="sm:text-sm text-xs text-muted-foreground font-normal">
                        {item.position}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 md:gap-4 items-start justify-center w-fit">
                    <div className="flex flex-col items-end justify-center gap-2">
                      <p className="text-title font-semibold sm:text-sm text-xs ">
                        {item.duration}
                      </p>
                      <p className="sm:text-sm text-xs font-normal text-muted-foreground">
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
                <ul className="list-disc pl-2 list-inside text-balance text-muted-foreground  leading-relaxed tracking-wide text-sm">
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
                  <div className="md:px-2 mt-2 inline-flex flex-wrap gap-2 ">
                    {item.technologies.map((techstack) => (
                      <CustomBadge
                        key={techstack.name}
                        href={techstack.link}
                        name={techstack.name}
                      >
                        <techstack.icon size={18} />
                      </CustomBadge>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
  )
}

export default ExperinceAccordian
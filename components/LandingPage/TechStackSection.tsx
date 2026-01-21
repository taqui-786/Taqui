import { techstackConfig } from "@/app/config/techstackConfig";
import React from "react";
import { CustomBadge } from "../ui/custom-badge";

function TechStackSection() {
  return (
    <div className="w-full  ">
      <div>
        <p className="md:text-base text-sm text-primary">My Current</p>
        <div className="flex items-center gap-2">
          <h2 className="md:text-5xl text-3xl font-medium text-title font-instrument-serif italic  tracking-wider shrink-0">
            Skills & Technologies
          </h2>
          <div className="w-full h-[2px] bg-muted-foreground/30 grow"></div>
        </div>
        <div className="w-full flex flex-wrap gap-2 mt-8 items-center justify-center">
          {techstackConfig.map((techstack, index) => (
            <CustomBadge
              key={index}
              href={techstack.link}
              name={techstack.name}
            >
              <techstack.icon size={18} />
            </CustomBadge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStackSection;

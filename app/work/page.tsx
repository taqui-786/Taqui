import React from "react";
import { experienceConfig } from "../config/experienceConfig";
import {
  Accordion,

} from "@/components/ui/accordion";

import ExperinceAccordian from "@/components/ui/ExperinceAccordian";

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
          <ExperinceAccordian item={item} index={index} key={index}/>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default page;

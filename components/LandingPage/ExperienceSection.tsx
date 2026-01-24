
import { Accordion } from "@/components/ui/accordion";

import { experienceConfig } from "@/app/config/experienceConfig";
import ExperinceAccordian from "../ui/ExperinceAccordian";
import GetMoreSectionFooterBtn from "../ui/GetMoreSectionFooterBtn";

function ExperienceSection() {
  return (
    <div className="w-full  ">
      <div>
        <p className="md:text-base text-sm text-subtle">Featured</p>
        <div className="flex items-center gap-2">
          <h2 className="md:text-5xl text-4xl font-medium text-title font-instrument-serif italic  tracking-wider shrink-0">
            My Experience
          </h2>
          <div className="w-full h-[2px] bg-muted-foreground/30 grow"></div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 mt-8">
        <Accordion type="single" collapsible className="w-full">
          {experienceConfig
            .filter((item) => item.featured)
            .map((item, index) => (
              <ExperinceAccordian
                item={item}
                index={index}
                key={`item-${index}`}
              />
            ))}
        </Accordion>
      </div>
      {/* Heree to add  */}
      <div className="flex items-center justify-center mt-6">
        <GetMoreSectionFooterBtn link="/work" text="See all experience" />
      </div>
    </div>
  );
}

export default ExperienceSection;

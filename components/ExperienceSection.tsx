import Link from "next/link";
import {
  Accordion,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight03Icon,
} from "@hugeicons/core-free-icons";
import { experienceConfig } from "@/app/config/experienceConfig";
import ExperinceAccordian from "./ui/ExperinceAccordian";

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
          {experienceConfig.filter((item) => item.featured).map((item, index) => (
            <ExperinceAccordian item={item} index={index} key={`item-${index}`}/>
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

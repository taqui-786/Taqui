import React from "react";
import { LiquidButton } from "../uilayouts/animate-ui/components/buttons/liquid";
import { HugeiconsIcon } from "@hugeicons/react";
import { GoogleDocIcon, SentIcon } from "@hugeicons/core-free-icons";
import { Magnetic } from "../uilayouts/magnetic";

function HeroActionButton() {
  return (
    <div className=" flex gap-6 items-center ">
      <LiquidButton variant={"default"} size={"lg"}>
        <HugeiconsIcon icon={GoogleDocIcon} />
        Resume / CV
      </LiquidButton>
      <Magnetic
        intensity={0.2}
        springOptions={{ bounce: 0.1 }}
        actionArea="global"
        range={100}
      >
        <button
          type="button"
          className="focus-visible:border-ring cursor-pointer focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-lg border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none bg-primary text-primary-foreground hover:bg-primary/80 h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3"
        >
          <Magnetic
            intensity={0.1}
            springOptions={{ bounce: 0.1 }}
            actionArea="global"
            range={200}
          >
            <div className="flex gap-1.5 items-center">
              <HugeiconsIcon icon={SentIcon} />
              <span>Get in touch</span>
            </div>
          </Magnetic>
        </button>
      </Magnetic>
    </div>
  );
}

export default HeroActionButton;

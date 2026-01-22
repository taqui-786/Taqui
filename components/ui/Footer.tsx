import { getPageViews } from "@/lib/umami";
import { Eye, SolidLine01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";
import { PointIcon } from "../customIcons";

function Footer() {
   const views = getPageViews();
  return (
    <footer className="container mx-auto max-w-full md:max-w-3xl px-4 h-auto py-16 animate-fade-in-blur">
      <div className="flex md:flex-row flex-col items-center justify-center md:justify-between gap-4 md:gap-0 h-full">
        <span className="text-xs text-subtle uppercase tracking-wider">
          © <b>{new Date().getFullYear()} </b>All rights reserved.
        </span>
        <div className="flex items-center gap-1">
          <div className="">
        {views.then((views) => {
          return (
            <div className="flex items-center justify-center gap-1  text-primary  ">
              <HugeiconsIcon icon={Eye} size={14} className="text-black dark:text-white" />
              <p className="text-xs font-bold  tracking-tight transition-colors duration-300">
                {views} views
              </p>
            </div>
          );
        })}
      </div>
      <span className="text-xs text-subtle w-fit"><PointIcon size={14} /></span>
        <span className="text-xs text-subtle tracking-wider">
          Designed & Developer By <span className="text-primary font-bold">Taqui</span>
        </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

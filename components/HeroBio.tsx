import React from "react";
import { CustomBadge } from "./ui/custom-badge";
import {
  NextjsIcon,
  PostgresqlIcon,
  ReactIcon,
  ReactQueryIcon,
  TypescriptIcon,
} from "./customIcons";

function HeroBio() {
  return (
    <div className="text-base md:text-lg text-neutral-500 leading-10 animate-fade-in-blur">
      I'm a <b className="text-black dark:text-white">Full Stack</b> web
      Developer builds interactive web{" "}
      <b className="text-black dark:text-white">app</b> using{" "}
      <CustomBadge href="/" name="Typescript">
        <TypescriptIcon size={18} />
      </CustomBadge>
       {" "},{" "}
      <CustomBadge href="/" name="React">
        <ReactIcon size={18} />
      </CustomBadge>
      {" "},{" "}
      <CustomBadge href="/" name="Nextjs">
        <NextjsIcon size={18} />
      </CustomBadge>
      {" "},{" "}
      <CustomBadge href="/" name="Tanstack Query">
        <ReactQueryIcon size={18} />
      </CustomBadge>{" "}
      and{" "}
      <CustomBadge href="/" name="Postgresql">
        <PostgresqlIcon size={18} />
      </CustomBadge>{" "}
      . My main focus is <b className="text-black dark:text-white">UI</b>{" "}
      design, performance, and interfaces{" "}
      <b className="text-black dark:text-white">users</b> actually enjoy using.
    </div>
  );
}

export default HeroBio;

import React from "react";
import { CustomBadge } from "../ui/custom-badge";
import {
  NextjsIcon,
  PostgresqlIcon,
  ReactIcon,
  ReactQueryIcon,
  TypescriptIcon,
} from "../customIcons";

function HeroBio() {
  return (
    <div className="text-base md:text-lg text-muted-foreground leading-10 ">
      I'm a <b className="text-title ">Full Stack</b> web Developer builds
      interactive web <b className="text-title ">app</b> using{" "}
      <CustomBadge href="https://www.typescriptlang.org/" name="Typescript">
        <TypescriptIcon size={18} />
      </CustomBadge>{" "}
      ,{" "}
      <CustomBadge href="https://react.dev/" name="React">
        <ReactIcon size={18} />
      </CustomBadge>{" "}
      ,{" "}
      <CustomBadge href="https://nextjs.org/" name="Nextjs">
        <NextjsIcon size={18} />
      </CustomBadge>{" "}
      ,{" "}
      <CustomBadge
        href="https://tanstack.com/query/latest"
        name="Tanstack Query"
      >
        <ReactQueryIcon size={18} />
      </CustomBadge>{" "}
      and{" "}
      <CustomBadge href="https://www.postgresql.org/" name="Postgresql">
        <PostgresqlIcon size={18} />
      </CustomBadge>{" "}
      . My main focus is <b className="text-title ">UI</b> design, performance,
      and interfaces <b className="text-title ">users</b> actually enjoy using.
    </div>
  );
}

export default HeroBio;

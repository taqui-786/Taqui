import React from "react";
import { blogConfig } from "../config/blogConfig";
import BlogCard from "@/components/ui/BlogCard";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { generateMetadata as genMeta } from "@/app/config/siteConfig";

export const metadata = genMeta("/blogs");

function page() {
  return (
    <div className="container mx-auto max-w-full md:max-w-3xl px-4 h-auto py-16 animate-fade-in-blur">
      <div className=" flex flex-col gap-4 items-center justify-center border-b pb-8 ">
        <h1 className="md:text-5xl text-4xl  text-title font-bold text-center font-instrument-serif tracking-wider italic ">
          My Blogs
        </h1>
        <p className="md:text-lg text-base text-muted-foreground tracking-wider text-center ">
          Here are all my blogs where I have shared my knowledge and experiences
        </p>
      </div>
      <div className="flex flex-col w-full gap-4 mt-8">
        {blogConfig.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2 p-3 justify-center ">
        <p className="text-muted-foreground flex items-center gap-1">
          <span className="hidden sm:block">
            For more interesting blogs, visit my
          </span>
          <span className="block sm:hidden">For more blogs, visit my</span>
          <a
            className="group text-title transition-colors select-none font-medium duration-300 inline-flex items-center"
            target="_blank"
            href="https://medium.com/@mdtaqui.jhar"
          >
            <span className="relative">
              Medium
              <span className="absolute left-0 bottom-0 w-full h-px bg-title origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </span>
          </a>
          <span className="block">or my</span>
          <a
            className="group text-title transition-colors select-none font-medium duration-300 inline-flex items-center"
            target="_blank"
            href="https://dev.to/random_ti"
          >
            <span className="relative">
              Dev.to
              <span className="absolute left-0 bottom-0 w-full h-px bg-title origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default page;

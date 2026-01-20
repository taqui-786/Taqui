import { BlogConfig } from "@/app/config/blogConfig";
import {
  ArrowUpRight03Icon,
  Calendar03Icon,
  ViewIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

function BlogCard({blog}: {blog: BlogConfig}) {
  return (
    <a href={blog.link} target="_blank" style={{ textDecoration: "none" }}>
      <div className="w-full flex items-center justify-between md:px-3 py-3 group/blog hover:bg-muted-foreground/5 transition-all duration-300 rounded-[10px]">
        <div className="flex flex-col items-start justify-center gap-1 grow relative overflow-hidden">
          <h2 className="text-base font-medium text-title truncate  max-w-full ">
            {blog.title}
          </h2>
          <div className="w-fit flex gap-2 items-center justify-center text-subtle">
            <HugeiconsIcon icon={Calendar03Icon} className="size-4" />
            <span className=" text-xs font-medium">{blog.date}</span>
          </div>
          <div className="flex gap-2 mt-1 items-center justify-center ">
            <div className="flex gap-1 items-center justify-center text-title border-r pr-2 border-border  ">
              <HugeiconsIcon icon={ViewIcon} className="size-4" />
              <span className=" text-xs font-semibold text-title ">{blog.views}</span>
            </div>
            <div className="flex gap-2">
              {blog.tags.map((tag, index) => (
                <div key={index} className="p-[2px] inline-flex items-center border border-dashed dark:border-white/30 border-black/20 rounded-[8px]">
                  <div className="inline-flex  items-center no-underline bg-black/5 dark:bg-white/15 border  py-[2px] px-[5px] rounded-[6px] skill-inner-shadow self-end text-title overflow-hidden">
                    <p className="ml-1 text-xs font-semibold ">{tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center text-subtle pl-4">
          <HugeiconsIcon
            icon={ArrowUpRight03Icon}
            className="size-5 group-hover/blog:text-title group-hover/blog:rotate-45 transition-all duration-300"
          />
        </div>
      </div>
    </a>
  );
}

export default BlogCard;

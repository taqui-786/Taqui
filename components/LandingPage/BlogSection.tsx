import { blogConfig } from "@/app/config/blogConfig";

import BlogCard from "../ui/BlogCard";
import GetMoreSectionFooterBtn from "../ui/GetMoreSectionFooterBtn";

function BlogSection() {
  return (
    <div className="w-full animate-fade-in-blur ">
      <div>
        <p className="md:text-base text-sm text-primary">Featured</p>
        <div className="flex items-center gap-2">
          <h2 className="md:text-5xl text-3xl font-medium text-title font-instrument-serif italic  tracking-wider shrink-0">
            My Blogs
          </h2>
          <div className="w-full h-[2px] bg-muted-foreground/30 grow"></div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 mt-8">
        {blogConfig
          .filter((blog) => blog.featured)
          .map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
      </div>
      <div className="flex items-center justify-center mt-6">
        <GetMoreSectionFooterBtn link="/blog" text="See all blogs" />
      </div>
    </div>
  );
}

export default BlogSection;

"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Box2LineIcon,
} from "@/components/ui/accordion";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
function ProjectsSection() {
  const [showMore, setShowMore] = useState(false);
  const [openItem, setOpenItem] = useState("project-1");
  const filteredProjects = showMore ? projects : projects.slice(0, 4);
  return (
    <section className=" border-x full-line-bottom relative">
      <h2 className="pl-4 text-3xl font-semibold relative full-line-bottom ">
        Projects{" "}
        <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
          ({projects.length})
        </sup>
      </h2>
      <div className="">
        {filteredProjects.map((project, index) => (
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={setOpenItem}
            key={index}
          >
            <AccordionItem value={`project-${project.id}`}>
              <AccordionTrigger aria-label={project.createdAt}>
                <div className="flex items-center justify-between p-4 h-full w-fit ">
                  <div className="  size-6 shrink-0">
                    <Box2LineIcon />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center py-4 pl-4 border-l font-mono gap-1 h-full">
                  <h3 className="text-balance font-medium text-base leading-snug flex gap-2 items-center justify-center ">
                    {project.title}
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowUpRight className="size-4 text-muted-foreground hover:text-primary" />
                    </a>
                  </h3>
                  <span className="text-muted-foreground text-xs  ">
                    {project.createdAt}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-4 border-b">
                <div className="prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl prose-lead:text-base prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-hr:border-edge">
                  <p>{project.description}</p>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.badge.map((badge, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-lg border bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground dark:bg-zinc-900"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="mt-0 flex items-center gap-4 justify-start">
                    <a
                      href={project.href}
                      target="_blank"
                      className="mt-4 flex  hover:text-primary gap-2 items-center justify-center "
                    >
                      Github Repository{" "}
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      className="mt-4 flex  hover:text-primary gap-2  items-center justify-center "
                    >
                      Live demo{" "}
                    </a>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      <div className="flex items-center py-2 justify-center">
        {showMore ? (
          <Button
            size={"sm"}
            onClick={() => setShowMore(false)}
            className="rounded-2xl flex items-center gap-2"
          >
            Show Less <ChevronUp />
          </Button>
        ) : (
          <Button
            size={"sm"}
            onClick={() => setShowMore(true)}
            className="rounded-2xl flex items-center gap-2"
          >
            Show More <ChevronDown />
          </Button>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
const projects = [
  {
    id: 1,
    title: "Tweetz",
    href: "https://tweetz.app/",
    live: "https://tweetz.app/",
    createdAt: "20-08-2025",
    description:
      "Tweetz.app is an AI-assisted Twitter posting with one-tap Telegram approvals",
    features: [
      "Better Auth authentication including sign up, sign in, and logout",
      "Have 7 Day free trial, No credit card required",
      "Auto Geneate Tweets based on your prefrences on daily basis",
      "Learns your tone so well, even your mom won't know the difference. (Fully editable, in case our AI gets too sassy.)",
      "Stay in control from your couch, your commute, or that awkward elevator ride.",
      "Set it and forget it. Like a crockpot, but for your Twitter presence.",
      "Your content goes live exactly when planned. No more 'Did I post that?' panic attacks at 2 AM.",
      "Data stored in Neon PostgreSQL and managed with Prisma ORM",
      "Efficient data fetching using Tanstack Query",
      "Modern UI components styled with shadcn-ui and Tailwind CSS",
    ],
    badge: [
      "Next.js",
      "Freelancing",
      "Typescript",
      "Better Auth",
      "Prisma",
      "Open Ai",
      "Tailwind CSS",
      "Shadcn UI",
      "Tanstack Query",
    ],
  },
  {
    id: 13,
    title: "Snapgroov",
    href: "https://github.com/taqui-786/Snapgroove",
    live: "https://snapgroov.vercel.app/",
    createdAt: "09-12-2025",
    description:
      "Make your screenshots look less like a cry for help. Add shadows, gradients, and device frames in one click. It’s the easiest way to make your work look expensive.",
    features: [
      "Add shadows, gradients, and device frames in one click",
      "Supports multiple devices",
      "No sign-up, no credit card required No limits",
      "smooth image export in you device",
      "Modern UI components styled with shadcn-ui and Tailwind CSS",
    ],
    badge: ["Next.js", "Typescript", "Tailwind CSS", "Shadcn UI", "Radix UI"],
  },
  {
    id: 12,
    title: "Wryte",
    href: "https://github.com/taqui-786/Wryte",
    live: "https://wryte-ti.vercel.app/",
    createdAt: "01-12-2025",
    description:
      "Wryte is an AI-powerered blog/content writting platform, it have its own WYSIWYG Ai-editor and be in user tone with various feature such as Auto-complete, next word suggestion, spelling check etc... ",
    features: [
      "Better Auth authentication including sign up, sign in, and logout",
      "It is completely Free but have some limit on Ai features",
      "User can write their content and format it to popular blog platform like Dev.to , medium etc...",
      "Have Various Ai features like Auto complete, Next word suggestion, spelling check etc...",
      "User can share and collaborate workspace with others ",
      "Also direct share the written content with other in just a Readable format",
      "Data stored in Neon PostgreSQL and managed with Drizzle ORM",
      "Efficient data fetching using Tanstack Query",
      "Modern UI components styled with shadcn-ui and Tailwind CSS",
    ],
    badge: [
      "Next.js",
      "Typescript",
      "Better Auth",
      "Drizzle",
      "OpenAI SDK",
      "Tailwind CSS",
      "Shadcn UI",
      "Tanstack Query",
    ],
  },
  {
    id: 13,
    title: "PDFlow",
    href: "https://github.com/taqui-786/PDFlow",
    live: "https://pdflow-free.vercel.app/",
    createdAt: "12-07-2025",
    description:
      "Transform the way you interact with documents. Our AI-powered platform allows you to upload PDF files and have intelligent conversations with them, extract key insights, and analyze content effortlessly.",
    features: [
      "Document Summarization - Automatically generate concise summaries of your PDF documents",
      "Key Points Extraction - Extract and highlight the most important points from your documents",
      "Important Questions - Generate relevant questions based on your document content",
      "Named Entities - Identify people, organizations, locations, and dates in your documents ",
      "Keywords Extraction - Find the most important keywords and phrases in your content",
      "Interactive Chat - Have natural conversations with your PDF documents",
      "Lucia-auth authentication including sign up, sign in, and logout",
      "Data stored in Neon PostgreSQL and managed with Drizzle ORM",
      "Efficient data fetching using Tanstack Query",
      "Modern UI components styled with shadcn-ui and Tailwind CSS",
    ],
    badge: [
      "Next.js",
      "Langchain",
      "Gemini Ai",
      "Typescript",
      "Lucia Auth",
      "Firebase",
      "Tailwind CSS",
      "Shadcn UI",
      "Tanstack Query",
    ],
  },
  {
    id: 12,
    title: "WePost",
    href: "https://github.com/taqui-786/WePost",
    live: "https://wepost.vercel.app",
    createdAt: "09-03-2025",
    description:
      "WePost is a modern and minimalistic social media platform enabling users to share posts, connect, and engage in discussions. It delivers a seamless and secure experience using the latest web technologies.",
    features: [
      "User authentication including sign up, sign in, and logout",
      "Create, edit, and delete posts",
      "Like and comment functionality on posts",
      "Customizable user profiles",
      "Responsive user interface design",
      "Built with Next.js 15 framework",
      "Authentication powered by Lucia",
      "Data stored in Neon PostgreSQL and managed with Prisma ORM",
      "Efficient data fetching using Tanstack Query",
      "Modern UI components styled with shadcn-ui and Tailwind CSS",
    ],
    badge: [
      "Open source",
      "Next.js",
      "Typescript",
      "Lucia Auth",
      "Prisma",
      "Tailwind CSS",
      "Shadcn UI",
      "Tanstack Query",
    ],
  },
  {
    id: 2,
    title: "itZmyLink",
    href: "https://github.com/taqui-786/itZmyLink",
    live: "https://itzmylink.vercel.app/",
    createdAt: "14-10-2023",
    description:
      "Your all-in-one link management solution, itZmyLink allows you to create personalized link pages, manage multiple links, and track performance effortlessly. Perfect for social media profiles, business cards, and more.",
    features: [
      "Create and manage personalized link pages",
      "Add multiple links to a single page",
      "Track link performance with analytics",
      "Customizable themes and styles",
      "User-friendly interface for easy navigation",
      "Built with Next.js 14 framework",
      "Authentication powered by Next-Auth",
      "Data stored in Supabase",
      "Modern UI components styled with shadcn-ui and Tailwind CSS",
    ],
    badge: [
      "Open source",
      "Next.js",
      "Typescript",
      "Next Auth",
      "Tailwind CSS",
      "Shadcn UI",
      "Supabase",
      "Zod",
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    href: "https://github.com/taqui-786/Portfolio",
    live: "https://mdtaquiimam.vercel.app/",
    createdAt: "15-11-2023",
    description:
      "My personal portfolio website showcasing my skills, projects, and experiences. Built with modern web technologies to provide a seamless user experience and highlight my work effectively.",
    features: [
      "Responsive design for all devices",
      "Showcase of my projects with detailed descriptions",
      "Integration with GitHub for project links",
      "Contact form for inquiries",
      "Built with Next.js 15 framework",

      "Modern UI components styled with shadcn-ui and Tailwind CSS",
    ],
    badge: [
      "Open source",
      "Next.js",
      "Typescript",
      "Framer motion",
      "Tailwind CSS",
      "Shadcn UI",
      "Resend",
    ],
  },
  {
    id: 4,
    title: "Mixcn Ui",
    href: "https://github.com/taqui-786/mixcnui",
    live: "https://mixcn-ui.vercel.app/",
    createdAt: "16-06-2024",
    description:
      "A modern UI component library built with Tailwind CSS and Shadcn UI, Mixcn UI provides a set of customizable and reusable components for building responsive web applications.",
    features: [
      "Collection of UI components for web applications",
      "User can integrate components easily with my own npx command",
      "Supports dark mode and light mode themes",
      "Responsive design for all devices",
      "Customizable components for various use cases",
      "Built with Next.js 15 framework",
    ],
    badge: [
      "Open source",
      "Next.js",
      "Typescript",
      "Framer motion",
      "Tailwind CSS",
      "Shadcn UI",
      "Nextra",
      "Extra theme docs",
    ],
  },
  {
    id: 5,
    title: "Devletter",
    href: "https://github.com/taqui-786/Devletter",
    live: "https://devletter.vercel.app/",
    createdAt: "22-11-2023",
    description:
      "Devletter is a newsletter platform for developers, allowing users to subscribe to newsletters and get the latest updates on various topics. It provides a user-friendly interface for managing subscriptions and reading newsletters.",
    features: [
      "Subscribe to newsletters",
      "Beautiful snow animation effect",
      "Read newsletters with a clean and minimalistic design",
      "Responsive user interface design",
      "Built with Next.js 15 framework",
      "Data stored in Supabase",
      "Modern UI components styled with shadcn-ui and Tailwind CSS",
    ],
    badge: [
      "Open source",
      "Next.js",
      "Typescript",
      "Prisma",
      "React hook form",
      "React snowfall",
      "Resend",
      "Zod",
      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
  {
    id: 6,
    title: "Carousel Maker",
    href: "https://github.com/taqui-786/crousal-maker",
    live: "https://crousal-maker.vercel.app/",
    createdAt: "09-12-2023",
    description:
      "Carousel maker is a simple carousel editing platform with in-built carousel templates only you can edit heading, descriptions and Images and download it in both format PDF and JPEG.",
    features: [
      "Create and edit carousels with ease",
      "Choose from a variety of templates all FREE",
      "Edit carousel headings, descriptions, and images",
      "Download carousels in PDF and JPEG formats",
      "User-friendly interface for easy editing",
      "Built with Next.js 14 framework",
      "Modern UI components styled with shadcn-ui and Tailwind CSS",
    ],
    badge: [
      "Open source",
      "Next.js",
      "Typescript",
      "Html to Canvas",
      "JsPDF",
      "JsZip",
      "React Image Crop",
      "Rgb Hex",
      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
  {
    id: 7,
    title: "Friendz",
    href: "https://github.com/taqui-786/project-friendz",
    live: "https://friendz.vercel.app/",
    createdAt: "16-08-2023",
    description:
      "Friendz is a social media platform that allows users to connect with friends, share updates, and engage in discussions. It provides a user-friendly interface for managing friendships and interactions.",
    features: [
      "Connect with friends",
      "Share updates and posts",
      "Engage in discussions",
      "User-friendly interface",
      "Authentication powered by Next-Auth",
      "Built with Next.js 14 framework",
      "Modern UI components styled with shadcn-ui and Tailwind CSS",
    ],
    badge: [
      "Open source",
      "Next Auth",
      "Typescript",
      "Firebase image upload",
      "Editor.js",
      "Prisma ORM",
      "Redis cache",
      "Zod",
      "Lodash",
      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
  {
    id: 8,
    title: "GitEstimate",
    href: "https://github.com/taqui-786/GitEstimate",
    live: "https://gitestimate.vercel.app/",
    createdAt: "09-12-2023",
    description:
      "GitEstimate is a FUN tool that helps developers estimate the time required to complete tasks based on their GitHub activity. It provides insights into productivity and helps in planning work effectively.",
    features: [
      "Estimate task completion time",
      "Analyze GitHub activity",
      "Get insights into productivity",
      "Plan work effectively",
      "User-friendly interface",
      "Built with Next.js 14 framework",
      "Modern UI components styled with shadcn-ui and Tailwind CSS",
    ],
    badge: [
      "Open source",
      "Next.js",
      "Typescript",
      "Html to Canvas",
      "github-canvas",

      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
  {
    id: 9,
    title: "FormCraft",
    href: "https://github.com/taqui-786/formcraft",
    live: "https://formcraft-ti.vercel.app/",
    createdAt: "25-08-2024",
    description:
      "FormCraft is a powerful tool for developers to create forms in GUI and copy the code to use in their projects. It provides a drag-and-drop interface for building forms and managing submissions.",
    features: [
      "Drag-and-drop form builder",
      "Customizable form fields",
      "Copy and paste code for easy integration",
      "React Hook Form integration for form validation",
      "User-friendly interface",
      "Built with Next.js 14 framework",
      "Modern UI components styled with shadcn-ui and Tailwind CSS",
    ],
    badge: [
      "Open source",
      "Next.js",
      "Typescript",
      "React Hook Form",
      "Zod Validation",
      "Framer Motion",

      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
  {
    id: 10,
    title: "Devzone",
    href: "https://github.com/taqui-786/Devzone",
    live: "https://devzone-ti.vercel.app/",
    createdAt: "03-11-2024",
    description:
      "DevZone is an innovative platform designed to connect developers, fostering collaboration and knowledge sharing within the tech community. It offers a space for developers to showcase their skills, share projects, and engage in discussions.",
    features: [
      "Developer Profiles: Create and customize your developer profile",
      "Project Showcase: Share your projects and get feedback from peers",
      "Collaborative Coding: Real-time code collaboration tools",
      "Community Forums: Engage in discussions on various tech topics",
      "Resource Sharing: Share and discover valuable developer resources",
      "Job Board: Find opportunities or hire talent within the community",
      "Built with Next.js 14 framework",
      "Modern UI components styled with shadcn-ui and Tailwind CSS",
    ],
    badge: [
      "Open source",
      "Next.js",
      "Typescript",
      "Zustand",
      "Realtime Messaging",
      "Supabase SSR",
      "React Hook Form",
      "Zod Validation",
      "Framer Motion",
      "Tanstack Query",
      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
];

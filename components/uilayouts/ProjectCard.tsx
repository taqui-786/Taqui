"use client";

import {
  Github01Icon,
  GithubIcon,
  LinkCircle02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion } from "motion/react";
import type { SVGProps } from "react";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import {
  Auth0Icon,
  DockerIcon,
  DrizzleIcon,
  FileTypeReactjsIcon,
  GitIcon,
  JavascriptIcon,
  MongodbIcon,
  MysqlDarkIcon,
  NestjsIcon,
  NextjsIcon,
  NodejsIconIcon,
  OpenaiIcon,
  PostgresqlIcon,
  PrismaIcon,
  ReactQueryIcon,
  ReactRouterIcon,
  ReactnavigationIcon,
  RedisIcon,
  ReduxIcon,
  ShadcnuiIcon,
  TailwindcssIcon,
  TypescriptIcon,
} from "../customIcons";

const techStack = {
  javascript: { name: "JavaScript", icon: JavascriptIcon },
  typescript: { name: "TypeScript", icon: TypescriptIcon },
  reactjs: { name: "Reactjs", icon: FileTypeReactjsIcon },
  nextjs: { name: "Nextjs", icon: NextjsIcon },
  nodejs: { name: "Nodejs", icon: NodejsIconIcon },
  nestjs: { name: "NestJs", icon: NestjsIcon },

  tailwindcss: { name: "TailwindCSS", icon: TailwindcssIcon },
  shadcnui: { name: "Shadcn Ui", icon: ShadcnuiIcon },
  oauth: { name: "OAuth", icon: Auth0Icon },
  tanstackquery: { name: "TanStack Query", icon: ReactQueryIcon },
  reactredux: { name: "React-Redux", icon: ReduxIcon },
  reactrouter: { name: "React-Router", icon: ReactRouterIcon },
  reactnavigation: { name: "React-Navigation", icon: ReactnavigationIcon },
  git: { name: "Git", icon: GitIcon },
  docker: { name: "Docker", icon: DockerIcon },
  mysql: { name: "My Sql", icon: MysqlDarkIcon },
  mongodb: { name: "MongoDB", icon: MongodbIcon },
  redis: { name: "Redis", icon: RedisIcon },
  postgres: { name: "Postgres", icon: PostgresqlIcon },
  prisma: { name: "Prisma ORM", icon: PrismaIcon },
  drizzle: { name: "Drizzle ORM", icon: DrizzleIcon },
  openai: { name: "Chat GPT", icon: OpenaiIcon },
};
export type Project = {
  name: string;
  description: string;
};

export type ProjectListingProps = {
  projects: Project[];
  className?: string;
  onProjectClick?: (project: Project) => void;
};

const dummyData = {
  id: 1,
  name: "Tweetz",
  href: "https://tweetz.app/",
  live: "https://tweetz.app/",
  createdAt: "20-08-2025",
  description:
    "Tweetz.app is an AI-assisted Twitter posting with one-tap Telegram approvals and with bunch of many other cool features",
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
  technologies: [
    techStack.nextjs,
    techStack.typescript,
    techStack.oauth,
    techStack.prisma,
    techStack.openai,
    techStack.tailwindcss,
    techStack.shadcnui,
    techStack.tanstackquery,
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
};
export default function ProjectCard() {
  const [activeItem, setActiveItem] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  useOnClickOutside(ref, () => setActiveItem(null));

  useEffect(() => {
    function onKeyDown(event: { key: string }) {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock body scroll when dialog is open
  useEffect(() => {
    if (activeItem) {
      // Stop Lenis smooth scrolling when dialog is open
      const lenis = (
        window as unknown as { lenis?: { stop: () => void; start: () => void } }
      ).lenis;
      lenis?.stop();

      // Simple overflow hidden approach - no position changes that cause jumps
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      // Restart Lenis when dialog closes
      const lenis = (
        window as unknown as { lenis?: { stop: () => void; start: () => void } }
      ).lenis;
      lenis?.start();

      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      const lenis = (
        window as unknown as { lenis?: { stop: () => void; start: () => void } }
      ).lenis;
      lenis?.start();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  // Smooth spring transition for layout animations
  const springTransition = {
    type: "spring" as const,
    stiffness: 350,
    damping: 30,
  };

  return (
    <>
      {/* Backdrop overlay */}
      <AnimatePresence>
        {activeItem ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="pointer-events-auto fixed inset-0 z-100 bg-black/40 backdrop-blur-md"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveItem(null)}
          />
        ) : null}
      </AnimatePresence>

      {/* Expanded Dialog Card */}
      <AnimatePresence mode="wait">
        {activeItem ? (
          <div className="fixed inset-0 z-100 grid place-items-center p-4 pointer-events-auto ">
            <motion.div
              className="flex max-h-[85vh] w-full max-w-2xl cursor-default flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl pointer-events-auto"
              layoutId={`card-container-${dummyData.name}`}
              ref={ref}
              transition={springTransition}
            >
              {/* Banner */}
              <motion.div
                layoutId={`card-banner-${dummyData.name}`}
                className="w-full bg-gray-200 aspect-video shrink-0"
                transition={springTransition}
              />

              {/* Scrollable content area */}
              <motion.div
                className="flex flex-1 flex-col gap-4 overflow-y-auto overscroll-contain p-6 pointer-events-auto"
                data-lenis-prevent
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.2 }}
              >
                {/* Header with title, date, and links */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <motion.h2
                      layoutId={`card-title-${dummyData.name}`}
                      className="text-2xl font-bold"
                      transition={springTransition}
                    >
                      {activeItem.name}
                    </motion.h2>
                    <motion.span
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="text-sm text-muted-foreground"
                    >
                      Created: {dummyData.createdAt}
                    </motion.span>
                  </div>
                  <motion.div
                    layoutId={`card-links-${dummyData.name}`}
                    className="flex gap-2 items-center text-muted-foreground [&_svg]:cursor-pointer [&_svg]:transition-colors [&_svg]:hover:text-primary"
                    transition={springTransition}
                  >
                    <a
                      href={dummyData.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                    >
                      <HugeiconsIcon icon={LinkCircle02Icon} />
                    </a>
                    <a
                      href={dummyData.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                    >
                      <HugeiconsIcon icon={GithubIcon} />
                    </a>
                  </motion.div>
                </div>

                {/* Description */}
                <motion.p
                  layoutId={`card-description-${dummyData.name}`}
                  className="text-muted-foreground text-base leading-relaxed"
                  transition={springTransition}
                >
                  {activeItem.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  layoutId={`card-tech-section-${dummyData.name}`}
                  className="flex flex-col gap-2"
                  transition={springTransition}
                >
                  <span className="text-sm font-semibold text-muted-foreground">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-2 items-center">
                    {dummyData.technologies.map((tech) => (
                      <motion.div
                        layoutId={`card-tech-${tech.name}`}
                        key={tech.name}
                        className="flex items-center gap-2"
                        transition={springTransition}
                      >
                        <tech.icon size={24} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Features - Only shown in expanded view */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="flex flex-col gap-3"
                >
                  <span className="text-sm font-semibold text-muted-foreground">
                    Features
                  </span>
                  <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                    {dummyData.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 + index * 0.03 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Main Card */}
      <motion.div
        onClick={() =>
          setActiveItem({
            name: dummyData.name,
            description: dummyData.description,
          })
        }
        className="relative flex w-full cursor-pointer flex-col items-start overflow-hidden rounded-2xl border bg-background shadow-xl transition-shadow hover:shadow-2xl"
        layoutId={`card-container-${dummyData.name}`}
        transition={springTransition}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Image banner */}
        <motion.div
          layoutId={`card-banner-${dummyData.name}`}
          className="w-full bg-gray-200 aspect-4/3 h-44"
          transition={springTransition}
        />

        {/* Detail section */}
        <div className="p-6 flex w-full flex-col gap-4">
          <div className="flex items-center justify-between">
            <motion.span
              layoutId={`card-title-${dummyData.name}`}
              className="text-xl font-semibold"
              transition={springTransition}
            >
              {dummyData.name}
            </motion.span>
            <motion.div
              layoutId={`card-links-${dummyData.name}`}
              className="flex gap-2 items-center text-muted-foreground [&_svg]:cursor-pointer [&_svg]:transition-colors [&_svg]:hover:text-primary"
              transition={springTransition}
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={dummyData.live}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
              >
                <HugeiconsIcon icon={LinkCircle02Icon} />
              </a>
              <a
                href={dummyData.href}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <HugeiconsIcon icon={GithubIcon} />
              </a>
            </motion.div>
          </div>

          <motion.p
            layoutId={`card-description-${dummyData.name}`}
            className="text-muted-foreground text-base text-start line-clamp-3"
            transition={springTransition}
          >
            {dummyData.description}
          </motion.p>

          <motion.div
            layoutId={`card-tech-section-${dummyData.name}`}
            className="flex flex-col gap-2 w-full"
            transition={springTransition}
          >
            <span className="text-sm font-semibold text-muted-foreground">
              Technologies
            </span>
            <div className="flex gap-2 items-center flex-wrap">
              {dummyData.technologies.map((tech) => (
                <motion.div
                  layoutId={`card-tech-${tech.name}`}
                  key={tech.name}
                  className="flex items-center gap-2"
                  transition={springTransition}
                >
                  <tech.icon size={24} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

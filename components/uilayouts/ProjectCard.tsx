"use client";

import { ProjectData } from "@/app/config/projectConfig";
import { GithubIcon, LinkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useOnClickOutside } from "usehooks-ts";

export type Project = {
  name: string;
  description: string;
};

export type ProjectListingProps = {
  projects: Project[];
  className?: string;
  onProjectClick?: (project: Project) => void;
};



export default function ProjectCard({ project }: { project: ProjectData }) {
  const [activeItem, setActiveItem] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  useOnClickOutside(ref, () => setActiveItem(null));

  // Ensure portal only renders on client
  useEffect(() => {
    setMounted(true);
  }, []);

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
  // Lower stiffness for smoother mobile performance
  const springTransition = {
    type: "spring" as const,
    stiffness: 260,
    damping: 25,
  };

  return (
    <>
      {/* Portal for Dialog - renders at document.body level to escape parent stacking contexts */}
      {mounted &&
        createPortal(
          <>
            {/* Backdrop overlay */}
            <AnimatePresence>
              {activeItem ? (
                <motion.div
                  animate={{ opacity: 1 }}
                  className="pointer-events-auto fixed inset-0 z-9999 bg-black/60"
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  style={{ willChange: "opacity" }}
                  onClick={() => setActiveItem(null)}
                />
              ) : null}
            </AnimatePresence>

            {/* Expanded Dialog Card */}
            <AnimatePresence mode="wait">
              {activeItem ? (
                <div className="fixed inset-0 z-9999 grid place-items-center p-4 pointer-events-none">
                  <motion.div
                    className="flex max-h-[85vh] w-full max-w-2xl cursor-default flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl pointer-events-auto"
                    layoutId={`card-container-${project.name}`}
                    ref={ref}
                    transition={springTransition}
                    style={{ willChange: "transform" }}
                  >
                    {/* Banner */}
                    <motion.div
                      layoutId={`card-banner-${project.name}`}
                      className="w-full bg-gray-200 aspect-video shrink-0 relative"
                      transition={springTransition}
                    >
                      <Image
                        src={project.banner}
                        alt={project.name}
                        fill
                        className="object-cover h-full w-auto"
                      />
                    </motion.div>

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
                            layoutId={`card-title-${project.name}`}
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
                            Created: {project.createdAt}
                          </motion.span>
                        </div>
                        <motion.div
                          layoutId={`card-links-${project.name}`}
                          className="flex gap-2 items-center text-muted-foreground [&_svg]:cursor-pointer [&_svg]:transition-colors [&_svg]:hover:text-primary"
                          transition={springTransition}
                        >
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Live Demo"
                          >
                            <HugeiconsIcon icon={LinkCircle02Icon} />
                          </a>
                          <a
                            href={project.href}
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
                        layoutId={`card-description-${project.name}`}
                        className="text-muted-foreground text-base leading-relaxed"
                        transition={springTransition}
                      >
                        {activeItem.description}
                      </motion.p>

                      {/* Technologies */}
                      <motion.div
                        layoutId={`card-tech-section-${project.name}`}
                        className="flex flex-col gap-2"
                        transition={springTransition}
                      >
                        <span className="text-sm font-semibold text-muted-foreground">
                          Technologies
                        </span>
                        <div className="flex flex-wrap gap-2 items-center relative">
                          {project.technologies.map((tech) => (
                            <motion.div
                              layoutId={`card-tech-${project.name}-${tech.name}-${project.id}`}
                              key={tech.name}
                              className="flex items-center gap-2"
                              transition={springTransition}
                              title={tech.name}
                            >
                              {React.createElement(tech.icon, { size: 24 })}
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
                          {project.features.map((feature, index) => (
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
          </>,
          document.body
        )}

      {/* This is the actual card, that need to be clicked */}
      <motion.div
        onClick={() =>
          setActiveItem({
            name: project.name,
            description: project.description,
          })
        }
        className="relative flex w-full cursor-pointer flex-col items-start overflow-hidden rounded-xl border bg-background shadow-xl transition-shadow hover:shadow-2xl"
        layoutId={`card-container-${project.name}`}
        transition={springTransition}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Image banner */}
        <motion.div
          layoutId={`card-banner-${project.name}`}
          className="w-full bg-gray-200 aspect-4/3 h-44 relative"
          transition={springTransition}
        >
          <Image
            src={project.banner}
            alt={project.name}
            fill
            className="object-cover h-full w-auto"
          />
        </motion.div>

        {/* Detail section */}
        <div className="p-6 flex w-full flex-col gap-4">
          <div className="flex items-center justify-between">
            <motion.span
              layoutId={`card-title-${project.name}`}
              className="text-xl font-semibold"
              transition={springTransition}
            >
              {project.name}
            </motion.span>
            <motion.div
              layoutId={`card-links-${project.name}`}
              className="flex gap-2 items-center text-muted-foreground [&_svg]:cursor-pointer [&_svg]:transition-colors [&_svg]:hover:text-primary"
              transition={springTransition}
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
              >
                <HugeiconsIcon icon={LinkCircle02Icon} />
              </a>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <HugeiconsIcon icon={GithubIcon} />
              </a>
            </motion.div>
          </div>

          <motion.p
            layoutId={`card-description-${project.name}`}
            className="text-muted-foreground text-base text-start line-clamp-3"
            transition={springTransition}
          >
            {project.description}
          </motion.p>

          <motion.div
            layoutId={`card-tech-section-${project.name}`}
            className="flex flex-col gap-2 w-full"
            transition={springTransition}
          >
            <span className="text-sm font-semibold text-muted-foreground">
              Technologies
            </span>
            <div className="flex gap-2 items-center flex-wrap">
              {project.technologies.map((tech) => (
                <motion.div
                  layoutId={`card-tech-${project.name}-${tech.name}-${project.id}`}
                  key={tech.name}
                  className="flex items-center gap-2"
                  transition={springTransition}
                >
                  {React.createElement(tech.icon, { size: 24 })}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

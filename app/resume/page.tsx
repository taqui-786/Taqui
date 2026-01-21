"use client";

import React, { useState } from "react";
import { resumeConfig } from "../config/resumeConfig";

function ResumePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="container mx-auto max-w-full md:max-w-3xl px-4 h-auto py-16 animate-fade-in-blur">
      <div className="flex flex-col gap-4 items-center justify-center border-b pb-8">
        <h1 className="md:text-5xl text-4xl text-title font-bold text-center font-instrument-serif tracking-wider italic">
          My Resume
        </h1>
        <p className="md:text-lg text-base text-muted-foreground tracking-wider text-center">
          Here is my resume and what I have done so far
        </p>
      </div>
      <div className="mx-auto max-w-2xl mt-8 relative">
        {/* Skeleton Loader */}
        {isLoading && (
          <div className="absolute inset-0 min-h-screen w-full rounded-lg overflow-hidden">
            {/* Document header skeleton */}
            <div className="bg-muted/50 animate-pulse h-12 w-full flex items-center justify-center gap-2 border-b border-border/50">
              <div className="h-3 w-24 bg-muted-foreground/20 rounded" />
              <div className="h-3 w-16 bg-muted-foreground/20 rounded" />
            </div>
            {/* Document body skeleton */}
            <div className="bg-background/80 backdrop-blur-sm p-8 space-y-6 min-h-screen">
              {/* Title skeleton */}
              <div className="flex justify-center mb-8">
                <div className="h-8 w-48 bg-muted animate-pulse rounded" />
              </div>
              {/* Contact info skeleton */}
              <div className="flex justify-center gap-4 mb-6">
                <div className="h-4 w-32 bg-muted animate-pulse rounded" />
                <div className="h-4 w-32 bg-muted animate-pulse rounded" />
                <div className="h-4 w-32 bg-muted animate-pulse rounded" />
              </div>
              {/* Section skeletons */}
              {[...Array(4)].map((_, sectionIndex) => (
                <div key={sectionIndex} className="space-y-3">
                  <div className="h-6 w-36 bg-muted animate-pulse rounded" />
                  <div className="h-px w-full bg-border" />
                  {[...Array(3)].map((_, lineIndex) => (
                    <div
                      key={lineIndex}
                      className="h-4 bg-muted animate-pulse rounded"
                      style={{ width: `${85 - lineIndex * 10}%` }}
                    />
                  ))}
                </div>
              ))}
              {/* Experience/Project blocks */}
              {[...Array(2)].map((_, blockIndex) => (
                <div key={blockIndex} className="space-y-3 pt-4">
                  <div className="flex justify-between items-center">
                    <div className="h-5 w-48 bg-muted animate-pulse rounded" />
                    <div className="h-4 w-24 bg-muted animate-pulse rounded" />
                  </div>
                  <div className="h-4 w-32 bg-muted/70 animate-pulse rounded" />
                  {[...Array(2)].map((_, lineIndex) => (
                    <div
                      key={lineIndex}
                      className="h-3 bg-muted animate-pulse rounded ml-4"
                      style={{ width: `${90 - lineIndex * 15}%` }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Iframe */}
        <iframe
          src={resumeConfig.url}
          className={`min-h-screen w-full transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
          loading="lazy"
          title="Resume"
        />
      </div>
    </div>
  );
}

export default ResumePage;

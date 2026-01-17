"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import {
  ThemeToggler as ThemeTogglerPrimitive,
  type ThemeTogglerProps as ThemeTogglerPrimitiveProps,
  type ThemeSelection,
  type Resolved,
} from "@/components/animate-ui/primitives/effects/theme-toggler";
import { buttonVariants } from "@/components/animate-ui/components/buttons/icon";
import { cn } from "@/lib/utils";

const getIcon = (resolved: Resolved) => {
  const theme = resolved === 'dark' ? 'light' : 'dark';
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="currentColor"
      strokeLinecap="round"
      viewBox="0 0 32 32"
    >
      <clipPath id="skiper-btn-2">
        <motion.path
          animate={{
            y: theme === "dark" ? 10 : 0,
            x: theme === "dark" ? -12 : 0,
          }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          d="M0-5h30a1 1 0 0 0 9 13v24H0Z"
        />
      </clipPath>
      <g clipPath="url(#skiper-btn-2)">
        <motion.circle
          animate={{ r: theme === "dark" ? 10 : 8 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          cx="16"
          cy="16"
        />
        <motion.g
          animate={{
            rotate: theme === "dark" ? -100 : 0,
            scale: theme === "dark" ? 0.5 : 1,
            opacity: theme === "dark" ? 0 : 1,
          }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M16 5.5v-4" />
          <path d="M16 30.5v-4" />
          <path d="M1.5 16h4" />
          <path d="M26.5 16h4" />
          <path d="m23.4 8.6 2.8-2.8" />
          <path d="m5.7 26.3 2.9-2.9" />
          <path d="m5.8 5.8 2.8 2.8" />
          <path d="m23.4 23.4 2.9 2.9" />
        </motion.g>
      </g>
    </svg>
  );
};

const getNextTheme = (
  effective: ThemeSelection,
  modes: ThemeSelection[]
): ThemeSelection => {
  const i = modes.indexOf(effective);
  if (i === -1) return modes[0];
  return modes[(i + 1) % modes.length];
};

type ThemeTogglerButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    modes?: ThemeSelection[];
    onImmediateChange?: ThemeTogglerPrimitiveProps["onImmediateChange"];
    direction?: ThemeTogglerPrimitiveProps["direction"];
  };

function ThemeTogglerButton({
  variant = "default",
  size = "default",
  modes = ["light", "dark"],
  direction = "ltr",
  onImmediateChange,
  onClick,
  className,
  ...props
}: ThemeTogglerButtonProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <ThemeTogglerPrimitive
      theme={theme as ThemeSelection}
      resolvedTheme={resolvedTheme as Resolved}
      setTheme={setTheme}
      direction={direction}
      onImmediateChange={onImmediateChange}
    >
      {({ effective, toggleTheme }) => (
        <button
          data-slot="theme-toggler-button"
          className={cn(buttonVariants({ variant, size, className }))}
          onClick={(e) => {
            onClick?.(e);

            toggleTheme(getNextTheme(effective, modes));
          }}
          {...props}
        >
          {getIcon(resolvedTheme as Resolved)}
        </button>
      )}
    </ThemeTogglerPrimitive>
  );
}

export { ThemeTogglerButton, type ThemeTogglerButtonProps };

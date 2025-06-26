"use client";

import { useTheme } from "next-themes";
import React from "react";
import { Button } from "./ui/button";
import { MoonAltToSunnyOutlineLoopTransitionIcon } from "./Icons";
import { MoonIcon } from "lucide-react";

function ToggleThemeBtn() {
  const { setTheme, theme, systemTheme } = useTheme();
  console.log(theme, systemTheme);
  const theTheme =
    theme === "system"
      ? systemTheme === "dark"
        ? "sun"
        : "moon"
      : theme === "dark"
      ? "sun"
      : "moon";
  function changeTheme() {
    return theTheme === "moon" ? setTheme("dark") : setTheme("light");
  }
  return (
    <Button
      variant={"outline"}
      size={"icon"}
      className="rounded-full cursor-pointer"
      onClick={changeTheme}
    >
      {theTheme === "sun" ? (
        <MoonAltToSunnyOutlineLoopTransitionIcon />
      ) : (
        <MoonIcon />
      )}
    </Button>
  );
}

export default ToggleThemeBtn;

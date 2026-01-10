"use client";

import { useRef } from "react"
import { flushSync } from 'react-dom';
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";



const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const toggleButtonRef = useRef(null);
  const toggleDarkMode = async () => {
    if (
      !toggleButtonRef.current ||
      !document.startViewTransition ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setTheme(theme === "dark" ? "light" : "dark");
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(theme === "dark" ? "light" : "dark");
      });
    }).ready;

    const { top, left, width, height } = toggleButtonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(
      Math.max(left, right),
      Math.max(top, bottom),
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  };

  return (
    <div>
      <Button
        ref={toggleButtonRef}
        aria-label="Theme toggler"
        variant="outline"
        size="icon"
        onClick={toggleDarkMode}
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
};

export default ThemeToggler;

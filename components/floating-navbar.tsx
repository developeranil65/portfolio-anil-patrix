"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconCode,
  IconFileText,
  IconHome,
  IconMoon,
  IconSun,
  IconTerminal2,
} from "@tabler/icons-react";
import { useTerminal } from "@/context/terminal-context";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function FloatingNavbar() {
  const { toggleTerminal } = useTerminal();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      tooltipImage: "/tooltips/home.png",
    },
    {
      title: "Skills",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
      tooltipImage: "/tooltips/skills.png",
    },
    {
      title: "Projects",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
      tooltipImage: "/tooltips/projects.png",
    },
    {
      title: "Terminal",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      tooltipImage: "/tooltips/terminal-tp.png",
      onClick: toggleTerminal,
    },
    {
      title: "Resume",
      icon: (
        <IconFileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://drive.google.com/file/d/1zSfrunb1rbZgpXmV-qPif9Dhz3x_H1HQ/view?usp=sharing",
      tooltipImage: "/tooltips/resume-tp.png",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/anilsingh-ln", // Update with your actual LinkedIn URL
      tooltipImage: "/tooltips/linkedin-tp.png",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/developeranil65",
      tooltipImage: "/tooltips/github-tp.png"
    },
    {
      title: "Theme",
      icon: mounted && theme === 'dark' ? (
        <IconSun className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ) : (
        <IconMoon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
    },
  ];

  return (
    <div className="fixed bottom-6 md:bottom-10 flex items-center justify-end md:justify-center w-full z-50 px-4 md:px-0">
      <FloatingDock
        mobileClassName=""
        desktopClassName="w-fit hidden md:flex items-end gap-4 px-6 justify-center pb-3"
        items={links}
      />
    </div>
  );
}
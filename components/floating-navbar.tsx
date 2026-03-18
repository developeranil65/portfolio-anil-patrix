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
  IconTerminal2,
} from "@tabler/icons-react";
import { useTerminal } from "@/context/terminal-context";
import { navbarLinks } from "@/lib/site-config";

// Map icon names from config to actual icon components
const iconMap: Record<string, React.ReactNode> = {
  IconHome: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
  IconCode: <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
  IconBriefcase: <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
  IconTerminal2: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
  IconFileText: <IconFileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
  IconBrandLinkedin: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
  IconBrandGithub: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
};

export default function FloatingNavbar() {
  const { toggleTerminal } = useTerminal();

  const links = navbarLinks.map((item) => ({
    title: item.title,
    icon: iconMap[item.iconName] ?? (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: item.href,
    tooltipImage: item.tooltipImage,
    ...(item.onClick === "toggleTerminal" ? { onClick: toggleTerminal } : {}),
  }));

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
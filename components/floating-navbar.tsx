"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
import { navbarLinks, personalInfo, workWithMeSection } from "@/lib/site-config";

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
    <>
      {/* Top-left brand: profile photo + name */}
      <Link
        href="#"
        className="fixed top-5 left-5 z-50 hidden md:inline-flex items-center gap-3 group"
      >
        <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-indigo-500/40 transition-all duration-300">
          <Image
            src={personalInfo.profilePhoto}
            alt={personalInfo.name}
            fill
            className="object-cover"
          />
        </div>
        <span className="text-base font-heading font-bold text-neutral-100 tracking-wide uppercase group-hover:text-indigo-400 transition-colors duration-300">
          {personalInfo.name}
        </span>
      </Link>

      {/* Top-right "WORK WITH ME" pill button */}
      <Link
        href={workWithMeSection.ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-5 right-5 z-50 hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-heading font-semibold text-xs tracking-wider transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.5)] hover:scale-105"
      >
        {workWithMeSection.ctaText}
      </Link>

      {/* Bottom floating dock */}
      <div className="fixed bottom-6 md:bottom-10 flex items-center justify-end md:justify-center w-full z-50 px-4 md:px-0">
        <FloatingDock
          mobileClassName=""
          desktopClassName="w-fit hidden md:flex items-end gap-4 px-6 justify-center pb-3"
          items={links}
        />
      </div>
    </>
  );
}
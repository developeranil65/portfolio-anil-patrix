"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { IconBrandGithub, IconExternalLink, IconInfoCircle } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  i: number;
  title: string;
  description: React.ReactNode;
  tags: string[];
  color: string;
  github?: string;
  link?: string;
  detailsLink?: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  image?: string;
}

export const Card = ({
  i,
  title,
  description,
  tags,
  color,
  github,
  link,
  detailsLink,
  progress,
  range,
  targetScale,
  image,
}: CardProps) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[25%] w-[92%] md:w-[900px] origin-top rounded-2xl border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-neutral-900 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] overflow-hidden"
      >
        {/* Accent stripe at top */}
        <div
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        />

        <div className="flex flex-col lg:flex-row">
          {/* Image section */}
          {image && (
            <div className="relative w-full lg:w-[45%] h-56 md:h-64 lg:h-auto lg:min-h-[360px] shrink-0">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
              {/* Subtle gradient overlay for text readability on small screens */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/5" />
            </div>
          )}

          {/* Content section */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-between gap-5">
            {/* Header: title + action buttons */}
            <div className="flex justify-between items-start gap-4">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-neutral-800 dark:text-neutral-100 leading-tight">
                {title}
              </h2>
              <div className="flex gap-2 shrink-0">
                {detailsLink && (
                  <Link
                    href={detailsLink}
                    title="Project Details"
                    className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:scale-105 transition-all"
                  >
                    <IconInfoCircle className="w-4 h-4" />
                  </Link>
                )}
                {github && (
                  <Link
                    href={github}
                    target="_blank"
                    title="View Code"
                    className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:scale-105 transition-all"
                  >
                    <IconBrandGithub className="w-4 h-4" />
                  </Link>
                )}
                {link && (
                  <Link
                    href={link}
                    target="_blank"
                    title="Live Demo"
                    className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:scale-105 transition-all"
                  >
                    <IconExternalLink className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2">
              {description}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-md border"
                  style={{
                    color: color,
                    borderColor: `${color}30`,
                    backgroundColor: `${color}0a`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const StickyCardStack = ({
  projects,
}: {
  projects: {
    title: string;
    description: React.ReactNode;
    tags: string[];
    color: string;
    github?: string;
    link?: string;
    image?: string;
  }[];
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="mt-[20vh] mb-[20vh]">
      <div className="mb-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Featured Projects
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl">
          A selection of robust systems demonstrating my capabilities in backend
          and scalable infrastructure.
        </p>
        {/* Scroll indicator */}
        <div className="flex items-center gap-3 mt-6 text-neutral-500 dark:text-neutral-500">
          <span className="text-sm font-medium tracking-wide uppercase">
            {projects.length} Projects
          </span>
          <span className="text-neutral-300 dark:text-neutral-700">·</span>
          <span className="flex items-center gap-1.5 text-sm">
            Scroll to explore
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </motion.svg>
          </span>
        </div>
      </div>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={i}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

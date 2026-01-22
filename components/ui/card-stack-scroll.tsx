"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

interface CardProps {
  i: number;
  title: string;
  description: React.ReactNode;
  tags: string[];
  color: string;
  github?: string;
  link?: string;
  detailsLink?: string; // Added detailsLink
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  image?: string;
}

import { IconBrandGithub, IconExternalLink, IconInfoCircle } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";


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
  useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

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
        className="flex flex-col relative -top-[25%] h-auto md:h-auto w-[90%] md:w-[800px] rounded-3xl p-5 md:p-10 origin-top shadow-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 overflow-hidden"
      >
        {image ? (
            <div className="relative w-full h-64 md:h-72 mb-6 rounded-2xl overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
        ) : (
             <div 
                className="absolute top-0 left-0 w-full h-1" 
                style={{ backgroundColor: color }}
            />
        )}
        
        <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-800 dark:text-neutral-100">
            {title}
            </h2>
             <div className="flex gap-4">
                {detailsLink && (
                    <Link href={detailsLink} title="Project Details" className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:scale-110 transition-transform">
                        <IconInfoCircle className="w-5 h-5" />
                    </Link>
                )}
                {github && (
                    <Link href={github} target="_blank" title="View Code" className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:scale-110 transition-transform">
                         <IconBrandGithub className="w-5 h-5" />
                    </Link>
                )}
                {link && (
                    <Link href={link} target="_blank" title="Live Deployment" className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:scale-110 transition-transform">
                        <IconExternalLink className="w-5 h-5" />
                    </Link>
                )}
            </div>
        </div>

        <div className="flex h-full gap-10">
          <div className="w-full flex flex-col gap-4">
            <div className="flex-1 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
             {description}
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md text-xs font-medium border border-neutral-200 dark:border-neutral-700">
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
            A selection of robust systems demonstrating my capabilities in backend and scalable infrastructure.
            </p>
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

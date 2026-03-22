"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { IconBrandGithub, IconExternalLink, IconFileText } from "@tabler/icons-react";
import { projectsSection } from "@/lib/site-config";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const initialCount = projectsSection.initialVisible ?? 4;
  const visibleProjects = showAll
    ? projectsSection.projects
    : projectsSection.projects.slice(0, initialCount);
  const hasMore = projectsSection.projects.length > initialCount;

  return (
    <SectionWrapper>
      <div id="projects" className="max-w-[1440px] mx-auto px-6 md:px-12 py-20">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-neutral-100 mb-4">
            {projectsSection.heading}
          </h2>
          {projectsSection.subHeading && (
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              {projectsSection.subHeading}
            </p>
          )}
        </div>

        {/* 2-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <AnimatePresence>
            {visibleProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-2xl md:rounded-[32px] overflow-hidden cursor-pointer"
                style={{ backgroundColor: project.cardBg || "#1e293b" }}
              >
                {/* Main clickable area for the whole card */}
                {project.slug && (
                  <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10" aria-label={`View details for ${project.title}`} />
                )}

                {/* Card image area — dictates height automatically */}
                <div className="relative w-full flex flex-col items-center justify-center">
                  {project.image && project.image.trim() !== "" && project.image !== "#" ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={900}
                      unoptimized
                      className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : project.architectureDiagram && project.architectureDiagram.trim() !== "" && project.architectureDiagram !== "#" ? (
                    <Image
                      src={project.architectureDiagram}
                      alt={`${project.title} Architecture`}
                      width={1200}
                      height={900}
                      unoptimized
                      className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="text-center p-12 aspect-video flex flex-col items-center justify-center w-full h-full">
                      <p className="text-white/40 font-heading font-bold text-lg tracking-wider mb-2">IMAGE PLACEHOLDER</p>
                      <p className="text-white/20 text-xs">Add your custom project image in site-config.ts</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Projects button */}
        {hasMore && !showAll && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full border border-white/20 text-xs font-heading font-bold tracking-[0.15em] uppercase text-white/80 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              VIEW MORE PROJECTS
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

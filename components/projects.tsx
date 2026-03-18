"use client";
import React from "react";
import { StickyCardStack } from "./ui/card-stack-scroll";
import { projectsSection } from "@/lib/site-config";

// Transform config data into the shape the StickyCardStack expects
// Show at most 3 key bullets per card to keep layout clean
const MAX_BULLETS = 3;

const projects = projectsSection.projects.map((p) => ({
  title: p.title,
  description: (
    <>
      {p.bullets.slice(0, MAX_BULLETS).map((bullet, idx) => (
        <p key={idx} className={idx < Math.min(p.bullets.length, MAX_BULLETS) - 1 ? "mb-4" : ""}>
          {bullet}
        </p>
      ))}
    </>
  ),
  tags: p.tags,
  github: p.github,
  link: p.link,
  color: p.color,
  image: p.image || undefined,
  detailsLink: p.detailsLink,
}));

export default function Projects() {
  return (
    <div id="projects">
      <StickyCardStack projects={projects} />
    </div>
  );
}

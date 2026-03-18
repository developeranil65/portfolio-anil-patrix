"use client";

import React from "react";
import Image from "next/image";
import { FlipWords } from "../components/ui/flip-words";
import { HeroHighlight } from "../components/ui/hero-highlight";
import { motion } from "motion/react";
import { Tooltip } from "@/components/ui/tooltip-card";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { personalInfo, heroSection } from "@/lib/site-config";
import dynamic from "next/dynamic";

const HeroModel = dynamic(() => import("@/components/ui/hero-model"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
    </div>
  ),
});

const FloatingShape = dynamic(() => import("@/components/ui/floating-shape"), {
  ssr: false,
  loading: () => <div />,
});

// Define the content for the tooltip
const ProfileTooltipContent = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative aspect-square w-full rounded-sm overflow-hidden mb-4">
        <Image
          src={personalInfo.profilePhoto}
          alt={personalInfo.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col text-left w-full">
        <p className="text-lg font-bold text-white">
          {personalInfo.name}
        </p>
        <p className="mt-1 text-xs text-neutral-400">
          {personalInfo.shortBio}
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col bg-black pb-40">
      
      {/* --- HERO SECTION --- */}
      <HeroHighlight containerClassName="h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8"
        >
          {/* LEFT COLUMN: Text Content */}
          <div className="flex flex-col w-full md:w-1/2 text-center md:text-left space-y-6">
            <div className="text-2xl md:text-3xl text-neutral-300">
              {heroSection.greeting}{" "}
              <Tooltip
                containerClassName="inline-block"
                content={
                  <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <ProfileTooltipContent />
                  </a>
                }
              >
                <a 
                  href={personalInfo.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cursor-pointer font-bold font-serif underline decoration-indigo-500 decoration-2 underline-offset-4 hover:text-indigo-400 transition-colors"
                >
                  {personalInfo.name}
                </a>
              </Tooltip>
            </div>

            <div className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-neutral-400 leading-relaxed lg:leading-snug">
              {heroSection.headline}
              <div className="block mt-2 text-2xl md:text-3xl lg:text-5xl">
                <FlipWords words={heroSection.flipWords} className="p-0!" />
              </div>
              <span className="block mt-4 text-lg md:text-2xl text-neutral-500 leading-relaxed">
                {heroSection.subHeadline}
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive 3D Particle Globe */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="w-full max-w-xl h-[400px] md:h-[500px]">
              <HeroModel />
            </div>
          </div>
        </motion.div>
      </HeroHighlight>

      {/* ====== SPACER: Shapes between Hero and Skills ====== */}
      <div className="relative h-24 md:h-32 overflow-hidden">
        <div className="absolute left-[10%] -top-8 w-[120px] h-[120px] opacity-50">
          <FloatingShape shape="octahedron" color="#818cf8" size={0.8} speed={0.4} />
        </div>
        <div className="absolute right-[15%] top-0 w-[100px] h-[100px] opacity-40">
          <FloatingShape shape="tetrahedron" color="#6366f1" size={0.7} speed={0.6} />
        </div>
      </div>

      {/* ====== SKILLS SECTION ====== */}
      <div id="skills" className="relative">
        {/* Floating shape — top right */}
        <div className="absolute right-4 -top-10 w-[150px] h-[150px] opacity-40 pointer-events-none hidden lg:block">
          <FloatingShape shape="icosahedron" color="#818cf8" size={1.0} speed={0.3} />
        </div>
        <SectionWrapper>
          <Skills />
        </SectionWrapper>
      </div>

      {/* ====== SPACER: Shapes between Skills and Experience ====== */}
      <div className="relative h-20 md:h-28 overflow-hidden">
        <div className="absolute left-[5%] top-0 w-[90px] h-[90px] opacity-35">
          <FloatingShape shape="dodecahedron" color="#10b981" size={0.6} speed={0.5} />
        </div>
        <div className="absolute right-[8%] -top-4 w-[110px] h-[110px] opacity-30 hidden md:block">
          <FloatingShape shape="icosahedron" color="#6366f1" size={0.7} speed={0.35} />
        </div>
      </div>

      {/* ====== EXPERIENCE SECTION ====== */}
      <div id="experience" className="relative">
        {/* Floating shape — bottom left */}
        <div className="absolute left-4 bottom-20 w-[130px] h-[130px] opacity-35 pointer-events-none hidden lg:block">
          <FloatingShape shape="dodecahedron" color="#10b981" size={0.8} speed={0.25} />
        </div>
        <SectionWrapper>
          <Experience />
        </SectionWrapper>
      </div>

      {/* ====== SPACER: Shapes between Experience and Projects ====== */}
      <div className="relative h-16 md:h-24 overflow-hidden">
        <div className="absolute right-[12%] top-0 w-[100px] h-[100px] opacity-40">
          <FloatingShape shape="octahedron" color="#f59e0b" size={0.6} speed={0.45} />
        </div>
        <div className="absolute left-[20%] -top-6 w-[80px] h-[80px] opacity-30 hidden md:block">
          <FloatingShape shape="tetrahedron" color="#ec4899" size={0.5} speed={0.55} />
        </div>
      </div>

      {/* ====== PROJECTS SECTION ====== */}
      <Projects />
      
    </div>
  );
}
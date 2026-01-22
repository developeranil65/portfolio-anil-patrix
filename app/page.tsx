"use client"; // Required because motion.div is used

import React from "react";
import Image from "next/image";
import { FlipWords } from "../components/ui/flip-words";
import { HeroHighlight } from "../components/ui/hero-highlight";
import { motion } from "motion/react";
import { Tooltip } from "@/components/ui/tooltip-card";
import { CodeTerminal } from "@/components/ui/code-terminal";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Projects from "@/components/projects"; // Import the new Projects component
import { SectionWrapper } from "@/components/ui/section-wrapper";

// Define the content for the tooltip
const ProfileTooltipContent = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative aspect-square w-full rounded-sm overflow-hidden mb-4">
        <Image
          src="/my_photo.webp"
          alt="Anil Singh"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col text-left w-full">
        <p className="text-lg font-bold text-neutral-900 dark:text-white">
          Anil Singh
        </p>
        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
          Backend Developer | Building Scalable APIs with Node.js & AWS Infrastructure | Docker, CI/CD, PostgreSQL, Redis | Open to Internships
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  
  const words = [
    "Backend Development",
    "DevOps & Automation",
    "AWS Infrastructure",
  ];

  return (
    
    <div className="flex flex-col bg-white dark:bg-black pb-40">
      
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
            
            {/* 1. Name & Tooltip */}
            <div className="text-2xl md:text-3xl text-neutral-700 dark:text-neutral-300">
              Get in touch with{" "}
              <Tooltip
                containerClassName="inline-block"
                content={
                  <a href="https://www.linkedin.com/in/anilsingh-ln" target="_blank" rel="noopener noreferrer">
                    <ProfileTooltipContent />
                  </a>
                }
              >
                <a 
                  href="https://www.linkedin.com/in/anilsingh-ln" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cursor-pointer font-bold font-serif underline decoration-indigo-500 decoration-2 underline-offset-4 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Anil Singh
                </a>
              </Tooltip>
            </div>

            {/* 2. Main Headline */}
            <div className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-neutral-600 dark:text-neutral-400 leading-relaxed lg:leading-snug">
              I am Proficient in
              <div className="block mt-2 text-2xl md:text-3xl lg:text-5xl">
                <FlipWords words={words} className="p-0!" />
              </div>
              <span className="block mt-4 text-lg md:text-2xl text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Passionate about building the Automated, Scalable infrastructure
                that powers modern applications.
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Code Terminal */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="w-full max-w-lg">
               <CodeTerminal />
            </div>
          </div>

          

        </motion.div>
      </HeroHighlight>


      <div id="skills">
        <SectionWrapper>
          <Skills />
        </SectionWrapper>
      </div>
      

      <div id="experience">
        <SectionWrapper>
          <Experience />
        </SectionWrapper>
      </div>

      <Projects />
      
      
    </div>
  );
}
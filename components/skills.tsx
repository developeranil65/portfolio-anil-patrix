import React from "react";
import LogoLoop from "@/components/ui/logo-loop";
import { Tabs } from "./ui/animated-tabs";
import { skillsSection } from "@/lib/site-config";

export default function Skills() {
  const { languages, infrastructure, concepts, tabs: tabConfig } = skillsSection;

  const tabs = [
    {
      title: tabConfig.languagesTab.title,
      value: tabConfig.languagesTab.value,
      content: (
        <div className="w-full relative h-[400px] rounded-2xl p-6 md:p-10 border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-xl overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 bg-grid-neutral-100 dark:bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            <p className="font-heading font-bold text-2xl md:text-3xl text-neutral-800 dark:text-neutral-100 mb-8 relative z-10">
              {tabConfig.languagesTab.heading}
            </p>
             <div className="w-full relative z-10">
                 <LogoLoop
                      logos={languages}
                      speed={25}
                      direction="left"
                      logoHeight={56}
                      gap={60}
                      pauseOnHover
                      className="py-4"
                    />
             </div>
        </div>
      ),
    },
    {
      title: tabConfig.infrastructureTab.title,
      value: tabConfig.infrastructureTab.value,
      content: (
        <div className="w-full relative h-[400px] rounded-2xl p-6 md:p-10 border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-xl overflow-hidden flex flex-col items-center justify-center text-center">
             <div className="absolute inset-0 bg-grid-neutral-100 dark:bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            <p className="font-heading font-bold text-2xl md:text-3xl text-neutral-800 dark:text-neutral-100 mb-8 relative z-10">
              {tabConfig.infrastructureTab.heading}
            </p>
             <div className="w-full relative z-10">
                  <LogoLoop
                      logos={infrastructure}
                      speed={25}
                      direction="right"
                      logoHeight={56}
                      gap={60}
                      pauseOnHover
                      className="py-4"
                    />
              </div>
        </div>
      ),
    },
    {
      title: tabConfig.conceptsTab.title,
      value: tabConfig.conceptsTab.value,
      content: (
        <div className="w-full relative h-[400px] rounded-2xl p-6 md:p-10 border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-xl overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 bg-grid-neutral-100 dark:bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
          <p className="font-heading font-bold text-2xl md:text-3xl text-neutral-800 dark:text-neutral-100 mb-8 relative z-10">
            {tabConfig.conceptsTab.heading}
          </p>
          <div className="flex flex-wrap gap-3 justify-center max-w-2xl relative z-10">
              {concepts.map((concept, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300 hover:scale-105 transition-transform cursor-default"
                >
                  {concept}
                </span>
              ))}
            </div>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 py-20 overflow-hidden">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          {skillsSection.heading}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            {skillsSection.subHeading}
        </p>
      </div>

      <div className="min-h-[30rem] h-auto md:h-[30rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
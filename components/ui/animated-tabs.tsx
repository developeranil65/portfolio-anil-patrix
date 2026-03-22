"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    // For standard tabs, we don't need reordering. 
    // Just setting active is enough.
    // But if we want the "fluid" effect where the tab pill moves, we just track active.
    
    // We will keep the order static for this version.
    setActive(propTabs[idx]);
  };



  return (
    <>
      <div
        className={cn(
          "flex flex-wrap items-center justify-center sm:flex-nowrap sm:justify-center [perspective:1000px] relative overflow-visible no-scrollbar max-w-full w-full mb-8 gap-2",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            className={cn(
              "relative px-4 py-2 rounded-full text-sm md:text-base transition-colors",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-neutral-200 dark:bg-neutral-800 rounded-full ",
                  activeTabClassName
                )}
              />
            )}

            <span className={cn("relative block font-heading font-medium transition-colors", 
                active.value === tab.value ? "text-neutral-900 dark:text-white" : "text-neutral-500 dark:text-neutral-400"
            )}>
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        className={cn("mt-8", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  active,
}: {
  className?: string;
  tabs: Tab[];
  active: Tab;
}) => {
  return (
    <div className={cn("relative w-full h-full", className)}>
      {tabs.map((tab) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value} // Remove layoutId to prevent cross-tab morphing artifacts if content is very different
          initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
          animate={{
            opacity: active.value === tab.value ? 1 : 0,
            x: active.value === tab.value ? 0 : 20,
             filter: active.value === tab.value ? "blur(0px)" : "blur(10px)"
          }}
          transition={{
            duration: 0.5, 
            ease: "easeInOut"
          }}
          className={cn(
            "w-full h-full top-0 left-0", 
            active.value === tab.value ? "relative" : "absolute top-0 left-0 z-[-1] hidden"
          )}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};

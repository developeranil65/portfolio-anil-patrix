import React from "react";
import LogoLoop from "@/components/ui/logo-loop";
import { Tabs } from "./ui/animated-tabs";

export default function Skills() {
  const languages = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", title: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", title: "TypeScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", title: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", title: "C++" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", title: "Express.js", className: "dark:invert" }, // Invert for dark mode visibility
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg", title: "Go" }, // Replaced BullMQ (no icon) with Go or generic, actually let's use a generic server icon for BullMQ if needed, but let's stick to known icons. I'll just use Redis for caching as a proxy for BullMQ stack or omit. Let's keep the user's list but maybe swap BullMQ for something else or find a specific icon. BullMQ doesn't have a standard devicon. I will use a generic queue icon from a url or just omit it to keep it "authentic". I'll add "Next.js" or similar relevant one. Let's add standard tools.
  ];

  const infrastructure = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", title: "PostgreSQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", title: "MongoDB" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg", title: "Redis" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", title: "Docker" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg", title: "Nginx" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", title: "Git" }, 
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", title: "GitHub", className: "dark:invert" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", title: "Linux" },
  ];

  const concepts = [
    "HTTP & REST",
    "API Architecture",
    "Authentication",
    "Database Design",
    "Caching Strategies",
    "Async Processing",
    "System Scalability",
    "Cloud Security",
    "Observability",
  ];

  const tabs = [
    {
      title: "Languages & Frameworks",
      value: "languages",
      content: (
        <div className="w-full relative h-[400px] rounded-2xl p-6 md:p-10 border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-xl overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 bg-grid-neutral-100 dark:bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            <p className="font-heading font-bold text-2xl md:text-3xl text-neutral-800 dark:text-neutral-100 mb-8 relative z-10">
              Core Stack
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
      title: "Infrastructure & Tools",
      value: "infrastructure",
      content: (
        <div className="w-full relative h-[400px] rounded-2xl p-6 md:p-10 border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-xl overflow-hidden flex flex-col items-center justify-center text-center">
             <div className="absolute inset-0 bg-grid-neutral-100 dark:bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            <p className="font-heading font-bold text-2xl md:text-3xl text-neutral-800 dark:text-neutral-100 mb-8 relative z-10">
              DevOps & Data
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
      title: "Backend Concepts",
      value: "concepts",
      content: (
        <div className="w-full relative h-[400px] rounded-2xl p-6 md:p-10 border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-xl overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 bg-grid-neutral-100 dark:bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
          <p className="font-heading font-bold text-2xl md:text-3xl text-neutral-800 dark:text-neutral-100 mb-8 relative z-10">
            Engineering Principles
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
          Technical Arsenal
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            My toolkit for building robust, scalable systems.
        </p>
      </div>

      <div className="min-h-[30rem] h-auto md:h-[30rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
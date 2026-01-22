"use client";
import React from "react";
import { motion } from "motion/react";

export const CodeTerminal = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto mt-12 rounded-xl bg-[#1e1e1e] border border-neutral-800 shadow-2xl overflow-hidden"
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-neutral-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-xs text-neutral-500 font-mono">anil@dev-machine:~</div>
        <div className="w-12"></div> {/* Spacer for centering */}
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
        <div className="flex flex-col space-y-4">
          
          {/* Command 1 */}
          <div>
            <span className="text-green-400">➜</span>{" "}
            <span className="text-cyan-400">~</span>{" "}
            <span className="text-neutral-300">whoami</span>
            <p className="text-yellow-300 mt-1">"Anil Singh"</p>
          </div>

          {/* Command 2 */}
          <div>
            <span className="text-green-400">➜</span>{" "}
            <span className="text-cyan-400">~</span>{" "}
            <span className="text-yellow-400">console.log(&quot;Hello World!&quot;);</span>
            <div className="mt-2 text-neutral-300 whitespace-pre-wrap">
              {`{
  "role": "Backend & DevOps Engineer",
  "education": "B.Tech Information Technology",
  "skills": [
    "Node.js", "Databases", "C++",
    "AWS", "Docker", "CICD",
    "System Design"
  ],
  "current_focus": "Building Scalable Systems"
}`}
            </div>
          </div>
          <div>
            <span className="text-green-400">➜</span>{" "}
            <span className="text-cyan-400">~</span>{" "}
            <span className="text-neutral-300">
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-5 bg-neutral-400 align-middle ml-1"
              />
            </span>
          </div>

        </div>
      </div>
    </motion.div>
  );
};
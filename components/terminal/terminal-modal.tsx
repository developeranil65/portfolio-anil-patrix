"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Minus, Square } from "lucide-react";
import { useTerminal } from "@/context/terminal-context";

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

const STARTUP_MESSAGE = [
  "Initializing Portfolio OS v1.0.0...",
  "Loading user profile...",
  "Loading projects...",
  "Loading skills...",
  "Done.",
  "Type 'help' to see available commands.",
];

export const TerminalModal = () => {
  const { isOpen, closeTerminal } = useTerminal();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Focus input when terminal opens or click anywhere in terminal
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode = "";

    switch (cleanCmd.split(" ")[0]) {
      case "help":
        output = (
          <div className="space-y-1 text-neutral-300">
            <p className="text-yellow-400">Available commands:</p>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <span className="text-cyan-400">about</span>
              <span>- display user information</span>
              <span className="text-cyan-400">projects</span>
              <span>- list my projects</span>
              <span className="text-cyan-400">skills</span>
              <span>- list my technical skills</span>
              <span className="text-cyan-400">contact</span>
              <span>- get contact details</span>
              <span className="text-cyan-400">clear</span>
              <span>- clear the terminal</span>
              <span className="text-cyan-400">exit</span>
              <span>- close the terminal</span>
              <span className="text-cyan-400">repo</span>
              <span>- open portfolio repository</span>
            </div>
          </div>
        );
        break;
      case "about":
      case "whoami":
        output = (
          <div className="space-y-2 text-neutral-300">
            <p>
              Hi, I&apos;m <span className="text-green-400 font-bold">Anil Singh</span>.
            </p>
            <p>
              I am a Backend &amp; DevOps Engineer passionate about
              building scalable APIs with Node.js &amp; AWS Infrastructure.
            </p>
            <p>
              Currently focusing on <span className="text-yellow-300">Building Scalable Systems</span>,{" "}
              <span className="text-yellow-300">System Design</span>, and{" "}
              <span className="text-yellow-300">Cloud Infrastructure</span>.
            </p>
            <p>
              Education: <span className="text-yellow-300">B.Tech Information Technology</span>
            </p>
          </div>
        );
        break;
      case "projects":
      case "ls":
        output = (
          <div className="space-y-2">
             <p className="text-yellow-400">My Projects (type &apos;cat [project_name]&apos; for details):</p>
             <ul className="list-disc list-inside text-neutral-300 space-y-1">
               <li><span className="text-cyan-400">opus</span> - Distributed, horizontally scalable polling system with sub-50ms latency</li>
               <li><span className="text-cyan-400">finledger</span> - ACID-compliant double-entry ledger with transactional idempotency</li>
               <li><span className="text-cyan-400">keyvaultx</span> - Secure secret management backend with AES-256 encryption</li>
               <li><span className="text-cyan-400">avoidesse</span> - Real-time disease surveillance system with ML-powered outbreak prediction</li>
             </ul>
          </div>
        );
        break;
      case "skills":
        output = (
          <div className="space-y-1 text-neutral-300">
            <p className="text-yellow-400 mb-2">Technical Skills:</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1">
              <div><span className="text-purple-400">Languages:</span> JavaScript, TypeScript, C++, Node.js</div>
              <div><span className="text-purple-400">Frameworks:</span> Express.js, Redis</div>
              <div><span className="text-purple-400">Databases:</span> PostgreSQL, MongoDB, Redis</div>
              <div><span className="text-purple-400">DevOps:</span> Docker, Nginx, AWS, Git, Linux</div>
            </div>
            <p className="mt-2"><span className="text-purple-400">Concepts:</span> HTTP &amp; REST, API Architecture, Authentication, Database Design, Caching Strategies, Async Processing, System Scalability, Cloud Security, Observability</p>
          </div>
        );
        break;
      case "contact":
      case "email":
        output = (
          <div className="text-neutral-300">
            <p>You can reach me at:</p>
            <p className="mt-1">
               LinkedIn: <a href="https://www.linkedin.com/in/anilsingh-ln" target="_blank" className="text-blue-400 underline hover:text-blue-300">linkedin.com/in/anilsingh-ln</a>
            </p>
            <p>
               GitHub: <a href="https://github.com/developeranil65" target="_blank" className="text-blue-400 underline hover:text-blue-300">github.com/developeranil65</a>
            </p>
            <p>
               Resume: <a href="https://drive.google.com/file/d/1zSfrunb1rbZgpXmV-qPif9Dhz3x_H1HQ/view?usp=sharing" target="_blank" className="text-blue-400 underline hover:text-blue-300">View Resume</a>
            </p>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        return;
      case "exit":
        closeTerminal();
        return;
      case "repo":
        window.open("https://github.com/developeranil65/portfolio-anil-patrix", "_blank");
        output = "Opening repository...";
        break;
      case "sudo":
         output = <span className="text-red-500 font-bold">Permission denied: You are not authorized to be here (just kidding, but no sudo for you).</span>;
         break;
      case "":
        output = "";
        break;
      default:
        // Check for 'cat' command
        if (cleanCmd.startsWith("cat ")) {
            const file = cleanCmd.substring(4).trim();
            if (file === "opus") {
                output = (
                  <div className="text-neutral-300 space-y-1">
                    <p className="text-green-400 font-bold">Opus – Polling App</p>
                    <p>A distributed, horizontally scalable polling system with sub-50ms latency.</p>
                    <p><span className="text-purple-400">Stack:</span> Node.js, Docker, Nginx, Redis, PostgreSQL</p>
                    <p><span className="text-purple-400">Role:</span> Backend Engineer, DevOps Engineer</p>
                    <p><span className="text-blue-400">→</span> <a href="https://github.com/developeranil65/opus.dev/tree/dev" target="_blank" className="text-blue-400 underline hover:text-blue-300">View on GitHub</a></p>
                  </div>
                );
            } else if (file === "finledger") {
                output = (
                  <div className="text-neutral-300 space-y-1">
                    <p className="text-green-400 font-bold">FinLedger</p>
                    <p>A high-integrity, ACID-compliant double-entry ledger system with transactional idempotency and financial auditability.</p>
                    <p><span className="text-purple-400">Stack:</span> Node.js, TypeScript, MongoDB, Redis, Docker</p>
                    <p><span className="text-purple-400">Role:</span> Backend Engineer, Fullstack Engineer</p>
                    <p><span className="text-blue-400">→</span> <a href="https://github.com/developeranil65/FinLedger-Banking-System" target="_blank" className="text-blue-400 underline hover:text-blue-300">View on GitHub</a></p>
                  </div>
                );
            } else if (file === "keyvaultx") {
                output = (
                  <div className="text-neutral-300 space-y-1">
                    <p className="text-green-400 font-bold">KeyVaultX</p>
                    <p>A secure secret management backend with AES-256 encryption and hybrid auth.</p>
                    <p><span className="text-purple-400">Stack:</span> Node.js, TypeScript, PostgreSQL, Docker</p>
                    <p><span className="text-purple-400">Role:</span> Backend Engineer, Security Engineer</p>
                    <p><span className="text-blue-400">→</span> <a href="https://github.com/developeranil65/keyvaultx.secure" target="_blank" className="text-blue-400 underline hover:text-blue-300">View on GitHub</a></p>
                  </div>
                );
            } else if (file === "avoidesse") {
                output = (
                  <div className="text-neutral-300 space-y-1">
                    <p className="text-green-400 font-bold">AvoidEsse</p>
                    <p>An end-to-end disease surveillance system integrating real-time data ingestion with ML for outbreak prediction.</p>
                    <p><span className="text-purple-400">Stack:</span> Node.js, Python, PostgreSQL, Socket.io</p>
                    <p><span className="text-purple-400">Role:</span> Backend Engineer, ML Engineer, Fullstack Engineer</p>
                    <p><span className="text-blue-400">→</span> <a href="https://github.com/developeranil65/SIH_backend" target="_blank" className="text-blue-400 underline hover:text-blue-300">View on GitHub</a></p>
                  </div>
                );
            } else {
                 output = <span className="text-red-400">cat: {file}: No such file or directory</span>;
            }
        } else {
            output = <span className="text-red-400">Command not found: {cleanCmd}. Type &apos;help&apos; for a list of commands.</span>;
        }
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setCommandHistory((prev) => [...prev, input]);
      setHistoryIndex(-1);
      setInput("");
    } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (commandHistory.length > 0) {
            const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
            setHistoryIndex(newIndex);
            setInput(commandHistory[newIndex]);
        }
    } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (commandHistory.length > 0 && historyIndex !== -1) {
            const newIndex = historyIndex + 1;
            if (newIndex >= commandHistory.length) {
                setHistoryIndex(-1);
                setInput("");
            } else {
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        }
    }
  };

  // Initial greeting
  useEffect(() => {
      if (history.length === 0 && isOpen) {
          // Add startup messages with delays
          // For simplicity, we just add them all at once or simulated
          // Let's just default to empty or the startup message
      }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-4xl h-[600px] flex flex-col bg-[#1e1e1e]/95 rounded-lg border border-neutral-700 shadow-2xl overflow-hidden font-mono text-sm md:text-base ring-1 ring-white/10"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Title Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-neutral-700 select-none">
              <div className="flex items-center space-x-2">
                <div onClick={closeTerminal} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer flex items-center justify-center group">
                    <X className="w-2 h-2 text-black opacity-0 group-hover:opacity-100" />
                </div>
                <div onClick={closeTerminal} className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer flex items-center justify-center group">
                    <Minus className="w-2 h-2 text-black opacity-0 group-hover:opacity-100" />
                </div>
                <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer flex items-center justify-center group">
                    <Square className="w-2 h-2 text-black opacity-0 group-hover:opacity-100" />
                </div>
              </div>
              <div className="text-neutral-400 text-xs">anil@portfolio: ~</div>
              <div className="w-14" /> {/* Spacer */}
            </div>

            {/* Terminal Content */}
            <div 
                ref={scrollRef}
                className="flex-1 p-4 overflow-y-auto no-scrollbar text-neutral-200"
            >
              {/* Startup Messages */}
              <div className="mb-4 text-neutral-400">
                  {STARTUP_MESSAGE.map((msg, i) => (
                      <p key={i}>{msg}</p>
                  ))}
                  <p className="mt-2">Welcome to the interactive portfolio terminal. </p>
              </div>

              {/* History */}
              {history.map((item, i) => (
                <div key={i} className="mb-2">
                  <div className="flex items-center text-neutral-300">
                    <span className="text-green-400 mr-2">➜</span>
                    <span className="text-cyan-400 mr-2">~</span>
                    <span>{item.command}</span>
                  </div>
                  <div className="mt-1 ml-6 text-neutral-300/90 whitespace-pre-wrap">
                    {item.output}
                  </div>
                </div>
              ))}

              {/* Input Line */}
              <div className="flex items-center text-neutral-300">
                <span className="text-green-400 mr-2">➜</span>
                <span className="text-cyan-400 mr-2">~</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none border-none text-neutral-100 placeholder-neutral-500"
                  spellCheck={false}
                  autoComplete="off"
                  autoFocus
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

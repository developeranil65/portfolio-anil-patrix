"use client";

import React from "react";
import { TerminalProvider } from "@/context/terminal-context";
import { ThemeProvider } from "next-themes";
import { TerminalModal } from "@/components/terminal/terminal-modal";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
      <TerminalProvider>
        <SmoothScrollProvider>
          {children}
          <TerminalModal />
        </SmoothScrollProvider>
      </TerminalProvider>
    </ThemeProvider>
  );
}

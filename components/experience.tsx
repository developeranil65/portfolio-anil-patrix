"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { experienceSection } from "@/lib/site-config";

/**
 * Renders a paragraph string with special formatting:
 *  - {text} → accent colored span (sky for first entry, amber for second, etc.)
 *  - [text] → bold emerald colored strong tag
 */
function renderParagraph(text: string, accentClass: string) {
  const parts = text.split(/(\{[^}]+\}|\[[^\]]+\])/g);
  return parts.map((part, i) => {
    if (part.startsWith("{") && part.endsWith("}")) {
      const inner = part.slice(1, -1);
      return (
        <span key={i} className={`${accentClass} font-medium`}>
          {inner}
        </span>
      );
    }
    if (part.startsWith("[") && part.endsWith("]")) {
      const inner = part.slice(1, -1);
      return (
        <strong key={i} className="text-emerald-600 dark:text-emerald-300">
          {inner}
        </strong>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

const accentColors = [
  "text-sky-600 dark:text-sky-300",
  "text-amber-600 dark:text-amber-300",
  "text-sky-600 dark:text-sky-300",
  "text-sky-600 dark:text-sky-300",
];

export default function Experience() {
  const data = experienceSection.entries.map((entry, entryIdx) => ({
    title: entry.title,
    content: (
      <div>
        <div className="flex flex-col gap-2 mb-4">
          <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-zinc-100">
            {entry.heading}
          </h3>
          {entry.subtitle && (
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {entry.subtitle}
            </p>
          )}
        </div>
        {entry.paragraphs.map((para, idx) => (
          <p
            key={idx}
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4"
          >
            {renderParagraph(para, accentColors[entryIdx] || accentColors[0])}
          </p>
        ))}
      </div>
    ),
  }));

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
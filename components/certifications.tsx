"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { certificationsSection } from "@/lib/site-config";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const PAGE_SIZE = 4;

export default function Certifications() {
  const [page, setPage] = useState(0);
  const certs = certificationsSection.certifications;
  const totalPages = Math.ceil(certs.length / PAGE_SIZE);
  const visible = certs.slice(0, (page + 1) * PAGE_SIZE);
  const hasMore = (page + 1) * PAGE_SIZE < certs.length;

  return (
    <SectionWrapper>
      <div id="certifications" className="max-w-[1440px] mx-auto px-6 md:px-12 py-20">
        {/* Header — centered */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-neutral-100 mb-4">
            {certificationsSection.heading}
          </h2>
          {certificationsSection.subHeading && (
            <p className="text-neutral-400 text-lg">
              {certificationsSection.subHeading}
            </p>
          )}
        </div>

        {/* 4-column grid — centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-start justify-items-center">
          <AnimatePresence>
            {visible.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: (idx % PAGE_SIZE) * 0.08 }}
                className="group relative w-full aspect-square rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
                style={{ backgroundColor: cert.cardBg || "#1a1a2e" }}
              >
                {/* Clickable area for the whole card */}
                <Link href={cert.credentialUrl || "#"} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-30" aria-label={`View credential for ${cert.title}`} />

                {/* Image completely filling the square card (object-cover without padding) */}
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Hover overlay — name + issuer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6 z-20 pointer-events-none">
                  <p className="text-lg md:text-xl font-heading font-bold text-white leading-tight translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                    {cert.title}
                  </p>
                  <p className="text-xs md:text-sm text-neutral-300 mt-1 translate-y-3 group-hover:translate-y-0 transition-transform duration-400 delay-75">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More button */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="px-8 py-3 rounded-full border border-white/20 text-xs font-heading font-bold tracking-[0.15em] uppercase text-white/80 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              VIEW MORE
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMapPin,
} from "@tabler/icons-react";
import { personalInfo, workWithMeSection } from "@/lib/site-config";

export default function WorkWithMe() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-2xl border border-white/[0.08] bg-neutral-900/60 backdrop-blur-xl shadow-[0_0_60px_-12px_rgba(99,102,241,0.15)] overflow-hidden"
        >
          {/* Top gradient accent */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

          <div className="p-8 md:p-12 flex flex-col items-center text-center gap-6">
            {/* Avatar + Name + Location */}
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-indigo-500/30 ring-offset-2 ring-offset-neutral-900">
                <Image
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-neutral-100">
                  {personalInfo.name}
                </h3>
                <p className="flex items-center justify-center gap-1 text-sm text-neutral-400 mt-1">
                  <IconMapPin className="w-3.5 h-3.5" />
                  {workWithMeSection.location}
                </p>
              </div>
            </div>

            {/* Role Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {workWithMeSection.roles.map((role, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-xs font-semibold tracking-wide rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Pitch */}
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-xl">
              {workWithMeSection.pitch}
            </p>

            {/* CTA Button */}
            <Link
              href={workWithMeSection.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-heading font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.5)] hover:scale-105"
            >
              {workWithMeSection.ctaText}
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <Link
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-700 transition-colors"
              >
                <IconBrandLinkedin className="w-5 h-5" />
              </Link>
              <Link
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-700 transition-colors"
              >
                <IconBrandGithub className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Bottom gradient accent */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

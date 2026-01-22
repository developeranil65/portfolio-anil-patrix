"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Experience() {
  const data = [
    {
      title: "Current Focus",
      content: (
        <div>
          <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            System Design, Backend Infrastructure & DevOps
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            I am currently focused on designing backend systems that behave
            correctly under load, failure, and scale. My work emphasizes <span className="text-sky-600 dark:text-sky-300 font-medium">system
            design fundamentals</span>—caching strategies, async processing, access
            control, and deployment reliability.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            At present, I am building <strong className="text-emerald-600 dark:text-emerald-300">KeyVaultX</strong>, a secure
            secret management backend, treating it as a production-style system
            with strict security boundaries, scoped access, and clear trust
            models rather than a simple CRUD application.
          </p>
        </div>
      ),
    },
    {
      title: "2024 - Present",
      content: (
        <div>
          <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            Backend Engineering & Distributed Systems
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Over the past year, I transitioned from writing basic APIs to
            architecting backend systems with real infrastructure concerns.
            Through hands-on projects, I worked on load balancing, <span className="text-amber-600 dark:text-amber-300 font-medium">Redis-based
            caching</span>, message queues, and database performance under high
            read/write pressure.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Projects like <strong className="text-emerald-600 dark:text-emerald-300">Opus Polling App</strong> reflect this phase,
            where I deliberately simulated real-world problems such as traffic
            spikes, database contention, and eventual consistency, and solved
            them using asynchronous processing and caching instead of
            brute-force scaling.
          </p>
        </div>
      ),
    },
    {
      title: "June - July 2025",
      content: (
        <div>
          <div className="flex flex-col gap-2 mb-4">
            <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-zinc-100">
              Summer Trainee – Frontend Development
            </h3>
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Gokboru Tech · India
            </p>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Completed an intensive summer training program focused on frontend
            development and team-based software workflows. This experience
            strengthened my understanding of how frontend applications interact
            with backend APIs, authentication flows, and deployment pipelines.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            While my long-term focus shifted toward backend systems, this
            training helped me build a full-stack perspective, enabling me to
            design backend APIs that are practical, predictable, and
            frontend-friendly.
          </p>
        </div>
      ),
    },
    {
      title: "2023 - Present",
      content: (
        <div>
          <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            B.Tech in Information Technology
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <strong className="text-sky-600 dark:text-sky-300">Coursework:</strong> Data Structures and Algorithms,
            Operating Systems, Database Management Systems, Computer Networks,
            Object Oriented Programming.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Alongside academics, I consistently applied these concepts outside
            coursework by building independent backend projects, prioritizing
            practical system behavior over theoretical implementations.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
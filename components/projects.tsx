"use client";
import React from "react";
import { StickyCardStack } from "./ui/card-stack-scroll";

const projects = [
  {
    title: "Opus – Polling App",
    description: (
      <>
        <p className="mb-4">
          Architected a distributed backend system using Docker Compose and Nginx to load-balance traffic across horizontally scaled API replicas, enabling zero-downtime deployments.
        </p>
        <p className="mb-4">
          Implemented event-driven asynchronous processing using BullMQ (Producer–Consumer pattern) to prevent database lockups and maintain sub-50ms latency during simulated thundering herd scenarios.
        </p>
        <p>
          Designed a write-through caching strategy with Redis to serve live poll results, reducing direct MongoDB read operations by approximately 90%.
        </p>
      </>
    ),
    tags: ["Node.js", "Docker", "Nginx", "Redis", "BullMQ"],
    github: "#",
    link: "#",
    color: "#f59e0b", // Amber
    image: "/opus.png",
    detailsLink: "#",
  },
  {
    title: "KeyVaultX (Currently in Development)",
    description: (
      <>
        <p className="mb-4">
          Built a backend for secure secret storage, encrypting sensitive data using AES-256 before persistence to ensure no plaintext secrets exist at rest.
        </p>
        <p className="mb-4">
          Implemented hybrid authentication, supporting both human users (JWT-based auth) and machines (API token–based auth) with clear trust boundaries.
        </p>
        <p>
           Enforced strict access control logic, ensuring read-only tokens cannot modify or delete secrets through backend-only authorization checks.
        </p>
      </>
    ),
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Docker"],
    github: "#",
    link: "#",
    color: "#10b981", // Emerald
    image: "/keyvaultx.png",
    detailsLink: "#",
  },
];

export default function Projects() {
  return (
      <div id="projects">
        <StickyCardStack projects={projects} />
      </div>
  );
}

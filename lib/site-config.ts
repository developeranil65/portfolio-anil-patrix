
export const siteMetadata = {
  title: "anil > patrix",
  description:
    "Backend Developer | Building Scalable APIs with Node.js & AWS Infrastructure | Docker, CI/CD, PostgreSQL, Redis",
};

// ---------------------------------------------------------------------------
// PERSONAL INFO
// ---------------------------------------------------------------------------
export const personalInfo = {
  name: "Anil Singh",
  role: "Backend & DevOps Engineer",
  education: "B.Tech Information Technology",
  currentFocus: "Building Scalable Systems",
  linkedinUrl: "https://www.linkedin.com/in/anilsingh-ln",
  githubUrl: "https://github.com/developeranil65",
  resumeUrl:
    "https://drive.google.com/file/d/1zSfrunb1rbZgpXmV-qPif9Dhz3x_H1HQ/view?usp=sharing",
  profilePhoto: "/my_photo.webp",
  shortBio:
    "Backend Developer | Building Scalable APIs with Node.js & AWS Infrastructure | Docker, CI/CD, PostgreSQL, Redis | Open to Internships",
};

// ---------------------------------------------------------------------------
// HERO SECTION
// ---------------------------------------------------------------------------
export const heroSection = {
  greeting: "Get in touch with",
  headline: "I am Proficient in",
  flipWords: [
    "Backend Development",
    "DevOps & Automation",
    "AWS Infrastructure",
  ],
  subHeadline:
    "Passionate about building the Automated, Scalable infrastructure that powers modern applications.",
};

// ---------------------------------------------------------------------------
// TERMINAL (the code-style terminal in the hero section)
// ---------------------------------------------------------------------------
export const terminalConfig = {
  hostname: "anil@dev-machine:~",
  commands: [
    {
      prompt: "whoami",
      output: '"Anil Singh"',
    },
    {
      prompt: 'console.log("Hello World!");',
      output: JSON.stringify(
        {
          role: "Backend & DevOps Engineer",
          education: "B.Tech Information Technology",
          skills: [
            "Node.js",
            "Databases",
            "C++",
            "AWS",
            "Docker",
            "CICD",
            "System Design",
          ],
          current_focus: "Building Scalable Systems",
        },
        null,
        2
      ),
    },
  ],
};

// ---------------------------------------------------------------------------
// NAVBAR LINKS
//
// Each item:
//   title        — label shown in the tooltip
//   href         — scroll-to anchor (#section) or external URL
//   tooltipImage — path to tooltip preview image (in /public/tooltips/)
//   isExternal   — opens in new tab when true
//   iconName     — name of the @tabler/icons-react icon to render
//   onClick      — special actions: "toggleTerminal" | "toggleTheme"
// ---------------------------------------------------------------------------
export const navbarLinks = [
  {
    title: "Home",
    href: "#",
    tooltipImage: "/tooltips/home.png",
    iconName: "IconHome" as const,
  },
  {
    title: "Skills",
    href: "#skills",
    tooltipImage: "/tooltips/skills.png",
    iconName: "IconCode" as const,
  },
  {
    title: "Projects",
    href: "#projects",
    tooltipImage: "/tooltips/projects.png",
    iconName: "IconBriefcase" as const,
  },
  {
    title: "Terminal",
    href: "#",
    tooltipImage: "/tooltips/terminal-tp.png",
    iconName: "IconTerminal2" as const,
    onClick: "toggleTerminal" as const,
  },
  {
    title: "Resume",
    href: "https://drive.google.com/file/d/1zSfrunb1rbZgpXmV-qPif9Dhz3x_H1HQ/view?usp=sharing",
    tooltipImage: "/tooltips/resume-tp.png",
    iconName: "IconFileText" as const,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/anilsingh-ln",
    tooltipImage: "/tooltips/linkedin-tp.png",
    iconName: "IconBrandLinkedin" as const,
  },
  {
    title: "GitHub",
    href: "https://github.com/developeranil65",
    tooltipImage: "/tooltips/github-tp.png",
    iconName: "IconBrandGithub" as const,
  },
];

// ---------------------------------------------------------------------------
// SKILLS — Technical Arsenal Section
//
// Each logo entry:
//   src       — CDN URL for the devicon SVG
//   title     — label shown on hover
//   className — optional CSS class (e.g. "dark:invert" for dark-mode logos)
// ---------------------------------------------------------------------------
export const skillsSection = {
  heading: "Technical Arsenal",
  subHeading: "My toolkit for building robust, scalable systems.",

  languages: [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      title: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      title: "TypeScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      title: "Node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      title: "C++",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      title: "Express.js",
      className: "dark:invert",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      title: "Python",
    },
  ],

  infrastructure: [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      title: "PostgreSQL",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      title: "MongoDB",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
      title: "Redis",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      title: "Docker",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
      title: "Nginx",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      title: "AWS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      title: "Git",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      title: "GitHub",
      className: "dark:invert",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
      title: "Linux",
    },
  ],

  concepts: [
    "HTTP & REST",
    "API Architecture",
    "Authentication",
    "Database Design",
    "Caching Strategies",
    "Async Processing",
    "System Scalability",
    "Cloud Security",
    "Observability",
  ],

  tabs: {
    languagesTab: {
      title: "Languages & Frameworks",
      value: "languages",
      heading: "Core Stack",
    },
    infrastructureTab: {
      title: "Infrastructure & Tools",
      value: "infrastructure",
      heading: "DevOps & Data",
    },
    conceptsTab: {
      title: "Backend Concepts",
      value: "concepts",
      heading: "Engineering Principles",
    },
  },
};

// ---------------------------------------------------------------------------
// PROJECTS — Featured Projects Section
//
// Each project:
//   title       — project name
//   tagline     — short one-liner (shown under title if needed in the future)
//   bullets     — array of description paragraphs
//   tags        — array of tech stack labels
//   github      — link to repository ("#" for none)
//   link        — live deployment link ("#" for none)
//   color       — accent color for the card
//   image       — path to screenshot (in /public/), empty string for no image
//   detailsLink — link to a details/case-study page ("#" for none)
// ---------------------------------------------------------------------------
export const projectsSection = {
  heading: "Featured Projects",
  subHeading:
    "A selection of robust systems demonstrating my capabilities in backend and scalable infrastructure.",

  projects: [
    {
      title: "Opus – Polling App",
      tagline:
        "A distributed, horizontally scalable polling system with sub-50ms latency.",
      bullets: [
        "Architected a distributed backend system using Docker Compose and Nginx to load-balance traffic across horizontally scaled API replicas, enabling zero-downtime deployments.",
        "Implemented event-driven asynchronous processing using BullMQ (Producer–Consumer pattern) to prevent database lockups and maintain sub-50ms latency during simulated thundering herd scenarios.",
        "Designed a write-through caching strategy with Redis to serve live poll results, reducing direct MongoDB read operations by approximately 90%.",
      ],
      tags: ["Node.js", "Docker", "Nginx", "Redis", "BullMQ"],
      github: "#",
      link: "#",
      color: "#f59e0b", // Amber
      image: "/opus.png",
      detailsLink: "#",
    },
    {
      title: "KeyVaultX (Currently in Development)",
      tagline:
        "A secure secret management backend with AES-256 encryption and hybrid auth.",
      bullets: [
        "Built a backend for secure secret storage, encrypting sensitive data using AES-256 before persistence to ensure no plaintext secrets exist at rest.",
        "Implemented hybrid authentication, supporting both human users (JWT-based auth) and machines (API token–based auth) with clear trust boundaries.",
        "Enforced strict access control logic, ensuring read-only tokens cannot modify or delete secrets through backend-only authorization checks.",
      ],
      tags: ["Node.js", "TypeScript", "PostgreSQL", "Docker"],
      github: "#",
      link: "#",
      color: "#10b981", // Emerald
      image: "/keyvaultx.png",
      detailsLink: "#",
    },
    {
      title: "FinLedger",
      tagline:
        "A high-integrity, ACID-compliant double-entry ledger system designed for transactional idempotency and financial auditability.",
      bullets: [
        "Architected an ACID-compliant double-entry ledger using MongoDB Transactions, ensuring atomic fund transfers where debits and credits succeed or fail as a single unit.",
        "Implemented transactional idempotency using a unique request-key strategy to prevent double-spending and ensure 100% data consistency during concurrent transfers.",
        "Engineered an immutable audit trail via Mongoose middleware and an asynchronous Webhook pipeline with HMAC-SHA256 signing for secure third-party integration.",
      ],
      tags: [
        "Node.js",
        "TypeScript",
        "MongoDB",
        "Redis",
        "BullMQ",
        "Docker",
        "AWS",
      ],
      github: "#",
      link: "#",
      color: "#6366f1", // Indigo
      image: "/finledger.png",
      detailsLink: "#",
    },
    {
      title: "AvoidEsse: Smart Health Surveillance & Outbreak Prediction",
      tagline:
        "An end-to-end disease surveillance system integrating real-time data ingestion with ML for outbreak prediction.",
      bullets: [
        "Engineered an end-to-end disease surveillance system that integrates real-time data ingestion with machine learning to predict and alert on potential health outbreaks.",
        "Architected a real-time data pipeline using Node.js and Socket.io to stream health alerts and aggregated summaries directly to client dashboards.",
        "Developed a multi-source ETL engine in Python that automates the collection and normalization of clinical records, pharmaceutical sales, and social media sentiment.",
        "Implemented anomaly detection using an Isolation Forest model to identify statistically significant spikes in symptoms and medication demand across districts.",
        "Integrated time-series forecasting with Meta's Prophet library to predict future case counts, enabling proactive healthcare resource management.",
        "Designed a dynamic risk-scoring algorithm that calculates outbreak probability (High/Medium/Low) by correlating medical severity, social sentiment, and predictive trends.",
        "Managed complex data relations with a PostgreSQL database and Prisma ORM, tracking patient outcomes, pharmacy inventory, and public health metrics.",
        "Built a synthetic data generator to simulate realistic outbreak scenarios and validate the model's detection accuracy.",
      ],
      tags: [
        "Node.js",
        "Python",
        "PostgreSQL",
        "Scikit-Learn",
        "Prophet",
        "Prisma",
        "Socket.io",
      ],
      github: "#",
      link: "#",
      color: "#ec4899", // Pink
      image: "/avoidesse.png",
      detailsLink: "#",
    },
  ],
};

// ---------------------------------------------------------------------------
// EXPERIENCE — Timeline Section
//
// Each entry:
//   title       — timeline label (date range or phase)
//   heading     — bold heading
//   subtitle    — optional subtitle (e.g. company • location)
//   paragraphs  — array of text paragraphs
//   highlights  — words/phrases to emphasize (rendered with accent colors)
// ---------------------------------------------------------------------------
export const experienceSection = {
  entries: [
    {
      title: "Current Focus",
      heading: "System Design, Backend Infrastructure & DevOps",
      subtitle: "",
      paragraphs: [
        'I am currently focused on designing backend systems that behave correctly under load, failure, and scale. My work emphasizes {system design fundamentals}—caching strategies, async processing, access control, and deployment reliability.',
        'At present, I am building [KeyVaultX], a secure secret management backend, treating it as a production-style system with strict security boundaries, scoped access, and clear trust models rather than a simple CRUD application.',
      ],
    },
    {
      title: "2024 - Present",
      heading: "Backend Engineering & Distributed Systems",
      subtitle: "",
      paragraphs: [
        'Over the past year, I transitioned from writing basic APIs to architecting backend systems with real infrastructure concerns. Through hands-on projects, I worked on load balancing, {Redis-based caching}, message queues, and database performance under high read/write pressure.',
        'Projects like [Opus Polling App] reflect this phase, where I deliberately simulated real-world problems such as traffic spikes, database contention, and eventual consistency, and solved them using asynchronous processing and caching instead of brute-force scaling.',
      ],
    },
    {
      title: "June - July 2025",
      heading: "Summer Trainee – Frontend Development",
      subtitle: "Gokboru Tech · India",
      paragraphs: [
        "Completed an intensive summer training program focused on frontend development and team-based software workflows. This experience strengthened my understanding of how frontend applications interact with backend APIs, authentication flows, and deployment pipelines.",
        "While my long-term focus shifted toward backend systems, this training helped me build a full-stack perspective, enabling me to design backend APIs that are practical, predictable, and frontend-friendly.",
      ],
    },
    {
      title: "2023 - Present",
      heading: "B.Tech in Information Technology",
      subtitle: "",
      paragraphs: [
        "{Coursework:} Data Structures and Algorithms, Operating Systems, Database Management Systems, Computer Networks, Object Oriented Programming.",
        "Alongside academics, I consistently applied these concepts outside coursework by building independent backend projects, prioritizing practical system behavior over theoretical implementations.",
      ],
    },
  ],
};

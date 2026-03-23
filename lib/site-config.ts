
export const siteMetadata = {
  title: "anil-singh",
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
    "Passionate about building the Automated, Scalable infrastructure that powers modern applications",
};

// ---------------------------------------------------------------------------
// TERMINAL
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
          location: "Phagwara, Punjab",
          skills: [
            "JavaScript",
            "TypeScript",
            "Node.js",
            "C++",
            "Express.js",
            "Redis",
            "PostgreSQL",
            "MongoDB",
            "Docker",
            "Nginx",
            "AWS",
            "Git",
            "Linux",
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
    tooltipImage: "/tooltips/homepage.png",
    iconName: "IconHome" as const,
  },
  {
    title: "Skills",
    href: "#skills",
    tooltipImage: "/tooltips/tech.png",
    iconName: "IconCode" as const,
  },
  {
    title: "Projects",
    href: "#projects",
    tooltipImage: "/tooltips/project.png",
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
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
      title: "Redis",
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
      heading: "DevOps & Cloud",
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
  subHeading: "",
  initialVisible: 2, // show this many initially, rest behind "View More"

  projects: [
    {
      slug: "opus",
      title: "Opus – Polling App",
      tagline:
        "A distributed, horizontally scalable polling system with sub-50ms latency",
      storyTagline:
        "How I built a distributed polling system that handles thundering herd scenarios with sub-50ms latency",
      techStack: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", title: "Node.js" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", title: "Docker" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg", title: "Nginx" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg", title: "Redis" },
      ],
      tags: ["Backend Engineer", "DevOps Engineer"],
      github: "https://github.com/developeranil65/opus.dev/tree/dev",
      docsLink: "#",
      link: "#",
      color: "#f59e0b",
      cardBg: "#1e293b",
      image: "/opus-main.png",
      architectureDiagram: "/opusarch.png",
      content: {
        whatMadeThisHard: [
          {
            title: "Millions of records, sub-second queries",
            description: "The web scraper pulls roughly 10,000 articles daily. With millions of historical records in the database, users still expect instant search results and complex filtering. The database alone couldn't deliver that performance",
          },
          {
            title: "Complex visualizations over massive datasets",
            description: "Corporate innovation teams need charts showing technology trends, patent landscapes, and competitive intelligence. Each visualization aggregates thousands or millions of data points while staying interactive",
          }
        ],
        howIBuiltIt: [
           "The key was a multi-layer caching strategy. Redis stores pre-aggregated statistics, frequently accessed datasets, and query results. When users search or filter, the system checks Redis first before hitting the main database. Query times dropped from seconds to milliseconds",
           "I also implemented background workers using queues to process complex aggregations asynchronously, ensuring the main thread is never blocked"
        ],
        techStackDetails: [
          { label: "Frontend", value: "Next.js, TailwindCSS, TypeScript" },
          { label: "Backend", value: "Node.js, Express" },
          { label: "Database", value: "PostgreSQL, Redis" },
          { label: "Deployment", value: "Docker, AWS, Nginx" },
        ]
      }
    },
    {
      slug: "finledger",
      title: "FinLedger",
      tagline:
        "A high-integrity, ACID-compliant double-entry ledger system designed for transactional idempotency and financial auditability",
      storyTagline:
        "How I engineered an ACID-compliant ledger with idempotent transactions and HMAC-signed webhooks",
      techStack: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", title: "Node.js" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", title: "TypeScript" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", title: "MongoDB" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg", title: "Redis" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", title: "Docker" },
      ],
      tags: ["Backend Engineer", "Fullstack Engineer"],
      github: "https://github.com/developeranil65/FinLedger-Banking-System",
      docsLink: "https://drive.google.com/drive/folders/1tsOtsnDaEUl1bSELHXa1UW9S0l389Zet",
      link: "#",
      color: "#6366f1",
      cardBg: "#312e81",
      image: "/finledger-main.png",
      architectureDiagram: "/finarch.png",
      content: {
        whatMadeThisHard: [
           { title: "Idempotency at scale", description: "Financial systems cannot afford duplicate transactions. Ensuring idempotency across thousands of concurrent API requests was critical" }
        ],
        howIBuiltIt: [
           "Utilized distributed locks with Redis, and wrapped all ledger updates in ACID-compliant cross-document transactions in MongoDB"
        ],
        techStackDetails: [
          { label: "Backend", value: "Node.js, TypeScript" },
          { label: "Database", value: "MongoDB, Redis" },
        ]
      }
    },
    {
      slug: "keyvaultx",
      title: "KeyVaultX",
      tagline:
        "A secure secret management backend with AES-256 encryption and hybrid auth",
      storyTagline:
        "How I built KeyVaultX to encrypt secrets with AES-256 and enforce strict trust boundaries",
      techStack: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", title: "Node.js" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", title: "TypeScript" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", title: "PostgreSQL" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", title: "Docker" },
      ],
      tags: ["Backend Engineer", "Security Engineer"],
      github: "https://github.com/developeranil65/keyvaultx.secure",
      docsLink: "#",
      link: "#",
      color: "#10b981",
      cardBg: "#0f172a",
      image: "/kvx-main.png",
      architectureDiagram: "",
      content: {
        whatMadeThisHard: [
           { title: "Strict trust boundaries", description: "Ensuring that untrusted actors cannot gain access to secure enclaves without multi-factor authorized requests" }
        ],
        howIBuiltIt: [
           "Implemented an AES-256 encryption layer that encrypts all payloads before they touch the database. The encryption keys themselves are vaulted separately"
        ],
        techStackDetails: [
          { label: "Backend", value: "Node.js, TypeScript" },
          { label: "Database", value: "PostgreSQL" },
          { label: "Security", value: "AES-256, JWT, Bcrypt" },
        ]
      }
    },
    {
      slug: "avoidesse",
      title: "AvoidEsse",
      tagline:
        "An end-to-end disease surveillance system integrating real-time data ingestion with ML for outbreak prediction",
      storyTagline:
        "How I built a real-time disease surveillance pipeline with ML-powered outbreak prediction",
      techStack: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", title: "Node.js" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", title: "Python" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", title: "PostgreSQL" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg", title: "Socket.io" },
      ],
      tags: ["Backend Engineer", "ML Engineer", "Fullstack Engineer"],
      github: "https://github.com/developeranil65/SIH_backend",
      docsLink: "#",
      link: "#",
      color: "#ec4899",
      cardBg: "#831843",
      image: "/avdes.png",
      architectureDiagram: "",
      content: {
        whatMadeThisHard: [
           { title: "Real-time data synchronization", description: "Connecting disjointed healthcare systems to a centralized WebSocket pipeline" }
        ],
        howIBuiltIt: [
           "Set up a pub/sub mechanism with PostgreSQL Listen/Notify and dispatched real-time alerts via Socket.io"
        ],
        techStackDetails: [
          { label: "Backend", value: "Node.js, Express, Python" },
          { label: "Database", value: "PostgreSQL" },
          { label: "ML", value: "Scikit-Learn, Pandas" },
        ]
      }
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
        'I am currently focused on designing backend systems that behave correctly under load, failure, and scale. My work emphasizes {system design fundamentals}—caching strategies, async processing, access control, and deployment reliability',
        'At present, I am building [KeyVaultX], a secure secret management backend, treating it as a production-style system with strict security boundaries, scoped access, and clear trust models rather than a simple CRUD application',
      ],
    },
    {
      title: "2024 - Present",
      heading: "Backend Engineering & Distributed Systems",
      subtitle: "",
      paragraphs: [
        'Over the past year, I transitioned from writing basic APIs to architecting backend systems with real infrastructure concerns. Through hands-on projects, I worked on load balancing, {Redis-based caching}, message queues, and database performance under high read/write pressure',
        'Projects like [Opus Polling App] reflect this phase, where I deliberately simulated real-world problems such as traffic spikes, database contention, and eventual consistency, and solved them using asynchronous processing and caching instead of brute-force scaling',
      ],
    },
    {
      title: "June - July 2025",
      heading: "Summer Trainee – Frontend Development",
      subtitle: "Gokboru Tech · India",
      paragraphs: [
        "Completed an intensive summer training program focused on frontend development and team-based software workflows. This experience strengthened my understanding of how frontend applications interact with backend APIs, authentication flows, and deployment pipelines",
        "While my long-term focus shifted toward backend systems, this training helped me build a full-stack perspective, enabling me to design backend APIs that are practical, predictable, and frontend-friendly",
      ],
    },
    {
      title: "2023 - Present",
      heading: "B.Tech in Information Technology",
      subtitle: "",
      paragraphs: [
        "{Coursework:} Data Structures and Algorithms, Operating Systems, Database Management Systems, Computer Networks, Object Oriented Programming",
        "Alongside academics, I consistently applied these concepts outside coursework by building independent backend projects, prioritizing practical system behavior over theoretical implementations",
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// WORK WITH ME — Profile card section shown after hero
// ---------------------------------------------------------------------------
export const workWithMeSection = {
  location: "Phagwara, Punjab",
  roles: ["Backend Engineer", "DevOps Engineer", "System Designer"],
  pitch:
    "I build backend systems that handle real traffic, real failures, and real scale. If you need APIs that don't break under pressure, infrastructure that deploys itself, or someone who actually understands what happens after the code is merged, let's connect",
  specialties: [
    "REST & GraphQL APIs",
    "Cloud Infrastructure (AWS)",
    "Docker & CI/CD Pipelines",
    "Database Architecture",
    "System Design",
  ],
  ctaText: "WORK WITH ME",
  ctaLink: "https://www.linkedin.com/in/anilsingh-ln",
};

// ---------------------------------------------------------------------------
// CERTIFICATIONS
//
// Each certification:
//   title         — certification name
//   issuer        — issuing organization
//   date          — year
//   credentialUrl — link to verify
//   image         — path to certification badge/image (in /public/)
//   cardBg        — background color for the card
// ---------------------------------------------------------------------------
export const certificationsSection = {
  heading: "Certifications",
  subHeading: "",

  certifications: [
    {
      title: "GFG x LPU Hackathon 2nd Runner-up",
      issuer: "GeeksforGeeks",
      date: "2025",
      credentialUrl: "https://media.geeksforgeeks.org/certificates/1750756246/a2ff8cda604ea655de71ff5d1c9b9880.pdf",
      image: "/hackathon.png",
      cardBg: "#1a1a2e",
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL-IIT Kharagpur",
      date: "2025",
      credentialUrl: "#",
      image: "/nptel.png",
      cardBg: "#0d1b2a",
    },
    {
      title: "IBM DevOps and Software Engineering",
      issuer: "Coursera-IBM",
      date: "2025",
      credentialUrl: "#",
      image: "/coursera.png",
      cardBg: "#1a2e1a",
    },
    {
      title: "Object Oriented Programming",
      issuer: "iamneo-LPU",
      date: "2024",
      credentialUrl: "#",
      image: "/oops.png",
      cardBg: "#1e1a2e",
    },
    {
      title: "Frontend Web Development",
      issuer: "Gokoru Tech",
      date: "202",
      credentialUrl: "#",
      image: "/gokboru.png",
      cardBg: "#2e1a1a",
    },
    {
      title: "Java Programming",
      issuer: "iamneo-LPU",
      date: "2025",
      credentialUrl: "#",
      image: "/java.png",
      cardBg: "#1a2e2d",
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "iamneo-LPU",
      date: "2024",
      credentialUrl: "#",
      image: "/dsa.png",
      cardBg: "#2d1a2e",
    },
    {
      title: "Linux Adminstration",
      issuer: "CloudDevOpsHub",
      date: "2025",
      credentialUrl: "#",
      image: "/linux.png",
      cardBg: "#2e2e1a",
    },
  ],
};

// ---------------------------------------------------------------------------
// CLOSING QUOTE
// ---------------------------------------------------------------------------
export const closingQuote = {
  text: "The best way to predict the future is to implement it",
  author: "David Heinemeier Hansson",
};

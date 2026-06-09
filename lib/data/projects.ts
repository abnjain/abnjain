import type { PortfolioProject } from "@/types/project";

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "central-repository-system",
    name: "Central Repository System (CRS)",
    summary: "Live college platform managing all SCSIT departments in one place.",
    problem:
      "Departments needed a single system for documents, workflows, and coordination instead of fragmented tools.",
    solution:
      "Built a centralized repository with role-based access, department modules, and a scalable full-stack architecture deployed for daily college use.",
    stack: ["React", "Node.js", "MongoDB", "Express", "System Design"],
    img: "/Images/crs.png",
    link: "https://crs.abnjain.me/",
    desc: "Live college platform at SCSIT to manage all departments in one place.",
    metrics: ["Live production deployment", "Multi-department usage"],
  },
  {
    slug: "shree-ram-tour-travels",
    name: "Shree Ram Tour & Travels",
    summary: "Live tours and travel company website with SEO optimization.",
    problem: "The business needed online visibility and booking-oriented web presence with local SEO.",
    solution:
      "Delivered a responsive marketing site with SEO metadata, performance tuning, and brand-focused UI for conversions.",
    stack: ["React", "Next.js", "SEO", "Tailwind CSS"],
    img: "/Images/ShreeRamTour&Travels.png",
    link: "https://shreeramtourandtravel.in/",
    desc: "Live tours and travel company site with SEO work.",
    metrics: ["Live client deployment", "SEO-optimized structure"],
  },
  {
    slug: "portfolio",
    name: "PORTFOLIO",
    summary: "Personal portfolio and brand site at abnjain.me.",
    problem: "Needed a fast, SEO- and AI-discovery-ready showcase for skills, projects, and hire intent.",
    solution:
      "Next.js App Router site with structured data, case studies, Framer Motion, and conversion-focused contact flows.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Schema.org"],
    img: "/Images/portfolio.png",
    link: "/",
    desc: "Visit my Portfolio Website",
    textColor: "text-accent",
  },
  {
    slug: "vidhyavardhani-vvd",
    name: "VVD (VidhyaVardhani)",
    summary: "Education platform for an education revolution initiative.",
    problem: "Required a digital platform to present programs and scale outreach for an education brand.",
    solution:
      "Designed and developed a modern web experience with clear information architecture and responsive UI.",
    stack: ["React", "Web Design", "UI/UX"],
    img: "/Images/VVD(VidhyaVardhani).png",
    link: "https://vvdlive.com/",
    desc: "Platform designed and developed for an education revolution.",
  },
  {
    slug: "kuber-group",
    name: "KUBER GROUP",
    summary: "Live stock broking firm web application.",
    problem: "A broking firm needed a credible web presence for client trust and service discovery.",
    solution:
      "Integrated MySQL, Java, and web design into a live client-facing application during a teaching engagement.",
    stack: ["Java", "MySQL", "Web Design"],
    img: "/Images/kuberGroup.png",
    link: "https://kgstocks.in",
    desc: "Kuber Group webapp — live stock broking firm project.",
    metrics: ["Live client site"],
  },
  {
    slug: "chess-game",
    name: "CHESS Game",
    summary: "Live multiplayer chess game hosted on Heroku.",
    problem: "Needed a real-time, browser-based chess experience with stable hosting.",
    solution:
      "Built and deployed an interactive chess game with React and backend services on Heroku.",
    stack: ["React", "Node.js", "Heroku"],
    img: "/Images/Screenshot1.png",
    link: "https://chess.abnjain.me/",
    desc: "Live chess game hosted on Heroku.",
  },
  {
    slug: "find-the-bubble",
    name: "find-the-bubble GAME",
    summary: "Fun React web game for engagement and skill demonstration.",
    problem: "Create an interactive demo showcasing front-end animation and game logic.",
    solution: "Shipped a lightweight React game with playful UX and deployed URL for sharing.",
    stack: ["React", "JavaScript"],
    img: "/Images/findTheBubble.png",
    link: "https://ftb-game.abnjain.me/",
    desc: "A fun web game built with React.",
  },
  {
    slug: "notepad",
    name: "NOTEPAD",
    summary: "Browser-based notepad web application.",
    problem: "Users needed a simple, fast note-taking tool accessible from any device.",
    solution: "Developed a minimal notepad webapp with clean UI and instant usability.",
    stack: ["React", "JavaScript"],
    img: "/Images/notepad.png",
    link: "https://notepad.abnjain.me/",
    desc: "Notepad web application.",
  },
  {
    slug: "beyond-water",
    name: "Reimagined Beyond Water",
    summary: "Marketing webpage for Beyond Water brand reimagining.",
    problem: "Brand needed a visual storytelling page for campaign impact.",
    solution: "Built a focused marketing site with strong visual layout and clear messaging.",
    stack: ["HTML", "CSS", "JavaScript", "Web Design"],
    img: "/Images/beyondWater.png",
    link: "https://bw.abnjain.me/",
    desc: "Reimagined Beyond Water marketing webpage.",
  },
  {
    slug: "shikshak-recruitment",
    name: "SHIKSHAK RECRUITMENT",
    summary: "Recruitment web application for educator hiring workflows.",
    problem: "Recruitment workflows required a dedicated web system for applicants and admins.",
    solution:
      "Delivered a full-stack recruitment webapp integrating MySQL, Java, and web design patterns.",
    stack: ["Java", "MySQL", "Web Design"],
    img: "/Images/shikshakRecruitment.png",
    link: "https://shikshak.abnjain.me/",
    desc: "Recruitment web application.",
  },
  {
    slug: "jobwallah",
    name: "JobWallah (in progress)",
    summary: "Job portal web application — in active development.",
    problem: "Job seekers and recruiters need a streamlined portal for listings and applications.",
    solution: "Building a job portal with modern stack; source available on GitHub.",
    stack: ["React", "Node.js", "MongoDB"],
    img: "",
    link: "https://github.com/abnjain/JobWallah",
    repoUrl: "https://github.com/abnjain/JobWallah",
    desc: "Job portal webapp — in progress.",
  },
  {
    slug: "greyt-hr",
    name: "GREYT HR Portal (in progress)",
    summary: "HR management system — in active development.",
    problem: "Organizations need centralized HR workflows and employee data management.",
    solution: "Developing an HRMS with extensible architecture; progress tracked on GitHub.",
    stack: ["Node.js", "React", "System Design"],
    img: "",
    gitlink: "https://github.com/abnjain/GreytHR",
    link: "https://github.com/abnjain/GreytHR",
    repoUrl: "https://github.com/abnjain/GreytHR",
    desc: "HR management system — in progress.",
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getCaseStudyProjects(): PortfolioProject[] {
  return portfolioProjects.filter((p) => p.slug !== "portfolio");
}

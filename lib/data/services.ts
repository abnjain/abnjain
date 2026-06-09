export type ServiceOffering = {
  id: string;
  name: string;
  description: string;
  audience: string;
  stack: string[];
};

export const serviceOfferings: ServiceOffering[] = [
  {
    id: "full-stack",
    name: "Full-Stack Web Applications",
    description:
      "End-to-end MERN and Next.js applications with APIs, auth, databases, and deployment-ready architecture.",
    audience: "Startups, SMEs, and enterprises needing scalable web products",
    stack: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
  },
  {
    id: "product-design",
    name: "Product UI/UX & Web Design",
    description:
      "User-centric interfaces, design systems, and responsive layouts optimized for conversion and accessibility.",
    audience: "Brands and founders launching or redesigning digital products",
    stack: ["Figma", "Tailwind CSS", "Framer Motion", "Next.js"],
  },
  {
    id: "seo",
    name: "SEO & Performance Websites",
    description:
      "Technical SEO, metadata strategy, Core Web Vitals, and content structure for organic visibility.",
    audience: "Local businesses and SaaS teams growing organic traffic",
    stack: ["Next.js", "Schema.org", "WordPress", "Google Search Console"],
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    description:
      "Cloud deployment, CI/CD pipelines, containerization, and infrastructure for reliable production workloads.",
    audience: "Teams moving to AWS, GCP, or containerized deployments",
    stack: ["AWS", "GCP", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    id: "system-design",
    name: "System Design & Architecture",
    description:
      "Scalable system blueprints, API design, and data modeling for high-traffic and multi-tenant platforms.",
    audience: "Ed-tech, fintech, and internal enterprise systems",
    stack: ["REST", "Microservices", "SQL/NoSQL", "Caching", "Load balancing"],
  },
  {
    id: "enterprise",
    name: "College & Enterprise Platforms",
    description:
      "Department portals, HR systems, and institutional software—like the live CRS platform at SCSIT.",
    audience: "Colleges, recruiters, and operations-heavy organizations",
    stack: ["Java", "MySQL", "React", "Node.js", "PHP"],
  },
];

import { socialLinks } from "@/lib/data/socialLinks";

const SITE_URL = "https://abnjain.me";

export const personProfile = {
  name: "Abhinav Jain",
  alternateName: "abnjain",
  url: SITE_URL,
  image: `${SITE_URL}/abhinavjain.png`,
  location: {
    city: "Indore",
    region: "Madhya Pradesh",
    country: "IN",
    countryName: "India",
  },
  summaryOneLine:
    "Abhinav Jain (abnjain) is a full-stack developer, web designer, and IT consultant from Indore, India, building production MERN apps, SEO-driven sites, and cloud-ready systems.",
  summaryParagraph:
    "Abhinav Jain (abnjain) is a Full Stack Developer, Web Designer, SEO Specialist, Cloud Developer, and DevOps Engineer based in Indore, Madhya Pradesh, India. He designs and ships scalable web applications with React, Next.js, Node.js, and TypeScript—from college platforms and client websites to games and internal tools. Available for freelance, contract, and full-time opportunities worldwide.",
  jobTitles: [
    "Full Stack Developer",
    "Web Designer",
    "SEO Specialist",
    "Cloud Developer",
    "DevOps Engineer",
    "Entrepreneur",
  ],
  knowsAbout: [
    "Web Development",
    "MERN Stack",
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Express.js",
    "System Design",
    "SEO",
    "Cloud Computing",
    "AWS",
    "Google Cloud Platform",
    "DevOps",
    "Docker",
    "Kubernetes",
    "PHP",
    "WordPress",
    "Java",
  ],
  availability: "Freelance, contract, and full-time — remote or on-site in India",
  contact: {
    email: "abnjain25@gmail.com",
    hirePath: "/#contact",
    resumePath: "/resume.pdf",
  },
  sameAs: socialLinks.filter((l) => l.external).map((l) => l.href),
} as const;

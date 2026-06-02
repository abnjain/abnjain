import type { ProjectTab, ProjectTabContent, ProjectTabId } from "@/types/home";

export const projectTabs: ProjectTab[] = [
  { id: "product", label: "Product" },
  { id: "engineering", label: "Engineering" },
  { id: "branding", label: "Branding" },
  { id: "concepts", label: "Concepts" },
  { id: "selected", label: "Selected" },
];

export const homeProjectsData: Record<ProjectTabId, ProjectTabContent> = {
  product: {
    description:
      "Central Repository System (CRS) — a live college platform managing all departments in one place. End-to-end product design with user-centric workflows and scalable architecture.",
    image: "/Images/crs.png",
    alt: "Central Repository System — live college management platform by Abhinav Jain",
  },
  engineering: {
    description:
      "Robust front-end and full-stack delivery: Chess game on Heroku, Find-the-Bubble React game, Notepad webapp, and MERN stack systems built for performance and maintainability.",
    image: "/Images/Screenshot1.png",
    alt: "Chess game — live web application by Abhinav Jain",
  },
  branding: {
    description:
      "Shree Ram Tour & Travels and Kuber Group — live client sites with SEO, visual identity, and conversion-focused layouts deployed for real businesses.",
    image: "/Images/ShreeRamTour&Travels.png",
    alt: "Shree Ram Tour and Travels — live client website by Abhinav Jain",
  },
  concepts: {
    description:
      "VidhyaVardhani (VVD) education platform, Reimagined Beyond Water, and Shikshak Recruitment — exploratory products pushing UX and technical boundaries.",
    image: "/Images/VVD(VidhyaVardhani).png",
    alt: "VidhyaVardhani education platform by Abhinav Jain",
  },
  selected: {
    description:
      "A handpicked collection spanning portfolio, CRS, client deployments, games, and HR systems — combining strategic thinking with production-ready execution.",
    image: "/Images/portfolio.png",
    alt: "Abhinav Jain portfolio — selected work showcase",
  },
};

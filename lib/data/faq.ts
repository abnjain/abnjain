import type { FaqItem } from "@/types/home";
import { personProfile } from "@/lib/data/profile";
import { serviceOfferings } from "@/lib/data/services";

const serviceList = serviceOfferings.map((s) => s.name).join(", ");

export const faqData: FaqItem[] = [
  {
    id: 1,
    question: "Who is Abhinav Jain (abnjain)?",
    answer: `${personProfile.summaryParagraph} Learn more at ${personProfile.url}/about.`,
  },
  {
    id: 2,
    question: "Where is Abhinav Jain based?",
    answer: `Abhinav Jain is based in ${personProfile.location.city}, ${personProfile.location.region}, ${personProfile.location.countryName}. He works with clients across India and internationally via remote collaboration.`,
  },
  {
    id: 3,
    question: "What services does Abhinav Jain offer?",
    answer: `Abhinav Jain offers: ${serviceList}. Availability: ${personProfile.availability}.`,
  },
  {
    id: 4,
    question: "What technologies does Abhinav Jain specialize in?",
    answer: `He specializes in ${personProfile.knowsAbout.slice(0, 8).join(", ")}, and related modern web and cloud tooling including React, Next.js, Node.js, TypeScript, MongoDB, AWS, Docker, and Kubernetes.`,
  },
  {
    id: 5,
    question: "How can I hire Abhinav Jain?",
    answer: `Visit ${personProfile.url}${personProfile.contact.hirePath} to send a message via the contact form, email ${personProfile.contact.email}, or download the resume from ${personProfile.url}${personProfile.contact.resumePath}.`,
  },
  {
    id: 6,
    question: "What are Abhinav Jain's best live projects?",
    answer:
      "Notable live work includes the Central Repository System (CRS) at crs.abnjain.me, client sites such as shreeramtourandtravel.in and kgstocks.in, education platform vvdlive.com, and apps like chess.abnjain.me and notepad.abnjain.me. Full list at https://abnjain.me/projects.",
  },
  {
    id: 7,
    question: "Does Abhinav Jain do SEO and web design?",
    answer:
      "Yes. He combines technical SEO (metadata, structured data, performance) with UI/UX and responsive design—evidenced on client deployments and this portfolio's AEO/GEO-ready architecture.",
  },
  {
    id: 8,
    question: "What is your design philosophy?",
    answer:
      "Intentional minimalism: every element serves a purpose for clean, intuitive, high-performance experiences. Great design should feel invisible and work flawlessly.",
  },
  {
    id: 9,
    question: "Can you work with existing brand guidelines?",
    answer:
      "Yes. Abhinav has experience extending established brand systems while innovating within defined frameworks for consistency and quality.",
  },
  {
    id: 10,
    question: "How do you approach project management?",
    answer:
      "Agile and iterative: regular check-ins, transparent progress, and collaborative problem-solving so stakeholders stay aligned from discovery through deployment.",
  },
];

import type { ReactNode } from "react";
import {
  generatePageMetadata,
  getProfilePageSchema,
  getBreadcrumbSchema,
  buildGraph,
} from "@/lib/seo";
import { JsonLdGraph } from "@/components/seo/JsonLdGraph";
import { personProfile } from "@/lib/data/profile";

export const metadata = generatePageMetadata({
  title: "About Abhinav Jain (abnjain) | Full Stack Developer, Designer & Entrepreneur",
  description:
    "Learn about Abhinav Jain (abnjain) — Full Stack Developer, Web Designer, SEO Specialist, Cloud Developer, DevOps Engineer & Entrepreneur from Indore, India. Explore his expertise in MERN Stack, system design, AWS, and his professional experience.",
  path: "/about",
  keywords: [
    "About Abhinav Jain (abnjain)",
    "Abhinav Jain (abnjain) Developer",
    "Full Stack Developer Indore",
    "MERN Stack Developer India",
    "Developer Experience",
    "IT Professional Indore",
    "Software Engineer Background India",
    "Cloud Developer India",
    "DevOps Engineer Indore",
    "SEO Specialist India",
    "System Designer India",
    "Entrepreneur India",
    "abnjain Portfolio",
    "abnjain"
  ],
});

const aboutSchema = buildGraph(
  getProfilePageSchema(),
  getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]),
);

type Experience = {
  side: "left" | "right";
  title: string;
  period: string;
  description: ReactNode;
};

const expertise: string[] = [
  "Frontend Development entails crafting user-friendly interfaces with JavaScript, HTML5, CSS3, Bootstrap, and jQuery.",
  "Incorporating React and Next.js enhances development by enabling dynamic UIs and optimizing performance.",
  "Backend Development with Node.js and Express.js involves creating server-side logic and APIs for web applications.",
  "API Designing for mobile apps and websites involves creating streamlined interfaces for seamless communication between clients and servers.",
  "Frontend Designing with Bootstrap, React.js, and Next.js involves creating responsive, dynamic user interfaces with reusable components and optimized performance.",
  "SQL and NoSQL database management systems efficiently organize, store, and retrieve data, meeting diverse needs and scalability demands in modern applications.",
  "AWS and Google Cloud Platform provide scalable and secure cloud infrastructure services for efficient application deployment and management.",
  "Proficient in PHP and WordPress, I build dynamic websites and content management systems tailored for user engagement.",
  "Experienced in SEO strategies to enhance website visibility and drive organic traffic through optimized content and metadata.",
];

const experiences: Experience[] = [
  {
    side: "left",
    title: "Web Development Projects",
    period: "Ongoing",
    description: (
      <>
        Developed dynamic websites like{" "}
        <a
          className="text-accent hover:uppercase"
          href="https://dogcyclopedia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          dogcyclopedia.com
        </a>{" "}
        using PHP and WordPress, optimizing them for SEO to enhance visibility and user
        engagement.
      </>
    ),
  },
  {
    side: "right",
    title: "TalentOla Solutions Pvt. Ltd.",
    period: "February 2024 - April 2024",
    description:
      "A recruiting company where I learned how companies recruit candidates and how ATS systems function.",
  },
  {
    side: "left",
    title: "Continuum Global Solutions",
    period: "January 2024 - February 2024",
    description:
      "Worked as Assoc. II Customer Care in a BPO MNC, improving communication skills and understanding of the American region.",
  },
  {
    side: "right",
    title: "Malwa Institute of Science and Technology",
    period: "August 2023 - October 2023",
    description: (
      <>
        Acquired teaching skills and developed a live project integrating MySQL, Java, and Web
        Design —{" "}
        <a
          className="text-accent hover:uppercase"
          href="https://kgstocks.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kuber Group
        </a>
        .
      </>
    ),
  },
  {
    side: "left",
    title: "Quintus Tech Pvt. Ltd.",
    period: "June 2023 - August 2023",
    description: (
      <>
        Gained experience in JavaScript and API development, creating APIs like{" "}
        <a
          className="text-custom-fireOpal hover:uppercase"
          href="https://github.com/abnjain/Nodemailer_API"
          target="_blank"
          rel="noopener noreferrer"
        >
          nodemailerAPI
        </a>
        ,{" "}
        <a
          className="text-accent hover:uppercase"
          href="https://github.com/abnjain/encryption_decryption"
          target="_blank"
          rel="noopener noreferrer"
        >
          encryption_decryption (of BBPS)
        </a>
        , and{" "}
        <a
          className="text-accent hover:uppercase"
          href="https://github.com/abnjain/hospitalAPI"
          target="_blank"
          rel="noopener noreferrer"
        >
          hospitalAPI
        </a>
        . Built backends with Node.js and gained proficiency in Angular.
      </>
    ),
  },
  {
    side: "right",
    title: "IMC (Indore Municipal Corporation)",
    period: "April 2023 - June 2023",
    description:
      "Enhanced technical background at AICTSL (Atal Indore City Transport Service Ltd.) and devised operational plans for city transport.",
  },
  {
    side: "left",
    title: "Samyak Classes",
    period: "January 2023 - April 2023",
    description: (
      <>
        Developed a comprehensive project integrating MySQL, Java, and Web Design —{" "}
        <a
          className="text-accent hover:uppercase"
          href="https://github.com/abnjain/hospitalAPI"
          target="_blank"
          rel="noopener noreferrer"
        >
          shikshakRecruitment
        </a>
        .
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLdGraph schema={aboutSchema} />
      <main>
        <h1 className="m-8 mt-10 text-center text-3xl font-bold tracking-wide text-text">
          About <span className="text-accent">ME</span>
        </h1>

        <div className="mx-auto mb-10 max-w-3xl rounded-card border border-text/10 bg-surface/80 p-6 text-center shadow-soft">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            In short
          </h2>
          <p className="mt-4 leading-relaxed text-text">{personProfile.summaryParagraph}</p>
        </div>

        <section className="expert m-2 text-center">
          <h2 className="m-6 text-lg text-text">
            As a seasoned full-stack developer, I specialize in building web applications and
            services.
            <br className="hidden md:block" />
            I&apos;m also skilled in creating animations that elevate user experience through
            dynamic interfaces.
          </h2>

          <hr className="mx-auto mb-3 w-2/3 opacity-20" />

          <h3 className="m-4 mt-3 text-xl font-semibold text-text">
            My <span className="text-accent">expertise</span> includes:
          </h3>

          <ul className="expertise space-y-2 text-center text-base">
            {expertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <a
            className="mt-6 inline-block rounded-full border border-solid px-4 py-2 text-lg text-accent transition hover:uppercase"
            href="/resume.pdf"
            download="Abhinav_Jain_Resume.pdf"
          >
            View Resume
          </a>

          <hr className="mx-auto mb-3 mt-6 w-2/3 opacity-20" />

          <h3 className="m-4 mt-3 text-xl font-semibold text-text">Experience:</h3>
          <p className="many text-muted">Many more works ahead</p>

          <ul className="mt-6">
            {experiences.map((exp) => (
              <li
                key={exp.title}
                className={`${exp.side} m-3 text-left text-sm md:text-base`}
              >
                <span className="title text-lg font-medium text-text">{exp.title}</span>
                <hr className={`m-1 ${exp.side === "left" ? "lineL" : "lineR"}`} />
                <p className="font-light italic text-muted">{exp.period}</p>
                <p className="mt-1 text-text">{exp.description}</p>
              </li>
            ))}
          </ul>

          <p className="start text-muted">start</p>
        </section>
      </main>
    </>
  );
}

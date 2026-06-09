import Image from "next/image";
import Link from "next/link";
import {
  generatePageMetadata,
  getProjectsSchema,
  getBreadcrumbSchema,
  buildGraph,
} from "@/lib/seo";
import { JsonLdGraph } from "@/components/seo/JsonLdGraph";
import { portfolioProjects } from "@/lib/data/projects";
import { personProfile } from "@/lib/data/profile";
import { imageAlt } from "@/lib/seo/imageAlt";

export const metadata = generatePageMetadata({
  title: "Projects | Abhinav Jain (abnjain) — Web, Cloud & System Development",
  description:
    "Explore projects by Abhinav Jain (abnjain) — Full Stack Developer, System Designer, Cloud Developer & SEO Specialist from Indore, India. Live web apps, MERN stack projects, chess game, HR systems, and more.",
  path: "/projects",
  keywords: [
    "Web Development Projects",
    "MERN Stack Projects",
    "Full Stack Projects India",
    "React.js Projects",
    "Node.js Projects",
    "Cloud Projects India",
    "System Design Projects",
    "DevOps Projects",
    "SEO Projects India",
    "CRS Project",
    "Portfolio Projects Abhinav Jain",
    "abnjain Portfolio",
    "abnjain"
  ],
});

const projectsIntro = `${personProfile.name} (${personProfile.alternateName}) has shipped live products including the Central Repository System (CRS), client websites, education platforms, games, and internal tools. Each project below links to a case study with problem, solution, and tech stack.`;

export default function ProjectsPage() {
  const schema = buildGraph(
    getProjectsSchema(portfolioProjects),
    getBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
    ]),
  );

  return (
    <>
      <JsonLdGraph schema={schema} />
      <main className="m-1 mt-3 flex min-h-max justify-center py-8">
        <div className="max-w-7xl items-center justify-center px-4">
          <h1 className="text-center text-3xl font-bold text-text">
            Projects I <span className="text-accent">Developed</span> and{" "}
            <span className="text-accent">Designed</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted">
            {projectsIntro}
          </p>

          <div className="no-scrollbar m-6 mt-10 flex h-fit flex-wrap justify-center gap-16 overflow-hidden rounded-xl border-2 border-text/10 px-4 py-10 shadow-soft">
            {portfolioProjects.map((project) => (
              <article
                key={project.slug}
                className="group relative h-96 w-72 overflow-hidden rounded-3xl"
              >
                {project.img ? (
                  <Image
                    src={project.img}
                    alt={imageAlt(`${project.name} — ${project.desc} | abnjain project`)}
                    className="h-full w-full rounded-3xl object-cover"
                    width={500}
                    height={300}
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br from-accent-muted to-bg"
                    role="img"
                    aria-label={imageAlt(`${project.name} — preview coming soon`)}
                  >
                    <span className="px-4 text-center text-sm text-muted">
                      Preview coming soon
                    </span>
                  </div>
                )}
                <Link
                  href={`/projects/${project.slug}`}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-transparent transition-all duration-300 group-hover:backdrop-blur"
                  aria-label={`${project.name} case study`}
                >
                  <span
                    className={`rounded-3xl px-3 text-center text-xl transition-all duration-300 ${project.textColor ?? "text-text"} group-hover:px-12`}
                  >
                    {project.name}
                  </span>
                  <span className="mt-2 text-xs text-muted opacity-0 transition group-hover:opacity-100">
                    View case study
                  </span>
                </Link>
                {project.link.startsWith("http") &&
                  project.slug !== "portfolio" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100"
                    >
                      Live demo
                    </a>
                  )}
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

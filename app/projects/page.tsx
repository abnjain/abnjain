import Image from "next/image";
import { generatePageMetadata, getProjectsSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { portfolioProjects } from "@/lib/data/projects";

export const metadata = generatePageMetadata({
  title: "Projects | Abhinav Jain — Web, Cloud & System Development",
  description:
    "Explore projects by Abhinav Jain — Full Stack Developer, System Designer, Cloud Developer & SEO Specialist from Indore, India. Live web apps, MERN stack projects, chess game, HR systems, and more.",
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
  ],
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd schema={getProjectsSchema(portfolioProjects)} />
      <main className="m-1 mt-3 flex min-h-max justify-center py-8">
        <div className="items-center justify-center">
          <h1 className="text-center text-3xl font-bold text-text">
            Projects I <span className="text-accent">Developed</span> and{" "}
            <span className="text-accent">Designed</span>
          </h1>

          <div className="no-scrollbar m-6 mt-10 flex h-fit max-w-7xl flex-wrap justify-center gap-16 overflow-hidden rounded-xl border-2 border-text/10 px-4 py-10 shadow-soft">
            {portfolioProjects.map((project) => (
              <div
                key={project.name}
                className="group relative h-96 w-72 overflow-hidden rounded-3xl"
              >
                {project.img ? (
                  <Image
                    src={project.img}
                    alt={`${project.name} — ${project.desc} | Project by Abhinav Jain`}
                    className="h-full w-full rounded-3xl object-cover"
                    width={500}
                    height={300}
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br from-accent-muted to-bg"
                    role="img"
                    aria-label={`${project.name} — ${project.desc} | Project by Abhinav Jain (preview coming soon)`}
                  >
                    <span className="px-4 text-center text-sm text-muted">
                      Preview coming soon
                    </span>
                  </div>
                )}
                <a
                  href={project.link}
                  target={project.name === "PORTFOLIO" ? "_self" : "_blank"}
                  rel={project.name === "PORTFOLIO" ? undefined : "noopener noreferrer"}
                  className="absolute inset-0 flex items-center justify-center bg-transparent transition-all duration-300 group-hover:backdrop-blur"
                  title={project.desc}
                  aria-label={`${project.name} — ${project.desc}`}
                >
                  <span
                    className={`rounded-3xl px-3 text-center text-xl transition-all duration-300 ${project.textColor ?? ""} group-hover:px-12`}
                  >
                    {project.name}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

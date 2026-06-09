import {
  generatePageMetadata,
  getBreadcrumbSchema,
  buildGraph,
} from "@/lib/seo";
import { JsonLdGraph } from "@/components/seo/JsonLdGraph";

export const metadata = generatePageMetadata({
  title: "Blogs | Abhinav Jain (abnjain) — Developer, Designer & IT Solutionist",
  description:
    "Blogs and articles by Abhinav Jain (abnjain) on Web Development, System Design, SEO, Cloud Computing, DevOps, and Entrepreneurship. Insights from a Full Stack Developer in Indore, India.",
  path: "/blogs",
  keywords: [
    "Developer Blog India",
    "Web Development Blog",
    "System Design Blog",
    "SEO Blog",
    "Cloud Computing Blog",
    "DevOps Blog India",
    "Tech Blog Abhinav Jain",
    "JavaScript Blog India",
    "React Blog",
    "Node.js Blog",
    "Entrepreneurship Blog India",
    "abnjain Portfolio",
    "abnjain"
  ],
});

const blogsSchema = buildGraph(
  getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
  ]),
);

export default function BlogsPage() {
  return (
    <>
      <JsonLdGraph schema={blogsSchema} />
      <main className="flex min-h-max items-center justify-center p-24 font-bold">
        <div className="text-4xl text-text">
          <h1>
            Blogs by <span className="text-accent">abnjain</span>
          </h1>
          <p className="mt-4 text-base font-normal text-muted">
            Articles by Abhinav Jain (abnjain) coming soon.
          </p>
        </div>
      </main>
    </>
  );
}

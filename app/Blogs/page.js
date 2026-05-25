import React from "react";
import { generatePageMetadata } from "@/Components/SEO";

export const metadata = generatePageMetadata({
  title:       "Blogs | Abhinav Jain — Developer, Designer & IT Solutionist",
  description:
    "Blogs and articles by Abhinav Jain on Web Development, System Design, SEO, Cloud Computing, DevOps, and Entrepreneurship. Insights from a Full Stack Developer in Indore, India.",
  path:        "/Blogs",
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
  ],
});

const Blog = () => {
  return (
    <main className="flex min-h-max items-center justify-center font-bold p-24">
      <div className=" text-4xl">
      <h1>Blogs Page</h1>
      </div>
    </main>
  )
}

export default Blog;
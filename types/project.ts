export type PortfolioProject = {
  slug: string;
  name: string;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  img: string;
  link: string;
  desc: string;
  textColor?: string;
  gitlink?: string;
  repoUrl?: string;
  metrics?: string[];
};

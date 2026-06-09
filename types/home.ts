export type ShowcaseSlide = {
  id: number;
  image: string;
  title: string;
  alt: string;
};

export type ProjectTabId =
  | "product"
  | "engineering"
  | "branding"
  | "concepts"
  | "selected";

export type ProjectTab = {
  id: ProjectTabId;
  label: string;
};

export type ProjectTabContent = {
  description: string;
  image: string;
  alt: string;
};

export type Testimonial = {
  id: number;
  quote: string;
  author: string;
  role: string;
};

export type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

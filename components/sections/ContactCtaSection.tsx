"use client";

import { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { ContactModal } from "@/components/ui/ContactModal";
import type { ContactFormData } from "@/types/home";

const EMAILJS_SERVICE = "service_zln2j7l";
const EMAILJS_TEMPLATE = "template_tmjormr";
const EMAILJS_PUBLIC_KEY = "RTOt4G16KUG0gULNa";

export function ContactCtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sendEmail = (formData: ContactFormData) => {
    const templateParams = {
      ...formData,
      sender_email: formData.email,
    };
    emailjs
      .send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, templateParams, EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          alert("Email successfully sent!");
          setIsModalOpen(false);
        },
        () => {
          alert("Failed to send email, please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="scroll-mt-28 px-4 py-24" aria-label="Contact Abhinav Jain (abnjain)">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10">
        <div className="flex flex-col items-center justify-center gap-10 sm:flex-row md:gap-24">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="btn-cta-shadow rounded-3xl bg-gradient-to-br from-accent to-accent-muted px-4 py-3 text-center text-white shadow-2xl transition-all duration-100 hover:scale-100 hover:shadow-none sm:hover:scale-125"
          >
            Hire Me
          </button>

          <ContactModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={sendEmail}
          />

          <a
            href="/resume.pdf"
            download="Abhinav_Jain_Resume.pdf"
            className="btn-cta-shadow rounded-3xl bg-gradient-to-r from-accent to-accent-muted px-1 py-1 text-center text-white shadow-md transition-all duration-100 hover:scale-100 hover:shadow-none sm:hover:scale-125"
          >
            <span className="block rounded-3xl bg-bg px-4 py-2">Download CV</span>
          </a>
        </div>

        <p className="text-center text-lg font-bold text-text">
          Want to see my work? Visit the{" "}
          <Link href="/projects" className="text-accent hover:uppercase">
            Projects
          </Link>{" "}
          section.
        </p>
      </div>
    </section>
  );
}

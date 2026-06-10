"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";
import { ContactDirectMessageForm } from "@/components/sections/ContactDirectMessageForm";
import { contactDetails, contactPageContent } from "@/lib/data/contact";

function ContactSectionHeader({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <h2 className="mb-8 font-mono text-sm font-bold uppercase tracking-label text-muted md:text-base">
      <span className="text-accent">{index}</span>
      {" // "}
      {title}
    </h2>
  );
}

/** Dedicated contact page — inspired by portfolio contact flows, brutalist abnjain theme. */
export function ContactPageSection() {
  const { backLabel, heroLine1, heroLine2, sections } = contactPageContent;
  const [showCopyToast, setShowCopyToast] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactDetails.email);
      setShowCopyToast(true);
      window.setTimeout(() => setShowCopyToast(false), 2500);
    } catch {
      setShowCopyToast(false);
    }
  };

  return (
    <div className="border-b border-border" aria-label="Contact Abhinav Jain (abnjain)">
      <div className="mx-auto max-w-4xl px-6 py-10 md:px-10 md:py-16 lg:py-20">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-label text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <ArrowLeft className="size-4" aria-hidden />
          {backLabel}
        </Link>

        <header className="mb-16 border-b border-border pb-12 md:mb-20 md:pb-16">
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
            {heroLine1}
            <br />
            <span className="text-accent">{heroLine2}</span>
          </h1>
        </header>

        <div className="space-y-16 md:space-y-20">
          <section
            className="border border-border bg-bg p-6 shadow-brutal md:p-10"
            aria-labelledby="contact-direct-message"
          >
            <ContactSectionHeader
              index={sections.message.index}
              title={sections.message.title}
            />
            <div id="contact-direct-message">
              <ContactDirectMessageForm />
            </div>
          </section>

          <section
            className="border border-border bg-surface p-6 md:p-10"
            aria-labelledby="contact-schedule"
          >
            <ContactSectionHeader
              index={sections.schedule.index}
              title={sections.schedule.title}
            />
            <div id="contact-schedule" className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-2xl font-bold text-ink md:text-3xl">
                  {sections.schedule.ctaLabel}
                </p>
                <p className="mt-1 font-mono text-sm text-muted">
                  {contactDetails.availability}
                </p>
              </div>
              <Button
                href={contactDetails.scheduleMailto}
                variant="dark"
                size="lg"
                className="shrink-0 px-8 py-5"
              >
                {sections.schedule.ctaSubLabel}
              </Button>
            </div>
          </section>

          <section
            className="border border-border bg-bg p-6 md:p-10"
            aria-labelledby="contact-mail"
          >
            <ContactSectionHeader index={sections.mail.index} title={sections.mail.title} />
            <div
              id="contact-mail"
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <a
                href={`mailto:${contactDetails.email}`}
                className="font-mono text-xl font-bold text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:text-2xl"
              >
                {contactDetails.email}
              </a>
              <Button
                type="button"
                variant="dark"
                showArrow={false}
                onClick={handleCopyEmail}
                shellClassName="shrink-0"
                className="shrink-0 px-6 py-3"
              >
                {sections.mail.copyLabel}
              </Button>
            </div>
          </section>

          <section
            className="border border-border bg-surface p-6 md:p-10"
            aria-labelledby="contact-socials"
          >
            <ContactSectionHeader
              index={sections.socials.index}
              title={sections.socials.title}
            />
            <ul
              id="contact-socials"
              className="grid gap-3 sm:grid-cols-2"
            >
              {contactDetails.social.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-border bg-bg px-5 py-4 font-mono text-sm font-bold uppercase text-ink shadow-brutal transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {link.label}
                    <span aria-hidden className="text-accent">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <p className="mt-16 text-center font-mono text-xs uppercase tracking-label text-muted">
          {contactDetails.location}
        </p>
      </div>

      <Toast message={sections.mail.copyToastMessage} visible={showCopyToast} />
    </div>
  );
}

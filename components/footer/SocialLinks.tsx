"use client";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import type { IconType } from "react-icons";
import { socialLinks, type SocialLinkId } from "@/data/socialLinks";
import { SocialIconButton } from "@/components/footer/SocialIconButton";

/**
 * Icon map lives here (client component) — never in the data file.
 * Keeping React component references out of data/socialLinks.ts prevents
 * Next.js from trying to serialize function references in the RSC payload.
 */
const iconMap: Record<SocialLinkId, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  email: MdEmail,
};

export function SocialLinks() {
  return (
    <nav aria-label="Social links">
      <ul className="flex items-center gap-2.5">
        {socialLinks.map((link) => (
          <li key={link.id}>
            <SocialIconButton
              href={link.href}
              label={link.label}
              icon={iconMap[link.id]}
              external={link.external}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

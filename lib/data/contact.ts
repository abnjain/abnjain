import { personProfile } from "@/lib/data/profile";
import { socialLinks } from "@/lib/data/socialLinks";
import { siteBrand } from "@/lib/data/site";

export const contactPageContent = {
  backLabel: "Return to Home",
  heroLine1: "Let's build",
  heroLine2: "something great.",
  sections: {
    message: {
      index: "01",
      title: "Direct Message",
    },
    schedule: {
      index: "02",
      title: "Schedule",
      ctaLabel: "Free Consultation",
      ctaSubLabel: "Pick a Date",
      mailtoSubject: "Free Consultation — abnjain",
    },
    mail: {
      index: "03",
      title: "Mail",
      copyLabel: "Copy",
      copiedLabel: "Copied",
      copyToastMessage: "Email copied to clipboard",
    },
    socials: {
      index: "04",
      title: "Socials",
    },
  },
  form: {
    greeting: `Hi ${siteBrand.name} (${siteBrand.shortName}), my name is`,
    topicPrefix: "and I'm looking to discuss",
    emailPrefix: "You can reach me at my email here:",
    detailsPrefix: "Here are some extra details:",
    submitLabel: "Shoot Message",
    sendingLabel: "Sending...",
    successMessage: "[OK] Message sent. abnjain will respond shortly.",
  },
} as const;

export const contactDetails = {
  email: personProfile.contact.email,
  location: `${personProfile.location.city}, ${personProfile.location.region}, ${personProfile.location.countryName}`,
  availability: personProfile.availability,
  resumePath: personProfile.contact.resumePath,
  resumeFilename: "Abhinav_Jain_Resume.pdf",
  social: socialLinks.filter((link) => link.id !== "email"),
  scheduleMailto: `mailto:${personProfile.contact.email}?subject=${encodeURIComponent("Free Consultation — abnjain")}`,
} as const;

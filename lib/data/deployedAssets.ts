import type { ProjectAssetCardProps } from "@/components/ui/ProjectAssetCard";

export type DeployedAsset = Omit<
  ProjectAssetCardProps,
  "bordered" | "imageAlt" | "screenshots"
> & {
  id: string;
  imageAlt: string;
  screenshots: string[];
};

export const deployedAssetsSection = {
  title: "// 03 DEPLOYED_ASSETS",
  pageSize: 3,
  entries: [
    {
      id: "asset-001",
      assetId: "ASSET_001",
      title: "VVDx_Live Hustle Arena Kudos Tribe_V1",
      description:
        "VVDx helps students discover verified institutes, SpaceTech and AI events in Indore, and learning opportunities across India.",
      image: "/images/Images/vvdx-assets/vvdx.png",
      imageAlt: "VVD education platform preview made by Abhinav Jain (abnjain)",
      stack: ["NEXT_JS", "REACT", "SEO"],
      screenshots: [
        "/images/Images/vvdx-assets/vvdx.png",
        "/images/Images/vvdx-assets/vvdx-institutes.png",
        "/images/Images/vvdx-assets/vvdx-hustle-info.png",
        "/images/Images/vvdx-assets/vvdx-hustle.png",
        "/images/Images/vvdx-assets/vvdx-kudos.png",
        "/images/Images/vvdx-assets/vvdx-kudos-flipped.png",
        "/images/Images/vvdx-assets/vvdx-kudos-info.png",
        "/images/Images/vvdx-assets/vvdx-tribe.png",
        "/images/Images/vvdx-assets/vvdx-target.png",
      ],
      href: "https://vvdx.in/",
    },
    {
      id: "asset-002",
      assetId: "ASSET_002",
      title: "India USA Trade Facilitation Portal",
      description:
        "A comprehensive B2B platform designed to streamline trade between India and the USA, offering a range of services including export, import, and trade facilitation.",
      image: "/images/Images/cgi-assets/cgi.png",
      imageAlt: "India USA trade facilitation portal preview made by Abhinav Jain (abnjain)",
      stack: ["REACT_JS", "NODE_JS", "TYPESCRIPT", "REDIS", "POSTGRES", "DOCKER", "KUBERNETES"],
      screenshots: [
        "/images/Images/cgi-assets/cgi.png",
        "/images/Images/cgi-assets/cgi-about.png",
        "/images/Images/cgi-assets/cgi-events.png",
        "/images/Images/cgi-assets/cgi-exporters.png",
        "/images/Images/cgi-assets/cgi-faq.png",
        "/images/Images/cgi-assets/cgi-importers.png",
        "/images/Images/cgi-assets/cgi-vocal.png",
      ],
      href: "https://indiausatrade.mea.gov.in/",
    },
    {
      id: "asset-003",
      assetId: "ASSET_003",
      title: "SCSIT Website",
      description:
        "The official online portal for the School of Computer Science & Information Technology at Devi Ahilya Vishwavidyalaya (DAVV), Indore.",
      image: "/images/Images/scsit-assets/scsit.png",
      imageAlt: "SCSIT DAVV website preview made by Abhinav Jain (abnjain)",
      stack: ["PHP", "MYSQL", "JAVASCRIPT", "CSS", "HTML", "LARAVEL"],
      screenshots: [
        "/images/Images/scsit-assets/scsit.png",
        "/images/Images/scsit-assets/scsit-campus.png",
        "/images/Images/scsit-assets/scsit-dev.png",
        "/images/Images/scsit-assets/scsit-events.png",
        "/images/Images/scsit-assets/scsit-magzine.png",
        "/images/Images/scsit-assets/scsit-placements.png",
      ],
      href: "https://scs.dauniv.ac.in/",
    },
    {
      id: "asset-004",
      assetId: "ASSET_004",
      title: "CRS for SCSIT",
      description:
        "CRS is a central repository system for the SCSIT DAVV, Indore. It is a centralized repository to manage the staff, documents, and other information of the college.",
      image: "/images/Images/crs-assets/crs.png",
      imageAlt: "CRS central repository system preview made by Abhinav Jain (abnjain)",
      stack: ["NEXT_JS", "REACT_JS", "TYPESCRIPT", "REDIS", "MONGODB", "DOCKER", "KUBERNETES"],
      screenshots: [
        "/images/Images/crs-assets/crs.png",
        "/images/Images/crs-assets/crs-login.png",
        "/images/Images/crs-assets/crs-library.png",
        "/images/Images/crs-assets/crs-events.png",
        "/images/Images/crs-assets/crs-register-light.png",
        "/images/Images/crs-assets/crs-offers.png",
        "/images/Images/crs-assets/crs-register.png",
        "/images/Images/crs-assets/crs-events-light.png",
      ],
      href: "https://crs.abnjain.me/",
    },
    {
      id: "asset-005",
      assetId: "ASSET_005",
      title: "Advit Hub",
      description:
        "An education-first innovation ecosystem where students learn real skills, build real products, and grow into industry-ready professionals through live projects and placements.",
      image: "/images/Images/advit-assets/advit.png",
      imageAlt: "Advit Hub education platform preview made by Abhinav Jain (abnjain)",
      stack: ["NEXT_JS", "REACT", "TYPESCRIPT", "TAILWIND", "NODE_JS"],
      screenshots: [
        "/images/Images/advit-assets/advit.png",
        "/images/Images/advit-assets/advit-book.png",
        "/images/Images/advit-assets/advit-contact.png",
        "/images/Images/advit-assets/advit-flipbook.png",
        "/images/Images/advit-assets/advit-journey.png",
        "/images/Images/advit-assets/advit-placements.png",
        "/images/Images/advit-assets/advit-skills.png",
      ],
      href: "https://advithub.vercel.app/",
    },
    {
      id: "asset-006",
      assetId: "ASSET_006",
      title: "Shree Ram Tours & Travels",
      description:
        "A car and bus rental service in Indore offering city transfers, airport transfers, wedding ceremonies, and full-city tour packages at competitive prices.",
      image: "/images/Images/stt-assets/stt.png",
      imageAlt: "Shree Ram Tours and Travels website preview made by Abhinav Jain (abnjain)",
      stack: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"],
      screenshots: [
        "/images/Images/stt-assets/stt.png",
        "/images/Images/stt-assets/stt-services.png",
        "/images/Images/stt-assets/stt-cars.png",
        "/images/Images/stt-assets/stt-blogs.png",
      ],
      href: "https://shreeramtourandtravel.in/",
    },
  ] satisfies DeployedAsset[],
} as const;

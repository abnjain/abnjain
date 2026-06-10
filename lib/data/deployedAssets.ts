import type { ProjectAssetCardProps } from "@/components/ui/ProjectAssetCard";

export type DeployedAsset = Omit<
  ProjectAssetCardProps,
  "bordered" | "imageAlt"
> & {
  id: string;
  imageAlt: string;
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
      image: "/images/Images/vvdx.png",
      imageAlt: "VVD education platform preview made by Abhinav Jain (abnjain)",
      stack: ["NEXT_JS", "REACT", "SEO"],
      href: "https://vvdx.in/",
    },
    {
      id: "asset-002",
      assetId: "ASSET_002",
      title: "India USA Trade Facilitation Portal",
      description:
        "A comprehensive B2B platform designed to streamline trade between India and the USA, offering a range of services including export, import, and trade facilitation.",
      image: "/images/Images/cgi.png",
      imageAlt: "India USA trade facilitation portal preview made by Abhinav Jain (abnjain)",
      stack: ["REACT_JS", "NODE_JS", "TYPESCRIPT", "REDIS", "POSTGRES", "DOCKER", "KUBERNETES"],
      href: "https://indiausatrade.mea.gov.in/",
    },
    {
      id: "asset-003",
      assetId: "ASSET_003",
      title: "SCSIT Website",
      description:
        "The official online portal for the School of Computer Science & Information Technology at Devi Ahilya Vishwavidyalaya (DAVV), Indore.",
      image: "/images/Images/scsit.png",
      imageAlt: "SCSIT DAVV website preview made by Abhinav Jain (abnjain)",
      stack: ["PHP", "MYSQL", "JAVASCRIPT", "CSS", "HTML", "LARAVEL"],
      href: "https://scs.dauniv.ac.in/",
    },
    {
      id: "asset-004",
      assetId: "ASSET_004",
      title: "CRS for SCSIT",
      description:
        "CRS is a central repository system for the SCSIT DAVV, Indore. It is a centralized repository to manage the staff, documents, and other information of the college.",
      image: "/images/Images/crs.png",
      imageAlt: "CRS central repository system preview made by Abhinav Jain (abnjain)",
      stack: ["NEXT_JS", "REACT_JS", "TYPESCRIPT", "REDIS", "MONGODB", "DOCKER", "KUBERNETES"],
      href: "https://crs.abnjain.me/",
    },
  ] satisfies DeployedAsset[],
} as const;

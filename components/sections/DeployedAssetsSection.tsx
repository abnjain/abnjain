"use client";

import { useState } from "react";
import { ProjectAssetCard } from "@/components/ui/ProjectAssetCard";
import { SectionBand } from "@/components/ui/SectionBand";
import { deployedAssetsSection } from "@/lib/data/deployedAssets";

/** Figma PROJECTS SECTION (43:91) — deployed assets grid with optional paging. */
export function DeployedAssetsSection() {
  const { title, pageSize, entries } = deployedAssetsSection;
  const [page, setPage] = useState(0);

  const maxPage = Math.max(0, Math.ceil(entries.length / pageSize) - 1);
  const visible = entries.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <section
      id="work"
      className="border-b border-border bg-bg md:flex md:h-screen md:flex-col"
      aria-label="Deployed assets"
    >
      <SectionBand
        variant="light"
        title={title}
        showNav
        onPrev={page > 0 ? () => setPage((current) => current - 1) : undefined}
        onNext={
          page < maxPage ? () => setPage((current) => current + 1) : undefined
        }
      />

      <div className="grid min-h-0 flex-1 md:grid-cols-3">
        {visible.map((entry, index) => (
          <ProjectAssetCard
            key={entry.id}
            assetId={entry.assetId}
            title={entry.title}
            description={entry.description}
            image={entry.image}
            imageAlt={entry.imageAlt}
            stack={[...entry.stack]}
            href={entry.href}
            screenshots={entry.screenshots}
            bordered={index > 0}
          />
        ))}
      </div>
    </section>
  );
}

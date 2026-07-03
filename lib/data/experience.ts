export type ExperienceEntry = {
  period: string;
  title: string;
  company: string;
  project: string;
  metric: string;
};

export const experienceSection = {
  title: "// 02 SYSTEM_LOG",
  badge: "HISTORY_DECRYPTED",
  entries: [
    {
      period: "2024 — NOW",
      title: "Architect / CO-FOUNDER",
      company: "VVD VIDYAVARDHANI PRIVATE LIMITED",
      project: "INFRASTRUCTURE_BUILD_v1",
      metric: "[ SCALED_TO_100K_USERS ]",
    },
    {
      period: "2022 — 2024",
      title: "FREELANCING",
      company: "SELF-EMPLOYED",
      project: "CLOUD_ORCHESTRATION",
      metric: "[ ZERO_DOWNTIME_POLICY ]",
    },
    // {
    //   period: "2020 — 2026",
    //   title: "LEAD ARCHITECT",
    //   company: "MONOLITH_APPS",
    //   project: "MICROSERVICES_DECOUPLE",
    //   metric: "[ PERFORMANCE_OPTIM_300% ]",
    // },
  ] satisfies ExperienceEntry[],
} as const;

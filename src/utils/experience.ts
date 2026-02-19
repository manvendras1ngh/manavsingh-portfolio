import type { Experience } from "./types";

export const experience: Experience[] = [
  {
    id: 1,
    company: "iipmaps",
    role: "Full Stack Engineer",
    period: "September 2024 - Present",
    description: [
      "Improved overall application performance by **~10%** through bundle optimization, lazy loading, code splitting, and chunking, reducing the initial build from **6 MB+ to chunks under 100 KB** each, resulting in faster load times and smoother navigation.",
      "Eliminated **~3 MB gzipped / ~8 MB** of heavy unused dependencies including large country/state/city and design/confetti libraries, carefully preserving UX while significantly improving bundle efficiency and runtime speed.",
      "Optimized server-state handling using **TanStack Query** and implemented universal **role-based authentication** with custom claims, reducing redundant authorization checks, improving UI responsiveness, and contributing to better user retention.",
      "Enhanced React rendering performance via **memoization strategies** (useMemo, useCallback), improving responsiveness across critical user workflows.",
      "Designed, built, and led development of the **admin analytics dashboard** and new editor architecture using advanced data visualizations (Recharts, visx), improving operational visibility and retention.",
      "Architected and implemented a **credits-based monetization system** end-to-end, increasing platform revenue by **~30%**.",
      "Owned the system **end-to-end** across deployment, CI/CD, infrastructure, and monitoring, managing pull requests, resolving pipeline failures, and ensuring stable production releases.",
      "Planned **SEO-driven organic growth** initiatives (blog-based acquisition and future monetization models) to expand long-term revenue channels.",
    ],
  },
  {
    id: 2,
    company: "Prodocs Solutions Pvt Ltd.",
    role: "Jr. Developer",
    period: "February 2023 - August 2024",
    description: [
      "Developed new features and functionalities, improving **user experience** and **website performance**.",
      "Collaborated with **cross-functional teams** to troubleshoot and resolve technical issues.",
    ],
  },
];

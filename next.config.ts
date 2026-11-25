import type { NextConfig } from "next";

const htmlRedirects: Record<string, string> = {
  index: "/",
  products: "/machinery",
  solutions: "/solutions",
  services: "/services",
  about: "/about",
  insight: "/insight",
  contact: "/quote",
};

const solutionSlugs = [
  "bottled-water-production-line",
  "carbonated-drink-production-line",
  "barrel-water-production-line",
  "dairy-milk-production-line",
  "juice-production-line",
  "plastic-injection-cap-compression-machines",
  "edible-oil-filling-machines",
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...Object.entries(htmlRedirects).map(([oldPath, destination]) => ({
        source: `/${oldPath}.html`,
        destination,
        permanent: false,
      })),
      { source: "/products", destination: "/machinery", permanent: false },
      ...solutionSlugs.map((slug) => ({
        source: `/${slug}`,
        destination: `/solutions/${slug}`,
        permanent: false,
      })),
    ];
  },
};

export default nextConfig;

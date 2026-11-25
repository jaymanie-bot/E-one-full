import { redirect } from "next/navigation";

const legacySolutions: Record<string, string> = {
  "bottled-water": "bottled-water-production-line",
  carbonated: "carbonated-drink-production-line",
  "barrel-water": "barrel-water-production-line",
  dairy: "dairy-milk-production-line",
  juice: "juice-production-line",
  "edible-oil": "edible-oil-filling-machines",
  "plastic-injection": "plastic-injection-cap-compression-machines",
};

export default async function LegacyProduct({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;
  const slug = product ? legacySolutions[product] : undefined;
  redirect(slug ? `/solutions/${slug}` : "/solutions");
}

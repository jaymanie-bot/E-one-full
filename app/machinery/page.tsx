import Catalogue from "./catalogue";
export const metadata = { title: "Machinery catalogue" };

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ range?: string | string[]; q?: string | string[] }>;
}) {
  const { range, q } = await searchParams;
  return (
    <Catalogue
      range={typeof range === "string" ? range : ""}
      query={typeof q === "string" ? q : ""}
    />
  );
}

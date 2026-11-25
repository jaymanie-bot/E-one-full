import { majorSolutions, solutionBySlug } from "./catalogue-data";

export function LineCards({ slugs = majorSolutions }: { slugs?: string[] }) {
  const selection = slugs.map(solutionBySlug).filter((solution) => solution !== undefined);

  return (
    <div className="cards linecards">
      {selection.map((solution) => (
        <a key={solution.slug} className="family" href={`/solutions/${solution.slug}`}>
          <div className="photo"><img src={solution.image} alt="" loading="lazy" /></div>
          <div className="cardHead"><h3>{solution.title}</h3></div>
          <p>{solution.summary}</p>
        </a>
      ))}
    </div>
  );
}

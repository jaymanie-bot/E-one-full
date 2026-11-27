import { ArrowRight, Search } from "lucide-react";
import { machineCategories, machineCategoryLabels, machines } from "../catalogue-data";
import { machineGuides } from "../machine-guides";
import { MachinePicture } from "../machine-picture";

export default function Catalogue({ range, query }: { range: string; query: string }) {
  const category = machineCategories.find((name) =>
    name.toLowerCase() === range.toLowerCase() || machineCategoryLabels[name].toLowerCase() === range.toLowerCase()
  ) ?? "All machines";

  const search = query.trim().toLowerCase();
  const results = machines.filter((machine) => {
    const inCategory = category === "All machines" || machine.category === category;
    const guide = machineGuides[machine.slug];
    const searchable = [
      machine.title,
      machineCategoryLabels[machine.category],
      machine.summary,
      ...machine.features,
      ...(machine.specs ?? []).map(({ label, value }) => `${label} ${value}`),
      guide.application,
      ...Object.values(guide.sizing),
      ...(guide.table?.rows.flat() ?? []),
    ].join(" ").toLowerCase();
    return inCategory && (!search || searchable.includes(search));
  });

  const filterUrl = (range: string) => {
    const params = new URLSearchParams();
    if (range !== "All Machines") params.set("range", range);
    if (search) params.set("q", query.trim());
    return params.size ? `/machinery?${params}` : "/machinery";
  };

  return (
    <main id="main" className="wrap inner">
      <a className="back" href="/">Home /</a>
      <div className="eyebrow"><i />EQUIPMENT DIRECTORY</div>
      <h1>Machinery catalogue<span>.</span></h1>
      <p className="lede">Browse {machines.length} machines by category, application or model. Open a machine to compare specifications and prepare your enquiry.</p>

      <div className="catalogue-tools">
        <form action="/machinery" method="get" className="search catalogue-search" role="search">
          {category !== "All machines" && <input type="hidden" name="range" value={machineCategoryLabels[category]} />}
          <Search size={19} aria-hidden="true" />
          <input
            name="q"
            type="search"
            defaultValue={query}
            placeholder="Search by machine, process or feature"
            aria-label="Search machinery"
          />
          <button type="submit">Search</button>
        </form>
        {search && <a className="textlink" href={category === "All machines" ? "/machinery" : `/machinery?range=${encodeURIComponent(machineCategoryLabels[category])}`}>Clear search</a>}
        <small aria-live="polite">{results.length} {results.length === 1 ? "machine" : "machines"}</small>
      </div>

      <div className="filters" aria-label="Filter machinery by category">
        {machineCategories.map((name) => (
          <a
            aria-current={name === category ? "page" : undefined}
            href={filterUrl(machineCategoryLabels[name])}
            key={name}
          >
            {machineCategoryLabels[name]}
          </a>
        ))}
      </div>

      <div className="machine-grid">
        {results.map((machine) => (
          <article className="machine-card" key={machine.slug}>
            <a className="machine-image" href={`/product/${machine.slug}`} aria-label={`View ${machine.title}`}>
              <MachinePicture image={machine.image} title={machine.title} />
            </a>
            <div className="machine-card-body">
              <div className="eyebrow">{machineCategoryLabels[machine.category]}</div>
              <h2><a href={`/product/${machine.slug}`}>{machine.title}</a></h2>
              <p>{machine.summary}</p>
              <a className="textlink" href={`/product/${machine.slug}`}>
                View machine details <ArrowRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>

      {!results.length && (
        <div className="empty-state">
          <h2>No matching machines</h2>
          <p>Try a broader search or select another category.</p>
        </div>
      )}
    </main>
  );
}

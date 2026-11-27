import { ArrowRight, Check } from "lucide-react";
import type { BuyerGuide, TechnicalTable } from "./buyer-data";
import type { Specification } from "./catalogue-data";

export function ComparisonTable({ table }: { table: TechnicalTable }) {
  return (
    <figure className="comparison-figure">
      <div className="comparison-scroll" tabIndex={0} role="region" aria-label={table.title}>
        <table>
          <caption>{table.title}</caption>
          <thead>
            <tr>{table.columns.map((column) => <th key={column} scope="col">{column}</th>)}</tr>
          </thead>
          <tbody>
            {table.rows.map(([label, ...values]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                {values.map((value, index) => <td key={table.columns[index + 1]}>{value}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption>{table.note}</figcaption>
    </figure>
  );
}

export function BuyerSpecifications({ guide, specs, title, source }: {
  guide: BuyerGuide;
  specs?: Specification[];
  title: string;
  source?: { href: string; label: string };
}) {
  return (
    <section className="wrap machine-specs buyer-specs" id="technical-specifications" aria-labelledby="buyer-specs-heading">
      <h2 id="buyer-specs-heading">{title}<span>.</span></h2>
      {specs && specs.length > 0 && (
        <div className="spec-cards published-specs">
          {specs.map(({ label, value }) => (
            <article key={label}><span>{label}</span><strong>{value}</strong></article>
          ))}
        </div>
      )}
      {guide.table && <ComparisonTable table={guide.table} />}
      {source && <a className="textlink specs-source" href={source.href}>{source.label} <ArrowRight size={16} /></a>}
      <h3>What to specify for your project</h3>
      <dl className="buyer-spec-list">
        {Object.entries(guide.sizing).map(([label, value]) => (
          <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
        ))}
      </dl>
    </section>
  );
}

export function BuyerChecklist({ guide, quoteHref }: { guide: BuyerGuide; quoteHref: string }) {
  return (
    <section className="buyer-checklist">
      <div className="wrap buyer-checklist-grid">
        <div>
          <h2>What to send for a quote<span>.</span></h2>
          <ul>
            {guide.enquiry.map((item) => <li key={item}><Check size={18} aria-hidden="true" /><span>{item}</span></li>)}
          </ul>
          <a className="btn orange" href={quoteHref}>Request a quotation <ArrowRight size={17} /></a>
        </div>
        <div className="buyer-question">
          <h3>{guide.question}</h3>
          <p>{guide.answer}</p>
        </div>
      </div>
    </section>
  );
}

import { notFound } from "next/navigation";
import { ArrowRight, Check, Settings2 } from "lucide-react";
import { BuyerChecklist, BuyerSpecifications } from "../../buyer-sections";
import { machineBySlug, machineCategoryLabels, machines, solutions } from "../../catalogue-data";
import { quoteUrl } from "../../data";
import { machineGuides } from "../../machine-guides";
import { MachinePicture } from "../../machine-picture";

type Props = { params: Promise<{ slug: string }> };

async function getMachine(params: Props["params"]) {
  const { slug } = await params;
  const machine = machineBySlug(slug);
  if (!machine) notFound();
  return machine;
}

export async function generateMetadata({ params }: Props) {
  const machine = await getMachine(params);
  return { title: machine.title, description: machine.summary };
}

export default async function MachineDetail({ params }: Props) {
  const machine = await getMachine(params);
  const category = machineCategoryLabels[machine.category];
  const guide = machineGuides[machine.slug];
  const source = machine.specSource && {
    href: machine.specSource,
    label: machine.specSourceLabel ?? "Manufacturer reference",
  };
  const lineMatches = solutions.filter((solution) => solution.relatedMachines.includes(machine.slug));
  const related = machines
    .filter((item) => item.category === machine.category && item.slug !== machine.slug)
    .slice(0, 4);

  return (
    <main id="main">
      <section className="wrap inner machine-detail-hero">
        <a className="back" href={`/machinery?range=${encodeURIComponent(category)}`}>Machinery catalogue / {category}</a>
        <div className="machine-detail-grid">
          <figure className="catalogue-figure">
            <div className="machine-visual">
              <MachinePicture image={machine.image} title={machine.title} />
              <span className="machine-category-badge">{category}</span>
            </div>
            {machine.imageCaption && <figcaption>{machine.imageCaption}</figcaption>}
          </figure>
          <div className="machine-intro">
            <div className="eyebrow"><i />{category}</div>
            <h1>{machine.title}<span>.</span></h1>
            <p className="lede">{machine.summary}</p>
            <div className="actions">
              <a className="btn orange" href={quoteUrl(machine.title)}>
                Request a quotation <ArrowRight size={17} />
              </a>
              <a className="btn outline-dark" href="https://calendar.app.google/cmayUJcakiPoiq348">
                Book a technical call
              </a>
            </div>
            <a className="textlink specifications-jump" href="#technical-specifications">See technical specifications</a>
          </div>
        </div>
      </section>

      <section className="machine-overview">
        <div className="wrap machine-overview-grid">
          <div>
            <div className="eyebrow"><i />MACHINE OVERVIEW</div>
            <h2>What it does<span>.</span></h2>
            <div className="long-copy">
              {machine.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <p>{guide.application}</p>
            </div>
          </div>
          <div className="feature-panel">
            <div className="feature-panel-title"><Settings2 size={21} /><h2>Key features</h2></div>
            <ul>
              {machine.features.map((feature) => (
                <li key={feature}><Check size={17} /><span>{feature}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <BuyerSpecifications guide={guide} specs={machine.specs} title="Technical specifications" source={source || undefined} />

      {lineMatches.length > 0 && (
        <section className="solution-links">
          <div className="wrap section">
            <div className="eyebrow"><i />COMPLETE LINE APPLICATIONS</div>
            <div className="secthead">
              <h2>Where this machine fits<span>.</span></h2>
              <a className="textlink" href="/solutions">All production lines <ArrowRight size={17} /></a>
            </div>
            <div className="solution-link-grid">
              {lineMatches.map((solution) => (
                <a href={`/solutions/${solution.slug}`} key={solution.slug}>
                  <img src={solution.image} alt="" loading="lazy" />
                  <div><h3>{solution.title}</h3><ArrowRight size={17} /></div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="wrap section">
          <div className="eyebrow"><i />RELATED EQUIPMENT</div>
          <div className="secthead"><h2>Also in {category.toLowerCase()}<span>.</span></h2></div>
          <div className="related-machines compact">
            {related.map((item) => (
              <a className="related-machine" href={`/product/${item.slug}`} key={item.slug}>
                <MachinePicture image={item.image} title={item.title} />
                <div><span>{machineCategoryLabels[item.category]}</span><h3>{item.title}</h3></div>
                <ArrowRight size={17} />
              </a>
            ))}
          </div>
        </section>
      )}

      <BuyerChecklist guide={guide} quoteHref={quoteUrl(machine.title)} />
    </main>
  );
}

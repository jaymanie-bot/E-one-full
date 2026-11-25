import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { machineBySlug, machineCategoryLabels, solutionBySlug } from "../../catalogue-data";
import { quoteUrl } from "../../data";
import { LineCards } from "../../lines";
import { MachinePicture } from "../../machine-picture";
import { InjectionSections } from "../injection";

type Props = { params: Promise<{ slug: string }> };

async function getSolution(params: Props["params"]) {
  const { slug } = await params;
  const solution = solutionBySlug(slug);
  if (!solution) notFound();
  return solution;
}

export async function generateMetadata({ params }: Props) {
  const solution = await getSolution(params);
  return { title: solution.title, description: solution.summary };
}

export default async function SolutionDetail({ params }: Props) {
  const solution = await getSolution(params);
  const related = solution.relatedMachines.map(machineBySlug).filter(Boolean);
  const isMoulds = solution.slug === "moulds";
  const isInjection = solution.slug === "plastic-injection-cap-compression-machines";
  const isBeverageLine = Boolean(solution.liquids);

  return (
    <main id="main">
      <section className="wrap inner solution-hero">
        <a className="back" href={isBeverageLine ? "/solutions/turnkey-beverage" : "/solutions"}>
          {isBeverageLine ? "Turnkey beverage solutions" : "All production solutions"}
        </a>
        <div className="solution-hero-grid">
          <div>
            <div className="eyebrow"><i />{isMoulds ? "PRECISION TOOLING" : "PRODUCTION SOLUTION"}</div>
            <h1>{solution.title}<span>.</span></h1>
            <p className="lede">{solution.summary}</p>
            <a className="btn orange" href={quoteUrl(solution.title)}>
              {isMoulds ? "Request a mould quotation" : "Request a line quotation"}
            </a>
          </div>
          <img src={solution.image} alt={solution.title} />
        </div>
      </section>

      <section className="solution-overview">
        <div className="wrap solution-copy-grid">
          <div>
            <h2>{isMoulds ? "What to know about our moulds" : "How the solution works"}<span>.</span></h2>
          </div>
          <div className="long-copy">
            {solution.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      {solution.subsolutions && (
        <section className="wrap section">
          <div className="secthead"><h2>Choose your beverage line<span>.</span></h2></div>
          <LineCards slugs={solution.subsolutions} />
        </section>
      )}

      {isInjection && <InjectionSections />}

      {solution.stages.length > 0 && <section className="wrap section">
        <h2>{isMoulds ? "Mould applications" : "Process stages"}<span>.</span></h2>
        <div className="stage-grid">
          {solution.stages.map((stage) => (
            <article key={stage.title}>
              <h3>{stage.title}</h3>
              <p>{stage.body}</p>
            </article>
          ))}
        </div>
        {solution.performanceNote && (
          <div className="performance-note">
            <Check size={20} />
            <p>{solution.performanceNote}</p>
          </div>
        )}
        {isMoulds && (
          <div className="injection-media mould-media">
            <figure>
              <div className="injection-line-photo"><MachinePicture image="https://heyanmold.com/wp-content/uploads/2026/01/53-1024x576.webp" title="PET preform tooling being checked in an injection moulding machine" /></div>
              <figcaption>Heyan Technology reference: PET preform mould setup and trials.</figcaption>
            </figure>
            <figure>
              <div className="injection-line-photo"><MachinePicture image="https://heyanmold.com/wp-content/uploads/2025/12/4.webp" title="Heyan precision mould tooling" /></div>
              <figcaption><a href="https://heyanmold.com/product-category/bottle-blowing-mold/">Heyan Technology reference</a>: precision tooling for bottle production.</figcaption>
            </figure>
          </div>
        )}
      </section>}

      {solution.specs && (
        <section className="wrap machine-specs solution-specs">
          <h2>{isMoulds ? "Technical specifications" : "Specifications and capacity"}<span>.</span></h2>
          <div className="spec-cards">
            {solution.specs.map(({ label, value }) => (
              <article key={label}><span>{label}</span><strong>{value}</strong></article>
            ))}
          </div>
          {isBeverageLine && <p className="spec-disclaimer">Bottle-blower figures are equipment ratings. Finished-line output is confirmed against the selected filler, pack and downstream machines.</p>}
        </section>
      )}

      {solution.liquids && (
        <section className="wrap section">
          <h2>What can this line fill<span>?</span></h2>
          <div className="stage-grid liquid-grid">
            {solution.liquids.map(({ title, body }) => (
              <article key={title}><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && <section className="related-section">
        <div className="wrap section">
          <div className="secthead">
            <h2>Machines for this solution<span>.</span></h2>
            <a className="textlink" href="/machinery">View all machinery</a>
          </div>
          <div className="related-machines">
            {related.map((machine) => machine && (
              <a className="related-machine" href={`/product/${machine.slug}`} key={machine.slug}>
                <MachinePicture image={machine.image} title={machine.title} />
                <div>
                  <span>{machineCategoryLabels[machine.category]}</span>
                  <h3>{machine.title}</h3>
                </div>
                <ArrowRight size={17} />
              </a>
            ))}
          </div>
        </div>
      </section>}

      <section className="wrap section line-cta">
        <div>
          <h2>{isMoulds ? "Plan your mould project" : "Plan your production line"}<span>.</span></h2>
        </div>
        <div>
          <p>{isMoulds
            ? "Send a sample or drawing, resin grade, preferred cavity count and the machine you intend to use."
            : "Share your product, container or component format, production target and available facility space."}</p>
          <a className="btn dark" href={quoteUrl(solution.title)}>Discuss this solution</a>
        </div>
      </section>
    </main>
  );
}

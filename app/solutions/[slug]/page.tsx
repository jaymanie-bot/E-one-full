import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { BuyerChecklist, BuyerSpecifications } from "../../buyer-sections";
import { machineBySlug, machineCategoryLabels, solutionBySlug } from "../../catalogue-data";
import { quoteUrl } from "../../data";
import { LineCards } from "../../lines";
import { MachinePicture } from "../../machine-picture";
import { solutionGuides } from "../../solution-guides";
import { bestCrownFillingTables } from "../../bestcrown-data";
import { BestCrownLineSystems, BestCrownPartner } from "../bestcrown";
import { InjectionSections } from "../injection";
import { HeyanSections } from "../heyan";
import { PartnerAttribution } from "../../partner-attribution";

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
  const guide = solutionGuides[solution.slug];
  const related = solution.relatedMachines.map(machineBySlug).filter(Boolean);
  const isMoulds = solution.slug === "moulds";
  const isInjection = solution.slug === "plastic-injection-cap-compression-machines";
  const isBeverageHub = solution.slug === "turnkey-beverage";
  const isBeverageLine = Object.hasOwn(bestCrownFillingTables, solution.slug);
  const showBestCrownPartner = isBeverageHub || (isBeverageLine && solution.slug !== "edible-oil-filling-machines");

  return (
    <main id="main" className={isBeverageHub || isBeverageLine ? "beverage-solution" : undefined}>
      <section className="wrap inner solution-hero">
        <a className="back" href={isBeverageLine ? "/solutions/turnkey-beverage" : "/solutions"}>
          {isBeverageLine ? "Turnkey beverage solutions" : "All production solutions"}
        </a>
        <div className="solution-hero-grid">
          <div>
            <div className="eyebrow"><i />{isMoulds ? "PRECISION TOOLING" : "PRODUCTION SOLUTION"}</div>
            <h1>{solution.title}<span>.</span></h1>
            <p className="lede">{solution.summary}</p>
            {isInjection && <PartnerAttribution partner="hwamda" />}
            {isMoulds && <PartnerAttribution partner="heyan" />}
            {showBestCrownPartner && <BestCrownPartner />}
            <a className="btn orange" href={quoteUrl(solution.title)}>
              {isMoulds ? "Request a mould quotation" : "Request a line quotation"}
            </a>
            <a className="textlink specifications-jump" href="#technical-specifications">See specifications</a>
          </div>
          <figure className="catalogue-figure">
            <img className={isInjection || isMoulds ? "solution-hero-image catalogue-product-image" : "solution-hero-image"} src={solution.image} alt={solution.imageAlt ?? solution.title} />
            {solution.imageCaption && <figcaption>{solution.imageCaption}</figcaption>}
          </figure>
        </div>
      </section>

      <section className="solution-overview">
        <div className="wrap solution-copy-grid">
          <div>
            <h2>{isMoulds ? "What to know about our moulds" : "How the solution works"}<span>.</span></h2>
          </div>
          <div className="long-copy">
            {solution.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p>{guide.application}</p>
          </div>
        </div>
      </section>

      {solution.subsolutions && (
        <section className="wrap section">
          <div className="secthead"><h2>Choose your beverage line<span>.</span></h2></div>
          <LineCards slugs={solution.subsolutions} />
        </section>
      )}

      {isBeverageHub && (
        <section className="wrap section beverage-additional-lines">
          <div className="secthead"><h2>Other production lines<span>.</span></h2></div>
          <LineCards slugs={["barrel-water-production-line", "juice-production-line", "dairy-milk-production-line", "edible-oil-filling-machines"]} />
        </section>
      )}

      {isInjection && <InjectionSections />}
      {isMoulds && <HeyanSections />}

      {solution.stages.length > 0 && <section className="wrap section">
        <h2>{isMoulds ? "From product design to production" : "Process stages"}<span>.</span></h2>
        <div className="stage-grid">
          {solution.stages.map((stage) => (
            <article key={stage.title}>
              <h3>{stage.title}</h3>
              <p>{stage.body}</p>
            </article>
          ))}
        </div>
        {solution.slug === "juice-production-line" && (
          <figure className="beverage-detail-feature">
            <img src="/eone/bestcrown/fruit-grain.webp" alt="Best Crown fruit-particle beverage filling equipment" loading="lazy" />
            <figcaption>
              <h3>Filling drinks containing fruit pieces</h3>
              <p>Best Crown's fruit-grain configurations handle different particle sizes and product textures. Confirm the neck opening, maximum piece size and intended fill volume using the actual drink and bottle samples.</p>
              <small>Best Crown 2022 catalogue, p. 10.</small>
            </figcaption>
          </figure>
        )}

      </section>}

      {isBeverageHub && <BestCrownLineSystems />}

      <BuyerSpecifications
        guide={guide}
        title={isMoulds ? "Technical specifications" : "Specifications and capacity"}
        source={isMoulds ? { href: "https://heyanmold.com/products/", label: "Heyan tooling references" } : undefined}
      />

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
                <MachinePicture image={machine.image} title={machine.title} fallbackImage={machine.fallbackImage} />
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

      <BuyerChecklist guide={guide} quoteHref={quoteUrl(solution.title)} />
    </main>
  );
}

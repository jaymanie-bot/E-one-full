import { ArrowRight } from "lucide-react";
import { quoteUrl } from "../data";

const range = [
  {
    name: "PET preform moulds",
    image: "preform-mould",
    alt: "Heyan multi-cavity preform tool showing the core plate, takeout plate and cavity plate",
    sample: "preforms",
    sampleAlt: "Sample PET preforms in different neck and body formats",
    specification: "1–144 cavities · needle-valve hot runner",
    body: "Tooling for bottle preforms in a wide range of weights and neck finishes. E-One matches the cavity count and preform design to the usable shot, clamp and cooling arrangement of the injection press and the downstream bottle-blowing process.",
    checks: ["Preform and neck drawing, resin and total shot", "Cavity balance, weight variation and blow trial"],
    page: 3,
  },
  {
    name: "Rotary bottle-blowing moulds",
    image: "rotary-blow-mould",
    alt: "Heyan rotary blow mould shell, base insert and bottle cavities",
    specification: "Custom bottle geometry · rotary-station interface",
    body: "A matched mould set for continuous high-speed PET blow moulding. Heyan references tooling for machines such as Sidel, Krones and KHS; confirm the exact blower model, station dimensions and base-mould interface before design.",
    checks: ["Bottle drawing, preform, station model and tooling dimensions", "Volume, wall distribution and approved bottle performance"],
    page: 4,
  },
  {
    name: "Linear bottle-blowing moulds",
    image: "linear-blow-mould",
    alt: "Heyan multi-cavity linear blow mould with precision-machined bottle profiles",
    specification: "Cavity layout and format specific",
    body: "Custom bottle tools for linear stretch-blow systems in water, beverages, oils and personal-care packaging. Share the bottle drawing, preform and machine details to match the mould and base, neck and transfer interfaces.",
    checks: ["Cavity arrangement, pitch and mould mounting", "Bottle weight distribution, fit and pack trials"],
    page: 4,
  },
  {
    name: "Cap and closure moulds",
    image: "cap-mould",
    alt: "Heyan multi-cavity plastic closure injection mould",
    sample: "closure-samples",
    sampleAlt: "Blue flip-top cap samples shown in Heyan's catalogue",
    specification: "Hot runner · independent cavity temperature control",
    body: "Heyan cap tools use a hot-runner arrangement with individually controlled cavity heating, dedicated cooling and replaceable forming inserts. E-One aligns the closure thread, seal and tamper-evident design with the exact bottle neck and capping method.",
    checks: ["Neck finish, cap mass, resin, seal and cavity count", "Torque, leakage, band performance and sample approval"],
    page: 5,
  },
  {
    name: "Handle moulds",
    image: "handle-mould",
    alt: "Heyan mould for plastic carrying handles",
    sample: "handle-samples",
    sampleAlt: "Plastic carrying-handles for containers",
    specification: "Custom injection tooling · handle-specific geometry",
    body: "Tooling for moulded carrying handles for suitable containers and packaging. Confirm part dimensions, mating attachment, resin and intended carrying duty so the mould can be designed around the finished assembly.",
    checks: ["Handle drawing, attachment points and resin", "Fit, surface quality and agreed load tests"],
    page: 5,
  },
  {
    name: "Lifting-ring moulds",
    image: "ring-lifting-mould",
    alt: "Heyan open multi-cavity lifting-ring injection mould",
    sample: "ring-samples",
    sampleAlt: "Plastic bottle lifting rings with shaped carrying grips",
    specification: "Custom neck fit · part and cavity design",
    body: "Injection moulds for lifting rings and bottle carrier rings. The tool is configured to the ring profile, neck engagement and handling requirement, with E-One reviewing repeatability and the assembled pack at trial.",
    checks: ["Bottle neck and ring drawing, resin and cavity requirement", "Assembly fit, grip and specified strength checks"],
    page: 5,
  },
] as const;

export function HeyanSections() {
  return (
    <>
      <section className="wrap section" aria-labelledby="heyan-tooling">
        <div className="eyebrow"><i/>HEYAN MOULD RANGE</div>
        <h2 id="heyan-tooling">Tools for your next product<span>.</span></h2>
        <p className="lede">Choose a product family, then let E-One configure the tool with Heyan around your drawings, material, machine and production target.</p>
        <div className="mould-gallery">
          {range.map((mould) => (
            <article key={mould.name} className="mould-card">
              <div className="mould-card-image">
                <img src={`/eone/heyan/${mould.image}.webp`} alt={mould.alt} loading="lazy" />
                {"sample" in mould && <img className="mould-sample" src={`/eone/heyan/${mould.sample}.webp`} alt={mould.sampleAlt} loading="lazy" />}
              </div>
              <div className="mould-card-content">
                <div className="eyebrow">HEYAN PRECISION TOOLING</div>
                <h3>{mould.name}</h3>
                <p className="mould-card-spec">{mould.specification}</p>
                <p>{mould.body}</p>
                <strong className="mould-card-label">What to specify</strong>
                <ul>{mould.checks.map((check) => <li key={check}>{check}</li>)}</ul>
                <small>Heyan manufacturer catalogue, p. {mould.page}</small>
                <a className="textlink" href={quoteUrl(`Heyan ${mould.name}`)}>Request this mould <ArrowRight size={16}/></a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="solution-overview" aria-labelledby="mould-support">
        <div className="wrap">
          <div className="eyebrow"><i/>TOOLING SUPPORT</div>
          <h2 id="mould-support">Plan the complete mould package<span>.</span></h2>
          <div className="mould-support-grid">
            <figure>
              <img src="/eone/heyan/temperature-controller.webp" alt="Heyan hot-runner temperature controller" loading="lazy"/>
              <figcaption><h3>Hot-runner temperature control</h3><p>Specify the controller, zone count, electrical connections and heater and sensor compatibility for the agreed preform or cap mould.</p></figcaption>
            </figure>
            <figure>
              <img src="/eone/heyan/tooling-components.webp" alt="Heyan replacement mould cores, inserts and precision components" loading="lazy"/>
              <figcaption><h3>Maintainable tooling</h3><p>Agree the changeable cores, inserts and seals, spare-part list, trial scope and maintenance access for the selected tool.</p></figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

import { ArrowRight, Play } from "lucide-react";
import { injectionAncillaries } from "../ancillary-data";
import { quoteUrl } from "../data";
import { MachinePicture } from "../machine-picture";

const demo = "https://www.youtube.com/watch?v=lDRuF_5MjeA";

const cellStages = [
  ["Prepare the resin", "Feed, dry and dose to suit the material."],
  ["Mould the part", "Match the press, mould and injection unit."],
  ["Cool and remove", "Control mould temperature and automate takeout where needed."],
  ["Inspect and pack", "Check critical dimensions, separate scrap and convey good parts."],
];

export function InjectionSections() {
  return (
    <>
      <section className="wrap section" aria-labelledby="injection-applications">
        <h2 id="injection-applications">What do you want to produce<span>?</span></h2>
        <div className="injection-applications">
          <article>
            <h3>PET preform production</h3>
            <p>Build a cell around PET drying, injection, a multi-cavity mould, cooling and part takeout. Preform weight and neck finish must suit the final bottle and closure.</p>
            <dl>
              <dt>Catalogue models</dt><dd>Five Hwamda HMD PET presses, 2,180–5,000 kN of clamping force.</dd>
              <dt>Capacity to specify</dt><dd>Good preforms/hour, preform weight and neck finish, active cavities and validated cycle.</dd>
              <dt>Machine and mould fit</dt><dd>Shot weight, tie-bar clearance, platen size, mould height and takeout clearance.</dd>
            </dl>
            <a className="textlink" href="/product/pet-preform-injection-moulding-machine#technical-specifications">Compare PET presses <ArrowRight size={16} /></a>
          </article>
          <article>
            <h3>Plastic parts and household products</h3>
            <p>Configure the servo-hydraulic press and ancillaries for crates, household items, packaging or industrial parts. Review material, projected area, tool weight and handling before selecting the press.</p>
            <dl>
              <dt>Reference press range</dt><dd>Yizumi A6 hydraulic series, 900–10,000 kN of clamping force by model.</dd>
              <dt>Capacity to specify</dt><dd>Good parts per hour, target cycle time, cavity count and material throughput.</dd>
              <dt>Cell configuration</dt><dd>Resin preparation, mould cooling, takeout, conveying and controlled regrind where the product allows it.</dd>
            </dl>
            <a className="textlink" href="/product/injection-moulding-machine">Review servo-hydraulic presses <ArrowRight size={16} /></a>
          </article>
          <article>
            <h3>Caps and closures</h3>
            <p>Choose injection or continuous compression around the cap geometry, resin, mould and required output. Include the tamper-band step, capping method and mating bottle in acceptance tests.</p>
            <dl>
              <dt>Part and pack</dt><dd>Neck finish, seal, thread, cap weight and tamper-band design.</dd>
              <dt>Acceptance</dt><dd>Good closures/min, removal torque, leak check and band performance.</dd>
            </dl>
            <a className="textlink" href="/product/cap-compression-machine">Explore cap compression <ArrowRight size={16} /></a>
          </article>
          <article>
            <h3>Thin-wall packaging and pails</h3>
            <p>Thin walls and deep parts demand coordinated injection, cooling and takeout. Match the resin and wall section to the shot and injection rate, and confirm separate tooling for bodies and lids where needed.</p>
            <dl>
              <dt>Catalogue models</dt><dd>Five Hwamda M8-SII pail presses, 4,300–8,000 kN of clamping force.</dd>
              <dt>Capacity to specify</dt><dd>Good parts/hour, pail and lid weights, tooling and robot cycle.</dd>
            </dl>
            <a className="textlink" href="/product/pail-injection-moulding-machine#technical-specifications">Compare pail presses <ArrowRight size={16} /></a>
          </article>
        </div>
      </section>
      <section className="solution-overview" aria-labelledby="injection-media">
        <div className="wrap">
          <h2 id="injection-media">Inside an injection moulding line<span>.</span></h2>
          <ol className="cell-stages">
            {cellStages.map(([title, body]) => (
              <li key={title}><strong>{title}</strong><span>{body}</span></li>
            ))}
          </ol>
          <div className="injection-media">
            <figure>
              <a className="injection-video" href={demo}>
                <img src="/eone/hero-injection.webp" alt="" loading="lazy" />
                <span><Play size={21} aria-hidden="true" /> Watch PET preform injection</span>
              </a>
              <figcaption>Yizumi PET48 ECO demonstration on YouTube. The featured mould runs with 48 cavities in the manufacturer's example.</figcaption>
            </figure>
            <figure>
              <div className="injection-line-photo">
                <MachinePicture image="/eone/wensui-material-handling-layout.webp" title="Factory layout showing injection presses linked to central resin storage, conveying and cooling equipment" />
              </div>
              <figcaption>Wensui reference layout for central material handling and cooling. <a href="https://www.wensui.us/sichuan-yichang/">See an installed cap-production system</a>.</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="wrap section" aria-labelledby="ancillary-machines">
        <div className="secthead">
          <h2 id="ancillary-machines">Ancillary machines<span>.</span></h2>
          <a className="textlink" href="/machinery?range=Ancillary%20Machines">Browse ancillary machinery</a>
        </div>
        <p className="lede catalogue-intro">Choose equipment for material preparation, part handling and regrind recovery. The reference specifications below are for the listed Wensui ranges.</p>
        <div className="machine-grid">
          {injectionAncillaries.map((machine) => (
            <article className="machine-card" key={machine.slug}>
              <a className="machine-image" href={`/product/${machine.slug}`} aria-label={`View ${machine.title}`}>
                <MachinePicture image={machine.image} title={machine.title} />
              </a>
              <div className="machine-card-body">
                <h3><a href={`/product/${machine.slug}`}>{machine.title}</a></h3>
                <p>{machine.summary}</p>
                <dl className="equipment-spec">
                  {machine.specs?.map(({ label, value }) => (
                    <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
                  ))}
                </dl>
                <a href={`/product/${machine.slug}`} className="textlink">View machine details</a>
              </div>
            </article>
          ))}
        </div>
        <div className="solution-index-link">
          <a className="btn outline-dark" href={quoteUrl("Injection ancillary machines")}>Discuss ancillary equipment</a>
        </div>
      </section>
    </>
  );
}

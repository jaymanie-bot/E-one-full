import { Play } from "lucide-react";
import { injectionAncillaries } from "../ancillary-data";
import { quoteUrl } from "../data";
import { MachinePicture } from "../machine-picture";

const petCatalogue = "https://www.yizumi.com/uploads/2023-12-06/30d48da6-4a5c-48ab-8196-dbcaf50626961701858930206.pdf";
const plasticCatalogue = "https://www.yizumi.com/en/ims/A6-Advanced-And-Intelligent-Injection-Molding-Machine";
const demo = "https://www.youtube.com/watch?v=lDRuF_5MjeA";

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
              <dt>Reference press range</dt><dd>Yizumi PET series, 120–650 tonnes of clamping force by model.</dd>
              <dt>Capacity to specify</dt><dd>Preforms per hour and weight per preform, based on active cavities and the validated cycle time.</dd>
              <dt>Machine and mould fit</dt><dd>Shot weight, tie-bar clearance, platen size, mould height and takeout clearance.</dd>
            </dl>
            <a className="textlink" href={petCatalogue}>Yizumi PET series catalogue (PDF)</a>
          </article>
          <article>
            <h3>Plastic component production</h3>
            <p>Configure the press and ancillaries for components such as packaging, household items or industrial parts. Select the clamping and injection units around the resin, part geometry and mould.</p>
            <dl>
              <dt>Reference press range</dt><dd>Yizumi A6 hydraulic series, 900–10,000 kN of clamping force by model.</dd>
              <dt>Capacity to specify</dt><dd>Good parts per hour, target cycle time, cavity count and material throughput.</dd>
              <dt>Cell configuration</dt><dd>Resin preparation, mould cooling, takeout, conveying and controlled regrind where the product allows it.</dd>
            </dl>
            <a className="textlink" href={plasticCatalogue}>Yizumi A6 series details</a>
          </article>
        </div>
      </section>
      <section className="solution-overview" aria-labelledby="injection-media">
        <div className="wrap">
          <h2 id="injection-media">See an injection line in action<span>.</span></h2>
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
                <MachinePicture image="https://www.wensui.us/wp-content/uploads/2023/05/5d19ad9981b2b6637a5a53690748f921.jpg" title="Wensui reference injection moulding installation" />
              </div>
              <figcaption><a href="https://www.wensui.us/sichuan-yichang/">Wensui reference installation</a> showing centralized material handling for a cap-production facility.</figcaption>
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

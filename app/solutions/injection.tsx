import { ArrowRight, Play } from "lucide-react";
import { injectionAncillaries } from "../ancillary-data";
import { quoteUrl } from "../data";
import { MachinePicture } from "../machine-picture";
import { PartnerAttribution } from "../partner-attribution";

const demo = "https://www.youtube.com/watch?v=_afIIMNOFMw";

const cellStages = [
  ["Prepare the resin", "WENSUI feeding, drying and dosing selected for the material."],
  ["Mould the part", "HWAMDA press and precision tooling matched to the component."],
  ["Cool and remove", "Matched cooling and WENSUI robotic takeout where required."],
  ["Inspect and pack", "Check critical dimensions, separate scrap and convey accepted parts."],
];

const applications = [
  {
    title: "PET preform production",
    image: "/eone/hwamda/preform-products.webp",
    alt: "PET preform examples shown in HWAMDA's PET machinery catalogue",
    description: "Build a cell around dedicated HWAMDA PET injection, a multi-cavity preform mould, resin drying, cooling and part takeout. The preform's mass and neck finish determine how it integrates with the downstream bottle and closure.",
    details: [
      ["Catalogue models", "Five HMD PET presses, 2,180–5,000 kN clamping force."],
      ["Production capacity", "Good preforms/hour by weight, neck finish, active cavities and validated cycle."],
      ["Machine and mould fit", "Usable PET shot, tie bars, platen, mould height and takeout clearance."],
    ],
    href: "/product/pet-preform-injection-moulding-machine#technical-specifications",
    link: "Compare HWAMDA PET presses",
  },
  {
    title: "Plastic parts and household products",
    image: "/eone/hwamda/m8sii-clamp.webp",
    alt: "HWAMDA M8-SII clamping assembly and open mould space",
    description: "For crates, housewares and industrial parts, E-One configures an HWAMDA servo-hydraulic press around the polymer, projected area, tool weight and handling duty. Match the injection unit and screw option to the component.",
    details: [
      ["Reference press family", "HWAMDA M8-SII: 25 models, 900–33,000 kN clamping force."],
      ["Production capacity", "Good parts/hour, target cycle, cavities and resin throughput."],
      ["Cell configuration", "Material preparation, mould cooling, takeout, conveying and controlled regrind."],
    ],
    href: "/product/injection-moulding-machine",
    link: "Compare servo-hydraulic presses",
  },
  {
    title: "Thin-wall packaging and pails",
    image: "/eone/hwamda/pail-products.webp",
    alt: "Paint container and pail designs from HWAMDA's paint-bucket machinery catalogue",
    description: "HWAMDA's high-speed pail configurations address thin-wall and deep-container moulding. E-One matches the shot and injection rate to the wall section, selects the cooling and takeout arrangement and evaluates body, lid and handle tooling.",
    details: [
      ["Catalogue models", "Five M8-SII pail presses, 4,300–8,000 kN clamping force."],
      ["Production capacity", "Good parts/hour, body and lid weights, cavity count and robot cycle."],
      ["Pack configuration", "Stacking, closure fit, decoration and in-mould labelling where specified."],
    ],
    href: "/product/pail-injection-moulding-machine#technical-specifications",
    link: "Compare HWAMDA pail presses",
  },
  {
    title: "Caps and closures",
    image: "/eone/heyan/closure-samples.webp",
    alt: "Examples of plastic closures from the Heyan mould catalogue",
    description: "Compare multi-cavity injection tooling with a separately specified continuous-compression platform according to the closure geometry, resin and required output. Include any tamper-band operation and the mating bottle in the acceptance programme.",
    details: [
      ["Tool and pack", "Neck finish, seal geometry, thread, cap weight and tamper-band design."],
      ["Acceptance", "Good closures/min, removal torque, leak check and band performance."],
      ["Tooling", "See E-One’s Heyan mould range for injection closure tools."],
    ],
    href: "/product/cap-compression-machine",
    link: "Explore cap compression",
  },
];

export function InjectionSections() {
  return (
    <>
      <section className="wrap section" aria-labelledby="injection-applications">
        <div className="eyebrow"><i/>INJECTION APPLICATIONS</div>
        <h2 id="injection-applications">What do you want to produce<span>?</span></h2>
        <div className="injection-applications injection-application-gallery">
          {applications.map((application) => (
            <article key={application.title}>
              <img className="injection-application-image" src={application.image} alt={application.alt} loading="lazy"/>
              <div className="injection-application-copy">
                <h3>{application.title}</h3>
                <p>{application.description}</p>
                <dl>{application.details.map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
                <a className="textlink" href={application.href}>{application.link} <ArrowRight size={16}/></a>
              </div>
            </article>
          ))}
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
              <a className="injection-video" href={demo} aria-label="Watch HWAMDA's HMD500PET preform production trial on YouTube">
                <img src="/eone/hwamda/factory-machine.webp" alt="HWAMDA injection machinery in the manufacturer's factory" loading="lazy" />
                <span><Play size={21} aria-hidden="true" /> Watch HWAMDA PET production</span>
              </a>
              <figcaption>HWAMDA HMD500PET preform production trial — manufacturer demonstration. <a href="https://hwamdaglobal.com/en/injection-molding-machines/pet-preform/">HWAMDA PET technology reference</a>.</figcaption>
            </figure>
            <figure>
              <div className="injection-line-photo">
                <MachinePicture image="/eone/wensui/injection-cell.webp" title="WENSUI reference illustration of an injection press with a takeout robot, feeding, drying, cooling and granulating equipment" />
              </div>
              <figcaption>WENSUI auxiliary-equipment selection guide: an illustrated injection cell with corresponding feed, handling, cooling and recycling equipment.</figcaption>
            </figure>
            <figure>
              <div className="injection-line-photo">
                <MachinePicture image="/eone/wensui-material-handling-layout.webp" title="WENSUI central material-handling and cooling layout for multiple injection presses" />
              </div>
              <figcaption>WENSUI central material-handling and cooling reference for multiple presses. <a href="https://www.wensui.us/sichuan-yichang/">See a manufacturer installation example</a>.</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="wrap section" aria-labelledby="ancillary-machines">
        <div className="secthead">
          <h2 id="ancillary-machines">Ancillary machines<span>.</span></h2>
          <a className="textlink" href="/machinery?range=Ancillary%20Machines">Browse ancillary machinery</a>
        </div>
        <PartnerAttribution partner="wensui" />
        <p className="lede catalogue-intro">WENSUI is E-One’s principal injection ancillary partner. Select a coordinated package for resin feeding, drying, cooling, automation and recycling to support your HWAMDA production cell.</p>
        <div className="machine-grid">
          {injectionAncillaries.map((machine) => (
            <article className="machine-card" key={machine.slug}>
              <a className="machine-image" href={`/product/${machine.slug}`} aria-label={`View ${machine.title}`}>
                <MachinePicture image={machine.image} title={machine.title} fallbackImage={machine.fallbackImage} />
              </a>
              <div className="machine-card-body">
                <div className="eyebrow">WENSUI</div>
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
          <a className="btn outline-dark" href={quoteUrl("WENSUI injection ancillary machines")}>Discuss ancillary equipment</a>
        </div>
      </section>
    </>
  );
}

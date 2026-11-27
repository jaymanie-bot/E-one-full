import { PartnerAttribution } from "../partner-attribution";
import { ComparisonTable } from "../buyer-sections";
import { bestCrownSupportingTable, bestCrownSystemCards } from "../bestcrown-data";

export function BestCrownPartner() {
  return <PartnerAttribution partner="bestcrown" />;
}

export function BestCrownLineSystems() {
  return (
    <section className="wrap section beverage-engineering" aria-labelledby="complete-beverage-line">
      <div className="secthead">
        <h2 id="complete-beverage-line">Equipment for the complete line<span>.</span></h2>
      </div>
      <p className="lede">E-One and Best Crown configure the process and packaging equipment together, from source water and ingredients to tested, labelled retail packs.</p>
      <div className="beverage-system-grid">
        {bestCrownSystemCards.map((system) => (
          <article key={system.title}>
            <img src={system.image} alt={system.alt} loading="lazy" />
            <div>
              <h3>{system.title}</h3>
              <p>{system.text}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="beverage-media-credit">Equipment photographs from the Best Crown 2022 catalogue, pp. 19–30.</p>
      <ComparisonTable table={bestCrownSupportingTable} />
      <div className="beverage-sizing-example">
        <h3>Size the whole line from the finished pack</h3>
        <p>For a target of 36,000 bottles/hour at 500 mL, product demand is 18,000 L/hour before allowances for cleaning, losses and peak operation. Six bottles per bundle require 100 packs/minute. Confirm the contract rates of the filler, conveyors and packer together to allow for stops and format changes.</p>
      </div>
    </section>
  );
}

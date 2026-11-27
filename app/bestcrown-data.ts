import type { TechnicalTable } from "./buyer-data";

export const bestCrownFillingTables = {
  "bottled-water-production-line": {
    title: "Best Crown PET water filling platforms",
    columns: ["Equipment configuration", "Rated output", "Bottle volume", "Filling method"],
    rows: [
      ["Blow–fill–cap combi-block", "15,000–72,000 BPH (500 mL)", "200–1,500 mL", "Gravity mechanical or flowmeter valves"],
      ["Rinse–fill–cap monoblock", "15,000–54,000 BPH (500 mL)", "200–2,000 mL", "Gravity, flowmeter or weighing valves"],
      ["Large-volume rinse–fill–cap", "1,500–8,000 BPH (5 L)", "3–20 L", "Gravity, flowmeter or weighing valves"],
      ["Ozone-free water combi-block", "12,000–72,000 BPH (500 mL)", "200–1,500 mL", "Flowmeter valves"],
    ],
    note: "Best Crown 2022 equipment catalogue, pp. 1–5. BPH means bottles per hour. Published ranges cover different machine configurations at the stated reference bottle volume. Final quoted output is agreed for each product and bottle.",
  },
  "carbonated-drink-production-line": {
    title: "Best Crown PET carbonated beverage platforms",
    columns: ["Equipment configuration", "Rated output", "Bottle volume", "Filling method"],
    rows: [
      ["CSD blow–fill–cap combi-block", "8,000–54,000 BPH (500 mL)", "200–1,500 mL", "Isobaric mechanical or flowmeter valves"],
      ["Dual-purpose aseptic CSD / still beverage combi-block", "12,000–36,000 BPH (500 mL)", "200–1,500 mL", "Flowmeter valves; aseptic servo capping"],
    ],
    note: "Best Crown 2022 equipment catalogue, pp. 13–14. Both ranges use a 500 mL reference format. Confirm the proposed drink, carbonation, pressure-rated bottle, closure, hygiene requirements and validated output for the chosen platform.",
  },
  "aseptic-production-line": {
    title: "Best Crown sensitive-beverage filling platforms",
    columns: ["Equipment configuration", "Rated output", "Filling temperature", "PET bottle volume", "Filling method"],
    rows: [
      ["GWJX dry aseptic blow–fill–cap", "15,000–54,000 BPH (500 mL)", "4–35 °C", "200–2,000 mL", "Flowmeter or electronic weighing valves"],
      ["Aseptic cold-fill monoblock", "15,000–54,000 BPH (reference volume unspecified)", "4–35 °C", "Confirm at quotation", "Non-contact flowmeter or electronic weighing"],
      ["Ultra-clean blow–fill–cap", "15,000–54,000 BPH (500 mL)", "65–68 °C", "200–2,000 mL", "Mechanical, flowmeter or electronic weighing"],
    ],
    note: "Best Crown 2022 equipment catalogue, pp. 6–8. Temperatures are catalogue filling-machine operating references. Choose the validated product treatment, packaging and storage conditions separately; an ultra-clean platform has its own process requirements.",
  },
  "barrel-water-production-line": {
    title: "Best Crown DG5 five-gallon barrel line",
    columns: ["Configuration", "Rated output", "Barrel volume", "Filling valve options"],
    rows: [
      ["DG5 washing, filling and capping", "600–3,000 barrels/hour (18.9 L)", "12–19 L", "Mechanical, flowmeter or ultrasonic-positioning valve"],
    ],
    note: "Best Crown 2022 equipment catalogue, p. 4. The output reference is based on the 18.9 L five-gallon container. Actual output also depends on return condition, washing, rejection and pack handling.",
  },
  "juice-production-line": {
    title: "Best Crown juice, tea and fruit-particle platforms",
    columns: ["Equipment configuration", "Rated output", "Filling temperature", "PET bottle volume", "Product or valve selection"],
    rows: [
      ["PET hot-fill line", "10,000–54,000 BPH (500 mL)", "85–88 °C", "200–2,000 mL", "Juice, tea, functional drinks and suitable pulp; micro-negative-pressure, flowmeter or weighing valves"],
      ["Fruit-particle filling line", "8,000–36,000 BPH (500 mL)", "65–85 °C", "200–2,000 mL", "Small-particle model below 5 mm; large-particle model above 5 mm and below 15 mm"],
      ["Ultra-clean blow–fill–cap", "15,000–54,000 BPH (500 mL)", "65–68 °C", "200–2,000 mL", "Suitable NFC juice, tea and protein beverages; valve selection by formula"],
    ],
    note: "Best Crown 2022 equipment catalogue, pp. 7, 9–10. The fruit-particle platforms describe 38 mm neck PET configurations. Confirm actual particle dimensions, texture, heat requirements and container before agreeing a model or finished-line rate.",
  },
  "dairy-milk-production-line": {
    title: "Best Crown bottled dairy filling reference",
    columns: ["Equipment configuration", "Rated output", "Bottle and closure", "Filling method"],
    rows: [
      ["Ultra-clean liquid dairy line", "8,000–36,000 BPH (350 mL)", "Pre-made PET or PP bottles; tamper-evident caps", "Non-contact aseptic-type filling valve"],
    ],
    note: "Best Crown 2022 equipment catalogue, pp. 17–18. The specified range covers cold-chain products including pasteurised milk, fermented yoghurt and active probiotic drinks. Ambient dairy is assessed with a separately validated UHT and aseptic system.",
  },
  "edible-oil-filling-machines": {
    title: "Best Crown PET bottle-forming reference for packaging",
    columns: ["Equipment", "Station range", "Bottle volumes", "Rated reference output"],
    rows: [
      ["Automatic rotary PET blower", "2–36 stations", "200 mL–20 L", "15,000–81,000 BPH at 500 mL"],
    ],
    note: "Best Crown 2022 equipment catalogue, pp. 19–20, identifies oil bottles among its PET blow-moulding applications. This table describes bottle formation. E-One quotes the oil dosing and filling system separately for the selected oil and container.",
  },
} satisfies Record<string, TechnicalTable>;

export const bestCrownSupportingTable: TechnicalTable = {
  title: "Best Crown complete-line equipment references",
  columns: ["Line stage / equipment", "Catalogue capacity or configuration", "Planning considerations"],
  rows: [
    ["Rotary PET bottle formation", "2–36 stations; 200 mL–20 L; 15,000–81,000 BPH (500 mL)", "Preform, bottle drawing, mould, high-pressure air and cooling"],
    ["Water treatment", "Pretreatment, advanced treatment and final treatment", "Source analysis, product-water specification, net flow and storage"],
    ["Beverage preparation", "Sanitary blending, piping, controls and instruments", "Recipe, product flow, heating, cooling and cleanability"],
    ["Air conveyor", "15,000–36,000 BPH (500 mL); PET bottle under 45 g; 2–5 m/s", "Neck support, bottle mass, line layout, compatible blower and filler"],
    ["Filled-bottle conveying", "Flat-top chain; variable speed up to 1.98 m/s", "Buffering, accumulation, stable transfers and changeover"],
    ["Vision inspection", "Empty bottle, cap, fill level, label and code checks", "Inspection criteria, reject confirmation and traceability"],
    ["Sleeve labelling", "12,000–72,000 BPH", "Container geometry, sleeve stock and shrink tunnel duty"],
    ["Carton packing", "Linear wrapper 10–80 cartons/min; robotic packer 10–100 cartons/min", "Units per case, carton design and infeed rate"],
    ["Film shrink wrapping", "10–150 packs/min; maximum pack L460 × W280 × H345 mm", "2×3, 3×3, 3×4, 3×5, 4×5 or 4×6 pack configurations"],
    ["Palletising", "15,000–36,000 BPH line reference (500 mL)", "Case or film bundle rate, pallet pattern, load height and handling"],
  ],
  note: "Best Crown 2022 equipment catalogue, pp. 19–30. Ratings use the manufacturer’s individual reference configurations and units. E-One sizes each stage, buffer and transfer for the agreed finished-pack throughput.",
};

export const bestCrownSystemCards = [
  {
    title: "Water treatment",
    image: "/eone/bestcrown/water-treatment.webp",
    alt: "Best Crown water-treatment equipment with pumps and sanitary pipework",
    text: "A source-specific treatment train feeds the product path. Establish the water quality, available flow, purification requirements and storage demand ahead of the filler.",
  },
  {
    title: "Beverage preparation",
    image: "/eone/bestcrown/beverage-blending.webp",
    alt: "Best Crown beverage blending and sanitary processing tanks",
    text: "Match blending, ingredient dosing, thermal equipment and product transfer to recipe viscosity, acidity, solids and production flow.",
  },
  {
    title: "PET bottle forming",
    image: "/eone/bestcrown/rotary-blower.webp",
    alt: "Best Crown automatic rotary PET bottle production equipment",
    text: "Choose an independent blower with bottle transfer or a combi-block that combines bottle formation, filling and capping. Review mould changeovers, preform supply and utilities.",
  },
  {
    title: "Quality inspection",
    image: "/eone/bestcrown/vision-inspection.webp",
    alt: "Best Crown machine-vision inspection and product rejection equipment",
    text: "Agree the checks and reject criteria for empty bottles, closures, fill level, labels and date or batch codes. Use sampling and inspection suitable for the product and package.",
  },
  {
    title: "Secondary packaging",
    image: "/eone/bestcrown/shrink-packing.webp",
    alt: "Best Crown automated film shrink-wrapping machine",
    text: "Select film bundles or cartons, then design accumulation and palletising around case size, dispatch volume and available floor space.",
  },
];

import type { EquipmentPartnerKey } from "./partners";
import { injectionAncillaries } from "./ancillary-data";
import { additionalMachines } from "./additional-machines";

export type Specification = { label: string; value: string };

export type Machine = {
  slug: string;
  title: string;
  category: MachineCategory;
  summary: string;
  overview: string[];
  features: string[];
  specs?: Specification[];
  specSource?: string;
  specSourceLabel?: string;
  image: string;
  imageCaption?: string;
  fallbackImage?: string;
  media?: { image: string; title: string; description: string }[];
  partner?: EquipmentPartnerKey;
};

export type MachineCategory =
  | "Auxiliary machines"
  | "Bottle blowing"
  | "Coding machines"
  | "Injection machines"
  | "Labelling machines"
  | "Liquid filling"
  | "Packaging machines"
  | "Water treatment";

export type Solution = {
  slug: string;
  title: string;
  image: string;
  imageAlt?: string;
  imageCaption?: string;
  summary: string;
  overview: string[];
  stages: { title: string; body: string }[];
  relatedMachines: string[];
  liquids?: { title: string; body: string }[];
  subsolutions?: string[];
};

const image = (slug: string) => `/catalogue/${slug}.webp`;

export const machines: Machine[] = [
  {
    slug: "oop-labelling-machine",
    title: "OPP Labelling Machine",
    category: "Labelling machines",
    summary: "A high-speed rotary system for applying hot-melt adhesive OPP labels in continuous production.",
    overview: [
      "The machine coordinates container infeed, label cutting, adhesive application and finished-container discharge in one continuous process.",
      "Glue is applied only at the label edges, which supports a neat overlap seal while limiting adhesive consumption.",
    ],
    features: [
      "Continuous rotary operation for high-throughput lines",
      "Automatic adjustment of incoming and outgoing containers",
      "Servo-driven label cutting for accurate placement",
      "Edge-only adhesive application to reduce glue usage",
      "Tight, smooth wrapping with controlled overlap sealing",
    ],
    image: image("oop-labelling-machine"),
  },
  {
    slug: "shrink-packaging-machine",
    title: "Shrink Packaging Machine",
    category: "Packaging machines",
    summary: "An automated end-of-line system for arranging bottles, wrapping film, shrinking and cooling finished bundles.",
    overview: [
      "The system handles bottle grouping and film application before the pack enters an adjustable heat-shrink section and cooling stage.",
      "Its compact layout is designed to reduce manual handling and create stable multipacks for retail or distribution.",
    ],
    features: [
      "Automated bottle sorting, film wrapping and shrinking",
      "Servo-controlled film feeding, coating and cutting",
      "Adjustable airflow and outlet position in the shrink tunnel",
      "Touchscreen controls for production settings",
      "Compact arrangement with accessible service points",
    ],
    image: image("shrink-packaging-machine"),
  },
  {
    slug: "laser-coding-machine",
    title: "Laser Coding Machine",
    category: "Coding machines",
    summary: "Non-contact marking for production codes on compatible bottles, cans and cartons.",
    overview: [
      "The laser marks batch details, expiry dates, barcodes and QR codes directly onto the packaging surface.",
      "The process marks the surface without ink or solvent. Test the proposed material and code at the intended conveyor speed.",
    ],
    features: [
      "Permanent, legible production marks",
      "Suitable for batch codes, dates, barcodes and QR codes",
      "Resistant to smudging, fading and routine environmental exposure",
      "Non-contact marking at production-line speed",
      "No ink or solvent consumables",
    ],
    image: image("laser-coding-machine"),
  },
  {
    slug: "cap-compression-machine",
    title: "Cap Compression Machine",
    category: "Injection machines",
    summary: "A rotary compression-moulding system for continuous, high-volume production of plastic closures.",
    overview: [
      "Raw material is dosed automatically before servo-controlled compression heads form caps under consistent pressure and temperature.",
      "The process is designed to produce repeatable cap weight and shape while limiting scrap and changeover time.",
    ],
    features: [
      "Continuous rotary cap production",
      "Automatic raw-material dosing and feeding",
      "Servo-controlled compression heads",
      "Reduced scrap through compression moulding",
      "Controlled temperature and pressure for uniform caps",
      "Support for multiple cap sizes, shapes and colours",
      "Short heating cycles and efficient cooling",
    ],
    image: image("cap-compression-machine"),
  },
  {
    slug: "automatic-rotary-bottle-blowing-machine",
    title: "Automatic Rotary Bottle Blowing Machine",
    category: "Bottle blowing",
    summary: "A high-output rotary stretch-blow platform for producing PET bottles in multiple formats.",
    overview: [
      "The machine handles preforms continuously through the heating and blowing process, supporting stable large-scale bottle production.",
      "It is presented for food and beverage, cosmetics, pharmaceutical and chemical packaging applications.",
    ],
    features: [
      "Continuous rotary preform movement",
      "Configurable for different bottle shapes and sizes",
      "Designed for stable, energy-conscious production",
      "PET preform and bottle handling matched to the mould and format",
    ],
    specs: [{ label: "E-One published machine range", value: "8,000–36,000 bottles/hour, by model and format" }],
    specSource: "https://e-onemachinery.com/product/automatic-rotary-bottle-blowing-machine/",
    specSourceLabel: "E-One rotary blower reference",
    image: image("automatic-rotary-bottle-blowing-machine"),
  },
  {
    slug: "automatic-linear-bottle-blowing-machine",
    title: "Automatic Linear Bottle Blowing Machine",
    category: "Bottle blowing",
    summary: "An automatic linear stretch-blow machine for medium-speed PET bottle production.",
    overview: [
      "The platform uses a rigid single-plate steel frame to support repeatable forming and long-term machine stability.",
      "Its pressure-recovery arrangement reuses part of the high-pressure gas and reduces reliance on a separate low-pressure air system.",
    ],
    features: [
      "Medium-speed linear bottle production",
      "Single-piece steel frame for rigidity and precision",
      "High-pressure gas recovery to reduce operating demand",
      "PET preform and bottle handling with format-specific change parts",
    ],
    specs: [
      { label: "E-One published machine range", value: "3,000–8,000 bottles/hour, by model and format" },
    ],
    image: image("automatic-linear-bottle-blowing-machine"),
    specSource: "https://e-onemachinery.com/product/automatic-linear-bottle-blowing-machine/",
    specSourceLabel: "E-One linear blower reference",
  },
  {
    slug: "carbonated-filling-machine",
    title: "Carbonated Filling Machine",
    category: "Liquid filling",
    partner: "bestcrown",
    summary: "Best Crown PET carbonated beverage systems with isobaric filling and matched bottle handling.",
    overview: [
      "For carbonated soft drinks and sparkling water, E-One configures a Best Crown filling system around the required CO₂ level, bottle and closure, product temperature and line output. Isobaric filling brings the container and product circuit to compatible pressure to limit foaming and carbonation loss.",
      "Best Crown offers a blow–fill–cap combi-block for PET beverage plants and a dual-purpose aseptic configuration for qualifying carbonated and still beverages. Confirm the beverage formulation and container specification before selecting a valve and platform.",
    ],
    features: ["Isobaric mechanical or flowmeter filling-valve options", "Integrated bottle blowing, filling and capping configurations", "Pressure-rated PET bottle and closure handling", "Matched beverage blending, cooling and conveying", "Configuration-specific change parts and controls"],
    specs: [
      { label: "Best Crown PET CSD combi-block", value: "8,000–54,000 bottles/hour at 500 mL" },
      { label: "Reference bottle range", value: "200–1,500 mL" },
    ],
    image: "/eone/bestcrown/carbonated-pet.webp",
    imageCaption: "Best Crown PET CSD blow–fill–cap system, 2022 catalogue, p. 14.",
  },
  {
    slug: "barrel-filling-machine",
    title: "Barrel Filling Machine",
    category: "Liquid filling",
    partner: "bestcrown",
    summary: "Best Crown DG5 systems for washing, filling and capping large returnable drinking-water barrels.",
    overview: [
      "The DG5 family brings barrel washing, product-water filling and capping into an integrated sequence. E-One plans the external handling and inspection stages so damaged or unsuitable returned containers are separated before the washing system.",
      "Select the model using the barrel volume, incoming condition, cap design and finished-barrel rate. Match the upstream water treatment, wash services and downstream handling to a single accepted output target.",
    ],
    features: ["Integrated washing, filling and capping", "Mechanical, flowmeter or ultrasonic-positioning filling-valve options", "Configuration for 12–19 L containers", "Returnable-container inspection and handling interfaces", "Project-specific layout and clean-water supply"],
    specs: [
      { label: "Best Crown DG5 output", value: "600–3,000 barrels/hour at 18.9 L" },
      { label: "Catalogue barrel range", value: "12–19 L" },
    ],
    image: "/eone/bestcrown/barrel-filling.webp",
    imageCaption: "Best Crown DG5 five-gallon production line, 2022 catalogue, p. 4.",
  },
  {
    slug: "bottle-water-filling-machine",
    title: "Bottle Water Filling Machine",
    category: "Liquid filling",
    partner: "bestcrown",
    summary: "Best Crown rinse–fill–cap monoblocks and integrated PET water bottling platforms.",
    overview: [
      "E-One selects a Best Crown water filler for still drinking water, compatible mineral or spring water projects and other suitable still-water products. The rinse–fill–cap monoblock manages the bottles through the hygienic filling and closing sequence in a compact unit supplied by a separate bottle blower or pre-made bottles.",
      "For high-output in-house bottle formation, the integrated blow–fill–cap combi-block is another option. The bottle size, neck finish, treated-water flow, filling valve and closure must be matched to the final output requirement.",
    ],
    features: ["Integrated rinsing, filling and capping", "Gravity, flowmeter or weighing valve selection", "PET bottle handling matched to format", "Separate bottle supply or blow–fill–cap integration", "Large-volume and qualifying ozone-free options"],
    specs: [
      { label: "Best Crown rinse–fill–cap reference", value: "15,000–54,000 bottles/hour at 500 mL" },
      { label: "Standard monoblock bottle range", value: "200–2,000 mL" },
    ],
    image: "/eone/bestcrown/water-monoblock.webp",
    imageCaption: "Best Crown water rinse–fill–cap monoblock, 2022 catalogue.",
  },
  {
    slug: "juice-filling-machine-hot-filling",
    title: "Juice Filling Machine (Hot Filling)",
    category: "Liquid filling",
    partner: "bestcrown",
    summary: "Best Crown PET hot-fill equipment for suitable juice, tea and functional beverage formulations.",
    overview: [
      "E-One and Best Crown configure hot filling as part of the complete processing and bottling line. A suitable product treatment system supplies the enclosed filler; the selected bottle and closure must withstand the approved filling and cooling conditions.",
      "The catalogue also includes fruit-particle filling arrangements. Share the formulation, viscosity, maximum suspended-particle size and bottle neck so E-One can match the valve, product-transfer system and finished output.",
    ],
    features: ["Controlled filling-temperature system", "Micro-negative-pressure, flowmeter or weighing valve configurations", "Bottle and closure selection for hot filling", "Cleaning and line-control integration", "Fruit-particle configurations assessed separately"],
    specs: [
      { label: "Best Crown PET hot-fill line", value: "10,000–54,000 bottles/hour at 500 mL" },
      { label: "Catalogue bottle range", value: "200–2,000 mL" },
    ],
    image: "/eone/bestcrown/hot-fill-juice.webp",
    imageCaption: "Best Crown PET hot-fill production line, 2022 catalogue, p. 9.",
  },
  {
    slug: "sleeve-labelling",
    title: "Sleeve Labelling Machine",
    category: "Labelling machines",
    summary: "An automatic machine for placing shrinkable sleeves on bottles, jars, cans and other containers.",
    overview: [
      "Labels are cut and positioned around each container before a steam or hot-air stage shrinks the sleeve into place.",
      "The format is suited to full-body decoration, tamper bands and containers that need a close-fitting label.",
    ],
    features: [
      "Continuous high-speed labelling",
      "Compatibility with multiple container shapes and sizes",
      "Accurate high-speed sleeve cutting",
      "Automatic label placement",
      "Steam or hot-air shrinking for a secure finish",
    ],
    image: image("sleeve-labelling"),
  },
  {
    slug: "reverse-osmosis-ro-water-treatment-system",
    title: "Reverse Osmosis Water Treatment System",
    category: "Water treatment",
    summary: "A configurable RO platform for removing dissolved salts, minerals and remaining impurities after pretreatment.",
    overview: [
      "Pretreated water passes through precision filtration and RO membranes, separating purified product water from the concentrated reject stream.",
      "The system can be sized for commercial or industrial water-treatment requirements and integrated upstream of beverage filling.",
    ],
    features: [
      "High-efficiency membrane separation",
      "Removal of dissolved solids after pretreatment",
      "High water-recovery design",
      "Corrosion-resistant stainless-steel frame",
      "Capacity selected to the production requirement",
    ],
    specs: [{ label: "E-One published range", value: "1–50 tonnes/hour. Confirm permeate output on the proposed feed water." }],
    image: image("reverse-osmosis-ro-water-treatment-system"),
    specSource: "https://e-onemachinery.com/product/reverse-osmosis-ro-water-treatment-system/",
    specSourceLabel: "E-One reverse-osmosis reference",
  },
  {
    slug: "injection-moulding-machine",
    title: "Injection Moulding Machine",
    category: "Injection machines",
    partner: "hwamda",
    summary: "HWAMDA M8-SII servo-hydraulic presses for household products, industrial parts and packaging components.",
    overview: [
      "E-One supplies HWAMDA injection presses configured to produce plastic components in the volume and quality your factory requires. The M8-SII platform combines a servo-driven hydraulic pump, a reinforced clamping assembly and a configurable injection unit. Select the machine using the actual mould envelope, resin, projected area and shot requirement—not tonnage alone.",
      "The servo system varies pump delivery to the demand of each cycle stage. This supports controlled injection and holding pressure and reduces unnecessary power demand during less active phases. E-One reviews the real cycle, cooling load, changeovers and WENSUI ancillary equipment when specifying your complete cell.",
    ],
    features: [
      "M8-SII servo-hydraulic press family with 25 published clamping-force models",
      "Reinforced platens and automatic mould adjustment",
      "Matched screw and injection-unit options for different shot sizes",
      "Closed-loop servo-hydraulic control",
      "Controller and guarding configured for the machine",
      "Integration with resin preparation, mould cooling and automation",
    ],
    specs: [
      { label: "HWAMDA M8-SII clamping force", value: "900–33,000 kN across 25 models" },
      { label: "Machine configuration", value: "Matched clamp, injection unit and screw option" },
    ],
    image: "/eone/hwamda/m8sii-hmd320.webp",
    imageCaption: "HWAMDA HMD320M8-SII servo-hydraulic machine, official manufacturer model photograph.",
    media: [
      { image: "/eone/hwamda/m8sii-clamp.webp", title: "M8-SII mould space", description: "Clamping-side reference from HWAMDA's pail catalogue. Review the dimensions and tool-mounting interface of the selected model." },
      { image: "/eone/hwamda/assembly-floor.webp", title: "HWAMDA manufacturing reference", description: "Photograph from the manufacturer’s M8-SII assembly reference. E-One configures the press with the required material-handling and cooling package." },
    ],
    specSource: "https://hwamdaglobal.com/en/injection-molding-machines/servo-hydraulic/",
    specSourceLabel: "HWAMDA M8-SII model specifications",
  },
  {
    slug: "gjb-series-high-compressor-homogenize",
    title: "GJB Series High-Pressure Homogenizer",
    category: "Auxiliary machines",
    summary: "A high-pressure processing system for distributing particles evenly and stabilizing liquid products.",
    overview: [
      "Homogenization helps create consistent texture and reduces separation before the beverage reaches filling.",
      "The machine can be integrated into beverage preparation lines where product stability and repeatable mouthfeel are required.",
    ],
    features: [
      "High-pressure homogenization",
      "Uniform particle distribution",
      "Improved liquid stability and consistency",
      "Integration with beverage preparation and filling lines",
    ],
    image: image("gjb-series-high-compressor-homogenize"),
  },
  {
    slug: "lz-1-5-type-spiral-juice-extractor",
    title: "LZ-1.5 Spiral Juice Extractor",
    category: "Auxiliary machines",
    summary: "A spiral extraction machine for separating juice from fruit while leaving pulp and seeds behind.",
    overview: [
      "The extractor presses prepared produce to maximize liquid recovery and produce a smoother process stream.",
      "It can handle a range of soft fruit and harder produce when configured for the application.",
    ],
    features: [
      "High-yield juice extraction",
      "Pulp and seed separation",
      "Low-oxidation processing intended to protect product quality",
      "Support for soft fruit and firmer produce",
    ],
    image: image("lz-1-5-type-spiral-juice-extractor"),
  },
  {
    slug: "plate-sterilizing-equipment",
    title: "Plate Sterilizing Equipment",
    category: "Auxiliary machines",
    summary: "A thermal-treatment system for hygienic beverage processing and microbial control before filling.",
    overview: [
      "Plate equipment transfers heat efficiently to the product or cleaning medium as part of a controlled sterilization process.",
      "It supports hygienic treatment of beverage streams and product-contact circuits before the filling stage.",
    ],
    features: [
      "Controlled heat treatment",
      "Supports microbial-risk reduction",
      "Suitable for beverage process integration",
      "Works with steam or hot-water systems where configured",
    ],
    image: image("plate-sterilizing-equipment"),
  },
  {
    slug: "qhs-drink-mixer",
    title: "QHS Drink Mixer",
    category: "Auxiliary machines",
    summary: "A beverage-processing system for accurately combining water, syrup and CO₂ before carbonated filling.",
    overview: [
      "The mixer combines and stabilizes recipe components so flavour, sweetness and carbonation remain consistent throughout a production run.",
      "It is designed for direct integration with carbonated-drink filling equipment.",
    ],
    features: [
      "Controlled water and syrup proportioning",
      "CO₂ integration",
      "Consistent recipe mixing",
      "Product stabilization before filling",
      "Integration with high-speed carbonated lines",
    ],
    image: image("qhs-drink-mixer"),
  },
  {
    slug: "dth-series-electrothermal-sugar-melting-boiler",
    title: "DTH Electrothermal Sugar Melting Boiler",
    category: "Auxiliary machines",
    summary: "An electrically heated vessel for dissolving sugar and maintaining a uniform syrup for beverage production.",
    overview: [
      "Controlled electric heating and mixing dissolve sugar quickly while maintaining the selected syrup temperature.",
      "The process is intended to avoid localized caramelization, stabilize viscosity and supply a consistent feed to downstream blending.",
    ],
    features: [
      "Electric process heating",
      "Controlled syrup temperature",
      "Homogeneous sugar dissolution",
      "Mixing designed to limit caramelization",
      "Integration with beverage blending systems",
    ],
    image: image("dth-series-electrothermal-sugar-melting-boiler"),
  },
  {
    slug: "tq-2-vacuum-deaerator",
    title: "TQ-2 Vacuum Deaerator",
    category: "Auxiliary machines",
    summary: "A vacuum-processing unit for removing dissolved oxygen and other gases from liquid before carbonation and filling.",
    overview: [
      "Removing oxygen limits oxidation that can affect flavour and shelf life, while reducing gas interference during CO₂ dosing.",
      "Lower entrained-gas levels also help manage foam during filling and pressure imbalance in sealed packages.",
    ],
    features: [
      "Dissolved-oxygen removal",
      "Improved CO₂ dissolution efficiency",
      "Foam reduction during filling",
      "Support for package-pressure stability",
    ],
    image: image("tq-2-vacuum-deaerator"),
  },
  {
    slug: "djm-vertical-colloid-mill",
    title: "DJM Vertical Colloid Mill",
    category: "Auxiliary machines",
    summary: "A high-shear mill for reducing particle size and producing stable emulsions, suspensions and fine pastes.",
    overview: [
      "The mill homogenizes syrups, concentrates and flavour ingredients before carbonation or filling.",
      "It can refine fruit pulp and insoluble particles while helping stabilize oil-based flavours in beverage recipes.",
    ],
    features: [
      "High-shear particle-size reduction",
      "Syrup and concentrate homogenization",
      "Fine processing of fruit pulp and fibres",
      "Stabilization of emulsions and suspensions",
      "Food, beverage and pharmaceutical applications",
    ],
    image: image("djm-vertical-colloid-mill"),
  },
  ...injectionAncillaries,
  ...additionalMachines,
];

export const solutions: Solution[] = [
  {
    slug: "bottled-water-production-line",
    title: "Turnkey Bottled Water Production",
    image: "/eone/bestcrown/water-combiblock.webp",
    imageAlt: "Best Crown stainless-steel PET water blow–fill–cap equipment in a production facility",
    imageCaption: "Best Crown integrated PET water combi-block, 2022 catalogue, pp. 1–2.",
    summary: "Complete PET water production, from purification and bottle forming to filling and packing. Best Crown combi-block references reach 72,000 bottles/hour at 500 mL.",
    overview: [
      "With Best Crown, E-One can configure a standalone rinse–fill–cap machine or an integrated blow–fill–cap combi-block. The integrated layout carries preforms through bottle formation, filling and capping in one machine, reducing intermediate empty-bottle transfers, accumulation and storage. A separate blower and filling monoblock allows more flexibility in bottle supply and layout.",
      "The water-treatment system is selected from the source-water analysis and finished-product specification. The treatment train combines suitable pretreatment, advanced purification and final treatment, then supplies the filler through a clean storage and transfer system. An ozone-free water combi-block can be evaluated for qualifying mineral or spring-water projects.",
      "Best Crown's filling options include gravity mechanical valves, flowmeter valves and weighing-based configurations for compatible large-volume formats. Confirm the neck finish, fill accuracy, valve selection and change parts for each bottle size.",
      "Filled bottles continue through the selected sleeve or OPP labelling system. Laser coding can add production date, batch and expiry details to suitable packaging before shrink wrapping, tray packing or carton boxing.",
    ],
    stages: [
      { title: "Treat the source water", body: "Review the source and product specification, then select filtration, RO or other required treatment, disinfection, storage and transfer." },
      { title: "Form or feed bottles", body: "Choose in-house PET stretch blowing with either integrated filling or air conveying to a monoblock. Ready-made bottle supply can also be evaluated." },
      { title: "Fill and cap", body: "Select the rinse–fill–cap or blow–fill–cap platform and valves for bottle volume, hygienic transfer, closure integrity and target output." },
      { title: "Inspect, label and pack", body: "Check fill level and cap, apply sleeve or OPP labels and traceability codes, then shrink-wrap, carton and palletise as specified." },
    ],
    liquids: [
      { title: "Still drinking and purified water", body: "The standard application. Treatment and sanitation are selected around the incoming water quality and finished product." },
      { title: "Mineral and spring water", body: "Best Crown lists both mineral and spring water among its PET water applications, including a dedicated ozone-free option. Preserve the required product profile and select the approved treatment." },
      { title: "Still enhanced water", body: "Added minerals, electrolytes or flavour can change the blending, cleaning and filling requirements. Share the recipe and storage instructions before configuring the line." },
    ],
    relatedMachines: ["automatic-linear-bottle-blowing-machine", "automatic-rotary-bottle-blowing-machine", "bottle-water-filling-machine", "reverse-osmosis-ro-water-treatment-system", "ultrafiltration-water-treatment-system", "oop-labelling-machine", "sleeve-labelling", "laser-coding-machine", "shrink-packaging-machine", "carton-packer", "automatic-palletizer"],
  },
  {
    slug: "carbonated-drink-production-line",
    title: "Turnkey Carbonated Drink Production",
    image: "/eone/bestcrown/carbonated-pet.webp",
    imageAlt: "Best Crown PET carbonated drink blowing, filling and capping combination machine",
    imageCaption: "Best Crown PET CSD blow–fill–cap combination system, 2022 catalogue, p. 14.",
    summary: "Pressure filling for soft drinks and sparkling beverages in PET bottles, with Best Crown combi-block capacity references up to 54,000 BPH at 500 mL.",
    overview: [
      "A complete soft-drink line brings together source-water treatment, syrup preparation, proportioning, product cooling, carbonation and pressure filling. Pure sparkling-water recipes can use a different blending arrangement from flavoured soft drinks. The treated drink is delivered to the filler at the agreed product conditions.",
      "Best Crown's PET CSD combi-block integrates bottle formation with isobaric filling and capping. It offers equal-pressure mechanical or flowmeter valves by configuration. In the supported bottle range, match the preform, pressure-rated bottle and closure to the carbonated product.",
      "For sensitive carbonated and still beverages, Best Crown also references a dual-purpose aseptic platform with flowmeter filling and aseptic servo capping. Its hygiene and product-treatment requirements must be assessed for the actual recipe and intended shelf life.",
      "The finished bottle moves through inspection, labelling, coding, accumulation and secondary packing. E-One reviews foam, CO₂ retention, fill accuracy and cap performance using the actual drink and package before agreeing the completed-line output.",
    ],
    stages: [
      { title: "Prepare the drink", body: "Treat water, prepare syrup where required, blend the recipe and configure the deaeration, cooling and carbonation equipment." },
      { title: "Form the pressure-rated bottle", body: "Match PET preforms, bottle moulds and neck finish to the product, cap and integrated or separate blowing arrangement." },
      { title: "Fill under pressure", body: "Select the isobaric valve technology and matched capper around the beverage carbonation, temperature, foam behaviour and output." },
      { title: "Inspect and pack", body: "Check fill, closure and codes, label the containers, then shrink-wrap or carton for dispatch." },
    ],
    liquids: [
      { title: "Carbonated soft drinks", body: "Cola, citrus and other flavoured sodas can use a syrup-mixing and carbonation setup matched to the recipe." },
      { title: "Sparkling mineral and soda water", body: "The Best Crown PET CSD catalogue includes sparkling mineral water and sparkling soda. Confirm the product CO₂ target and pressure-rated bottle." },
      { title: "Carbonated juice and sensitive drinks", body: "Sparkling juice and other sensitive formulations require a review of acidity, particles, foam and the filling hygiene route before selecting the platform." },
      { title: "Malt and other foam-sensitive beverages", body: "Evaluate compatibility, oxygen control, product treatment and pack performance for these recipes before agreeing a line configuration." },
    ],
    relatedMachines: ["reverse-osmosis-ro-water-treatment-system", "qhs-drink-mixer", "tq-2-vacuum-deaerator", "dth-series-electrothermal-sugar-melting-boiler", "automatic-rotary-bottle-blowing-machine", "carbonated-filling-machine", "oop-labelling-machine", "sleeve-labelling", "laser-coding-machine", "shrink-packaging-machine", "carton-packer", "automatic-palletizer"],
  },
  {
    slug: "aseptic-production-line",
    title: "Turnkey Aseptic Beverage Production",
    image: "/eone/bestcrown/aseptic-gwjx.webp",
    imageAlt: "Best Crown GWJX dry aseptic PET blow–fill–cap combination equipment",
    imageCaption: "Best Crown GWJX dry aseptic PET combi-block, 2022 catalogue, p. 6.",
    summary: "Sensitive-beverage processing and aseptic PET filling with Best Crown dry aseptic combi-block and cold-fill monoblock configurations.",
    overview: [
      "E-One works with Best Crown to configure the product-treatment and filling system around the intended beverage. A validated thermal process prepares the product, and a controlled product circuit transfers it to the filling zone. Package and closure treatment, filling-zone management and seal integrity are integral to the delivery scope.",
      "Best Crown's GWJX dry aseptic combi-block integrates PET bottle formation, package preparation, filling and closing. Its aseptic cold-fill monoblock can be evaluated where bottles are formed separately. The manufacturer also offers an ultra-clean platform for suitable products with different treatment and distribution requirements.",
      "Choose the filling valve and equipment configuration around actual pH, viscosity, fibres or particles. Low-acid milk and protein beverages need a different validated treatment scope from many acidic juices. The catalogue includes both flowmeter and electronic weighing configurations for aseptic filling.",
      "Agree the process and packaging validation, cleaning and sterilisation interfaces, monitoring, product changeovers and acceptance testing with the project team. Confirm finished-product quality and shelf life under the intended storage conditions before commercial release.",
    ],
    stages: [
      { title: "Prepare the beverage", body: "Balance product blending, homogenisation or filtration with the specified recipe and processing flow." },
      { title: "Treat and transfer", body: "Use the validated product-treatment process, controlled transfer and any necessary hygienic buffer arrangement for the selected filler." },
      { title: "Prepare bottle and closure", body: "Choose the integrated PET blowing or separate bottle supply arrangement with packaging treatment and controlled filling-zone interfaces." },
      { title: "Fill, close and verify", body: "Choose the valve and capper for the product and bottle. Inspect, label, code and pack under the approved product and packaging programme." },
    ],
    liquids: [
      { title: "Juice, NFC and nectar", body: "Fruit juice, not-from-concentrate (NFC) products and nectars need a review of acidity, pulp, fibres, oxygen sensitivity and product-treatment requirements." },
      { title: "Tea and functional beverages", body: "Select the filling route for the tea extract, flavour, sweetener and heat sensitivity. Confirm the intended storage temperature and package before selecting the equipment." },
      { title: "Milk and plant-based drinks", body: "Evaluate UHT and aseptic packing for a long-life format, including heat stability, formulation and allergen changeovers." },
      { title: "Drinkable yoghurt", body: "Evaluate smooth, pumpable formulations. Confirm viscosity, culture requirements and distribution temperature. Spoonable yoghurt may need a different process and filler." },
    ],
    relatedMachines: ["aseptic-bottle-filling-machine", "plate-sterilizing-equipment", "gjb-series-high-compressor-homogenize", "tq-2-vacuum-deaerator", "sleeve-labelling", "laser-coding-machine", "carton-packer", "automatic-palletizer"],
  },
  {
    slug: "barrel-water-production-line",
    title: "Barrel Water Production Line",
    image: "/eone/bestcrown/barrel-filling.webp",
    imageAlt: "Best Crown five-gallon DG5 barrel washing, filling and capping machine",
    imageCaption: "Best Crown DG5 five-gallon water filling system, 2022 catalogue, p. 4.",
    summary: "Automatic washer, filler and capper for 12–19 L containers. Best Crown DG5 reference output ranges from 600 to 3,000 barrels/hour at 18.9 L.",
    overview: [
      "Best Crown's DG5 production line combines automatic barrel washing, filling and capping. E-One selects a returnable-container layout around the condition of incoming barrels, de-capping and inspection needs, wash sequence, available floor space and clean transfer route.",
      "The product-water system is sized for large-volume filling plus washing and rinsing consumption. Treatment may include appropriate filtration, reverse osmosis and final water-quality controls according to the source and finished product.",
      "The catalogue references mechanical, flowmeter and ultrasonic-positioning valve options for different barrel-filling requirements. Specify container height, neck, cap and fill measurement before selecting the filler and handling parts.",
      "The capped barrels are checked, coded where the pack supports it and routed to clean finished-stock handling for home, office or commercial dispenser distribution.",
    ],
    stages: [
      { title: "Inspect and prepare barrels", body: "Sort new and returned containers, remove used closures where required and reject unsuitable or damaged barrels." },
      { title: "Wash and supply water", body: "Match the validated external and internal cleaning sequence, rinsing, water treatment and buffer supply to the barrel condition." },
      { title: "Fill and cap", body: "Select the DG5 configuration and valve type for the actual 12–19 L pack, fill accuracy and compatible dispenser closure." },
      { title: "Inspect and dispatch", body: "Check fill and cap integrity, add approved traceability marks and move finished barrels to clean storage." },
    ],
    liquids: [
      { title: "Purified and drinking water", body: "Configure the treatment and washing programme against source-water analysis and the finished dispenser-water requirements." },
      { title: "Mineral and spring water", body: "Best Crown lists mineral and spring water as DG5 applications. Confirm the approved treatment and product-quality parameters for the source." },
    ],
    relatedMachines: ["barrel-filling-machine", "reverse-osmosis-ro-water-treatment-system", "laser-coding-machine"],
  },
  {
    slug: "dairy-milk-production-line",
    title: "Dairy Milk Production Line",
    image: "/eone/bestcrown/dairy-ultra-clean.webp",
    imageAlt: "Best Crown ultra-clean PET liquid dairy beverage filling equipment",
    imageCaption: "Best Crown ultra-clean liquid dairy filling unit, 2022 catalogue, pp. 17–18.",
    summary: "Integrated processing and hygienic bottled dairy filling, including Best Crown ultra-clean cold-chain configurations and project-specific aseptic routes.",
    overview: [
      "A dairy project starts with milk reception, testing, chilling, clarification and standardisation. Configure blending, homogenisation and the validated thermal process around the fat and protein content, intended texture, product sensitivity and output.",
      "Best Crown's ultra-clean liquid dairy filling line is designed for cold-chain products including pasteurised milk, fermented yoghurt and active probiotic beverages. It references PET or PP bottles with tamper-evident caps and non-contact filling valves. E-One evaluates the bottle infeed, closure, hygienic transfer and chilled distribution arrangements for the intended product.",
      "For long-life ambient products, scope the UHT process and aseptic filling route together, including the packaging barrier, product transfer and validation. The selected recipe and storage requirements determine whether the chilled or ambient system is appropriate.",
      "Confirm the filling machine, sanitary circuits, monitoring and changeover arrangements. Finish the product with suitable labels, traceability codes, case packing and cold or ambient transport arrangements according to the approved distribution plan.",
    ],
    stages: [
      { title: "Receive and standardise", body: "Test, chill, clarify and adjust raw milk or prepared ingredients to the target composition." },
      { title: "Homogenise and heat-treat", body: "Set the homogenisation duty and thermal treatment for the recipe and intended shelf life." },
      { title: "Prepare product and pack", body: "Choose chilled holding or the validated aseptic circuit, compatible bottle supply, closure and hygiene requirements." },
      { title: "Fill and distribute", body: "Use the selected ultra-clean or aseptic configuration, then inspect, code and pack for the agreed storage and distribution conditions." },
    ],
    liquids: [
      { title: "Pasteurised milk and milk drinks", body: "Best Crown's chilled dairy range supports evaluation of fresh pasteurised milk and suitable flavoured milk products with a controlled cold chain." },
      { title: "Drinkable yoghurt and probiotics", body: "Review the viscosity, live-culture requirements and refrigeration programme for smooth drinkable yoghurt or active probiotic formulations." },
      { title: "Long-life milk and protein beverages", body: "Evaluate the separate UHT and aseptic route for suitable low-acid liquids and validated ambient storage." },
    ],
    relatedMachines: ["plate-sterilizing-equipment", "gjb-series-high-compressor-homogenize", "aseptic-bottle-filling-machine", "sleeve-labelling", "laser-coding-machine", "carton-packer", "automatic-palletizer"],
  },
  {
    slug: "juice-production-line",
    title: "Juice Production Line",
    image: "/eone/bestcrown/hot-fill-juice.webp",
    imageAlt: "Best Crown enclosed PET hot-fill beverage production equipment",
    imageCaption: "Best Crown PET hot-fill production line, 2022 catalogue, p. 9.",
    summary: "Complete production for juice, tea, nectar and fruit-containing drinks, with hot-fill, ultra-clean and fruit-particle configurations.",
    overview: [
      "E-One configures the preparation section for fresh-fruit extraction, concentrate dilution or ready-prepared ingredients. Treatment of process water, recipe blending, sugar or flavour dosing, deaeration and homogenisation are selected for the required beverage quality and texture.",
      "Best Crown's enclosed PET hot-fill line integrates the filling and closing operations with PLC control, a filling-temperature control system and cleaning interfaces. The hot-fill configuration requires a bottle and closure suitable for the approved temperature and cooling cycle.",
      "For beverages containing fruit pieces, Best Crown provides a small-particle filling model and a larger-particle configuration using separate fruit and liquid dosing. Its catalogue differentiates products below 5 mm from larger pieces above 5 mm and below 15 mm. Select the valve, neck finish, product handling and capacity around the actual formulation.",
      "The ultra-clean and aseptic routes are additional technology choices for suitable NFC juices, teas and protein drinks. Product trials determine the validated heat treatment, filling duty, packaging and intended storage. Finished packs then pass to inspection, labelling, coding and secondary packing.",
    ],
    stages: [
      { title: "Prepare ingredients", body: "Use suitable fruit preparation and extraction or concentrate blending. Establish the water and ingredient quality for each SKU." },
      { title: "Blend and treat", body: "Configure deaeration, ingredient dosing, homogenisation when appropriate and the validated thermal process." },
      { title: "Choose the filling route", body: "Select hot-fill, ultra-clean or aseptic equipment based on the recipe and shelf-life goal. Match particle handling and bottle design to the product." },
      { title: "Inspect, cool and pack", body: "Apply the required cooling and handling arrangement, verify closures and fill, then label, code, carton or shrink-wrap for distribution." },
    ],
    liquids: [
      { title: "Juices and nectars", body: "Pure juice, juice drinks, nectars and NFC beverages may require different extraction or blending steps and treatment conditions." },
      { title: "Tea and functional drinks", body: "Best Crown references tea and functional beverages within its hot-fill range. Review extraction, recipe consistency and heat sensitivity." },
      { title: "Fruit-particle beverages", body: "Choose the small or large fruit-particle configuration after checking the actual piece size, bottle neck, texture and mixing behaviour." },
      { title: "Protein and sensitive drinks", body: "Evaluate the appropriate ultra-clean or aseptic filling route and thermal process for the formulation and intended shelf life." },
    ],
    relatedMachines: ["lz-1-5-type-spiral-juice-extractor", "djm-vertical-colloid-mill", "tq-2-vacuum-deaerator", "plate-sterilizing-equipment", "juice-filling-machine-hot-filling", "aseptic-bottle-filling-machine", "sleeve-labelling", "laser-coding-machine", "shrink-packaging-machine", "carton-packer", "automatic-palletizer"],
  },
  {
    slug: "plastic-injection-cap-compression-machines",
    title: "Total Injection Machines",
    image: "/eone/hwamda/m8sii-hmd320.webp",
    imageAlt: "HWAMDA HMD320M8-SII servo-hydraulic injection moulding machine",
    imageCaption: "HWAMDA HMD320M8-SII general-purpose press, manufacturer model reference.",
    summary: "Complete plastics production cells built around HWAMDA injection machines, WENSUI auxiliary equipment and precision tooling.",
    overview: [
      "HWAMDA is E-One’s principal injection machinery partner. The M8-SII servo-hydraulic range serves a broad variety of moulded plastic products, while the dedicated HMD PET and pail configurations address preform and thin-wall packaging requirements. Our separately specified cap compression option remains available for appropriate closure projects.",
      "E-One engineers the cell around the machine, mould and finished product. We review the resin, shot size, mould envelope, clamp force, target cycle and part-handling needs. WENSUI resin preparation, robot takeout, cooling, conveying and regrind equipment can then be selected as a coordinated ancillary package.",
      "Typical projects include PET preforms for water and beverage bottles, paint and industrial pails, consumer goods, housewares, closures and plastic packaging. Each quoted output is tied to an approved material, part, mould and cycle.",
    ],
    stages: [
      { title: "Define the component", body: "Confirm resin, geometry, tolerances, colour and expected production volume." },
      { title: "Select the process", body: "Choose injection moulding for preforms and components or compression moulding for closures." },
      { title: "Engineer the mould", body: "Match the machine, mould and utilities to the component and cycle target." },
      { title: "Commission production", body: "Validate part quality, repeatability, handling and operator procedures." },
    ],
    relatedMachines: ["pet-preform-injection-moulding-machine", "injection-moulding-machine", "pail-injection-moulding-machine", "cap-compression-machine"],
  },
  {
    slug: "edible-oil-filling-machines",
    title: "Edible Oil Filling Machines",
    image: "/eone/edible-oil-line.webp",
    summary: "Configurable filling and packaging systems for vegetable, palm, sunflower, soybean, groundnut and specialty oils.",
    overview: [
      "The filling system can be engineered for PET or glass bottles, HDPE jerry cans, pouches and metal tins across small retail and bulk formats.",
      "The Best Crown catalogue includes PET oil-bottle formation within its rotary blow-moulding applications. For in-house bottle supply, evaluate the blow mould, preform, bottle geometry and closure before matching the bottle output to E-One's oil filling project.",
      "Semi-automatic arrangements use operator bottle placement for lower or moderate output. Fully automatic lines add conveyors, controlled nozzles and PLC/HMI operation for higher throughput.",
      "Labelling, coding and secondary packaging can be integrated around the selected container and route to market.",
    ],
    stages: [
      { title: "Define the oil and pack", body: "Confirm product viscosity, container material, size and closure." },
      { title: "Select automation", body: "Choose operator-assisted or fully automatic handling around the target output." },
      { title: "Fill accurately", body: "Configure the nozzle and dosing method for clean filling with controlled product loss." },
      { title: "Finish the pack", body: "Add capping, labelling, traceability coding and secondary packaging." },
    ],
    relatedMachines: ["automatic-rotary-bottle-blowing-machine", "oop-labelling-machine", "laser-coding-machine", "shrink-packaging-machine", "carton-packer"],
  },
  {
    slug: "moulds",
    title: "Moulds",
    image: "/eone/heyan/preform-mould.webp",
    imageAlt: "Heyan multi-cavity preform mould with its core, takeout and cavity plates",
    imageCaption: "Heyan precision preform tooling, supplied manufacturer catalogue, p. 3.",
    summary: "Precision tooling from Heyan Moulds, E-One’s principal mould partner. PET preforms, rotary and linear bottle-blow moulds, caps, handles and lifting rings.",
    overview: [
      "With Foshan Heyan Precision Mold Technology, E-One helps plastic and beverage manufacturers specify new moulds, replace existing tooling and develop new pack formats. Heyan’s catalogue includes needle-valve hot-runner preform moulds from 1 to 144 cavities, as well as bottle blowing, closure, handle and lifting-ring tooling.",
      "The mould is as important as the machine that carries it. We start with the product drawing or sample, resin, desired weight, neck and closure interface, production target and available press or blower. The resulting specification addresses cavity count, cooling, ejection, hot-runner control, tool fit and maintainability.",
      "Heyan's packaging applications include bottled water, carbonated drinks, juices, edible oils, food and personal-care packaging. Tooling for PET, PP, PC and Tritan is assessed against the intended material and component. Agree sample approvals, replaceable inserts, spare wear parts and trial acceptance criteria before ordering.",
    ],
    stages: [
      { title: "Design the pack or part", body: "Agree the 3D drawing, resin, weight, neck finish, mating parts, appearance and dimensional tolerances." },
      { title: "Engineer the tool", body: "Confirm cavities, runner and gate design, material, cooling, ejection, replaceable inserts and moulding machine interface." },
      { title: "Trial and approve", body: "Review mould-trial samples, cavity variation, neck or closure fit and the cycle on the intended product." },
      { title: "Support production", body: "Plan mounting, controller connections, spares, changeover and ongoing maintenance as part of the E-One project." },
    ],
    relatedMachines: ["pet-preform-injection-moulding-machine", "injection-moulding-machine", "pail-injection-moulding-machine", "cap-compression-machine", "automatic-linear-bottle-blowing-machine"],
  },
  {
    slug: "turnkey-beverage",
    title: "Turnkey Beverage Solutions",
    image: "/eone/bestcrown/turnkey-conveying.webp",
    imageAlt: "Best Crown integrated beverage production facility with stainless-steel bottle conveyors and processing equipment",
    imageCaption: "Best Crown complete-line conveyor arrangement, 2022 equipment catalogue, p. 23.",
    summary: "E-One and Best Crown deliver integrated beverage line configurations for bottled water, carbonated drinks, juice, aseptic beverages and dairy.",
    overview: [
      "Langfang BestCrown Packing Machinery Co., Ltd. is E-One’s principal beverage filling turnkey partner. Its catalogue covers complete PET drinking-water, carbonated-beverage, fruit juice, tea, protein drink and dairy production systems, with clean, ultra-clean and aseptic filling options.",
      "E-One combines the beverage preparation, bottle formation, filling and downstream equipment around the required finished-pack rate. Choose an integrated blow–fill–cap combi-block where it fits the product and capacity, or a filling monoblock with a separate bottle supply arrangement.",
      "Project planning includes the raw-material and product-property review, bottle and closure drawings, equipment layout, utilities and changeover arrangements. Agree the operating targets, inspection requirements, acceptance programme, commissioning and operator training scope before ordering.",
    ],
    stages: [
      { title: "Prepare water and ingredients", body: "Analyse the water source and recipe, then configure process-water treatment, blending and thermal or carbonation equipment as needed." },
      { title: "Form or feed the package", body: "Choose the PET blowing system, compatible container infeed and matched preform, mould and closure arrangement." },
      { title: "Fill and close", body: "Select water, isobaric, hot-fill, ultra-clean or aseptic filling technology around the product, hygiene requirements and target speed." },
      { title: "Inspect and dispatch", body: "Integrate label, code and fill inspection, conveyors, film or carton packing and palletising for the expected finished throughput." },
    ],
    subsolutions: ["bottled-water-production-line", "carbonated-drink-production-line", "aseptic-production-line"],
    relatedMachines: [],
  },
];

export const majorSolutions = [
  "plastic-injection-cap-compression-machines",
  "moulds",
  "turnkey-beverage",
];

export const machineCategoryLabels: Record<"All machines" | MachineCategory, string> = {
  "All machines": "All Machines",
  "Auxiliary machines": "Ancillary Machines",
  "Bottle blowing": "Bottle Blowing Machine",
  "Coding machines": "Coding Machines",
  "Injection machines": "Injection Machines",
  "Labelling machines": "Labelling Machines",
  "Liquid filling": "Liquid Filling Machine",
  "Packaging machines": "Packaging Machines",
  "Water treatment": "Water Treatment",
};

export const machineCategories: ("All machines" | MachineCategory)[] = [
  "All machines",
  "Auxiliary machines",
  "Bottle blowing",
  "Coding machines",
  "Injection machines",
  "Labelling machines",
  "Liquid filling",
  "Packaging machines",
  "Water treatment",
];

export const machineBySlug = (slug: string) => machines.find((machine) => machine.slug === slug);
export const solutionBySlug = (slug: string) => solutions.find((solution) => solution.slug === slug);


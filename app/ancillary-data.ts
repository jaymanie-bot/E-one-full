import type { Machine } from "./catalogue-data";

const manufacturer = "https://www.wensui.us";
const local = (name: string) => `/eone/wensui/${name}.webp`;

type Ancillary = Omit<Machine, "category" | "partner">;

const equipment: Ancillary[] = [
  {
    slug: "servo-robot",
    title: "Servo Robot",
    summary: "WENSUI multi-axis takeout robots for automated removal, positioning and transfer of moulded products.",
    overview: [
      "E-One selects WENSUI servo robots to take moulded parts out of the open press and place them in a defined position on a conveyor, inspection station, cooling fixture or collection area. Coordinated press and robot control helps make the handling step repeatable and reduces manual intervention in the production cell.",
      "The robot is sized around the total payload, including the gripper, part or multiple parts, runner and sensors. Match the vertical, transverse and traverse strokes to the mould opening and drop position. Review the required takeout cycle, mounting interface and guarding before quotation.",
    ],
    features: ["Three-axis servo control on the referenced H series", "Part-specific gripper and vacuum or mechanical holding options", "Programmable takeout and placement", "Integration with the press and downstream conveyor"],
    specs: [{ label: "WENSUI H series payload", value: "12–100 kg, by model" }, { label: "Vertical stroke", value: "1,200–3,000 mm, by model" }],
    image: local("servo-robot"),
    fallbackImage: local("servo-robot-installed"),
    imageCaption: "WENSUI H-series servo takeout robot, manufacturer product photo.",
    specSource: `${manufacturer}/automation-series/h-series-servo-robot/`,
  },
  {
    slug: "sprue-picker",
    title: "Sprue Picker",
    summary: "WENSUI swing-arm sprue removal for separating runners from accepted injection-moulded products.",
    overview: [
      "A sprue picker is an economical automation option when the handling task primarily involves removing a runner or sprue and dropping it into a separate collection bin. E-One specifies the WENSUI arm around the open-mould space, sprue shape, weight and removal position.",
      "Review the press mounting, arm reach and gripper selection with the actual tooling. The JR reference is intended for simple pick-and-drop handling; a multi-axis robot may be more appropriate when the same cell must orient and place finished parts.",
    ],
    features: ["Pneumatic swing-arm removal on the JR reference", "Separate runner collection for controlled recycling", "Gripper and stroke options matched to tooling", "Press control and cycle integration"],
    specs: [{ label: "WENSUI JR example vertical strokes", value: "550 or 650 mm" }, { label: "Maximum load", value: "3 kg on the referenced models" }],
    image: local("sprue-picker"),
    imageCaption: "WENSUI robotic sprue picker, distributor product reference.",
    specSource: "https://static1.squarespace.com/static/65646c33af061724a35f085b/t/6823688feb5084092a1b074d/1747150994880/Wensui%2Bcatalog-Robot.pdf",
  },
  {
    slug: "belt-conveyor",
    title: "Belt Conveyor",
    summary: "WENSUI CB belt conveyors for moving moulded products to inspection, sorting or packing.",
    overview: [
      "The WENSUI CB series provides a controlled transfer route from the moulding machine or takeout robot to the next workstation. A conveyor can reduce routine handling and give the production team a consistent place to inspect, count or pack finished parts.",
      "E-One assesses layout, part geometry, belt width, transfer height, travel direction and part temperature. The belt and discharge height must suit the product, especially when parts are warm, easily marked or likely to roll.",
    ],
    features: ["Adjustable conveyor height and configured belt dimensions", "Robot discharge and moulding chute integration", "Choice of belt widths by machine model", "Layout configured for product handling and packing"],
    specs: [{ label: "WENSUI CB belt width", value: "200–600 mm, by model" }, { label: "Maximum belt speed", value: "6 m/min on the referenced range" }],
    image: local("belt-conveyor"),
    imageCaption: "WENSUI CB belt conveyors, supplied auxiliary-equipment selection guide.",
    specSource: `${manufacturer}/automation-series/cb-belt-conveyor/`,
  },
  {
    slug: "granulator",
    title: "Granulator",
    summary: "WENSUI slow-speed and central granulation options for recovering appropriate plastic scrap.",
    overview: [
      "The WENSUI WVGO low-speed beside-the-press granulator reduces suitable sprues, runners and rejected parts into regrind. Its compact location next to a press helps separate material at the point of production. Larger central granulation systems can be evaluated for shared recycling duties.",
      "E-One selects the feed opening and throughput using the actual scrap dimensions, resin grade and expected kilograms per hour. Include collection, fine separation and material tracking in the scope. Reuse only in products for which the grade, quality and application requirements permit regrind.",
    ],
    features: ["WVGO beside-the-press slow-speed configuration", "Central granulator options for different material duties", "Selected feed opening, rotor and collection arrangement", "Integration with regrind transfer and dust separation"],
    specs: [{ label: "WENSUI WVGO reference throughput", value: "15–40 kg/h across listed models" }, { label: "Reference rotor speed", value: "24 rpm" }],
    image: local("granulator"),
    imageCaption: "WENSUI WVGO low-speed granulator, supplied auxiliary-equipment selection guide.",
    media: [{ image: local("central-granulator"), title: "Central granulation alternative", description: "WENSUI WSGJ configuration shown in the selection guide. Assess it against the expected scrap dimensions and shared recycling capacity." }],
    specSource: `${manufacturer}/granulating-and-recycling-series/wsgo-low-speed-granulator/`,
  },
  {
    slug: "dust-separation-system",
    title: "Dust Separation System",
    summary: "WENSUI RFF dust-separation and material-transfer equipment for granulated plastic.",
    overview: [
      "The RFF system helps separate fines from reusable granulated material before collection or subsequent transfer. E-One evaluates it as part of a complete recycling arrangement, matching the separator to the granulator's output and particle characteristics.",
      "Select the motor and transfer arrangement using the material rate, conveying lift, pipeline length, dust loading and collection capacity. Check remaining fines at normal operating conditions and arrange accessible dust collection and routine servicing.",
    ],
    features: ["Separation of fines from granulated material", "Regrind conveying and collection", "Motor and lift selection by configuration", "Integration with WENSUI granulators and recycling equipment"],
    specs: [{ label: "WENSUI RFF motor range", value: "1.5–5.5 kW, by model" }, { label: "Reference conveying height", value: "3–5 m, by model" }],
    image: local("dust-separator"),
    imageCaption: "WENSUI RFF dust-separation system, manufacturer product photograph.",
    specSource: `${manufacturer}/granulating-and-recycling-series/rff-series-dust-separating-system/`,
  },
  {
    slug: "dehumidifier",
    title: "Dehumidifier",
    summary: "WENSUI VD desiccant-rotor equipment for the controlled drying of moisture-sensitive plastics, including PET.",
    overview: [
      "Moisture-sensitive resin needs more than a standard heated hopper when the material specification calls for low-dew-point process air. WENSUI's VD desiccant-rotor dehumidifier supplies dry air to the connected hopper, helping prepare the material for consistent moulding.",
      "E-One checks airflow, material consumption, incoming moisture, drying temperature and the resin supplier's final-moisture requirement. A standalone VD dehumidifier or a combined drying and dehumidification package can be assessed for a new PET preform or engineering-plastics cell.",
    ],
    features: ["Desiccant rotor dry-air system", "Configurable air supply matched to hopper and resin", "Dew-point monitoring option on reference range", "Integration with standalone or combined drying equipment"],
    specs: [{ label: "WENSUI VD80H–VD300H examples", value: "80–300 m³/h of hot-air flow" }, { label: "Published dew point", value: "Below −40 °C under specified conditions" }],
    image: local("dehumidifier"),
    imageCaption: "WENSUI VD-series dehumidifier, supplied auxiliary-equipment selection guide.",
    media: [{ image: local("integrated-drying-unit"), title: "Integrated resin preparation", description: "WENSUI combined drying/dehumidification equipment from the selection guide. E-One confirms the required resin handling and dry-air capacity." }],
    specSource: `${manufacturer}/drying-and-dehumidifying-series/vd-desiccant-rotor-dehumidifier/`,
  },
  {
    slug: "hopper-dryer",
    title: "Hopper Dryer",
    summary: "WENSUI WSDB resin hopper dryers for controlled pre-moulding material preparation.",
    overview: [
      "The WENSUI WSDB hopper dryer holds the resin and supplies controlled heated air as material feeds through the hopper into the moulding machine. Correct hopper sizing helps give the material adequate residence time rather than simply matching a nominal press tonnage.",
      "E-One evaluates hopper capacity and heater duty from actual material consumption, bulk density and resin requirements. The WENSUI selection guide also includes high-temperature and high-capacity dryer configurations and combined dryer/dehumidifier units. For PET and other hygroscopic resins, assess the required dry-air supply as a complete package.",
    ],
    features: ["Controlled hot-air drying", "Material-level inspection window on the reference range", "Machine mounting or stand-mounted layout", "High-temperature, high-volume and integrated drying alternatives assessed by application"],
    specs: [{ label: "WENSUI WSDB rated hopper capacity", value: "12–800 kg, based on PA6 granules" }, { label: "Heating power", value: "1.6–30 kW, by model" }],
    image: local("hopper-dryer"),
    imageCaption: "WENSUI WSDB standard hopper dryer, supplied auxiliary-equipment selection guide.",
    media: [
      { image: local("high-temperature-dryer"), title: "High-temperature dryer", description: "VDB-series reference for applications requiring a different resin-drying configuration." },
      { image: local("large-hopper-dryer"), title: "High-capacity dryer", description: "WSDH-series reference for higher-volume resin preparation; select hopper size from the actual consumption and residence requirements." },
      { image: local("integrated-drying-unit"), title: "Integrated drying and dehumidification", description: "VMD combined-unit reference where the resin needs conditioned dry air and coordinated feeding." },
    ],
    specSource: `${manufacturer}/drying-and-dehumidifying-series/wsdb-standard-hopper-dryer/`,
  },
  {
    slug: "resin-auto-loader",
    title: "Resin Auto-Loader",
    summary: "WENSUI automatic vacuum loading for transferring resin pellets to a dryer or injection press.",
    overview: [
      "The self-contained WENSUI WSAL-300G uses a vacuum receiver to replenish a connected hopper when material is required. E-One selects the loading arrangement to reduce manual lifting and interruptions in the resin feed to a press or dryer.",
      "The selection guide uses the press's hourly material consumption and an allowance when selecting the loader. Actual transfer capacity also depends on pellet characteristics, hose routing, lift and conveying length. Larger or multi-press installations may require a central conveying system instead.",
    ],
    features: ["Stand-alone vacuum loading and demand-controlled feeding", "Hopper or dryer connection", "Material-shortage alert and accessible filter on reference model", "Central-feed alternatives for multiple production machines"],
    specs: [
      { label: "WENSUI WSAL-300G reference conveying capacity", value: "300 kg/h at catalogue conditions" },
      { label: "Reference lift and receiver volume", value: "3.5 m pump lift and 6 L receiver" },
    ],
    image: local("auto-loader"),
    imageCaption: "WENSUI WSAL-300G auto-loader, supplied auxiliary-equipment selection guide.",
    specSource: `${manufacturer}/feeding-and-conveying-series/wsal-300g-stand-alone-autoloader/`,
  },
  {
    slug: "industrial-water-chiller",
    title: "Industrial Water Chiller",
    summary: "WENSUI process chillers for mould cooling and compatible plastics production services.",
    overview: [
      "Consistent cooling is essential to stable moulding dimensions and repeatable production cycles. E-One selects WENSUI air-cooled or water-cooled chillers around the heat load from the press, mould and connected equipment, together with the available site services.",
      "The WENSUI auxiliary-equipment guide gives example compressor classes for different press sizes. The final selection is based on cooling capacity in kW at the agreed water and ambient conditions, circulation flow, pump head and plant layout—not horsepower alone.",
    ],
    features: ["Air- or water-cooled process chiller options", "Controlled process-water supply temperature", "Matched pump, distribution and cooling circuit", "Single-press or central-cooling arrangements"],
    specs: [{ label: "WENSUI guide selection examples", value: "4–30 hp compressor classes; obtain cooling kW at design conditions" }],
    image: local("water-chiller"),
    imageCaption: "WENSUI process cooling equipment, supplied auxiliary-equipment selection guide.",
    specSource: `${manufacturer}/heating-and-cooling-series/air-and-water-chiller/`,
  },
];

export const injectionAncillaries: Machine[] = equipment.map((machine) => ({
  ...machine,
  category: "Auxiliary machines",
  partner: "wensui",
  specSourceLabel: "WENSUI manufacturer or catalogue reference",
}));

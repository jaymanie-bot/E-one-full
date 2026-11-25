import type { Machine } from "./catalogue-data";

const manufacturer = "https://www.wensui.us";
const photo = (path: string) => `${manufacturer}/wp-content/uploads/${path}`;

const equipment = [
  {
    slug: "servo-robot",
    title: "Servo Robot",
    summary: "Removes moulded parts and places them on a conveyor, inspection station or collection fixture.",
    overview: ["A servo-driven takeout robot synchronizes its motion with the injection press. Select the travel, payload and gripper around the part and the mould opening."],
    features: ["Three-axis servo motion", "Configurable gripping and placement", "Press and downstream equipment integration"],
    specs: [{ label: "Wensui H series payload", value: "12–100 kg, by model" }, { label: "Vertical stroke", value: "1,200–3,000 mm, by model" }],
    image: photo("2022/12/3-Axis-Robot-Arm-1-600x602.jpg"),
    specSource: `${manufacturer}/automation-series/h-series-servo-robot/`,
  },
  {
    slug: "sprue-picker",
    title: "Sprue Picker",
    summary: "Removes sprues and runners from the open mould for transfer to a collection bin or granulator.",
    overview: ["A compact swing-arm picker keeps runners separate from finished parts. Confirm the mould opening, reach and compressed-air supply before selecting the arm and gripper."],
    features: ["Pneumatic swing-arm removal", "Separate runner collection", "Gripper matched to the mould and runner"],
    specs: [{ label: "Wensui JR example vertical strokes", value: "550 or 650 mm" }, { label: "Maximum load", value: "3 kg on the referenced models" }],
    image: "https://images.squarespace-cdn.com/content/v1/65646c33af061724a35f085b/fc338190-f3d6-44c9-8777-ddf5de58c693/Wensui%2Brobotic%2Bsprue%2Bpicker.jpg.jpg",
    specSource: "https://static1.squarespace.com/static/65646c33af061724a35f085b/t/6823688feb5084092a1b074d/1747150994880/Wensui%2Bcatalog-Robot.pdf",
  },
  {
    slug: "belt-conveyor",
    title: "Belt Conveyor",
    summary: "Moves accepted parts from the injection cell to inspection, counting or packing.",
    overview: ["Belt dimensions and height are selected to suit the available floor space, part weight and robot discharge position."],
    features: ["Adjustable height", "Robot discharge integration", "Choice of belt width and conveyor length"],
    specs: [{ label: "Wensui CB belt width", value: "200–600 mm, by model" }, { label: "Maximum belt speed", value: "6 m/min on the referenced range" }],
    image: photo("2021/12/CB%E7%9A%AE%E5%B8%A6%E8%BE%93%E9%80%81%E6%9C%BA-2.png"),
    specSource: `${manufacturer}/automation-series/cb-belt-conveyor/`,
  },
  {
    slug: "granulator",
    title: "Granulator",
    summary: "Reduces suitable sprues, runners and reject parts into regrind for controlled reuse.",
    overview: ["Size the granulator around the material, scrap dimensions and expected feed rate. Confirm that the product specification permits reuse before returning regrind to production."],
    features: ["Beside-the-press configurations", "Feed matched to the type of scrap", "Optional regrind collection and conveying"],
    specs: [{ label: "Wensui WVGO reference throughput", value: "15–40 kg/h across listed models" }, { label: "Reference rotor speed", value: "24 rpm" }],
    image: photo("2021/12/05c0f7bb3b1e48bdbab97ecb9f26df78.jpg"),
    specSource: `${manufacturer}/granulating-and-recycling-series/wsgo-low-speed-granulator/`,
  },
  {
    slug: "dust-separation-system",
    title: "Dust Separation System",
    summary: "Separates fines from regrind and transfers the collected material after granulation.",
    overview: ["Select a dust separation system around the granulator output, conveying lift and expected fines. Keep the collected fines separate from reusable material."],
    features: ["Regrind collection after granulation", "Separate dust collection", "Granulator and conveying integration"],
    specs: [{ label: "Wensui RFF motor range", value: "1.5–5.5 kW, by model" }, { label: "Reference conveying height", value: "3–5 m, by model" }],
    image: photo("2021/12/59c43d15ceb242079eb2ccea63ccd89f.jpg"),
    specSource: `${manufacturer}/granulating-and-recycling-series/rff-series-dust-separating-system/`,
  },
  {
    slug: "dehumidifier",
    title: "Dehumidifier",
    summary: "Supplies low-dew-point process air for drying moisture-sensitive resins such as PET.",
    overview: ["Specify the drying air against resin requirements, material throughput and the connected hopper. Verify the target dew point under the expected operating conditions."],
    features: ["Desiccant rotor system", "Controlled drying temperature", "Optional dew-point monitoring on the referenced range"],
    specs: [{ label: "Wensui VD80H–VD300H examples", value: "80–300 m³/h of hot-air flow" }, { label: "Published dew point", value: "Below −40 °C under specified conditions" }],
    image: photo("2022/12/low-energy-dehumidifier.jpg"),
    specSource: `${manufacturer}/drying-and-dehumidifying-series/vd-desiccant-rotor-dehumidifier/`,
  },
  {
    slug: "hopper-dryer",
    title: "Hopper Dryer",
    summary: "Holds and heats resin before moulding, with drying equipment selected for the material.",
    overview: ["Hopper volume and heater duty depend on the resin, residence time and throughput. Pair the hopper with dehumidified air when the resin specification calls for it."],
    features: ["Temperature control", "Material-level inspection window on the reference range", "Machine-mounted or stand integration as configured"],
    specs: [{ label: "Wensui WSDB rated hopper capacity", value: "12–800 kg, based on PA6 granules" }, { label: "Heating power", value: "1.6–30 kW, by model" }],
    image: photo("2021/12/de8513bfbcc14e8eaeca49cdff57a213.jpg"),
    specSource: `${manufacturer}/drying-and-dehumidifying-series/wsdb-standard-hopper-dryer/`,
  },
];

export const injectionAncillaries: Machine[] = equipment.map((machine) => ({
  ...machine,
  category: "Auxiliary machines",
}));

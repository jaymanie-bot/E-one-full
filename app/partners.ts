export const partners = {
  hwamda: {
    name: "HWAMDA",
    logo: "/eone/hwamda/logo.webp",
    role: "Principal injection machinery partner",
    description: "Servo-hydraulic injection presses, dedicated PET preform platforms and thin-wall pail machines.",
    href: "/solutions/plastic-injection-cap-compression-machines",
  },
  wensui: {
    name: "WENSUI",
    logo: "/eone/wensui.webp",
    role: "Principal injection ancillary partner",
    description: "Resin feeding and drying, cooling, robotic takeout, conveying and plastics recycling equipment.",
    href: "/solutions/plastic-injection-cap-compression-machines#ancillary-machines",
  },
  heyan: {
    name: "Heyan Moulds",
    logo: "/eone/heyan/logo.webp",
    role: "Principal precision mould partner",
    description: "Custom preform, bottle-blowing, cap, handle and lifting-ring moulds, with tooling support.",
    href: "/solutions/moulds",
  },
  bestcrown: {
    name: "Best Crown",
    logo: "/eone/bestcrown/logo.webp",
    role: "Principal beverage filling turnkey partner",
    description: "Complete bottled-water, carbonated, sensitive-beverage, juice and dairy line configurations.",
    href: "/solutions/turnkey-beverage",
  },
  yizumi: {
    name: "Yizumi",
    logo: "/eone/partner-2.webp",
    role: "Technology partner",
    description: "",
    href: undefined,
  },
} as const;

export type PartnerKey = keyof typeof partners;
export type EquipmentPartnerKey = Exclude<PartnerKey, "yizumi">;
export const principalPartners = ["hwamda", "wensui", "heyan", "bestcrown"] as const;
export const partnerOrder: PartnerKey[] = [...principalPartners, "yizumi"];

export type TechnicalTable = {
  title: string;
  columns: string[];
  rows: string[][];
  note: string;
};

export type BuyerGuide = {
  application: string;
  sizing: Record<string, string>;
  enquiry: string[];
  question: string;
  answer: string;
  table?: TechnicalTable;
};

export const preformPressTable: TechnicalTable = {
  title: "Hwamda HMD PET series",
  columns: ["Model", "Clamp force (kN)", "PET shot weight (g)", "PET injection rate (g/s)", "Tie-bar clearance H × V (mm)", "Mould thickness (mm)"],
  rows: [
    ["HMD218PET", "2,180", "1,000–1,247", "381–479", "530 × 530", "200–550"],
    ["HMD268PET", "2,680", "1,290–1,616", "478–599", "580 × 580", "220–600"],
    ["HMD320PET", "3,200", "1,932–4,487", "568–773", "680 × 680", "250–670"],
    ["HMD430PET", "4,300", "3,297–4,487", "710–966", "760 × 730", "280–820"],
    ["HMD500PET", "5,000", "3,673–8,380", "905–1,075", "830 × 830", "300–860"],
  ],
  note: "Figures from the Hwamda PET catalogue, May 2025, pp. 13–17. The ranges span listed injection-unit and screw options. Confirm usable shot, injection rate and mould fit for the selected unit.",
};

export const pailPressTable: TechnicalTable = {
  title: "Hwamda HMD M8-SII pail series",
  columns: ["Model", "Clamp force (kN)", "PS reference shot (g)", "PS injection rate (g/s)", "Tie-bar clearance H × V (mm)", "Mould thickness (mm)"],
  rows: [
    ["HMD430M8-SII", "4,300", "1,646", "591", "760 × 730", "250–730"],
    ["HMD500M8-SII", "5,000", "1,858", "680", "830 × 830", "300–820"],
    ["HMD600M8-SII", "6,000", "2,324", "685", "900 × 880", "300–900"],
    ["HMD700M8-SII", "7,000", "2,903", "877", "970 × 930", "350–960"],
    ["HMD800M8-SII", "8,000", "3,225", "921", "1,020 × 1,000", "350–1,000"],
  ],
  note: "Figures from the Hwamda paint-bucket catalogue, July 2025, pp. 5–6. Shot weights and injection rates use polystyrene (PS). Confirm usable shot and injection performance for your actual resin grade.",
};

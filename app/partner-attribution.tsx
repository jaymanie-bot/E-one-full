import { partners, type EquipmentPartnerKey } from "./partners";

export function PartnerAttribution({ partner }: { partner: EquipmentPartnerKey }) {
  const brand = partners[partner];
  return (
    <div className="equipment-partner">
      <img src={brand.logo} alt="" />
      <div><strong>{brand.name}</strong><span>E-One’s {brand.role.toLowerCase()}</span></div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Settings2 } from "lucide-react";

export function MachinePicture({ image, title, fallbackImage }: { image: string; title: string; fallbackImage?: string }) {
  const [failedImages, setFailedImages] = useState<string[]>([]);
  if (!image) {
    return <span className="machine-config-visual" aria-hidden="true"><Settings2 size={36} /></span>;
  }
  const src = [image, fallbackImage].find((candidate) => candidate && !failedImages.includes(candidate));
  if (!src) return <span className="machine-photo-fallback">Equipment photo unavailable</span>;
  return <img src={src} alt={title} loading="lazy" onError={() => setFailedImages((previous) => [...previous, src])} />;
}

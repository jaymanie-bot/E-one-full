"use client";

import { useState } from "react";
import { Settings2 } from "lucide-react";

export function MachinePicture({ image, title }: { image: string; title: string }) {
  const [failedImage, setFailedImage] = useState("");
  if (!image) {
    return <span className="machine-config-visual" aria-hidden="true"><Settings2 size={36} /></span>;
  }
  if (failedImage === image) {
    return <span className="machine-photo-fallback">Equipment photo unavailable</span>;
  }
  return <img src={image} alt={title} loading="lazy" onError={() => setFailedImage(image)} />;
}

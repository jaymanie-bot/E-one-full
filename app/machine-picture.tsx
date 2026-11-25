"use client";

import { useState } from "react";

export function MachinePicture({ image, title }: { image: string; title: string }) {
  const [failedImage, setFailedImage] = useState("");
  if (!image || failedImage === image) {
    return <span className="machine-photo-fallback">Equipment photo unavailable</span>;
  }
  return <img src={image} alt={title} loading="lazy" onError={() => setFailedImage(image)} />;
}

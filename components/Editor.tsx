"use client";

import { useState } from "react";
import Controls from "./Controls";
import Preview from "./Preview";
import { generatePdf } from "../utils/generatePdf";

export default function Editor() {
  const [name, setName] = useState("Jordan Hayes");
  const [textTop, setTextTop] = useState(120);
  const [font, setFont] = useState<"print" | "dotted" | "cursive">("print");

  const handleDownload = () => {
    const container = document.querySelector<HTMLElement>(
      "[data-preview-container]"
    );
    const textElement = document.querySelector<HTMLElement>(
      "[data-preview-text]"
    );

    if (!container || !textElement) {
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const textRect = textElement.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(textElement);
    const fontSizePx = parseFloat(computedStyle.fontSize) || 32;
    const paddingTop = parseFloat(computedStyle.paddingTop) || 0;
    const fontFamily = computedStyle.fontFamily;
    const fontWeight = computedStyle.fontWeight;

    let ascent = fontSizePx * 0.8;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (context) {
      context.font = `${fontWeight} ${fontSizePx}px ${fontFamily}`;
      const metrics = context.measureText(textElement.textContent || name);
      if (metrics.actualBoundingBoxAscent) {
        ascent = metrics.actualBoundingBoxAscent;
      }
    }

    const baselinePx =
      textRect.top - containerRect.top + paddingTop + ascent;

    generatePdf({
      name,
      font,
      containerHeight: containerRect.height,
      baselinePx,
      fontSizePx,
    });
  };

  return (
    <section className="grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
      <Controls
        name={name}
        onNameChange={setName}
        font={font}
        onFontChange={(value) => setFont(value as "print" | "dotted" | "cursive")}
        onDownload={handleDownload}
      />
      <Preview
        name={name}
        textTop={textTop}
        onTextTopChange={setTextTop}
        font={font}
      />
    </section>
  );
}

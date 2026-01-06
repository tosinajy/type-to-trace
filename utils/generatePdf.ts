import { jsPDF } from "jspdf";

type HandwritingFont = "print" | "dotted" | "cursive";

type GeneratePdfOptions = {
  name: string;
  font: HandwritingFont;
  containerHeight: number;
  baselinePx: number;
  fontSizePx: number;
};

const PAGE_WIDTH_PT = 612;
const PAGE_HEIGHT_PT = 792;

const fontMap: Record<HandwritingFont, "helvetica" | "courier" | "times"> = {
  print: "helvetica",
  dotted: "courier",
  cursive: "times",
};

export function generatePdf({
  name,
  font,
  containerHeight,
  baselinePx,
  fontSizePx,
}: GeneratePdfOptions) {
  const doc = new jsPDF({
    unit: "pt",
    format: "letter",
  });

  const marginX = 54;
  const marginY = 72;
  const contentWidth = PAGE_WIDTH_PT - marginX * 2;
  const contentHeight = PAGE_HEIGHT_PT - marginY * 2;

  doc.setDrawColor(209, 213, 219);
  doc.setLineWidth(0.6);

  const guideStart = 0.12;
  const guideStep = 0.07;
  const guideCount = 12;

  for (let i = 0; i < guideCount; i += 1) {
    const y = marginY + (guideStart + guideStep * i) * contentHeight;
    doc.line(marginX, y, marginX + contentWidth, y);
  }

  const baselineRatio = containerHeight > 0 ? baselinePx / containerHeight : 0.3;
  const baselineY = marginY + baselineRatio * contentHeight;
  const fontSizePt = fontSizePx * (72 / 96);

  doc.setFont(fontMap[font], "normal");
  doc.setFontSize(fontSizePt);
  doc.setTextColor(17, 24, 39);

  doc.text(name || " ", marginX, baselineY, { baseline: "alphabetic" });
  doc.save("worksheet.pdf");
}

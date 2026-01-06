import { create } from "zustand";

type AppState = {
  name: string;
  font: string;
  fontSize: number;
  lineColor: string;
  setName: (name: string) => void;
  setFont: (font: string) => void;
  setFontSize: (fontSize: number) => void;
  setLineColor: (lineColor: string) => void;
};

const useAppStore = create<AppState>((set) => ({
  name: "Type to Trace",
  font: "Inter",
  fontSize: 20,
  lineColor: "#111827",
  setName: (name) => set({ name }),
  setFont: (font) => set({ font }),
  setFontSize: (fontSize) => set({ fontSize }),
  setLineColor: (lineColor) => set({ lineColor }),
}));

export default useAppStore;

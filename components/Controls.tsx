"use client";

type ControlsProps = {
  name: string;
  onNameChange: (value: string) => void;
  font: string;
  onFontChange: (value: string) => void;
};

export default function Controls({
  name,
  onNameChange,
  font,
  onFontChange,
}: ControlsProps) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Controls
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-100">
          Live Editor
        </h2>
      </div>

      <label className="flex flex-col gap-2 text-sm text-slate-300">
        Name
        <input
          className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300/40"
          type="text"
          value={name}
          onChange={(event) => onNameChange(event.target.value)}
          placeholder="Type a name"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm text-slate-300">
        Handwriting font
        <select
          className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white focus:outline-none focus:ring-2 focus:ring-slate-300/40"
          value={font}
          onChange={(event) => onFontChange(event.target.value)}
        >
          <option value="print">Print</option>
          <option value="dotted">Dotted</option>
          <option value="cursive">Cursive</option>
        </select>
      </label>

      <p className="text-sm text-slate-400">
        Typing updates the worksheet preview instantly. Drag the text block on
        the right to position it vertically.
      </p>
    </div>
  );
}

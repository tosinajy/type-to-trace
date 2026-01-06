"use client";

type ControlsProps = {
  name: string;
  onNameChange: (value: string) => void;
};

export default function Controls({ name, onNameChange }: ControlsProps) {
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

      <p className="text-sm text-slate-400">
        Typing updates the worksheet preview instantly. Drag the text block on
        the right to position it vertically.
      </p>
    </div>
  );
}

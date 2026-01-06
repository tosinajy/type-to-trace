"use client";

import useAppStore from "./store";

export default function Home() {
  const { name, font, fontSize, lineColor } = useAppStore();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#1f2937,_#0b0c10_55%)] px-6 py-16 text-slate-100">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-10">
        <header className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Next.js 14 + Tailwind + Zustand
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Type-to-Trace UI Starter
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            This starter wires up App Router, Tailwind CSS, Zustand, and
            Cloudflare Pages support. Customize the store values to drive the
            tracing experience.
          </p>
        </header>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.7)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Store Preview
              </p>
              <h2 className="text-2xl font-semibold">{name}</h2>
            </div>
            <span className="rounded-full border border-white/15 px-4 py-1 text-sm text-slate-300">
              Zustand ready
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm text-slate-400">Font</p>
              <p className="text-lg font-medium">{font}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm text-slate-400">Font size</p>
              <p className="text-lg font-medium">{fontSize}px</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm text-slate-400">Line color</p>
              <div className="mt-2 flex items-center gap-3">
                <span
                  className="h-6 w-6 rounded-full"
                  style={{ backgroundColor: lineColor }}
                />
                <p className="text-lg font-medium">{lineColor}</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm text-slate-400">Status</p>
              <p className="text-lg font-medium">Ready to trace</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

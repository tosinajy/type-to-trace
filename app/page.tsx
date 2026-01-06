import Editor from "../components/Editor";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#1f2937,_#0b0c10_60%)] px-6 py-16 text-slate-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <header className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Real-Time Handwriting Editor
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Type to Trace, Instantly
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            Type a name to see the worksheet preview update immediately. Drag
            the text block vertically to place it on the guide lines.
          </p>
        </header>

        <Editor />
      </main>
    </div>
  );
}

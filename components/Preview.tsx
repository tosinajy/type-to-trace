"use client";

import { useRef } from "react";

type PreviewProps = {
  name: string;
  textTop: number;
  onTextTopChange: (value: number) => void;
};

type DragState = {
  startY: number;
  startTop: number;
  dragging: boolean;
};

export default function Preview({
  name,
  textTop,
  onTextTopChange,
}: PreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<DragState>({
    startY: 0,
    startTop: 0,
    dragging: false,
  });

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragState.current = {
      startY: event.clientY,
      startTop: textTop,
      dragging: true,
    };
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.dragging) {
      return;
    }

    const dy = event.clientY - dragState.current.startY;
    const nextTop = dragState.current.startTop + dy;
    const containerHeight = containerRef.current?.clientHeight ?? 0;
    const textHeight = textRef.current?.clientHeight ?? 0;
    const maxTop = Math.max(0, containerHeight - textHeight);
    const clampedTop = Math.max(0, Math.min(maxTop, nextTop));

    onTextTopChange(clampedTop);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragState.current.dragging) {
      event.currentTarget.releasePointerCapture(event.pointerId);
      dragState.current.dragging = false;
    }
  };

  return (
    <div className="flex h-full flex-col gap-6">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Worksheet Preview
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-100">
          Live Output
        </h2>
      </div>

      <div
        ref={containerRef}
        className="relative flex-1 rounded-[32px] border border-white/10 bg-white/95 p-10 text-slate-900 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.45)]"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <line
              key={`guide-${index}`}
              x1="6"
              x2="94"
              y1={`${12 + index * 7}%`}
              y2={`${12 + index * 7}%`}
              stroke="#d1d5db"
              strokeWidth="0.6"
            />
          ))}
        </svg>

        <div
          ref={textRef}
          className="absolute left-12 right-12 cursor-grab select-none rounded-2xl border border-slate-200 bg-white/90 px-6 py-4 text-3xl font-semibold shadow-sm active:cursor-grabbing"
          style={{ top: textTop }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {name || "Type a name on the left"}
        </div>
      </div>
    </div>
  );
}

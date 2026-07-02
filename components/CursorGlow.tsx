"use client";

import { MouseEvent, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function CursorGlow() {
  const reduced = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0, visible: false });

  if (reduced) return null;

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPos({ x: event.clientX - rect.left, y: event.clientY - rect.top, visible: true });
  };

  return (
    <div className="absolute inset-0" onMouseMove={onMove} onMouseLeave={() => setPos((value) => ({ ...value, visible: false }))}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(184,242,78,.15),transparent_68%)] transition-opacity duration-300"
        style={{ left: pos.x, top: pos.y, opacity: pos.visible ? 1 : 0 }}
      />
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

type NodePoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

function clamp(min: number, value: number, max: number) {
  return Math.max(min, Math.min(value, max));
}

function accentRgb() {
  if (typeof window === "undefined") return "184,242,78";
  const value = getComputedStyle(document.documentElement).getPropertyValue("--accent-rgb").trim();
  return value || "184,242,78";
}

export function NeuralCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes: NodePoint[] = [];
    let rgb = accentRgb();

    const rebuild = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rgb = accentRgb();

      const count = clamp(22, Math.round((width * height) / 16000), 66);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.24 * dpr,
        vy: (Math.random() - 0.5) * 0.24 * dpr
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x <= 0 || node.x >= width) node.vx *= -1;
        if (node.y <= 0 || node.y >= height) node.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < 150) {
            ctx.strokeStyle = `rgba(${rgb},${(1 - distance / 150) * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        ctx.fillStyle = `rgba(${rgb},0.72)`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5 * dpr, 0, Math.PI * 2);
        ctx.fill();
      }

      frame = requestAnimationFrame(draw);
    };

    rebuild();
    draw();
    window.addEventListener("resize", rebuild);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", rebuild);
    };
  }, [reduced]);

  if (reduced) return null;

  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 h-full w-full opacity-55" />;
}

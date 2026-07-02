"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

type CountUpProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function formatValue(value: number) {
  return Math.round(value).toLocaleString("en-US");
}

export function CountUp({ value, suffix = "", prefix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();
  const [current, setCurrent] = useState(reduced ? value : 0);

  useEffect(() => {
    if (reduced) {
      setCurrent(value);
      return;
    }

    if (!inView) return;

    let frame = 0;
    const duration = 1500;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCurrent(value * easeOutCubic(progress));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatValue(current)}
      {suffix}
    </span>
  );
}

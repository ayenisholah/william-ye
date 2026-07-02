"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

type TypewriterProps = {
  words: string[];
};

export function Typewriter({ words }: TypewriterProps) {
  const reduced = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(words[0] ?? "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced || words.length === 0) {
      setVisible(words[0] ?? "");
      return;
    }

    const word = words[wordIndex];
    const full = visible === word;
    const empty = visible.length === 0;
    const delay = full && !deleting ? 1500 : deleting ? 42 : 82;

    const timer = window.setTimeout(() => {
      if (!deleting && full) {
        setDeleting(true);
        return;
      }
      if (deleting && empty) {
        setDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
        return;
      }
      setVisible((current) => (deleting ? current.slice(0, -1) : word.slice(0, current.length + 1)));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, reduced, visible, wordIndex, words]);

  return (
    <span className="inline-flex items-baseline text-accent">
      <span>{visible}</span>
      <span className="ml-1 inline-block h-[1em] w-[2px] translate-y-[2px] animate-[caret_1s_step-end_infinite] bg-accent" />
    </span>
  );
}

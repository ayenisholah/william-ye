"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px", amount: 0.12 }}
      transition={{ duration: 0.75, ease: [0.22, 0.7, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

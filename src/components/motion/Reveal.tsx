"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { REVEAL_MOTION } from "@/constants/motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
};

export default function Reveal({
  children,
  delay = 0,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={REVEAL_MOTION.initial}
      whileInView={REVEAL_MOTION.animate}
      viewport={REVEAL_MOTION.viewport}
      transition={{
        ...REVEAL_MOTION.transition,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
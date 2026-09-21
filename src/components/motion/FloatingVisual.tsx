"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { FLOATING_MOTION } from "@/constants/motion";

type FloatingVisualProps = {
  children: ReactNode;
};

export default function FloatingVisual({
  children,
}: FloatingVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        shouldReduceMotion
          ? undefined
          : { y: FLOATING_MOTION.y }
      }
      transition={
        shouldReduceMotion
          ? undefined
          : FLOATING_MOTION.transition
      }
    >
      {children}
    </motion.div>
  );
}
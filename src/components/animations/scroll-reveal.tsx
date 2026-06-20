"use client";

import { motion, type TargetAndTransition } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
}

const directions: Record<
  NonNullable<ScrollRevealProps["direction"]>,
  TargetAndTransition
> = {
  up: { y: 80, opacity: 0 },
  down: { y: -80, opacity: 0 },
  left: { x: 80, opacity: 0 },
  right: { x: -80, opacity: 0 },
};

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.8,
}: ScrollRevealProps) {
  return (
    <motion.div
      {...(className !== undefined ? { className } : {})}
      initial={directions[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

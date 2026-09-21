export const FLOATING_MOTION = {
  y: [0, -10, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const REVEAL_MOTION = {
  initial: {
    opacity: 0,
    y: 24,
  },

  animate: {
    opacity: 1,
    y: 0,
  },

  transition: {
    duration: 0.7,
    ease: "easeOut" as const,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },
};
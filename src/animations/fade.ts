// src/animations/fade.ts
import type { Variants } from "framer-motion";
import { easeInOut } from "framer-motion";

export const fadeInOut: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: easeInOut },
  },
};

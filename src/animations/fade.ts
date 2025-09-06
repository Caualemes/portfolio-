// src/animations/fade.ts
export const fadeInOut = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
};

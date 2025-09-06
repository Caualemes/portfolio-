// src/sections/Technologies.tsx
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import figmaLogo from "../assets/figma.svg";
import nestLogo from "../assets/nest.svg";
import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/tailwind.svg";
import typescriptLogo from "../assets/typescript.svg";

interface TechnologiesProps {
  onInView: (id: string) => void;
}

const logos = [
  { src: nestLogo, alt: "NestJS" },
  { src: reactLogo, alt: "React" },
  { src: typescriptLogo, alt: "TypeScript" },
  { src: tailwindLogo, alt: "Tailwind CSS" },
  { src: figmaLogo, alt: "Figma" },
];

const Technologies: React.FC<TechnologiesProps> = ({ onInView }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      onInView("technologies");
      controls.start({ opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } });
    } else {
      controls.start({ opacity: 0, y: 0 });
    }
  }, [inView, controls, onInView]);

  return (
    <section
      ref={ref}
      id="technologies"
      className="flex flex-col items-center justify-center min-h-screen p-8 text-white"
    >
      <motion.h2
        className="text-4xl font-bold mb-16 md:mb-32"
        initial={{ opacity: 0, y: 0 }}
        animate={controls}
      >
        Tecnologias
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-y-8 md:gap-x-12">
        {logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="w-16 h-16 sm:w-24 sm:h-24"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.5 } : { opacity: 0 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        ))}
      </div>
    </section>
  );
};

export default Technologies;

// src/sections/Hero.tsx
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInOut } from "../animations/fade";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInOut}
      className="flex flex-col items-center justify-center min-h-screen text-center p-8 text-white"
    >
      <div>
        <img
          src="/src/assets/avatar.png"
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal mb-2">
        Cauã Lemes
      </h1>
      <p className="text-xl sm:text-2xl text-gray-400 mb-8">Web Developer</p>

      <div className="flex space-x-6">
        <a href="https://www.linkedin.com/in/caualemes" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/linkedin.svg" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform" />
        </a>
        <a href="https://www.instagram.com/caua.cristallemes/" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/instagram.svg" alt="Instagram" className="w-8 h-8 hover:scale-110 transition-transform" />
        </a>
        <a href="https://github.com/caualemes" target="_blank" rel="noopener noreferrer">
          <img src="/src/assets/github.svg" alt="GitHub" className="w-8 h-8 hover:scale-110 transition-transform" />
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;

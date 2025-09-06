import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInOut } from "../animations/fade";
import ecoPowerImage from "../assets/eco-power-screenshot.png";

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      id="projects"
      initial="hidden"
      animate={controls}
      variants={fadeInOut}
      className="flex flex-col items-center min-h-screen p-8 text-white"
    >
      <h2 className="text-4xl font-bold mb-12">Meus Projetos</h2>

      <div className="rounded-2xl shadow-lg p-6 w-full max-w-4xl flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img src={ecoPowerImage} alt="Screenshot do projeto EcoPower" className="rounded-lg shadow-md" />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-normal mb-2">EcoPower</h3>
          <p className="text-gray-300 mb-4">
            Site institucional desenvolvido para a filial de Penápolis da maior empresa de energia solar do Brasil.
            O projeto destaca os serviços oferecidos, conta com design responsivo e formulário de contato, trazendo
            uma experiência moderna e intuitiva para os clientes.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
            <span className="bg-white/5 px-2.5 py-0.5 rounded-full text-xs font-normal">HTML</span>
            <span className="bg-white/5 px-2.5 py-0.5 rounded-full text-xs font-normal">CSS</span>
            <span className="bg-white/5 px-2.5 py-0.5 rounded-full text-xs font-normal">JavaScript</span>
          </div>
        </div>
      </div>

      <div className="text-xl text-gray-400 mt-12">Em breve...</div>
    </motion.section>
  );
};

export default Projects;

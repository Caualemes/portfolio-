// src/sections/Projects.tsx
import { useEffect } from "react";
import { motion, useAnimation, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInOut } from "../animations/fade";
import ecoPowerImage from "../assets/eco-power-screenshot.png";

interface ProjectsProps {
  onInView: (id: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onInView }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      onInView("projects");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls, onInView]);

  return (
    <motion.section
      ref={ref}
      id="projects"
      initial="hidden"
      animate={controls}
      variants={fadeInOut}
      className="flex flex-col items-center min-h-screen px-4 py-16 md:p-8 text-white"
    >
      <h2 className="text-4xl font-bold mb-8 md:mb-12">Meus Projetos</h2>

      <div className="bg-white/5 rounded-2xl p-4 md:p-6 w-full max-w-4xl flex flex-col md:flex-row items-center gap-8">
        <motion.a
          href="https://ecopowerpenapolis.com.br"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: easeInOut }}
          className="flex-shrink-0 w-full md:w-1/2 block"
        >
          <img
            src={ecoPowerImage}
            alt="Screenshot do projeto EcoPower"
            className="rounded-lg shadow-md"
          />
        </motion.a>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-normal mb-2">EcoPower</h3>
          <p className="text-gray-300 mb-4 text-justify">
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

      <div className="text-xl text-gray-400 mt-8 md:mt-12">Em breve...</div>
    </motion.section>
  );
};

export default Projects;
